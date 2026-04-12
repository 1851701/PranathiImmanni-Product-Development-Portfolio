import { teddyCaseStudy } from "@/data/teddy-case-study";

function PillarVisual({
  variant,
}: {
  variant: "color" | "shapes" | "tone" | "interaction";
}) {
  if (variant === "color") {
    return (
      <div className="flex flex-wrap gap-2" aria-hidden>
        {["#faf6f0", "#ebe3da", "#a8907e", "#5c524a"].map((hex) => (
          <div
            key={hex}
            className="h-10 w-10 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] ring-1 ring-black/5"
            style={{ backgroundColor: hex }}
            title={hex}
          />
        ))}
      </div>
    );
  }
  if (variant === "shapes") {
    return (
      <div className="flex items-end gap-3" aria-hidden>
        <div className="h-14 w-14 rounded-3xl bg-[#ebe3da] shadow-[0_8px_24px_-8px_rgba(90,70,55,0.2)] ring-1 ring-[#e5d9ce]" />
        <div className="h-10 w-24 rounded-2xl bg-[#f5f0ea] ring-1 ring-[#ebe3da]" />
        <div className="h-12 w-12 rounded-full bg-[#e8ddd4] ring-1 ring-white/60" />
      </div>
    );
  }
  if (variant === "tone") {
    return (
      <div
        className="rounded-2xl bg-[#faf6f0] px-4 py-3 font-serif text-sm italic leading-snug text-[#5c524a] ring-1 ring-[#ebe3da] dark:bg-[var(--surface)] dark:text-[var(--foreground-soft)] dark:ring-[var(--border)]"
        aria-hidden
      >
        “There’s no wrong answer — just check in, gently.”
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-2" aria-hidden>
      <div className="h-10 w-full max-w-[200px] rounded-2xl bg-[#a8907e] text-center text-[11px] font-medium leading-10 text-[#faf6f0] shadow-md">
        Begin check-in
      </div>
      <div className="h-9 w-full max-w-[200px] rounded-2xl border border-[#d4c9be] bg-transparent text-center text-[11px] leading-9 text-[#7a6d62]">
        Maybe later
      </div>
    </div>
  );
}

export function TeddyEmotionalDesign() {
  const { intro, pillars } = teddyCaseStudy.emotionalDesign;

  return (
    <div>
      <p className="max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
        {intro}
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-10">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="flex flex-col rounded-2xl bg-[#f7f2ec]/90 p-6 ring-1 ring-[#ebe4dc] dark:bg-[var(--surface-elevated)]/90 dark:ring-[var(--border)] md:p-8"
          >
            <div className="mb-6">
              <PillarVisual variant={pillar.variant} />
            </div>
            <h3 className="font-serif text-xl font-medium text-[var(--foreground)]">
              {pillar.title}
            </h3>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] md:text-[0.9375rem]">
              {pillar.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
