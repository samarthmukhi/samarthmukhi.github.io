import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Gutter from "../components/Gutter";
import ThemeToggle from "../components/ThemeToggle";
import SwarmExhibit from "../components/SwarmExhibit";
import RefereeExhibit from "../components/RefereeExhibit";
import ContactForm from "../components/ContactForm";
import {
  profile,
  education,
  academicAchievements,
  skills,
  certifications,
  experience,
  projects,
  research,
  awards,
  sections,
} from "../data/content";

// Old multi-page routes now point at sections of the single document.
const ROUTES = {
  "/about": "about",
  "/experience": "experience",
  "/projects": "projects",
  "/research": "research",
  "/awards": "awards",
  "/contact": "contact",
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const RULE = "=".repeat(240);

const Blank = () => <div className="l" />;
const Rule = () => <div className="rule" aria-hidden="true">{RULE}</div>;
const Heading = ({ id, children }) => (
  <h2 id={id} className="l c u" style={{ font: "inherit", margin: 0 }}>
    {children}
  </h2>
);

export default function Document() {
  const docRef = useRef(null);
  const { pathname } = useLocation();
  const target = ROUTES[pathname];
  const notFound = pathname !== "/" && !target;

  useEffect(() => {
    if (target) document.getElementById(target)?.scrollIntoView();
  }, [target]);

  return (
    <main ref={docRef} className="page">
      <Gutter targetRef={docRef} />

      {/* ---------- letterhead ---------- */}
      <div className="row u">
        <span>{profile.name}</span>
        <ThemeToggle />
      </div>
      <div className="u">Computer Science + Statistics</div>
      <div className="u">University of Wisconsin-Madison</div>
      <div className="u">{profile.location}</div>
      <Blank />
      {notFound && (
        <>
          <div>
            <span className="tag">404: no such page. The full record follows.</span>
          </div>
          <Blank />
        </>
      )}
      <div>
        <span className="tag">A working record: optimization, quant finance &amp; AI systems</span>
      </div>
      <Blank />
      <p>{profile.summary}</p>
      <Blank />
      <div className="links u">
        <a href={profile.github}>GitHub</a>
        <a href={profile.linkedin}>LinkedIn</a>
        <a href={profile.x}>X</a>
        <a href="mailto:samarth.mukhi@wisc.edu">Email</a>
      </div>
      <Blank />
      <nav aria-label="Sections" className="links u">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </nav>
      <Blank />
      <Blank />

      {/* ---------- selected work ---------- */}
      <Heading id="work">Selected work</Heading>
      <div className="tbl u">
        <span>No.</span>
        <span>Project</span>
        <span>Year</span>
        {projects.map((p, i) => (
          <a key={p.name} href={`#p-${slug(p.name)}`}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <span>{p.name}</span>
            <span>{p.year}</span>
          </a>
        ))}
      </div>
      <Blank />
      <Rule />
      <Blank />

      {/* ---------- exhibit A ---------- */}
      <section className="exhibit" aria-labelledby="exhibit-a">
        <Blank />
        <Heading id="exhibit-a">Exhibit A: a particle swarm, searching</Heading>
        <SwarmExhibit />
        <Blank />
      </section>
      <Blank />

      {/* ---------- projects ---------- */}
      <Heading id="projects">Projects</Heading>
      <Blank />
      {projects.map((p, i) => (
        <article key={p.name} id={`p-${slug(p.name)}`}>
          <div className="row u">
            <span>
              <span className="tag">
                {String(i + 1).padStart(2, "0")} {p.name}
              </span>
            </span>
            <span>{p.year}</span>
          </div>
          <div className="u muted">{p.tagline}</div>
          <p>{p.description}</p>
          <div className="u muted">Stack: {p.tech.join(" · ")}</div>
          {p.links && (
            <div className="links u">
              {p.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label} →
                </a>
              ))}
            </div>
          )}
          <Blank />
          {p.name === "SwarmFolio Referee" && (
            <>
              <section className="exhibit" aria-labelledby="exhibit-b">
                <Blank />
                <Heading id="exhibit-b">Exhibit B: one impossible client</Heading>
                <RefereeExhibit />
                <Blank />
              </section>
              <Blank />
            </>
          )}
        </article>
      ))}
      <Rule />
      <Blank />

      {/* ---------- experience ---------- */}
      <Heading id="experience">Experience</Heading>
      <Blank />
      {experience.map((e) => (
        <article key={e.org + e.role}>
          <div className="row wrap u">
            <strong style={{ fontWeight: 600 }}>{e.role}</strong>
            <span>{e.period}</span>
          </div>
          <div className="u muted">
            {e.org} · {e.location}
          </div>
          <p>{e.description}</p>
          {e.links && (
            <div className="links u">
              {e.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label} →
                </a>
              ))}
            </div>
          )}
          <Blank />
        </article>
      ))}
      <Rule />
      <Blank />

      {/* ---------- research ---------- */}
      <Heading id="research">Research</Heading>
      <Blank />
      <div>
        <span className="tag">First-author paper</span>
      </div>
      <p className="u">{research.title}</p>
      <div className="u muted">{research.journal}</div>
      <div className="muted">{research.mentor}</div>
      <Blank />
      <p>{research.description}</p>
      <Blank />
      <div className="u">Focus: {research.focusAreas.join(" · ")}</div>
      {research.paperUrl && (
        <div className="u">
          <a href={research.paperUrl}>Read the paper →</a>
        </div>
      )}
      <Blank />
      <Rule />
      <Blank />

      {/* ---------- education ---------- */}
      <Heading id="about">Education</Heading>
      <Blank />
      {education.map((e) => (
        <div key={e.school}>
          <div className="row wrap u">
            <span>{e.school}</span>
            <span>{e.period}</span>
          </div>
          <p className="muted">{e.detail}</p>
          <Blank />
        </div>
      ))}
      {academicAchievements.map((a) => (
        <div key={a.label} className="row wrap u">
          <span>{a.label}</span>
          <span>{a.value}</span>
        </div>
      ))}
      <Blank />
      <div className="u">Toolkit</div>
      <p className="muted">{skills.join(" · ")}</p>
      <Blank />
      <div className="u">Certifications</div>
      {certifications.map((c) => (
        <div key={c} className="muted">
          {c}
        </div>
      ))}
      <Blank />
      <div className="u">Interests</div>
      {profile.interests.map((c) => (
        <div key={c} className="muted">
          {c}
        </div>
      ))}
      <Blank />
      <Rule />
      <Blank />

      {/* ---------- awards ---------- */}
      <Heading id="awards">Awards</Heading>
      <Blank />
      {awards.map((a) => (
        <div key={a.title}>
          <div className="row wrap u">
            <span>{a.title}</span>
            <span>{a.tag}</span>
          </div>
          <div className="muted">{a.org}</div>
        </div>
      ))}
      <Blank />
      <Rule />
      <Blank />

      {/* ---------- contact ---------- */}
      <Heading id="contact">Contact</Heading>
      <Blank />
      {profile.emails.map((e) => (
        <div key={e.value} className="field">
          <span className="u">{e.label}:</span>
          <span>
            <a href={`mailto:${e.value}`}>{e.value}</a> <span className="muted">· {e.note}</span>
          </span>
        </div>
      ))}
      <Blank />
      <ContactForm />
      <Blank />
      <Blank />
      <div className="c u muted">
        End of record<span className="blink">▋</span>
      </div>
    </main>
  );
}
