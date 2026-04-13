import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach out to ${siteConfig.name} — collaborations, opportunities, or a thoughtful conversation.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-32 pt-24 sm:px-8 lg:px-10 lg:pt-32">
      <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20 xl:gap-28">
        <FadeIn className="lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-gradient-to-br from-[var(--surface-elevated)]/90 via-[var(--surface-elevated)]/50 to-[var(--surface)]/25 p-8 shadow-[var(--shadow-soft)] sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl"
              aria-hidden
            />
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-muted)]">
              Say hello
            </p>
            <h1 className="mt-5 max-w-[18ch] font-serif text-[2.125rem] font-medium leading-[1.12] tracking-tight text-[var(--foreground)] sm:max-w-none sm:text-4xl lg:text-[2.625rem]">
              Let&apos;s talk{" "}
              <span className="relative inline">
                <span className="relative z-10 italic text-[var(--foreground-soft)]">
                  design, ideas, or what you&apos;re building.
                </span>
                <span
                  className="absolute inset-x-[-0.12em] inset-y-[-0.08em] -z-0 rounded-md bg-[var(--accent-soft)]"
                  aria-hidden
                />
              </span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-[1.7] text-[var(--foreground-soft)]">
              Whether it is a collaboration, an opportunity, or just a thoughtful
              conversation, I would love to hear from you.
            </p>
            <div
              className="my-10 h-px w-full max-w-[12rem] bg-gradient-to-r from-[var(--accent)]/35 to-transparent"
              aria-hidden
            />
            <ul className="space-y-8 text-sm tracking-wide">
              <li className="group">
                <span className="text-[var(--muted)]">Email</span>
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 inline-block font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 transition duration-200 group-hover:decoration-[var(--accent)] group-hover:text-[var(--accent)]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="group">
                <span className="text-[var(--muted)]">LinkedIn</span>
                <br />
                <Link
                  href={siteConfig.social.linkedin}
                  className="mt-1 inline-flex items-center gap-1 font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 transition duration-200 hover:gap-2 group-hover:decoration-[var(--accent)] group-hover:text-[var(--accent)]"
                >
                  Profile
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
              <li className="group">
                <span className="text-[var(--muted)]">GitHub</span>
                <br />
                <Link
                  href={siteConfig.social.github}
                  className="mt-1 inline-flex items-center gap-1 font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 transition duration-200 hover:gap-2 group-hover:decoration-[var(--accent)] group-hover:text-[var(--accent)]"
                >
                  Repositories
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:pt-2">
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
