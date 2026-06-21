import { motion } from "framer-motion";
import Section from "../components/Section";
import { awards } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Awards() {
  return (
    <Section command="git log --honors">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mb-8 font-mono text-xs text-(--color-text-faint)"
      >
        {awards.length} honors and distinctions
      </motion.p>

      <motion.ul
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {awards.map((award, i) => (
          <motion.li
            key={award.title}
            variants={fadeUp}
            whileHover={cardHover}
            className="glass glass-hover flex flex-col rounded-xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-(--color-text-faint)">
                {String(i + 1).padStart(2, "0")}
              </span>
              {award.tag && (
                <span className="rounded-md border border-(--color-accent)/30 bg-(--color-accent)/10 px-2 py-0.5 font-mono text-[10px] tracking-wide text-(--color-accent) uppercase">
                  {award.tag}
                </span>
              )}
            </div>
            <h2 className="font-serif text-xl leading-snug text-(--color-text)">
              {award.title}
            </h2>
            {award.org && (
              <p className="mt-2 text-sm text-(--color-text-muted)">{award.org}</p>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
