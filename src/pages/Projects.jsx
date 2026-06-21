import { motion } from "framer-motion";
import Section from "../components/Section";
import { projects } from "../data/content";
import { fadeUp, staggerContainer, cardHover, inView } from "../lib/motion";

export default function Projects() {
  return (
    <Section command="ls ~/projects">
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
            <h2 className="mb-2 text-lg text-(--color-text)">{project.name}</h2>
            <p className="mb-3 text-sm text-(--color-text-muted)">{project.tagline}</p>
            <p className="mb-4 text-sm leading-relaxed text-(--color-text-muted)">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="glass rounded-md px-2 py-1 text-xs text-(--color-text-faint)"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.links && (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
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
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
