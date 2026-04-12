import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-sm tracking-wide text-[var(--muted)]">
          © {year} {siteConfig.name}
        </p>
        <div className="flex flex-wrap gap-8 text-sm tracking-wide">
          <Link
            href={siteConfig.social.linkedin}
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.social.github}
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            GitHub
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
