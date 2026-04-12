import { siteConfig } from "@/lib/site";

/** Styled resume summary — edit copy here or move to site.ts */
export function ResumeSection() {
  return (
    <div className="max-w-prose space-y-8">
      <h2 className="font-serif text-2xl font-medium text-[var(--foreground)]">
        Summary
      </h2>
      <p className="leading-relaxed text-[var(--muted)]">
        Product designer and front-end developer with experience shipping design
        systems and user-centered flows. Comfortable from research through
        implementation in React / Next.js.
      </p>
      <h3 className="font-serif text-lg font-medium text-[var(--foreground)]">
        Education
      </h3>
      <p className="leading-relaxed text-[var(--muted)]">
        {siteConfig.educationDegree}
      </p>
      <h3 className="font-serif text-lg font-medium text-[var(--foreground)]">
        Skills
      </h3>
      <p className="leading-relaxed text-[var(--muted)]">
        {siteConfig.skills.slice(0, 8).join(" · ")}
      </p>
    </div>
  );
}
