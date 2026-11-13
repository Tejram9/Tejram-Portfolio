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
      coreLightRef.current.intensity = 1.6 + Math.sin(t * 2.8) * 0.45;
    }
  });

  const coreSize = isMobile ? 1.05 : 1.3;

  return (
    <group>
      {/* Dynamic Point Light from inside the core - Vibrant Electric Purple */}
      <pointLight
        ref={coreLightRef}
        position={[0, 0, 0]}
        color="#a855f7"
        distance={5.0}
        intensity={2.0}
      />

      <Float speed={autoRotate ? 2.2 : 0} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Core Electric Purple Glass Prism (Icosahedron) */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[coreSize, 1]} />
          <meshPhysicalMaterial
            color="#9333ea"
            emissive="#581c87"
            emissiveIntensity={0.65}
            roughness={0.1}
            metalness={0.2}
            transmission={wireframeMode ? 0.1 : 0.84}
            thickness={1.5}
            ior={1.55}
            specularIntensity={1.0}
            specularColor="#38bdf8"
            transparent
            opacity={wireframeMode ? 0.25 : 0.92}
            wireframe={wireframeMode}
          />
        </mesh>

        {/* Outer Precision Engineering Framework (Geometric Electric Cyan Cage) */}
        <mesh ref={outerCageRef}>
          <icosahedronGeometry args={[coreSize * 1.15, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0369a1"
            emissiveIntensity={0.45}
            roughness={0.2}
            metalness={0.9}
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Inner Glowing Nuclear Lattice - Selective Solar Orange */}
        <mesh ref={innerOctaRef}>
          <octahedronGeometry args={[coreSize * 0.45, 0]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#ea580c"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.6}
            wireframe={wireframeMode}
          />
        </mesh>
      </Float>
    </group>
  );
};
