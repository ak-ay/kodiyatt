import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfitFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const interFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kodiyattu Builders | Premium Construction & Interior Solutions in Kerala",
  description:
    "Kodiyattu Builders — Kerala's leading construction company delivering premium homes, interiors & landscapes with 10+ years of excellence. Design, construction, interior & landscape services.",
  keywords: [
    "Kodiyattu Builders",
    "Kerala construction company",
    "premium home builders Kerala",
    "interior design Kerala",
    "Chengannur builders",
    "luxury homes Kerala",
    "residential construction",
    "commercial construction Kerala",
  ],
  openGraph: {
    title: "Kodiyattu Builders | Premium Construction in Kerala",
    description:
      "Building Dreams, Crafting Legacies — Premium construction, interior & landscape solutions with 10+ years of excellence in Kerala.",
    url: "https://kodiyattubuilders.com",
    siteName: "Kodiyattu Builders",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodiyattu Builders | Premium Construction in Kerala",
    description:
      "Building Dreams, Crafting Legacies — Premium construction, interior & landscape solutions in Kerala.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Kodiyattu Builders",
              description:
                "Premium construction company in Kerala offering design, construction, interior and landscape services.",
              url: "https://kodiyattubuilders.com",
              telephone: ["+919495245555", "+919447796385", "+919526450799"],
              email: "contact@kodiyattubuilders.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Puthencavu PO",
                addressLocality: "Chengannur",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              areaServed: "Kerala, India",
              priceRange: "₹₹₹",
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: [
                "https://www.instagram.com/kodiyattu_builders?igsh=ZjM2eXc2NmE2YjBl",
                "https://facebook.com/kodiyattubuilders",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfitFont.variable} ${interFont.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
