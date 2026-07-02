import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Couple Spa in Delhi | Best Couples Massage & Romantic Package | Russian Spa Centre",
  description:
    "Experience the ultimate couple spa package in Delhi at Russian Spa Centre. Romantic couples massage, private spa treatments, jacuzzi, and wellness therapies for two. Perfect for honeymoon, anniversary & romantic getaway. Open 24/7 near IGI Airport. Call +91 8929979542",
  keywords:
    "couple spa delhi, couples massage delhi, romantic couple spa package, best couple spa near me, couple massage aerocity, couple spa mahipalpur, honey moon spa package delhi, anniversary spa couples, romantic massage delhi, couples retreat delhi, jacuzzi couple spa, private spa couples, luxury couple spa, couples wellness package, body2body couples massage, couples massage packages delhi, romantic spa experience delhi, couples spa vasant kunj, couple spa near igi airport",
  openGraph: {
    title: "Best Couple Spa in Delhi | Romantic Couples Massage Package",
    description: "Ultimate romantic couple spa experience in Delhi. Private treatments, couple massage & wellness packages. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/couple-spa-delhi/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/couple-spa-og.png",
        width: 1200,
        height: 630,
        alt: "Best Couple Spa in Delhi - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Couple Spa in Delhi | Romantic Couples Massage",
    description: "Luxury couple spa packages. Perfect for honeymoon, anniversary & romantic getaway.",
    images: ["https://mahipalpurspaservicecentre.com/couple-spa-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/couple-spa-delhi/",
  },
};

export default function CoupleSpaDelhiPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Couple Spa in Delhi - Romantic Wellness Retreat</h1>
      <p>Experience ultimate relaxation and bonding with your loved one at Russian Spa Centre's exclusive Couple Spa packages in Delhi. Located near IGI Airport in Mahipalpur and Aerocity, we provide the perfect romantic retreat for couples seeking rejuvenation and wellness.</p>
      
      <h2>Our Couple Spa Services</h2>
      <ul>
        <li><strong>Couples Massage Package:</strong> Swedish, Deep Tissue, Thai & Aromatherapy for two</li>
        <li><strong>Romantic Jacuzzi Treatment:</strong> Private hydrotherapy and relaxation</li>
        <li><strong>Couples Wellness Retreat:</strong> Full day spa package with multiple therapies</li>
        <li><strong>Honeymoon Package:</strong> Special romantic spa experience</li>
        <li><strong>Anniversary Special:</strong> Customized couples treatment</li>
        <li><strong>Private Spa Suite:</strong> Intimate setting for exclusive treatments</li>
      </ul>

      <h2>Why Choose Our Couple Spa</h2>
      <ul>
        <li>✓ 24/7 Open - Book anytime</li>
        <li>✓ Multiple Locations in Delhi NCR</li>
        <li>✓ Certified Professional Therapists</li>
        <li>✓ Luxury Private Treatment Rooms</li>
        <li>✓ International Wellness Standards</li>
        <li>✓ Competitive & Transparent Pricing</li>
      </ul>

      <h2>Perfect For</h2>
      <p>Honeymoon couples, anniversaries, romantic getaways, Valentine's Day, special occasions, corporate couple events, and relationship wellness.</p>

      <h2>Location & Booking</h2>
      <p>Visit us in Mahipalpur (near IGI Airport), Aerocity, Vasant Kunj, and other prime Delhi NCR locations. Open 24/7 for your convenience.</p>
      
      <a href="/contact" style={{ background: "var(--gold)", padding: "12px 24px", color: "#000", textDecoration: "none", display: "inline-block", marginTop: "20px", borderRadius: "4px", fontWeight: 600 }}>
        Book Your Couple Spa Now
      </a>
    </main>
  );
}
