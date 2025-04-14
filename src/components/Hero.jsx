import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Navbar from './Navbar';

const Section = styled(motion.div)`
  height:100vh;
  scroll-snap-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding-top: 80px;
  background: linear-gradient(
    135deg, 
    rgba(255,255,255,0.9) 0%, 
    rgba(245,245,245,0.8) 100%
  );

  @media (max-width: 768px) {
    padding-top: 60px;
    height: auto;
    min-height: 100vh;
  }
`

const Container = styled(motion.div)`
  height:calc(100vh - 80px);
  scroll-snap-align:center;
  width:680px;
  display:flex;
  justify-content:space-between;
  margin-top:20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    padding: 0 20px;
    margin-top: 0;
  }
`

const Left = styled(motion.div)`
  flex:2;
  display:flex;
  flex-direction:column;
  gap:20px;
  justify-content:center;

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`

const Title = styled(motion.h1)`
  font-size:60px;
  background: linear-gradient(
    to right, 
    #000000, 
    #da4ea2
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const WhatWeDo = styled(motion.div)`
  display:flex;
  align-items:center;
  gap:10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Line = styled(motion.img)`
  height:5px;
  width:40px;

  @media (max-width: 768px) {
    width: 30px;
  }
`

const Subtitle = styled(motion.h2)`
  color:#da4ea2; 
  font-weight:500;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Desc = styled(motion.p)`
  font-size:24px;
  color:rgba(0,0,0,0.7);
  line-height:1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`

const Button = styled(motion.button)`
  background-color:#da4ea2;
  color:white;
  font-weight:500;
  width: 150px;
  padding:12px;
  border:none;
  border-radius:30px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    width: 200px;
    padding: 10px;
    font-size: 14px;
  }
`

const Right = styled(motion.div)`
  flex:3;
  display:flex;
  justify-content:center;
  align-items:center;

  @media (max-width: 768px) {
    flex: 1;
    margin-top: 20px;
  }
`

const Img = styled(motion.img)`
  height:300px;
  width:300px;
  object-fit:cover;
  top:0;

  @media (max-width: 768px) {
    height: 200px;
    width: 200px;
  }
`

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

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
  }

  const imageVariants = {
    initial: { 
      y: 0,
      rotate: 0
    },
    animate: {
      y: [0, 20, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 3,
      transition: { 
        duration: 0.3 
      }
    }
  }

  return (
    <Section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Navbar/>
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
          Design.Build.Grow
          </Title>
          
          <WhatWeDo variants={itemVariants}>
            <Line 
              src="./img/line.png" 
              variants={itemVariants}
            />
            <Subtitle variants={itemVariants}>
              Web Services
            </Subtitle>
          </WhatWeDo>
          
          <Desc variants={itemVariants}>
          Creating custom websites that work beautifully, deliver results, and help your business stand out.
          </Desc>
          
          <Button 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ff69b4"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </Button>
        </Left>
        
        <Right
          variants={containerVariants}
        >
          <Img 
            src="./img/moon.png"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero