import Link from "next/link";
import { company, projects } from "@/data/company";
import { serviceLandingPages } from "@/data/aeo";
import {
  type FaqItem,
  pageStructuredData,
  serviceAreas,
} from "@/lib/seo";

type SeoLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  area: string;
  highlights: readonly string[];
  path: string;
  faqs: readonly FaqItem[];
  bodyTitle?: string;
  bodyCopy?: readonly string[];
  schemaService?: {
    name: string;
    description: string;
    areaServed?: readonly string[];
  };
};

export default function SeoLandingPage({
  eyebrow,
  title,
  intro,
  area,
  highlights,
  path,
  faqs,
  bodyTitle,
  bodyCopy,
  schemaService,
}: SeoLandingPageProps) {
  const pageSchema = pageStructuredData({
    path,
    title,
    description: intro,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: title, path },
    ],
    faqs,
    service: schemaService ?? {
      name: `${title} by ${company.name}`,
      description: intro,
      areaServed: serviceAreas,
    },
  });
  const copy = bodyCopy ?? [
    `${company.name} works with homeowners, families, architects and organizations looking for dependable construction quality in ${area} and nearby Kerala locations. The team handles residential construction, commercial projects, interiors, renovation, landscape work and practical project consultation.`,
    "The company is based around Chengannur and serves nearby markets including Thiruvalla, Pathanamthitta, Alappuzha, Kozhencherry, Eraviperoor, Edathua and Thalavadi. Every project is approached with clear planning, material discipline, site coordination and finishing standards suited to Kerala homes and commercial spaces.",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-deep">
        <div className="container-custom px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="block w-12 h-[2px] bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-cream font-semibold leading-tight">
              {title}
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed mt-6 max-w-3xl">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link href="/contact" className="btn-gold">
                Discuss Your Project
              </Link>
              <Link href="/projects" className="btn-outline">
                View Completed Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0 bg-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl text-cream font-semibold mb-6">
                {bodyTitle ?? `Construction, Interiors and Project Delivery in ${area}`}
              </h2>
              <div className="space-y-5 text-muted leading-relaxed">
                {copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {highlights.map((item) => (
                  <div key={item} className="border border-card-border bg-charcoal/40 p-5">
                    <span className="w-2 h-2 bg-gold rounded-full block mb-4" />
                    <p className="text-cream/90 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="border border-card-border bg-charcoal/40 p-6 h-fit">
              <h2 className="font-display text-2xl text-cream font-semibold mb-4">
                Services
              </h2>
              <ul className="space-y-3">
                {serviceLandingPages.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="text-muted hover:text-gold transition-colors text-sm"
                    >
                      {service.serviceName}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-card-border mt-6 pt-6">
                <p className="text-cream font-semibold">Call Kodiyattu Builders</p>
                {company.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block text-gold mt-2 text-sm"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <div className="border-t border-card-border mt-6 pt-6">
                <p className="text-cream font-semibold mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((place) => (
                    <span
                      key={place}
                      className="text-xs text-muted border border-card-border px-3 py-1"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Project Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-cream font-semibold mt-4">
              Kerala Projects by Kodiyattu Builders
            </h2>
            <p className="text-muted mt-4">
              Explore completed residential and commercial projects that show the
              company&apos;s approach to design-led construction and finishing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block border border-card-border bg-deep/50 p-5 hover:border-gold/50 transition-colors"
              >
                <span className="text-gold text-xs uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl text-cream font-semibold mt-3">
                  {project.name}
                </h3>
                <p className="text-muted text-sm mt-2">{project.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Questions Answered
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-cream font-semibold mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="border border-card-border bg-charcoal/40 p-5"
              >
                <h3 className="font-display text-lg text-cream font-semibold leading-snug">
                  {faq.question}
                </h3>
                <p className="text-muted text-sm leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
