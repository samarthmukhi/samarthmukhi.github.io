import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const dot = dotRef.current;
    let visible = false;

    const move = (e) => {
      if (!visible) {
        dot.style.opacity = "1";
        visible = true;
      }
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const hide = () => {
      dot.style.opacity = "0";
      visible = false;
    };

    const grow = () => dot.classList.add("scale-150");
    const shrink = () => dot.classList.remove("scale-150");

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 opacity-0 transition-[opacity,transform] duration-150 md:block"
    />
  );
}
