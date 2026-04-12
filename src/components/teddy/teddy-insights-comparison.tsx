import { teddyCaseStudy } from "@/data/teddy-case-study";

function ComplexAnalyticsVisual() {
  return (
    <div
      className="relative h-full min-h-[220px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] p-4 ring-1 ring-[#cbd5e1] dark:from-[#1e293b] dark:to-[#0f172a] dark:ring-[var(--border)]"
      aria-hidden
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wide text-[#64748b]">
          Overview
        </span>
        <span className="rounded bg-[#fecaca] px-1.5 py-0.5 text-[9px] font-semibold text-[#991b1b]">
          −12%
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-white/90 p-2 text-center shadow-sm ring-1 ring-[#e2e8f0] dark:bg-[#334155]/90 dark:ring-[#475569]">
          <p className="text-[8px] text-[#64748b]">Score</p>
          <p className="text-sm font-bold text-[#0f172a] dark:text-white">72</p>
        </div>
        <div className="rounded-lg bg-white/90 p-2 text-center shadow-sm ring-1 ring-[#e2e8f0] dark:bg-[#334155]/90 dark:ring-[#475569]">
          <p className="text-[8px] text-[#64748b]">Rank</p>
          <p className="text-sm font-bold text-[#0f172a] dark:text-white">#4</p>
        </div>
        <div className="rounded-lg bg-white/90 p-2 text-center shadow-sm ring-1 ring-[#e2e8f0] dark:bg-[#334155]/90 dark:ring-[#475569]">
          <p className="text-[8px] text-[#64748b]">Streak</p>
          <p className="text-sm font-bold text-[#16a34a]">18</p>
        </div>
      </div>
      <svg
        className="mt-3 h-16 w-full"
        viewBox="0 0 280 64"
        preserveAspectRatio="none"
      >
        <rect
          x="4"
          y="8"
          width="80"
          height="48"
          rx="4"
          className="fill-[#93c5fd]/40 stroke-[#3b82f6]/50"
          strokeWidth="1"
        />
        <path
          d="M 100 40 L 120 28 L 140 36 L 160 20 L 180 32 L 200 24 L 220 30"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
        />
        <rect
          x="228"
          y="12"
          width="48"
          height="40"
          rx="4"
          className="fill-[#c4b5fd]/30 stroke-[#7c3aed]/40"
          strokeWidth="1"
        />
      </svg>
      <div className="mt-2 flex justify-between text-[8px] font-medium text-[#64748b]">
        <span>Stress index</span>
        <span>Recovery</span>
        <span>Goals</span>
      </div>
    </div>
  );
}

function TeddyTrendVisual() {
  const pts = [38, 52, 44, 48, 42, 50, 46];
  const w = 260;
  const h = 56;
  const pad = 8;
  const max = Math.max(...pts);
  const min = Math.min(...pts) - 6;
  const range = max - min || 1;
  const step = (w - pad * 2) / (pts.length - 1);
  const d = pts
    .map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div
      className="flex h-full min-h-[220px] flex-col rounded-2xl bg-[#faf6f0] p-5 ring-1 ring-[#ebe3da] dark:bg-[var(--surface)]/80 dark:ring-[var(--border)]"
      aria-hidden
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#9a8b7c]">
        Mood trend
      </p>
      <svg className="mt-3 w-full flex-1" viewBox={`0 0 ${w} ${h}`}>
        <defs>
          <linearGradient id="teddyCmpLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4a990" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a8907e" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d={d}
          fill="none"
          stroke="url(#teddyCmpLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-4 font-sans text-[13px] leading-relaxed text-[#5c524a] dark:text-[var(--foreground-soft)]">
        This week felt a little heavier — and that&apos;s okay. Small pauses still
        count.
      </p>
    </div>
  );
}

export function TeddyInsightsComparison() {
  const v = teddyCaseStudy.insightsComparison;

  return (
    <div>
      <p className="max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
        {v.intro}
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            {v.complexLabel}
          </p>
          <p className="mt-2 font-sans text-sm text-[var(--foreground-soft)]">
            {v.complexHint}
          </p>
          <div className="mt-5">
            <ComplexAnalyticsVisual />
          </div>
        </div>
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#a8907e]">
            {v.teddyLabel}
          </p>
          <p className="mt-2 font-sans text-sm text-[var(--foreground-soft)]">
            {v.teddyHint}
          </p>
          <div className="mt-5">
            <TeddyTrendVisual />
          </div>
        </div>
      </div>
      <p className="mt-10 max-w-3xl rounded-2xl bg-[var(--surface)]/80 px-5 py-4 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] ring-1 ring-[var(--border)] md:text-[0.9375rem]">
        {v.reasoning}
      </p>
    </div>
  );
}
