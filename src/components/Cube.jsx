import { Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'

const CubeFace = ({ position, rotation, text, color }) => {
  const [hovered, setHovered] = useState(false)
  const { viewport } = useThree()
  
  // Dynamic font size based on viewport
  const fontSize = viewport.width > 768 ? 0.2 : 0.15

  return (
    <group position={position} rotation={rotation}>
      <Text
        position={[0, 0, 0.51]}
        fontSize={fontSize}
        color={hovered ? "#ff0000" : color}
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {text}
      </Text>
    </group>
  )
}

const Cube = () => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const { viewport } = useThree()

  // Dynamic scale based on viewport
  const dynamicScale = viewport.width > 768 ? 1 : 0.7

  useFrame((state, delta) => {
    if (!active) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={hovered ? dynamicScale * 1.1 : dynamicScale}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={hovered ? "#000000" : "#444444"}
        metalness={0.5}
        roughness={0.5}
      />

      {/* Front */}
      <CubeFace 
        position={[0, 0, 0.5]}
        rotation={[0, 0, 0]}
        text="React"
        color="#61DAFB"
      />

      {/* Back */}
      <CubeFace
        position={[0, 0, -0.5]}
        rotation={[0, Math.PI, 0]}
        text="Three.js"
        color="#049EF4"
      />

      {/* Top */}
      <CubeFace
        position={[0, 0.5, 0]}
        rotation={[-Math.PI/2, 0, 0]}
        text="WebGL"
        color="#990099"
      />

      {/* Bottom */}
      <CubeFace
        position={[0, -0.5, 0]}
        rotation={[Math.PI/2, 0, 0]}
        text="JavaScript"
        color="#F7DF1E"
      />

      {/* Right */}
      <CubeFace
        position={[0.5, 0, 0]}
        rotation={[0, Math.PI/2, 0]}
        text="HTML5"
        color="#E34F26"
      />

      {/* Left */}
      <CubeFace
        position={[-0.5, 0, 0]}
        rotation={[0, -Math.PI/2, 0]}
        text="CSS3"
        color="#1572B6"
      />
    </mesh>
  )
}

export default Cube