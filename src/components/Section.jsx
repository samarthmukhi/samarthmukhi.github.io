export default function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-(--color-text-faint) uppercase">
          {eyebrow}
        </p>
      )}
      {title && (
        <h1 className="mb-10 font-serif text-4xl text-(--color-text) md:text-5xl">
          {title}
        </h1>
      )}
      <div className={className}>{children}</div>
    </section>
  );
}
