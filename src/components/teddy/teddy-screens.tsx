"use client";

import { TeddyPhoneShell } from "./teddy-phone-shell";

const cream = "bg-[#faf6f0]";
const card = "rounded-2xl bg-white/70 shadow-[0_4px_24px_-4px_rgba(90,70,55,0.12)] ring-1 ring-[#ebe3da]";
const text = "text-[#3d3429]";
const muted = "text-[#7a6d62]";
const accent = "bg-[#a8907e]";
const accentText = "text-[#faf6f0]";

function TeddyMark({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span
        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8ddd4] text-2xl leading-none shadow-inner ring-1 ring-white/60"
        aria-hidden
      >
        🧸
      </span>
      <span className={`font-serif text-lg font-medium tracking-tight ${text}`}>
        Teddy
      </span>
    </div>
  );
}

/** Home — early iteration: competing modules & metrics (before) */
export function TeddyScreenHomeBusy() {
  return (
    <div className={`flex h-full flex-col overflow-hidden px-4 pb-5 pt-2 ${cream}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className={`font-serif text-base font-medium ${text}`}>Home</span>
        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800 ring-1 ring-amber-200">
          🔥 12-day streak
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {["Tips", "Goals", "Social"].map((t) => (
          <div
            key={t}
            className="rounded-lg bg-white/90 py-2 text-center text-[9px] font-medium ring-1 ring-[#ebe3da] text-[#5c524a]"
          >
            {t}
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-xl bg-[#e8f4ff] px-2 py-2 text-[9px] leading-tight text-[#3d5a80] ring-1 ring-[#c5ddf5]">
        Finish your profile — unlock insights
      </div>
      <p className={`mt-3 text-[10px] font-medium uppercase tracking-wide ${muted}`}>
        How do you feel?
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-1.5 opacity-90">
        {["😊", "😐", "😔"].map((e) => (
          <span
            key={e}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80 text-lg ring-1 ring-[#ebe3da]"
          >
            {e}
          </span>
        ))}
      </div>
      <div className={`mt-2 grid flex-1 grid-rows-2 gap-2 text-[9px] ${muted}`}>
        <div className={`rounded-xl ${card} p-2`}>
          <p className="font-medium text-[#3d3429]">Today&apos;s tip</p>
          <p className="mt-1 leading-snug">Hydrate before noon for better focus…</p>
        </div>
        <div className={`rounded-xl ${card} p-2`}>
          <p className="font-medium text-[#3d3429]">Quick actions</p>
          <div className="mt-1 flex gap-1">
            <span className="rounded-md bg-[#ebe3da] px-1.5 py-0.5">Breathe</span>
            <span className="rounded-md bg-[#ebe3da] px-1.5 py-0.5">Walk</span>
            <span className="rounded-md bg-[#ebe3da] px-1.5 py-0.5">Call</span>
          </div>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="rounded-xl bg-[#8b9dc3] py-2 text-[10px] font-semibold text-white"
        >
          Log mood
        </button>
        <button
          type="button"
          className="rounded-xl bg-[#c4a990] py-2 text-[10px] font-semibold text-white"
        >
          See plan
        </button>
      </div>
    </div>
  );
}

/** Mood — early iteration: dense scales (before) */
export function TeddyScreenMoodBusy() {
  const rows = [
    { label: "Mood", v: 60 },
    { label: "Energy", v: 40 },
    { label: "Sleep", v: 70 },
    { label: "Stress", v: 55 },
  ];
  return (
    <div className={`flex h-full flex-col px-4 pb-5 pt-2 ${cream}`}>
      <p className={`text-center font-serif text-sm font-medium ${text}`}>
        Emotional inventory
      </p>
      <p className={`mt-1 text-center text-[9px] leading-tight ${muted}`}>
        Rate each dimension accurately for best insights.
      </p>
      <div className="mt-4 flex flex-1 flex-col gap-3 overflow-y-auto">
        {rows.map((row) => (
          <div key={row.label} className={`rounded-xl ${card} px-3 py-2`}>
            <div className="flex items-center justify-between text-[10px] font-medium text-[#3d3429]">
              <span>{row.label}</span>
              <span className={muted}>{row.v}/100</span>
            </div>
            <input
              type="range"
              defaultValue={row.v}
              className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#ebe3da] accent-[#8b9dc3]"
              aria-label={row.label}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-2 w-full rounded-xl py-2.5 text-[11px] font-semibold text-white bg-[#6b7280]"
      >
        Submit scores
      </button>
    </div>
  );
}

/** 1 — Home / daily check-in */
export function TeddyScreenHome() {
  const moods = [
    { emoji: "😊", label: "Good" },
    { emoji: "🙂", label: "Okay" },
    { emoji: "😐", label: "Flat" },
    { emoji: "😔", label: "Low" },
    { emoji: "😢", label: "Rough" },
  ];
  return (
    <div className={`flex h-full flex-col px-5 pb-6 pt-2 ${cream}`}>
      <TeddyMark className="mb-8" />
      <h1
        className={`font-serif text-[1.35rem] font-medium leading-snug ${text}`}
      >
        Hi there.
        <br />
        <span className="text-[1.15rem] font-normal text-[#5c524a]">
          How are you feeling today?
        </span>
      </h1>
      <p className={`mt-4 text-[13px] leading-relaxed ${muted}`}>
        There’s no wrong answer — just check in with yourself, gently.
      </p>
      <div className="mt-8 flex flex-1 flex-col justify-center">
        <p className={`mb-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] ${muted}`}>
          Tap a mood
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {moods.map((m) => (
            <button
              key={m.label}
              type="button"
              className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-white/80 text-2xl shadow-[0_6px_20px_-6px_rgba(90,70,55,0.15)] ring-1 ring-[#ebe3da] transition hover:scale-[1.04] hover:shadow-md active:scale-[0.98]"
              aria-label={m.label}
            >
              {m.emoji}
            </button>
          ))}
        </div>
        <div className={`mt-10 rounded-2xl px-4 py-5 ${card}`}>
          <p className={`text-center text-[13px] leading-relaxed ${muted}`}>
            Showing up for yourself counts — even on quiet days.
          </p>
        </div>
      </div>
      <button
        type="button"
        className={`mt-auto w-full rounded-2xl py-3.5 text-[15px] font-medium ${accent} ${accentText} shadow-[0_8px_24px_-6px_rgba(120,96,78,0.35)] transition hover:brightness-[1.03] active:scale-[0.99]`}
      >
        Begin check-in
      </button>
    </div>
  );
}

/** 2 — Mood check-in */
export function TeddyScreenMood() {
  const scale = ["😢", "😕", "😐", "🙂", "😊"];
  return (
    <div className={`flex h-full flex-col px-5 pb-6 pt-2 ${cream}`}>
      <div className="mb-6 flex items-center gap-3">
        <button
          type="button"
          className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-lg ring-1 ring-[#ebe3da] ${muted}`}
          aria-label="Back"
        >
          ←
        </button>
        <h2 className={`font-serif text-lg font-medium ${text}`}>Check in</h2>
      </div>
      <p className={`text-[15px] leading-relaxed ${muted}`}>
        Choose the face that feels closest — you can always adjust.
      </p>
      <div className="mt-8 flex justify-between gap-1 px-1">
        {scale.map((e, i) => (
          <button
            key={e}
            type="button"
            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition ${
              i === 3
                ? "scale-110 bg-white shadow-[0_8px_28px_-6px_rgba(90,70,55,0.2)] ring-2 ring-[#c4a990]"
                : "bg-white/50 opacity-80 ring-1 ring-[#ebe3da]/80 hover:opacity-100"
            }`}
            aria-label={`Mood ${i + 1}`}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="mt-6 px-1">
        <p className={`mb-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] ${muted}`}>
          Fine-tune
        </p>
        <label className="sr-only" htmlFor="teddy-mood-range">
          Fine-tune how you feel
        </label>
        <input
          id="teddy-mood-range"
          type="range"
          min={0}
          max={100}
          defaultValue={62}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#ebe3da] accent-[#a8907e] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#a8907e] [&::-webkit-slider-thumb]:shadow-md"
          aria-label="Fine-tune mood"
        />
      </div>
      <div className="mt-6 px-1">
        <label className={`block text-[11px] font-medium uppercase tracking-[0.15em] ${muted}`}>
          Add a note (optional)
        </label>
        <textarea
          readOnly
          rows={3}
          placeholder="A few words are enough…"
          className={`mt-2 w-full resize-none rounded-2xl border-0 bg-white/75 px-4 py-3 text-[14px] leading-relaxed placeholder:text-[#b5a99a] ring-1 ring-[#ebe3da] focus:outline-none focus:ring-2 focus:ring-[#c4a990]/50 ${text}`}
        />
      </div>
      <p className={`mt-4 text-center text-[12px] ${muted}`}>
        Your note stays private on this device.
      </p>
      <button
        type="button"
        className={`mt-auto w-full rounded-2xl py-3.5 text-[15px] font-medium ${accent} ${accentText} shadow-[0_8px_24px_-6px_rgba(120,96,78,0.35)]`}
      >
        Save how I feel
      </button>
    </div>
  );
}

/** 3 — Journal */
export function TeddyScreenJournal() {
  return (
    <div className={`flex h-full flex-col px-5 pb-6 pt-2 ${cream}`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className={`font-serif text-xl font-medium ${text}`}>Journal</h2>
        <button
          type="button"
          className={`rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-medium ring-1 ring-[#ebe3da] ${muted}`}
        >
          Prompts
        </button>
      </div>
      <p className={`text-[14px] leading-relaxed ${muted}`}>
        What’s on your mind?
      </p>
      <div className="mt-4 flex min-h-0 flex-1 flex-col">
        <textarea
          readOnly
          rows={12}
          placeholder="Write freely — no grammar, no pressure."
          className={`min-h-[200px] w-full flex-1 resize-none rounded-3xl border-0 bg-white/60 px-4 py-4 text-[15px] leading-[1.65] placeholder:text-[#b5a99a] ring-1 ring-[#ebe3da] focus:outline-none focus:ring-2 focus:ring-[#c4a990]/40 ${text}`}
        />
        <div className="mt-4 flex items-center justify-between">
          <span className={`text-[11px] ${muted}`}>Gentle autosave on</span>
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-[13px] font-medium ${accent} ${accentText}`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

/** 4 — Insights */
function MoodSparkline() {
  const points = [32, 48, 38, 55, 42, 58, 45];
  const w = 240;
  const h = 72;
  const pad = 8;
  const max = Math.max(...points);
  const min = Math.min(...points) - 8;
  const range = max - min || 1;
  const step = (w - pad * 2) / (points.length - 1);
  const pathD = points
    .map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full overflow-visible"
        aria-hidden
      >
        <defs>
          <linearGradient id="teddyLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4a990" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a8907e" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d={pathD}
          fill="none"
          stroke="url(#teddyLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((v, i) => {
          const x = pad + i * step;
          const y = h - pad - ((v - min) / range) * (h - pad * 2);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              className="fill-[#faf6f0] stroke-[#a8907e] stroke-2"
            />
          );
        })}
      </svg>
      <div className="mt-2 flex justify-between px-1 text-[10px] font-medium uppercase tracking-wider text-[#9a8b7c]">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

export function TeddyScreenInsights() {
  return (
    <div className={`flex h-full flex-col px-5 pb-6 pt-2 ${cream}`}>
      <h2 className={`mb-1 font-serif text-xl font-medium ${text}`}>Insights</h2>
      <p className={`text-[13px] ${muted}`}>Your week, softly summarized</p>
      <div className={`mt-6 ${card} p-5`}>
        <p className={`text-[11px] font-medium uppercase tracking-[0.15em] ${muted}`}>
          Mood trend
        </p>
        <MoodSparkline />
      </div>
      <div className={`mt-4 flex-1 ${card} p-5`}>
        <p className={`text-[14px] leading-relaxed ${text}`}>
          You’ve felt a bit more{" "}
          <span className="font-medium text-[#8b7355]">stressed</span> than
          usual this week — and that’s okay. Small pauses still count.
        </p>
        <p className={`mt-4 text-[13px] leading-relaxed ${muted}`}>
          You journaled 3 times. Gentle consistency builds safety.
        </p>
      </div>
    </div>
  );
}

/** 5 — Recommendations */
export function TeddyScreenRecommendations() {
  const items = [
    {
      icon: "🌬️",
      title: "Soft breathing",
      body: "4 minutes — inhale calm, exhale tension.",
    },
    {
      icon: "✏️",
      title: "One-line journal",
      body: "Finish: “Today I’m proud I…”",
    },
    {
      icon: "🫖",
      title: "Tiny ritual",
      body: "Warm drink, no phone — five quiet minutes.",
    },
  ];
  return (
    <div className={`flex h-full flex-col px-5 pb-6 pt-2 ${cream}`}>
      <h2 className={`mb-1 font-serif text-xl font-medium ${text}`}>For you</h2>
      <p className={`text-[13px] ${muted}`}>Small steps — pick what feels right</p>
      <div className="mt-6 flex flex-col gap-3">
        {items.map((item) => (
          <button
            key={item.title}
            type="button"
            className={`flex w-full items-start gap-4 rounded-2xl p-4 text-left transition hover:bg-white/50 ${card}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f0e8e0] text-xl shadow-inner ring-1 ring-white/50">
              {item.icon}
            </span>
            <div>
              <p className={`font-medium ${text}`}>{item.title}</p>
              <p className={`mt-1 text-[13px] leading-snug ${muted}`}>
                {item.body}
              </p>
            </div>
          </button>
        ))}
      </div>
      <p className={`mt-auto pt-6 text-center text-[11px] leading-relaxed ${muted}`}>
        Suggestions adapt to your check-ins — never a substitute for care you
        need.
      </p>
    </div>
  );
}

/** Full showcase: five phones in a responsive grid */
export function TeddyScreensShowcase() {
  const screens = [
    { Screen: TeddyScreenHome, caption: "Home — daily check-in" },
    { Screen: TeddyScreenMood, caption: "Mood check-in" },
    { Screen: TeddyScreenJournal, caption: "Journal" },
    { Screen: TeddyScreenInsights, caption: "Insights" },
    { Screen: TeddyScreenRecommendations, caption: "Recommendations" },
  ] as const;

  return (
    <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
      {screens.map(({ Screen, caption }) => (
        <TeddyPhoneShell key={caption} caption={caption}>
          <Screen />
        </TeddyPhoneShell>
      ))}
    </div>
  );
}
