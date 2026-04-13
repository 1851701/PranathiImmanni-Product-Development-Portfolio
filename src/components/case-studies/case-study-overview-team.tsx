"use client";

import { FadeIn } from "@/components/ui/fade-in";
import {
  SectionRuleTitle,
  caseStudySectionSpacing,
} from "@/components/case-studies/case-study-primitives";

export type TeamMember = {
  name: string;
  role: string;
  /** Optional link (e.g. collaborator portfolio) */
  href?: string;
};

export type CaseStudyOverviewMeta = {
  date: string;
  scope: string;
  tools: readonly string[];
  paragraphs: readonly string[];
};

type CaseStudyOverviewTeamProps = {
  projectTitle: string;
  overview: CaseStudyOverviewMeta;
  team: readonly TeamMember[];
};

const block = caseStudySectionSpacing;

/**
 * Shared “Project overview” + team section used on multiple case study pages.
 */
export function CaseStudyOverviewTeamSection({
  projectTitle,
  overview,
  team,
}: CaseStudyOverviewTeamProps) {
  return (
    <FadeIn className={block}>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
        {projectTitle}
      </p>
      <SectionRuleTitle title="Project overview" />
      <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-10 font-sans">
          <dl className="space-y-8">
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                Date
              </dt>
              <dd className="mt-2 text-[0.95rem] text-[var(--foreground-soft)]">
                {overview.date}
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                Scope
              </dt>
              <dd className="mt-2 text-[0.95rem] text-[var(--foreground-soft)]">
                {overview.scope}
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
                Tools
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {overview.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-xs text-[var(--foreground-soft)] ring-1 ring-[var(--border)]"
                  >
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <div>
            <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
              Team
            </h3>
            <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-[var(--foreground-soft)]">
              {team.map((member) => (
                <li key={member.name}>
                  <span className="font-medium text-[var(--foreground)]">
                    {member.name}
                  </span>
                  <span className="text-[var(--muted)]"> · {member.role}</span>
                  {member.href ? (
                    <>
                      {" "}
                      <a
                        href={member.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap font-sans text-sm text-[var(--accent)] underline-offset-2 hover:underline"
                      >
                        View portfolio
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6 font-sans text-base leading-[1.9] text-[var(--foreground-soft)]">
          {overview.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
