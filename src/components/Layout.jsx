import { NavLink, useOutlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "../data/content";
import CustomCursor from "./CustomCursor";
import PageBackground from "./PageBackground";
import Spotlight from "./Spotlight";
import ThemeToggle from "./ThemeToggle";
import HamburgerButton from "./HamburgerButton";

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

          <div className="flex items-center gap-5">
            <nav className="hidden gap-6 lg:flex">
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

            <ThemeToggle />
            <HamburgerButton open={open} onClick={() => setOpen((o) => !o)} />
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-(--color-border) bg-(--color-bg) px-6 py-5 shadow-xl lg:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.04,
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 font-mono text-sm uppercase tracking-wide ${
                        isActive
                          ? "text-(--color-accent)"
                          : "text-(--color-text-muted)"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
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
