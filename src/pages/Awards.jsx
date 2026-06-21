import { motion } from "framer-motion";
import Section from "../components/Section";
import { awards } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Awards() {
  return (
    <Section eyebrow="Awards and honors" title="Awards & honors">
      <motion.ul
        className="space-y-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {awards.map((award) => (
          <motion.li
            key={award.title}
            variants={fadeUp}
            whileHover={cardHover}
            className="glass glass-hover rounded-xl px-4 py-3"
          >
            <p className="text-sm text-(--color-text)">{award.title}</p>
            {award.org && (
              <p className="text-xs text-(--color-text-faint)">{award.org}</p>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
