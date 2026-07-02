import type { Metadata } from "next";

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
  return (
    <main style={{ padding: "40px" }}>
      <h1>Best Spa in Delhi - Premium Wellness Experience</h1>
      <p>Welcome to Russian Spa Centre, Delhi's premier destination for luxury spa services and wellness treatments. With multiple locations across Delhi NCR including Mahipalpur, Aerocity, Vasant Kunj, and near IGI Airport, we bring the finest spa experience to your doorstep.</p>
      
      <h2>Our Spa Services in Delhi</h2>
      <ul>
        <li><strong>Russian Banya:</strong> Authentic traditional steam therapy</li>
        <li><strong>Body Massage:</strong> Swedish, Deep Tissue, Thai & more</li>
        <li><strong>Aromatherapy:</strong> Relaxation with essential oils</li>
        <li><strong>Couples Spa:</strong> Romantic wellness packages</li>
        <li><strong>Hot Stone Therapy:</strong> Deep muscle relaxation</li>
        <li><strong>Reflexology:</strong> Traditional healing therapy</li>
        <li><strong>Wellness Packages:</strong> Customized spa experiences</li>
      </ul>

      <h2>Why Russian Spa Centre Delhi</h2>
      <ul>
        <li>✓ 24/7 Open - Spa whenever you want</li>
        <li>✓ Multiple Locations Across Delhi NCR</li>
        <li>✓ Certified & Experienced Therapists</li>
        <li>✓ Premium Quality Products</li>
        <li>✓ Luxury & Clean Environment</li>
        <li>✓ Affordable Pricing with Quality Guarantee</li>
        <li>✓ Private & Comfortable Treatment Rooms</li>
      </ul>

      <h2>Our Locations in Delhi</h2>
      <p>Mahipalpur (near IGI Airport), Aerocity, Vasant Kunj, and other premium locations throughout Delhi NCR. All locations feature the same high standards of luxury and service.</p>
      
      <a href="/contact" style={{ background: "var(--gold)", padding: "12px 24px", color: "#000", textDecoration: "none", display: "inline-block", marginTop: "20px", borderRadius: "4px", fontWeight: 600 }}>
        Find Your Nearest Spa
      </a>
    </main>
  );
}
