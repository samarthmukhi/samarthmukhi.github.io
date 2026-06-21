import { useEffect } from "react";

// Single delegated listener that points the spotlight gradient on whichever
// .glass-hover card is under the cursor. Cheaper than a listener per card.
export default function Spotlight() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".glass-hover");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
