import type { ReactNode } from "react";

type CpgBrowserFrameProps = {
  children: ReactNode;
  urlLabel?: string;
  className?: string;
  /** e.g. min-h for iframe area */
  bodyClassName?: string;
};

/**
 * Minimal browser chrome for embedding the live game or mock content.
 */
export function CpgBrowserFrame({
  children,
  urlLabel = "game.vercel.app",
  className = "",
  bodyClassName = "",
}: CpgBrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[var(--shadow-card)] ring-1 ring-black/[0.03] dark:ring-white/[0.06] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6b5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </span>
        <div className="min-w-0 flex-1 rounded-md bg-[var(--background)] px-3 py-1 text-center font-sans text-[0.65rem] text-[var(--muted)] ring-1 ring-[var(--border)]">
          <span className="truncate">{urlLabel}</span>
        </div>
      </div>
      <div className={`relative w-full bg-[var(--background)] ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}
