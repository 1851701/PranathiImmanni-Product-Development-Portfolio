import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { LightBlueGradientBackdrop } from "@/components/home/light-blue-gradient-backdrop";
import { ListeningLately } from "@/components/home/listening-lately";
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
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <StarDivider />

        <h2
          id="about-me-heading"
          className="text-center font-sans text-sm font-bold uppercase tracking-[0.28em] text-neutral-900 dark:text-sky-100"
        >
          About Me
        </h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-8 font-serif text-base leading-[1.9] text-neutral-900/95 dark:text-[#d5e8f3] sm:text-[1.0625rem]">
          <p>
            <strong className="font-semibold text-neutral-950 dark:text-white">
              {g.philosophyLead}
            </strong>
            {g.philosophyRest}
          </p>
          <p>
            <strong className="font-semibold text-neutral-950 dark:text-white">
              {g.personalLead}
            </strong>
            {g.personalRest}
          </p>
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
          <div>
            <ListeningLately />
          </div>
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
