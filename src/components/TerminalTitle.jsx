import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Developer-themed page title that types out like a terminal command, then
// re-types on a 45s loop so it stays readable between cycles.
export default function TerminalTitle({ command, prompt = "samarth@uw:~$" }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? command : "");

  useEffect(() => {
    if (reduced) {
      setShown(command);
      return;
    }

    let cancelled = false;
    const timers = [];

    const type = () => {
      setShown("");
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setShown(command.slice(0, i));
        if (i < command.length) timers.push(setTimeout(tick, 60));
      };
      timers.push(setTimeout(tick, 350));
    };

    type();
    const loop = setInterval(type, 45000);

    return () => {
      cancelled = true;
      clearInterval(loop);
      timers.forEach(clearTimeout);
    };
  }, [command, reduced]);

  return (
    <h1
      aria-label={command}
      className="mb-10 flex flex-wrap items-baseline gap-x-2 font-mono text-xl text-(--color-text) sm:text-2xl md:text-3xl"
    >
      <span className="text-(--color-accent)">{prompt}</span>
      <span>
        {shown}
        <span className="terminal-cursor" aria-hidden="true">
          &#9611;
        </span>
      </span>
    </h1>
  );
}
