import type { Metadata } from "next";
import { getPortfolioShowcaseProjects } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import { ShowcaseProjectCard } from "@/components/project/showcase-project-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects by ${siteConfig.name} — Teddy, healthcare UX, and product case studies.`,
};

export default function ProjectsPage() {
  const showcase = getPortfolioShowcaseProjects();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-20 sm:px-8 lg:px-10 lg:pt-28">
      <FadeIn>
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium tracking-[0.02em] text-[var(--foreground)] sm:text-5xl">
            Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">
            From emotional design and healthcare systems to technical depth — each
            project opens into a full case study.
          </p>
        </div>
      </FadeIn>

      <div className="mt-12">
        {showcase.map((project, i) => (
          <ShowcaseProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
