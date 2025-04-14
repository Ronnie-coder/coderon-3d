import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Navbar from './Navbar';
import Cube from './Cube';

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Section = styled(motion.div)`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.9) 0%, 
    rgba(245, 245, 245, 0.8) 100%
  );

  @media (max-width: 768px) {
    padding-top: 60px;
    height: auto;
    min-height: 100vh;
  }
`;

const Container = styled(motion.div)`
  height: calc(100vh - 80px);
  scroll-snap-align: center;
  width: 680px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 0 20px;
    margin-top: 0;
  }
`;

const Left = styled(motion.div)`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  background: linear-gradient(
    to right, 
    #000000, 
    #da4ea2
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const WhatWeDo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Line = styled(motion.img)`
  height: 5px;
  width: 40px;

  @media (max-width: 768px) {
    width: 30px;
  }
`;

const Subtitle = styled(motion.h2)`
  color: #da4ea2; 
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Desc = styled(motion.p)`
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const Button = styled(motion.button)`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg, 
      transparent, 
      rgba(255, 255, 255, 0.3), 
      transparent
    );
    transition: all 0.6s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    width: 200px;
    padding: 10px;
    font-size: 14px;
  }
`;

const Right = styled(motion.div)`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex: 1;
    margin-top: 20px;
  }
`;

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar />
      <Container 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Left variants={containerVariants}>
          <Title 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Manifestation
          </Title>
          <WhatWeDo variants={itemVariants}>
            <Line 
              src="./img/line.png" 
              variants={itemVariants}
            />
            <Subtitle variants={itemVariants}>
              Master Web Developers
            </Subtitle>
          </WhatWeDo>
          
          <Desc variants={itemVariants}>
            Transformative Websites: Elevate Your Business, Captivate Your Audience.
          </Desc>
          
          <Button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Free Consultation
          </Button>
        </Left>
        
        <Right variants={containerVariants}>
          <StyledCanvas
            gl={{ preserveDrawingBuffer: true }}
            camera={{ 
              position: isMobile ? [3, 3, 3] : [2, 2, 2],
              fov: isMobile ? 85 : 75,
              near: 0.1,
              far: 1000
            }}
          >
            <OrbitControls 
              enableRotate={true}
              enablePan={isMobile}
              enableZoom={isMobile}
              rotateSpeed={isMobile ? 0.5 : 0.7}
              panSpeed={isMobile ? 0.5 : 0.7}
              zoomSpeed={isMobile ? 0.5 : 0.7}
            />
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />

            <Cube />
            
            <axesHelper args={[5]} />
          </StyledCanvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;