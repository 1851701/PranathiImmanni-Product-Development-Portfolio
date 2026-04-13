/**
 * Shared diagrams for Teddy & SkinWise case studies: palette, a11y, takeaways, next steps.
 * Theme toggles warm (Teddy) vs clinical calm (SkinWise).
 */

import type { ReactNode } from "react";

type Theme = "teddy" | "skinwise";

const t = {
  teddy: {
    ink: "#3d3429",
    muted: "#6c6358",
    accent: "#a8907e",
    accent2: "#8b7355",
    surface: "#faf6f0",
    band: "#ebe3da",
  },
  skinwise: {
    ink: "#2a2622",
    muted: "#5c534c",
    accent: "#6b7355",
    accent2: "#5c6350",
    surface: "#f7f6f3",
    band: "#ececf0",
  },
};

function stageClass(theme: Theme) {
  return theme === "teddy"
    ? "rounded-2xl border border-[#ebe4dc] bg-[#faf6f0]/90 p-4 shadow-sm dark:border-[var(--border)] dark:bg-[var(--surface-elevated)]/80"
    : "rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm ring-1 ring-black/[0.04] dark:border-white/[0.08] dark:bg-[#1c1c1e]";
}

/** Primary palette: swatches + roles */
export function CaseStudyPaletteDiagram({ theme }: { theme: Theme }) {
  const c = t[theme];
  const swatches =
    theme === "teddy"
      ? [
          { fill: "#faf6f0", label: "Canvas / paper" },
          { fill: "#ebe3da", label: "Surfaces" },
          { fill: "#a8907e", label: "Accent & CTAs" },
          { fill: "#3d3429", label: "Primary text" },
        ]
      : [
          { fill: "#f7f6f3", label: "App canvas" },
          { fill: "#ececf0", label: "Cards & chrome" },
          { fill: "#6b7355", label: "Primary accent" },
          { fill: "#2a2622", label: "Text & focus" },
        ];

  return (
    <svg viewBox="0 0 360 200" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="360" height="200" rx="12" fill={c.surface} />
      <text x="20" y="32" fill={c.ink} fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="600">
        Primary palette
      </text>
      <text x="20" y="52" fill={c.muted} fontFamily="system-ui,sans-serif" fontSize="9">
        Roles stay consistent so screens feel calm and predictable.
      </text>
      {swatches.map((s, i) => (
        <g key={s.label} transform={`translate(${20 + i * 82}, 72)`}>
          <rect width="72" height="72" rx="10" fill={s.fill} stroke="rgba(52,42,34,0.12)" strokeWidth="1" />
          <text x="36" y="94" textAnchor="middle" fill={c.muted} fontFamily="system-ui,sans-serif" fontSize="7.5">
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}


/** Next steps vertical timeline */
export function CaseStudyNextStepsDiagram({
  theme,
  steps,
}: {
  theme: Theme;
  steps: readonly string[];
}) {
  const dot = theme === "teddy" ? "bg-[#a8907e]" : "bg-[#6b7355]";
  const line = theme === "teddy" ? "bg-[#a8907e]/35" : "bg-[#6b7355]/35";
  return (
    <ul className="relative space-y-0 pl-2">
      {steps.map((s, i) => (
        <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
          {i < steps.length - 1 ? (
            <span
              className={`absolute left-[11px] top-4 h-[calc(100%-0.5rem)] w-px ${line}`}
              aria-hidden
            />
          ) : null}
          <span className={`relative z-[1] mt-1.5 h-3 w-3 shrink-0 rounded-full ${dot}`} aria-hidden />
          <p className="font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">{s}</p>
        </li>
      ))}
    </ul>
  );
}

/** Richer linear user flow ribbon */
export function CaseStudyUserFlowRibbonDiagram({
  theme,
  steps,
  branchNote,
}: {
  theme: Theme;
  steps: readonly string[];
  branchNote: string;
}) {
  const c = t[theme];
  const nodes = steps.slice(0, 6);
  const n = nodes.length;
  const y = 108;
  const xAt = (i: number) => (n <= 1 ? 180 : 48 + (i * 264) / Math.max(n - 1, 1));
  return (
    <svg viewBox="0 0 360 170" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="360" height="170" rx="12" fill={c.surface} />
      <text x="20" y="30" fill={c.ink} fontFamily="system-ui,sans-serif" fontSize="12" fontWeight="600">
        User flow (primary path)
      </text>
      {nodes.map((label, i) => (
        <g key={`${i}-${label}`}>
          {i < n - 1 ? (
            <line
              x1={xAt(i) + 20}
              y1={y}
              x2={xAt(i + 1) - 20}
              y2={y}
              stroke={c.accent2}
              strokeWidth="2"
            />
          ) : null}
          <circle cx={xAt(i)} cy={y} r="20" fill="white" stroke={c.accent} strokeWidth="1.5" />
          <text
            x={xAt(i)}
            y={y + 3}
            textAnchor="middle"
            fill={c.ink}
            fontFamily="system-ui,sans-serif"
            fontSize="6.5"
            fontWeight="600"
          >
            {label.length > 11 ? `${label.slice(0, 10)}…` : label}
          </text>
        </g>
      ))}
      <text x="20" y="152" fill={c.muted} fontFamily="system-ui,sans-serif" fontSize="7.5">
        {branchNote.length > 120 ? `${branchNote.slice(0, 117)}…` : branchNote}
      </text>
    </svg>
  );
}

export function CaseStudyDiagramCard({
  theme,
  title,
  caption,
  children,
  /** Skip inner stage box when children bring their own shell (e.g. three-column highlight) */
  flush,
  /** Center title, caption, and stage (e.g. full-width hub diagrams) */
  centered,
}: {
  theme: Theme;
  title: string;
  caption?: string;
  children: ReactNode;
  flush?: boolean;
  centered?: boolean;
}) {
  return (
    <figure
      className={`flex min-w-0 flex-col ${centered ? "items-center text-center" : ""}`}
    >
      <figcaption className={`mb-3 ${centered ? "mx-auto max-w-3xl px-2" : ""}`}>
        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {title}
        </p>
        {caption ? (
          <p className="mt-1.5 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">{caption}</p>
        ) : null}
      </figcaption>
      <div
        className={`${flush ? "min-w-0" : stageClass(theme)} ${centered ? "w-full max-w-3xl" : ""}`}
      >
        {children}
      </div>
    </figure>
  );
}

export type HubBranch = {
  label: string;
  items: readonly string[];
};

/** Three-column highlight card (serif title, rule, pillars) — matches Privacy & trust style */
export function CaseStudyThreePillarHighlight({
  theme,
  title,
  pillars,
}: {
  theme: Theme;
  title: string;
  pillars: readonly { title: string; body: string }[];
}) {
  const shell =
    theme === "teddy"
      ? "rounded-[1.75rem] bg-[#f2ebe3]/95 p-6 ring-1 ring-[#ebe4dc] dark:bg-[var(--surface-elevated)]/90 dark:ring-[var(--border)] sm:p-8 md:p-10"
      : "rounded-[1.75rem] bg-[#f2ebe3]/90 p-6 ring-1 ring-black/[0.06] dark:bg-[#252320]/90 dark:ring-white/[0.08] sm:p-8 md:p-10";

  return (
    <div className={shell}>
      <h3 className="font-serif text-2xl font-medium tracking-tight text-[var(--foreground)] sm:text-3xl">
        {title}
      </h3>
      <div className="mt-3 h-px w-full bg-[var(--border)]" aria-hidden />
      <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
        {pillars.map((p) => (
          <div key={p.title}>
            <h4 className="font-sans text-sm font-semibold text-[var(--foreground)]">{p.title}</h4>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--muted)]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const hubBranchTones = [
  "border-[#5b8fc7]/50 bg-[#e8f0fa] text-[#1e3a5f] dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-100",
  "border-[#8a8f96]/60 bg-[#eceef0] text-[#2c2f33] dark:border-zinc-500/40 dark:bg-zinc-800/60 dark:text-zinc-100",
  "border-[#c9a227]/55 bg-[#faf6e7] text-[#5c4a12] dark:border-amber-400/35 dark:bg-amber-950/35 dark:text-amber-100",
  "border-[#d4a574]/60 bg-[#faf0e8] text-[#5c3d20] dark:border-orange-400/35 dark:bg-orange-950/30 dark:text-orange-100",
  "border-[#6b9e7d]/55 bg-[#edf5ef] text-[#1f3d28] dark:border-emerald-400/35 dark:bg-emerald-950/35 dark:text-emerald-100",
] as const;

/** Hub-and-spoke diagram: center theme + five branches with sub-tags */
export function CaseStudyHubSpokeDiagram({
  theme,
  center,
  branches,
}: {
  theme: Theme;
  center: string;
  branches: readonly HubBranch[];
}) {
  const n = Math.min(branches.length, 5);
  const step = (2 * Math.PI) / n;
  const radiusPct = 40;
  const positions = Array.from({ length: n }, (_, i) => {
    const angle = -Math.PI / 2 + i * step;
    return {
      leftPct: 50 + radiusPct * Math.cos(angle),
      topPct: 50 + radiusPct * Math.sin(angle),
    };
  });

  const hubRing =
    theme === "teddy"
      ? "border-[#c4a090] bg-[#fdeee8]/90 text-[#4a3530] dark:border-[#a8907e] dark:bg-[#3d2f2a]/90 dark:text-[#f5ebe5]"
      : "border-[#6b7355] bg-[#eef0ea]/95 text-[#2a2622] dark:border-[#8a9278] dark:bg-[#1f221c]/90 dark:text-[#e8ebe3]";

  const summary = `${center}. Branches: ${branches.map((b) => b.label).join(", ")}.`;

  return (
    <div>
      <p className="sr-only">{summary}</p>

      {/* Mobile: stacked */}
      <div className="space-y-4 md:hidden">
        <div
          className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed px-3 text-center font-sans text-xs font-semibold leading-snug ${hubRing}`}
        >
          {center}
        </div>
        <ul className="space-y-3">
          {branches.map((b, i) => (
            <li
              key={b.label}
              className={`rounded-xl border-2 px-3 py-2.5 ${hubBranchTones[i % hubBranchTones.length]}`}
            >
              <p className="text-center font-sans text-[11px] font-bold uppercase tracking-wide">{b.label}</p>
              <ul className="mt-2 flex flex-wrap justify-center gap-1.5">
                {b.items.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white/75 px-2 py-0.5 font-sans text-[10px] leading-tight text-[var(--foreground-soft)] ring-1 ring-black/10 dark:bg-black/25 dark:ring-white/10"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: radial */}
      <div
        className="relative mx-auto hidden aspect-[16/11] w-full max-w-full md:block"
        role="img"
        aria-hidden
      >
        <svg className="absolute inset-0 h-full w-full text-[#a8907e]/55 dark:text-[var(--muted)]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {positions.map((p, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={p.leftPct}
              y2={p.topPct}
              stroke="currentColor"
              strokeWidth="0.55"
              strokeLinecap="round"
            />
          ))}
        </svg>

        <div
          className={`absolute left-1/2 top-1/2 z-[2] flex h-[22%] min-h-[5.5rem] w-[22%] min-w-[5.5rem] max-w-[9rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-dashed px-2 text-center font-sans text-[clamp(0.65rem,1.1vw,0.8rem)] font-semibold leading-tight ${hubRing}`}
        >
          {center}
        </div>

        {branches.map((b, i) => (
          <div
            key={b.label}
            className="absolute z-[3] w-[28%] min-w-[7.5rem] max-w-[11rem] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${positions[i].leftPct}%`, top: `${positions[i].topPct}%` }}
          >
            <div className={`rounded-lg border-2 px-2 py-2 shadow-sm ${hubBranchTones[i % hubBranchTones.length]}`}>
              <p className="text-center font-sans text-[10px] font-bold uppercase leading-tight tracking-wide sm:text-[11px]">
                {b.label}
              </p>
              <ul className="mt-1.5 flex flex-wrap justify-center gap-1">
                {b.items.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white/80 px-1.5 py-px font-sans text-[8px] leading-tight ring-1 ring-black/10 dark:bg-black/30 dark:ring-white/15 sm:text-[9px]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
