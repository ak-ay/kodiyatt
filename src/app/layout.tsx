import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { pageMetadata, structuredData, siteUrl } from "@/lib/seo";

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title:
      "Kodiyattu Builders | Best Construction Company in Kerala, Thiruvalla & Chengannur",
    description:
      "Kodiyattu Builders is a premium construction company in Kerala for homes, villas, interiors, landscapes and commercial projects across Thiruvalla, Chengannur, Pathanamthitta and Alappuzha.",
  }),
  applicationName: "Kodiyattu Builders",
  authors: [{ name: "Kodiyattu Builders" }],
  creator: "Kodiyattu Builders",
  publisher: "Kodiyattu Builders",
  category: "Construction Company",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
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
            __html: JSON.stringify(structuredData()),
          }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
