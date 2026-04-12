"use client";

import type { ComponentType } from "react";
import { TeddyPhoneShell } from "@/components/teddy/teddy-phone-shell";
import {
  TeddyScreenHome,
  TeddyScreenInsights,
  TeddyScreenJournal,
  TeddyScreenMood,
} from "@/components/teddy/teddy-screens";

const HERO_STACK: {
  Screen: ComponentType;
  position: string;
}[] = [
  {
    Screen: TeddyScreenHome,
    position:
      "left-0 top-[6%] z-[10] -rotate-[12deg] sm:top-[8%]",
  },
  {
    Screen: TeddyScreenMood,
    position:
      "left-[14%] top-0 z-[40] rotate-[5deg] sm:left-[18%]",
  },
  {
    Screen: TeddyScreenJournal,
    position:
      "right-0 top-[14%] z-[20] rotate-[11deg] sm:top-[16%]",
  },
  {
    Screen: TeddyScreenInsights,
    position:
      "left-[8%] bottom-0 z-[30] -rotate-[5deg] sm:left-[12%]",
  },
];

/**
 * Four overlapping Teddy screens — real iOS-style UI, not placeholder photos.
 */
export function TeddyHeroLiveMockups() {
  return (
    <div
      className="relative mx-auto min-h-[min(420px,72vw)] w-full max-w-[min(100%,440px)] select-none lg:min-h-[460px]"
      aria-hidden
    >
      {HERO_STACK.map(({ Screen, position }, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute w-[288px] origin-top scale-[0.42] sm:scale-[0.46] md:scale-[0.5] ${position}`}
        >
          <TeddyPhoneShell>
            <Screen />
          </TeddyPhoneShell>
        </div>
      ))}
    </div>
  );
}
