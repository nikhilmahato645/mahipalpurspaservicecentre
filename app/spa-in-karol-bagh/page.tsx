// app/spa-in-karol-bagh/page.tsx
import type { Metadata } from "next";
import SpaInKarolBagh from "./SpaInKarolBagh";

export const metadata: Metadata = {
  title: "Spa in Karol Bagh | Luxury Russian Spa Near Ajmal Khan Road | Open 24/7",
  description:
    "Looking for a premium spa in Karol Bagh? Russian Spa Centre is minutes from Karol Bagh via NH-48, Dhaula Kuan & Aerocity — offering Russian Banya, full body massage, couples spa & wellness therapies. Open 24/7. Call +91 8929979542",
  keywords:
    "spa in karol bagh, best spa in karol bagh, luxury spa in karol bagh, russian spa in karol bagh, massage spa in karol bagh, body massage in karol bagh, full body massage karol bagh, massage centre karol bagh, wellness spa karol bagh, premium spa karol bagh, swedish massage karol bagh, deep tissue massage karol bagh, thai massage karol bagh, hot stone massage karol bagh, aromatherapy massage karol bagh, couples spa karol bagh, spa near karol bagh metro, spa near ajmal khan road, spa near ghaffar market, spa near pusa road, spa near rajendra place, spa near jhandewalan, spa near patel nagar, spa near connaught place, spa near new delhi railway station, spa near aerocity, spa near igi airport, spa near delhi airport, russian banya karol bagh, luxury massage karol bagh",
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
    title: "Best Spa in Karol Bagh | Russian Spa Centre — Near NH-48 & Aerocity",
    description:
      "Premium Russian Banya & luxury spa treatments minutes from Karol Bagh via NH-48, Dhaula Kuan and Aerocity. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-karol-bagh",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Karol Bagh - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Karol Bagh | Russian Spa Centre",
    description: "Luxury Russian Spa & Body Massage serving Karol Bagh via NH-48 & Aerocity. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-karol-bagh/",
  },
};

export default function SpaKarolBaghPage() {
  return <SpaInKarolBagh />;
}
