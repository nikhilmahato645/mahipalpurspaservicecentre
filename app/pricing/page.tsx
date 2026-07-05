import type { Metadata } from "next";
import Pricing from "./Pricing";

export const metadata: Metadata = {
  title: "Spa Prices & Packages | Best Massage Rates in Mahipalpur | Russian Spa Centre 2026",
  description:
    "Affordable luxury spa rates in Delhi NCR. Russian Banya ₹2,500, Swedish Massage ₹2,000, Deep Tissue ₹3,500, Couples Package ₹6,000. Best price guarantee. 15% off first visit. Transparent pricing with zero hidden charges. Open 24/7 near IGI Airport. Call +91 8929979542",
  keywords:
    "spa price list, massage rates Delhi, affordable spa near me, Russian banya cost, body massage charges, cheap massage Mahipalpur, luxury spa prices, couples massage rate, deep tissue price, Swedish massage cost, aromatherapy rates, Thai massage charges, hot stone therapy price, reflexology cost, sports massage rate, spa packages Delhi, wellness treatment prices, best value spa, budget friendly massage, premium spa rates, Russian Spa Centre pricing, massage deals Aerocity, spa offers Mahipalpur, 24 hours spa cost, body to body massage price, full body massage charges, spa near airport rates",
  openGraph: {
    title: "Spa Prices & Packages | Best Massage Rates Mahipalpur | Russian Spa Centre",
    description: "Transparent pricing for all spa services. Russian Banya from ₹2,500, Full Body Massage from ₹2,000. 15% off first visit. No hidden charges.",
    url: "https://mahipalpurspaservicecentre.com/pricing",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/pricing-og.png",
        width: 1200,
        height: 630,
        alt: "Spa Prices and Packages Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Prices & Best Massage Rates | Russian Spa Centre",
    description: "Affordable luxury spa rates. Best price guarantee. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/pricing-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/pricing/",
  },
};

export default function PricingPage() {
  return <Pricing />;
}