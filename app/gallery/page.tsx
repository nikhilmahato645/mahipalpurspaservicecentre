import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Gallery | Russian Spa Centre Mahipalpur | Interior & Service Photos",
  description:
    "View our spa gallery showcasing luxury facilities, treatment rooms, Russian Banya chambers, and wellness amenities. Beautiful interior design & professional spa environment at Russian Spa Centre Mahipalpur. Open 24/7 near IGI Airport.",
  keywords:
    "spa gallery, spa photos, spa interior, treatment rooms, russian banya chamber, spa facilities, spa decor, wellness center, luxury spa design, spa amenities, professional spa environment, russian spa mahipalpur photos, spa in aerocity photos",
  openGraph: {
    title: "Spa Gallery | Russian Spa Centre Mahipalpur",
    description: "View our luxury spa facilities, treatment rooms, and wellness amenities. Professional environment for complete relaxation.",
    url: "https://mahipalpurspaservicecentre.com/gallery/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/gallery-og.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre Gallery - Luxury Spa Facilities",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Gallery | Russian Spa Centre",
    description: "View our beautiful spa facilities and treatment rooms.",
    images: ["https://mahipalpurspaservicecentre.com/gallery-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/gallery/",
  },
};

export default function GalleryPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Spa Gallery - Russian Spa Centre</h1>
      <p>Explore our beautiful spa facilities and professional environment designed for ultimate relaxation and wellness.</p>
      
      <h2>Our Facilities</h2>
      <ul>
        <li><strong>Luxury Treatment Rooms:</strong> Private & comfortable spaces for all therapies</li>
        <li><strong>Russian Banya Chamber:</strong> Authentic steam bath facility</li>
        <li><strong>Reception Area:</strong> Welcoming & luxurious entrance</li>
        <li><strong>Changing Facilities:</strong> Complete amenities for guests</li>
        <li><strong>Relaxation Lounge:</strong> Post-treatment comfort area</li>
        <li><strong>Hygienic Standards:</strong> Premium cleanliness & maintenance</li>
      </ul>

      <h2>Professional Spa Environment</h2>
      <p>Our spa is designed with premium aesthetics, creating a serene atmosphere for complete relaxation. Every detail from lighting to aromatherapy is carefully curated for your wellness journey.</p>

      <h2>Gallery Categories</h2>
      <ul>
        <li>Treatment Room Tours</li>
        <li>Russian Banya Facilities</li>
        <li>Spa Interior Design</li>
        <li>Hydrotherapy Areas</li>
        <li>Reception & Lounge</li>
      </ul>
      
      <a href="/contact" style={{ background: "var(--gold)", padding: "12px 24px", color: "#000", textDecoration: "none", display: "inline-block", marginTop: "20px", borderRadius: "4px", fontWeight: 600 }}>
        Visit Us Today
      </a>
    </main>
  );
}
