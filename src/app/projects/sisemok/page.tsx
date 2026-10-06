import { Metadata } from "next";
import { site } from "@/data/site";
import { ProjectShowcaseView } from "@/components/ProjectShowcaseView";

const project = site.projects.items.find((p) => p.slug === "sisemok")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
  alternates: {
    canonical: project.href,
  },
  openGraph: {
    title: `${project.title} | ${site.name}`,
    description: project.description,
    url: `${site.url}${project.href}`,
    images: [
      {
        url: project.image,
        width: 1200,
        height: 630,
        alt: project.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${project.title} | ${site.name}`,
    description: project.description,
    images: [project.image],
  },
};

export default function SISEMOKPage() {
  return <ProjectShowcaseView project={project} />;
}
