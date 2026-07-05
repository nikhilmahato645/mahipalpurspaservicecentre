import type { Metadata } from "next";
import CoupleSpaDelhi from "./CoupleSpaDelhi";

export const metadata: Metadata = {
  title: "Couple Spa in Delhi | Best Couples Massage & Romantic Package | Russian Spa Centre",
  description:
    "Experience the ultimate couple spa package in Delhi at Russian Spa Centre. Romantic couples massage, private spa treatments, jacuzzi, and wellness therapies for two. Perfect for honeymoon, anniversary & romantic getaway. Open 24/7 near IGI Airport. Call +91 8929979542",
  keywords:
    "couple spa delhi, couples massage delhi, romantic couple spa package, best couple spa near me, couple massage aerocity, couple spa mahipalpur, honey moon spa package delhi, anniversary spa couples, romantic massage delhi, couples retreat delhi, jacuzzi couple spa, private spa couples, luxury couple spa, couples wellness package, body2body couples massage, couples massage packages delhi, romantic spa experience delhi, couples spa vasant kunj, couple spa near igi airport",
  openGraph: {
    title: "Best Couple Spa in Delhi | Romantic Couples Massage Package",
    description: "Ultimate romantic couple spa experience in Delhi. Private treatments, couple massage & wellness packages. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/couple-spa-delhi/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/couple-spa-og.png",
        width: 1200,
        height: 630,
        alt: "Best Couple Spa in Delhi - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Couple Spa in Delhi | Romantic Couples Massage",
    description: "Luxury couple spa packages. Perfect for honeymoon, anniversary & romantic getaway.",
    images: ["https://mahipalpurspaservicecentre.com/couple-spa-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/couple-spa-delhi/",
  },
};

export default function CoupleSpaDelhiPage() {
  return <CoupleSpaDelhi />;
}
