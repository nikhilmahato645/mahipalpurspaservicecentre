import type { Metadata } from "next";
import BodyMassageMahipalpur from "./BodyMassageMahipalpur";

export const metadata: Metadata = {
  title: "Body Massage in Mahipalpur | Professional Massage Centre Near IGI Airport | 24/7",
  description:
    "Discover the best body massage in Mahipalpur at Russian Spa Centre. Full body Swedish, Deep Tissue, Thai, Aromatherapy, Hot Stone & Couples Massage. Certified therapists. Just 10 minutes from IGI Airport. Open 24/7. Call +91 8929979542",
  keywords:
    "body massage mahipalpur, best body massage mahipalpur, professional body massage mahipalpur, full body massage mahipalpur, deep tissue massage mahipalpur, swedish massage mahipalpur, thai massage mahipalpur, couples massage mahipalpur, massage centre mahipalpur, aromatherapy massage mahipalpur, hot stone massage mahipalpur, reflexology mahipalpur, sports massage mahipalpur, 24 hour massage mahipalpur, massage near igi airport, body to body massage mahipalpur, luxury massage mahipalpur",
  openGraph: {
    title: "Best Body Massage in Mahipalpur | Professional Massage Centre",
    description: "Premium Full Body Massage in Mahipalpur. Minutes from IGI Airport. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/body-massage-mahipalpur/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/body-massage-og.png",
        width: 1200,
        height: 630,
        alt: "Best Body Massage in Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Body Massage in Mahipalpur Delhi",
    description: "Professional Massage Centre Near IGI Airport. Open 24/7",
    images: ["https://mahipalpurspaservicecentre.com/body-massage-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/body-massage-mahipalpur/",
  },
};

export default function BodyMassageMahipalpurPage() {
  return <BodyMassageMahipalpur />;
}
