// app/spa-in-vasant-kunj/page.tsx
import type { Metadata } from "next";
import SpaInVasantKunj from "./SpaInVasantKunj";

export const metadata: Metadata = {
  title: "Spa in Vasant Kunj | Luxury Massage Centre South Delhi | Russian Spa",
  description:
    "Looking for the best spa in Vasant Kunj? Experience authentic Russian Banya, luxury body massage & wellness therapies in South Delhi. Open 24/7. Certified therapists. Call +91 8929979542",
  keywords:
    "spa in vasant kunj, best spa vasant kunj, spa near ambience mall vasant kunj, body massage vasant kunj, russian spa vasant kunj, luxury spa vasant kunj, massage centre vasant kunj, spa near dlf avenue, russian banya vasant kunj, deep tissue massage vasant kunj, swedish massage vasant kunj, thai spa vasant kunj, aromatherapy vasant kunj, couples spa vasant kunj, hot stone therapy vasant kunj, reflexology vasant kunj, sports massage vasant kunj, 24 hour spa vasant kunj, spa near saket, vasant kunj massage centre, russian spa delhi ncr, body to body massage vasant kunj, full body massage vasant kunj, spa for men vasant kunj, ladies spa vasant kunj, affordable spa vasant kunj, luxury spa south delhi",
  openGraph: {
    title: "Best Spa in Vasant Kunj | Luxury Russian Spa South Delhi",
    description: "Premium Russian Banya & body massage in Vasant Kunj. Close to Ambience Mall & DLF Avenue. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-vasant-kunj",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-vasant-kunj-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Vasant Kunj - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Vasant Kunj | Luxury Massage South Delhi",
    description: "Luxury Russian Spa & Massage in Vasant Kunj. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/spa-vasant-kunj-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-vasant-kunj/",
  },
};

export default function SpaVasantKunjPage() {
  return <SpaInVasantKunj />;
}
