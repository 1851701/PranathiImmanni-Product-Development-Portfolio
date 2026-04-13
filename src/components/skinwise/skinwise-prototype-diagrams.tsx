import type { ReactNode } from "react";

/**
 * High-level prototype diagrams for the SkinWise case study — replaces abstract wireframe blocks.
 */

const ink = "#3d3429";
const inkMuted = "#6c6358";
const accent = "#6b7355";
const accentSoft = "#a8907e";
const surface = "#faf9f7";
const line = "rgba(52, 42, 34, 0.14)";

type DiagramProps = {
  className?: string;
};

/** What reads first vs. supporting layers — maps to “hierarchy” copy. */
export function SkinWiseDiagramHierarchy({ className }: DiagramProps) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="220" rx="12" fill={surface} />
      <text x="24" y="36" fill={ink} fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600">
        Screen hierarchy
      </text>
      {/* Primary band */}
      <rect x="24" y="52" width="272" height="48" rx="8" fill="white" stroke={accent} strokeWidth="1.5" />
      <text x="40" y="80" fill={ink} fontFamily="system-ui,sans-serif" fontSize="10" fontWeight="600">
        Primary action · capture / intent
      </text>
      {/* Secondary */}
      <rect x="40" y="112" width="240" height="40" rx="6" fill="#f0ebe3" stroke={line} />
      <text x="52" y="136" fill={inkMuted} fontFamily="system-ui,sans-serif" fontSize="9">
        Context · education & framing
      </text>
      {/* Tertiary / disclaimers */}
      <rect x="56" y="164" width="208" height="36" rx="6" fill="#ece8e0" stroke={line} strokeDasharray="4 3" />
      <text x="68" y="186" fill={inkMuted} fontFamily="system-ui,sans-serif" fontSize="8.5">
        Disclaimers · limits · trust cues
      </text>
    </svg>
  );
}

/** Primary path: intent → insight — maps to user flow narrative. */
export function SkinWiseDiagramJourney({ className }: DiagramProps) {
  const nodes = [
    { x: 28, label: "Home" },
    { x: 88, label: "Capture" },
    { x: 148, label: "Analyze" },
    { x: 208, label: "Results" },
    { x: 268, label: "Care" },
  ];
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="220" rx="12" fill={surface} />
      <text x="24" y="36" fill={ink} fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600">
        Primary journey
      </text>
      {nodes.slice(0, -1).map((n, i) => (
        <line
          key={`line-${n.label}`}
          x1={n.x + 22}
          y1={120}
          x2={nodes[i + 1].x - 22}
          y2={120}
          stroke={accentSoft}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy="120" r="22" fill="white" stroke={accent} strokeWidth="1.5" />
          <text
            x={n.x}
            y="123"
            textAnchor="middle"
            fill={ink}
            fontFamily="system-ui,sans-serif"
            fontSize="7.5"
            fontWeight="600"
          >
            {n.label}
          </text>
        </g>
      ))}
      <text x="24" y="188" fill={inkMuted} fontFamily="system-ui,sans-serif" fontSize="8.5">
        Branching exits & consent revisits · non-diagnostic language
      </text>
    </svg>
  );
}

/** Four surface clusters aligned with IA bullets. */
export function SkinWiseDiagramSurfaceMap({ className }: DiagramProps) {
  const cells = [
    { x: 24, y: 56, w: 130, h: 64, t: "Home & capture", sub: "Intent, camera, consent" },
    { x: 166, y: 56, w: 130, h: 64, t: "Results & education", sub: "Insights, limits" },
    { x: 24, y: 132, w: 130, h: 64, t: "Routine planning", sub: "Saved care steps" },
    { x: 166, y: 132, w: 130, h: 64, t: "Profile & privacy", sub: "Data, sessions" },
  ];
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="320" height="220" rx="12" fill={surface} />
      <text x="24" y="36" fill={ink} fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="600">
        Surface map
      </text>
      {cells.map((c) => (
        <g key={c.t}>
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="8" fill="white" stroke={line} strokeWidth="1" />
          <text x={c.x + 10} y={c.y + 24} fill={ink} fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="600">
            {c.t}
          </text>
          <text x={c.x + 10} y={c.y + 42} fill={inkMuted} fontFamily="system-ui,sans-serif" fontSize="7.5">
            {c.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

type CardProps = {
  title: string;
  caption: string;
  children: ReactNode;
};

function DiagramCard({ title, caption, children }: CardProps) {
  return (
    <figure className="flex w-full min-w-0 flex-col">
      <figcaption className="mb-3 text-center">
        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#8e8e93] dark:text-[#98989d]">
          {title}
        </p>
        <p className="mt-1.5 font-sans text-xs leading-snug text-[var(--muted)]">{caption}</p>
      </figcaption>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(52,42,34,0.12)] ring-1 ring-black/[0.06] dark:bg-[#1c1c1e] dark:ring-white/[0.08]">
        {children}
      </div>
    </figure>
  );
}

/** Three diagram cards for the “Wireframes & prototyping → Paper wireframes” row. */
export function SkinWisePaperPrototypeDiagrams() {
  return (
    <div className="grid w-full max-w-5xl grid-cols-1 gap-10 sm:mx-auto md:grid-cols-3 md:gap-6 lg:gap-8">
      <DiagramCard
        title="Information hierarchy"
        caption="What reads first, then context, then disclaimers."
      >
        <SkinWiseDiagramHierarchy className="h-auto w-full" />
      </DiagramCard>
      <DiagramCard
        title="Primary journey"
        caption="Intent → capture → analysis → insight → next steps."
      >
        <SkinWiseDiagramJourney className="h-auto w-full" />
      </DiagramCard>
      <DiagramCard
        title="Surface map"
        caption="Where capture, results, routine, and privacy live."
      >
        <SkinWiseDiagramSurfaceMap className="h-auto w-full" />
      </DiagramCard>
    </div>
  );
}
