import { Canvas } from "@react-three/fiber";
import { Leva } from 'leva';
import AnimatedBox from "./components/AnimatedBox";
import { FirstPersonControls, OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei';



import './App.css'
import { DirectionalLight, TorusKnotGeometry } from "three/src/Three.Core.js";

function App() {


  return (
    <div >
      {/* <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        height: 'auto', // Kluczowe: automatyczna wysokość
        maxHeight: '90vh', // Opcjonalnie: żeby nie wyszedł poza ekran
        display: 'block'
      }}>
        <Leva isRoot fill={false} />
      </div> */}
      <Canvas>

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        {/* <axesHelper args={[10]} /> */}
        <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} />
        {/* wilekość gridu, ilość podsekcji, kolor osi i kolor gridu */}
        <FirstPersonControls movementSpeed={1} />
        <OrbitControls />
        <AnimatedBox />
        <directionalLight position={[2, 5, 1]} />
      </Canvas>
    </div>
  )
}

export default App
