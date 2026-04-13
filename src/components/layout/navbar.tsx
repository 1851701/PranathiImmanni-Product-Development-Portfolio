"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";
import { PIMark } from "./pi-mark";

const navLinks = [
  { href: "/projects", label: "Work." },
  { href: "/about", label: "About." },
  { href: "/contact", label: "Contact." },
  { href: "/resume", label: "Resume." },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const firstName = siteConfig.name.split(" ")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6 sm:h-[4.25rem] lg:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 md:gap-4"
          aria-label={`${siteConfig.name} home`}
        >
          <PIMark />
          <span className="font-serif text-[1.15rem] tracking-tight text-[var(--foreground)] transition group-hover:opacity-80 sm:text-xl">
            {firstName}
            <span className="text-[var(--muted)]">.</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-2 pl-6 sm:gap-3 md:pl-10 lg:pl-16">
          <nav
            className="hidden items-center md:flex md:gap-10 lg:gap-14"
            aria-label="Main"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-serif text-[0.65rem] font-normal uppercase tracking-[0.22em] transition sm:text-xs ${
                    active
                      ? "text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground-soft)]"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]/50 p-2.5 text-[var(--foreground)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <nav
              className="flex flex-col gap-0.5 px-6 py-5 sm:px-8"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-serif text-sm uppercase tracking-[0.15em] text-[var(--foreground-soft)] transition hover:bg-[var(--surface)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
