import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WireKnot from "../components/WireKnot";
import { profile } from "../data/content";
import { fadeUp, staggerContainer } from "../lib/motion";

export default function Home() {
  return (
    <section className="relative">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 md:min-h-[72vh] md:flex-row md:py-32">
        <motion.div
          className="max-w-md text-center md:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 font-mono text-xs tracking-[0.2em] text-(--color-text-faint) uppercase"
          >
            {profile.name}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-4 font-serif text-5xl leading-[1.05] text-(--color-text) md:text-6xl"
          >
            {profile.tagline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mb-7 text-base leading-relaxed text-(--color-text-muted)"
          >
            Incoming Data Science student, UW&ndash;Madison. Founder, NautiClean.
            Building deployable AI and robotics systems.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4 md:justify-start"
          >
            <Link
              to="/projects"
              className="border-b border-(--color-text) pb-0.5 text-sm text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              View work
            </Link>
            <Link
              to="/research"
              className="font-mono text-sm text-(--color-text-faint) transition-colors hover:text-(--color-text-muted)"
            >
              / research
            </Link>
            <Link
              to="/contact"
              className="font-mono text-sm text-(--color-text-faint) transition-colors hover:text-(--color-text-muted)"
            >
              / contact
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-1 justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <WireKnot className="h-64 w-64 md:h-80 md:w-80" />
        </motion.div>
      </div>
    </section>
  );
}
