import Section from "../components/Section";
import { awards } from "../data/content";

export default function Awards() {
  return (
    <Section eyebrow="Awards and honors" title="Awards & honors">
      <ul className="space-y-3">
        {awards.map((award) => (
          <li key={award.title} className="glass glass-hover rounded-xl px-4 py-3">
            <p className="text-sm text-(--color-text)">{award.title}</p>
            {award.org && (
              <p className="text-xs text-(--color-text-faint)">{award.org}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
