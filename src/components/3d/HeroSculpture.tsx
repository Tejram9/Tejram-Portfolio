import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Inner kinetic sculpture representing strategic systems & data nodes
function KineticCore({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Group>(null);

  // Generate constellation nodes (representing strategic chess/network coordinates)
  const nodePositions = useMemo(() => {
    const coords: [number, number, number][] = [
      [1.8, 0.4, 0.5],
      [-1.7, -0.6, 0.8],
      [0.6, 1.9, -0.5],
      [-0.8, 1.7, 0.6],
      [1.1, -1.6, -0.7],
      [-1.2, -1.5, -0.6],
      [0.2, -1.9, 1.0],
      [1.5, 0.9, -1.2],
    ];
    return coords;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Responsive pointer interaction
    const targetX = state.pointer.x * 0.35;
    const targetY = state.pointer.y * 0.35;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      // Smooth dampening towards pointer
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetY * 0.5,
        0.05
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        -targetX * 0.5,
        0.05
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4;
      coreRef.current.rotation.y = t * 0.6;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.35;
      ring2Ref.current.rotation.z = t * 0.25;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.2;
      ring3Ref.current.rotation.z = -t * 0.4;
    }

    if (nodesRef.current) {
      nodesRef.current.rotation.y = -t * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Strategic Core: Faceted Icosahedron with Wireframe Overlay */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Solid crystalline translucent core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[isMobile ? 1.0 : 1.25, 1]} />
          <meshPhysicalMaterial
            color="#2563eb"
            emissive="#1e3a8a"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.9}
            transparent
            opacity={0.75}
            wireframe={false}
          />
        </mesh>

        {/* Outer subtle geometric wireframe cage */}
        <mesh>
          <icosahedronGeometry args={[isMobile ? 1.08 : 1.35, 1]} />
          <meshBasicMaterial
            color="#60a5fa"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      {/* Orbiting Strategic Rings (Gyroscopic coordinate bounds) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[isMobile ? 1.6 : 1.95, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[isMobile ? 1.9 : 2.3, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#4f46e5"
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <torusGeometry args={[isMobile ? 2.2 : 2.65, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={0.5}
          roughness={0.4}
          metalness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Interconnected System Nodes (Tactical Network Points) */}
      <group ref={nodesRef}>
        {nodePositions.map((pos, idx) => (
          <group key={idx} position={pos}>
            <mesh>
              <octahedronGeometry args={[0.07, 0]} />
              <meshStandardMaterial
                color="#67e8f9"
                emissive="#38bdf8"
                emissiveIntensity={1.2}
              />
            </mesh>
            {/* Small node halo */}
            <pointLight distance={1.2} intensity={0.8} color="#38bdf8" />
          </group>
        ))}
      </group>

      {/* Strategic Coordinate Anchor Crosshairs */}
      <mesh position={[0, -2.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 0.82, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Particle field with bounded particle count for high 60fps performance
function ParticleField({ count = 90 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const c1 = new THREE.Color('#38bdf8');
    const c2 = new THREE.Color('#3b82f6');
    const c3 = new THREE.Color('#818cf8');

    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const chosen = Math.random() > 0.5 ? c1 : Math.random() > 0.5 ? c2 : c3;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface HeroSculptureProps {
  isMobile?: boolean;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({ isMobile = false }) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 5.6 : 5.0], fov: 45 }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          {/* Cobalt key light */}
          <directionalLight position={[5, 6, 5]} intensity={1.5} color="#60a5fa" />
          {/* Electric cyan fill light */}
          <directionalLight position={[-5, -4, -4]} intensity={1.2} color="#38bdf8" />
          {/* Violet backlight for depth */}
          <pointLight position={[0, -2, -3]} intensity={1.8} color="#818cf8" />
          {/* Core center accent */}
          <pointLight position={[0, 0, 0]} intensity={1.0} color="#2563eb" />

          <KineticCore isMobile={isMobile} />
          <ParticleField count={isMobile ? 50 : 90} />
        </Suspense>
      </Canvas>
    </div>
  );
};
