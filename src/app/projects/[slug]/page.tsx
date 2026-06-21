import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailContent from "./ProjectDetailContent";
import { projects } from "@/data/company";
import { pageMetadata, projectStructuredData } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project Not Found | Kodiyattu Builders" };
  }

  return pageMetadata({
    title: `${project.name} | ${project.category} Project in ${project.location} | Kodiyattu Builders`,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.images[0],
    imageAlt: `${project.name} — ${project.category} project by Kodiyattu Builders in ${project.location}`,
    keywords: [
      `${project.category.toLowerCase()} construction Kerala`,
      `${project.name} Kodiyattu Builders`,
      `construction project ${project.location}`,
    ],
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectStructuredData(project)),
        }}
      />
      <ProjectDetailContent project={project} />
    </>
  );
}
