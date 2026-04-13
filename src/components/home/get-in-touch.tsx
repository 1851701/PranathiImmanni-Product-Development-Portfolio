"use client";

import { useState } from "react";
import Link from "next/link";
import {
  isPortfolioEmailJsConfigured,
  sendPortfolioContactEmailJs,
} from "@/lib/contact-emailjs";
import { siteConfig } from "@/lib/site";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-neutral-900/25 bg-white/80 px-3 py-2.5 font-serif text-sm text-neutral-900 outline-none placeholder:text-neutral-400/90 focus:border-neutral-900/50 focus:ring-1 focus:ring-neutral-900/20 dark:border-white/20 dark:bg-[#243a4a]/60 dark:text-[#e8f4fc] dark:placeholder:text-neutral-500 dark:focus:border-white/35";

export function GetInTouchSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorHint, setErrorHint] = useState<string | null>(null);

  const { linkedin, github, instagram, facebook } = siteConfig.social;

  const socialRow: {
    label: string;
    href: string;
    Icon: typeof IconLinkedIn;
  }[] = [
    { label: "LinkedIn", href: linkedin, Icon: IconLinkedIn },
    ...(instagram
      ? [{ label: "Instagram", href: instagram, Icon: IconInstagram }]
      : []),
    ...(github
      ? [{ label: "GitHub", href: github, Icon: IconGitHub }]
      : []),
    ...(facebook
      ? [{ label: "Facebook", href: facebook, Icon: IconFacebook }]
      : []),
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorHint(null);
    try {
      if (isPortfolioEmailJsConfigured()) {
        await sendPortfolioContactEmailJs({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          message: form.message,
        });
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            message: form.message,
          }),
        });
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
          detail?: string;
        };
        if (!res.ok) {
          throw new Error(
            (typeof data.detail === "string" && data.detail) ||
              (typeof data.error === "string" && data.error) ||
              `Server error (${res.status}). Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local, restart the dev server, then try again.`,
          );
        }
      }
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorHint(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <div
      id="contact"
      className="pt-2 sm:pt-4"
    >
      <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-tight text-neutral-900 dark:text-[#e8f4fc]">
        Let&apos;s Get in Touch
      </h2>

      <p className="mt-10 font-serif text-base font-medium leading-relaxed tracking-[0.02em] text-neutral-800/95 dark:text-[#c5e2f2]">
        Find me Here
      </p>
      <ul className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4">
        {socialRow.map(({ label, href, Icon }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-serif text-sm font-medium uppercase italic tracking-wide text-neutral-900 underline decoration-neutral-900/40 underline-offset-4 transition hover:decoration-neutral-900 dark:text-[#e8f4fc] dark:decoration-white/40 dark:hover:decoration-white"
            >
              <Icon className="h-4 w-4 shrink-0 text-neutral-800 dark:text-[#a8d4f0]" />
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-14 font-serif text-base font-medium leading-relaxed tracking-[0.02em] text-neutral-800/95 dark:text-[#c5e2f2]">
        Say Hello!
      </p>
      {!isPortfolioEmailJsConfigured() ? (
        <p className="mt-3 max-w-2xl rounded-xl border border-amber-500/35 bg-amber-500/10 px-3 py-2 font-sans text-xs leading-relaxed text-amber-950 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-100">
          EmailJS is not active until you set{" "}
          <code className="rounded bg-black/5 px-1 dark:bg-white/10">
            NEXT_PUBLIC_EMAILJS_SERVICE_ID
          </code>
          ,{" "}
          <code className="rounded bg-black/5 px-1 dark:bg-white/10">
            NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
          </code>
          , and{" "}
          <code className="rounded bg-black/5 px-1 dark:bg-white/10">
            NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          </code>{" "}
          in <code className="rounded bg-black/5 px-1 dark:bg-white/10">.env.local</code>, then
          restart <code className="rounded bg-black/5 px-1 dark:bg-white/10">npm run dev</code>{" "}
          (or redeploy). Until then, the form uses the server fallback only.
        </p>
      ) : null}

      <form
        onSubmit={onSubmit}
        className="mt-5 max-w-4xl space-y-5"
        noValidate
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="git-first" className="sr-only">
              First name
            </label>
            <input
              id="git-first"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={form.firstName}
              onChange={(e) =>
                setForm((f) => ({ ...f, firstName: e.target.value }))
              }
              className={fieldClass}
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="git-last" className="sr-only">
              Last name
            </label>
            <input
              id="git-last"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={form.lastName}
              onChange={(e) =>
                setForm((f) => ({ ...f, lastName: e.target.value }))
              }
              className={fieldClass}
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="git-email" className="sr-only">
              Email
            </label>
            <input
              id="git-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className={fieldClass}
              placeholder="Email*"
            />
          </div>
        </div>
        <div>
          <label htmlFor="git-message" className="sr-only">
            Message
          </label>
          <textarea
            id="git-message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            className={`${fieldClass} resize-y min-h-[140px]`}
            placeholder="Message"
          />
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 pt-1">
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-neutral-900 px-14 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md transition enabled:hover:bg-neutral-800 disabled:opacity-60 dark:bg-[#0f1729] dark:enabled:hover:bg-black"
          >
            {status === "loading" ? "Sending…" : "Send"}
          </button>
        </div>
        {status === "success" ? (
          <p
            className="text-center font-serif text-sm text-emerald-800 dark:text-emerald-300/90"
            role="status"
          >
            Thanks — your message was sent. I&apos;ll be in touch soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p
            className="text-center font-serif text-sm text-red-800 dark:text-red-300/90"
            role="alert"
          >
            Something went wrong. Email me at {siteConfig.email}.
            {errorHint ? (
              <span className="mt-2 block font-sans text-xs opacity-90">
                {errorHint}
              </span>
            ) : null}
          </p>
        ) : null}
      </form>

      <div
        className="mt-14 space-y-2.5 text-center font-sans text-sm font-medium leading-relaxed tracking-wide text-neutral-800/95 sm:text-base dark:text-[#c5e2f2]"
        aria-label="Contact details"
      >
        <p>
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
            className="transition hover:text-neutral-950 dark:hover:text-white"
          >
            {siteConfig.phone}
          </a>
        </p>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline decoration-neutral-800/35 underline-offset-[0.2em] transition hover:text-neutral-950 hover:decoration-neutral-900 dark:decoration-white/35 dark:hover:text-white dark:hover:decoration-white"
          >
            {siteConfig.email}
          </a>
        </p>
        <p>{siteConfig.location}</p>
      </div>
    </div>
  );
}
