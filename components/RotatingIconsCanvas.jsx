'use client';

import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Preload } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random/dist/maath-random.esm';

// List of programming icons
const iconPaths = [
  '/icons/javascript.svg',
  '/icons/react.svg',
  '/icons/python.svg',
  '/icons/node.svg',
  '/icons/vue.svg',
  '/icons/html.svg',
  '/icons/css.svg',
  '/icons/nextjs.svg',
  '/icons/github.svg',
];

const IconSphere = () => {
  const groupRef = useRef();
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Generate positions only on the client side
    const pos = new Float32Array(iconPaths.length * 3);
    setPositions(random.inSphere(pos, { radius: 4 })); // Increase radius for full-screen effect
  }, []);

  // Load textures for each ico1
  const textures = useTexture(iconPaths);

  // Rotate the entire group of icons
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2; // Slow rotation
    }
  });

  return (
    <group ref={groupRef}>
      {positions.length > 0 &&
        iconPaths.map((_, i) => (
          <mesh
            key={i}
            position={[
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2],
            ]}
          >
            <planeGeometry args={[0.5, 0.5]} />{' '}
            {/* Increase icon size for full-screen */}
            <meshBasicMaterial
              map={textures[i]}
              transparent
              side={THREE.DoubleSide} // Ensure proper rendering
            />
          </mesh>
        ))}
    </group>
  );
};

const RotatingIconsCanvas = () => {
  return (
    <div className="w-screen h-screen fixed inset-0">
      <Canvas camera={{ position: [0, 3, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Suspense fallback={null}>
          <IconSphere />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default RotatingIconsCanvas;
