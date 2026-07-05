import type { Metadata } from "next";
import RussianBanyaDelhi from "./RussianBanyaDelhi";

export const metadata: Metadata = {
  title: "Russian Banya in Delhi | Authentic Banya Therapy & Steam Spa | Russian Spa Centre",
  description:
    "Experience authentic Russian Banya in Delhi at Russian Spa Centre. Traditional steam therapy, Venik massage & wellness treatments. Cleansing, detox & rejuvenation. Open 24/7 near IGI Airport. Call +91 8929979542",
  keywords:
    "russian banya delhi, authentic russian banya, banya spa delhi, russian steam therapy, venik massage delhi, banya steam spa, russian wellness delhi, banya treatment delhi, russian spa delhi, traditional russian banya, luxury banya delhi, banya near me, banya aerocity, banya mahipalpur, best banya in delhi, banya for detox, russian sauna delhi, banya massage delhi",
  openGraph: {
    title: "Authentic Russian Banya in Delhi | Traditional Steam Therapy | Russian Spa Centre",
    description: "Experience traditional Russian Banya with Venik massage. Detox & rejuvenation therapy. Open 24/7 near IGI Airport.",
    url: "https://mahipalpurspaservicecentre.com/russian-banya-delhi/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/russian-banya-og.png",
        width: 1200,
        height: 630,
        alt: "Authentic Russian Banya in Delhi - Traditional Steam Therapy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authentic Russian Banya in Delhi | Traditional Steam & Wellness Therapy",
    description: "Experience traditional Russian Banya with Venik massage. Detox treatment. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/russian-banya-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/russian-banya-delhi/",
  },
};

export default function RussianBanyaDelhiPage() {
  return <RussianBanyaDelhi />;
}
