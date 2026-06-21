import { Link } from "react-router-dom";
import ParticleField from "../components/ParticleField";
import DataGlobe from "../components/DataGlobe";
import { profile } from "../data/content";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <ParticleField />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 md:min-h-[70vh] md:flex-row md:py-32">
        <div className="max-w-md text-center md:text-left">
          <p className="mb-2 text-xs tracking-wide text-(--color-text-faint) uppercase">
            {profile.name}
          </p>
          <h1 className="mb-4 font-serif text-3xl leading-tight text-(--color-text) md:text-4xl">
            {profile.tagline}
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-(--color-text-muted)">
            Incoming Data Science student, UW&ndash;Madison. Founder, NautiClean.
            Building deployable AI and robotics systems.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <Link
              to="/projects"
              className="border-b border-(--color-text) pb-0.5 text-sm text-(--color-text)"
            >
              View work
            </Link>
            <Link to="/research" className="text-sm text-(--color-text-faint)">
              / Research
            </Link>
            <Link to="/contact" className="text-sm text-(--color-text-faint)">
              / Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <DataGlobe className="h-56 w-56 md:h-64 md:w-64" />
        </div>
      </div>
    </section>
  );
}
