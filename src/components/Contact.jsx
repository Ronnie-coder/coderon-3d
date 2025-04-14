import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 120px 0 2rem 0;
  border-top: 1px solid rgba(218, 78, 162, 0.1);

  @media (max-width: 480px) {
    padding: 80px 0 1rem 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  position: relative;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    margin-top: 10px;
  }
`;

const Title = styled(motion.h1)`
  font-weight: 200;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #da4ea2, #e66fb7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(218, 78, 162, 0.1);
  border: 1px solid rgba(218, 78, 162, 0.1);

  @media (max-width: 480px) {
    padding: 20px;
    gap: 15px;
  }
`;

const Input = styled(motion.input)`
  padding: 20px;
  background-color: rgba(232, 230, 230, 0.95);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #da4ea2;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px;
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 20px;
  background-color: rgba(232, 230, 230, 0.95);
  border: none;
  border-radius: 10px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #da4ea2;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px;
    min-height: 80px;
  }
`;

const Button = styled(motion.button)`
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px;
  }
`;

const Notification = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 25px;
  border-radius: 10px;
  color: white;
  background: ${props => props.success ? '#4CAF50' : '#f44336'};
  z-index: 1000;

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    right: 5%;
    padding: 10px 15px;
    top: 10px;
  }
`;

const validateForm = (values) => {
  const errors = {};
  if (!values.name) errors.name = 'Name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.message) errors.message = 'Message is required';
  return errors;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Send email using EmailJS
        await emailjs.send(
          'service_bm0xsb6', // Your EmailJS service ID
          'template_qtnklb8', // Your EmailJS template ID
          formData,
          'bs0vD7JROL4I_jBDz' // Your EmailJS public key
        );
        setNotification({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setNotification({ type: 'error', message: 'Failed to send message.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <FormContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title>Contact Us</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                error={errors.name}
              />
              {errors.name && <span style={{ color: '#f44336', fontSize: '14px' }}>{errors.name}</span>}
              
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                error={errors.email}
              />
              {errors.email && <span style={{ color: '#f44336', fontSize: '14px' }}>{errors.email}</span>}
              
              <TextArea
                name="message"
                placeholder="Write your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                error={errors.message}
              />
              {errors.message && <span style={{ color: '#f44336', fontSize: '14px' }}>{errors.message}</span>}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </Form>
          </FormContainer>
        </Left>
      </Container>

      <AnimatePresence>
        {notification && (
          <Notification
            success={notification.type === 'success'}
            initial={{ opacity: 0, y: -50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            {notification.message}
          </Notification>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;