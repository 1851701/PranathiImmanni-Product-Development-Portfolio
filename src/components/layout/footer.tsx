import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-9 lg:px-10">
        <p className="text-sm tracking-wide text-[var(--muted)]">
          © {year} {siteConfig.name}
        </p>
        <nav
          className="flex flex-wrap gap-8 text-sm tracking-wide"
          aria-label="Footer"
        >
          <Link
            href="/about"
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            About
          </Link>
          <Link
            href="/#work"
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
