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
    <Section eyebrow="Contact" title="Get in touch">
      <p className="mb-8 text-sm leading-relaxed text-(--color-text-muted)">
        Working on something in AI, robotics, or climate tech? Reach out below,
        or email directly at{" "}
        <a href={`mailto:${profile.email}`} className="text-(--color-accent)">
          {profile.email}
        </a>
        .
      </p>

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
          <p className="text-sm text-(--color-accent)">Thanks — message sent.</p>
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
