import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from 'react';
// import { useControls } from 'leva';

const AnimatedBox = () => {

    const boxRef = useRef();
    // const { speed } = useControls({
    //     speed: {
    //         value: 0.005,
    //         min: 0.0,
    //         max: 0.03,
    //         step: 0.001
    //     }
    // });

    useFrame(() => {
        boxRef.current.rotation.x += 0.005;
        boxRef.current.rotation.y += 0.005;
        boxRef.current.rotation.z += 0.005;
    });

    return (
        <>
            <mesh ref={boxRef} castShadow>
                <axesHelper args={[10]} />
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={0x00bfff} />
            </mesh>
        </>

    )

}

export default AnimatedBox;