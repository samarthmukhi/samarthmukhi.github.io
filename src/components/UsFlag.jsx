// U.S. flag as inline SVG (emoji flags don't render on Windows).
export default function UsFlag() {
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 190 100"
      width="1.9em"
      height="1em"
      role="img"
      aria-label="United States flag"
      style={{ display: "inline-block", verticalAlign: "-0.15em", marginLeft: "1ch" }}
    >
      {stripes.map((i) => (
        <rect key={i} x="0" y={(i * 100) / 13} width="190" height={100 / 13} fill={i % 2 ? "#ffffff" : "#b22234"} />
      ))}
      <rect x="0" y="0" width="76" height={(7 * 100) / 13} fill="#3c3b6e" />
      {Array.from({ length: 9 }, (_, r) =>
        Array.from({ length: r % 2 ? 5 : 6 }, (_, c) => (
          <circle key={`${r}-${c}`} cx={6.3 + c * 12.6 + (r % 2 ? 6.3 : 0)} cy={5.4 + r * 5.4} r="1.9" fill="#ffffff" />
        ))
      )}
      <rect x="0.5" y="0.5" width="189" height="99" fill="none" stroke="currentColor" strokeOpacity="0.25" />
    </svg>
  );
}
