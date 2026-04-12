"use client";

import Link from "next/link";
import {
  SkinWiseAnalyzingScreen,
  SkinWiseCaptureScreen,
  SkinWiseHistoryScreen,
  SkinWiseHomeScreen,
  SkinWisePersonalizedInsightsScreen,
  SkinWiseProfileScreen,
  SkinWiseResultsScreen,
  SkinWiseRoutineScreen,
} from "@/components/skinwise/skinwise-app-screens";
import { SkinWisePhoneShell } from "@/components/skinwise/skinwise-iosshell";
import {
  SKINWISE_PHONE,
  SkinWiseSectionSpacer,
  SkinWiseShowcase,
} from "@/components/skinwise/skinwise-showcase";
import { FadeIn } from "@/components/ui/fade-in";
import {
  caseStudySectionSpacing,
  EditorialBody,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import {
  skinwiseCaseStudy,
  skinwiseTimeline,
  skinwiseTimelineIntro,
} from "@/data/skinwise-case-study";

const sublabelClass =
  "text-sm font-semibold tracking-wide text-[#826c52] dark:text-[#b89a7a]";

const block = caseStudySectionSpacing;

const timelineStepTones = [
  "bg-[#6b7355]",
  "bg-[#7a6b58]",
  "bg-[#8b7355]",
  "bg-[#8a9278]",
  "bg-[#5c6350]",
] as const;

/** Abstract grayscale blocks for wireframe section — no stock photos. */
function WireframeBlockScreen({ variant }: { variant: 1 | 2 | 3 }) {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#d8d8dc] p-2.5">
      <div className="flex gap-1.5">
        <div className="h-2 w-8 rounded-sm bg-[#aeaeb2]" />
        <div className="h-2 flex-1 rounded-sm bg-[#c7c7cc]" />
      </div>
      {variant === 1 ? (
        <>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-sm bg-[#aeaeb2]" />
            <div className="h-1.5 w-[92%] rounded-sm bg-[#c7c7cc]" />
            <div className="h-16 w-full rounded-lg bg-[#ececf0] ring-1 ring-black/5" />
          </div>
          <div className="mt-auto h-7 w-full rounded-lg bg-[#aeaeb2]/60" />
        </>
      ) : null}
      {variant === 2 ? (
        <>
          <div className="mt-3 grid flex-1 grid-cols-2 gap-1.5">
            <div className="rounded-md bg-[#ececf0] ring-1 ring-black/5" />
            <div className="rounded-md bg-[#ececf0] ring-1 ring-black/5" />
            <div className="col-span-2 h-12 rounded-md bg-[#c7c7cc]/80" />
          </div>
        </>
      ) : null}
      {variant === 3 ? (
        <>
          <div className="mt-3 flex-1 space-y-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-1.5">
                <div className="h-6 w-6 shrink-0 rounded bg-[#aeaeb2]/70" />
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="h-1.5 w-full rounded-sm bg-[#c7c7cc]" />
                  <div className="h-1.5 w-2/3 rounded-sm bg-[#d8d8dc]" />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export function SkinWiseCaseStudy() {
  const c = skinwiseCaseStudy;

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

        {/* Hero */}
        <FadeIn delay={0.04}>
          <header className="mt-10 border-b border-[var(--border)] pb-16 lg:pb-20">
            <div className="space-y-10 lg:space-y-12">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem]">
                  SkinWise
                </h1>
                <p className="font-serif text-xl text-[var(--foreground-soft)] sm:text-2xl">
                  {c.hero.subtitle}
                </p>
                <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)] lg:mx-0">
                  {c.hero.intro}
                </p>
                <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
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

              <div className="-mx-4 min-w-0 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
                <SkinWiseShowcase
                  label="Scan → results → personalized care"
                  variant="heroTrio"
                >
                  <SkinWisePhoneShell
                    frameWidth={SKINWISE_PHONE.heroSide}
                    caption="Scan"
                    contentTone="dark"
                    className="relative z-[2] shrink-0 -mr-4 translate-y-3 sm:-mr-6 sm:translate-y-2 md:-mr-8"
                  >
                    <SkinWiseCaptureScreen />
                  </SkinWisePhoneShell>
                  <SkinWisePhoneShell
                    frameWidth={SKINWISE_PHONE.heroMain}
                    caption="Results"
                    className="relative z-20 shrink-0 [filter:drop-shadow(0_28px_56px_rgba(0,0,0,0.32))]"
                  >
                    <SkinWiseResultsScreen />
                  </SkinWisePhoneShell>
                  <SkinWisePhoneShell
                    frameWidth={SKINWISE_PHONE.heroSide}
                    caption="Personalized care"
                    className="relative z-[2] shrink-0 -ml-4 translate-y-3 sm:-ml-6 sm:translate-y-2 md:-ml-8"
                  >
                    <SkinWisePersonalizedInsightsScreen />
                  </SkinWisePhoneShell>
                </SkinWiseShowcase>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* Overview + Info */}
        <FadeIn className={block}>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionRuleTitle title="Overview" />
              <EditorialBody>
                {c.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </EditorialBody>
            </div>
            <div>
              <SectionRuleTitle title="Info" />
              <dl className="mt-8 grid max-w-md grid-cols-[minmax(0,7.5rem)_1fr] gap-x-5 gap-y-5 font-sans text-sm sm:text-[0.9375rem]">
                {c.info.map((row) => (
                  <div key={row.label} className="contents">
                    <dt className="font-semibold text-[var(--foreground)]">
                      {row.label}
                    </dt>
                    <dd className="text-[var(--foreground-soft)]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FadeIn>

        {/* Background — personal motivation (after Overview, before Problem) */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Background" />
          <div className="mt-8 max-w-[min(42rem,100%)]">
            <EditorialBody>
              {c.background.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>
        </FadeIn>

        {/* Timeline + device */}
        <FadeIn className={block}>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-[1.75rem] bg-[#ececf0] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-black/[0.04] dark:bg-[#2a2a2e] dark:ring-white/[0.06] sm:px-8 sm:py-10">
                <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.medium} caption="Design & prototype — iOS-first">
                  <SkinWiseHomeScreen />
                </SkinWisePhoneShell>
              </div>
            </div>
            <div>
              <SectionRuleTitle title="Project timeline" />
              <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-[var(--muted)]">
                {skinwiseTimelineIntro}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-6 sm:justify-between lg:mt-12 lg:flex-nowrap lg:gap-3">
                {skinwiseTimeline.map((step, i) => (
                  <div
                    key={step.label}
                    className="flex w-[calc(50%-0.75rem)] min-w-[5rem] flex-col items-center text-center sm:w-auto sm:min-w-0 sm:flex-1"
                  >
                    <span className="text-[0.7rem] font-medium lowercase tracking-wide text-[var(--muted)]">
                      {step.label}
                    </span>
                    <div
                      className={`mt-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white shadow-sm ${timelineStepTones[i % timelineStepTones.length]}`}
                      aria-hidden
                    >
                      {step.n}
                    </div>
                    <p className="mt-2 max-w-[9rem] text-[0.7rem] leading-snug text-[var(--muted)]">
                      {step.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Problem */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Problem" />
          <div className="mt-8">
            <EditorialBody>
              {c.problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>
        </FadeIn>

        <FadeIn className="mt-16 lg:mt-24">
          <SkinWiseSectionSpacer />
        </FadeIn>

        {/* Solution */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Solution" />
          <div className="mt-8">
            <EditorialBody>
              {c.solution.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
            <ul className="mr-auto mt-8 max-w-[min(42rem,72%)] list-none space-y-3 font-sans text-sm text-[var(--foreground-soft)] sm:text-base">
              {c.solution.features.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]/70"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="mt-10 lg:mt-14">
          <div className="-mx-4 min-w-0 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
            <SkinWiseShowcase label="Core flow" variant="flow">
              <SkinWisePhoneShell
                frameWidth={SKINWISE_PHONE.support}
                caption="Analyzing"
                className="relative z-[10] lg:translate-y-2"
              >
                <SkinWiseAnalyzingScreen />
              </SkinWisePhoneShell>
              <SkinWisePhoneShell
                frameWidth={SKINWISE_PHONE.main}
                caption="Structured results"
                className="relative z-[25] lg:-translate-y-1"
              >
                <SkinWiseResultsScreen />
              </SkinWisePhoneShell>
              <SkinWisePhoneShell
                frameWidth={SKINWISE_PHONE.support}
                caption="Next steps"
                className="relative z-[10] lg:translate-y-2"
              >
                <SkinWisePersonalizedInsightsScreen />
              </SkinWisePhoneShell>
            </SkinWiseShowcase>
          </div>
        </FadeIn>

        {/* User research */}
        <FadeIn className={block}>
          <SectionRuleTitle title="User research" />
          <div className="mt-8">
            <EditorialBody>
              {c.userResearch.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>

          <p className={`${sublabelClass} mt-14`}>Pain points</p>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {c.painPoints.map((pp, i) => (
              <div
                key={pp.title}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#826c52] font-sans text-sm font-semibold text-[var(--accent-foreground)] dark:bg-[#a08060]"
                  aria-hidden
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 font-sans text-sm font-semibold text-[var(--foreground)]">
                  {pp.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--muted)]">
                  {pp.body}
                </p>
              </div>
            ))}
          </div>

          <p className={`${sublabelClass} mt-16`}>Competitive analysis</p>
          <div className="mt-6">
            <EditorialBody>
              <p>{c.competitiveAnalysis}</p>
            </EditorialBody>
          </div>
        </FadeIn>

        <FadeIn className="mt-14 lg:mt-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Participants wanted results framed as possibilities — not verdicts.",
              "Trust rose when retention and deletion were explained before capture.",
              "Dense clinical UI increased anxiety; calm hierarchy won in testing.",
            ].map((quote) => (
              <blockquote
                key={quote}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] [box-shadow:var(--shadow-card)]"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-16 lg:mt-24">
          <SkinWiseSectionSpacer />
        </FadeIn>

        {/* User flow */}
        <FadeIn className={block}>
          <SectionRuleTitle title="User flow" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.userFlow.intro}</p>
            </EditorialBody>
          </div>
          <div className="mt-10">
            <div className="-mx-4 min-w-0 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
              <SkinWiseShowcase label="Primary path" variant="hero">
                <SkinWisePhoneShell
                  frameWidth={SKINWISE_PHONE.support}
                  caption="Home"
                  className="relative z-[2] translate-y-3 sm:translate-y-4"
                >
                  <SkinWiseHomeScreen />
                </SkinWisePhoneShell>
                <SkinWisePhoneShell
                  frameWidth={SKINWISE_PHONE.main}
                  caption="Capture"
                  contentTone="dark"
                  className="relative z-[25] lg:-translate-y-1"
                >
                  <SkinWiseCaptureScreen />
                </SkinWisePhoneShell>
                <SkinWisePhoneShell
                  frameWidth={SKINWISE_PHONE.support}
                  caption="Analyzing"
                  className="relative z-[3] translate-y-1 sm:translate-y-2"
                >
                  <SkinWiseAnalyzingScreen />
                </SkinWisePhoneShell>
                <SkinWisePhoneShell
                  frameWidth={SKINWISE_PHONE.support}
                  caption="Results"
                  className="relative z-[2] translate-y-3 sm:translate-y-4"
                >
                  <SkinWiseResultsScreen />
                </SkinWisePhoneShell>
              </SkinWiseShowcase>
            </div>
          </div>
        </FadeIn>

        {/* Wireframes */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Wireframes & prototyping" />
          <div className="mt-10 space-y-12">
            <div>
              <h3 className="font-serif text-xl text-[var(--foreground)]">
                Paper wireframes
              </h3>
              <div className="mt-6">
                <EditorialBody>
                  <p>{c.wireframes.paper}</p>
                </EditorialBody>
              </div>
              <ul className="mr-auto mt-6 max-w-[min(42rem,72%)] list-disc space-y-1 pl-5 font-sans text-sm text-[var(--muted)] sm:text-base">
                {c.wireframes.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-10">
                <SkinWiseShowcase variant="default">
                  <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.support} caption="Iteration A">
                    <WireframeBlockScreen variant={1} />
                  </SkinWisePhoneShell>
                  <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.main} caption="Iteration B">
                    <WireframeBlockScreen variant={2} />
                  </SkinWisePhoneShell>
                  <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.support} caption="Iteration C">
                    <WireframeBlockScreen variant={3} />
                  </SkinWisePhoneShell>
                </SkinWiseShowcase>
                <p className="mt-6 text-center font-sans text-xs text-[var(--muted)]">
                  Early structure explorations (abstract wireframes — not final UI).
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--foreground)]">
                Lo-fi digital prototype
              </h3>
              <div className="mt-6">
                <EditorialBody>
                  <p>{c.wireframes.loFi}</p>
                </EditorialBody>
              </div>
              <div className="mt-10">
                <SkinWiseShowcase variant="default">
                  <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.support} caption="Flow test build">
                    <SkinWiseHomeScreen />
                  </SkinWisePhoneShell>
                  <SkinWisePhoneShell
                    frameWidth={SKINWISE_PHONE.main}
                    caption="Mid-fi"
                    className="relative z-[15] lg:-translate-y-1"
                  >
                    <SkinWiseResultsScreen />
                  </SkinWisePhoneShell>
                  <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.support} caption="Privacy-first">
                    <SkinWiseProfileScreen />
                  </SkinWisePhoneShell>
                </SkinWiseShowcase>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Final visuals */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Final visuals" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.finalVisuals.intro}</p>
            </EditorialBody>
          </div>
          <div className="mt-10">
            <div className="-mx-4 min-w-0 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
              <SkinWiseShowcase label="Key surfaces" variant="default">
                <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.support} caption="History">
                  <SkinWiseHistoryScreen />
                </SkinWisePhoneShell>
                <SkinWisePhoneShell
                  frameWidth={SKINWISE_PHONE.main}
                  caption="Saved routine"
                  className="relative z-[20] lg:-translate-y-1"
                >
                  <SkinWiseRoutineScreen />
                </SkinWisePhoneShell>
                <SkinWisePhoneShell frameWidth={SKINWISE_PHONE.support} caption="Profile & privacy">
                  <SkinWiseProfileScreen />
                </SkinWisePhoneShell>
              </SkinWiseShowcase>
            </div>
          </div>
        </FadeIn>

        {/* Privacy */}
        <FadeIn className={block}>
          <div className="rounded-[1.75rem] bg-[var(--surface-elevated)] p-8 [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)] md:p-12">
            <SectionRuleTitle title="Privacy & trust" />
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {c.privacy.map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-lg text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Reflection */}
        <FadeIn
          className={`${block} border-t border-[var(--border)] pt-16 lg:pt-20`}
        >
          <SectionRuleTitle title="Reflection" />
          <div className="mt-8">
            <EditorialBody>
              {c.reflection.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
