// app/[slug]/page.tsx
// Single dynamic route serving every Gurugram / Dwarka / Noida sector landing page.
// Static (non-sector) routes like /about/, /spa-in-dwarka/, etc. keep taking priority
// since Next.js resolves literal folders before a dynamic segment.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SECTOR_REGISTRY, getSectorEntry } from "../data/sectorRegistry";
import { SECTOR_CONTENT } from "../data/sectorContent";
import SectorPageTemplate from "../components/SectorPageTemplate";

export function generateStaticParams() {
  return SECTOR_REGISTRY.filter((entry) => SECTOR_CONTENT[entry.slug]).map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getSectorEntry(slug);
  const content = SECTOR_CONTENT[slug];
  if (!entry || !content) return {};

  const canonical = `https://mahipalpurspaservicecentre.com/${entry.slug}/`;

  return {
    title: content.seoTitle,
    description: content.metaDescription,
    keywords: content.keywords.join(", "),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url: canonical,
      siteName: "Russian Spa Centre",
      images: [
        {
          url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
          width: 1200,
          height: 630,
          alt: content.seoTitle,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.metaDescription,
      images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
    },
    alternates: {
      canonical,
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getSectorEntry(slug);
  const content = SECTOR_CONTENT[slug];
  if (!entry || !content) notFound();

  return <SectorPageTemplate entry={entry} content={content} />;
}
