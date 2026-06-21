import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { breadcrumbStructuredData, pageMetadata, siteUrl } from "@/lib/seo";

const title = "About Kodiyattu Builders | Trusted Construction Company in Kerala";
const description =
  "Kodiyattu Builders is a Chengannur-based construction company with a decade of experience delivering premium homes, villas, interiors and commercial projects across Kerala.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/about",
  keywords: [
    "about Kodiyattu Builders",
    "construction company Chengannur",
    "trusted builders Kerala",
  ],
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${siteUrl}/about#webpage`,
      url: `${siteUrl}/about`,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
    },
    breadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutContent />
    </>
  );
}
