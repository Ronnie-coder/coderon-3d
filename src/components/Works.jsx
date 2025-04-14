import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const services = [
  {
    title: "Responsive Web Design",
    icon: "./img/responsive-icon.png",
    image: "./img/works.png",
    description: "Creating websites that work beautifully across all devices"
  },
  {
    title: "JavaScript Development",
    icon: "./img/js-icon.png",
    image: "./img/work3.png",
    description: "Building interactive and dynamic web applications"
  },
  {
    title: "UI/UX Design",
    icon: "./img/uiux-icon.png",
    image: "./img/work4.png",
    description: "Crafting beautiful and user-friendly interfaces"
  },
  {
    title: "Single Page Applications",
    icon: "./img/spa-icon.png",
    image: "./img/work7.png",
    description: "Developing modern, fast-loading single page apps"
  },
  {
    title: "Performance Optimization",
    icon: "./img/performance-icon.png",
    image: "./img/work8.png",
    description: "Optimizing websites for maximum speed and efficiency"
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const modalFadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
  margin-top: 100vh;
  padding-top: 100px;

  @media (max-width: 768px) {
    margin-top: 0;
    padding-top: 60px;
  }
`;

const Container = styled.div`
  width: min(90%, 1400px);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 40px;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: #da4ea2;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  font-size: 20px;
  color: #333;
  margin: 15px 0;
  position: relative;
  padding-left: 35px;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &::before {
    content: '✔';
    color: #da4ea2;
    position: absolute;
    left: 0;
    font-size: 20px;
  }

  &:hover {
    transform: translateX(10px);
    color: #da4ea2;
  }

  .description {
    font-size: 14px;
    color: #666;
    margin-top: 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .description {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding-left: 25px;

    &::before {
      font-size: 16px;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 15px;
`;

const ImageWrapper = styled.div`
  aspect-ratio: 16/9;
  width: 100%;
  position: relative;
  background: #f0f0f0;
`;

const ImageSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #f8f8f8 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`;

const StyledImage = styled.img.attrs(props => ({
  width: '800',
  height: '450',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  animation: ${modalFadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90vh;
  position: relative;
`;

const ModalWrapper = styled.div`
  aspect-ratio: 16/9;
  width: 90%;
  max-width: 1200px;
  position: relative;
  background: #f0f0f0;
  margin: 0 auto;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  background: #da4ea2;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: #c43d91;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: -50px;
    right: 0;
  }
`;

const Works = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImage = (index) => {
      const img = new Image();
      img.src = services[index].image;
    };

    // Preload next image
    const nextIndex = (currentImageIndex + 1) % services.length;
    preloadImage(nextIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isModalOpen) {
        setCurrentImageIndex((prev) => 
          prev === services.length - 1 ? 0 : prev + 1
        );
        setImageLoaded(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isModalOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoad = (e) => {
    setImageLoaded(true);
    e.target.style.opacity = 1;
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Section>
      <Container>
        <Left>
          <Title>Innovative Solutions</Title>
          <List>
            {services.map((service, index) => (
              <ListItem 
                key={index}
                onMouseEnter={() => setCurrentImageIndex(index)}
              >
                {service.title}
                <div className="description">{service.description}</div>
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <ImageContainer onClick={handleImageClick}>
            <ImageWrapper>
              {!imageLoaded && <ImageSkeleton />}
              <StyledImage 
                src={imageError ? './img/fallback.png' : services[currentImageIndex].image}
                alt={services[currentImageIndex].title}
                loading="lazy"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ opacity: 0 }}
              />
            </ImageWrapper>
          </ImageContainer>
        </Right>
      </Container>

      <Modal $isOpen={isModalOpen} onClick={handleCloseModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalWrapper>
            <ModalImage 
              src={services[currentImageIndex].image} 
              alt={services[currentImageIndex].title}
              loading="lazy"
              onError={handleImageError}
            />
          </ModalWrapper>
          <CloseButton onClick={handleCloseModal}>×</CloseButton>
        </ModalContent>
      </Modal>
    </Section>
  );
};

export default Works;