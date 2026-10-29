import { useEffect, useRef, useState } from "react";

// Exhibit B: a step-through replay of SwarmFolio Referee proving that one
// client's rules can't all be met, using the Dr. Patel case from the project.

const CAP = 35;
const NEED = 30 + 10;
const SCALE = 2.5; // percent per bar character

const bar = (filled, overflow = 0, width = 18) =>
  "[" + "#".repeat(filled) + "+".repeat(overflow) + " ".repeat(Math.max(0, width - filled - overflow)) + "]";

const capChars = Math.round(CAP / SCALE);
const needChars = Math.round(NEED / SCALE);

// Every line of the replay; `step` is when it appears.
const LINES = [
  { step: 0, left: "Client: Dr. Patel (synthetic)", right: "3 rules on file" },
  { step: 1, left: "R1  Hold at least 30% JNJ", right: "Tax reasons" },
  { step: 1, left: "R2  Hold at least 10% UNH", right: "Family shares" },
  { step: 1, left: "R3  Healthcare at most 35%", right: "Concentration cap" },
  { step: 2, left: "Solve: exact mixed-integer model", right: "CVXPY + SCIP" },
  { step: 3, left: "JNJ and UNH are both healthcare: R1 + R2 force 40%", right: "Derived" },
  { step: 4, left: `Cap      ${bar(capChars)} ${CAP}%`, right: "R3", pre: true },
  { step: 4, left: `Required ${bar(capChars, needChars - capChars)} ${NEED}%`, right: "Over by 5", pre: true },
  { step: 5, left: "Verdict: infeasible. No portfolio meets all 3 rules.", right: "Proof", tag: true },
  { step: 6, left: "Smallest clashing set: {R1, R2, R3}", right: "Minimal" },
  { step: 7, left: "Cheapest fix: raise R3 to 40%, for the advisor to approve", right: "Suggested" },
];
const LAST = LINES[LINES.length - 1].step;

export default function RefereeExhibit() {
  const ref = useRef(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [step, setStep] = useState(reduced ? LAST : 0);
  const [playing, setPlaying] = useState(!reduced);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return;
    const id = setInterval(() => setStep((s) => (s >= LAST + 2 ? 0 : s + 1)), 1100);
    return () => clearInterval(id);
  }, [playing, visible]);

  const shown = Math.min(step, LAST);
  const go = (s) => {
    setPlaying(false);
    setStep(Math.max(0, Math.min(LAST, s)));
  };

  return (
    <div ref={ref}>
      <div className="row u">
        <span>AI proposes, math decides</span>
        <span>Replay</span>
      </div>
      <div className="row u">
        <span>Main line: the referee's proof, one step at a time.</span>
      </div>
      <div className="l" />
      {LINES.map((line, i) => (
        <div
          key={i}
          className="row wrap u"
          style={{ visibility: line.step <= shown ? "visible" : "hidden" }}
        >
          <span style={line.pre ? { whiteSpace: "pre" } : undefined}>
            {line.tag ? <span className="tag">{line.left}</span> : line.left}
          </span>
          <span className="muted">{line.right}</span>
        </div>
      ))}
      <div className="l" />
      <div className="row u">
        <span>
          Step {String(shown).padStart(2, "0")} of {String(LAST).padStart(2, "0")}
        </span>
        <span>
          <button type="button" className="ctl" onClick={() => go(0)} aria-label="First step">[|&lt;]</button>{" "}
          <button type="button" className="ctl" onClick={() => go(shown - 1)} aria-label="Previous step">[&lt;]</button>{" "}
          <button type="button" className="ctl" onClick={() => setPlaying((p) => !p)} aria-pressed={!playing}>
            [{playing ? "Pause" : "Play"}]
          </button>{" "}
          <button type="button" className="ctl" onClick={() => go(shown + 1)} aria-label="Next step">[&gt;]</button>
        </span>
      </div>
    </div>
  );
}
