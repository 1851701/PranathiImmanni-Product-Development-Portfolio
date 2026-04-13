import { getFeaturedProjects } from "@/data/projects";
import { ShowcaseProjectCard } from "@/components/project/showcase-project-card";
import { FadeIn } from "@/components/ui/fade-in";
import { HomeHero } from "@/components/home/home-hero";
import { LightBlueGradientBackdrop } from "@/components/home/light-blue-gradient-backdrop";
import { GetInTouchSection } from "@/components/home/get-in-touch";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="pb-28 lg:pb-36">
      <HomeHero />

      <div className="mx-auto max-w-6xl px-6 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <section id="work" className="scroll-mt-16">
          <FadeIn delay={0.08}>
            <div className="flex flex-col items-center text-center">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-[var(--muted)]">
                Portfolio
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium tracking-[0.02em] text-[var(--foreground)] sm:text-5xl">
                Works
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12">
            {featured.map((project, i) => (
              <ShowcaseProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>
      </div>
      <section className="relative overflow-hidden border-t border-sky-900/10 dark:border-sky-900/25">
        <LightBlueGradientBackdrop tone="section" />
        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-4 sm:px-8 lg:px-10 lg:pb-28">
          <GetInTouchSection />
        </div>
      </section>
    </div>
  );
}
