import type { Metadata } from "next";

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

export default function LocationsPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Our Premium Spa Locations in Delhi NCR</h1>
      <p>Russian Spa Centre operates multiple premium locations across Delhi NCR, each offering the same world-class spa services 24/7.</p>
      
      <h2>Primary Locations</h2>
      
      <h3>Mahipalpur (Main Centre)</h3>
      <p><strong>Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037</strong></p>
      <p>📍 10 minutes from IGI Airport Terminal 3 | Near JW Marriott Hotel Aerocity | Easy parking</p>
      <p>☎️ +91 8929979542 (Call/WhatsApp available 24/7)</p>
      
      <h3>Aerocity Location</h3>
      <p>Premium location near 5-star hotels and shopping complex. Minutes from IGI Airport.</p>
      
      <h3>Vasant Kunj Location</h3>
      <p>South Delhi location near Ambience Mall and DLF Avenue for convenient access.</p>
      
      <h3>Other Locations</h3>
      <p>Multiple spa centers across Delhi NCR. Call +91 8929979542 for more location details.</p>

      <h2>Services at All Locations</h2>
      <ul>
        <li>✓ Russian Banya (Authentic Steam Therapy)</li>
        <li>✓ Full Body Massage (Multiple Types)</li>
        <li>✓ Couples Spa Packages</li>
        <li>✓ Wellness & Rejuvenation Therapies</li>
        <li>✓ Premium Facilities & Hygiene</li>
        <li>✓ Open 24/7 for your convenience</li>
      </ul>

      <h2>Why Visit Our Locations</h2>
      <ul>
        <li>Strategic locations near IGI Airport & major landmarks</li>
        <li>Consistent premium service standards</li>
        <li>Certified & experienced therapists</li>
        <li>Clean, luxurious spa environment</li>
        <li>Easy parking available</li>
        <li>Open round-the-clock for travelers & professionals</li>
      </ul>

      <h2>How to Reach Us</h2>
      <p><strong>Phone:</strong> +91 8929979542 (24/7) | <strong>WhatsApp:</strong> Available for instant communication</p>
      <p>For nearest location, directions, and current availability, please call or message us anytime.</p>
      
      <a href="/contact" style={{ background: "var(--gold)", padding: "12px 24px", color: "#000", textDecoration: "none", display: "inline-block", marginTop: "20px", borderRadius: "4px", fontWeight: 600 }}>
        Get Directions
      </a>
    </main>
  );
}
