/**
 * Lightweight SVG accents for case study sections (decorative + thematic).
 */

const panel =
  "rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)]/80 p-4 [box-shadow:var(--shadow-card)] sm:p-5";

export function CareBridgeProblemDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 320 200" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="160" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Fragmented care journey
        </text>
        <rect x="24" y="44" width="80" height="44" rx="8" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.2" />
        <text x="64" y="72" textAnchor="middle" fill="#1e3a5a" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Search
        </text>
        <path d="M 108 66 L 132 66" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cb-p)" />
        <rect x="136" y="44" width="80" height="44" rx="8" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1.2" />
        <text x="176" y="72" textAnchor="middle" fill="#78350f" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Anxiety
        </text>
        <path d="M 220 66 L 244 66" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cb-p)" />
        <rect x="248" y="44" width="48" height="44" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
        <text x="272" y="72" textAnchor="middle" fill="#334155" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px", fontWeight: 600 }}>
          Tools
        </text>
        <path d="M 64 100 L 64 118 Q 160 150 256 118 L 256 100" fill="none" stroke="#64748b" strokeWidth="1.2" strokeDasharray="4 3" opacity={0.7} />
        <text x="160" y="178" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}>
          No single calm path to “what next?”
        </text>
        <defs>
          <marker id="cb-p" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="#2563eb" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function CareBridgeSolutionDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 320 200" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="160" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          One portal, shallow depth
        </text>
        <circle cx="160" cy="100" r="36" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
        <text x="160" y="104" textAnchor="middle" fill="#1e40af" style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 700 }}>
          Home
        </text>
        {[
          { lx: 40, ly: 52, t: "Triage" },
          { lx: 260, ly: 52, t: "Labs" },
          { lx: 40, ly: 148, t: "Messages" },
          { lx: 260, ly: 148, t: "Visits" },
        ].map((b) => (
          <g key={b.t}>
            <line x1="160" y1="100" x2={b.lx + 36} y2={b.ly + 18} stroke="#94a3b8" strokeWidth="1.2" />
            <rect x={b.lx} y={b.ly} width="72" height="36" rx="8" fill="white" stroke="var(--border)" strokeWidth="1" />
            <text x={b.lx + 36} y={b.ly + 23} textAnchor="middle" fill="var(--foreground-soft)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px", fontWeight: 600 }}>
              {b.t}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function CareBridgeResearchDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 320 180" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="160" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Listening before layout
        </text>
        <ellipse cx="100" cy="100" rx="56" ry="40" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="100" y="96" textAnchor="middle" fill="#475569" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Interviews
        </text>
        <text x="100" y="110" textAnchor="middle" fill="#64748b" style={{ fontFamily: "system-ui,sans-serif", fontSize: "7px" }}>
          goals · fears
        </text>
        <path d="M 162 100 L 198 100" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cb-r)" />
        <rect x="200" y="72" width="96" height="56" rx="10" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.2" />
        <text x="248" y="98" textAnchor="middle" fill="#1e3a5a" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Insights
        </text>
        <text x="248" y="112" textAnchor="middle" fill="#64748b" style={{ fontFamily: "system-ui,sans-serif", fontSize: "7px" }}>
          into IA + flows
        </text>
        <defs>
          <marker id="cb-r" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
            <path d="M0,0 L5,2.5 L0,5 Z" fill="#2563eb" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export function CareBridgePainDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 320 200" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="160" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Where pressure shows up
        </text>
        {[
          { x: 32, y: 48, c: "#fee2e2", s: "#fca5a5", t: "Trust" },
          { x: 120, y: 48, c: "#fef3c7", s: "#fcd34d", t: "Overload" },
          { x: 208, y: 48, c: "#e0e7ff", s: "#a5b4fc", t: "Access" },
          { x: 76, y: 120, c: "#ecfccb", s: "#bef264", t: "Clarity" },
          { x: 196, y: 120, c: "#fce7f3", s: "#f9a8d4", t: "Tone" },
        ].map((b) => (
          <g key={b.t}>
            <rect x={b.x} y={b.y} width="72" height="56" rx="10" fill={b.c} stroke={b.s} strokeWidth="1.2" />
            <text x={b.x + 36} y={b.y + 32} textAnchor="middle" fill="#334155" style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 700 }}>
              {b.t}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function SkinWiseProblemDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 300 190" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Noise versus personal context
        </text>
        <circle cx="90" cy="100" r="44" fill="#f4f1ea" stroke="#6b7355" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="90" y="96" textAnchor="middle" fill="#5c534c" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Generic
        </text>
        <text x="90" y="110" textAnchor="middle" fill="#6b7355" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px" }}>
          tips online
        </text>
        <path d="M 140 100 L 168 100" stroke="#6b7355" strokeWidth="2" />
        <polygon points="168,100 162,96 162,104" fill="#6b7355" />
        <rect x="176" y="56" width="100" height="88" rx="12" fill="#eef0ea" stroke="#6b7355" strokeWidth="1.5" />
        <text x="226" y="92" textAnchor="middle" fill="#2a2622" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Your skin
        </text>
        <text x="226" y="108" textAnchor="middle" fill="#5c534c" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px" }}>
          camera + goals
        </text>
        <text x="150" y="172" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}>
          The gap the product bridges
        </text>
      </svg>
    </div>
  );
}

