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

  // Tactical Node Coordinates (Vibrant Purple, Electric Cyan & Solar Orange Spectrum)
  const nodeData = useMemo(() => {
    return [
      { pos: [1.85, 0.6, 0.7] as [number, number, number], label: 'API::REST', color: '#38bdf8' },
      { pos: [-1.75, -0.7, 0.85] as [number, number, number], label: 'DB::RELATIONAL', color: '#a855f7' },
      { pos: [0.7, 1.95, -0.6] as [number, number, number], label: 'JAVA::SPRING', color: '#c084fc' },
      { pos: [-0.9, 1.8, 0.75] as [number, number, number], label: 'AI::ENGINE', color: '#f97316' },
      { pos: [1.2, -1.7, -0.8] as [number, number, number], label: 'SEC::WATERMARK', color: '#38bdf8' },
      { pos: [-1.3, -1.6, -0.7] as [number, number, number], label: 'ALGO::GRAPH', color: '#a855f7' },
      { pos: [0.3, -2.1, 1.1] as [number, number, number], label: 'UI::MODERN', color: '#60a5fa' },
      { pos: [1.6, 1.1, -1.3] as [number, number, number], label: 'CLOUD::DEPLOY', color: '#fb923c' },
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
      {/* Tactical Connecting Data Lines in Electric Purple */}
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
          color="#c084fc"
          transparent
          opacity={0.4}
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
              emissiveIntensity={1.8}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
          <pointLight distance={1.5} intensity={1.0} color={node.color} />
        </group>
      ))}
    </group>
  );
};
