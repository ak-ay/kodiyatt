import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { locationFaqs } from "@/data/aeo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builders in Kollam | Kodiyattu Builders Kerala",
  description:
    "Kodiyattu Builders serves Kollam and connected South Kerala locations for premium construction, interiors, renovation, landscape design and consultation.",
  path: "/builders-kollam",
  keywords: [
    "builders in Kollam",
    "construction company in Kollam",
    "home builders Kollam",
    "villa builders Kollam",
  ],
});

export default function BuildersKollamPage() {
  return (
    <SeoLandingPage
      eyebrow="Builders in Kollam"
      title="Premium Builders Serving Kollam"
      area="Kollam"
      path="/builders-kollam"
      intro="Kodiyattu Builders serves Kollam and connected South Kerala locations with premium construction, interior, renovation, landscape and consultation services."
      highlights={[
        "Premium homes, villas and selected commercial construction planning for Kollam clients.",
        "Interior, landscape and renovation services for complete project coordination.",
        "Kerala-specific site, material and finishing guidance.",
        "Construction consultation for clients planning new builds or property upgrades.",
      ]}
      faqs={locationFaqs.kollam}
    />
  );
}
