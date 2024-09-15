import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import '../styles/Rock.css'

const RockCanvas = () => {

  const rock = useGLTF('/rock/scene.gltf');
  return (
    <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.2, far: 200}}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={0.9}/>
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
      <primitive object={rock.scene} scale={2.5} />
    </Canvas>
  );
};

export default RockCanvas;
