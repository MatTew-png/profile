import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, ContactShadows, Sparkles } from '@react-three/drei';

function InteractiveGlassShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Continuous subtle auto-rotation
    meshRef.current.rotation.x += delta * 0.25;
    meshRef.current.rotation.y += delta * 0.35;

    // Interactive mouse parallax tilt
    const targetX = (state.pointer.y * Math.PI) / 6;
    const targetY = (state.pointer.x * Math.PI) / 6;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <group>
        {/* Outer Glass Octahedron */}
        <mesh ref={meshRef}>
          <octahedronGeometry args={[2.1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={1.2}
            chromaticAberration={0.45}
            anisotropy={0.3}
            distortion={0.4}
            distortionScale={0.5}
            temporalDistortion={0.15}
            color="#7dd3fc"
            roughness={0.1}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh scale={0.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Ambient floating tech sparkles */}
        <Sparkles count={30} scale={5} size={2.5} speed={0.4} color="#7dd3fc" />
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d-wrapper glass-panel" aria-label="3D Interactive Visual">
      <Suspense fallback={<div className="hero-3d-fallback"><div className="loading-spinner"></div></div>}>
        <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} color="#38bdf8" intensity={1.5} />
          <Environment preset="city" />
          <InteractiveGlassShape />
          <ContactShadows position={[0, -2.6, 0]} opacity={0.45} scale={9} blur={2.2} far={4} color="#0284c7" />
        </Canvas>
      </Suspense>
    </div>
  );
}
