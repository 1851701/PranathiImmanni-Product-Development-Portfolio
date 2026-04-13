import type { ReactNode } from "react";
import { IosStatusTrailingIcons } from "@/components/ui/ios-status-trailing-icons";

type TeddyPhoneShellProps = {
  children: ReactNode;
  /** Short label under the device for the showcase grid */
  caption?: string;
  className?: string;
  /** Max width of the device frame (default 288px). Use smaller values for dense grids. */
  frameWidth?: number;
};

const statusInk = "text-[#1C1C1E]";

/**
 * Warm bezel + iPhone Pro–style status row: 9:41, Dynamic Island, cellular / Wi‑Fi / battery.
 * App content stays on Teddy cream below the status bar.
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
          <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.55rem] bg-[#faf6f0] ring-1 ring-[#e5d9ce]">
            {/* iOS status bar — white strip, SF-like time, Dynamic Island, trailing icons */}
            <div
              className={`relative z-10 flex h-[44px] shrink-0 items-center justify-between bg-white px-[0.85rem] pb-1 pt-[10px] ${statusInk}`}
            >
              <span
                className="w-[52px] text-[11px] font-semibold tabular-nums leading-none tracking-tight sm:text-[12px]"
                style={{
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                }}
              >
                9:41
              </span>
              <div
                className="pointer-events-none absolute left-1/2 top-[9px] h-[26px] w-[min(100px,36%)] min-w-[72px] max-w-[104px] -translate-x-1/2 rounded-full bg-black shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                aria-hidden
              />
              <div className="flex w-[52px] justify-end sm:w-[56px]">
                <IosStatusTrailingIcons className={statusInk} />
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden bg-[#faf6f0]">{children}</div>

            {/* Home indicator — on app canvas */}
            <div className="flex shrink-0 justify-center bg-[#faf6f0] pb-2 pt-1">
              <div
                className="h-1 w-[min(130px,46%)] rounded-full bg-[#1C1C1E]/18"
                aria-hidden
              />
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
