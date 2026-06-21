import ParticleField from "./ParticleField";
import GlowOrb from "./GlowOrb";

export default function Section({ eyebrow, title, children, className = "" }) {
  return (
    <section>
      <div className="relative overflow-hidden border-b border-(--color-border)">
        <ParticleField density={9000} mobileDensity={14000} maxAlpha={0.55} />
        <GlowOrb />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          {eyebrow && (
            <p className="mb-2 text-xs tracking-wide text-(--color-text-faint) uppercase">
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="font-serif text-2xl text-(--color-text)">{title}</h1>
          )}
        </div>
      </div>

      <div className={`mx-auto max-w-3xl px-6 py-16 ${className}`}>{children}</div>
    </section>
  );
}
