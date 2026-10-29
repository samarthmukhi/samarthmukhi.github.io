import { useCallback, useEffect, useRef, useState } from "react";

// Exhibit A: particle swarm optimization searching a random landscape,
// drawn in the same dot-matrix style as the rest of the page.

const ROWS = 12; // canvas height in document lines
const PARTICLES = 24;
const ITERATIONS = 90;
const W = 0.72; // inertia
const C1 = 1.49; // pull toward each particle's own best
const C2 = 1.49; // pull toward the swarm's best
const VMAX = 0.07;
const DOT = 9; // dot-grid spacing in px

function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A bowl with several Gaussian wells; the deepest well is the global minimum.
function makeLandscape(rand) {
  const wells = Array.from({ length: 6 }, (_, i) => ({
    x: 0.08 + 0.84 * rand(),
    y: 0.12 + 0.76 * rand(),
    a: i === 0 ? 1 : 0.35 + 0.45 * rand(),
    s: 0.004 + 0.02 * rand(),
  }));
  return (x, y) => {
    let v = 0.25 * ((x - 0.5) ** 2 + (y - 0.5) ** 2);
    for (const w of wells) v -= w.a * Math.exp(-((x - w.x) ** 2 + (y - w.y) ** 2) / w.s);
    return v;
  };
}

function initSwarm(seed) {
  const rand = mulberry32(seed);
  const f = makeLandscape(rand);
  const particles = Array.from({ length: PARTICLES }, () => {
    const x = rand();
    const y = rand();
    const v = f(x, y);
    return { x, y, vx: (rand() - 0.5) * 0.05, vy: (rand() - 0.5) * 0.05, bx: x, by: y, bf: v };
  });
  let best = particles[0];
  for (const p of particles) if (p.bf < best.bf) best = p;
  return { f, rand, particles, gx: best.bx, gy: best.by, gf: best.bf, iter: 0 };
}

function stepSwarm(s) {
  const { f, rand, particles } = s;
  for (const p of particles) {
    p.vx = W * p.vx + C1 * rand() * (p.bx - p.x) + C2 * rand() * (s.gx - p.x);
    p.vy = W * p.vy + C1 * rand() * (p.by - p.y) + C2 * rand() * (s.gy - p.y);
    p.vx = Math.max(-VMAX, Math.min(VMAX, p.vx));
    p.vy = Math.max(-VMAX, Math.min(VMAX, p.vy));
    p.x = Math.min(1, Math.max(0, p.x + p.vx));
    p.y = Math.min(1, Math.max(0, p.y + p.vy));
    const v = f(p.x, p.y);
    if (v < p.bf) {
      p.bf = v;
      p.bx = p.x;
      p.by = p.y;
    }
    if (v < s.gf) {
      s.gf = v;
      s.gx = p.x;
      s.gy = p.y;
    }
  }
  s.iter += 1;
}

