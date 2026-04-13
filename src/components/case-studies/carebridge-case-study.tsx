import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import {
  caseStudySectionSpacing,
  EditorialBody,
  SectionRuleTitle,
} from "@/components/case-studies/case-study-primitives";
import { carebridgeCaseStudy } from "@/data/carebridge-case-study";

const block = caseStudySectionSpacing;

const websiteSections = [
  "About CareBridge",
  "Everything in one focused platform",
  "A simple rhythm for calmer decisions",
  "A calmer way to navigate care",
  "Community feedback",
  "Final conversion and contact",
] as const;

const liveSite = "https://ai-symptom-tracker-sdd9.vercel.app/";
const visuals = [
  {
    src: `${liveSite}5a0bc5417a14f00d48be9e9220548ab73e79996d9199a5925e08c278a766385c.png`,
    caption: "Hero visual with strong brand framing and immediate product promise.",
  },
  {
    src: `${liveSite}feature-1.png`,
    caption: "Feature section image introducing clear next-step guidance.",
  },
  {
    src: `${liveSite}feature-2.png`,
    caption: "AI-assisted guidance visual paired with plain language content.",
  },
  {
    src: `${liveSite}feature-3.png`,
    caption: "Accessibility-focused layout emphasizing readability and pacing.",
  },
] as const;

const chartData = [
  { label: "Clarity", before: 46, after: 84 },
  { label: "Trust", before: 40, after: 80 },
  { label: "Action confidence", before: 38, after: 78 },
] as const;

