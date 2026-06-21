import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { breadcrumbStructuredData, pageMetadata, siteUrl } from "@/lib/seo";
import { company } from "@/data/company";

const title = "Contact Kodiyattu Builders | Construction Company in Chengannur, Kerala";
const description =
  "Contact Kodiyattu Builders for premium home, villa, interior and commercial construction in Kerala. Based in Chengannur, serving Thiruvalla, Kottayam, Kollam, Pathanamthitta and Alappuzha.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
  keywords: [
    "contact Kodiyattu Builders",
    "construction company contact Kerala",
    "builders Chengannur contact",
  ],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact#webpage`,
      url: `${siteUrl}/contact`,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      mainEntity: { "@id": `${siteUrl}/#business` },
      potentialAction: {
        "@type": "CommunicateAction",
        telephone: company.contact.phones[0].replace(/\s/g, ""),
        email: company.contact.emails[0],
      },
    },
    breadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactContent />
    </>
  );
}
