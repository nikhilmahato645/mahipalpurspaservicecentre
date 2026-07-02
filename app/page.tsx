import type { Metadata } from "next";
import TherapistSection from "./components/TherapistSection";

export const metadata: Metadata = {
  title: "Russian Spa Centre Mahipalpur | Luxury Spa & Massage Near Delhi Airport | Open 24/7",
  description:
    "Premium Russian Banya, body massage & luxury spa in Mahipalpur & Aerocity, Delhi NCR. Certified therapists. Open 24/7. 10 min from IGI Airport. Book: +91 8929979542",
  keywords:
    "Russian spa delhi, spa in mahipalpur, spa near igi airport, russian banya delhi, luxury massage delhi, body massage aerocity, couples spa, wellness spa delhi, massage centre delhi, best spa near me, 24 hour spa, professional massage therapists",
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
    title: "Russian Spa Centre | Luxury Russian Banya & Massage in Mahipalpur",
    description: "Premium Russian Spa Centre with authentic Banya, body massage & wellness therapies. Open 24/7 near IGI Airport.",
    url: "https://mahipalpurspaservicecentre.com/",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre - Luxury Spa & Massage in Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Russian Spa Centre | Luxury Spa & Massage",
    description: "Premium Russian Banya & massage spa. Open 24/7 near IGI Airport.",
    images: ["https://mahipalpurspaservicecentre.com/og-image.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/",
  },
};

