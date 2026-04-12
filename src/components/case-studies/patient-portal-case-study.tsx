"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { PhoneMock } from "@/components/ui/phone-mock";
import {
  caseStudySectionSpacing,
  EditorialBody,
  ImageBreak,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import {
  patientPortalCaseStudy,
  patientPortalImages,
} from "@/data/patient-portal-case-study";

const sublabelPortal =
  "text-sm font-semibold tracking-wide text-[#4a6572] dark:text-[#8faab8]";

const block = caseStudySectionSpacing;

/** Lightweight browser chrome for dashboard-style mockups. */
function BrowserFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] [box-shadow:var(--shadow-card)] ${className ?? ""}`}
    >
      <div
        className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface-elevated)]/90 px-3 py-2.5"
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#d4c4b8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c9bfb5]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#b8b0a8]" />
        <div className="ml-2 flex-1 rounded-md bg-[var(--background)]/80 py-1 text-center text-[0.65rem] text-[var(--muted)]">
          portal.example-health.org
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 560px"
          priority={priority}
        />
      </div>
    </div>
  );
}

export function PatientPortalCaseStudy() {
  const c = patientPortalCaseStudy;

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
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 space-y-4 lg:order-1">
                <BrowserFrame
                  src={patientPortalImages.heroFeatured}
                  alt="Patient portal dashboard — redesigned overview"
                  priority
                />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <BrowserFrame
                    src={patientPortalImages.mockA}
                    alt="Portal screen — appointments and tasks"
                  />
                  <BrowserFrame
                    src={patientPortalImages.mockB}
                    alt="Portal screen — lab results summary"
                  />
                </div>
                <div className="mt-3 lg:hidden">
                  <BrowserFrame
                    src={patientPortalImages.mockC}
                    alt="Portal screen — messaging and care team"
                  />
                </div>
              </div>
              <div className="order-1 space-y-6 text-center lg:order-2 lg:text-left">
                <p className="font-sans text-sm font-medium tracking-wide text-[var(--muted)]">
                  {c.hero.subtitle}
                </p>
                <h1 className="font-serif text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
                  Patient Portal Redesign
                </h1>
                <p className="font-sans text-base leading-relaxed text-[var(--foreground-soft)] sm:text-lg">
                  {c.hero.tagline}
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
            </div>

            <div className="mt-10 hidden justify-center lg:flex">
              <div className="max-w-xl flex-1">
                <BrowserFrame
                  src={patientPortalImages.mockC}
                  alt="Portal screen — messaging and care team"
                />
              </div>
            </div>

            <dl className="mt-12 grid gap-6 rounded-2xl bg-[var(--surface-elevated)]/90 p-6 [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)] sm:grid-cols-3 sm:p-8">
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

        <ImageBreak src={patientPortalImages.betweenProblem} alt="" />

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
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4a6572]/75"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn className="mt-16 lg:mt-20">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--surface)] [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)]">
            <Image
              src={patientPortalImages.solutionWide}
              alt="Patient portal redesign — solution overview"
              fill
              className="object-cover"
              sizes="100vw"
            />
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
          <p className={`${sublabelPortal} mt-12`}>Key insights</p>
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
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4a6572]/70"
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {c.informationArchitecture.areas.map((area) => (
              <div
                key={area.name}
                className="rounded-xl bg-[var(--surface-elevated)]/90 p-5 [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)] sm:p-6"
              >
                <h3 className="font-serif text-lg text-[var(--foreground)]">
                  {area.name}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--muted)]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <ImageBreak src={patientPortalImages.betweenIa} alt="" />

        {/* User flows */}
        <FadeIn className={block}>
          <SectionRuleTitle title="User flow" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.userFlows.intro}</p>
            </EditorialBody>
          </div>
          <div className="mt-10 space-y-10">
            {c.userFlows.flows.map((flow) => (
              <div key={flow.title}>
                <h3 className="font-serif text-xl text-[var(--foreground)]">
                  {flow.title}
                </h3>
                <ol className="mr-auto mt-4 max-w-[min(42rem,72%)] list-decimal space-y-2 pl-5 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] sm:text-base">
                  {flow.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="relative mx-auto mt-12 aspect-[16/10] max-w-5xl overflow-hidden rounded-2xl bg-[var(--surface)] [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)]">
            <Image
              src={patientPortalImages.userFlow}
              alt="User flow diagrams placeholder"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        {/* Wireframes */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Wireframes &amp; lo-fi" />
          <div className="mt-10 space-y-12">
            <div>
              <h3 className="font-serif text-xl text-[var(--foreground)]">
                Structure &amp; layout
              </h3>
              <div className="mt-6">
                <EditorialBody>
                  <p>{c.wireframes.paper}</p>
                </EditorialBody>
              </div>
              <div className="relative mx-auto mt-10 aspect-[16/10] max-w-5xl overflow-hidden rounded-2xl bg-[var(--surface)] [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)]">
                <Image
                  src={patientPortalImages.wireframePaper}
                  alt="Early wireframe sketches"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-[var(--foreground)]">
                Digital lo-fi
              </h3>
              <div className="mt-6">
                <EditorialBody>
                  <p>{c.wireframes.loFi}</p>
                </EditorialBody>
              </div>
              <div className="relative mx-auto mt-10 aspect-[16/10] max-w-5xl overflow-hidden rounded-2xl bg-[var(--surface)] [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)]">
                <Image
                  src={patientPortalImages.wireframeLoFi}
                  alt="Low-fidelity digital wireframes"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Final designs */}
        <FadeIn className={block}>
          <SectionRuleTitle title="Final designs" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.finalVisuals.intro}</p>
            </EditorialBody>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {c.finalVisuals.screens.map((screen) => {
              const isPortrait = "layout" in screen && screen.layout === "portrait";
              if (isPortrait) {
                return (
                  <figure
                    key={screen.caption}
                    className="flex flex-col items-center sm:col-span-2"
                  >
                    <PhoneMock
                      src={screen.src}
                      className="w-[min(100%,260px)]"
                      alt={screen.caption}
                    />
                    <figcaption className="mt-4 text-center font-sans text-xs text-[var(--muted)]">
                      {screen.caption}
                    </figcaption>
                  </figure>
                );
              }
              return (
                <figure key={screen.caption} className="space-y-3">
                  <BrowserFrame src={screen.src} alt={screen.caption} />
                  <figcaption className="text-center font-sans text-xs text-[var(--muted)]">
                    {screen.caption}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </FadeIn>

        {/* Accessibility */}
        <FadeIn className={block}>
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[var(--surface-elevated)] to-[#e8eef1]/50 p-8 [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)] dark:from-[var(--surface-elevated)] dark:to-[var(--surface)] md:p-12">
            <SectionRuleTitle title="Accessibility &amp; design decisions" />
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {c.accessibility.map((item) => (
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
