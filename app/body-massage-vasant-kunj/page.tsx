// app/body-massage-vasant-kunj/page.tsx
import type { Metadata } from "next";
import BodyMassageVasantKunj from "./BodyMassageVasantKunj";

export const metadata: Metadata = {
  title: "Body Massage in Vasant Kunj | Luxury Spa Centre Vasant Kunj Delhi",
  description:
    "Experience the best body massage in Vasant Kunj at Russian Spa Centre. Full body massage, deep tissue, Swedish, Thai, couples massage & more. Just 10-12 mins from IGI Airport & Aerocity. Open 24/7. Call +91 8929979542",
  keywords:
    "body massage vasant kunj, best body massage vasant kunj, spa in vasant kunj, full body massage vasant kunj, deep tissue massage vasant kunj, swedish massage vasant kunj, thai massage vasant kunj, couples massage vasant kunj, massage centre vasant kunj, russian spa vasant kunj, luxury spa vasant kunj, massage near vasant kunj, body to body massage vasant kunj, aromatherapy massage vasant kunj, hot stone massage vasant kunj, reflexology vasant kunj, sports massage vasant kunj, 24 hour massage vasant kunj, spa near vasant kunj delhi, massage in vasant kunj delhi",
  openGraph: {
    title: "Best Body Massage in Vasant Kunj | Russian Spa Centre",
    description: "Premium full body massage & wellness therapies in Vasant Kunj. 10-12 mins from IGI Airport. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/body-massage-vasant-kunj",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png", // You can change image later
        width: 1200,
        height: 630,
        alt: "Best Body Massage in Vasant Kunj - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Body Massage in Vasant Kunj Delhi",
    description: "Luxury Full Body Massage & Spa in Vasant Kunj. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/body-massage-vasant-kunj/",
  },
};

export default function BodyMassageVasantKunjPage() {
  return <BodyMassageVasantKunj />;
}
