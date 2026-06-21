import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    // Consolidate duplicate city landing pages into the richer
    // /best-construction-company-in-* pages to avoid doorway/duplicate content.
    const cities = ["thiruvalla", "chengannur", "kottayam", "kollam"];
    return cities.map((city) => ({
      source: `/builders-${city}`,
      destination: `/best-construction-company-in-${city}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
