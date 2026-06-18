import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPage from "@/components/SeoLandingPage";
import { bestConstructionCompanyPages, serviceLandingPages } from "@/data/aeo";
import { pageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getServicePage(slug: string) {
  const landingPages = [...serviceLandingPages, ...bestConstructionCompanyPages];
  return landingPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return [...serviceLandingPages, ...bestConstructionCompanyPages].map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return {};
  }

  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function ServiceLandingPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <SeoLandingPage
      eyebrow={page.eyebrow}
      title={page.pageTitle}
      area="Kerala"
      path={`/${page.slug}`}
      intro={page.description}
      highlights={page.highlights}
      faqs={page.faqs}
      bodyTitle={`${page.serviceName} by Kodiyattu Builders`}
      bodyCopy={page.bodyCopy}
      schemaService={{
        name: page.serviceName,
        description: page.description,
      }}
    />
  );
}
