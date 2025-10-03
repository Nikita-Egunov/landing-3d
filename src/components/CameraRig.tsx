import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

export default function CameraRig() {
  const { camera } = useThree()
  const scroll = useScroll()
  
  useFrame((state) => {
    // Увеличил множитель с 20 до 30 из-за большего расстояния между блоками
    const targetY = -scroll.offset * 30
    camera.position.y += (targetY - camera.position.y) * 0.05
    
    // Легкое вращение и движение камеры
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5
    camera.rotation.z = scroll.offset * 0.3
    
    camera.lookAt(0, targetY, 0)
    camera.updateProjectionMatrix()
  })
  
  return null
}