import type { Metadata } from "next";
import SpaInDelhi from "./SpaInDelhi";

export const metadata: Metadata = {
  title: "Best Spa in Delhi | Luxury Russian Banya & Massage Services | 24/7 Open",
  description:
    "Find the best spa in Delhi at Russian Spa Centre. Authentic Russian Banya, body massage, couples packages & wellness therapies. Multiple locations near IGI Airport. Certified therapists. Open 24/7. Call +91 8929979542",
  keywords:
    "spa in delhi, best spa delhi, spa near me, luxury spa delhi, russian spa delhi, body massage delhi, spa services delhi, massage centre delhi, russian banya delhi, deep tissue massage delhi, swedish massage delhi, thai spa delhi, aromatherapy delhi, couples spa delhi, hot stone therapy delhi, reflexology delhi, sports massage delhi, 24 hour spa delhi, wellness spa delhi, ayurveda spa delhi, beauty spa delhi, premium spa delhi, spa near airport delhi",
  openGraph: {
    title: "Best Spa in Delhi | Luxury Russian Banya & Massage Centre",
    description: "Premium spa services in Delhi NCR. Authentic Russian Banya, body massage & wellness. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/spa-in-delhi/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-delhi-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Delhi - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Delhi | Luxury Spa & Massage Services",
    description: "Premium Russian Spa in Delhi. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/spa-delhi-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-delhi/",
  },
};

export default function SpaInDelhiPage() {
  return <SpaInDelhi />;
}
