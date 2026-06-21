import { useEffect, useRef } from "react";
import ParticleField from "./ParticleField";

// Site-wide ambient layer: a fixed, full-viewport particle field plus a soft
// glow that trails the cursor. Sits behind all content via negative z-index.
export default function PageBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let curX = targetX;
    let curY = targetY;
    let frameId;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      curX += (targetX - curX) * 0.035;
      curY += (targetY - curY) * 0.035;
      glow.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", onMove);
    animate();
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <ParticleField density={6500} mobileDensity={11000} maxAlpha={0.6} />
      <div
        ref={glowRef}
        className="absolute top-0 left-0 h-[40rem] w-[40rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(88,166,255,0.10) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
