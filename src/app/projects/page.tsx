import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";
import { breadcrumbStructuredData, pageMetadata, siteUrl } from "@/lib/seo";
import { projects } from "@/data/company";

const title = "Our Projects | Premium Homes & Commercial Builds in Kerala";
const description =
  "Explore completed construction projects by Kodiyattu Builders across Kerala — premium residential villas like HEDGE, WEDGE and ECLIPSE plus commercial work in Chengannur, Thiruvalla and Pathanamthitta.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/projects",
  keywords: [
    "construction projects Kerala",
    "villa projects Kerala",
    "Kodiyattu Builders portfolio",
  ],
});

const projectsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/projects#webpage`,
      url: `${siteUrl}/projects`,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
    },
    breadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/projects#list`,
      name: "Kodiyattu Builders projects",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/projects/${project.slug}`,
        name: project.name,
      })),
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <ProjectsContent />
    </>
  );
}
