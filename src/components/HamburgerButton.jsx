import { motion } from "framer-motion";

const bar =
  "absolute left-0 h-[2px] w-full rounded-full bg-(--color-text)";
const spring = { type: "spring", stiffness: 380, damping: 26 };

export default function HamburgerButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative h-4 w-6 lg:hidden"
    >
      <motion.span
        className={bar}
        style={{ top: 1, transformOrigin: "center" }}
        animate={open ? { rotate: 45, top: 7 } : { rotate: 0, top: 1 }}
        transition={spring}
      />
      <motion.span
        className={bar}
        style={{ top: 7 }}
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className={bar}
        style={{ top: 13, transformOrigin: "center" }}
        animate={open ? { rotate: -45, top: 7 } : { rotate: 0, top: 13 }}
        transition={spring}
      />
    </button>
  );
}
