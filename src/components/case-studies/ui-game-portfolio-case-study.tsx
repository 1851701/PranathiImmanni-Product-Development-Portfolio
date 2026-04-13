"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { CpgBrowserFrame } from "@/components/cognitive-pattern-game/cpg-browser-frame";
import { UiGameDesignLoopDiagram } from "@/components/case-study/case-study-accent-diagrams";
import {
  caseStudySectionSpacing,
  EditorialBody,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import { CaseStudyOverviewTeamSection } from "@/components/case-studies/case-study-overview-team";
import {
  UI_GAME_PORTFOLIO_LIVE,
  uiGamePortfolioCaseStudy,
  uiGamePortfolioImages,
} from "@/data/ui-game-portfolio-case-study";

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

const visualCard =
  "rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/70 p-4 [box-shadow:var(--shadow-card)] sm:p-6";

function ProblemSystemsDiagram() {
  return (
    <svg viewBox="0 0 560 150" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <text
        x="280"
        y="22"
        textAnchor="middle"
        fill="var(--muted)"
        style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}
      >
        Friction in spectacle first experiences
      </text>
      <g>
        <rect x="24" y="44" width="148" height="52" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.2" />
        <text
          x="98"
          y="76"
          textAnchor="middle"
          fill="var(--foreground-soft)"
          style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 600 }}
        >
          Tone before mechanics
        </text>
        <path d="M 180 70 L 208 70" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#ugp-arrow)" />
      </g>
      <g>
        <rect x="216" y="44" width="148" height="52" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.2" />
        <text
          x="290"
          y="76"
          textAnchor="middle"
          fill="var(--foreground-soft)"
          style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 600 }}
        >
          Vague or slow feedback
        </text>
        <path d="M 372 70 L 400 70" stroke="var(--accent)" strokeWidth="2" markerEnd="url(#ugp-arrow)" />
      </g>
      <g>
        <rect x="408" y="44" width="128" height="52" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.2" />
        <text
          x="472"
          y="76"
          textAnchor="middle"
          fill="var(--foreground-soft)"
          style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 600 }}
        >
          Fuzzy states
        </text>
      </g>
      <defs>
        <marker id="ugp-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" />
        </marker>
      </defs>
      <text
        x="280"
        y="128"
        textAnchor="middle"
        fill="var(--muted)"
        style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}
      >
        Users leave with mood, not a model they can explain.
      </text>
    </svg>
  );
}

function SolutionLoopDiagram() {
  const nodes = [
    { x: 32, label: "Watch" },
    { x: 156, label: "Act" },
    { x: 280, label: "See result" },
    { x: 404, label: "Continue" },
  ];
  return (
    <svg viewBox="0 0 560 128" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <text
        x="280"
        y="22"
        textAnchor="middle"
        fill="var(--muted)"
        style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}
      >
        Minimal loop, clear contract
      </text>
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y="46"
            width="112"
            height="44"
            rx="10"
            fill="var(--surface-elevated)"
            stroke="var(--border)"
            strokeWidth="1.2"
          />
          <text
            x={n.x + 56}
            y="72"
            textAnchor="middle"
            fill="var(--foreground-soft)"
            style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}
          >
            {n.label}
          </text>
        </g>
      ))}
      {nodes.slice(0, -1).map((n, i) => (
        <path
          key={`e-${n.label}`}
          d={`M ${n.x + 112} 68 L ${nodes[i + 1].x} 68`}
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#ugs-arrow)"
        />
      ))}
      <path
        d="M 460 90 C 460 108 120 108 120 90"
        stroke="var(--accent)"
        strokeWidth="1.4"
        fill="none"
        strokeDasharray="5 4"
        opacity={0.65}
      />
      <text x="280" y="104" textAnchor="middle" fill="var(--accent)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
        repeat
      </text>
      <defs>
        <marker id="ugs-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--accent)" />
        </marker>
      </defs>
      <text
        x="280"
        y="118"
        textAnchor="middle"
        fill="var(--muted)"
        style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}
      >
        Shallow navigation keeps the mental map stable between rounds.
      </text>
    </svg>
  );
}

