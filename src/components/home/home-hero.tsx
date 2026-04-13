import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const workLinkClass =
  "font-sans text-sm font-medium tracking-wide text-[var(--muted)] underline-offset-[6px] transition hover:text-[var(--foreground-soft)] hover:underline";

/** Pill buttons — muted olive fill, light label (matches resume-style CTAs) */
const socialPillClass =
  "inline-flex min-h-[2.5rem] items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2 font-sans text-sm font-medium text-[var(--accent-foreground)] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition hover:bg-[var(--accent-hover)] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function HomeHero() {
  const { heading, subheading } = siteConfig.hero;
  const { linkedin, github, instagram } = siteConfig.social;

  return (
    <section
      className="border-b border-[var(--border)] bg-[var(--background)]"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14 xl:gap-16">
          <div className="relative h-[min(72vw,280px)] w-[min(72vw,280px)] shrink-0 overflow-hidden rounded-full bg-neutral-200 ring-1 ring-[var(--border)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <Image
              src="/pranathi-portrait.png"
              alt={siteConfig.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 280px, 320px"
            />
          </div>

          <div className="min-w-0 flex-1 text-center lg:text-left">
            <h1 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--foreground)]">
              {heading}
            </h1>
            <p className="mx-auto mt-10 max-w-2xl font-sans text-[clamp(1.0625rem,2vw,1.375rem)] font-normal leading-[1.55] tracking-[-0.01em] text-[var(--foreground-soft)] sm:mt-12 lg:mx-0">
              {subheading}
            </p>
            <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 sm:mt-14 lg:mx-0 lg:items-start">
              <nav
                className="flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                aria-label="Social profiles"
              >
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialPillClass}
                >
                  LinkedIn
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialPillClass}
                >
                  GitHub
                </a>
                {instagram ? (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialPillClass}
                  >
                    Instagram
                  </a>
                ) : null}
              </nav>
              <p>
                <Link href="#work" className={workLinkClass}>
                  Check my projects out below!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
