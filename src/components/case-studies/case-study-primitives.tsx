"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function SectionRuleTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-serif text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-[var(--border)]" aria-hidden />
    </div>
  );
}

export function EditorialBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mr-auto max-w-[min(42rem,72%)] space-y-6 font-sans text-base leading-[1.9] text-[var(--foreground-soft)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/** Two-column layout: primary copy + accent diagram (stacks on small screens). */
export function CaseStudySplitWithVisual({
  children,
  visual,
}: {
  children: React.ReactNode;
  visual: React.ReactNode;
}) {
  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
      <div className="min-w-0">{children}</div>
      <figure className="min-w-0">{visual}</figure>
    </div>
  );
}

export function ImageBreak({
  src,
  alt,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  aspect?: string;
}) {
  return (
    <FadeIn className="mt-16 lg:mt-20">
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-[var(--surface)] [box-shadow:var(--shadow-card)] ring-1 ring-[var(--border)] ${aspect}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
    </FadeIn>
  );
}

export const caseStudySectionSpacing = "mt-20 lg:mt-28";
