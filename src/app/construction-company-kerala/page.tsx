import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { pageMetadata } from "@/lib/seo";
import { locationFaqs } from "@/data/aeo";

export const metadata: Metadata = pageMetadata({
  title: "Best Construction Company in Kerala | Kodiyattu Builders",
  description:
    "Kodiyattu Builders is a premium construction company in Kerala for homes, villas, interiors, landscapes and commercial projects across Thiruvalla, Chengannur, Pathanamthitta and Alappuzha.",
  path: "/construction-company-kerala",
  keywords: [
    "best construction company in Kerala",
    "top builders in Kerala",
    "home construction Kerala",
    "villa construction Kerala",
  ],
});

export default function ConstructionCompanyKeralaPage() {
  return (
    <SeoLandingPage
      eyebrow="Construction Company in Kerala"
      title="Premium Construction Company in Kerala"
      area="Kerala"
      path="/construction-company-kerala"
      intro="Kodiyattu Builders delivers premium residential, commercial, interior and landscape projects for clients looking for reliable construction quality across Kerala."
      highlights={[
        "Residential homes, villas and premium renovation work planned for Kerala conditions.",
        "Interior and landscape solutions coordinated with construction for a complete project handover.",
        "Experience across Kerala locations including Thiruvalla, Chengannur, Pathanamthitta and Alappuzha.",
        "Clear project consultation, site coordination and quality-focused execution.",
      ]}
      faqs={locationFaqs.kerala}
    />
  );
}
