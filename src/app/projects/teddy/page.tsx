import type { Metadata } from "next";
import { TeddyCaseStudy } from "@/components/case-studies/teddy-case-study";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("teddy");

export const metadata: Metadata = {
  title: project?.title ?? "Teddy",
  description:
    project?.shortDescription ??
    "Teddy mental wellness mobile UI case study: calm check ins, journaling, and gentle insights.",
  openGraph: {
    title: project ? `${project.title}: case study` : "Teddy",
    description: project?.shortDescription,
    images: project?.heroImage
      ? [{ url: project.heroImage, width: 1600, height: 900 }]
      : undefined,
  },
};

export default function TeddyProjectPage() {
  return <TeddyCaseStudy />;
}
