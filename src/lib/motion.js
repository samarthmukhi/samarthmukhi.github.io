// Shared framer-motion variants used across the site.

const easeOut = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: easeOut } },
};

// Parent that staggers its children's reveal as they enter the viewport.
// 60ms between items keeps it lively (Emil's bar is 30-80ms).
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

// Spring lift for interactive cards (pairs with the CSS spotlight glow).
export const cardHover = {
  y: -5,
  transition: { type: "spring", stiffness: 320, damping: 22 },
};

// Shared viewport config: reveal once, slightly before fully in view.
export const inView = { once: true, margin: "-70px" };
