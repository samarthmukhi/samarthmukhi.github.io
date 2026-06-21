import TerminalTitle from "./TerminalTitle";

export default function Section({ command, children, className = "" }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-16">
      {command && <TerminalTitle command={command} />}
      <div className={className}>{children}</div>
    </section>
  );
}
