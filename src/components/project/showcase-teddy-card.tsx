"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { TeddyPhoneShell } from "@/components/teddy/teddy-phone-shell";
import {
  TeddyScreenHome,
  TeddyScreenJournal,
  TeddyScreenMood,
} from "@/components/teddy/teddy-screens";

type ShowcaseTeddyCardProps = {
  project: Project;
  index: number;
};

const FRAME = 260;
const PHONE_H = (FRAME * 19) / 9;

/** Scaled live Teddy UI — center phone shows Home with Teddy mark (🧸). */
function LiveTeddyShowcasePhone({
  Screen,
  emphasize,
}: {
  Screen: ComponentType;
  emphasize?: boolean;
}) {
  const scale = emphasize ? 0.48 : 0.42;
  const w = FRAME * scale;
  const h = PHONE_H * scale;

  return (
    <div
      className={`relative shrink-0 overflow-visible transition duration-300 ease-out will-change-transform ${
        emphasize
          ? "z-10 hover:z-20 hover:shadow-[0_28px_64px_-14px_rgba(55,44,36,0.22)]"
          : "hover:z-20 hover:shadow-[0_28px_64px_-14px_rgba(55,44,36,0.18)]"
      } group/phone rounded-[1.35rem]`}
      style={{ width: w, height: h }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 origin-top rounded-[1.35rem] shadow-[0_18px_48px_-14px_rgba(58,46,42,0.2)] ring-1 ring-black/[0.04] transition duration-300 group-hover/phone:shadow-[0_22px_56px_-14px_rgba(58,46,42,0.26)] dark:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.4)] dark:ring-[var(--border)]"
        style={{
          width: FRAME,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        <TeddyPhoneShell frameWidth={FRAME}>
          <Screen />
        </TeddyPhoneShell>
      </div>
    </div>
  );
}

/**
 * Premium two-column showcase for Teddy: three live app screens + editorial copy.
 * Entire block links to /projects/teddy.
 */
export function ShowcaseTeddyCard({ project, index }: ShowcaseTeddyCardProps) {
  const reduce = useReducedMotion();
  const { title, shortDescription, tags, showcaseStatus } = project;

  const inner = (
    <Link
      href="/projects/teddy"
      aria-label={`Open project: ${title}`}
      className={`group/card block rounded-[1.75rem] bg-[var(--surface-elevated)]/90 p-8 [box-shadow:var(--shadow-card)] transition duration-300 ease-out hover:[box-shadow:var(--shadow-card-hover)] md:p-10 lg:p-12 ${
        index === 0
          ? "ring-2 ring-[var(--accent)]/40 hover:ring-[var(--accent)]/55 dark:ring-[var(--accent)]/35"
          : ""
      }`}
    >
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="pointer-events-none flex items-center justify-center gap-2.5 pt-2 sm:gap-4 lg:justify-start lg:pl-1 xl:gap-5">
          <LiveTeddyShowcasePhone Screen={TeddyScreenMood} />
          <LiveTeddyShowcasePhone Screen={TeddyScreenHome} emphasize />
          <LiveTeddyShowcasePhone Screen={TeddyScreenJournal} />
        </div>

        <div className="flex flex-col justify-center space-y-8 text-center lg:max-w-xl lg:text-left xl:space-y-10">
          {index === 0 ? (
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Featured — emotional design
            </p>
          ) : null}
          <h3 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[var(--foreground)] transition duration-300 group-hover/card:opacity-[0.92] sm:text-[2.75rem] lg:text-5xl">
            {title}
          </h3>
          {showcaseStatus ? (
            <p className={showcaseStatus.className}>{showcaseStatus.text}</p>
          ) : null}
          <p className="font-sans text-base leading-[1.75] text-[var(--muted)] sm:text-[1.05rem] sm:leading-[1.8]">
            {shortDescription}
          </p>
          <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {tags.map((tag) => (
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
      <article
        className={`border-b border-[var(--border)] last:border-b-0 ${index === 0 ? "py-16 lg:py-24" : "py-14 lg:py-20"}`}
      >
        {inner}
      </article>
    );
  }

  return (
    <motion.article
      className={`border-b border-[var(--border)] last:border-b-0 ${index === 0 ? "py-16 lg:py-24" : "py-14 lg:py-20"}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.div
        whileHover={{ scale: 1.006 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="will-change-transform"
      >
        {inner}
      </motion.div>
    </motion.article>
  );
}
