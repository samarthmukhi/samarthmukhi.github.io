import { useEffect, useRef } from "react";

export default function GlowOrb({ color = "rgba(88,166,255,0.35)" }) {
  const orbRef = useRef(null);

  useEffect(() => {
    const orb = orbRef.current;
    const parent = orb.parentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let targetX = parent.clientWidth / 2;
    let targetY = parent.clientHeight / 2;
    let curX = targetX;
    let curY = targetY;
    let frameId;

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      curX += (targetX - curX) * 0.04;
      curY += (targetY - curY) * 0.04;
      orb.style.transform = `translate(${curX}px, ${curY}px)`;
    };

    parent.addEventListener("mousemove", onMove);
    animate();

    return () => {
      parent.removeEventListener("mousemove", onMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(20px)",
      }}
    />
  );
}
