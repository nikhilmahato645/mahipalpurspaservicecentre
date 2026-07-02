// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka | Delhi NCR",
  description:
    "Discover why we're the most trusted spa in Mahipalpur, Aerocity, Dwarka, Vasant Kunj & near IGI Airport. 10+ years excellence, certified therapists, authentic Russian Banya. Open 24/7. Call +91 8929979542",
  keywords:
    "spa in Mahipalpur, spa in Aerocity, spa in Dwarka, spa in Vasant Kunj, spa near IGI Airport, Russian spa Mahipalpur, best spa Delhi NCR, luxury spa Aerocity, massage centre Dwarka, body spa Vasant Kunj, Russian banya near me, spa near Delhi Airport, wellness centre Mahipalpur, couples spa Aerocity, deep tissue massage Dwarka, Swedish massage Mahipalpur, Thai spa Vasant Kunj, hot stone therapy near me, aromatherapy spa Delhi, reflexology centre, sports massage Mahipalpur, pregnancy spa Aerocity, spa for men Dwarka, ladies spa Vasant Kunj, 24 hour spa near airport, Russian spa centre about us",
  openGraph: {
    title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka",
    description: "10+ years of excellence in Mahipalpur, Aerocity, Dwarka & near IGI Airport. Certified therapists, authentic Russian Banya, open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/about",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/about-og.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre About Us - Best Spa in Mahipalpur Aerocity Dwarka",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Russian Spa Centre | Best Spa in Mahipalpur, Aerocity & Dwarka",
    description: "Delhi NCR's most trusted spa. 10+ years excellence. Open 24/7 near IGI Airport.",
    images: ["https://mahipalpurspaservicecentre.com/about-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-hero {
          padding: 140px 60px 80px; background: var(--dark-2);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          position: relative; overflow: hidden;
        }
        .about-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .about-hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; position: relative; }
        .about-hero h1 { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 300; color: var(--cream); line-height: 1.2; }
        .about-hero h1 em { color: var(--gold); font-style: italic; }
        .about-hero p { font-size: 0.9rem; color: var(--muted); margin-top: 20px; line-height: 1.9; }
        .about-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; margin-top: 40px; }
        .about-stat { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); padding: 24px; text-align: center; }
        .about-stat .num { font-family: var(--font-display); font-size: 2.2rem; color: var(--gold); font-weight: 300; display: block; line-height: 1; }
        .about-stat .lbl { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-top: 6px; }

        .about-body { max-width: 1200px; margin: 0 auto; padding: 80px 60px; }
        .story-section { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-bottom: 100px; align-items: center; }
        .story-section p { font-size: 0.88rem; color: var(--muted); line-height: 1.9; margin-bottom: 16px; }

        .pillars { margin-bottom: 100px; }
        .pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 48px; }
        .pillar-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08); padding: 48px 36px; transition: border-color 0.3s; }
        .pillar-card:hover { border-color: rgba(201,168,76,0.25); }
        .pillar-icon { font-size: 2rem; margin-bottom: 20px; }
        .pillar-card h3 { font-family: var(--font-display); font-size: 1.3rem; color: var(--gold); font-weight: 400; margin-bottom: 16px; }
        .pillar-card p { font-size: 0.82rem; color: var(--muted); line-height: 1.9; }

        .location-section { margin-bottom: 100px; }
        .location-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 48px; }
        .location-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08); padding: 32px 28px; text-align: center; }
        .location-icon { font-size: 2rem; margin-bottom: 16px; }
        .location-card h3 { font-family: var(--font-display); font-size: 1.2rem; color: var(--gold); margin-bottom: 12px; }
        .location-card p { font-size: 0.78rem; color: var(--muted); line-height: 1.7; margin-bottom: 16px; }
        .location-distance { font-size: 0.7rem; color: #4caf50; letter-spacing: 0.05em; }

        .compare-section { margin-bottom: 100px; }
        .compare-table { width: 100%; border-collapse: collapse; margin-top: 48px; }
        .compare-table th { padding: 16px 24px; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; text-align: left; border-bottom: 1px solid rgba(201,168,76,0.2); }
        .compare-table th:first-child { color: var(--muted); }
        .compare-table th:nth-child(2) { color: var(--gold); background: rgba(201,168,76,0.05); }
        .compare-table th:last-child { color: var(--muted); }
        .compare-table td { padding: 14px 24px; font-size: 0.82rem; border-bottom: 1px solid rgba(201,168,76,0.06); }
        .compare-table td:first-child { color: var(--cream); }
        .compare-table td:nth-child(2) { background: rgba(201,168,76,0.04); color: var(--gold); font-weight: 500; }
        .compare-table td:last-child { color: var(--muted); }
        .check { color: #4caf50; font-size: 1rem; }
        .cross { color: #f44336; font-size: 1rem; }

        .team-section { text-align: center; background: var(--dark-2); padding: 80px 60px; }
        .team-inner { max-width: 1200px; margin: 0 auto; }
        .team-section p { font-size: 0.88rem; color: var(--muted); max-width: 600px; margin: 20px auto 48px; line-height: 1.9; }
        .certifications { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }
        .cert-badge { border: 1px solid rgba(201,168,76,0.25); padding: 10px 20px; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); border-radius: 30px; }

        .keyword-cloud { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 40px 20px; max-width: 1200px; margin: 0 auto; border-top: 1px solid rgba(201,168,76,0.1); }
        .keyword-cloud span { font-size: 0.65rem; color: var(--muted); background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; }

        @media (max-width: 900px) {
          .about-hero-inner, .story-section { grid-template-columns: 1fr; gap: 40px; }
          .about-hero, .about-body { padding-left: 24px; padding-right: 24px; }
          .about-hero { padding-top: 120px; padding-bottom: 60px; }
          .pillars-grid { grid-template-columns: 1fr; }
          .location-grid { grid-template-columns: 1fr; }
          .compare-table th, .compare-table td { padding: 12px 12px; font-size: 0.7rem; }
          .team-section { padding: 60px 24px; }
        }
      `}</style>

      <div className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-inner">
          <div>
            <div className="section-label">Our Story</div>
            <h1>Delhi NCR&apos;s Most <em>Trusted</em> Wellness Destination</h1>
            <p>For over a decade, Russian Spa Centre has been the premier choice for authentic spa experiences across Mahipalpur, Aerocity, Dwarka, Vasant Kunj, and near IGI Airport. We brought the authentic Russian Banya tradition to India and built a loyal community of thousands around it.</p>
            <p style={{ marginTop: '12px' }}>Whether you're looking for the best spa in Mahipalpur, a luxury massage centre in Aerocity, or a relaxing body spa in Dwarka — we're your trusted wellness partner, open 24/7 every single day.</p>
          </div>
          <div className="about-stats">
            {[
              { num: '10+', lbl: 'Years of Excellence' },
              { num: '350+', lbl: '5-Star Reviews' },
              { num: '90%+', lbl: 'Client Retention Rate' },
              { num: '50+', lbl: 'Years Combined Expertise' },
            ].map((s, i) => (
              <div key={i} className="about-stat">
                <span className="num">{s.num}</span>
                <span className="lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-body">
        <div className="story-section">
          <div>
            <div className="section-label">Who We Are</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>More Than a Spa.<br /><em>A Wellness Philosophy.</em></h2>
            <div className="divider" />
          </div>
          <div>
            <p>At Russian Spa Centre, we view spa treatments not as luxury indulgences but as essential components of a healthy lifestyle. Our holistic philosophy addresses physical tension, mental stress, and emotional wellbeing simultaneously — because true wellness is all three at once. As the leading spa in Mahipalpur and Aerocity, we've served over 10,000+ satisfied clients from across Delhi NCR and international travelers passing through IGI Airport.</p>
            <p>We are one of the very few establishments in all of Delhi NCR to offer a genuine Russian Banya experience, complete with traditional Venik treatments using imported birch leaves. This centuries-old ritual was meticulously recreated at our facility according to authentic Russian specifications. Our spa near Delhi Airport has become a favorite among frequent flyers seeking rejuvenation during layovers.</p>
            <p>Our therapists are not just service providers — they are healing artists trained across Russia, Thailand, Sweden, and Japan, bringing the world's finest wellness traditions to the heart of Delhi. Whether you need a relaxing Swedish massage in Mahipalpur, deep tissue therapy in Dwarka, or a romantic couples spa in Aerocity, our team delivers excellence every time.</p>
          </div>
        </div>

        {/* LOCATION SECTION - Unique to About page */}
        <div className="location-section">
          <div className="section-label">Our Locations</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: 0 }}>Serving <em>All of Delhi NCR</em></h2>
          <p style={{ color: 'var(--muted)', marginTop: '16px', marginBottom: '24px' }}>Conveniently located near major Delhi NCR hubs — always within 15-20 minutes from wherever you are.</p>
          <div className="location-grid">
            {[
              { icon: '📍', name: 'Spa in Mahipalpur', desc: 'Our flagship location in the heart of Mahipalpur, just minutes from IGI Airport. The most popular spa destination in the area.', distance: '2 min from Mahipalpur Metro', link: '/spa-in-mahipalpur' },
              { icon: '✈️', name: 'Spa in Aerocity', desc: 'Luxury wellness for business travelers and hotel guests. Premium facilities with executive packages.', distance: '5 min from Aerocity Metro', link: '/spa-in-aerocity' },
              { icon: '🏢', name: 'Spa in Dwarka', desc: 'Serving Dwarka sector residents with the same premium quality treatments. Family-friendly environment.', distance: '10 min from Dwarka Sector 10', link: '/spa-in-dwarka' },
              { icon: '🌳', name: 'Spa in Vasant Kunj', desc: 'Peaceful retreat for South Delhi residents. Surrounded by greenery for added relaxation.', distance: '8 min from Vasant Kunj Mall', link: '/spa-in-vasant-kunj' },
              { icon: '🛫', name: 'Spa Near IGI Airport', desc: 'Perfect for travelers. Open 24/7 with express treatments for layovers and flight delays.', distance: '10 min from T3 Arrival', link: '/spa-near-igi-airport' },
              { icon: '🇷🇺', name: 'Russian Spa Mahipalpur', desc: 'Authentic Russian Banya specialists. The only place in Delhi NCR with genuine Venik treatments.', distance: 'Main Location - Mahipalpur', link: '/russian-spa-in-mahipalpur' },
            ].map((loc, i) => (
              <div key={i} className="location-card">
                <div className="location-icon">{loc.icon}</div>
                <h3>{loc.name}</h3>
                <p>{loc.desc}</p>
                <div className="location-distance">⏱️ {loc.distance}</div>
                <a href={loc.link} style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>Learn More →</a>
              </div>
            ))}
          </div>
        </div>

        {/* PILLARS */}
        <div className="pillars">
          <div className="section-label">Our Commitments</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: 0 }}>What We Stand <em>For</em></h2>
          <div className="pillars-grid">
            {[
              { icon: '🌿', title: 'Authentic Techniques', desc: 'We never settle for imitation. Every technique we offer has been mastered through rigorous training from its country of origin. Our Russian Banya follows actual Russian specifications. Our Thai massage is performed by therapists trained in Thai tradition. When you search for "Russian spa in Mahipalpur" — we deliver the real experience.' },
              { icon: '💎', title: 'Uncompromising Quality', desc: 'From the essential oils we use to the thread count of our linens, every detail matters. We use only therapeutic-grade, certified organic products. Our facilities in Aerocity, Dwarka, and Vasant Kunj are maintained to hospital-grade standards with third-party audits.' },
              { icon: '🤝', title: 'Personalized Care', desc: 'Every client receives a consultation before their treatment. We customize pressure, technique, oil blend, and focus areas to your body\'s specific needs. Whether you need deep tissue massage in Dwarka or a gentle Swedish massage in Aerocity — we adapt to you.' },
              { icon: '🔒', title: 'Complete Privacy', desc: 'Privacy is not a feature — it is a foundation. All treatments are conducted in fully private rooms. High-profile clients, diplomats, and executives from nearby Aerocity hotels trust us for our absolute discretion and professionalism.' },
              { icon: '🏆', title: 'Continuous Excellence', desc: 'Our therapists undergo continuous education and training. We invest in advanced techniques, premium product upgrades, and facility improvements every year. Excellence is not a destination — it is an ongoing practice across all our Delhi NCR locations.' },
              { icon: '❤️', title: 'Community Care', desc: 'We actively contribute through wellness workshops, corporate stress-relief programs for Aerocity businesses, and special discounts for senior citizens, healthcare workers, and first responders who serve our Mahipalpur and Dwarka communities.' },
            ].map((p, i) => (
              <div key={i} className="pillar-card">
                <div className="pillar-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARE SECTION */}
        <div className="compare-section">
          <div className="section-label">Comparison</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: 0 }}>Why We&apos;re <em>Different</em></h2>
          <p style={{ color: 'var(--muted)', marginTop: '12px', marginBottom: '24px' }}>Compare Russian Spa Centre with other massage centres in Mahipalpur, Aerocity, and Dwarka:</p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Russian Spa Centre</th>
                <th>Other Spas in Mahipalpur/Aerocity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Authentic Russian Banya with Venik', '✓', '✗'],
                ['Internationally Certified Therapists', '✓', 'Varies / Uncertified'],
                ['Open 24/7 Every Day (365 days)', '✓', 'Limited hours'],
                ['Individual Private Treatment Rooms', '✓', 'Curtain partitions / Shared'],
                ['Hospital-Grade Hygiene Standards', '✓', 'Basic cleaning only'],
                ['Personalized Treatment Plans', '✓', 'One-size-fits-all'],
                ['Premium Imported Essential Oils', '✓', 'Cheap synthetic oils'],
                ['Couples Spa Packages Available', '✓', 'Rarely available'],
                ['10 Minutes from Delhi Airport', '✓', 'Far from airport'],
                ['Free Parking for All Guests', '✓', 'Paid / No parking'],
                ['Complimentary Refreshments Included', '✓', 'Not included / Extra charge'],
                ['Easy Online & WhatsApp Booking', '✓', 'Phone call only'],
                ['Transparent Pricing (No Hidden Fees)', '✓', 'Hidden charges common'],
                ['Male & Female Therapists Available', '✓', 'Limited options'],
                ['Senior Citizen & Student Discounts', '✓', 'No discounts offered'],
              ].map(([feat, us, them], i) => (
                <tr key={i}>
                  <td>{feat}</td>
                  <td><span className="check">{us}</span></td>
                  <td style={{ color: them === '✗' ? '#f44336' : them === '✓' ? '#4caf50' : 'var(--muted)' }}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '12px' }}>* Comparison based on surveys of 20+ spa and massage centres in Mahipalpur, Aerocity, Dwarka, and Vasant Kunj areas (2025 data).</p>
        </div>

        {/* WHY CHOOSE US - Location specific */}
        <div style={{ marginBottom: '100px' }}>
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', marginBottom: '24px' }}>Best Spa in <em>Mahipalpur, Aerocity & Dwarka</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { title: 'For Mahipalpur Residents', desc: 'Located in the heart of Mahipalpur, we are the most convenient spa destination for local residents. Enjoy our 24/7 services, free parking, and special local resident discounts.' },
              { title: 'For Aerocity Hotel Guests', desc: 'Staying at Andaz, Pullman, JW Marriott, or Holiday Inn? We\'re just 5 minutes away. Ask your concierge about us or call us for complimentary pickup.' },
              { title: 'For Dwarka Sector Residents', desc: 'Dwarka\'s best-kept wellness secret. Our Dwarka location serves sectors 6-24 with the same premium quality treatments. Special weekday discounts for Dwarka residents.' },
              { title: 'For IGI Airport Travelers', desc: 'Long layover? Flight delay? We\'re open 24/7 and just 10 minutes from T3. Express 30-minute treatments available for travelers short on time.' },
              { title: 'For Corporate Professionals', desc: 'Stress relief near your Aerocity office. We offer corporate wellness programs, lunch-break express massages, and group booking discounts for companies.' },
              { title: 'For Couples & Families', desc: 'Private couples suites available. Our spas in Mahipalpur, Aerocity, and Dwarka welcome families with separate male and female therapist options.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.08)' }}>
                <div style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{item.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM CERTIFICATIONS */}
      <div className="team-section">
        <div className="team-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Team</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}>Trained Across the <em>World</em></h2>
          <p>Our therapists hold certifications from recognized institutions across Russia, Thailand, Sweden, and India. Continuous education is mandatory — because the best in wellness never stop learning. All therapists are available across our Mahipalpur, Aerocity, Dwarka, and Vasant Kunj locations.</p>
          <div className="certifications">
            {[
              'Russian Banya Certified', 'Thai Massage Practitioner', 'Swedish Massage Certified',
              'Shiatsu & Meridian Therapy', 'Aromatherapy Specialist', 'Sports Massage Certified',
              'Reflexology Practitioner', 'Deep Tissue Therapist', 'Hot Stone Therapy Certified',
              'Balinese Massage Expert', 'Prenatal Massage Certified', 'Ayurvedic Specialist',
            ].map((c, i) => (
              <div key={i} className="cert-badge">{c}</div>
            ))}
          </div>
          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/services" className="btn-gold">View Our Services</a>
            <a href="/contact" className="btn-outline">Book an Appointment</a>
          </div>
        </div>
      </div>

      {/* KEYWORD CLOUD for SEO */}
      <div className="keyword-cloud">
        <span>spa in Mahipalpur</span>
        <span>spa in Aerocity</span>
        <span>spa in Dwarka</span>
        <span>spa in Vasant Kunj</span>
        <span>spa near IGI Airport</span>
        <span>Russian spa Mahipalpur</span>
        <span>best spa Delhi NCR</span>
        <span>luxury spa Aerocity</span>
        <span>massage centre Dwarka</span>
        <span>body spa Vasant Kunj</span>
        <span>Russian banya near me</span>
        <span>spa near Delhi Airport</span>
        <span>wellness centre Mahipalpur</span>
        <span>couples spa Aerocity</span>
        <span>deep tissue massage Dwarka</span>
        <span>Swedish massage Mahipalpur</span>
        <span>Thai spa Vasant Kunj</span>
        <span>hot stone therapy near me</span>
        <span>aromatherapy spa Delhi</span>
        <span>reflexology centre</span>
        <span>sports massage Mahipalpur</span>
        <span>pregnancy spa Aerocity</span>
        <span>spa for men Dwarka</span>
        <span>ladies spa Vasant Kunj</span>
        <span>24 hour spa near airport</span>
        <span>massage near Aerocity hotels</span>
        <span>spa near JW Marriott Aerocity</span>
        <span>spa near Pullman Aerocity</span>
        <span>Russian Spa Centre</span>
      </div>

      {/* CTA Section */}
      <div style={{ background: 'var(--gold)', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--dark)', marginBottom: '16px' }}>Experience the Russian Spa Centre Difference</h3>
          <p style={{ color: 'rgba(10,8,6,0.7)', marginBottom: '24px' }}>Visit our spa in Mahipalpur, Aerocity, Dwarka, or Vasant Kunj. Open 24/7 — we're always here for you.</p>
          <a href="tel:+918929979542" className="btn-dark" style={{ background: 'var(--dark)', color: 'var(--gold)', display: 'inline-block', padding: '14px 36px', letterSpacing: '0.2em', fontSize: '0.75rem', fontWeight: '500', textTransform: 'uppercase' }}>Call Now: +91 8929979542</a>
        </div>
      </div>
    </>
  );
}