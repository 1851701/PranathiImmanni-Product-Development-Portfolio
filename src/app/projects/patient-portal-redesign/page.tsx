import type { Metadata } from "next";
import { PatientPortalCaseStudy } from "@/components/case-studies/patient-portal-case-study";
import { getProjectBySlug } from "@/data/projects";

const project = getProjectBySlug("patient-portal-redesign");

export const metadata: Metadata = {
  title: project?.title ?? "Patient Portal Redesign",
  description:
    project?.shortDescription ??
    "A web patient portal redesign focused on clarity, accessibility, and easier health tasks.",
  openGraph: {
    title: project ? `${project.title} — Case study` : "Patient Portal Redesign",
    description: project?.shortDescription,
    images: project?.heroImage
      ? [{ url: project.heroImage, width: 1600, height: 900 }]
      : undefined,
  },
};

export default function PatientPortalCaseStudyPage() {
  return <PatientPortalCaseStudy />;
}
