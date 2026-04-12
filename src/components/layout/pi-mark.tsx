/**
 * Editorial PI monogram — swap for a custom asset in public/ if you prefer.
 */
export function PIMark({ className }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center sm:h-11 sm:w-11 ${className ?? ""}`}
      aria-hidden
    >
      <span className="absolute inset-0 rounded-full border border-[var(--border)]" />
      <span className="absolute inset-[3px] rounded-full border border-[var(--accent)]/40" />
      <span className="font-serif text-[0.65rem] font-semibold tracking-[0.28em] text-[var(--foreground)] sm:text-[0.7rem]">
        PI
      </span>
    </span>
  );
}
