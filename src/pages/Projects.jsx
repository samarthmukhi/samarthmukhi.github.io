import { motion } from "framer-motion";
import Section from "../components/Section";
import { projects } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Projects() {
  return (
    <Section eyebrow="Projects" title="Projects">
      <motion.div
        className="space-y-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        {projects.map((project) => (
          <motion.article
            key={project.name}
            variants={fadeUp}
            whileHover={cardHover}
            className="glass glass-hover rounded-xl p-6"
          >
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <h2 className="text-lg text-(--color-text)">{project.name}</h2>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-(--color-accent)"
                >
                  Visit site &rarr;
                </a>
              )}
            </div>
            <p className="mb-3 text-sm text-(--color-text-muted)">{project.tagline}</p>
            <p className="mb-4 text-sm leading-relaxed text-(--color-text-muted)">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="glass rounded-md px-2 py-1 text-xs text-(--color-text-faint)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
