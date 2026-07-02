import type { Metadata } from "next";

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
  return (
    <main style={{ padding: "40px" }}>
      <h1>Authentic Russian Banya in Delhi</h1>
      <p>Discover the ancient art of Russian Banya at Russian Spa Centre in Delhi. Our authentic Russian Banya offers traditional steam therapy combined with Venik massage, providing complete body detoxification, rejuvenation, and wellness benefits.</p>
      
      <h2>What is Russian Banya?</h2>
      <p>Russian Banya is a traditional Russian steam bath experience that dates back centuries. It combines hot steam therapy with cold water plunges and Venik (birch branches) massage to cleanse, detoxify, and revitalize the body. This holistic wellness therapy promotes circulation, relaxation, and overall health.</p>

      <h2>Our Russian Banya Services</h2>
      <ul>
        <li><strong>Traditional Russian Steam Bath:</strong> Hot steam therapy</li>
        <li><strong>Venik Massage:</strong> Birch branch therapeutic massage</li>
        <li><strong>Cold Water Therapy:</strong> Circulation enhancement</li>
        <li><strong>Full Banya Experience:</strong> Complete ritual treatment</li>
        <li><strong>Post-Banya Massage:</strong> Relaxation therapy</li>
        <li><strong>Couples Banya Package:</strong> Shared experience</li>
      </ul>

      <h2>Benefits of Russian Banya</h2>
      <ul>
        <li>✓ Deep body detoxification</li>
        <li>✓ Improved blood circulation</li>
        <li>✓ Stress relief & relaxation</li>
        <li>✓ Skin rejuvenation</li>
        <li>✓ Muscle tension relief</li>
        <li>✓ Immune system boost</li>
        <li>✓ Complete wellness experience</li>
      </ul>

      <h2>Our Banya Facilities</h2>
      <ul>
        <li>✓ Authentic Russian Banya Chamber</li>
        <li>✓ Cold Water Immersion Pool</li>
        <li>✓ Private Treatment Rooms</li>
        <li>✓ Certified Banya Therapists</li>
        <li>✓ Premium birch branches (Venik)</li>
        <li>✓ Luxury changing facilities</li>
      </ul>

      <h2>Location & Hours</h2>
      <p>Visit us in Mahipalpur near IGI Airport, Aerocity, or other prime Delhi NCR locations. Open 24/7 for your convenience.</p>
      
      <a href="/contact" style={{ background: "var(--gold)", padding: "12px 24px", color: "#000", textDecoration: "none", display: "inline-block", marginTop: "20px", borderRadius: "4px", fontWeight: 600 }}>
        Book Your Banya Experience
      </a>
    </main>
  );
}
