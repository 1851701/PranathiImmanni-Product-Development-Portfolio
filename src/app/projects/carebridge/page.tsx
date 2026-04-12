import type { Metadata } from "next";
import { CareBridgeCaseStudy } from "@/components/case-studies/carebridge-case-study";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("carebridge");

export const metadata: Metadata = {
  title: project?.title ?? "CareBridge",
  description:
    project?.shortDescription ??
    "CareBridge — AI-assisted patient portal UX case study: symptom guidance, labs, and trusted healthcare UX.",
  openGraph: {
    title: project ? `${project.title} — Case study` : "CareBridge",
    description: project?.shortDescription,
    images: project?.heroImage
      ? [{ url: project.heroImage, width: 1600, height: 900 }]
      : undefined,
  },
};

export default function CareBridgeCaseStudyPage() {
  return <CareBridgeCaseStudy />;
}
