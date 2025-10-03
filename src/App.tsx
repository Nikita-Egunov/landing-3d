import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Scene from './components/Scene'

function App() {
  return (
    <div className="h-screen">
      <Canvas>
        <ScrollControls pages={6} damping={0.1}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App