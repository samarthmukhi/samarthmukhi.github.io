import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { navLinks, profile } from "../data/content";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text)">
      <CustomCursor />
      <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="text-sm tracking-wide text-(--color-text)">
            {profile.name}
          </NavLink>

          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "text-(--color-text)"
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
            className="text-sm text-(--color-text) md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-4 border-t border-(--color-border) px-6 py-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive ? "text-(--color-text)" : "text-(--color-text-muted)"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-(--color-border) px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-(--color-text-faint) md:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-(--color-text-muted)">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-(--color-text-muted)"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
