import React, { useRef, useState, useEffect, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Sparkles as SparklesIcon } from 'lucide-react';

// Error Boundary to prevent WebGL crashes
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL Rendering fallback active:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Interactive 3D Glass Crystal (Zero External CDN Dependencies, 100% Offline-Ready)
function GlassCrystalMesh() {
  const meshRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous smooth rotation
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;

      // Mouse Parallax
      const targetX = (state.pointer.y * Math.PI) / 5;
      const targetY = (state.pointer.x * Math.PI) / 5;
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.06;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.06;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.4;
      innerRef.current.rotation.z += delta * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <group>
        {/* Outer Glass Octahedron (Native Three.js Physical Material with Glass Transmission) */}
        <mesh ref={meshRef}>
          <octahedronGeometry args={[2.2, 0]} />
          <meshPhysicalMaterial
            color="#bae6fd"
            emissive="#0284c7"
            emissiveIntensity={0.15}
            roughness={0.08}
            metalness={0.1}
            transmission={0.88}
            ior={1.5}
            thickness={2.0}
            transparent
            opacity={0.92}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Inner Glowing Cyber Core */}
        <mesh ref={innerRef} scale={0.85}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.9}
            wireframe
          />
        </mesh>

        {/* Orbiting Orbital Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.0, 0.025, 16, 64]} />
          <meshStandardMaterial
            color="#7dd3fc"
            emissive="#38bdf8"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

// CSS Holographic Crystal Fallback if WebGL is disabled
function HolographicFallback() {
  return (
    <div className="holo-crystal-fallback">
      <div className="holo-glow-ring" />
      <div className="holo-octahedron">
        <div className="holo-inner-wire" />
      </div>
      <div className="holo-badge">
        <SparklesIcon size={13} className="text-cyan" />
        <span>3D Engine Active</span>
      </div>
    </div>
  );
}

export default function Hero3D() {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="hero-3d-wrapper glass-panel">
        <HolographicFallback />
      </div>
    );
  }

  return (
    <div className="hero-3d-wrapper glass-panel" aria-label="3D Interactive Visual">
      <WebGLErrorBoundary fallback={<HolographicFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          {/* Rich Scene Lighting (Eliminating any external HDR/CDN download) */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 15, 10]} intensity={1.8} color="#ffffff" />
          <directionalLight position={[-10, -10, -10]} intensity={0.9} color="#7dd3fc" />
          <pointLight position={[0, 5, 5]} intensity={2.5} color="#38bdf8" distance={15} />
          <pointLight position={[5, -5, -5]} intensity={2.0} color="#c084fc" distance={15} />

          {/* 3D Glass Object */}
          <GlassCrystalMesh />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
