import { motion } from "framer-motion";
import Section from "../components/Section";
import { research } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Research() {
  return (
    <Section command="cat research.md">
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        whileHover={cardHover}
        className="glass glass-hover rounded-xl p-6"
      >
        <h2 className="mb-2 text-lg leading-snug text-(--color-text)">{research.title}</h2>
        <p className="mb-1 text-sm text-(--color-accent)">{research.journal}</p>
        <p className="mb-4 text-xs text-(--color-text-faint)">{research.mentor}</p>
        <p className="mb-6 text-sm leading-relaxed text-(--color-text-muted)">
          {research.description}
        </p>

        {research.paperUrl && (
          <a
            href={research.paperUrl}
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-(--color-accent) transition-colors hover:text-(--color-text)"
          >
            Read the paper (PDF) &rarr;
          </a>
        )}

        <h3 className="mt-6 mb-3 font-mono text-xs tracking-[0.15em] text-(--color-text-faint) uppercase">
          Focus areas
        </h3>
        <motion.ul
          className="flex flex-wrap gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          {research.focusAreas.map((area) => (
            <motion.li
              key={area}
              variants={fadeUp}
              className="glass glass-hover rounded-md px-3 py-1 text-xs text-(--color-text-muted)"
            >
              {area}
            </motion.li>
          ))}
        </motion.ul>
      </motion.article>
    </Section>
  );
}
