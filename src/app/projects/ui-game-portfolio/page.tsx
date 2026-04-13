import type { Metadata } from "next";
import { UiGamePortfolioCaseStudy } from "@/components/case-studies/ui-game-portfolio-case-study";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("ui-game-portfolio");

export const metadata: Metadata = {
  title: project?.title ?? "UI Game Portfolio",
  description:
    project?.shortDescription ??
    "UI Game Portfolio: web experience, flow, feedback, and clarity through interaction design.",
  openGraph: {
    title: project ? `${project.title} — Case study` : "UI Game Portfolio",
    description: project?.shortDescription,
    images: project?.heroImage
      ? [{ url: project.heroImage, width: 1600, height: 900 }]
      : undefined,
  },
};

export default function UiGamePortfolioPage() {
  return <UiGamePortfolioCaseStudy />;
}