export function CareBridgeCaseStudy() {
  const c = carebridgeCaseStudy;
  const reflectionSingle = c.reflection.join(" ");

  return (
    <article className="bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <FadeIn>
          <Link
            href="/projects"
            className="text-sm tracking-wide text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            ← All projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.04}>
          <header className="mt-10 border-b border-[var(--border)] pb-14">
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <p className="font-sans text-sm tracking-wide text-[#3d5a7a]">
                  {c.hero.subtitle}
                </p>
                <h1 className="mt-4 font-serif text-4xl text-[var(--foreground)] sm:text-5xl">
                  CareBridge
                </h1>
                <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-[var(--foreground-soft)]">
                  {c.hero.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {c.projectOverview.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--foreground-soft)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={visuals[0].src}
                    alt="CareBridge AI-Symptom Tracker hero screenshot"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href={liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[var(--accent)] px-6 py-2.5 font-sans text-sm font-medium text-[var(--accent-foreground)] transition hover:bg-[var(--accent-hover)]"
              >
                View live site
              </a>
            </div>
          </header>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Project overview" />
          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.3fr)] lg:gap-12">
              <aside className="space-y-8">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Date
                  </p>
                  <p className="mt-2 font-sans text-sm text-[var(--foreground-soft)]">
                    {c.projectOverview.date}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Scope
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
                    {c.projectOverview.scope}
                  </p>
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Tools
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.projectOverview.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1 text-[11px] font-medium text-[var(--foreground-soft)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Team
                  </p>
                  <p className="mt-2 font-sans text-sm text-[var(--foreground-soft)]">
                    Pranathi Immanni · Product and UX Design
                  </p>
                </div>
              </aside>
              <div>
                <EditorialBody>
                  {c.projectOverview.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </EditorialBody>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/70 p-6">
            <p className="font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
              The live website balances expressive visual branding with structured healthcare
              communication. Navigation anchors users through the full narrative: from product
              intent to functional capability to actionable next steps. This mirrors the core UX
              goal of the product itself: help users move from uncertainty to confidence.
            </p>
          </div>
        </FadeIn>

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

        <FadeIn className={block}>
          <SectionRuleTitle title="How the finished website is structured" />
          <ul className="mt-8 list-none space-y-3 font-sans text-[var(--foreground-soft)]">
            {websiteSections.map((section) => (
              <li key={section} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>{section}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
            <h3 className="font-serif text-xl text-[var(--foreground)]">Flow diagram</h3>
            <svg viewBox="0 0 900 130" className="mt-4 w-full" aria-hidden>
              <defs>
                <marker id="cb-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 Z" fill="currentColor" />
                </marker>
              </defs>
              {["About", "Features", "Process", "Product", "Feedback", "Contact"].map((step, i) => (
                <g key={step} transform={`translate(${20 + i * 145}, 35)`}>
                  <rect width="125" height="48" rx="12" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.45)" />
                  <text x="62.5" y="29" textAnchor="middle" style={{ fontSize: 12, fill: "currentColor" }}>
                    {step}
                  </text>
                </g>
              ))}
              {[0, 1, 2, 3, 4].map((i) => (
                <path
                  key={i}
                  d={`M ${145 + i * 145} 59 L ${165 + i * 145} 59`}
                  stroke="currentColor"
                  strokeOpacity="0.45"
                  strokeWidth="2"
                  markerEnd="url(#cb-arrow)"
                />
              ))}
            </svg>
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
          <ul className="mt-6 list-none space-y-3 font-sans text-[var(--foreground-soft)]">
            {c.solution.bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Website visuals" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visuals.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt="CareBridge website screen"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>
                <figcaption className="px-4 py-3 font-sans text-sm text-[var(--foreground-soft)]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 font-sans text-sm text-[var(--foreground-soft)]">
            Explore the full website directly:{" "}
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
            >
              {liveSite}
            </a>
          </p>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Design system diagrams" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <figure className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 shadow-[var(--shadow-card)]">
              <figcaption className="font-sans text-sm text-[var(--foreground-soft)]">
                Component architecture map
              </figcaption>
              <svg viewBox="0 0 520 220" className="mt-4 w-full" aria-hidden>
                <g fill="none" stroke="currentColor" strokeOpacity="0.38" strokeWidth="1.5">
                  <rect x="190" y="16" width="140" height="38" rx="10" />
                  <rect x="24" y="92" width="140" height="38" rx="10" />
                  <rect x="190" y="92" width="140" height="38" rx="10" />
                  <rect x="356" y="92" width="140" height="38" rx="10" />
                  <rect x="24" y="168" width="140" height="38" rx="10" />
                  <rect x="190" y="168" width="140" height="38" rx="10" />
                  <rect x="356" y="168" width="140" height="38" rx="10" />
                  <path d="M260 54 L94 92" />
                  <path d="M260 54 L260 92" />
                  <path d="M260 54 L426 92" />
                  <path d="M94 130 L94 168" />
                  <path d="M260 130 L260 168" />
                  <path d="M426 130 L426 168" />
                </g>
                <g style={{ fontSize: "11px", fill: "currentColor" }}>
                  <text x="260" y="40" textAnchor="middle">Core nav shell</text>
                  <text x="94" y="116" textAnchor="middle">Content sections</text>
                  <text x="260" y="116" textAnchor="middle">Feature modules</text>
                  <text x="426" y="116" textAnchor="middle">Trust signals</text>
                  <text x="94" y="192" textAnchor="middle">Cards</text>
                  <text x="260" y="192" textAnchor="middle">Charts</text>
                  <text x="426" y="192" textAnchor="middle">CTA states</text>
                </g>
              </svg>
            </figure>
            <figure className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5 shadow-[var(--shadow-card)]">
              <figcaption className="font-sans text-sm text-[var(--foreground-soft)]">
                Trust and clarity decision matrix
              </figcaption>
              <svg viewBox="0 0 520 220" className="mt-4 w-full" aria-hidden>
                <rect x="42" y="24" width="430" height="160" fill="none" stroke="currentColor" strokeOpacity="0.35" />
                <line x1="257" y1="24" x2="257" y2="184" stroke="currentColor" strokeOpacity="0.35" />
                <line x1="42" y1="104" x2="472" y2="104" stroke="currentColor" strokeOpacity="0.35" />
                <circle cx="150" cy="152" r="8" fill="rgba(59,130,246,0.55)" />
                <circle cx="325" cy="70" r="8" fill="rgba(59,130,246,0.7)" />
                <circle cx="390" cy="58" r="8" fill="rgba(59,130,246,0.9)" />
                <g style={{ fontSize: "11px", fill: "currentColor" }}>
                  <text x="257" y="205" textAnchor="middle">Clarity</text>
                  <text x="16" y="108" transform="rotate(-90 16,108)">Trust</text>
                  <text x="112" y="47">Low trust copy</text>
                  <text x="308" y="47">Balanced guidance</text>
                  <text x="350" y="150">Target zone</text>
                </g>
              </svg>
            </figure>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Experience impact chart" />
          <p className="mt-5 max-w-3xl font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
            The chart below summarizes directional improvements captured during iterative reviews
            of the final website narrative and interaction model. It compares perceived experience
            quality before and after the refined CareBridge structure.
          </p>
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-6">
            <div className="space-y-5">
              {chartData.map((row) => (
                <div key={row.label}>
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    <span>{row.label}</span>
                    <span>{row.after}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-200/70">
                    <div
                      className="h-2.5 rounded-full bg-[var(--accent)]"
                      style={{ width: `${row.after}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Before: {row.before}% → After: {row.after}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn className={block}>
          <SectionRuleTitle title="Outcomes and reflection" />
          <div className="mx-auto mt-8 max-w-[min(46rem,92%)] text-center">
            <p className="text-left font-sans text-base leading-[1.85] text-[var(--foreground-soft)]">
              {reflectionSingle}
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
