"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const initial = { name: "", email: "", message: "" };

const fieldClass =
  "mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/90 px-4 py-3 text-[var(--foreground)] outline-none ring-[var(--accent)]/40 transition placeholder:text-[var(--muted)] focus:ring-2 dark:bg-[var(--surface)]/80";

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm tracking-wide text-[var(--foreground-soft)]"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={fieldClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm tracking-wide text-[var(--foreground-soft)]"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm tracking-wide text-[var(--foreground-soft)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm((f) => ({ ...f, message: e.target.value }))
          }
          className={`${fieldClass} resize-y`}
          placeholder="Tell me about your project or opportunity…"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        className="w-full rounded-full bg-[var(--accent)] py-3.5 text-sm font-medium tracking-wide text-[var(--accent-foreground)] shadow-[var(--shadow-card)] transition enabled:hover:bg-[var(--accent-hover)] enabled:hover:shadow-[var(--shadow-card-hover)] disabled:opacity-60 sm:w-auto sm:px-12"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </motion.button>

      {status === "success" ? (
        <p
          className="text-sm tracking-wide text-[var(--accent-muted)]"
          role="status"
        >
          Thanks — your message was received. I&apos;ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="text-sm tracking-wide text-[var(--muted-light)]"
          role="alert"
        >
          Something went wrong. Try again or email directly.
        </p>
      ) : null}
    </form>
  );
}
