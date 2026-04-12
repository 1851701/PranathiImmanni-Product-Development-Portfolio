"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import {
  CareBridgeBrowserFrame,
  CareBridgeFlowPills,
  CareBridgeScreenPreview,
  MockAppointments,
  MockDashboard,
  MockLabResults,
  MockSymptomChecker,
} from "@/components/carebridge/carebridge-mockups";
import {
  caseStudySectionSpacing,
  EditorialBody,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import { carebridgeCaseStudy } from "@/data/carebridge-case-study";

const block = caseStudySectionSpacing;

export function CareBridgeCaseStudy() {
  const c = carebridgeCaseStudy;

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
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 space-y-4 lg:order-1">
                <CareBridgeBrowserFrame className="shadow-lg">
                  <MockDashboard />
                </CareBridgeBrowserFrame>
                <div className="grid grid-cols-2 gap-3">
                  <CareBridgeBrowserFrame>
                    <MockSymptomChecker />
                  </CareBridgeBrowserFrame>
                  <CareBridgeBrowserFrame>
                    <MockLabResults />
                  </CareBridgeBrowserFrame>
                </div>
                <div className="lg:hidden">
                  <CareBridgeBrowserFrame>
                    <MockAppointments />
                  </CareBridgeBrowserFrame>
                </div>
              </div>
              <div className="order-1 space-y-6 lg:order-2 lg:pt-2">
                <p className="text-center font-sans text-sm font-medium tracking-wide text-[#3d5a7a] dark:text-[#8faab8] lg:text-left">
                  {c.hero.subtitle}
                </p>
                <h1 className="text-center font-serif text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-left lg:text-[2.75rem]">
                  CareBridge
                </h1>
                <p className="text-center font-sans text-base leading-relaxed text-[var(--foreground-soft)] sm:text-lg lg:text-left">
                  {c.hero.description}
                </p>
              </div>
            </div>

            <div className="mt-8 hidden lg:block">
              <CareBridgeBrowserFrame>
                <MockAppointments />
              </CareBridgeBrowserFrame>
            </div>

            <dl className="mt-12 grid gap-6 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 [box-shadow:var(--shadow-card)] dark:border-slate-700 dark:from-slate-950 dark:to-slate-900 sm:grid-cols-3 sm:p-8">
              {c.hero.meta.map((row) => (
                <div key={row.label}>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                    {row.label}
                  </dt>
                  <dd className="mt-2 font-sans text-sm leading-snug text-[var(--foreground-soft)] sm:text-[0.9375rem]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </header>
        </FadeIn>

        {/* Overview */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Overview" />
          <div className="mt-8">
            <EditorialBody>
              {c.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
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
              {c.solution.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]/70"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
          <p className="mt-10 text-sm font-semibold tracking-wide text-[#3d5a7a] dark:text-[#8faab8]">
            Key insights
          </p>
          <ul className="mr-auto mt-4 max-w-[min(42rem,72%)] list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] sm:text-base">
            {c.userResearch.insights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FadeIn>

        {/* Pain points */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Pain points" />
          <div className="mt-8">
            <EditorialBody>
              <ul className="list-none space-y-3">
                {c.painPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400/80"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </EditorialBody>
          </div>
        </FadeIn>

        {/* Information architecture */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Information architecture" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.informationArchitecture.intro}</p>
            </EditorialBody>
          </div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 [box-shadow:var(--shadow-card)] dark:border-slate-700 dark:bg-slate-950 sm:p-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Primary structure
            </p>
            <ul className="mt-4 space-y-2 font-sans text-[0.8rem] leading-relaxed text-slate-700 dark:text-slate-300">
              {c.informationArchitecture.tree.map((line, idx) => (
                <li
                  key={line}
                  className={idx === 0 ? "font-semibold text-blue-900 dark:text-blue-200" : "border-l-2 border-slate-200 pl-3 dark:border-slate-700"}
                >
                  {idx > 0 ? <span className="text-slate-400">→ </span> : null}
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-sans text-sm leading-relaxed text-[var(--muted)]">
              Child areas open from one predictable home; depth is limited so users rarely
              lose context.
            </p>
          </div>
        </FadeIn>

        {/* User flows */}
        <FadeIn className={block}>
          <SectionRuleTitle title="User flows" />
          <div className="mt-10 space-y-12">
            {c.userFlows.map((flow) => (
              <div key={flow.id}>
                <h3 className="font-serif text-xl text-[var(--foreground)]">
                  {flow.title}
                </h3>
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-4 dark:border-slate-700 dark:bg-slate-900/40">
                  <CareBridgeFlowPills steps={flow.steps} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Feature breakdown */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Feature breakdown" />
          <div className="mt-10 space-y-12">
            <FeatureBlock
              title={c.features.symptomChecker.title}
              items={c.features.symptomChecker.items}
            />
            <FeatureBlock
              title={c.features.dashboard.title}
              items={c.features.dashboard.items}
            />
            <FeatureBlock title={c.features.labs.title} items={c.features.labs.items} />
            <FeatureBlock
              title={c.features.messaging.title}
              items={c.features.messaging.items}
            />
            <FeatureBlock
              title={c.features.medications.title}
              items={c.features.medications.items}
            />
          </div>
        </FadeIn>

        {/* Design decisions */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Design decisions" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {c.designDecisions.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 [box-shadow:var(--shadow-card)] dark:border-slate-700 dark:bg-slate-950"
              >
                <h3 className="font-serif text-lg text-[var(--foreground)]">{d.title}</h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--muted)]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Final screens */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Final screens" />
          <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
            Interactive UI concepts below are built in code to match the CareBridge visual
            language — white surfaces, blue accents, and high legibility at default zoom.
          </p>
          <div className="mt-14 space-y-16">
            {c.finalScreens.map((screen) => (
              <div
                key={screen.key}
                className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12"
              >
                <CareBridgeScreenPreview screenKey={screen.key} />
                <div className="lg:pt-2">
                  <p className="font-serif text-lg text-[var(--foreground)]">
                    {screen.caption}
                  </p>
                  <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--muted)]">
                    {screen.annotation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Ethical AI */}
        <FadeIn className={block}>
          <div className="rounded-[1.75rem] border border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-white to-slate-50 p-8 [box-shadow:var(--shadow-card)] dark:border-blue-900/50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 md:p-12">
            <SectionRuleTitle title={c.ethicalAi.title} />
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {c.ethicalAi.items.map((item) => (
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

function FeatureBlock({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="font-serif text-xl text-[var(--foreground)]">{title}</h3>
      <ul className="mr-auto mt-4 max-w-[min(44rem,90%)] list-none space-y-2 font-sans text-sm text-[var(--foreground-soft)] sm:text-[0.9375rem]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600/70"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
