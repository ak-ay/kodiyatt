import type { MetadataRoute } from "next";
import { bestConstructionCompanyPages, serviceLandingPages } from "@/data/aeo";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://kodiyattubuilders.com";
    const projects = ["hedge", "wedge", "georges-haven", "eclipse", "simhasana-palli"];
    const seoPages = [
        "construction-company-kerala",
        "construction-cost-kerala",
    ];

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
        ...seoPages.map((slug) => ({
            url: `${baseUrl}/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.85,
        })),
        ...bestConstructionCompanyPages.map((page) => ({
            url: `${baseUrl}/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        })),
        ...serviceLandingPages.map((page) => ({
            url: `${baseUrl}/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.82,
        })),
        ...projects.map((slug) => ({
            url: `${baseUrl}/projects/${slug}`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.6,
        })),
    ];
}
