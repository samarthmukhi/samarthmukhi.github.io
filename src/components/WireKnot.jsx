import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "../lib/theme";

function Knot({ theme }) {
  const ref = useRef(null);

  const color = theme === "light" ? "#1b1c20" : "#f2f2f0";

  const edges = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(0.9, 0.26, 160, 20, 2, 3);
    return new THREE.EdgesGeometry(geo, 1);
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.0018;
  });

  return (
    <lineSegments ref={ref} geometry={edges}>
      <lineBasicMaterial color={color} transparent opacity={0.85} />
    </lineSegments>
  );
}

export default function WireKnot({ className = "" }) {
  const { theme } = useTheme();
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 42 }}
        frameloop={prefersReducedMotion ? "demand" : "always"}
        gl={{ alpha: true, antialias: true }}
      >
        <Knot theme={theme} />
      </Canvas>
    </div>
  );
}
