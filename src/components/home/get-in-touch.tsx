"use client";

import { useState } from "react";
import Link from "next/link";
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

  const { linkedin, instagram, facebook } = siteConfig.social;

  const socialRow: {
    label: string;
    href: string;
    Icon: typeof IconLinkedIn;
  }[] = [
    { label: "LinkedIn", href: linkedin, Icon: IconLinkedIn },
    ...(instagram
      ? [{ label: "Instagram", href: instagram, Icon: IconInstagram }]
      : []),
    ...(facebook
      ? [{ label: "Facebook", href: facebook, Icon: IconFacebook }]
      : []),
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
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
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setStatus("error");
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

      <p className="mt-10 font-serif text-sm lowercase tracking-wide text-neutral-800/90 dark:text-[#b8d4e8]">
        find me here:
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

      <p className="mt-14 font-serif text-sm lowercase tracking-wide text-neutral-800/90 dark:text-[#b8d4e8]">
        say hello!
      </p>

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
          </p>
        ) : null}
      </form>

      <div className="mt-14 space-y-1 text-center font-serif text-sm leading-relaxed text-neutral-800/95 dark:text-[#c5e2f2]">
        <p>{siteConfig.phone}</p>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline decoration-neutral-800/30 underline-offset-2 transition hover:decoration-neutral-900 dark:decoration-white/30"
          >
            {siteConfig.email}
          </a>
        </p>
        <p>{siteConfig.location}</p>
      </div>
    </div>
  );
}
