import type { Metadata } from "next";
import { DesigningInteractionThroughPlayCaseStudy } from "@/components/case-studies/designing-interaction-through-play-case-study";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("designing-interaction-through-play");

export const metadata: Metadata = {
  title: project?.title ?? "Designing Interaction Through Play",
  description:
    project?.shortDescription ??
    "Interactive Pattern Experience — UX/UI case study: flow, feedback, and clarity through play.",
  openGraph: {
    title: project
      ? `${project.title} — Case study`
      : "Designing Interaction Through Play",
    description: project?.shortDescription,
    images: project?.heroImage
      ? [{ url: project.heroImage, width: 1600, height: 900 }]
      : undefined,
  },
};

export default function DesigningInteractionThroughPlayPage() {
  return <DesigningInteractionThroughPlayCaseStudy />;
}
