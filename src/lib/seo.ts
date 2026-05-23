import type { Metadata } from "next";
import { company, projects, services } from "@/data/company";

export const siteUrl = "https://kodiyattubuilders.com";

export const serviceAreas = [
  "Kerala",
  "Thiruvalla",
  "Chengannur",
  "Pathanamthitta",
  "Alappuzha",
  "Kozhencherry",
  "Eraviperoor",
  "Edathua",
  "Thalavadi",
  "Kochi",
  "Kottayam",
] as const;

export const coreKeywords = [
  "best construction company in Kerala",
  "construction company in Kerala",
  "builders in Kerala",
  "builders in Thiruvalla",
  "construction company in Thiruvalla",
  "builders in Chengannur",
  "home builders in Kerala",
  "premium home builders Kerala",
  "residential construction Kerala",
  "commercial construction Kerala",
  "interior design Kerala",
  "landscape design Kerala",
  "luxury home construction Kerala",
] as const;

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...coreKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/projects/hedge/9.jpg`,
          width: 1200,
          height: 630,
          alt: `${company.name} construction project in Kerala`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/projects/hedge/9.jpg`],
    },
  };
}

export function structuredData() {
  const serviceCatalog = services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: serviceAreas.map((area) => ({ "@type": "Place", name: area })),
      provider: {
        "@id": `${siteUrl}/#business`,
      },
    },
  }));

  const projectItems = projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `${siteUrl}/projects/${project.slug}`,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    about: project.category,
    creator: {
      "@id": `${siteUrl}/#business`,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: company.name,
        url: siteUrl,
        inLanguage: "en-IN",
        description:
          "Kodiyattu Builders is a Kerala construction company for premium residential, commercial, interior and landscape projects.",
        publisher: {
          "@id": `${siteUrl}/#business`,
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: company.name,
        url: siteUrl,
        image: `${siteUrl}/assets/logo.png`,
        logo: `${siteUrl}/assets/logo.png`,
        telephone: company.contact.phones.map((phone) => phone.replace(/\s/g, "")),
        email: company.contact.emails[0],
        description:
          "Premium construction company in Kerala offering residential construction, commercial construction, interior design, landscape design, renovation and consultation services.",
        slogan: company.tagline,
        foundingDate: "2014",
        priceRange: "Premium",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Puthencavu PO",
          addressLocality: "Chengannur",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        areaServed: serviceAreas.map((area) => ({ "@type": "Place", name: area })),
        knowsAbout: coreKeywords,
        sameAs: [company.social.instagram, company.social.facebook, company.social.youtube],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Construction and interior services in Kerala",
          itemListElement: serviceCatalog,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Kodiyattu Builders featured construction projects",
        itemListElement: projectItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Which areas in Kerala does Kodiyattu Builders serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kodiyattu Builders works across Kerala, with strong project experience around Thiruvalla, Chengannur, Pathanamthitta, Alappuzha, Kozhencherry, Eraviperoor, Edathua and Thalavadi.",
            },
          },
          {
            "@type": "Question",
            name: "What construction services does Kodiyattu Builders provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kodiyattu Builders provides architectural design, residential construction, commercial construction, interior design, landscape design, renovation and construction consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Is Kodiyattu Builders suitable for premium home construction in Kerala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Kodiyattu Builders focuses on premium homes, interiors and landscape-led residential projects, working with architect partners and experienced craftsmen.",
            },
          },
        ],
      },
    ],
  };
}
