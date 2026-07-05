// app/spa-in-aerocity/page.tsx
import type { Metadata } from "next";
import SpaInAerocity from "./SpaInAerocity";

export const metadata: Metadata = {
  title: "Spa in Aerocity Delhi | Luxury Russian Spa Near IGI Airport | 24/7 Open",
  description:
    "Experience the best spa in Aerocity at Russian Spa Centre. Authentic Russian Banya, luxury body massage, couples spa & wellness therapies. Just minutes from Aerocity hotels & IGI Airport Terminal 3. Open 24/7. Call +91 8929979542",
  keywords:
    "spa in aerocity, best spa aerocity, luxury spa aerocity, russian spa aerocity, body massage aerocity, spa near igi airport, couples spa aerocity, russian banya aerocity, deep tissue massage aerocity, swedish massage aerocity, thai massage aerocity, aromatherapy aerocity, hot stone therapy aerocity, reflexology aerocity, sports massage aerocity, 24 hour spa aerocity, massage centre aerocity, spa near delhi airport, aerocity spa service, full body massage aerocity, body to body massage aerocity, spa for men aerocity, ladies spa aerocity",
  openGraph: {
    title: "Best Spa in Aerocity Delhi | Russian Spa Centre Near Airport",
    description: "Premium Russian Banya & luxury spa treatments in Aerocity. Minutes from hotels & IGI Airport. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-aerocity",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Aerocity - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Aerocity Delhi Near Airport",
    description: "Luxury Russian Spa & Body Massage in Aerocity. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-aerocity/",
  },
};

export default function SpaAerocityPage() {
  return <SpaInAerocity />;
}
