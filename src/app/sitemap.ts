import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://kodiyattubuilders.com";
    const projects = ["hedge", "wedge", "georges-haven", "eclipse", "simhasana-palli"];

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
        { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
        ...projects.map((slug) => ({
            url: `${baseUrl}/projects/${slug}`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.6,
        })),
    ];
}
