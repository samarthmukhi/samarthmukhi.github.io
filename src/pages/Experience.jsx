import Section from "../components/Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section eyebrow="Experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((item) => (
          <li key={`${item.org}-${item.period}`} className="border-l border-(--color-border) pl-4">
            <p className="text-xs text-(--color-text-faint)">{item.period}</p>
            <p className="mt-1 text-base text-(--color-text)">
              {item.role} &middot;{" "}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-(--color-text-muted) text-(--color-accent)"
                >
                  {item.org}
                </a>
              ) : (
                item.org
              )}
            </p>
            <p className="mt-1 text-xs text-(--color-text-faint)">{item.location}</p>
            <p className="mt-3 text-sm leading-relaxed text-(--color-text-muted)">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
