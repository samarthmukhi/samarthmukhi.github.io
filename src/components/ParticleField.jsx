import { useEffect, useRef } from "react";

export default function ParticleField({
  density = 4000,
  mobileDensity = 7000,
  maxAlpha = 0.8,
  rgb = "242, 242, 240",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let particles = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let frameId;

    const resize = () => {
      w = canvas.parentElement.clientWidth;
      h = canvas.parentElement.clientHeight;
      canvas.width = w;
      canvas.height = h;
      const effectiveDensity = window.innerWidth < 768 ? mobileDensity : density;
      const count = Math.floor((w * h) / effectiveDensity);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.3 + 0.5,
        depth: Math.random() * 0.5 + 0.2,
        baseAlpha: Math.random() * 0.35 + 0.2,
      }));
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetX = (mouseX / window.innerWidth - 0.5) * 2;
      targetY = (mouseY / window.innerHeight - 0.5) * 2;
    };

    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
      targetX = 0;
      targetY = 0;
    };

    const draw = () => {
      frameId = requestAnimationFrame(draw);
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;
      ctx.clearRect(0, 0, w, h);
      const rect = canvas.getBoundingClientRect();
      for (const p of particles) {
        const px = p.x - curX * 16 * p.depth;
        const py = p.y - curY * 16 * p.depth;
        const localMouseX = mouseX - rect.left;
        const localMouseY = mouseY - rect.top;
        const nearMouse = Math.hypot(px - localMouseX, py - localMouseY);
        const glow = nearMouse < 70 ? (1 - nearMouse / 70) * 0.5 : 0;
        ctx.beginPath();
        ctx.arc(px, py, p.r + glow, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${Math.min(maxAlpha, p.baseAlpha + glow)})`;
        ctx.fill();
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
      draw();
    } else {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${p.baseAlpha})`;
        ctx.fill();
      }
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [density, mobileDensity, maxAlpha, rgb]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
