/** iOS-style status bar trailing cluster: cellular, Wi‑Fi, battery (SF-style). */
export function IosStatusTrailingIcons({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-end gap-[5px] ${className ?? ""}`}
      aria-hidden
    >
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" className="shrink-0">
        <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
        <rect x="5" y="6" width="3" height="6" rx="1" fill="currentColor" />
        <rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor" />
        <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
      </svg>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="shrink-0">
        <path d="M8 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />
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
