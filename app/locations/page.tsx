import type { Metadata } from "next";
import LocationsPage from "./LocationsPage";

export const metadata: Metadata = {
  title: "Our Locations | Russian Spa Centre Delhi NCR | Find Nearest Spa",
  description:
    "Find Russian Spa Centre locations across Delhi NCR. Mahipalpur (near IGI Airport), Aerocity, Vasant Kunj, and more. All locations open 24/7 with same premium services. Call +91 8929979542",
  keywords:
    "spa locations delhi, spa near me, russian spa locations, spa in mahipalpur location, spa in aerocity location, spa in vasant kunj location, spa near igi airport, spa near me delhi ncr, russian spa centers delhi, spa branches delhi, spa outlet locations, find spa near me, spa address delhi",
  openGraph: {
    title: "Our Locations | Russian Spa Centre Delhi NCR",
    description: "Multiple premium spa locations across Delhi NCR. All open 24/7 with professional services.",
    url: "https://mahipalpurspaservicecentre.com/locations/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/locations-og.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre Locations - Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Locations | Russian Spa Centre Delhi NCR",
    description: "Visit our premium spa locations across Delhi NCR. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/locations-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/locations/",
  },
};

export default function Locations() {
  return <LocationsPage />;
}
