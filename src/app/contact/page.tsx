import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} — project inquiries, collaborations, and opportunities.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-20 sm:px-8 lg:px-10 lg:pt-28">
      <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
        <FadeIn>
          <h1 className="font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-[var(--muted)]">
            For freelance, full-time roles, or collaborations — send a note
            below or reach out on social.
          </p>
          <ul className="mt-12 space-y-6 text-sm tracking-wide">
            <li>
              <span className="text-[var(--muted)]">Email</span>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="text-[var(--muted)]">LinkedIn</span>
              <br />
              <Link
                href={siteConfig.social.linkedin}
                className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
              >
                Profile →
              </Link>
            </li>
            <li>
              <span className="text-[var(--muted)]">GitHub</span>
              <br />
              <Link
                href={siteConfig.social.github}
                className="font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
              >
                Repositories →
              </Link>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
