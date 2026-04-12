import { teddyCaseStudy } from "@/data/teddy-case-study";
import { TeddyPhoneShell } from "@/components/teddy/teddy-phone-shell";
import {
  TeddyScreenHome,
  TeddyScreenHomeBusy,
  TeddyScreenMood,
  TeddyScreenMoodBusy,
} from "@/components/teddy/teddy-screens";

const PAIR_SCREENS = {
  mood: { Before: TeddyScreenMoodBusy, After: TeddyScreenMood },
  home: { Before: TeddyScreenHomeBusy, After: TeddyScreenHome },
} as const;

export function TeddyBeforeAfterSection() {
  const { intro, pairs } = teddyCaseStudy.beforeAfter;

  return (
    <div>
      <p className="max-w-2xl font-sans text-base leading-relaxed text-[var(--muted)]">
        {intro}
      </p>
      <div className="mt-12 space-y-20 lg:space-y-24">
        {pairs.map((pair) => {
          const { Before, After } = PAIR_SCREENS[pair.id];
          return (
            <div key={pair.id}>
              <h3 className="font-serif text-xl font-medium text-[var(--foreground)] md:text-2xl">
                {pair.title}
              </h3>
              <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
                <div className="flex flex-col items-center">
                  <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Before
                  </p>
                  <TeddyPhoneShell frameWidth={260}>
                    <Before />
                  </TeddyPhoneShell>
                </div>
                <div className="flex flex-col items-center">
                  <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#a8907e]">
                    After
                  </p>
                  <TeddyPhoneShell frameWidth={260}>
                    <After />
                  </TeddyPhoneShell>
                </div>
              </div>
              <p className="mt-8 max-w-3xl rounded-2xl bg-[var(--surface)]/80 px-5 py-4 font-sans text-sm leading-relaxed text-[var(--foreground-soft)] ring-1 ring-[var(--border)] md:text-[0.9375rem]">
                <span className="font-medium text-[var(--foreground)]">Why: </span>
                {pair.why}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
