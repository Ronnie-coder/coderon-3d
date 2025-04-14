import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import Test from './components/Test';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: linear-gradient(
    135deg,
    #f5f5f5 0%,
    #ffffff 50%,
    #f0f0f0 100%
  );
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0; /* Background of the scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Roundness of the scrollbar thumb */
    border: 2px solid #f0f0f0; /* Space around the scrollbar thumb */
  }

  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 #f0f0f0; /* For Firefox */
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test />
    </Container>
  );
}

export default App;