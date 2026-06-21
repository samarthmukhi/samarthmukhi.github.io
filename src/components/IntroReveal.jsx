import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.76, 0, 0.24, 1];

export default function IntroReveal({ onComplete }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(onComplete, reduced ? 250 : 2000);
    return () => clearTimeout(t);
  }, [onComplete, reduced]);

  const d = (duration, delay = 0) =>
    reduced ? { duration: 0 } : { duration, delay, ease };

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-(--color-bg)"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: reduced ? 0 : 0.9, ease }}
    >
      <div className="overflow-hidden px-6">
        <motion.h1
          initial={{ y: "115%" }}
          animate={{ y: 0 }}
          transition={d(0.95, 0.15)}
          className="font-serif text-5xl text-(--color-text) md:text-7xl"
        >
          Samarth Mukhi
        </motion.h1>
      </div>

      <div className="mt-4 overflow-hidden">
        <motion.p
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          transition={d(0.8, 0.38)}
          className="font-mono text-[11px] tracking-[0.3em] text-(--color-text-faint) uppercase"
        >
          Data science &amp; autonomous systems
        </motion.p>
      </div>

      <motion.div
        className="mt-8 h-px bg-(--color-accent)"
        initial={{ width: 0, opacity: 0.5 }}
        animate={{ width: 168, opacity: 1 }}
        transition={d(1.2, 0.45)}
      />
    </motion.div>
  );
}
