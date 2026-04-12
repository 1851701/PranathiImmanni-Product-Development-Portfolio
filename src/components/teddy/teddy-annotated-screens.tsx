import { teddyCaseStudy } from "@/data/teddy-case-study";
import { TeddyPhoneShell } from "@/components/teddy/teddy-phone-shell";
import {
  TeddyScreenHome,
  TeddyScreenInsights,
  TeddyScreenJournal,
  TeddyScreenMood,
  TeddyScreenRecommendations,
} from "@/components/teddy/teddy-screens";

const SCREEN_BY_KEY = {
  home: TeddyScreenHome,
  mood: TeddyScreenMood,
  journal: TeddyScreenJournal,
  insights: TeddyScreenInsights,
  recommendations: TeddyScreenRecommendations,
} as const;

type ScreenKey = keyof typeof SCREEN_BY_KEY;

export function TeddyAnnotatedScreens() {
  const { intro, screens } = teddyCaseStudy.finalScreens;
  const calloutMap = teddyCaseStudy.screenCallouts;

  return (
    <div>
      <p className="max-w-2xl font-sans text-base leading-relaxed text-[var(--foreground-soft)]">
        {intro}
      </p>
      <div className="mt-14 space-y-24 lg:space-y-28">
        {screens.map((screen) => {
          const key = screen.key as ScreenKey;
          const Screen = SCREEN_BY_KEY[key];
          const callouts = calloutMap[key];

          return (
            <div
              key={screen.key}
              className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start lg:gap-16"
            >
              <div className="flex justify-center lg:sticky lg:top-24">
                <div className="relative w-full max-w-[288px]">
                  <TeddyPhoneShell frameWidth={288}>
                    <Screen />
                  </TeddyPhoneShell>
                  {callouts.map((co, i) => (
                    <span
                      key={co.label}
                      className="pointer-events-none absolute z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#faf6f0] bg-[#a8907e] text-xs font-bold text-[#faf6f0] shadow-[0_4px_14px_-2px_rgba(90,70,55,0.35)]"
                      style={{
                        top: co.pin.top,
                        left: co.pin.left,
                        transform: "translate(-50%, -50%)",
                      }}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-serif text-lg text-[var(--foreground)] md:text-xl">
                  {screen.label}
                </p>
                <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-[var(--muted)] md:text-[0.9375rem]">
                  {screen.rationale}
                </p>
                <div className="mt-10 space-y-8 border-t border-[var(--border)] pt-10">
                  {callouts.map((co, i) => (
                    <div key={co.label} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a8907e] text-xs font-bold text-[#faf6f0]"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-serif text-base text-[var(--foreground)]">
                          {co.label}
                        </p>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-[var(--foreground-soft)]">
                          {co.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
