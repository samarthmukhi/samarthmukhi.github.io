import { Link } from "react-router-dom";
import WireKnot from "../components/WireKnot";
import { profile } from "../data/content";

export default function Home() {
  return (
    <section className="relative">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 md:min-h-[72vh] md:flex-row md:py-32">
        <div className="max-w-md text-center md:text-left">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-(--color-text-faint) uppercase">
            {profile.name}
          </p>
          <h1 className="mb-4 font-serif text-5xl leading-[1.05] text-(--color-text) md:text-6xl">
            {profile.tagline}
          </h1>
          <p className="mb-7 text-base leading-relaxed text-(--color-text-muted)">
            Incoming Data Science student, UW&ndash;Madison. Founder, NautiClean.
            Building deployable AI and robotics systems.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Link
              to="/projects"
              className="border-b border-(--color-text) pb-0.5 text-sm text-(--color-text) transition-colors hover:text-(--color-accent) hover:border-(--color-accent)"
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
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <WireKnot className="h-64 w-64 md:h-80 md:w-80" />
        </div>
      </div>
    </section>
  );
}
