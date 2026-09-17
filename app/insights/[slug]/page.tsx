import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_INSIGHTS } from "@/lib/insights-data";
import { SITE_URL } from "@/lib/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ALL_INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Yebis Engineering",
    };
  }

  return {
    title: `${article.title} | Yebis Engineering Insights`,
    description: article.abstract,
    alternates: {
      canonical: `${SITE_URL}/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.abstract,
      url: `${SITE_URL}/insights/${article.slug}`,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ALL_INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const currentIndex = ALL_INSIGHTS.findIndex((a) => a.slug === slug);
  const nextArticle = ALL_INSIGHTS[(currentIndex + 1) % ALL_INSIGHTS.length];
  const prevArticle =
    ALL_INSIGHTS[(currentIndex - 1 + ALL_INSIGHTS.length) % ALL_INSIGHTS.length];

  return (
    <div className="flex flex-col pt-2 w-full bg-surface">
      {/* Top Telemetry & Navigation Bar */}
      <section className="w-full bg-surface-container-low border-b border-outline-variant/30 px-6 lg:px-12 py-space-sm">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 font-label-sm text-label-sm text-secondary">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors uppercase font-bold"
          >
            <span>←</span>
            <span>Return to Field Archive</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary"></span>
            <span className="uppercase">{article.dispatch}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="w-full max-w-4xl mx-auto px-6 lg:px-8 pt-10 pb-16 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-2.5 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              {article.tag}
            </span>
            <span className="text-secondary font-label-sm text-label-sm uppercase">
              {article.category}
            </span>
          </div>

          <h1 className="font-headline-xl text-[32px] leading-[40px] lg:text-[42px] lg:leading-[50px] font-bold text-on-surface uppercase tracking-tight">
            {article.title}
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-inverse-surface text-primary flex items-center justify-center font-bold font-mono text-sm border border-outline-variant/50">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-on-surface uppercase">
                  {article.author.name}
                </span>
                <span className="text-secondary text-[11px]">
                  {article.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-secondary">
              <span>{article.readTime}</span>
              <span>•</span>
              <span className="text-primary font-semibold">{article.date}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] bg-surface-container overflow-hidden border border-outline-variant/40 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute bottom-0 inset-x-0 bg-inverse-surface/90 text-white px-4 py-2 text-label-sm font-label-sm flex items-center justify-between">
            <span>FIELD SPECIFICATION // ADDIS ABABA HQ</span>
            <span className="text-primary font-medium">ETHIOPIAN STANDARDS</span>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        {article.specs && article.specs.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-low p-4 border border-outline-variant/40">
            {article.specs.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary uppercase">
                  {spec.label}
                </span>
                <span className="font-label-md text-label-md text-on-surface font-bold">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Article Body Content */}
        <div className="flex flex-col gap-8 pt-4">
          {article.content.map((sec, idx) => (
            <section key={idx} className="flex flex-col gap-4">
              <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold tracking-tight">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {sec.callout && (
                <div className="my-2 p-4 bg-surface-container-low border-l-4 border-primary text-on-surface flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                    info
                  </span>
                  <p className="font-body-sm text-body-sm font-medium italic text-on-surface">
                    {sec.callout}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Author / Engineering Board Seal */}
        <div className="mt-8 p-6 bg-surface-container-low border border-outline-variant/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              [ TECHNICAL FIELD ADVISORY // VERIFIED ]
            </span>
            <span className="font-headline-sm text-[18px] text-on-surface font-bold uppercase">
              Authored by Yebis Engineering Technical Board
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
              Published as part of our commitment to transparent construction standards,
              rigorous multi-trade sequencing, and client protection across Ethiopia.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest px-4 py-2 text-on-surface font-label-sm text-label-sm uppercase font-bold border border-outline-variant/50 transition-colors shrink-0"
          >
            <span>About Our Team</span>
            <span>→</span>
          </Link>
        </div>

        {/* Direct Project Consultation Action */}
        <div className="bg-inverse-surface text-white p-8 border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-headline-sm text-headline-sm uppercase font-bold text-white">
              Have a similar project or structural challenge?
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-highest max-w-lg">
              Consult directly with our engineering principals. We evaluate architectural
              drawings, BOQs, and site conditions within 48 operational hours.
            </p>
          </div>
          <Link
            href="/start-a-project"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary font-label-lg text-label-lg uppercase px-6 py-3 shrink-0 transition-colors"
          >
            <span>Consult With Us</span>
            <span>→</span>
          </Link>
        </div>

        {/* Next / Previous Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-outline-variant/30">
          <Link
            href={`/insights/${prevArticle.slug}`}
            className="group p-4 bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col gap-1"
          >
            <span className="font-label-sm text-label-sm text-secondary uppercase group-hover:text-primary">
              ← Previous Article
            </span>
            <span className="font-label-md text-label-md text-on-surface font-bold uppercase line-clamp-1">
              {prevArticle.title}
            </span>
          </Link>
          <Link
            href={`/insights/${nextArticle.slug}`}
            className="group p-4 bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col items-end text-right gap-1"
          >
            <span className="font-label-sm text-label-sm text-secondary uppercase group-hover:text-primary">
              Next Article →
            </span>
            <span className="font-label-md text-label-md text-on-surface font-bold uppercase line-clamp-1">
              {nextArticle.title}
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
