import Section from "../components/Section";
import { research } from "../data/content";

export default function Research() {
  return (
    <Section eyebrow="Research" title="Research">
      <article className="glass rounded-xl p-6">
        <h2 className="mb-2 text-lg leading-snug text-(--color-text)">{research.title}</h2>
        <p className="mb-1 text-sm text-(--color-accent)">{research.journal}</p>
        <p className="mb-4 text-xs text-(--color-text-faint)">{research.mentor}</p>
        <p className="mb-6 text-sm leading-relaxed text-(--color-text-muted)">
          {research.description}
        </p>

        <h3 className="mb-3 font-mono text-xs tracking-[0.15em] text-(--color-text-faint) uppercase">
          Focus areas
        </h3>
        <ul className="flex flex-wrap gap-2">
          {research.focusAreas.map((area) => (
            <li
              key={area}
              className="glass glass-hover rounded-md px-3 py-1 text-xs text-(--color-text-muted)"
            >
              {area}
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}