export default function HomePage() {
  return (
    <>
      <style>{`
        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex; align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 60px 80px;
          background: url('/home_images/mahipalpurspa16.jpg') center/cover no-repeat, var(--dark);
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(124,77,188,0.10) 0%, transparent 60%),
                      radial-gradient(ellipse 50% 80% at 20% 80%, rgba(124,77,188,0.06) 0%, transparent 50%);
          pointer-events: none;
        }
        .hero-grid-overlay {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(124,77,188,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,77,188,0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .hero-content { position: relative; max-width: 700px; animation: fadeUp 1s ease both; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(124,77,188,0.3); background: var(--gold-pale); padding: 6px 16px;
          font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 32px;
        }
        .hero-badge::before { content: '★'; font-size: 0.6rem; }
        .hero h1 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 300; line-height: 1.1; margin-bottom: 8px; color: #fff;
          -webkit-text-stroke: 1px rgba(22,8,46,0.5);
          text-shadow: 0 1px 3px rgba(22,8,46,0.6), 0 0 24px rgba(22,8,46,0.35);
        }
        .hero h1 em { font-style: italic; color: var(--gold); -webkit-text-stroke: 1px rgba(22,8,46,0.35); }
        .hero-sub {
          font-family: var(--font-display); font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          font-weight: 300; color: #fff; margin-bottom: 24px; letter-spacing: 0.02em;
          text-shadow: 0 1px 3px rgba(22,8,46,0.6), 0 0 16px rgba(22,8,46,0.4);
        }
        .hero p { font-size: 0.95rem; color: #fff; max-width: 500px; margin-bottom: 40px; line-height: 1.9; text-shadow: 0 1px 3px rgba(22,8,46,0.65), 0 0 14px rgba(22,8,46,0.4); }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 56px; }
        .hero-stats {
          display: flex; gap: 48px; padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.35);
        }
        .hero-stat .num {
          font-family: var(--font-display); font-size: 2.2rem; font-weight: 300;
          color: var(--gold); display: block; line-height: 1;
          text-shadow: 0 1px 3px rgba(22,8,46,0.6);
        }
        .hero-stat .label { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; margin-top: 4px; text-shadow: 0 1px 3px rgba(22,8,46,0.6); }
        .hero-side {
          position: absolute; right: 60px; top: 50%; transform: translateY(-50%);
          display: flex; flex-direction: column; gap: 2px;
          writing-mode: vertical-rl; text-orientation: mixed;
          font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--muted); opacity: 0.5;
        }
        .open-badge {
          position: absolute; right: 60px; bottom: 60px;
          width: 110px; height: 110px; border-radius: 50%;
          border: 1px solid var(--gold);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          animation: spin 20s linear infinite;
        }
        .open-badge-inner {
          position: absolute; inset: 8px; border-radius: 50%;
          background: rgba(124,77,188,0.08);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center;
        }
        .open-badge-inner span:first-child { font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        .open-badge-inner span:last-child { font-family: var(--font-display); font-size: 1.1rem; color: var(--gold); font-weight: 600; }

        /* MARQUEE */
        .marquee-wrap {
          background: var(--gold); padding: 14px 0; overflow: hidden;
          display: flex; white-space: nowrap;
        }
        .marquee-track { display: flex; gap: 0; animation: marquee 30s linear infinite; }
        .marquee-track span { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--dark); font-weight: 500; padding: 0 32px; }
        .marquee-track span::before { content: '✦'; margin-right: 32px; }

        /* INTRO SECTION */
        .intro { padding: 120px 60px; max-width: 1200px; margin: 0 auto; }
        .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .intro-visual {
          position: relative; height: 500px;
          background: linear-gradient(135deg, var(--gold-pale) 0%, #fff 100%);
          border: 1px solid rgba(124,77,188,0.15);
          box-shadow: 0 4px 24px rgba(124,77,188,0.08);
        }
        .intro-visual-inner {
          position: absolute; inset: 24px;
          display: flex; flex-direction: column; justify-content: flex-end; padding: 32px;
        }
        .visual-icon { font-size: 4rem; margin-bottom: 16px; }
        .visual-tag { font-family: var(--font-display); font-size: 1.6rem; font-weight: 300; color: var(--cream); }
        .visual-tag em { color: var(--gold); font-style: italic; }
        .features-list { margin-top: 32px; display: flex; flex-direction: column; gap: 16px; }
        .feature-item { display: flex; gap: 16px; align-items: flex-start; }
        .feature-icon { width: 36px; height: 36px; border: 1px solid rgba(124,77,188,0.3); background: var(--gold-pale); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; margin-top: 2px; }
        .feature-text strong { display: block; font-size: 0.85rem; letter-spacing: 0.05em; color: var(--cream); font-weight: 500; margin-bottom: 2px; }
        .feature-text p { font-size: 0.8rem; color: var(--muted); line-height: 1.6; }

        /* SERVICES PREVIEW */
        .services-section { padding: 0 60px 120px; }
        .services-header { max-width: 1200px; margin: 0 auto 60px; display: flex; justify-content: space-between; align-items: flex-end; }
        .services-grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .service-card {
          background: var(--dark-3); padding: 40px 36px;
          border: 1px solid rgba(124,77,188,0.1);
          box-shadow: 0 2px 14px rgba(124,77,188,0.05);
          transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
          cursor: pointer; position: relative; overflow: hidden;
        }
        .service-card::before {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: var(--gold); transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .service-card:hover { background: var(--gold-pale); border-color: rgba(124,77,188,0.3); box-shadow: 0 8px 28px rgba(124,77,188,0.13); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-icon { font-size: 2rem; margin-bottom: 20px; }
        .service-card h3 { font-family: var(--font-display); font-size: 1.4rem; font-weight: 300; color: var(--cream); margin-bottom: 12px; }
        .service-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.8; margin-bottom: 20px; }
        .service-meta { display: flex; justify-content: space-between; align-items: center; }
        .service-price { font-family: var(--font-display); font-size: 1.3rem; color: var(--gold); font-weight: 300; }
        .service-duration { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }

        /* WHY US */
        .why-section { padding: 120px 60px; background: var(--dark-2); }
        .why-inner { max-width: 1200px; margin: 0 auto; }
        .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-top: 60px; }
        .why-card { padding: 40px 28px; border: 1px solid rgba(124,77,188,0.1); background: var(--dark); }
        .why-card .icon { font-size: 1.8rem; margin-bottom: 16px; }
        .why-card h4 { font-family: var(--font-display); font-size: 1.15rem; color: var(--gold); margin-bottom: 12px; font-weight: 400; }
        .why-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.8; }

        /* PRICING STRIP */
        .pricing-strip { padding: 80px 60px; max-width: 1200px; margin: 0 auto; }
        .pricing-strip-inner { background: var(--dark-3); border: 1px solid rgba(124,77,188,0.15); box-shadow: 0 4px 24px rgba(124,77,188,0.07); padding: 60px; border-radius: 20px; }
        .pricing-strip-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; }
        .pricing-strip-header .badge { background: var(--gold); color: var(--dark); font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 6px 14px; font-weight: 500; border-radius: 100px; }
        .price-items { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .price-item { text-align: center; padding: 28px 20px; border: 1px solid rgba(124,77,188,0.12); border-radius: 14px; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
        .price-item:not(.featured):hover { box-shadow: 0 8px 24px rgba(124,77,188,0.1); border-color: rgba(124,77,188,0.35); transform: translateY(-3px); }
        .price-item .name { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        .price-item .amount { font-family: var(--font-display); font-size: 2rem; color: var(--gold); font-weight: 300; display: block; }
        .price-item .duration { font-size: 0.72rem; color: var(--muted); margin-top: 4px; }
        .price-item.featured { background: linear-gradient(135deg, #1A0835 0%, #16082E 100%); border-color: transparent; box-shadow: 0 10px 30px rgba(124,77,188,0.28); }
        .price-item.featured .name { color: rgba(255,255,255,0.5); }
        .price-item.featured .amount { font-size: 2.4rem; color: #D4B3F5; }
        .price-item.featured .duration { color: rgba(255,255,255,0.4); }

        /* TESTIMONIALS */
        .testimonials { padding: 120px 60px; }
        .testimonials-inner { max-width: 1200px; margin: 0 auto; }
        .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 60px; }
        .testi-card { padding: 40px 36px; background: var(--dark-3); border: 1px solid rgba(124,77,188,0.1); box-shadow: 0 2px 14px rgba(124,77,188,0.05); border-radius: 4px; transition: box-shadow 0.25s, transform 0.25s; }
        .testi-card:hover { box-shadow: 0 10px 30px rgba(124,77,188,0.12); transform: translateY(-3px); }
        .stars { color: #E8A63C; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 20px; }
        .testi-card blockquote { font-family: var(--font-display); font-size: 1.05rem; font-style: italic; color: var(--cream); line-height: 1.7; margin-bottom: 24px; font-weight: 300; }
        .testi-author strong { font-size: 0.82rem; letter-spacing: 0.05em; color: var(--cream); display: block; font-weight: 500; }
        .testi-author span { font-size: 0.75rem; color: var(--muted); }

        /* CTA SECTION */
        .cta-section {
          padding: 100px 60px;
          background: linear-gradient(135deg, #1A0835 0%, #16082E 60%, #1A0835 100%);
          text-align: center;
        }
        .cta-section .section-label { color: #D4B3F5; }
        .cta-section .section-label::before { background: #D4B3F5; }
        .cta-section h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 4rem); font-weight: 300; color: #fff; margin-bottom: 16px; }
        .cta-section h2 em { color: #D4B3F5; font-style: italic; }
        .cta-section p { font-size: 0.9rem; color: rgba(255,255,255,0.55); margin-bottom: 40px; }
        .cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .cta-actions .btn-outline { border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.85); }
        .cta-actions .btn-outline:hover { background: rgba(255,255,255,0.12); color: #fff; border-color: #fff; }
        .cta-phone { font-family: var(--font-display); font-size: 2rem; color: #D4B3F5; font-weight: 300; margin-bottom: 32px; display: block; }

        /* ANIMATIONS */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (max-width: 1024px) {
          .hero { padding: 100px 32px 60px; }
          .hero-side, .open-badge { display: none; }
          .intro-grid { grid-template-columns: 1fr; gap: 40px; }
          .intro-visual { height: 280px; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .price-items { grid-template-columns: repeat(2, 1fr); }
          .testi-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .hero { padding: 90px 24px 60px; }
          .hero-stats { gap: 24px; flex-wrap: wrap; }
          .services-section, .why-section, .testimonials, .pricing-strip, .intro { padding-left: 24px; padding-right: 24px; }
          .services-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .price-items { grid-template-columns: 1fr 1fr; gap: 16px; }
          .pricing-strip-inner { padding: 32px 24px; }
          .services-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .pricing-strip-header { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid-overlay" />
        <div className="hero-content">
          <div className="hero-badge">4.8 Stars · 350+ Reviews · Delhi NCR&apos;s #1 Spa</div>
         <h1>Spa in Mahipalpur Near IGI Airport Delhi</h1>
          <p className="hero-sub">Mahipalpur · Aerocity · Near IGI Airport</p>
          <p>
            Experience centuries-old Russian Banya traditions combined with world-class massage therapies.
            Certified therapists, impeccable hygiene, and unmatched luxury — just 10 minutes from Delhi Airport.
          </p>
          <div className="hero-actions">
            <a href="tel:+918929979542" className="btn-gold">Call & Book Now</a>
            <a href="/services" className="btn-outline">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="num">10+</span><span className="label">Years of Excellence</span></div>
            <div className="hero-stat"><span className="num">350+</span><span className="label">5-Star Reviews</span></div>
            <div className="hero-stat"><span className="num">24/7</span><span className="label">Always Open</span></div>
            <div className="hero-stat"><span className="num">10min</span><span className="label">From IGI Airport</span></div>
          </div>
        </div>
        <div className="hero-side">Mahipalpur · Aerocity · Delhi NCR</div>
        <div className="open-badge">
          <div className="open-badge-inner">
            <span>Open</span>
            <span>24/7</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[
            "Russian Banya", "Swedish Massage", "Deep Tissue", "Thai Massage", "Aromatherapy",
            "Couples Package", "Reflexology", "Shiatsu", "Sports Massage", "Hot Stone Therapy",
            "Russian Banya", "Swedish Massage", "Deep Tissue", "Thai Massage", "Aromatherapy",
            "Couples Package", "Reflexology", "Shiatsu", "Sports Massage", "Hot Stone Therapy",
          ].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* INTRO */}
      <section className="intro">
        <div className="intro-grid">
          <div className="intro-visual">
            <div className="intro-visual-inner">
              <div className="visual-icon">🏛️</div>
              <div className="visual-tag">Where Ancient <em>Russian Traditions</em> Meet Modern Luxury</div>
            </div>
          </div>
          <div>
            <div className="section-label">About Us</div>
            <h2 className="section-title">Delhi NCR&apos;s Most <em>Trusted</em> Spa Destination</h2>
            <div className="divider" />
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.9, marginBottom: '32px' }}>
              At Russian Spa Centre, we bring the authentic healing art of the Russian Banya to the heart of Delhi. With internationally certified therapists trained across Russia, Thailand, Sweden, and Japan, we deliver treatments that go far beyond ordinary massage — we craft transformative wellness experiences.
            </p>
            <div className="features-list">
              {[
                { icon: '🌿', title: 'Authentic Russian Banya', desc: 'Traditional Venik treatments with imported birch leaves — an experience unique in all of Delhi NCR.' },
                { icon: '🎓', title: 'Certified Therapists', desc: 'Internationally trained, continuously educated. Over 50 years of combined healing expertise.' },
                { icon: '🏥', title: 'Hospital-Grade Hygiene', desc: 'Third-party audited cleanliness protocols. Fresh linens, hypoallergenic products, spotless rooms.' },
                { icon: '🕐', title: 'Open 24/7, Every Day', desc: 'Late-night arrival? Early morning flight? We are always here for you, no appointment wait.' },
              ].map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text">
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{
  marginTop: "40px",
  padding: "20px",
  border: "1px solid rgba(124,77,188,0.2)",
  borderRadius: "12px",
  background: "var(--gold-pale)",
  display: "flex",
  flexWrap: "wrap",
  gap: "15px"
}}>
  <a href="/spa-in-mahipalpur">Best Spa in Mahipalpur</a>
  <a href="/spa-near-igi-airport">Spa Near IGI Airport</a>
  <a href="/body-massage-in-mahipalpur">Body Massage in Mahipalpur</a>
</div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="services-header">
          <div>
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Signature <em>Services</em></h2>
          </div>
          <a href="/services" className="btn-outline">All Services →</a>
        </div>
        <div className="services-grid">
          {[
            { icon: '🔥', name: 'Russian Banya', desc: 'Authentic Venik steam bath experience with birch leaves. Centuries of healing wisdom.', price: '₹2,500', duration: '60 min' },
            { icon: '🌊', name: 'Swedish Massage', desc: 'Classic full-body technique with long flowing strokes for complete relaxation.', price: '₹2,800', duration: '60 min' },
            { icon: '💪', name: 'Deep Tissue Therapy', desc: 'Intensive therapeutic work for chronic tension, pain, and muscle recovery.', price: '₹3,500', duration: '90 min' },
            { icon: '🌸', name: 'Aromatherapy Massage', desc: 'Premium essential oils customized to your needs — relax, energize, or heal.', price: '₹3,000', duration: '75 min' },
            { icon: '🧘', name: 'Thai Massage', desc: 'Ancient acupressure and yoga-stretching therapy for energy and flexibility.', price: '₹3,200', duration: '75 min' },
            { icon: '💑', name: 'Couples Package', desc: 'Synchronized massage with Banya access, champagne & private couples room.', price: '₹7,500', duration: '120 min' },
          ].map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className="service-meta">
                <span className="service-price">{s.price}</span>
                <span className="service-duration">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="why-section">
        <div className="why-inner">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">What Sets Us <em>Apart</em></h2>
          <div className="why-grid">
            {[
              { icon: '🌍', title: 'Authentic Techniques', desc: 'Real Russian Banya with imported birch Venik. Not a marketing label — a genuine cultural tradition.' },
              { icon: '📍', title: 'Prime Location', desc: '10 minutes from IGI Airport, 5 minutes from Aerocity hotels. Convenient for every traveler.' },
              { icon: '💎', title: 'Premium Products', desc: '100% pure organic essential oils and therapeutic-grade imported products. No compromises.' },
              { icon: '🔒', title: 'Complete Privacy', desc: 'Individual private treatment rooms. Discretion and comfort guaranteed for every client.' },
              { icon: '⭐', title: '90%+ Retention Rate', desc: 'Our clients return — month after month. That loyalty is our greatest achievement.' },
              { icon: '🏆', title: 'Award-Winning', desc: "Recognized as NCR's Best Spa by leading lifestyle publications and wellness associations." },
              { icon: '🚗', title: 'Free Parking', desc: 'Complimentary secure parking for all guests. Convenient and hassle-free arrival.' },
              { icon: '💬', title: 'Multi-Lingual Staff', desc: 'We communicate in Russian, English, Hindi, and more to serve our international clientele.' },
            ].map((w, i) => (
              <div key={i} className="why-card">
                <div className="icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING STRIP */}
      <div className="pricing-strip">
        <div className="pricing-strip-inner">
          <div className="pricing-strip-header">
            <div>
              <div className="section-label">Transparent Pricing</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>No Hidden Charges. <em>Ever.</em></h2>
            </div>
            <div className="badge">15% Off · First Visit</div>
          </div>
          <div className="price-items">
            {[
              { name: 'Russian Banya', amount: '₹2,500', duration: '60 minutes', featured: false },
              { name: 'Full Body Massage', amount: '₹2,000', duration: '60 minutes', featured: true },
              { name: 'Couples Package', amount: '₹6,000', duration: '120 minutes', featured: false },
              { name: 'Deep Tissue', amount: '₹3,500', duration: '90 minutes', featured: false },
            ].map((p, i) => (
              <div key={i} className={`price-item${p.featured ? ' featured' : ''}`}>
                {p.featured && <div style={{ fontSize: '0.65rem', color: '#D4B3F5', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '8px' }}>Most Popular</div>}
                <div className="name">{p.name}</div>
                <span className="amount">{p.amount}</span>
                <div className="duration">{p.duration}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/pricing" className="btn-gold">View All Prices</a>
            <a href="tel:+918929979542" className="btn-outline">+91 8929979542</a>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="testimonials-inner">
          <div className="section-label">Client Stories</div>
          <h2 className="section-title">What Our Guests <em>Say</em></h2>
          <div className="testi-grid">
            {[
              { quote: 'The Russian Banya experience is absolutely authentic. Nothing compares to the traditional Venik treatment. The therapists are highly skilled and the facility is impeccably clean.', author: 'Priya Malhotra', from: 'Gurgaon · Russian Banya & Aromatherapy' },
              { quote: 'As a frequent traveler to Delhi, I always book a session during my layovers. The location near the airport is incredibly convenient, and the deep tissue massage is exactly what I need after long flights.', author: 'James Mitchell', from: 'Business Traveler, UK · Deep Tissue Massage' },
              { quote: 'As a physician, I am particular about hygiene and professionalism. Russian Spa Centre exceeds all expectations. The hygiene standards are hospital-grade. Remarkable improvement in my chronic back pain!', author: 'Dr. Anita Sharma', from: 'Aerocity · Thai & Sports Massage' },
            ].map((t, i) => (
              <div key={i} className="testi-card">
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="testi-author">
                  <strong>{t.author}</strong>
                  <span>{t.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-label" style={{ justifyContent: 'center' }}>Book Your Experience</div>
        <h2>Ready to <em>Unwind?</em></h2>
        <a href="tel:+918929979542" className="cta-phone">+91 8929979542</a>
        <p>Open 24/7 · Free Parking · 10 Min from IGI Airport · 15% Off Your First Visit</p>
        <div className="cta-actions">
          <a href="tel:+918929979542" className="btn-gold">Call Now & Book</a>
          <a href="/contact" className="btn-outline">Send Us a Message</a>
        </div>
      </section>
    </>
  );
}