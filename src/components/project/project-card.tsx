"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const reduce = useReducedMotion();

  const content = (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[var(--surface-elevated)] [box-shadow:var(--shadow-card)] transition-shadow duration-300 hover:[box-shadow:var(--shadow-card-hover)] dark:bg-[var(--surface)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7 sm:p-8">
        <h3 className="font-serif text-xl font-medium tracking-tight text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
          {project.shortDescription}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-[var(--background)]/80 px-3 py-1 text-xs tracking-wide text-[var(--muted-light)] dark:bg-[var(--background)]/40"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  if (reduce) {
    return (
      <Link href={`/projects/${project.slug}`} className="block h-full">
        {content}
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {content}
        </motion.div>
      </Link>
    </motion.div>
  );
}
