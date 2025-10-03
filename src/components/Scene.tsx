import ScrollBlocks from './ScrollBlocks'
import CameraRig from './CameraRig'

export default function Scene() {

  return (
    <>
      <color attach="background" args={['#000011']} />
      <fog attach="fog" args={['#000011', 10, 40]} />

      {/* Освещение */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8844ff" />
      <spotLight position={[0, 15, 5]} intensity={1} angle={0.8} penumbra={1} color="#00ff88" />
      <directionalLight position={[-5, 5, 5]} intensity={0.6} color="#ff44aa" />

      <CameraRig />
      <ScrollBlocks />
    </>
  )
}