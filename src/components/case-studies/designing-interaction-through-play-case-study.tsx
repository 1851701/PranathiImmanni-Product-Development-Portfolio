"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { CpgBrowserFrame } from "@/components/cognitive-pattern-game/cpg-browser-frame";
import {
  caseStudySectionSpacing,
  EditorialBody,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import {
  INTERACTIVE_PATTERN_EXPERIENCE_LIVE,
  designingInteractionThroughPlayCaseStudy,
} from "@/data/designing-interaction-through-play-case-study";

const block = caseStudySectionSpacing;

function FlowDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <div
      className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3"
      aria-label="User flow"
    >
      {steps.map((label, i) => (
        <Fragment key={label}>
          {i > 0 ? (
            <span
              className="select-none text-lg leading-none text-[var(--muted)] sm:rotate-0"
              aria-hidden
            >
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          ) : null}
          <span className="w-full max-w-xs rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2.5 text-center font-sans text-sm font-medium text-[var(--foreground-soft)] shadow-sm sm:w-auto sm:max-w-none">
            {label}
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export function DesigningInteractionThroughPlayCaseStudy() {
  const c = designingInteractionThroughPlayCaseStudy;
  const live = INTERACTIVE_PATTERN_EXPERIENCE_LIVE;

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

        <FadeIn delay={0.04}>
          <header className="mt-10 border-b border-[var(--border)] pb-16 lg:pb-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
              <div className="order-2 space-y-6 lg:order-1">
                <CpgBrowserFrame
                  urlLabel="game-six-psi-82.vercel.app"
                  bodyClassName="relative aspect-[16/10] min-h-[220px]"
                >
                  <Image
                    src={c.screenshots.hero}
                    alt="Interactive Pattern Experience — interface preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </CpgBrowserFrame>
              </div>
              <div className="order-1 space-y-6 text-center lg:order-2 lg:text-left">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                  Designing Interaction Through Play
                </p>
                <h1 className="font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem]">
                  {c.hero.title}
                </h1>
                <p className="font-serif text-lg text-[var(--foreground-soft)] sm:text-xl">
                  {c.hero.subtitle}
                </p>
                <p className="mx-auto max-w-xl font-sans text-base leading-relaxed text-[var(--muted)] lg:mx-0">
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
                <div className="pt-2">
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-2.5 font-sans text-sm font-medium text-[var(--accent-foreground)] shadow-[var(--shadow-card)] transition hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                  >
                    View live
                  </a>
                </div>
              </div>
            </div>
          </header>
        </FadeIn>

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

        <FadeIn className={block}>
          <SectionRuleTitle title="Problem" />
          <div className="mt-8">
            <EditorialBody>
              <p className="font-serif text-lg font-medium leading-snug text-[var(--foreground)]">
                {c.problem.hmw}
              </p>
              {c.problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Solution" />
          <div className="mt-8">
            <EditorialBody>
              {c.solution.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Design focus" />
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {c.designFocus.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/80 p-6 [box-shadow:var(--shadow-card)]"
              >
                <h3 className="font-serif text-xl text-[var(--foreground)]">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
                  {section.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-[var(--accent)]" aria-hidden>
                        ·
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="User flow" />
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-[var(--foreground-soft)]">
            A linear path keeps the model easy to learn: each step has a clear purpose, and feedback closes the loop before the next round.
          </p>
          <FlowDiagram steps={c.flowSteps} />
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Interaction design" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.interactionDesign.intro}</p>
            </EditorialBody>
            <div className="mt-10 space-y-8">
              {c.interactionDesign.items.map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-xl text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-[var(--foreground-soft)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Design decisions" />
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {c.designDecisions.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/80 p-6 [box-shadow:var(--shadow-card)]"
              >
                <h3 className="font-serif text-lg text-[var(--foreground)]">
                  {d.title}
                </h3>
                <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-[var(--accent)]" aria-hidden>
                        ·
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Visuals & demo" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.finalProduct.intro}</p>
            </EditorialBody>
          </div>

          <div className="mt-10 space-y-8">
            <CpgBrowserFrame
              urlLabel="game-six-psi-82.vercel.app — live"
              bodyClassName="min-h-[min(70vh,560px)]"
            >
              <iframe
                title="Interactive Pattern Experience — live prototype"
                src={live}
                className="h-[min(70vh,560px)] w-full border-0"
                loading="lazy"
                allow="fullscreen"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </CpgBrowserFrame>
            <p className="text-center font-sans text-xs text-[var(--muted)]">
              If the preview does not load, open the experience in a new tab via{" "}
              <a
                href={live}
                className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
              >
                View live
              </a>
              .
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
                <Image
                  src={c.screenshots.stateA}
                  alt="Interface state — primary visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
                <Image
                  src={c.screenshots.stateB}
                  alt="Interface state — alternate view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 font-sans text-sm font-medium text-[var(--accent-foreground)] shadow-[var(--shadow-card)] transition hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                Open live experience
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Reflection" />
          <div className="mt-8">
            <EditorialBody>
              {c.reflection.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </EditorialBody>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
