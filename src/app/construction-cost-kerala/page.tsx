import type { Metadata } from "next";
import Link from "next/link";
import {
  breadcrumbStructuredData,
  faqStructuredData,
  pageMetadata,
  siteUrl,
} from "@/lib/seo";
import { company } from "@/data/company";

const path = "/construction-cost-kerala";
const title = "House Construction Cost in Kerala (2026) | Per Sq Ft Guide";
const description =
  "A clear 2026 guide to house construction cost in Kerala — budget, standard and premium rates per sq ft, what's included, example totals for 1000–2000 sq ft homes, and how to plan an affordable yet quality build with Kodiyattu Builders.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  keywords: [
    "construction cost in Kerala",
    "house construction cost Kerala per sq ft",
    "construction cost per square feet Kerala 2026",
    "low cost house construction Kerala",
    "budget house construction cost Kerala",
    "1500 sq ft house cost Kerala",
    "cost to build a house in Kerala",
  ],
});

const costTiers = [
  {
    tier: "Budget / Value",
    rate: "₹1,800 – ₹2,200",
    notes:
      "Quality local materials, standard structural concrete and clean, functional finishes. Best for cost-conscious homes that still need durability.",
  },
  {
    tier: "Standard / Mid-range",
    rate: "₹2,200 – ₹2,800",
    notes:
      "Branded materials, better fittings, improved joinery and refined finishes. The most common choice for Kerala family homes.",
  },
  {
    tier: "Premium / Luxury",
    rate: "₹2,800 – ₹3,500+",
    notes:
      "Architectural engineering, custom design, imported or designer finishes, smart fittings and integrated landscape.",
  },
];

const exampleTotals = [
  { size: "1,000 sq ft", budget: "₹18 – 22 L", standard: "₹22 – 28 L", premium: "₹28 – 35 L+" },
  { size: "1,500 sq ft", budget: "₹27 – 33 L", standard: "₹33 – 42 L", premium: "₹42 – 53 L+" },
  { size: "2,000 sq ft", budget: "₹36 – 44 L", standard: "₹44 – 56 L", premium: "₹56 – 70 L+" },
];

const costComponents = [
  { label: "Materials (cement, steel, sand, blocks, tiles, paint)", share: "60 – 70%" },
  { label: "Of which cement + steel alone", share: "30 – 40%" },
  { label: "Labour (skilled + unskilled)", share: "30 – 50%" },
  { label: "Finishing, fittings & fixtures", share: "varies by tier" },
];

const faqs = [
  {
    question: "What is the house construction cost per sq ft in Kerala in 2026?",
    answer:
      "In 2026, house construction in Kerala typically costs ₹1,800–₹2,200 per sq ft for budget builds, ₹2,200–₹2,800 per sq ft for standard quality, and ₹2,800–₹3,500+ per sq ft for premium or luxury homes. The exact rate depends on design, site conditions, materials and finishes.",
  },
  {
    question: "How much does it cost to build a 1500 sq ft house in Kerala?",
    answer:
      "A 1,500 sq ft house in Kerala usually costs about ₹33–42 lakh at standard quality, ₹27–33 lakh on a budget specification, and ₹42 lakh or more for a premium finish. This covers the building only — plot, approvals and interiors are extra.",
  },
  {
    question: "What is the low-cost or budget house construction rate in Kerala?",
    answer:
      "Low-cost or budget house construction in Kerala generally starts around ₹1,800–₹2,200 per sq ft. Kodiyattu Builders plans budget-friendly homes with value-engineered structure and quality local materials so you save money without compromising durability.",
  },
  {
    question: "Does the per-sq-ft rate include everything?",
    answer:
      "No. The per-sq-ft rate usually covers about 60–70% of the real spend. It excludes the plot, government approvals and permits, electricity/water connections, compound wall, and full interior fit-out, which are estimated separately.",
  },
  {
    question: "Does Kodiyattu Builders offer affordable construction in Kerala?",
    answer:
      "Yes. Kodiyattu Builders works across budget, standard and premium tiers with transparent costing, so clients in Chengannur, Thiruvalla, Kottayam, Kollam, Pathanamthitta and across Kerala can build quality homes within their budget.",
  },
];

const costSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${siteUrl}${path}#article`,
      headline: "House Construction Cost in Kerala (2026): Per Sq Ft Guide",
      description,
      datePublished: "2026-06-01",
      dateModified: new Date().toISOString().slice(0, 10),
      inLanguage: "en-IN",
      image: `${siteUrl}/projects/hedge/9.jpg`,
      author: { "@id": `${siteUrl}/#business` },
      publisher: { "@id": `${siteUrl}/#business` },
      mainEntityOfPage: `${siteUrl}${path}`,
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    breadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Construction Cost in Kerala", path },
    ]),
    faqStructuredData({ path, faqs }),
  ],
};

