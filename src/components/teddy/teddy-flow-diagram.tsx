/** Minimal linear user flow diagram: rounded nodes and arrows; responsive (horizontal / vertical). */

const STEPS = [
  "Home",
  "Check in",
  "Journal",
  "Insights",
  "Recommendations",
] as const;

function ArrowHead({
  x,
  y,
  rotate = 0,
}: {
  x: number;
  y: number;
  rotate?: number;
}) {
  return (
    <polygon
      points={`${x},${y} ${x - 7},${y - 4} ${x - 7},${y + 4}`}
      fill="currentColor"
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      className="text-[#a8907e]"
    />
  );
}

export function TeddyFlowDiagram() {
  return (
    <div
      className="rounded-2xl bg-[#f7f2ec] px-3 py-8 ring-1 ring-[#ebe4dc] dark:bg-[var(--surface-elevated)]/60 dark:ring-[var(--border)] sm:px-6 sm:py-10"
      role="img"
      aria-label="User flow: Home, Check in, Journal, Insights, Recommendations connected in order"
    >
      {/* Desktop: horizontal */}
      <svg
        className="mx-auto hidden h-auto w-full max-w-4xl text-[#4a423c] dark:text-[var(--foreground-soft)] md:block"
        viewBox="0 0 920 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <filter
            id="teddyFlowShadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="6"
              floodOpacity="0.08"
            />
          </filter>
        </defs>
        {STEPS.map((label, i) => {
          const w = 132;
          const h = 48;
          const gap = 28;
          const x0 = 24 + i * (w + gap);
          const y0 = 20;
          return (
            <g key={label}>
              <rect
                x={x0}
                y={y0}
                width={w}
                height={h}
                rx={14}
                className="fill-[#faf6f0] stroke-[#d4c9be] dark:fill-[var(--background)] dark:stroke-[var(--border)]"
                strokeWidth={1}
                filter="url(#teddyFlowShadow)"
              />
              <text
                x={x0 + w / 2}
                y={y0 + h / 2 + 5}
                textAnchor="middle"
                className="fill-[#4a423c] text-[13px] font-medium dark:fill-[var(--foreground)]"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                {label}
              </text>
            </g>
          );
        })}
        {STEPS.slice(0, -1).map((_, i) => {
          const w = 132;
          const gap = 28;
          const xLine = 24 + i * (w + gap) + w + 2;
          const yLine = 20 + 48 / 2;
          return (
            <g key={`arr-${i}`}>
              <line
                x1={xLine}
                y1={yLine}
                x2={xLine + gap - 10}
                y2={yLine}
                className="stroke-[#c4b5a8] dark:stroke-[var(--muted)]"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <ArrowHead x={xLine + gap - 4} y={yLine} />
            </g>
          );
        })}
      </svg>

      {/* Mobile: vertical */}
      <svg
        className="mx-auto h-auto w-full max-w-[220px] text-[#4a423c] dark:text-[var(--foreground-soft)] md:hidden"
        viewBox="0 0 200 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {STEPS.map((label, i) => {
          const w = 168;
          const h = 48;
          const row = 86;
          const x0 = 16;
          const y0 = 16 + i * row;
          return (
            <g key={label}>
              <rect
                x={x0}
                y={y0}
                width={w}
                height={h}
                rx={14}
                className="fill-[#faf6f0] stroke-[#d4c9be] dark:fill-[var(--background)] dark:stroke-[var(--border)]"
                strokeWidth={1}
              />
              <text
                x={x0 + w / 2}
                y={y0 + h / 2 + 5}
                textAnchor="middle"
                className="fill-[#4a423c] text-[13px] font-medium dark:fill-[var(--foreground)]"
                style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
              >
                {label}
              </text>
            </g>
          );
        })}
        {STEPS.slice(0, -1).map((_, i) => {
          const row = 86;
          const h = 48;
          const cx = 100;
          const y1 = 16 + i * row + h + 4;
          const y2 = 16 + (i + 1) * row - 4;
          return (
            <g key={`vd-${i}`}>
              <line
                x1={cx}
                y1={y1}
                x2={cx}
                y2={y2 - 6}
                className="stroke-[#c4b5a8] dark:stroke-[var(--muted)]"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <polygon
                points={`${cx},${y2} ${cx - 5},${y2 - 7} ${cx + 5},${y2 - 7}`}
                className="fill-[#a8907e]"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
