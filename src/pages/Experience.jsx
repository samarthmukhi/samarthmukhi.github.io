import { motion } from "framer-motion";
import Section from "../components/Section";
import { experience } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Experience() {
  return (
    <Section eyebrow="Experience" title="Experience">
      <motion.ol
        className="space-y-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {experience.map((item) => (
          <motion.li
            key={`${item.org}-${item.period}`}
            variants={fadeUp}
            whileHover={cardHover}
            className="glass glass-hover rounded-xl p-6"
          >
            <p className="font-mono text-xs text-(--color-text-faint)">{item.period}</p>
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
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