export default function ConstructionCostKeralaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(costSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-deep">
        <div className="container-custom px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-12 h-[2px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                Cost Guide · 2026
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-cream font-semibold leading-tight">
              House Construction Cost in Kerala (2026)
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
              A straightforward look at what it costs to build a house in Kerala
              in 2026 — per-sq-ft rates for budget, standard and premium builds,
              what those numbers include, and how Kodiyattu Builders helps you
              get quality construction within your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Per sq ft tiers */}
      <section className="section-padding !pt-0 bg-deep">
        <div className="container-custom">
          <h2 className="font-display text-2xl md:text-3xl text-cream font-semibold mb-6">
            Construction cost per sq ft in Kerala
          </h2>
          <div className="overflow-x-auto border border-card-border">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-charcoal">
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">Build tier</th>
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">Cost / sq ft</th>
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">What you get</th>
                </tr>
              </thead>
              <tbody>
                {costTiers.map((row) => (
                  <tr key={row.tier} className="border-t border-card-border align-top">
                    <td className="p-4 text-cream font-medium whitespace-nowrap">{row.tier}</td>
                    <td className="p-4 text-cream font-display text-lg whitespace-nowrap">{row.rate}</td>
                    <td className="p-4 text-muted text-sm leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted text-xs mt-3">
            Indicative 2026 market ranges for Kerala. Your final rate depends on
            design, site conditions, material choices and finishes — ask us for a
            project-specific estimate.
          </p>
        </div>
      </section>

      {/* Example totals */}
      <section className="section-padding !pt-0 bg-deep">
        <div className="container-custom">
          <h2 className="font-display text-2xl md:text-3xl text-cream font-semibold mb-6">
            Example build cost by home size
          </h2>
          <div className="overflow-x-auto border border-card-border">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-charcoal">
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">Built-up area</th>
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">Budget</th>
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">Standard</th>
                  <th className="p-4 text-gold text-sm uppercase tracking-wider font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {exampleTotals.map((row) => (
                  <tr key={row.size} className="border-t border-card-border">
                    <td className="p-4 text-cream font-medium whitespace-nowrap">{row.size}</td>
                    <td className="p-4 text-muted whitespace-nowrap">{row.budget}</td>
                    <td className="p-4 text-cream whitespace-nowrap">{row.standard}</td>
                    <td className="p-4 text-muted whitespace-nowrap">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted text-xs mt-3">
            Building cost only (structure + finishing). Excludes plot, approvals,
            connections, compound wall and full interior fit-out.
          </p>
        </div>
      </section>

      {/* Cost components + caveat */}
      <section className="section-padding !pt-0 bg-deep">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-cream font-semibold mb-6">
              Where the money goes
            </h2>
            <ul className="space-y-3">
              {costComponents.map((c) => (
                <li key={c.label} className="flex justify-between gap-4 border-b border-card-border pb-3">
                  <span className="text-muted text-sm">{c.label}</span>
                  <span className="text-cream text-sm font-medium whitespace-nowrap">{c.share}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-card-border bg-charcoal/40 p-6 h-fit">
            <h2 className="font-display text-xl text-cream font-semibold mb-4">
              What the per-sq-ft rate leaves out
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-4">
              The headline rate typically covers only ~65% of your real spend.
              Plan separately for:
            </p>
            <ul className="space-y-2 text-muted text-sm list-disc pl-5">
              <li>Plot / land and registration</li>
              <li>Government approvals and permits</li>
              <li>Electricity and water connections</li>
              <li>Compound wall, gate and site development</li>
              <li>Full interior fit-out and furnishing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Affordable positioning */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-cream font-semibold mb-6">
            Building affordably without cutting corners
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              A lower budget does not have to mean lower quality. The biggest
              savings in Kerala home construction come from smart planning —
              efficient structural design, the right material grade for each part
              of the house, reduced wastage, and avoiding mid-project changes.
            </p>
            <p>
              Kodiyattu Builders works across budget, standard and premium tiers
              with transparent costing. We help you choose where to spend and
              where to save, so you get a durable, well-finished home that fits
              your budget — whether you are building in Chengannur, Thiruvalla,
              Kottayam, Kollam, Pathanamthitta or anywhere in Kerala.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link href="/contact" className="btn-gold">Get a Free Cost Estimate</Link>
            <Link href="/affordable-home-construction-kerala" className="btn-outline">
              Affordable Construction
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-deep">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Questions Answered
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-cream font-semibold mt-4">
              Kerala construction cost FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="border border-card-border bg-charcoal/40 p-5">
                <h3 className="font-display text-lg text-cream font-semibold leading-snug">
                  {faq.question}
                </h3>
                <p className="text-muted text-sm leading-relaxed mt-4">{faq.answer}</p>
              </article>
            ))}
          </div>
          <p className="text-muted text-sm mt-8">
            Want an exact figure for your plot and plan? Call{" "}
            <a href={`tel:${company.contact.phones[0].replace(/\s/g, "")}`} className="text-gold">
              {company.contact.phones[0]}
            </a>{" "}
            for a free, project-specific estimate.
          </p>
        </div>
      </section>
    </>
  );
}
