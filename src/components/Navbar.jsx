import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Section = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  
  @media (max-width: 1200px) {
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Container = styled(motion.div)`
  width: min(95%, 1400px);
  display: flex;
  align-items: center;
  padding: 10px 0px;
  gap: 120px;
  max-width: 100%;
  justify-content: space-between;

  @media (max-width: 1200px) {
    gap: 80px;
  }

  @media (max-width: 992px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 15px;
    justify-content: center;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Logo = styled(motion.img)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 992px) {
    height: 90px;
    width: 90px;
  }

  @media (max-width: 768px) {
    height: 70px;
    width: 70px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
  }
`;

const List = styled(motion.ul)`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 992px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ListItem = styled(motion.li)`
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 5px 10px;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #da4ea2;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
  }
`;

const Icons = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 992px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const SocialIcon = styled(motion.a)`
  color: #666;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #da4ea2;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Button = styled(motion.button)`
  width: 120px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;

  @media (max-width: 992px) {
    width: 110px;
    padding: 8px;
  }

  @media (max-width: 768px) {
    width: 100px;
    padding: 7px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 90px;
    padding: 6px;
    font-size: 12px;
  }
`;

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const linkVariants = {
    rest: { 
      scale: 1,
      color: "#000"
    },
    hover: { 
      scale: 1.05,
      color: "#da4ea2",
      transition: { 
        duration: 0.2 
      }
    },
    tap: { 
      scale: 0.95 
    },
    active: {
      scale: 1.1,
      color: "#da4ea2",
      transition: { duration: 0.2 }
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/coderon-coderon-8b302b360/", Icon: FaLinkedin },
    { href: "https://www.instagram.com/_coderon/", Icon: FaInstagram },
    { href: "https://www.facebook.com/profile.php?id=61573920789201", Icon: FaFacebook },
    { href: "https://wa.me/27678184898", Icon: FaWhatsapp },
  ];

  return (
    <Section
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <NavLinks variants={itemVariants}>
          <Logo 
            src="./img/coderon.png" 
            alt="CodeRon Web Development" 
            whileHover={{ rotate: 360, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          />
          <List>
            {navLinks.map((link, index) => (
              <ListItem 
                key={link.href}
                variants={itemVariants}
              >
                <NavLink
                  href={link.href}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  animate={activeLink === index ? "active" : "rest"}
                  onClick={() => setActiveLink(index)}
                  aria-label={link.label}
                >
                  {link.label}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </NavLinks>
        <Icons variants={itemVariants}>
          {socialLinks.map(({ href, Icon }) => (
            <SocialIcon
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </SocialIcon>
          ))}
          <Button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ff69b4"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's|Create→
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;