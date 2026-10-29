import { useEffect, useState } from "react";

// Numbers every line of the document. Content snaps to the --lh rhythm, so
// the count is simply the document height divided by the line height.
export default function Gutter({ targetRef }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const measure = () => {
      const lh = parseFloat(getComputedStyle(el).getPropertyValue("--lh")) || 27;
      setCount(Math.ceil(el.scrollHeight / lh));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [targetRef]);

  return (
    <div className="gutter" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );
}
