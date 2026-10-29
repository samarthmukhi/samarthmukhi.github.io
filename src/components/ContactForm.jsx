import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykqgpky";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
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
    <form onSubmit={handleSubmit}>
      <label className="field">
        <span className="u">Name:</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label className="field">
        <span className="u">Email:</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <div className="l" />
      <label className="field">
        <span className="u">Message:</span>
        <textarea name="message" required rows={4} />
      </label>
      <div className="l" />
      <div className="row u">
        <span>
          <button type="submit" className="btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message ↵"}
          </button>
        </span>
        <span className="muted" role="status">
          {status === "sent" && "Received. I'll reply soon."}
          {status === "error" && "Didn't send. Email me instead."}
        </span>
      </div>
    </form>
  );
}
