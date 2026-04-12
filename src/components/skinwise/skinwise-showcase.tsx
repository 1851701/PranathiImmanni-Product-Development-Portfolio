import type { ReactNode } from "react";

/** Typical widths for hero clusters — main focal phone, supporting ~85%. */
export const SKINWISE_PHONE = {
  /** Center / hero device (readable UI detail) */
  main: 340,
  /** Side devices — ~85% of main */
  support: 288,
  /** Hero trio — center focal (scan → results → care) */
  heroMain: 368,
  /** Hero trio — flanking devices (~86% of heroMain for clear hierarchy) */
  heroSide: 316,
  /** Medium tier (e.g. user-flow steps) */
  medium: 300,
  /** Secondary rows */
  large: 280,
} as const;

type SkinWiseShowcaseProps = {
  children: ReactNode;
  className?: string;
  /** Label above the mockup cluster (optional). */
  label?: string;
  /**
   * `hero` — large displays, tighter vertical padding, horizontal scroll on small screens.
   * `heroTrio` — three phones, center largest; overlap + nowrap for product showcase.
   * `flow` — three-across emphasis (Core flow), centered, generous gaps.
   * `default` — balanced padding for mixed clusters.
   */
  variant?: "default" | "hero" | "heroTrio" | "flow";
};

const variantClass: Record<NonNullable<SkinWiseShowcaseProps["variant"]>, string> = {
  default:
    "rounded-[1.75rem] px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-black/[0.04] sm:px-6 sm:py-10 md:px-8 dark:bg-[#2a2a2e] dark:ring-white/[0.06]",
  hero:
    "rounded-[1.75rem] px-3 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-black/[0.04] sm:px-5 sm:py-8 md:px-6 md:py-9 dark:bg-[#2a2a2e] dark:ring-white/[0.06]",
  heroTrio:
    "rounded-[1.75rem] px-2 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-black/[0.04] sm:px-4 sm:py-8 md:px-5 md:py-9 dark:bg-[#2a2a2e] dark:ring-white/[0.06]",
  flow:
    "rounded-[1.75rem] px-4 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-black/[0.04] sm:px-6 sm:py-8 md:px-8 dark:bg-[#2a2a2e] dark:ring-white/[0.06]",
};

const bg = "bg-[#ececf0]";

/**
 * Portfolio-style neutral stage for iPhone mockup clusters.
 */
export function SkinWiseShowcase({
  children,
  className,
  label,
  variant = "default",
}: SkinWiseShowcaseProps) {
  return (
    <div
      className={`${bg} ${variantClass[variant]} ${className ?? ""} w-full min-w-0`}
    >
      {label ? (
        <p className="mb-6 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8e8e93] sm:mb-8 dark:text-[#98989d]">
          {label}
        </p>
      ) : null}
      <div
        className={
          variant === "flow"
            ? "flex w-full min-w-0 flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-end lg:justify-center lg:gap-8 xl:gap-12 2xl:gap-14"
            : variant === "heroTrio"
              ? "flex w-full min-w-0 flex-nowrap items-end justify-start gap-0 overflow-x-auto overflow-y-visible py-1 pl-5 pr-5 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:pl-10 sm:pr-10 md:pl-14 md:pr-14 [&::-webkit-scrollbar]:hidden"
              : variant === "hero"
                ? "flex w-full min-w-0 flex-wrap content-end items-end justify-center gap-x-3 gap-y-10 sm:gap-x-4 sm:gap-y-8 md:gap-x-5 lg:gap-x-4 lg:gap-y-6 xl:-mx-2 xl:gap-x-2 2xl:gap-x-4"
                : "flex w-full min-w-0 flex-wrap content-end items-end justify-center gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-8 md:gap-x-8"
        }
      >
        {children}
      </div>
    </div>
  );
}

/** Subtle section divider without stock photography. */
export function SkinWiseSectionSpacer() {
  return (
    <div
      className="my-16 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-[var(--border)] to-transparent lg:my-24"
      aria-hidden
    />
  );
}
