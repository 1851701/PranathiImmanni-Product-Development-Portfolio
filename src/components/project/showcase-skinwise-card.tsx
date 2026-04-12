"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import {
  SkinWiseCaptureScreen,
  SkinWisePersonalizedInsightsScreen,
  SkinWiseResultsScreen,
} from "@/components/skinwise/skinwise-app-screens";
import { SkinWisePhoneShell } from "@/components/skinwise/skinwise-iosshell";

type ShowcaseSkinWiseCardProps = {
  project: Project;
  index: number;
};

const FRAME = 272;
const PHONE_H = (FRAME * 852) / 393;

/** Scaled live SkinWise UI — matches Works strip layout (center screen emphasized). */
function LiveSkinWiseShowcasePhone({
  Screen,
  emphasize,
  contentTone = "light",
}: {
  Screen: ComponentType;
  emphasize?: boolean;
  contentTone?: "light" | "dark";
}) {
  const scale = emphasize ? 0.44 : 0.4;
  const w = FRAME * scale;
  const h = PHONE_H * scale;

  return (
    <div
      className={`relative shrink-0 overflow-visible transition duration-300 ease-out will-change-transform ${
        emphasize
          ? "z-10 hover:z-20 hover:shadow-[0_28px_64px_-14px_rgba(55,44,36,0.2)]"
          : "hover:z-20 hover:shadow-[0_28px_64px_-14px_rgba(55,44,36,0.16)]"
      } group/phone rounded-[1.35rem]`}
      style={{ width: w, height: h }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 origin-top rounded-[1.35rem] shadow-[0_18px_48px_-14px_rgba(58,46,42,0.2)] ring-1 ring-black/[0.04] transition duration-300 group-hover/phone:shadow-[0_22px_56px_-14px_rgba(58,46,42,0.24)] dark:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.4)] dark:ring-[var(--border)]"
        style={{
          width: FRAME,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        <SkinWisePhoneShell frameWidth={FRAME} contentTone={contentTone} hideCaption>
          <Screen />
        </SkinWisePhoneShell>
      </div>
    </div>
  );
}

/**
 * Works showcase for SkinWise: three real app screens (scan → results → care),
 * replacing generic thumbnail imagery in phone frames.
 */
export function ShowcaseSkinWiseCard({ project, index }: ShowcaseSkinWiseCardProps) {
  const reduce = useReducedMotion();
  const { slug, title, shortDescription, tags, showcaseStatus } = project;

  const inner = (
    <Link
      href={`/projects/${slug}`}
      aria-label={`Open project: ${title}`}
      className="group block rounded-[1.75rem] bg-[var(--surface-elevated)]/90 p-8 [box-shadow:var(--shadow-card)] transition duration-300 ease-out hover:[box-shadow:var(--shadow-card-hover)] md:p-10 lg:p-12"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="pointer-events-none flex items-end justify-center gap-1.5 pt-1 sm:gap-2.5 md:gap-3 lg:justify-start lg:pl-2">
          <LiveSkinWiseShowcasePhone Screen={SkinWiseCaptureScreen} contentTone="dark" />
          <LiveSkinWiseShowcasePhone Screen={SkinWiseResultsScreen} emphasize />
          <LiveSkinWiseShowcasePhone Screen={SkinWisePersonalizedInsightsScreen} />
        </div>

        <div className="flex flex-col justify-center space-y-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--foreground)] transition group-hover:opacity-90 sm:text-4xl lg:text-[2.35rem]">
            {title}
          </h3>
          {showcaseStatus ? (
            <p className={showcaseStatus.className}>{showcaseStatus.text}</p>
          ) : null}
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
