import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { FallbackSculpture } from './FallbackSculpture';
import { ThreeErrorBoundary } from './ErrorBoundary';

// ─── Utility: node positions on sphere ───────────────────────────────────────
function spherePoint(radius: number, theta: number, phi: number): [number, number, number] {
  return [
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  ];
}

const NODE_COUNT = 8;
const NODE_POSITIONS: [number, number, number][] = Array.from({ length: NODE_COUNT }, (_, i) => {
  const theta = (i / NODE_COUNT) * Math.PI * 2;
  const phi = (Math.PI / 4) + (i % 2) * (Math.PI / 2);
  return spherePoint(2.4, theta, phi);
});

// ─── Lines connecting node pairs ─────────────────────────────────────────────
function NodeLines() {
  const pairs: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,4],[1,5],[2,6],[3,7]];
  return (
    <>
      {pairs.map(([a, b], i) => {
        const start = new THREE.Vector3(...NODE_POSITIONS[a]);
        const end = new THREE.Vector3(...NODE_POSITIONS[b]);
        const points = [start, end];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <lineSegments key={i} geometry={geo}>
            <lineBasicMaterial color="#D5FF00" transparent opacity={0.18} />
          </lineSegments>
        );
      })}
    </>
  );
}

// ─── Node sphere dots ─────────────────────────────────────────────────────────
function NodePoints() {
  return (
    <>
      {NODE_POSITIONS.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#D5FF00" emissive="#D5FF00" emissiveIntensity={1.2} />
        </mesh>
      ))}
    </>
  );
}

// ─── Orbital ring ─────────────────────────────────────────────────────────────
interface OrbitalRingProps {
  radius: number;
  tube: number;
  color: string;
  opacity: number;
  rotation?: [number, number, number];
  speed: number;
  direction?: 1 | -1;
}
function OrbitalRing({ radius, tube, color, opacity, rotation = [0, 0, 0], speed, direction = 1 }: OrbitalRingProps) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.001 * speed * direction;
    }
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// ─── Main sculpture group ─────────────────────────────────────────────────────
function DigitalSystemCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Smooth lerp mouse interaction
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.15,
        0.05
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.004;
      coreRef.current.rotation.x += 0.002;
    }

    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= 0.003;
      outerWireRef.current.rotation.x -= 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Central icosahedron — charcoal metallic */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#1A1C18"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* 2. Outer wireframe octahedron — acid lime */}
        <mesh ref={outerWireRef}>
          <octahedronGeometry args={[1.8, 0]} />
          <meshStandardMaterial
            color="#D5FF00"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      {/* 3. Orbital rings */}
      <OrbitalRing
        radius={2.2} tube={0.015}
        color="#D5FF00" opacity={0.6}
        rotation={[Math.PI / 6, 0, 0]}
        speed={1.2} direction={1}
      />
      <OrbitalRing
        radius={2.6} tube={0.012}
        color="#ffffff" opacity={0.2}
        rotation={[Math.PI / 3, 0, 0]}
        speed={0.8} direction={-1}
      />
      <OrbitalRing
        radius={2.0} tube={0.018}
        color="#8A8C85" opacity={0.3}
        rotation={[0, 0, 0]}
        speed={0.6} direction={1}
      />

      {/* 4. Node constellation */}
      <NodePoints />
      <NodeLines />

      {/* 5. Sparkles */}
      <Sparkles count={60} scale={6} size={0.8} speed={0.3} color="#D5FF00" />
    </group>
  );
}

// ─── Exported component ───────────────────────────────────────────────────────
export interface HeroSculptureProps {
  isMobile?: boolean;
  wireframeMode?: boolean;
  autoRotate?: boolean;
}

export const HeroSculpture: React.FC<HeroSculptureProps> = ({
  isMobile = false,
}) => {
  const hasWebGL =
    typeof window !== 'undefined' &&
    (!!document.createElement('canvas').getContext('webgl2') ||
      !!document.createElement('canvas').getContext('webgl'));

  if (!hasWebGL || isMobile) {
    return <FallbackSculpture />;
  }

  return (
    <div className="w-full h-full relative select-none touch-none">
      <ThreeErrorBoundary fallback={<FallbackSculpture />}>
        <Suspense fallback={<FallbackSculpture />}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
          >
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-3, -3, 2]} intensity={0.8} color="#D5FF00" />

            <DigitalSystemCore />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              dampingFactor={0.08}
              enableDamping
            />
          </Canvas>
        </Suspense>
      </ThreeErrorBoundary>
    </div>
  );
};
