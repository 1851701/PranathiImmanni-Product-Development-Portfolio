import { teddyCaseStudy } from "@/data/teddy-case-study";

export function TeddyDecisionCards() {
  const it = teddyCaseStudy.iteration;
  const cards = [it.mood, it.journal, it.ui] as const;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="flex flex-col rounded-2xl bg-[var(--surface-elevated)]/85 p-6 shadow-[0_12px_40px_-20px_rgba(58,46,42,0.15)] ring-1 ring-[var(--border)] md:p-7"
        >
          <h3 className="font-serif text-lg font-medium text-[var(--foreground)] md:text-xl">
            {card.title}
          </h3>
          <div className="mt-6 grid flex-1 gap-5 border-t border-[var(--border)] pt-6 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Before
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
                {card.before}
              </p>
            </div>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                After
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
                {card.after}
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-[var(--border)] pt-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Why
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
              {card.why}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
