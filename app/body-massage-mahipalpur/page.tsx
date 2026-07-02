import type { Metadata } from "next";

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
  return (
    <main style={{ padding: "40px" }}>
      <h1>Professional Body Massage in Mahipalpur</h1>
      <p>Experience the ultimate body massage experience at Russian Spa Centre, located in Mahipalpur near IGI Airport. Our certified massage therapists provide world-class full body massage treatments using premium oils and traditional techniques.</p>
      
      <h2>Body Massage Services</h2>
      <ul>
        <li><strong>Swedish Full Body Massage:</strong> Relaxing & therapeutic</li>
        <li><strong>Deep Tissue Massage:</strong> For muscle relief</li>
        <li><strong>Thai Massage:</strong> Traditional & energizing</li>
        <li><strong>Aromatherapy Massage:</strong> With essential oils</li>
        <li><strong>Hot Stone Massage:</strong> For deep relaxation</li>
        <li><strong>Couples Massage:</strong> For two people</li>
      </ul>

      <h2>Why Choose Our Body Massage Service</h2>
      <ul>
        <li>✓ 24/7 Open for your convenience</li>
        <li>✓ Certified Professional Therapists</li>
        <li>✓ Premium Quality Oils & Lotions</li>
        <li>✓ Clean & Hygienic Environment</li>
        <li>✓ Multiple Locations in Delhi NCR</li>
        <li>✓ Affordable & Transparent Pricing</li>
      </ul>

      <h2>Location</h2>
      <p>Located just 10 minutes from IGI Airport in Mahipalpur, we're easily accessible from anywhere in Delhi NCR. Near Aerocity, Defence Enclave, and all major landmarks.</p>
      
      <a href="/contact" style={{ background: "var(--gold)", padding: "12px 24px", color: "#000", textDecoration: "none", display: "inline-block", marginTop: "20px", borderRadius: "4px", fontWeight: 600 }}>
        Book Your Massage Now
      </a>
    </main>
  );
}
