import type { ReactNode } from "react";

type SkinWisePhoneShellProps = {
  children: ReactNode;
  caption?: string;
  className?: string;
  frameWidth?: number;
  hideCaption?: boolean;
  /** Dark status + content (e.g. camera) — white status glyphs on black. */
  contentTone?: "light" | "dark";
};

/** iOS-style status glyphs: cellular, Wi‑Fi, battery — color via `className` (light UI = dark ink). */
function StatusBarTrailingIcons({ className }: { className: string }) {
  return (
    <div className={`flex items-center justify-end gap-[5px] ${className}`} aria-hidden>
      {/* Cellular — four bars */}
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" className="shrink-0">
        <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
        <rect x="5" y="6" width="3" height="6" rx="1" fill="currentColor" />
        <rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor" />
        <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
      </svg>
      {/* Wi‑Fi */}
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="shrink-0">
        <path
          d="M8 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          fill="currentColor"
        />
        <path
          d="M11.2 7.3a4 4 0 00-6.4 0"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path
          d="M13.5 4.5a7 7 0 00-11 0"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
      {/* Battery */}
      <svg width="27" height="12" viewBox="0 0 27 12" fill="none" className="shrink-0">
        <rect
          x="0.5"
          y="1.5"
          width="21"
          height="9"
          rx="2.5"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <rect x="2" y="3" width="17" height="6" rx="1.5" fill="currentColor" fillOpacity="0.92" />
        <path
          d="M23.5 4v4"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * iPhone 14/15 Pro–style frame: starlight bezel, Dynamic Island, iOS status row + home indicator.
 * App content stays neutral (SkinWise); no wallpaper colors baked into the shell.
 */
export function SkinWisePhoneShell({
  children,
  caption,
  className,
  frameWidth = 300,
  hideCaption = false,
  contentTone = "light",
}: SkinWisePhoneShellProps) {
  const dark = contentTone === "dark";
  const w = `min(100%, ${frameWidth}px)`;
  const statusInk = dark ? "text-white" : "text-[#1C1C1E]";
  const islandBg = dark ? "bg-black ring-1 ring-white/12" : "bg-[#1C1C1E]";

  return (
    <figure
      className={`flex w-full max-w-none shrink-0 flex-col items-center ${className ?? ""}`}
      style={{ width: w }}
    >
      <div
        className="relative w-full shadow-[0_36px_70px_-20px_rgba(0,0,0,0.35),0_14px_28px_-12px_rgba(0,0,0,0.18)]"
        style={{ aspectRatio: "393 / 852", width: "100%" }}
      >
        {/* Starlight / silver chassis */}
        <div className="absolute inset-0 rounded-[2.45rem] bg-gradient-to-b from-[#f5f5f7] via-[#e2e2e6] to-[#d6d6dc] p-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,0,0,0.06)]">
          {/* Side button (power) — right edge */}
          <div
            className="pointer-events-none absolute right-0 top-[26%] z-20 h-14 w-[3px] translate-x-px rounded-full bg-gradient-to-b from-[#f0f0f2] via-[#d8d8dc] to-[#c4c4c8] shadow-[inset_-1px_0_0_rgba(255,255,255,0.5)]"
            aria-hidden
          />
          {/* Mute / volume hint — left edge */}
          <div
            className="pointer-events-none absolute left-0 top-[20%] z-20 h-8 w-[3px] -translate-x-px rounded-full bg-gradient-to-b from-[#e8e8ec] to-[#c8c8cc]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-0 top-[28%] z-20 h-12 w-[3px] -translate-x-px rounded-full bg-gradient-to-b from-[#e8e8ec] to-[#c8c8cc]"
            aria-hidden
          />

          <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[2.15rem] bg-black p-[2px] ring-1 ring-black/30">
            <div
              className={`flex h-full min-h-0 flex-col overflow-hidden rounded-[2.05rem] ${dark ? "bg-black" : "bg-[#faf9f7]"}`}
            >
              {/* Status bar — matches iOS layout: time | Dynamic Island | trailing icons */}
              <div
                className={`relative z-10 flex h-[46px] shrink-0 items-center justify-between px-[1.35rem] pt-[10px] ${dark ? "bg-black" : "bg-[#faf9f7]"}`}
              >
                <span
                  className={`w-[56px] text-[12px] font-semibold tabular-nums leading-none tracking-tight ${statusInk}`}
                  style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}
                >
                  9:41
                </span>
                <div
                  className={`absolute left-1/2 top-[9px] h-[28px] w-[100px] -translate-x-1/2 rounded-full ${islandBg}`}
                  aria-hidden
                />
                <div className="flex w-[56px] justify-end">
                  <StatusBarTrailingIcons className={statusInk} />
                </div>
              </div>

              <div className={`min-h-0 flex-1 overflow-hidden ${dark ? "bg-black" : "bg-[#faf9f7]"}`}>
                {children}
              </div>

              {/* Home indicator */}
              <div
                className={`flex h-[21px] shrink-0 items-start justify-center pt-2 ${dark ? "bg-black" : "bg-[#faf9f7]"}`}
              >
                <div
                  className={`h-[5px] w-[130px] rounded-full ${dark ? "bg-white/30" : "bg-[#1C1C1E]/22"}`}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {caption && !hideCaption ? (
        <figcaption className="mt-3 max-w-[min(100%,18rem)] px-1 text-center font-sans text-[0.8125rem] font-medium leading-snug tracking-wide text-[#636366] sm:text-sm dark:text-[#98989d]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
