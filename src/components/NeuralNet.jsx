import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "../lib/theme";

const LAYERS = [4, 6, 6, 3];
const SIGNALS = 40;

function Network({ theme }) {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);

  const nodeColor = theme === "light" ? "#1b1c20" : "#f2f2f0";
  const sigColor = theme === "light" ? "#1f6feb" : "#58a6ff";

  const { nodes, edges } = useMemo(() => {
    const layerArrays = [];
    const flat = [];
    LAYERS.forEach((count, l) => {
      const arr = [];
      for (let n = 0; n < count; n++) {
        const v = new THREE.Vector3(
          (l - (LAYERS.length - 1) / 2) * 1.05,
          (n - (count - 1) / 2) * 0.42,
          0
        );
        arr.push(v);
        flat.push(v);
      }
      layerArrays.push(arr);
    });
    const e = [];
    for (let l = 0; l < LAYERS.length - 1; l++) {
      for (const a of layerArrays[l]) {
        for (const b of layerArrays[l + 1]) e.push([a, b]);
      }
    }
    return { nodes: flat, edges: e };
  }, []);

  const edgeGeo = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach((e, i) => {
      positions.set([e[0].x, e[0].y, e[0].z, e[1].x, e[1].y, e[1].z], i * 6);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [edges]);

  const sigPositions = useMemo(() => new Float32Array(SIGNALS * 3), []);
  const sigState = useMemo(
    () =>
      Array.from({ length: SIGNALS }, () => ({
        e: Math.floor(Math.random() * edges.length),
        t: Math.random(),
      })),
    [edges]
  );

  useFrame((state, delta) => {
    for (let i = 0; i < SIGNALS; i++) {
      const s = sigState[i];
      s.t += delta * 1.1;
      if (s.t > 1) {
        s.t = 0;
        s.e = Math.floor(Math.random() * edges.length);
      }
      const e = edges[s.e];
      sigPositions[i * 3] = e[0].x + (e[1].x - e[0].x) * s.t;
      sigPositions[i * 3 + 1] = e[0].y + (e[1].y - e[0].y) * s.t;
      sigPositions[i * 3 + 2] = e[0].z + (e[1].z - e[0].z) * s.t;
    }
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={edgeGeo}>
        <lineBasicMaterial color={nodeColor} transparent opacity={0.16} />
      </lineSegments>

      {nodes.map((v, i) => (
        <mesh key={i} position={v}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color={nodeColor} />
        </mesh>
      ))}

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={SIGNALS}
            array={sigPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color={sigColor} size={0.1} sizeAttenuation transparent />
      </points>
    </group>
  );
}

export default function NeuralNet({ className = "" }) {
  const { theme } = useTheme();
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        frameloop={prefersReducedMotion ? "demand" : "always"}
        gl={{ alpha: true, antialias: true }}
      >
        <Network theme={theme} />
      </Canvas>
    </div>
  );
}
