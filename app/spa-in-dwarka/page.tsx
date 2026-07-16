// app/spa-in-dwarka/page.tsx
import type { Metadata } from "next";
import SpaInDwarka from "./SpaInDwarka";

export const metadata: Metadata = {
  title: "Spa in Dwarka | Luxury Russian Spa & Massage Near Dwarka Expressway | Open 24/7",
  description:
    "Looking for a premium spa in Dwarka? Russian Spa Centre is minutes from Dwarka via Dwarka Expressway, NH-48 & Aerocity — offering Russian Banya, full body massage, couples spa & wellness therapies. Open 24/7. Call +91 8929979542",
  keywords:
    "spa in dwarka, best spa in dwarka, luxury spa in dwarka, russian spa in dwarka, massage spa in dwarka, body massage in dwarka, full body massage dwarka, massage centre dwarka, wellness spa dwarka, premium spa dwarka, swedish massage dwarka, deep tissue massage dwarka, thai massage dwarka, hot stone massage dwarka, aromatherapy massage dwarka, couples spa dwarka, spa near dwarka sector 21 metro, spa near dwarka sector 12, spa near dwarka sector 10, spa near dwarka sector 6, spa near dwarka sector 14, spa near dwarka sector 13, spa near dwarka mor, spa near palam, spa near janakpuri, spa near igi airport, spa near delhi airport, russian banya dwarka, luxury massage dwarka",
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
    title: "Best Spa in Dwarka | Russian Spa Centre — Near Dwarka Expressway",
    description:
      "Premium Russian Banya & luxury spa treatments minutes from Dwarka via Dwarka Expressway, NH-48 and Aerocity. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-dwarka",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Dwarka - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Dwarka | Russian Spa Centre",
    description: "Luxury Russian Spa & Body Massage serving Dwarka via Dwarka Expressway & Aerocity. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-dwarka/",
  },
};

export default function SpaDwarkaPage() {
  return <SpaInDwarka />;
}
