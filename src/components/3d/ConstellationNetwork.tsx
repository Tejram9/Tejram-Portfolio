import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConstellationNetworkProps {
  isMobile: boolean;
  autoRotate: boolean;
}

export const ConstellationNetwork: React.FC<ConstellationNetworkProps> = ({
  autoRotate,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Tactical Node Coordinates (Solar Amber & Champagne Spectrum)
  const nodeData = useMemo(() => {
    return [
      { pos: [1.85, 0.6, 0.7] as [number, number, number], label: 'API::REST', color: '#fbbf24' },
      { pos: [-1.75, -0.7, 0.85] as [number, number, number], label: 'DB::RELATIONAL', color: '#f59e0b' },
      { pos: [0.7, 1.95, -0.6] as [number, number, number], label: 'JAVA::SPRING', color: '#fde68a' },
      { pos: [-0.9, 1.8, 0.75] as [number, number, number], label: 'AI::ENGINE', color: '#fcd34d' },
      { pos: [1.2, -1.7, -0.8] as [number, number, number], label: 'SEC::WATERMARK', color: '#d97706' },
      { pos: [-1.3, -1.6, -0.7] as [number, number, number], label: 'ALGO::GRAPH', color: '#fbbf24' },
      { pos: [0.3, -2.1, 1.1] as [number, number, number], label: 'UI::MODERN', color: '#fef08a' },
      { pos: [1.6, 1.1, -1.3] as [number, number, number], label: 'CLOUD::DEPLOY', color: '#f59e0b' },
    ];
  }, []);

  // Compute connecting line segments from each node to the core center [0,0,0]
  const linePositions = useMemo(() => {
    const points: number[] = [];
    nodeData.forEach((node) => {
      points.push(node.pos[0], node.pos[1], node.pos[2]);
      points.push(node.pos[0] * 0.45, node.pos[1] * 0.45, node.pos[2] * 0.45);
    });
    return new Float32Array(points);
  }, [nodeData]);

  useFrame((_, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y -= delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Tactical Connecting Data Lines in Champagne Gold */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Octahedral Vertex Nodes */}
      {nodeData.map((node, idx) => (
        <group key={idx} position={node.pos}>
          <mesh>
            <octahedronGeometry args={[0.085, 0]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={1.4}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          <pointLight distance={1.4} intensity={0.9} color={node.color} />
        </group>
      ))}
    </group>
  );
};
