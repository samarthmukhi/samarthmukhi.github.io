import { motion } from "framer-motion";
import Section from "../components/Section";
import { experience } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Experience() {
  return (
    <Section command="cat experience.log">
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
              {item.role} &middot; {item.org}
            </p>
            <p className="mt-1 text-xs text-(--color-text-faint)">{item.location}</p>
            <p className="mt-3 text-sm leading-relaxed text-(--color-text-muted)">
              {item.description}
            </p>
            {item.links && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-(--color-accent) transition-colors hover:text-(--color-text)"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