export default function SwarmExhibit() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const swarmRef = useRef(null);
  const fieldRef = useRef(null); // cached dot grid for the current landscape
  const seedRef = useRef(7);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [playing, setPlaying] = useState(!reduced);
  const [visible, setVisible] = useState(false);
  const [stats, setStats] = useState({ iter: 0, gf: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const s = swarmRef.current;
    if (!canvas || !s) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const color = getComputedStyle(canvas).color;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    // landscape as a dot matrix: deeper wells get denser dots
    if (!fieldRef.current || fieldRef.current.w !== w || fieldRef.current.s !== s) {
      const pts = [];
      let lo = Infinity;
      let hi = -Infinity;
      for (let y = DOT / 2; y < h; y += DOT) {
        for (let x = DOT / 2; x < w; x += DOT) {
          const v = s.f(x / w, y / h);
          lo = Math.min(lo, v);
          hi = Math.max(hi, v);
          pts.push([x, y, v]);
        }
      }
      fieldRef.current = { w, s, pts, lo, hi };
    }
    const { pts, lo, hi } = fieldRef.current;
    for (const [x, y, v] of pts) {
      const t = 1 - (v - lo) / (hi - lo || 1);
      ctx.globalAlpha = 0.06 + 0.7 * t ** 2.2;
      const r = 0.6 + 1.1 * t;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // particles
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    for (const p of s.particles) {
      ctx.beginPath();
      ctx.arc(p.x * w, p.y * h, 3.2, 0, Math.PI * 2);
      ctx.stroke();
    }

    // swarm best, marked like a map pin with a label
    const gx = s.gx * w;
    const gy = s.gy * h;
    ctx.beginPath();
    ctx.arc(gx, gy, 7, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(gx, gy, 3, 0, Math.PI * 2);
    ctx.fill();
    // label sits on a leader line above the pin, on a cleared patch
    ctx.font = `10px "Source Code Pro", ui-monospace, monospace`;
    const label = `SWARM BEST (${s.gx.toFixed(2)}, ${s.gy.toFixed(2)})`;
    const tw = ctx.measureText(label).width;
    const up = gy > 40;
    const ly = up ? gy - 26 : gy + 26;
    const lx = Math.min(Math.max(gx + 10, 4), w - tw - 8);
    ctx.beginPath();
    ctx.moveTo(gx + (up ? 5 : 5), gy + (up ? -5 : 5));
    ctx.lineTo(lx, ly + (up ? 4 : -4));
    ctx.stroke();
    const bg = getComputedStyle(canvas.closest(".exhibit") || canvas).backgroundColor;
    ctx.fillStyle = bg;
    ctx.fillRect(lx - 4, ly - 10, tw + 8, 14);
    ctx.fillStyle = color;
    ctx.textAlign = "left";
    ctx.fillText(label, lx, ly);
  }, []);

  const reset = useCallback(() => {
    seedRef.current += 1;
    swarmRef.current = initSwarm(seedRef.current);
    fieldRef.current = null;
    setStats({ iter: 0, gf: swarmRef.current.gf });
    draw();
  }, [draw]);

  // size the canvas to the column width and an exact number of lines
  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!swarmRef.current) {
      swarmRef.current = initSwarm(seedRef.current);
      setStats({ iter: 0, gf: swarmRef.current.gf });
    }
    const resize = () => {
      const lh = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--lh")) || 27;
      const dpr = window.devicePixelRatio || 1;
      const w = wrap.clientWidth;
      const h = lh * ROWS;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = `${h}px`;
      fieldRef.current = null;
      draw();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(wrap);
    // theme changes flip the exhibit colors
    const mo = new MutationObserver(draw);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
    };
  }, [draw]);

  // run the optimizer while playing and on screen
  useEffect(() => {
    if (!playing || !visible) return;
    let hold = 0;
    const id = setInterval(() => {
      const s = swarmRef.current;
      if (s.iter >= ITERATIONS) {
        hold += 1;
        if (hold > 20) {
          hold = 0;
          reset();
        }
        return;
      }
      stepSwarm(s);
      setStats({ iter: s.iter, gf: s.gf });
      draw();
    }, 90);
    return () => clearInterval(id);
  }, [playing, visible, draw, reset]);

  return (
    <div>
      <div className="row u">
        <span>{PARTICLES} particles, 1 objective, no gradients</span>
        <span>Live</span>
      </div>
      <div className="row u">
        <span>
          Iteration {String(stats.iter).padStart(2, "0")} of {ITERATIONS}
        </span>
        <span>f(best) = {stats.gf.toFixed(4)}</span>
      </div>
      <div className="l" />
      <div ref={wrapRef} role="img" aria-label="Animation of a particle swarm converging on the lowest point of a randomly generated landscape, drawn as a grid of dots.">
        <canvas ref={canvasRef} />
      </div>
      <div className="l" />
      <div className="row u">
        <span>Each particle remembers its own best; all are pulled toward the swarm's best.</span>
      </div>
      <div className="row wrap u">
        <span>
          <button type="button" className="ctl" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            [{playing ? "Pause" : "Play"}]
          </button>{" "}
          <button type="button" className="ctl" onClick={reset}>
            [New landscape]
          </button>
        </span>
        <span className="muted">The method behind NautiClean and SwarmFolio</span>
      </div>
    </div>
  );
}
