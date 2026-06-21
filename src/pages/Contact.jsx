import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { profile } from "../data/content";
import { fadeUp, inView } from "../lib/motion";

// TODO: replace YOUR_FORM_ID with your real Formspree form ID
// 1. Create a free account at https://formspree.io
// 2. Create a new form, copy its endpoint ID
// 3. Paste it below
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section command="./contact.sh">
      <p className="mb-8 text-sm leading-relaxed text-(--color-text-muted)">
        Working on something in AI, robotics, or climate tech? Send a message
        below, or reach out through the right channel.
      </p>

      <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {profile.emails.map((item) => (
          <a
            key={item.value}
            href={`mailto:${item.value}`}
            className="glass glass-hover flex flex-col rounded-xl p-4"
          >
            <span className="font-mono text-[10px] tracking-wide text-(--color-accent) uppercase">
              {item.label}
            </span>
            <span className="mt-1 text-sm break-all text-(--color-text)">
              {item.value}
            </span>
            <span className="mt-1 text-xs text-(--color-text-faint)">{item.note}</span>
          </a>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-(--color-text-faint)">
        <span>{profile.address}</span>
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

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
      >
        <div>
          <label htmlFor="name" className="mb-1 block text-xs text-(--color-text-faint)">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="glass-input w-full rounded-lg px-3 py-2 text-sm text-(--color-text) outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-xs text-(--color-text-faint)">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="glass-input w-full rounded-lg px-3 py-2 text-sm text-(--color-text) outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-xs text-(--color-text-faint)">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="glass-input w-full rounded-lg px-3 py-2 text-sm text-(--color-text) outline-none transition-colors"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="glass glass-hover rounded-lg px-5 py-2 text-sm text-(--color-text) disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </motion.button>

        {status === "sent" && (
          <p className="text-sm text-(--color-accent)">Thanks, your message was sent.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Try emailing directly instead.
          </p>
        )}
      </motion.form>
    </Section>
  );
}
