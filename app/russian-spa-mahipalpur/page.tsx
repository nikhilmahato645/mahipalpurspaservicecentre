// app/spa-in-mahipalpur/page.tsx
import type { Metadata } from "next";
import RussianSpaMahipalpur from "./RussianSpaMahipalpur";

export const metadata: Metadata = {
  title: "Russian Spa in Mahipalpur | Authentic Russian Banya Centre Delhi | 24/7 Open",
  description:
    "Experience the finest Russian Spa in Mahipalpur. Authentic Russian Banya with Venik massage, luxury body massage & wellness therapies near IGI Airport & Aerocity. Open 24/7. Certified therapists. Call +91 8929979542",
  keywords:
    "russian spa in mahipalpur, best russian spa mahipalpur, authentic russian banya mahipalpur, russian spa near igi airport, russian body massage mahipalpur, russian spa mahipalpur, luxury russian spa mahipalpur, russian banya mahipalpur, venik massage mahipalpur, spa in mahipalpur, best spa mahipalpur, spa near igi airport, body massage mahipalpur, spa near aerocity, deep tissue massage mahipalpur, swedish massage mahipalpur, thai spa mahipalpur, couples spa mahipalpur, 24 hour spa mahipalpur, spa near delhi airport, mahipalpur massage centre, body to body massage mahipalpur, full body massage mahipalpur, affordable spa mahipalpur",
  openGraph: {
    title: "Best Russian Spa in Mahipalpur Near IGI Airport | Authentic Russian Banya Centre",
    description: "Experience authentic Russian Banya & luxury body massage in Mahipalpur. Just 10 minutes from IGI Airport. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-mahipalpur",
    siteName: "Russian Spa Centre Mahipalpur",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/russian-spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Best Russian Spa in Mahipalpur - Authentic Russian Banya Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Russian Spa in Mahipalpur Near IGI Airport",
    description: "Authentic Russian Banya & Luxury Massage in Mahipalpur. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/russian-spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-mahipalpur",
  },
};

export default function SpaMahipalpurPage() {
  return <RussianSpaMahipalpur />;
}
