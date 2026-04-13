"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  isPortfolioEmailJsConfigured,
  sendPortfolioContactEmailJs,
} from "@/lib/contact-emailjs";
import { siteConfig } from "@/lib/site";

const initial = { name: "", email: "", message: "" };

const fieldClass =
  "mt-2 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/90 px-4 py-3 text-[var(--foreground)] outline-none ring-[var(--accent)]/40 transition placeholder:text-[var(--muted)] focus:ring-2 dark:bg-[var(--surface)]/80";

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorHint, setErrorHint] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorHint(null);
    try {
      if (isPortfolioEmailJsConfigured()) {
        await sendPortfolioContactEmailJs({
          fullName: form.name,
          email: form.email,
          message: form.message,
        });
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
          detail?: string;
        };
        if (!res.ok) {
          throw new Error(
            (typeof data.detail === "string" && data.detail) ||
              (typeof data.error === "string" && data.error) ||
              `Server error (${res.status}). Set NEXT_PUBLIC_EMAILJS_* in .env.local and restart, or configure RESEND_API_KEY.`,
          );
        }
      }
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setErrorHint(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate>
      {!isPortfolioEmailJsConfigured() ? (
        <p className="rounded-xl border border-amber-500/35 bg-amber-500/10 px-3 py-2 font-sans text-xs leading-relaxed text-amber-950 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100">
          Add{" "}
          <code className="rounded bg-black/5 px-1 dark:bg-white/10">
            NEXT_PUBLIC_EMAILJS_* 
          </code>{" "}
          to <code className="rounded bg-black/5 px-1 dark:bg-white/10">.env.local</code> and
          restart the dev server so EmailJS can send mail. Otherwise this form uses the server
          fallback only.
        </p>
      ) : null}
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
          Something went wrong. Try again or email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline underline-offset-2"
          >
            {siteConfig.email}
          </a>
          .
          {errorHint ? (
            <span className="mt-2 block text-xs opacity-90">{errorHint}</span>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}
