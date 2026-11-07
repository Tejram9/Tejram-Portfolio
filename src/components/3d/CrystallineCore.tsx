import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface CrystallineCoreProps {
  isMobile: boolean;
  wireframeMode: boolean;
  autoRotate: boolean;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}

export const CrystallineCore: React.FC<CrystallineCoreProps> = ({
  isMobile,
  wireframeMode,
  autoRotate,
  pointer,
}) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerCageRef = useRef<THREE.Mesh>(null);
  const innerOctaRef = useRef<THREE.Mesh>(null);
  const coreLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (coreRef.current) {
      if (autoRotate) {
        coreRef.current.rotation.x = t * 0.3;
        coreRef.current.rotation.y = t * 0.45;
      }
      // Subtle pointer inertia on core
      coreRef.current.rotation.z = THREE.MathUtils.lerp(
        coreRef.current.rotation.z,
        pointer.current.x * 0.4,
        0.05
      );
    }

    if (outerCageRef.current && autoRotate) {
      outerCageRef.current.rotation.x = -t * 0.2;
      outerCageRef.current.rotation.y = -t * 0.35;
    }

    if (innerOctaRef.current && autoRotate) {
      innerOctaRef.current.rotation.y = t * 0.8;
      innerOctaRef.current.rotation.z = t * 0.4;
    }

    if (coreLightRef.current) {
      // Subtle breathing pulse on the core light
      coreLightRef.current.intensity = 1.4 + Math.sin(t * 2.5) * 0.4;
    }
  });

  const coreSize = isMobile ? 1.05 : 1.3;

  return (
    <group>
      {/* Dynamic Point Light from inside the core */}
      <pointLight
        ref={coreLightRef}
        position={[0, 0, 0]}
        color="#38bdf8"
        distance={4.5}
        intensity={1.8}
      />

      <Float speed={autoRotate ? 2.2 : 0} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Core Glass Prism (Icosahedron) */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[coreSize, 1]} />
          <meshPhysicalMaterial
            color="#2563eb"
            emissive="#1e40af"
            emissiveIntensity={0.6}
            roughness={0.12}
            metalness={0.2}
            transmission={wireframeMode ? 0.1 : 0.82}
            thickness={1.4}
            ior={1.48}
            specularIntensity={1.0}
            specularColor="#93c5fd"
            transparent
            opacity={wireframeMode ? 0.2 : 0.9}
            wireframe={wireframeMode}
          />
        </mesh>

        {/* Outer Precision Engineering Framework (Geometric Hex-Cage) */}
        <mesh ref={outerCageRef}>
          <icosahedronGeometry args={[coreSize * 1.15, 1]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={0.3}
            roughness={0.25}
            metalness={0.85}
            wireframe
            transparent
            opacity={wireframeMode ? 0.95 : 0.55}
          />
        </mesh>

        {/* Inner Crystalline Spark / Octahedron Core */}
        <mesh ref={innerOctaRef}>
          <octahedronGeometry args={[coreSize * 0.45, 0]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#67e8f9"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>
    </group>
  );
};
