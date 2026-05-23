import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builders in Chengannur | Kodiyattu Builders Kerala",
  description:
    "Kodiyattu Builders is a Chengannur-based construction company for premium homes, interiors, renovation, landscape and commercial construction across Kerala.",
  path: "/builders-chengannur",
  keywords: [
    "builders in Chengannur",
    "construction company Chengannur",
    "home builders Chengannur",
    "interior design Chengannur",
  ],
});

export default function BuildersChengannurPage() {
  return (
    <SeoLandingPage
      eyebrow="Builders in Chengannur"
      title="Chengannur-Based Builders for Premium Kerala Projects"
      area="Chengannur"
      intro="Kodiyattu Builders is based around Chengannur and works across Kerala on premium homes, commercial spaces, interiors, landscape and renovation projects."
      highlights={[
        "Local Chengannur presence with project reach across nearby Kerala towns.",
        "Residential construction, interiors and landscape work under one coordinated process.",
        "Architect-partnered project execution for design-led homes and signature builds.",
        "Consultation and renovation services for clients improving existing properties.",
      ]}
    />
  );
}
