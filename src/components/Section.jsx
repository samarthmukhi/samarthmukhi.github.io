export default function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`mx-auto max-w-3xl px-6 py-16 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-xs tracking-wide text-(--color-text-faint) uppercase">
          {eyebrow}
        </p>
      )}
      {title && (
        <h1 className="mb-8 font-serif text-2xl text-(--color-text)">{title}</h1>
      )}
      {children}
    </section>
  );
}
