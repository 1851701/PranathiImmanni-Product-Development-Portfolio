"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

/** CareBridge showcase card: single web screenshot (no phone stack). */
export function ShowcaseCareBridgeCard({ project, index }: Props) {
  const reduce = useReducedMotion();
  const { slug, title, shortDescription, tags, thumbnail } = project;

  const inner = (
    <Link
      href={`/projects/${slug}`}
      aria-label={`Open project: ${title}`}
      className="group block rounded-[1.75rem] bg-[var(--surface-elevated)]/90 p-8 [box-shadow:var(--shadow-card)] transition duration-300 ease-out hover:[box-shadow:var(--shadow-card-hover)] md:p-10 lg:min-h-[24rem] lg:p-12"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={thumbnail}
              alt="CareBridge live website hero screenshot"
              fill
              className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
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