function InteractionColorPaletteDiagram() {
  const swatches = [
    { fill: "#0c1018", label: "Deep base", fg: "#e8eef5" },
    { fill: "#161f2e", label: "Surface", fg: "#e2e8f0" },
    { fill: "#c9a227", label: "Accent", fg: "#1e1b10" },
    { fill: "#94a3b8", label: "Muted text", fg: "#0f172a" },
    { fill: "#e8eef5", label: "Highlight", fg: "#0f172a" },
  ];
  return (
    <svg viewBox="0 0 480 100" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <text x="12" y="18" fill="var(--foreground)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
        Palette roles (cinematic shell)
      </text>
      {swatches.map((s, i) => (
        <g key={s.label} transform={`translate(${12 + i * 92}, 28)`}>
          <rect width="80" height="36" rx="8" fill={s.fill} stroke="rgba(148,163,184,0.35)" strokeWidth="1" />
          <text x="40" y="50" textAnchor="middle" fill={s.fg} style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px", fontWeight: 600 }}>
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function InteractionStatesDiagram() {
  const states = [
    { fill: "#334155", label: "Neutral" },
    { fill: "#2563eb", label: "Active" },
    { fill: "#16a34a", label: "Success" },
    { fill: "#dc2626", label: "Error" },
  ];
  return (
    <svg viewBox="0 0 480 84" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <text x="12" y="18" fill="var(--foreground)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
        Distinct feedback states
      </text>
      {states.map((s, i) => (
        <g key={s.label} transform={`translate(${12 + i * 116}, 30)`}>
          <rect width="108" height="36" rx="18" fill={s.fill} opacity={0.92} />
          <text x="54" y="23" textAnchor="middle" fill="#fff" style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 600 }}>
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function UiGamePortfolioCaseStudy() {
  const c = uiGamePortfolioCaseStudy;
  const live = UI_GAME_PORTFOLIO_LIVE;

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
            <div className="mx-auto max-w-3xl space-y-6 lg:pt-1">
                <h1 className="text-center font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-left lg:text-[3.25rem]">
                  {c.hero.title}
                </h1>
                <p className="text-center font-serif text-lg text-[var(--foreground-soft)] sm:text-xl lg:text-left">
                  {c.hero.subtitle}
                </p>
                <p className="mx-auto max-w-xl text-center font-sans text-base leading-relaxed text-[var(--muted)] lg:mx-0 lg:text-left">
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
                <div className="flex justify-center pt-2 lg:justify-start">
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
          </header>
        </FadeIn>

        <CaseStudyOverviewTeamSection
          projectTitle={c.hero.title}
          overview={{
            date: c.projectOverview.date,
            scope: c.projectOverview.scope,
            tools: c.projectOverview.tools,
            paragraphs: c.projectOverview.paragraphs,
          }}
          team={c.team}
        />

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
          <figure className={`mx-auto mt-10 max-w-3xl ${visualCard}`}>
            <ProblemSystemsDiagram />
            <figcaption className="mt-3 text-center font-sans text-xs leading-relaxed text-[var(--muted)]">
              Diagram: where spectacle first flows break clarity and leave no transferable model.
            </figcaption>
          </figure>
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
          <figure className={`mx-auto mt-10 max-w-3xl ${visualCard}`}>
            <SolutionLoopDiagram />
            <figcaption className="mt-3 text-center font-sans text-xs leading-relaxed text-[var(--muted)]">
              Diagram: the shipped loop keeps vocabulary and pacing steady so learning transfers round to round.
            </figcaption>
          </figure>
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
          <div className="mx-auto mt-10 max-w-md">
            <UiGameDesignLoopDiagram />
            <p className="mt-3 text-center font-sans text-xs text-[var(--muted)]">
              Summary diagram: flow, feedback, and clarity as the review lens for every pass.
            </p>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="User flow" />
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-[var(--foreground-soft)]">
            Each pass through the loop reinforces the same mental model: observe, act, learn, repeat.
          </p>
          <FlowDiagram steps={c.flowSteps} />
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Interaction design" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.interactionDesign.intro}</p>
            </EditorialBody>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <figure className={visualCard}>
                <InteractionColorPaletteDiagram />
                <figcaption className="mt-3 font-sans text-xs leading-relaxed text-[var(--muted)]">
                  Color roles keep the shell cinematic while interaction stays the focus.
                </figcaption>
              </figure>
              <figure className={visualCard}>
                <InteractionStatesDiagram />
                <figcaption className="mt-3 font-sans text-xs leading-relaxed text-[var(--muted)]">
                  Each state reads at a glance so users never guess whether the last action counted.
                </figcaption>
              </figure>
            </div>
            <div className="mt-12 space-y-8">
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
          <SectionRuleTitle title="Visuals and demo" />
          <div className="mt-8">
            <EditorialBody>
              <p>{c.finalProduct.intro}</p>
            </EditorialBody>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
              <Image
                src={uiGamePortfolioImages.showcaseRedefineGaming}
                alt="Landing hero with REDEFINE GAMING headline and call to action from the live build"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
              <Image
                src={uiGamePortfolioImages.showcaseCityHero}
                alt="Wide city scene with sky-scale focal art from the live experience"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <CpgBrowserFrame
              urlLabel="game-six-psi-82.vercel.app live"
              bodyClassName="min-h-[min(70vh,560px)]"
            >
              <iframe
                title="UI Game Portfolio live prototype"
                src={live}
                className="h-[min(70vh,560px)] w-full border-0"
                loading="lazy"
                allow="fullscreen"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </CpgBrowserFrame>
            <p className="text-center font-sans text-xs text-[var(--muted)]">
              If the preview does not load, open the experience in a new tab:{" "}
              <a
                href={live}
                className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
              >
                View live
              </a>
              .
            </p>

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

        <FadeIn
          className={`${block} border-t border-[var(--border)] pt-16 lg:pt-24`}
        >
          <div className="mx-auto max-w-[min(42rem,90%)] text-center">
            <SectionRuleTitle title="Reflection" className="text-center" />
            <p className="mt-8 font-sans text-base leading-[1.85] text-[var(--foreground-soft)]">
              {c.reflection.paragraph}
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