export function SkinWiseSolutionDiagram() {
  const steps = ["Capture", "Analyze", "Educate", "Act"];
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 300 200" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Guided flow
        </text>
        {steps.map((label, i) => (
          <g key={label}>
            <rect x={16 + i * 72} y="56" width="64" height="40" rx="8" fill="#f7f6f3" stroke="#6b7355" strokeWidth="1.2" />
            <text x={48 + i * 72} y="80" textAnchor="middle" fill="#2a2622" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px", fontWeight: 600 }}>
              {label}
            </text>
            {i < steps.length - 1 ? (
              <path d={`M ${80 + i * 72} 76 L ${88 + i * 72} 76`} stroke="#6b7355" strokeWidth="1.5" markerEnd="url(#sw-sol)" />
            ) : null}
          </g>
        ))}
        <defs>
          <marker id="sw-sol" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto">
            <path d="M0,0 L4,2 L0,4 Z" fill="#6b7355" />
          </marker>
        </defs>
        <text x="150" y="140" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}>
          Consent and limits shown before heavy lifting
        </text>
      </svg>
    </div>
  );
}

export function SkinWiseCompetitiveDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 300 170" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          What credible apps share
        </text>
        {[
          { y: 48, t: "Under promise in UI" },
          { y: 88, t: "Explain tradeoffs early" },
          { y: 128, t: "Limitations before commitment" },
        ].map((row) => (
          <g key={row.t}>
            <rect x="32" y={row.y} width="236" height="28" rx="6" fill="#f0f2ec" stroke="#c5cbb8" strokeWidth="1" />
            <text x="150" y={row.y + 19} textAnchor="middle" fill="#3d3a36" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
              {row.t}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function TeddyProblemDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 300 200" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="24" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Pressure versus care
        </text>
        <rect x="40" y="52" width="100" height="100" rx="12" fill="#faf6f0" stroke="#d4c9be" strokeWidth="1.5" />
        <text x="90" y="92" textAnchor="middle" fill="#6c6358" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Dashboard
        </text>
        <text x="90" y="110" textAnchor="middle" fill="#a8907e" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px" }}>
          streaks · scores
        </text>
        <text x="90" y="132" textAnchor="middle" fill="#8b7355" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px" }}>
          feels like judgment
        </text>
        <path d="M 148 102 L 178 102" stroke="#a8907e" strokeWidth="2" />
        <polygon points="178,102 172,98 172,106" fill="#a8907e" />
        <rect x="186" y="60" width="84" height="84" rx="42" fill="#fdf8f4" stroke="#a8907e" strokeWidth="2" strokeDasharray="3 2" />
        <text x="228" y="108" textAnchor="middle" fill="#4a423c" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px", fontWeight: 600 }}>
          Softer
        </text>
        <text x="228" y="124" textAnchor="middle" fill="#6c6358" style={{ fontFamily: "system-ui,sans-serif", fontSize: "8px" }}>
          pause · choice
        </text>
        <text x="150" y="182" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}>
          Design moves toward the right-hand path
        </text>
      </svg>
    </div>
  );
}

export function UiGameDesignLoopDiagram() {
  return (
    <div className={panel} aria-hidden>
      <svg viewBox="0 0 300 180" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="22" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "11px", fontWeight: 600 }}>
          Design focus pillars
        </text>
        {[
          { x: 28, y: 56, label: "Flow" },
          { x: 118, y: 56, label: "Feedback" },
          { x: 208, y: 56, label: "Clarity" },
        ].map((p) => (
          <g key={p.label}>
            <rect x={p.x} y={p.y} width="64" height="72" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.2" />
            <text x={p.x + 32} y={p.y + 42} textAnchor="middle" fill="var(--foreground)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "10px", fontWeight: 700 }}>
              {p.label}
            </text>
          </g>
        ))}
        <path d="M 92 92 L 112 92 M 182 92 L 202 92" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="150" y="168" textAnchor="middle" fill="var(--muted)" style={{ fontFamily: "system-ui,sans-serif", fontSize: "9px" }}>
          Three checks for every interaction pass
        </text>
      </svg>
    </div>
  );
}
