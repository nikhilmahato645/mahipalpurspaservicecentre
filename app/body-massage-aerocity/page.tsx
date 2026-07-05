// app/body-massage-aerocity/page.tsx
import type { Metadata } from "next";
import BodyMassageAerocity from "./BodyMassageAerocity";

export const metadata: Metadata = {
  title: "Body Massage in Aerocity | Luxury Massage Near IGI Airport | 24/7",
  description:
    "Experience the best body massage in Aerocity at Russian Spa Centre. Full body Swedish, Deep Tissue, Thai, Aromatherapy & Couples Massage. Just minutes from Aerocity hotels & IGI Airport. Open 24/7. Call +91 8929979542",
  keywords:
    "body massage aerocity, best body massage aerocity, full body massage aerocity, deep tissue massage aerocity, swedish massage aerocity, thai massage aerocity, couples massage aerocity, massage centre aerocity, aromatherapy massage aerocity, hot stone massage aerocity, reflexology aerocity, sports massage aerocity, 24 hour massage aerocity, massage near igi airport, body to body massage aerocity, luxury massage aerocity",
  openGraph: {
    title: "Best Body Massage in Aerocity | Russian Spa Centre",
    description: "Premium Full Body Massage in Aerocity. Minutes from hotels & Airport. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/body-massage-aerocity",
    siteName: "Russian Spa Centre",
    images: [{ url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png", width: 1200, height: 630, alt: "Best Body Massage in Aerocity" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Body Massage in Aerocity Delhi",
    description: "Luxury Massage Centre Near Aerocity Hotels & Airport. Open 24/7",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/body-massage-aerocity/",
  },
};

export default function BodyMassageAerocityPage() {
  return <BodyMassageAerocity />;
}
