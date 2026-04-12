import type { Metadata } from "next";
import { SkinWiseCaseStudy } from "@/components/case-studies/skinwise-case-study";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("skinwise");

export const metadata: Metadata = {
  title: "SkinWise",
  description:
    project?.shortDescription ??
    "SkinWise — AI-powered skincare assistant. Personalized guidance through intelligent, user-centered insights.",
  openGraph: {
    title: "SkinWise — Case study",
    description: project?.shortDescription,
    images: project
      ? [{ url: project.heroImage, width: 1600, height: 900 }]
      : undefined,
  },
};

export default function SkinWiseCaseStudyPage() {
  return <SkinWiseCaseStudy />;
}
