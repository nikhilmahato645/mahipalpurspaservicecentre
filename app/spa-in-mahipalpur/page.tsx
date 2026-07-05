// app/spa-in-mahipalpur/page.tsx
import type { Metadata } from "next";
import SpaInMahipalpur from "./SpaInMahipalpur";

export const metadata: Metadata = {
  title: "Best Spa in Mahipalpur Near IGI Airport | Russian Spa Centre Delhi | 24/7 Open",
  description:
    "Looking for the best spa in Mahipalpur? Experience authentic Russian Banya, luxury body massage & wellness therapies near IGI Airport & Aerocity. Open 24/7. Certified therapists. Call +91 8929979542",
  keywords:
    "spa in mahipalpur, best spa mahipalpur, spa near igi airport, body massage mahipalpur, russian spa mahipalpur, luxury spa mahipalpur, massage centre mahipalpur, spa near aerocity, russian banya mahipalpur, deep tissue massage mahipalpur, swedish massage mahipalpur, thai spa mahipalpur, aromatherapy mahipalpur, couples spa mahipalpur, hot stone therapy mahipalpur, reflexology mahipalpur, sports massage mahipalpur, 24 hour spa mahipalpur, spa near delhi airport, mahipalpur massage centre, russian spa delhi ncr, body to body massage mahipalpur, full body massage mahipalpur, spa for men mahipalpur, ladies spa mahipalpur, affordable spa mahipalpur, luxury spa near aerocity",
  openGraph: {
    title: "Best Spa in Mahipalpur Near IGI Airport | Russian Spa Centre",
    description: "Premium Russian Banya & body massage in Mahipalpur. Just 10 minutes from IGI Airport. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-mahipalpur",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Mahipalpur - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Mahipalpur Near IGI Airport",
    description: "Luxury Russian Spa & Massage in Mahipalpur. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-mahipalpur/",
  },
};

export default function SpaMahipalpurPage() {
  return <SpaInMahipalpur />;
}
