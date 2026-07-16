// app/spa-in-gurugram/page.tsx
import type { Metadata } from "next";
import SpaInGurugram from "./SpaInGurugram";

export const metadata: Metadata = {
  title: "Spa in Gurugram | Russian Banya & Luxury Massage Near NH-48 | 24/7",
  description:
    "Searching for a spa in Gurugram? Russian Spa Centre welcomes Gurugram professionals & residents with authentic Russian Banya, Swedish, Deep Tissue & Thai massage. 20-30 min via NH-48. Open 24/7. Call +91 8929979542",
  keywords:
    "spa in gurugram, best spa in gurugram, luxury spa in gurugram, russian spa in gurugram, massage spa in gurugram, body massage in gurugram, full body massage gurugram, massage centre gurugram, wellness spa gurugram, premium spa gurugram, swedish massage gurugram, deep tissue massage gurugram, thai massage gurugram, hot stone massage gurugram, aromatherapy massage gurugram, couples spa gurugram, spa near cyber city, spa near dlf cyber hub, spa near mg road, spa near golf course road, spa near golf course extension road, spa near sohna road, spa near udyog vihar, spa near sector 29, spa near huda city centre, spa near iffco chowk, spa near ambience mall, spa near sikanderpur metro, spa near delhi-gurgaon expressway, spa near nh-48, spa near igi airport, spa near delhi airport, russian banya gurugram, luxury massage gurugram",
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
    title: "Spa in Gurugram | Russian Banya & Luxury Massage | Russian Spa Centre",
    description:
      "Premium Russian Banya & body massage, easily reachable from Gurugram via NH-48 / Delhi-Gurgaon Expressway. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-gurugram",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-gurugram-og.png",
        width: 1200,
        height: 630,
        alt: "Spa in Gurugram - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Gurugram | Russian Banya & Luxury Massage",
    description: "Premium wellness for Gurugram professionals & residents. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/spa-gurugram-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-gurugram/",
  },
};

export default function SpaGurugramPage() {
  return <SpaInGurugram />;
}
