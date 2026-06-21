import Section from "../components/Section";
import {
  profile,
  education,
  academicAchievements,
  skills,
  certifications,
} from "../data/content";

export default function About() {
  return (
    <Section eyebrow="About" title="About me">
      <p className="mb-10 text-sm leading-relaxed text-(--color-text-muted)">
        {profile.summary}
      </p>

      <h2 className="mb-4 text-sm tracking-wide text-(--color-text-faint) uppercase">
        Education
      </h2>
      <ul className="mb-10 space-y-3">
        {education.map((item) => (
          <li
            key={item.school}
            className="glass glass-hover rounded-xl px-4 py-3"
          >
            <p className="text-sm text-(--color-text)">{item.school}</p>
            <p className="text-sm text-(--color-text-muted)">{item.detail}</p>
            <p className="text-xs text-(--color-text-faint)">{item.period}</p>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 text-sm tracking-wide text-(--color-text-faint) uppercase">
        Academic achievements
      </h2>
      <ul className="mb-10 space-y-2">
        {academicAchievements.map((item) => (
          <li key={item.label} className="text-sm text-(--color-text-muted)">
            <span className="text-(--color-text)">{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>

      <h2 className="mb-4 text-sm tracking-wide text-(--color-text-faint) uppercase">
        Toolkit
      </h2>
      <div className="mb-10 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="glass glass-hover rounded-md px-3 py-1 text-xs text-(--color-text-muted)"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="mb-4 text-sm tracking-wide text-(--color-text-faint) uppercase">
        Certifications
      </h2>
      <ul className="space-y-2">
        {certifications.map((cert) => (
          <li
            key={cert}
            className="glass glass-hover rounded-lg px-4 py-2 text-sm text-(--color-text-muted)"
          >
            {cert}
          </li>
        ))}
      </ul>
    </Section>
  );
}
