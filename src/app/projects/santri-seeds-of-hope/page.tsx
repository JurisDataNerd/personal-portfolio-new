import { Metadata } from "next";
import { site } from "@/data/site";
import { ProjectShowcaseView } from "@/components/ProjectShowcaseView";

const project = site.projects.items.find((p) => p.slug === "santri-seeds-of-hope")!;

export const metadata: Metadata = {
  title: `${project.title} — ${site.name}`,
  description: project.description,
};

export default function SantriPage() {
  return <ProjectShowcaseView project={project} />;
}
