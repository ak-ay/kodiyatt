import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { locationFaqs } from "@/data/aeo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builders in Kottayam | Kodiyattu Builders Kerala",
  description:
    "Kodiyattu Builders serves Kottayam and nearby Kerala locations for premium homes, villas, interiors, renovation, landscape design and construction consultation.",
  path: "/builders-kottayam",
  keywords: [
    "builders in Kottayam",
    "construction company in Kottayam",
    "home builders Kottayam",
    "villa builders Kottayam",
  ],
});

export default function BuildersKottayamPage() {
  return (
    <SeoLandingPage
      eyebrow="Builders in Kottayam"
      title="Premium Builders Serving Kottayam"
      area="Kottayam"
      path="/builders-kottayam"
      intro="Kodiyattu Builders serves Kottayam and nearby Kerala locations with premium construction, interior, renovation, landscape and consultation services."
      highlights={[
        "Premium home and villa construction support for Kottayam clients.",
        "Interior, renovation and landscape services coordinated with construction.",
        "Kerala-focused project planning for site conditions, materials and finishes.",
        "Consultation for clients planning homes, villas and selected commercial spaces.",
      ]}
      faqs={locationFaqs.kottayam}
    />
  );
}
