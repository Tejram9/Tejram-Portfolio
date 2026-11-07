import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GyroscopicRingsProps {
  isMobile: boolean;
  wireframeMode: boolean;
  autoRotate: boolean;
}

export const GyroscopicRings: React.FC<GyroscopicRingsProps> = ({
  isMobile,
  wireframeMode,
  autoRotate,
}) => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const signalRef = useRef<THREE.Mesh>(null);

  const r1 = isMobile ? 1.75 : 2.1;
  const r2 = isMobile ? 2.05 : 2.45;
  const r3 = isMobile ? 2.35 : 2.8;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (autoRotate) {
      if (ring1Ref.current) {
        ring1Ref.current.rotation.x = t * 0.22;
        ring1Ref.current.rotation.y = t * 0.16;
      }

      if (ring2Ref.current) {
        ring2Ref.current.rotation.y = -t * 0.28;
        ring2Ref.current.rotation.z = t * 0.18;
      }

      if (ring3Ref.current) {
        ring3Ref.current.rotation.x = -t * 0.14;
        ring3Ref.current.rotation.z = -t * 0.32;
      }
    }

    // Orbiting data signal packet travelling along ring 1
    if (signalRef.current) {
      const angle = t * 1.6;
      signalRef.current.position.x = Math.cos(angle) * r1;
      signalRef.current.position.y = Math.sin(angle) * r1 * 0.5;
      signalRef.current.position.z = Math.sin(angle) * r1 * 0.85;
    }
  });

  return (
    <group>
      {/* Primary Gyro Ring (Cobalt & Cyan Glow) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[r1, isMobile ? 0.02 : 0.024, 16, 80]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
          wireframe={wireframeMode}
        />
      </mesh>

      {/* Secondary Gyro Ring (Indigo & Violet Shift) */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[r2, isMobile ? 0.016 : 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#4338ca"
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={0.8}
          wireframe={wireframeMode}
        />
      </mesh>

      {/* Tertiary Outer Coordinate Ring (Fine Cobalt Line) */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 3.5, 0, Math.PI / 3]}>
        <torusGeometry args={[r3, isMobile ? 0.012 : 0.016, 16, 80]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#1d4ed8"
          emissiveIntensity={0.6}
          roughness={0.4}
          metalness={0.9}
          transparent
          opacity={0.65}
          wireframe={wireframeMode}
        />
      </mesh>

      {/* Kinetic Data Signal Pulse */}
      <mesh ref={signalRef}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#38bdf8"
          emissiveIntensity={2.5}
        />
        <pointLight distance={1.2} intensity={1.5} color="#38bdf8" />
      </mesh>
    </group>
  );
};
