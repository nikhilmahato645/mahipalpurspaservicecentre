import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Russian Spa Centre Mahipalpur | Luxury Spa & Massage Near Delhi Airport | 24/7 Open",
  description:
    "Premium Russian Banya, body massage & luxury spa services in Mahipalpur & Aerocity. Open 24/7. 10 minutes from IGI Airport. Book now: +91 8929979542",
  keywords:
    "Russian Body, Massage Centres, Beauty Spas For Men, Russian Body Massage Centres, Russian Body Massage Centres-Z, Beauty Spas For Men-A, 24 Hours Beauty Spas Massage, Centres For Men, 24 Hours Beauty Spas-A, Massage Centres For Men-Z, 24 Hours Body Massage Centres, Beauty Spas, 24 Hours Body Massage Centres-Z, Beauty Spas-A, Russian spa in mahipalpur, Russian spa in aerocity, Russian spa Mahipalpur",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Spa in Mahipalpur Near IGI Airport Delhi | Russian Spa Centre",
    description:
      "Luxury Russian Spa & Body Massage in Mahipalpur. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spa in Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Mahipalpur Near IGI Airport",
    description: "Luxury Russian Spa & Massage 24/7",
    images: ["https://mahipalpurspaservicecentre.com/og-image.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Russian Spa Centre Mahipalpur",
              image: "https://mahipalpurspaservicecentre.com/logo.png",
              telephone: "+91 8929979542",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
                addressLocality: "New Delhi",
                postalCode: "110037",
                addressCountry: "IN",
              },
              url: "https://mahipalpurspaservicecentre.com",
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "₹2000-₹15000",
              servesCuisine: "Spa & Wellness",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "350",
              },
            }),
          }}
        />
        
        <style>{`
          /* RESET & VARIABLES */
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          :root {
            --gold: #7C4DBC;
            --gold-light: #9B6FD1;
            --gold-pale: #F3ECFB;
            --dark: #F9F7FD;
            --dark-2: #FFFFFF;
            --dark-3: #FFFFFF;
            --cream: #16082E;
            --muted: #6B5F8A;
            --font-display: 'Cormorant Garamond', serif;
            --font-body: 'Jost', sans-serif;
          }
          html { scroll-behavior: smooth; }
          body {
            background: var(--dark);
            color: var(--cream);
            font-family: var(--font-body);
            font-weight: 300;
            line-height: 1.7;
            overflow-x: hidden;
          }
          a { color: inherit; text-decoration: none; }
          img { max-width: 100%; display: block; height: auto; }

          /* FLOATING BUTTONS */
          .floating-buttons {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .floating-btn {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }
          .floating-btn:hover {
            transform: scale(1.08);
          }
          .floating-btn img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .scroll-top-btn {
            border: none;
            background: linear-gradient(135deg, #A988D8 0%, #7C4DBC 55%, #6A3FAE 100%);
            color: #fff;
            box-shadow: 0 8px 20px rgba(124,77,188,0.4), inset 0 1px 0 rgba(255,255,255,0.25);
            opacity: 0;
            transform: translateY(12px) scale(0.85);
            pointer-events: none;
            transition: opacity 0.25s ease, transform 0.25s ease, box-shadow 0.2s ease;
          }
          .scroll-top-btn-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
          }
          .scroll-top-btn:hover {
            box-shadow: 0 12px 26px rgba(124,77,188,0.5), inset 0 1px 0 rgba(255,255,255,0.3);
          }
          @media (max-width: 480px) {
            .floating-buttons { bottom: 16px; right: 16px; gap: 12px; }
            .floating-btn { width: 48px; height: 48px; }
          }

          /* FOOTER */
          footer {
            background: var(--gold-pale);
            border-top: 1px solid rgba(124,77,188,0.15);
            padding: 40px 20px;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 1200px;
            margin: 0 auto 40px;
          }
          .footer-brand .logo {
            font-family: var(--font-display);
            font-size: 1.4rem;
            color: var(--gold);
            font-weight: 600;
          }
          .footer-brand p {
            font-size: 0.8rem;
            color: var(--muted);
            margin-top: 12px;
            line-height: 1.6;
          }
          .footer-brand .contact-info { margin-top: 16px; }
          .footer-brand .contact-info p {
            font-size: 0.75rem;
            color: var(--cream);
            opacity: 0.7;
            margin-bottom: 6px;
          }
          .footer-col h4 {
            font-family: var(--font-display);
            font-size: 1rem;
            color: var(--gold);
            letter-spacing: 0.05em;
            margin-bottom: 16px;
            font-weight: 600;
          }
          .footer-col a {
            display: block;
            font-size: 0.75rem;
            color: var(--muted);
            margin-bottom: 8px;
            transition: color 0.2s;
          }
          .footer-col a:hover { color: var(--gold); }
          .footer-bottom {
            border-top: 1px solid rgba(124,77,188,0.15);
            padding-top: 24px;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .footer-bottom p { font-size: 0.7rem; color: var(--muted); }

          /* UTILITIES */
          .gold { color: var(--gold); }
          .section-label {
            font-size: 0.65rem;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: var(--gold);
            font-family: var(--font-body);
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
          }
          .section-label::before {
            content: '';
            width: 28px;
            height: 1px;
            background: var(--gold);
          }
          .section-title {
            font-family: var(--font-display);
            font-size: clamp(1.8rem, 5vw, 3rem);
            font-weight: 300;
            line-height: 1.2;
            color: var(--cream);
          }
          .section-title em { font-style: italic; color: var(--gold); }
          .divider {
            width: 48px;
            height: 1px;
            background: var(--gold);
            margin: 20px 0;
          }
          .btn-gold {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: linear-gradient(135deg, #A988D8 0%, #7C4DBC 55%, #6A3FAE 100%);
            color: #fff;
            padding: 14px 32px;
            border-radius: 100px;
            font-size: 0.72rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 600;
            font-family: var(--font-body);
            box-shadow: 0 8px 24px rgba(124,77,188,0.32), inset 0 1px 0 rgba(255,255,255,0.25);
            transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
            cursor: pointer;
            border: none;
            text-align: center;
          }
          .btn-gold:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(124,77,188,0.44), inset 0 1px 0 rgba(255,255,255,0.3);
            filter: brightness(1.04);
          }
          .btn-outline {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1.5px solid rgba(124,77,188,0.4);
            background: rgba(124,77,188,0.04);
            color: var(--gold);
            padding: 13px 30px;
            border-radius: 100px;
            font-size: 0.72rem;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            font-weight: 600;
            font-family: var(--font-body);
            transition: all 0.25s ease;
            cursor: pointer;
            text-align: center;
          }
          .btn-outline:hover {
            background: var(--gold);
            color: #fff;
            border-color: var(--gold);
            transform: translateY(-2px);
            box-shadow: 0 10px 26px rgba(124,77,188,0.28);
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          .testimonial-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin: 40px 0;
          }
          .testimonial-card {
            background: #fff;
            padding: 24px;
            border-radius: 4px;
            border: 1px solid var(--gold-pale);
            border-left: 2px solid var(--gold);
            box-shadow: 0 2px 14px rgba(124,77,188,0.06);
          }
          .testimonial-card p {
            font-size: 0.9rem;
            font-style: italic;
            margin-bottom: 16px;
          }
          .testimonial-card .author {
            font-weight: 500;
            color: var(--gold);
            margin-bottom: 4px;
          }
          .testimonial-card .detail {
            font-size: 0.7rem;
            color: var(--muted);
          }
          .faq-item {
            background: var(--gold-pale);
            margin-bottom: 12px;
            padding: 16px;
            border-radius: 4px;
          }
          .faq-question {
            font-weight: 500;
            color: var(--gold);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            font-size: 0.85rem;
            color: var(--muted);
            margin-top: 8px;
          }
          .faq-item.open .faq-answer {
            max-height: 300px;
          }
          .contact-form {
            background: #fff;
            border: 1px solid var(--gold-pale);
            box-shadow: 0 2px 14px rgba(124,77,188,0.06);
            padding: 32px 24px;
            border-radius: 8px;
            margin: 40px 0;
          }
          .form-group {
            margin-bottom: 20px;
          }
          .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            background: #fff;
            border: 1px solid rgba(124,77,188,0.3);
            color: var(--cream);
            font-family: var(--font-body);
            font-size: 0.9rem;
          }
          .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: var(--gold);
          }
          .keyword-cloud {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            margin: 30px 0;
          }
          .keyword-cloud span {
            font-size: 0.65rem;
            color: var(--muted);
            background: var(--gold-pale);
            padding: 4px 12px;
            border-radius: 20px;
          }
          @media (min-width: 768px) {
            nav { padding: 20px 40px; flex-wrap: nowrap; }
            .nav-links {
              display: flex;
              width: auto;
              flex-direction: row;
              gap: 32px;
              padding-top: 0;
            }
            .nav-cta { display: inline-block; }
            .menu-toggle { display: none; }
            .footer-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 48px; }
            .footer-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
            .testimonial-grid { grid-template-columns: repeat(2, 1fr); }
            .contact-form { padding: 48px; }
          }
          @media (min-width: 1024px) {
            .testimonial-grid { grid-template-columns: repeat(3, 1fr); }
          }
        `}</style>
      </head>
      <body>
        <Navbar />

        <main style={{ marginTop: '76px' }}>{children}</main>

        {/* Floating Scroll-to-Top, WhatsApp & Call Buttons */}
        <div className="floating-buttons">
          <ScrollToTopButton />
          <a
            href="https://wa.me/918929979542?text=Hello%2C%20I%20want%20to%20book%20a%20spa%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn btn-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <img src="/call_whatshap/whatshap.png" alt="Chat on WhatsApp" />
          </a>
          <a href="tel:+918929979542" className="floating-btn btn-call" aria-label="Call Now">
            <img src="/call_whatshap/call.png" alt="Call Now" />
          </a>
        </div>

        <footer>
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">Russian Spa Centre</div>
              <p>Delhi NCR's premier destination for authentic Russian Banya, luxury massage, and holistic wellness. Open 24/7, 365 days a year. Rated 4.8★ by 350+ satisfied clients.</p>
              <div className="contact-info">
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} style={{ flexShrink: 0 }} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} /> +91 8929979542</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} /> info@mahipalpurspaservicecentre.com</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={14} /> Open 24 Hours · 7 Days a Week</p>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/services/">All Services</a>
              <a href="/services/#banya">Russian Banya</a>
              <a href="/services/#swedish">Swedish Massage</a>
              <a href="/services/#deep-tissue">Deep Tissue</a>
              <a href="/services/#thai">Thai Massage</a>
              <a href="/services/#aromatherapy">Aromatherapy</a>
              <a href="/services/#couples">Couples Package</a>
              <a href="/services/#reflexology">Reflexology</a>
            </div>
            <div className="footer-col">
              <h4>Location Pages</h4>
              <a href="/spa-in-mahipalpur/">Spa in Mahipalpur</a>
              <a href="/spa-in-aerocity/">Spa in Aerocity</a>
              <a href="/spa-in-vasant-kunj/">Spa in Vasant Kunj</a>
              <a href="/spa-in-delhi/">Spa in Delhi</a>
              <a href="/russian-spa-mahipalpur/">Russian Spa Mahipalpur</a>
              <a href="/russian-spa-aerocity/">Russian Spa Aerocity</a>
              <a href="/russian-banya-delhi/">Russian Banya Delhi</a>
              <a href="/locations/">All Locations</a>
            </div>
            <div className="footer-col">
              <h4>Body Massage</h4>
              <a href="/body-massage-mahipalpur/">Body Massage Mahipalpur</a>
              <a href="/body-massage-aerocity/">Body Massage Aerocity</a>
              <a href="/body-massage-vasant-kunj/">Body Massage Vasant Kunj</a>
              <a href="/couple-spa-delhi/">Couples Spa Package</a>
              <a href="/pricing/">View All Packages</a>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="/about/">About Us</a>
              <a href="/contact/">Contact & Book</a>
              <a href="/gallery/">Gallery</a>
              <a href="/services/">Services</a>
            </div>
          </div>
          <div className="keyword-cloud">
            <span>Russian Body</span><span>Massage Centres</span><span>Beauty Spas For Men</span>
            <span>Russian Body Massage Centres</span><span>24 Hours Beauty Spas Massage</span>
            <span>Centres For Men</span><span>24 Hours Body Massage Centres</span>
            <span>Russian spa in mahipalpur</span><span>Russian spa in aerocity</span>
            <span>Russian spa Mahipalpur</span><span>Body Massage in Dwarka</span>
            <span>Full Body Massage</span><span>Aromatherapy Massage</span><span>Hot Stone Massage</span>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Russian Spa Centre · mahipalpurspaservicecentre.com · All rights reserved</p>
            <p style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}><Sparkles size={13} /> 15% OFF FIRST VISIT · OPEN 24/7 <Sparkles size={13} /></p>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            // FAQ accordion
            document.querySelectorAll('.faq-question').forEach(question => {
              question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('open');
              });
            });
          `
        }} />
      </body>
    </html>
  );
}