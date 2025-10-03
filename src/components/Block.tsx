import { useFrame } from '@react-three/fiber'
import { useScroll, Text, Float } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

interface BlockProps {
  position: [number, number, number]
  primaryColor: string
  secondaryColor: string
  glowColor: string
  title: string
  description: string
  icon: string
  shape: string
  blockId: number
}

export default function Block({
  position,
  primaryColor,
  secondaryColor,
  glowColor,
  title,
  description,
  icon,
  shape,
  blockId
}: BlockProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const scroll = useScroll()
  const [hovered, setHovered] = useState(false)

  const getGeometry = () => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[1.3, 32, 32]} />
      case 'box':
        return <boxGeometry args={[1.8, 1.8, 1.8]} />
      case 'torus':
        return <torusGeometry args={[1.2, 0.4, 16, 32]} />
      case 'octahedron':
        return <octahedronGeometry args={[1.4]} />
      case 'cone':
        return <coneGeometry args={[1.2, 2, 32]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1.3]} />
      default:
        return <sphereGeometry args={[1.3, 32, 32]} />
    }
  }

  useFrame((state) => {
    if (!meshRef.current || !groupRef.current) return

    const scrollOffset = scroll.offset
    const blockProgress = (scrollOffset * 6) - (blockId - 1)
    const active = Math.abs(blockProgress) < 0.3

    // Анимация положения с параллаксом
    groupRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime + blockId) * 0.5
    groupRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime + blockId) * 0.3

    // Вращение
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + blockId) * 0.2

    // Пульсация активного блока
    const pulse = active ? Math.sin(state.clock.elapsedTime * 3) * 0.1 + 1 : 1
    meshRef.current.scale.setScalar(pulse)

    // Изменение цвета и свечения
    if (meshRef.current.material) {
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      material.color.set(hovered ? secondaryColor : primaryColor)
      material.emissive.set(glowColor)
      material.emissiveIntensity = active ? 0.3 : 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
          receiveShadow
        >
          {getGeometry()}
          <meshStandardMaterial
            color={primaryColor}
            transparent
            opacity={0.95}
            roughness={0.1}
            metalness={0.8}
            emissive={new THREE.Color(glowColor)}
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Свечение */}
      <pointLight color={glowColor} intensity={2} distance={5} />

      {/* Заголовок */}
      <Text
        position={[0, 2.5, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
        outlineColor={secondaryColor}
        outlineWidth={0.01}
      >
        {title}
      </Text>

      {/* Иконка */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color={secondaryColor}
        anchorX="center"
        anchorY="middle"
        outlineColor={primaryColor}
        outlineWidth={0.02}
      >
        {icon}
      </Text>

      {/* Описание */}
      <Text
        position={[0, -2, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.5}
        textAlign="center"
        outlineColor={primaryColor}
        outlineWidth={0.005}
      >
        {description}
      </Text>
    </group>
  )
}