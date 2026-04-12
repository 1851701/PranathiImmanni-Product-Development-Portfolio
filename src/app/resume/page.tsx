import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { ResumeSection } from "@/components/resume/resume-section";
import { ResumePdfEmbed } from "@/components/resume/resume-pdf";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume and CV for ${siteConfig.name}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-20 sm:px-8 lg:px-10 lg:pt-28">
      <FadeIn>
        <h1 className="font-serif text-4xl font-medium tracking-tight text-[var(--foreground)] sm:text-5xl">
          Resume
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-[var(--muted)]">
          Download a PDF or browse the embedded version when{" "}
          <code className="rounded-lg bg-[var(--surface)] px-2 py-0.5 text-sm text-[var(--foreground-soft)]">
            public/resume.pdf
          </code>{" "}
          is present.
        </p>
        <div className="mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-medium tracking-wide text-[var(--accent-foreground)] shadow-[var(--shadow-card)] transition hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-card-hover)]"
          >
            Download PDF
          </a>
        </div>
      </FadeIn>

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <FadeIn delay={0.06}>
          <ResumeSection />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ResumePdfEmbed />
        </FadeIn>
      </div>
    </div>
  );
}
