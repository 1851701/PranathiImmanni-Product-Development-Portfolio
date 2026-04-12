import Image from "next/image";
import { siteConfig } from "@/lib/site";

export type Hobby = (typeof siteConfig.getToKnowMe.hobbies)[number];

/** Cute beach / nature doodles */
export function SunDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden
    >
      <circle cx="28" cy="28" r="10" fill="currentColor" opacity="0.25" />
      <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="28"
          y1="28"
          x2="28"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${deg} 28 28)`}
        />
      ))}
    </svg>
  );
}

export function WaveDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 22c6-6 12-6 18 0s12 6 18 0 12-6 18 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M4 30c6-5 12-5 18 0s12 5 18 0 12-5 18 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function PawDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <ellipse cx="24" cy="30" rx="10" ry="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="16" r="4" fill="currentColor" opacity="0.35" />
      <circle cx="24" cy="12" r="4" fill="currentColor" opacity="0.35" />
      <circle cx="34" cy="16" r="4" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function PalmDoodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 56"
      fill="none"
      aria-hidden
    >
      <path
        d="M24 52V28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 28c-8-10-10-18 2-22 4 8 2 16-2 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 28c8-8 12-16 2-20-2 8-4 14-2 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 30c-6-4-14-4-16 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M24 30c6-4 14-4 16 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarDivider() {
  return (
    <div
      className="my-14 flex items-center gap-4 sm:my-20"
      role="separator"
    >
      <div className="h-px flex-1 bg-neutral-900/15 dark:bg-white/15" />
      <WaveDoodle className="h-6 w-8 shrink-0 text-sky-600/70 dark:text-sky-300/80" />
      <div className="h-px flex-1 bg-neutral-900/15 dark:bg-white/15" />
    </div>
  );
}

export function HobbyPolaroid({ item }: { item: Hobby }) {
  const hasImage = "image" in item && item.image;
  return (
    <div className="group flex flex-col">
      <div className="relative rotate-1 rounded-sm bg-white p-2.5 pb-4 shadow-[6px_6px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] transition group-hover:rotate-0 dark:bg-[#3a3238] dark:ring-white/10">
        {hasImage ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 dark:bg-neutral-700">
            <Image
              src={item.image!}
              alt={"imageAlt" in item && item.imageAlt ? item.imageAlt : item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 360px"
            />
          </div>
        ) : null}
        <p className="mt-2 text-center font-sans text-[0.65rem] font-bold uppercase tracking-[0.14em] text-neutral-900 dark:text-[#f0e8ec]">
          {item.title}
        </p>
      </div>
      <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-800/90 dark:text-[#d8ccd2]">
        {item.description}
      </p>
    </div>
  );
}
