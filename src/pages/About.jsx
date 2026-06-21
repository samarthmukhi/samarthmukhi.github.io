import { motion } from "framer-motion";
import Section from "../components/Section";
import {
  profile,
  education,
  academicAchievements,
  skills,
  certifications,
} from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function About() {
  return (
    <Section command="whoami">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mb-10 text-base leading-relaxed text-(--color-text-muted)"
      >
        {profile.summary}
      </motion.p>

      <h2 className="mb-4 font-mono text-xs tracking-[0.15em] text-(--color-text-faint) uppercase">
        Education
      </h2>
      <motion.ul
        className="mb-10 space-y-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {education.map((item) => (
          <motion.li
            key={item.school}
            variants={fadeUp}
            whileHover={cardHover}
            className="glass glass-hover rounded-xl px-4 py-3"
          >
            <p className="text-sm text-(--color-text)">{item.school}</p>
            <p className="text-sm text-(--color-text-muted)">{item.detail}</p>
            <p className="text-xs text-(--color-text-faint)">{item.period}</p>
          </motion.li>
        ))}
      </motion.ul>

      <h2 className="mb-4 font-mono text-xs tracking-[0.15em] text-(--color-text-faint) uppercase">
        Academic achievements
      </h2>
      <ul className="mb-10 space-y-2">
        {academicAchievements.map((item) => (
          <li key={item.label} className="text-sm text-(--color-text-muted)">
            <span className="text-(--color-text)">{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>

      <h2 className="mb-4 font-mono text-xs tracking-[0.15em] text-(--color-text-faint) uppercase">
        Toolkit
      </h2>
      <motion.div
        className="mb-10 flex flex-wrap gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={fadeUp}
            className="glass glass-hover rounded-md px-3 py-1 text-xs text-(--color-text-muted)"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      <h2 className="mb-4 font-mono text-xs tracking-[0.15em] text-(--color-text-faint) uppercase">
        Certifications
      </h2>
      <motion.ul
        className="space-y-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {certifications.map((cert) => (
          <motion.li
            key={cert}
            variants={fadeUp}
            whileHover={cardHover}
            className="glass glass-hover rounded-lg px-4 py-2 text-sm text-(--color-text-muted)"
          >
            {cert}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
