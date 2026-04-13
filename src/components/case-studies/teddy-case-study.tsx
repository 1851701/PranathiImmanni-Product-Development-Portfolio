"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import {
  CaseStudyDiagramCard,
  CaseStudyHubSpokeDiagram,
  CaseStudyNextStepsDiagram,
  CaseStudyPaletteDiagram,
  CaseStudyThreePillarHighlight,
  CaseStudyUserFlowRibbonDiagram,
} from "@/components/case-study/portfolio-case-study-diagrams";
import { TeddyProblemDiagram } from "@/components/case-study/case-study-accent-diagrams";
import {
  CaseStudySplitWithVisual,
  caseStudySectionSpacing,
  EditorialBody,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import { TeddyAnnotatedScreens } from "@/components/teddy/teddy-annotated-screens";
import { TeddyBeforeAfterSection } from "@/components/teddy/teddy-before-after";
import { TeddyDecisionCards } from "@/components/teddy/teddy-decision-cards";
import { TeddyEmotionalDesign } from "@/components/teddy/teddy-emotional-design";
import { TeddyFlowDiagram } from "@/components/teddy/teddy-flow-diagram";
import { TeddyHeroLiveMockups } from "@/components/teddy/teddy-hero-live-mockups";
import { TeddyInsightsComparison } from "@/components/teddy/teddy-insights-comparison";
import {
  teddyCaseStudy,
  teddyInspirationImages,
} from "@/data/teddy-case-study";

const block = caseStudySectionSpacing;

const inspirationImageByKey = {
  reflectly: teddyInspirationImages.reflectly,
  calm: teddyInspirationImages.calm,
} as const;

function AppIcon() {
  return (
    <div
      className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[#ebe3da] text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-[#e0d5ca]"
      aria-hidden
    >
      🧸
    </div>
  );
}

export function TeddyCaseStudy() {
  const c = teddyCaseStudy;
  const it = c.iteration;

  return (
    <article className="bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6 pb-28 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <FadeIn>
          <Link
            href="/projects"
            className="text-sm tracking-wide text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            ← All projects
          </Link>
        </FadeIn>

        {/* 1. Hero */}
        <FadeIn delay={0.04}>
          <header className="mt-10 border-b border-[var(--border)] pb-16 lg:pb-24">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <div className="order-2 space-y-8 lg:order-1">
                <AppIcon />
                <div>
                  <h1 className="font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem]">
                    Teddy
                  </h1>
                  <p className="mt-3 font-sans text-sm font-medium tracking-wide text-[var(--muted)] sm:text-base">
                    {c.hero.subtitle}
                  </p>
                  <p className="mt-6 max-w-xl font-sans text-base leading-[1.85] text-[var(--foreground-soft)] sm:text-lg">
                    {c.hero.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.hero.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-[var(--surface-elevated)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--foreground-soft)] ring-1 ring-[var(--border)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="sr-only">
                  Preview of four Teddy app screens in iPhone frames: home, mood
                  check in, journal, and insights.
                </p>
                <TeddyHeroLiveMockups />
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Exploring App Store release
              </span>
              <p className="max-w-xl font-sans text-sm leading-relaxed text-[var(--muted)] sm:text-[0.9375rem]">
                {c.comingSoon}
              </p>
            </div>
          </header>
        </FadeIn>

        {/* 2. Project overview (includes team) */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Project overview" />
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-10 font-sans">
              <dl className="space-y-8">
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                    Date
                  </dt>
                  <dd className="mt-2 text-[0.95rem] text-[var(--foreground-soft)]">
                    {c.overview.date}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                    Scope
                  </dt>
                  <dd className="mt-2 text-[0.95rem] text-[var(--foreground-soft)]">
                    {c.overview.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                    Tools
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {c.overview.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--foreground-soft)] ring-1 ring-[var(--border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div>
                <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                  Team
                </h3>
                <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-[var(--foreground-soft)]">
                  {c.team.map((member) => (
                    <li key={member.name}>
                      <span className="font-medium text-[var(--foreground)]">
                        {member.name}
                      </span>
                      <span className="text-[var(--muted)]">
                        {" "}
                        · {member.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6 font-sans text-base leading-[1.9] text-[var(--foreground-soft)]">
              {c.overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3. Problem framing */}
        <FadeIn className={block}>
          <CaseStudySplitWithVisual visual={<TeddyProblemDiagram />}>
            <div className="min-w-0">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
                Problem framing
              </p>
              <h2 className="mt-4 max-w-[min(100%,40rem)] font-serif text-2xl font-medium leading-snug text-[var(--foreground)] sm:text-3xl md:text-[2.15rem]">
                {c.problem.hmw}
              </h2>
              <div className="mt-8 max-w-2xl">
                <p className="font-sans text-base leading-[1.9] text-[var(--foreground-soft)] sm:text-lg">
                  {c.problem.body}
                </p>
              </div>
            </div>
          </CaseStudySplitWithVisual>
        </FadeIn>

        <div
          className="my-20 h-px w-full bg-[var(--border)] lg:my-24"
          aria-hidden
        />

        {/* User flow diagram */}
        <FadeIn className={block}>
          <SectionRuleTitle title="User flow" />
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
            {c.userFlow.caption}
          </p>
          <div className="mt-12">
            <TeddyFlowDiagram />
          </div>
        </FadeIn>

        <div
          className="my-20 h-px w-full bg-[var(--border)] lg:my-24"
          aria-hidden
        />

        {/* Design inspiration — two-column rows (image + narrative) */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Design inspiration" />
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
            {c.inspiration.intro}
          </p>
          <div className="mt-14 space-y-20 lg:space-y-24">
            {c.inspiration.examples.map((ex, i) => (
              <div
                key={ex.title}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
              >
                <div
                  className={
                    i % 2 === 1 ? "lg:order-2" : "lg:order-none"
                  }
                >
                  <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-[var(--surface)] shadow-[0_20px_50px_-18px_rgba(58,46,42,0.18)] ring-1 ring-[var(--border)]">
                    <Image
                      src={inspirationImageByKey[ex.imageKey]}
                      alt={`${ex.title}, reference for design inspiration`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 1024px) 100vw, 512px"
                    />
                  </div>
                </div>
                <div
                  className={i % 2 === 1 ? "lg:order-1" : "lg:order-none"}
                >
                  <h3 className="font-serif text-2xl font-medium text-[var(--foreground)] md:text-3xl">
                    {ex.title}
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-[var(--foreground-soft)]">
                    {ex.description}
                  </p>
                  <div className="mt-8 space-y-8">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                        What I learned
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] md:text-[0.9375rem]">
                        {ex.learned.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                        What I applied to Teddy
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] md:text-[0.9375rem]">
                        {ex.applied.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center font-sans text-xs leading-relaxed text-[var(--muted)]">
            Reflectly and Calm are trademarks of their respective owners. Imagery
            is shown for design analysis and inspiration only.
          </p>
        </FadeIn>

        {/* User insights */}
        <FadeIn className={block}>
          <SectionRuleTitle title="User insights" />
          <ul className="mt-8 max-w-2xl space-y-5 font-sans text-base leading-[1.85] text-[var(--foreground-soft)]">
            {c.userInsights.map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a8907e]/80"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Before / after iterations (visual) */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Before and after" />
          <TeddyBeforeAfterSection />
        </FadeIn>

        {/* Design decision cards */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Iteration and design decisions" />
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
            {it.intro}
          </p>
          <div className="mt-12">
            <TeddyDecisionCards />
          </div>
        </FadeIn>

        {/* Insights comparison (complex vs Teddy) */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Visualizing insights" />
          <TeddyInsightsComparison />
        </FadeIn>

        {/* Final screens + numbered callouts */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Final screens" />
          <TeddyAnnotatedScreens />
        </FadeIn>

        {/* Emotional design principles */}
        <FadeIn className={block}>
          <div className="rounded-[1.75rem] bg-[#f5f0ea]/90 p-8 [box-shadow:var(--shadow-card)] ring-1 ring-[#ebe4dc] dark:bg-[var(--surface-elevated)]/95 dark:ring-[var(--border)] md:p-12 lg:p-14">
            <SectionRuleTitle title="Emotional design principles" />
            <div className="mt-2">
              <TeddyEmotionalDesign />
            </div>
          </div>
        </FadeIn>

        {/* Palette, accessibility, takeaways, next steps, flow schematic */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Palette, accessibility, takeaways, and next steps" />
          <div className="mt-6 max-w-3xl font-sans text-base leading-relaxed text-[var(--foreground-soft)]">
            <p>{c.diagramSection.intro}</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
            <CaseStudyDiagramCard
              theme="teddy"
              title="Primary colors"
              caption={c.diagramSection.paletteIntro}
            >
              <CaseStudyPaletteDiagram theme="teddy" />
            </CaseStudyDiagramCard>
            <div className="flex min-w-0 flex-col gap-10">
              <CaseStudyDiagramCard
                theme="teddy"
                title="Accessibility"
                caption={c.diagramSection.accessibilityIntro}
                flush
              >
                <CaseStudyThreePillarHighlight
                  theme="teddy"
                  title={c.diagramSection.accessibilityHighlightTitle}
                  pillars={c.diagramSection.accessibilityPillars}
                />
              </CaseStudyDiagramCard>
              <CaseStudyDiagramCard
                theme="teddy"
                title="Takeaways"
                caption={c.diagramSection.takeawaysIntro}
              >
                <CaseStudyHubSpokeDiagram
                  theme="teddy"
                  center={c.diagramSection.takeawaysHub.center}
                  branches={c.diagramSection.takeawaysHub.branches}
                />
              </CaseStudyDiagramCard>
            </div>
          </div>
          <div className="mt-10">
            <CaseStudyDiagramCard
              theme="teddy"
              title="User flow at a glance"
              caption={c.userFlow.schematicCardCaption}
            >
              <CaseStudyUserFlowRibbonDiagram
                theme="teddy"
                steps={c.userFlow.steps}
                branchNote={c.userFlow.ribbonNote}
              />
            </CaseStudyDiagramCard>
          </div>
          <div className="mt-10">
            <CaseStudyDiagramCard
              theme="teddy"
              title="Next steps"
              caption={c.diagramSection.nextStepsIntro}
            >
              <CaseStudyNextStepsDiagram
                theme="teddy"
                steps={c.diagramSection.nextSteps}
              />
            </CaseStudyDiagramCard>
          </div>
        </FadeIn>

        {/* Reflection */}
        <FadeIn
          className={`${block} border-t border-[var(--border)] pt-16 lg:pt-24`}
        >
          <div className="mx-auto max-w-[min(42rem,90%)] text-center">
            <SectionRuleTitle title="Reflection" className="text-center" />
            <div className="mt-8 space-y-6 font-sans text-base leading-[1.85] text-[var(--foreground-soft)]">
              {c.reflection.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
