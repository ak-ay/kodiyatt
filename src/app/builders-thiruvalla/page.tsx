import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builders in Thiruvalla | Construction Company Near Thiruvalla",
  description:
    "Looking for builders in Thiruvalla? Kodiyattu Builders provides premium home construction, commercial construction, interiors and renovation services around Thiruvalla and nearby Kerala towns.",
  path: "/builders-thiruvalla",
  keywords: [
    "builders in Thiruvalla",
    "construction company in Thiruvalla",
    "home builders Thiruvalla",
    "villa builders Thiruvalla",
  ],
});

export default function BuildersThiruvallaPage() {
  return (
    <SeoLandingPage
      eyebrow="Builders in Thiruvalla"
      title="Premium Builders in Thiruvalla"
      area="Thiruvalla"
      intro="Kodiyattu Builders serves Thiruvalla and nearby areas with premium construction, interior, renovation and landscape project delivery."
      highlights={[
        "Home construction and villa projects for families around Thiruvalla.",
        "Commercial construction support with planning, material discipline and finishing quality.",
        "Interior, renovation and landscape services for complete property improvement.",
        "Local project experience across Thiruvalla, Chengannur, Kozhencherry and Pathanamthitta.",
      ]}
    />
  );
}
