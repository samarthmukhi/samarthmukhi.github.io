import { NavLink, useOutlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "../data/content";
import CustomCursor from "./CustomCursor";
import PageBackground from "./PageBackground";
import Spotlight from "./Spotlight";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <div className="relative min-h-screen text-(--color-text)">
      <PageBackground />
      <CustomCursor />
      <Spotlight />

      <header className="glass-nav sticky top-0 z-50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink
            to="/"
            className="font-serif text-xl text-(--color-text)"
          >
            {profile.name}
          </NavLink>

          <nav className="hidden gap-7 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-wide uppercase transition-colors ${
                    isActive
                      ? "text-(--color-accent)"
                      : "text-(--color-text-muted) hover:text-(--color-text)"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="font-mono text-xs uppercase text-(--color-text) md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-white/8 px-6 py-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-mono text-xs uppercase tracking-wide ${
                    isActive ? "text-(--color-accent)" : "text-(--color-text-muted)"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="glass-nav mt-8 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 font-mono text-xs text-(--color-text-faint) md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {profile.name}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-(--color-accent)"
            >
              Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-(--color-accent)"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-(--color-accent)"
            >
              LinkedIn
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-(--color-accent)"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
