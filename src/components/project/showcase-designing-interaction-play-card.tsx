"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { cognitivePatternGameScreens } from "@/data/cognitive-pattern-game-assets";
import { CpgBrowserFrame } from "@/components/cognitive-pattern-game/cpg-browser-frame";

type Props = {
  project: Project;
  index: number;
};

/**
 * Works showcase for Designing Interaction Through Play: browser-style captures
 * from the live prototype (landscape frames suit web interaction work).
 */
export function ShowcaseDesigningInteractionPlayCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const { slug, title, shortDescription, tags } = project;

  const main = cognitivePatternGameScreens.entrance;
  const secondaryLeft = cognitivePatternGameScreens.about;
  const secondaryRight = cognitivePatternGameScreens.swordman;

  const inner = (
    <Link
      href={`/projects/${slug}`}
      aria-label={`Open project: ${title}`}
      className="group block rounded-[1.75rem] bg-[var(--surface-elevated)]/90 p-8 [box-shadow:var(--shadow-card)] transition duration-300 ease-out hover:[box-shadow:var(--shadow-card-hover)] md:p-10 lg:p-12"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="flex flex-col gap-4 lg:pl-2">
          <CpgBrowserFrame
            urlLabel="game-six-psi-82.vercel.app"
            className="w-full max-w-xl lg:max-w-none"
            bodyClassName="relative aspect-[16/10] min-h-[200px]"
          >
            <Image
              src={main}
              alt=""
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </CpgBrowserFrame>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <CpgBrowserFrame
              urlLabel="game-six-psi-82.vercel.app"
              className="w-[min(100%,280px)] flex-1 sm:max-w-[280px]"
              bodyClassName="relative aspect-[16/10] min-h-[120px]"
            >
              <Image
                src={secondaryLeft}
                alt=""
                fill
                className="object-cover object-center"
                sizes="280px"
              />
            </CpgBrowserFrame>
            <CpgBrowserFrame
              urlLabel="game-six-psi-82.vercel.app"
              className="w-[min(100%,280px)] flex-1 sm:max-w-[280px]"
              bodyClassName="relative aspect-[16/10] min-h-[120px]"
            >
              <Image
                src={secondaryRight}
                alt=""
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </CpgBrowserFrame>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--foreground)] transition group-hover:opacity-90 sm:text-4xl lg:text-[2.35rem]">
            {title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-[var(--muted)] sm:text-[0.95rem] sm:leading-relaxed">
            {shortDescription}
          </p>
          <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {tags.slice(0, 6).map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--foreground-soft)] shadow-sm ring-1 ring-[var(--border)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );

  if (reduce) {
    return (
      <article className="border-b border-[var(--border)] py-12 last:border-b-0 lg:py-16">
        {inner}
      </article>
    );
  }

  return (
    <motion.article
      className="border-b border-[var(--border)] py-12 last:border-b-0 lg:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.div
        whileHover={reduce ? undefined : { scale: 1.012 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="will-change-transform"
      >
        {inner}
      </motion.div>
    </motion.article>
  );
}
