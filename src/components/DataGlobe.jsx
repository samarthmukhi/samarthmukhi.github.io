import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const groupRef = useRef(null);
  const radius = 1.5;

  const nodePositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 22; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }
    return positions;
  }, [radius]);

  const arcs = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (
          nodePositions[i].distanceTo(nodePositions[j]) < radius * 1.1 &&
          Math.random() < 0.5
        ) {
          const mid = nodePositions[i]
            .clone()
            .add(nodePositions[j])
            .multiplyScalar(0.5)
            .normalize()
            .multiplyScalar(radius * 1.22);
          const curve = new THREE.QuadraticBezierCurve3(
            nodePositions[i],
            mid,
            nodePositions[j]
          );
          lines.push(curve.getPoints(16));
        }
      }
    }
    return lines;
  }, [nodePositions, radius]);

  const globeEdges = useMemo(() => {
    const geo = new THREE.SphereGeometry(radius, 20, 14);
    return new THREE.EdgesGeometry(geo);
  }, [radius]);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0025;
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={globeEdges}>
        <lineBasicMaterial color="#6e7178" transparent opacity={0.3} />
      </lineSegments>
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#85b7eb" />
        </mesh>
      ))}
      {arcs.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#58a6ff" transparent opacity={0.55} />
        </line>
      ))}
    </group>
  );
}

export default function DataGlobe({ className = "" }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 40 }}
        frameloop={prefersReducedMotion ? "demand" : "always"}
        gl={{ alpha: true, antialias: true }}
      >
        <Globe />
      </Canvas>
    </div>
  );
}
