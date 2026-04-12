import type { ReactNode } from "react";

type TeddyPhoneShellProps = {
  children: ReactNode;
  /** Short label under the device for the showcase grid */
  caption?: string;
  className?: string;
  /** Max width of the device frame (default 288px). Use smaller values for dense grids. */
  frameWidth?: number;
};

/**
 * Warm, soft phone frame for Teddy UI concepts — portfolio showcase only.
 */
export function TeddyPhoneShell({
  children,
  caption,
  className,
  frameWidth = 288,
}: TeddyPhoneShellProps) {
  return (
    <figure className={`flex flex-col items-center ${className ?? ""}`}>
      <div
        className="relative mx-auto shadow-[0_24px_56px_-18px_rgba(88,68,52,0.22),0_0_0_1px_rgba(139,115,85,0.12)]"
        style={{ aspectRatio: "9 / 19", width: `min(100%, ${frameWidth}px)` }}
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#ebe3da] to-[#ddd2c8] p-[10px]">
          <div className="flex h-full flex-col overflow-hidden rounded-[1.55rem] bg-[#faf6f0] ring-1 ring-[#e5d9ce]">
            {/* Status bar */}
            <header className="flex shrink-0 items-center justify-between px-5 pb-1 pt-3 text-[11px] font-medium tracking-wide text-[#9a8b7c]">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="text-[10px]">●●●●</span>
                <span className="rounded-sm border border-[#c4b5a8] px-1 py-px text-[9px]">
                  100%
                </span>
              </div>
            </header>
            <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
            {/* Home indicator */}
            <div className="flex shrink-0 justify-center pb-2 pt-1">
              <div className="h-1 w-28 rounded-full bg-[#d4c9be]/80" />
            </div>
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 max-w-[16rem] text-center font-sans text-xs leading-snug text-[var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
