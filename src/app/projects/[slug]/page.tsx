import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  projects,
} from "@/data/projects";
import { siteConfig } from "@/lib/site";
import { FadeIn } from "@/components/ui/fade-in";

type Props = { params: Promise<{ slug: string }> };

const dedicatedCaseStudySlugs = new Set([
  "skinwise",
  "carebridge",
  "teddy",
  "ui-game-portfolio",
]);

export function generateStaticParams() {
  return projects
    .filter((p) => !dedicatedCaseStudySlugs.has(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.heroImage, width: 1600, height: 900 }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { title: "Overview", body: project.overview },
    { title: "Problem", body: project.problem },
    { title: "Process", body: project.process },
    { title: "Solution", body: project.solution },
  ];

  return (
    <article className="mx-auto max-w-6xl px-6 pb-28 pt-16 sm:px-8 lg:px-10 lg:pt-24">
      <FadeIn>
        <Link
          href="/projects"
          className="text-sm tracking-wide text-[var(--muted)] transition hover:text-[var(--foreground)]"
        >
          ← All projects
        </Link>
        <header className="mt-10">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {project.shortDescription}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[var(--surface-elevated)] px-3 py-1.5 text-xs tracking-wide text-[var(--muted-light)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </header>
      </FadeIn>

      <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-[var(--surface)] [box-shadow:var(--shadow-card)]">
        <Image
          src={project.heroImage}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
          priority
        />
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]/80 px-6 py-2.5 text-sm font-medium tracking-wide text-[var(--foreground)] transition hover:bg-[var(--surface)]"
          >
            GitHub
          </a>
        ) : null}
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium tracking-wide text-[var(--accent-foreground)] shadow-[var(--shadow-card)] transition hover:bg-[var(--accent-hover)]"
          >
            Live demo
          </a>
        ) : null}
      </div>

      <div className="mt-20 space-y-16">
        {sections.map((section, i) => (
          <FadeIn key={section.title} delay={i * 0.05}>
            <section>
              <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                {section.title}
              </h2>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-[var(--foreground-soft)]">
                {section.body}
              </p>
            </section>
          </FadeIn>
        ))}

        <FadeIn delay={0.2}>
          <section>
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              Tools
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-xl bg-[var(--surface-elevated)] px-4 py-2 text-sm text-[var(--foreground-soft)]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.22}
        className="mt-24 border-t border-[var(--border)] pt-14"
      >
        <p className="text-sm tracking-wide text-[var(--muted)]">
          More work by {siteConfig.name}
        </p>
        <Link
          href="/projects"
          className="mt-3 inline-block text-sm font-medium tracking-wide text-[var(--accent)]"
        >
          View all projects →
        </Link>
      </FadeIn>
    </article>
  );
}
