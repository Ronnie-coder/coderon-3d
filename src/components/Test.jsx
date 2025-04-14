import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Cube from './Cube'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;

    @media (max-width: 768px) {
        height: 100vh;
    }

    @media (max-width: 480px) {
        height: 100vh;
    }
`

const Test = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Container>
      <Canvas 
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
      </Canvas>
    </Container>
  )
}

export default Test