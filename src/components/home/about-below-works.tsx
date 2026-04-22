import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { FavoriteSingerAlbum } from "@/components/home/favorite-singer-album";
import { LightBlueGradientBackdrop } from "@/components/home/light-blue-gradient-backdrop";
import {
  HobbyPolaroid,
  StarDivider,
} from "@/components/home/scrapbook-elements";

/** Pathway, hobbies, and education — below Works on the home page. */
export function AboutBelowWorksSection() {
  const g = siteConfig.getToKnowMe;

  return (
    <section
      id="about-me"
      className="relative scroll-mt-20 overflow-hidden border-t border-sky-900/10 text-neutral-900 dark:border-sky-900/25 dark:text-[#e8f4fc]"
      aria-labelledby="about-me-heading"
    >
      <LightBlueGradientBackdrop tone="section" />
      <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-6 lg:px-10 lg:pb-24 lg:pt-8">
        <StarDivider placement="below-nav" />

        <h2
          id="about-me-heading"
          className="text-center font-sans text-sm font-bold uppercase tracking-[0.28em] text-neutral-900 dark:text-sky-100"
        >
          About Me
        </h2>
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-start gap-8 sm:gap-10 lg:max-w-none lg:flex-row lg:gap-10 xl:gap-12">
          <div className="relative aspect-[3/4] w-full max-w-[240px] shrink-0 overflow-hidden rounded-2xl bg-sky-950/10 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.2)] ring-1 ring-sky-900/15 sm:max-w-[260px] lg:max-w-[280px]">
            <Image
              src="/about/about-me-portrait.png"
              alt={`${siteConfig.name}, portrait`}
              fill
              className="object-cover object-[center_38%]"
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-8 font-serif text-base leading-[1.9] text-neutral-900/95 dark:text-[#d5e8f3] sm:text-[1.0625rem] lg:max-w-3xl lg:pt-1">
            {g.aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <StarDivider />

        <h3 className="font-sans text-sm font-bold uppercase tracking-[0.28em] text-neutral-900 dark:text-sky-100">
          Hobbies
        </h3>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:gap-12">
          {g.hobbies.map((item) => (
            <HobbyPolaroid key={item.title} item={item} />
          ))}
        </div>

        <StarDivider />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FavoriteSingerAlbum />
          <div>
            <p className="font-sans text-sm font-semibold text-neutral-950 dark:text-white">
              Major and focus?
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-neutral-800/95 dark:text-[#d8ccd2]">
              {g.educationLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
