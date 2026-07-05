// app/russian-spa-aerocity/page.tsx
import type { Metadata } from "next";
import RussianSpaAerocity from "./RussianSpaAerocity";

export const metadata: Metadata = {
  title: "Russian Spa in Aerocity Delhi | Authentic Russian Banya Near IGI Airport | 24/7",
  description:
    "Experience authentic Russian Spa & Banya in Aerocity at Russian Spa Centre. Traditional Venik treatment, luxury body massage & wellness therapies. Just minutes from Aerocity hotels and IGI Airport. Open 24/7. Call +91 8929979542",
  keywords:
    "russian spa aerocity, russian banya aerocity, best russian spa aerocity, authentic russian banya delhi, russian spa near igi airport, russian massage aerocity, venik massage aerocity, luxury russian spa aerocity, body massage aerocity, couples russian spa aerocity, 24 hour russian spa aerocity, russian spa near aerocity hotels, banya near delhi airport",
  openGraph: {
    title: "Best Russian Spa in Aerocity | Authentic Russian Banya",
    description: "Traditional Russian Banya & Venik Treatment in Aerocity. Minutes from hotels & IGI Airport. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/russian-spa-aerocity",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Authentic Russian Spa in Aerocity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Russian Spa & Banya in Aerocity Delhi",
    description: "Authentic Russian Wellness Experience Near Aerocity Hotels & Airport. Open 24/7",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/russian-spa-aerocity/",
  },
};

export default function RussianSpaAerocityPage() {
  return <RussianSpaAerocity />;
}
