import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CrystallineCore } from './CrystallineCore';
import { GyroscopicRings } from './GyroscopicRings';
import { ConstellationNetwork } from './ConstellationNetwork';
import { AtmosphericField } from './AtmosphericField';

interface SceneContainerProps {
  isMobile: boolean;
  wireframeMode: boolean;
  autoRotate: boolean;
}

// Hierarchical scene coordinator handling smooth mouse parallax & orbital dynamics
function SceneCoordinator({ isMobile, wireframeMode, autoRotate }: SceneContainerProps) {
  const masterGroupRef = useRef<THREE.Group>(null);
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useFrame((state) => {
    // Smooth lerped pointer coordinates
    pointerRef.current.x = THREE.MathUtils.lerp(pointerRef.current.x, state.pointer.x, 0.05);
    pointerRef.current.y = THREE.MathUtils.lerp(pointerRef.current.y, state.pointer.y, 0.05);

    if (masterGroupRef.current) {
      // Subtle layered parallax tilt (responsive to mouse without causing dizziness)
      masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.y,
        pointerRef.current.x * 0.28,
        0.05
      );
      masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.x,
        -pointerRef.current.y * 0.22,
        0.05
      );
    }
  });

  return (
    <group ref={masterGroupRef}>
      {/* 1. Core Polyhedron Kernel */}
      <CrystallineCore
        isMobile={isMobile}
        wireframeMode={wireframeMode}
        autoRotate={autoRotate}
        pointer={pointerRef}
      />

      {/* 2. Gyroscopic Coordinate Orbit Rings */}
      <GyroscopicRings
        isMobile={isMobile}
        wireframeMode={wireframeMode}
        autoRotate={autoRotate}
      />

      {/* 3. Constellation Node System (Trace lines & data vertices) */}
      <ConstellationNetwork
        isMobile={isMobile}
        autoRotate={autoRotate}
      />

      {/* 4. Atmospheric Cosmic Particle Field */}
      <AtmosphericField count={isMobile ? 55 : 100} />

      {/* Tactical Floor Horizon Ring */}
      <mesh position={[0, isMobile ? -2.3 : -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.0, 1.025, 48]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export interface HeroSculptureProps {
  isMobile?: boolean;
  wireframeMode?: boolean;
  autoRotate?: boolean;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({
  isMobile = false,
  wireframeMode = false,
  autoRotate = true,
}) => {
  return (
    <div className="w-full h-full relative select-none touch-none cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 5.8 : 5.1], fov: 45 }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.75) : 1}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
      >
        <Suspense fallback={null}>
          {/* Studio Lighting Setup for High-Contrast Editorial Glass & Metal */}
          <ambientLight intensity={0.65} color="#0f172a" />
          
          {/* Cobalt Key Light */}
          <directionalLight position={[6, 7, 5]} intensity={1.6} color="#60a5fa" />
          
          {/* Electric Cyan Rim Fill */}
          <directionalLight position={[-6, -4, -4]} intensity={1.3} color="#38bdf8" />
          
          {/* Violet Depth Backlight */}
          <pointLight position={[0, -3, -3.5]} intensity={1.8} color="#818cf8" distance={9} />
          
          {/* Warm Amber Specular Accent for Visual Contrast */}
          <pointLight position={[3, -2, 3]} intensity={0.9} color="#38bdf8" distance={6} />

          {/* Master 3D Kinetic System */}
          <SceneCoordinator
            isMobile={isMobile}
            wireframeMode={wireframeMode}
            autoRotate={autoRotate}
          />

          {/* Orbit Controls with bounded angles & smooth rotational damping */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.7}
            dampingFactor={0.06}
            maxPolarAngle={Math.PI / 1.55}
            minPolarAngle={Math.PI / 2.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
