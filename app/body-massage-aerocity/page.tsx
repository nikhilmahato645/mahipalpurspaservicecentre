// app/body-massage-aerocity/page.tsx
import type { Metadata } from "next";
import InteractiveElements from "../spa-in-mahipalpur/interactive";

export const metadata: Metadata = {
  title: "Body Massage in Aerocity | Luxury Massage Near IGI Airport | 24/7",
  description:
    "Experience the best body massage in Aerocity at Russian Spa Centre. Full body Swedish, Deep Tissue, Thai, Aromatherapy & Couples Massage. Just minutes from Aerocity hotels & IGI Airport. Open 24/7. Call +91 8929979542",
  keywords:
    "body massage aerocity, best body massage aerocity, full body massage aerocity, deep tissue massage aerocity, swedish massage aerocity, thai massage aerocity, couples massage aerocity, massage centre aerocity, aromatherapy massage aerocity, hot stone massage aerocity, reflexology aerocity, sports massage aerocity, 24 hour massage aerocity, massage near igi airport, body to body massage aerocity, luxury massage aerocity",
  openGraph: {
    title: "Best Body Massage in Aerocity | Russian Spa Centre",
    description: "Premium Full Body Massage in Aerocity. Minutes from hotels & Airport. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/body-massage-aerocity",
    siteName: "Russian Spa Centre",
    images: [{ url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png", width: 1200, height: 630, alt: "Best Body Massage in Aerocity" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Body Massage in Aerocity Delhi",
    description: "Luxury Massage Centre Near Aerocity Hotels & Airport. Open 24/7",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/body-massage-aerocity/",
  },
};

export default function BodyMassageAerocityPage() {
  return (
    <>
      <style>{`
        .page-hero { padding: 140px 60px 80px; background: var(--dark-2); border-bottom: 1px solid rgba(201,168,76,0.15); position: relative; overflow: hidden; }
        .page-hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%); }
        .page-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; text-align: center; }
        .page-hero h1 { font-family: var(--font-display); font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 300; color: var(--cream); line-height: 1.2; }
        .page-hero h1 em { color: var(--gold); font-style: italic; }
        .page-hero p { font-size: 0.9rem; color: var(--muted); margin-top: 20px; max-width: 620px; margin-left: auto; margin-right: auto; line-height: 1.9; }
        .content-section { max-width: 1200px; margin: 0 auto; padding: 80px 60px; }
        .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 80px; }
        .section-title-small { font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 300; color: var(--cream); margin-bottom: 20px; }
        .section-title-small em { color: var(--gold); font-style: italic; }
        .service-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 24px; }
        .service-item { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; color: var(--muted); padding: 8px 0; border-bottom: 1px solid rgba(201,168,76,0.08); }
        .service-item::before { content: '✓'; color: var(--gold); font-size: 0.8rem; }
        .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin: 48px 0; }
        .why-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08); padding: 32px 24px; text-align: center; }
        .why-icon { font-size: 2rem; margin-bottom: 16px; }
        .why-card h3 { font-size: 1rem; color: var(--gold); margin-bottom: 8px; }
        .why-card p { font-size: 0.75rem; color: var(--muted); line-height: 1.6; }
        .nearby-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin: 40px 0; }
        .nearby-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08); padding: 24px; text-align: center; }
        .nearby-icon { font-size: 1.5rem; margin-bottom: 12px; }
        .nearby-card h4 { color: var(--gold); font-size: 0.85rem; margin-bottom: 6px; }
        .nearby-card p { font-size: 0.7rem; color: var(--muted); }
        .testimonial-section { background: var(--dark-2); padding: 80px 60px; }
        .testimonial-inner { max-width: 1200px; margin: 0 auto; }
        .testimonial-mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .testimonial-mini { background: rgba(255,255,255,0.03); padding: 24px; border-radius: 4px; border-left: 2px solid var(--gold); }
        .testimonial-mini p { font-size: 0.85rem; font-style: italic; margin-bottom: 12px; color: var(--muted); }
        .testimonial-mini .author { font-size: 0.75rem; color: var(--gold); font-weight: 500; }
        .cta-section { background: var(--gold); padding: 60px; text-align: center; }
        .cta-section h2 { font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 2.5rem); color: var(--dark); margin-bottom: 16px; }
        .cta-section p { color: rgba(10,8,6,0.7); margin-bottom: 24px; }
        .whatsapp-btn-large { display: inline-flex; align-items: center; gap: 12px; background: #25D366; color: white; padding: 14px 32px; border-radius: 50px; font-weight: 500; font-size: 1rem; transition: transform 0.2s; border: none; cursor: pointer; }
        .whatsapp-btn-large:hover { transform: scale(1.02); color: white; }
        .faq-mini { margin-top: 60px; }
        .faq-mini-item { background: rgba(255,255,255,0.02); padding: 20px; margin-bottom: 12px; border-radius: 4px; }
        .faq-mini-question { color: var(--gold); font-weight: 500; cursor: pointer; display: flex; justify-content: space-between; }
        .faq-mini-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; font-size: 0.8rem; color: var(--muted); margin-top: 8px; }
        .faq-mini-item.open .faq-mini-answer { max-height: 200px; }
        .keyword-cloud { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 40px 20px; border-top: 1px solid rgba(201,168,76,0.1); margin-top: 40px; }
        .keyword-cloud span { font-size: 0.65rem; color: var(--muted); background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; }

        @media (max-width: 900px) {
          .page-hero, .content-section, .testimonial-section { padding-left: 24px; padding-right: 24px; }
          .two-column { grid-template-columns: 1fr; gap: 40px; }
          .why-grid, .nearby-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-mini-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .why-grid, .nearby-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Aerocity's Best</div>
          <h1>Best <em>Body Massage in Aerocity</em><br />Near IGI Airport</h1>
          <p>Premium full body massage, deep tissue, Swedish, Thai & couples massage just minutes from Aerocity hotels and IGI Airport Terminal 3. Open 24/7 with professional therapists.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a href="tel:+918929979542" className="btn-gold">📞 Call Now: +91 8929979542</a>
            <button id="whatsappHeroBtn" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 Book via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="two-column">
          <div>
            <div className="section-label">Why Aerocity?</div>
            <h2 className="section-title-small">Perfect Location for <em>Premium Massage</em></h2>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
              Located right next to Aerocity, we serve guests from all luxury hotels and travelers transiting through Delhi Airport. Experience rejuvenating body massage without traveling far.
            </p>
          </div>
          <div>
            <div className="why-grid" style={{ marginTop: 0 }}>
              {[
                { icon: '✈️', title: '5-7 min from Airport', desc: 'Ideal for layovers' },
                { icon: '🏨', title: 'Close to All Aerocity Hotels', desc: 'JW Marriott, Andaz, Pullman & more' },
                { icon: '🚇', title: 'Aerocity Metro', desc: 'Just 3-5 minutes away' },
                { icon: '🚗', title: 'Free Parking', desc: 'Complimentary for all guests' },
              ].map((item, i) => (
                <div key={i} className="why-card">
                  <div className="why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Signature Massages</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Best <em>Body Massage</em> in Aerocity</h2>
          <div className="service-list">
            {[
              '🌿 Full Body Swedish Massage',
              '💪 Deep Tissue Massage',
              '🧘 Thai Massage',
              '🌸 Aromatherapy Massage',
              '🪨 Hot Stone Therapy',
              '🔥 Russian Banya + Massage',
              '👣 Foot Reflexology',
              '🏃 Sports Massage',
              '💑 Couples Body Massage',
              '☯️ Balinese & Shiatsu Massage',
            ].map((service, i) => (
              <div key={i} className="service-item">{service}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Best Body Massage Centre in Aerocity</h2>
          <div className="why-grid">
            {[
              { icon: '🕐', title: 'Open 24/7', desc: 'Always available' },
              { icon: '🎓', title: 'Certified Therapists', desc: 'Male & Female options' },
              { icon: '🔒', title: '100% Privacy', desc: 'Private rooms' },
              { icon: '🧼', title: 'Hospital Hygiene', desc: 'Strict sanitization' },
              { icon: '💰', title: 'Best Prices', desc: 'Premium quality at fair rates' },
              { icon: '⭐', title: 'Excellent Reviews', desc: 'Loved by Aerocity guests' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Nearby Hotels & Areas</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Convenient for <em>Aerocity Guests</em></h2>
          <div className="nearby-grid">
            {[
              { icon: '🏨', name: 'JW Marriott Aerocity', distance: '2-3 min' },
              { icon: '🏨', name: 'Andaz Aerocity', distance: '3 min' },
              { icon: '🏨', name: 'Pullman Aerocity', distance: '3 min' },
              { icon: '🏨', name: 'Roseate House', distance: '4 min' },
              { icon: '✈️', name: 'IGI Airport T3', distance: '5-7 min' },
              { icon: '🚇', name: 'Aerocity Metro', distance: '3 min' },
            ].map((place, i) => (
              <div key={i} className="nearby-card">
                <div className="nearby-icon">{place.icon}</div>
                <h4>{place.name}</h4>
                <p>{place.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonial-section">
        <div className="testimonial-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Guest Feedback</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Aerocity Guests Say</h2>
          <div className="testimonial-mini-grid">
            {[
              { text: "Outstanding deep tissue massage. Exactly what I needed after a long flight. Very professional and convenient location.", author: "David Thompson", location: "Transit Passenger" },
              { text: "The couples massage was perfect. Beautiful ambiance and skilled therapists. Highly recommend for Aerocity visitors.", author: "Neha & Vikram", location: "JW Marriott Guests" },
            ].map((t, i) => (
              <div key={i} className="testimonial-mini">
                <p>"{t.text}"</p>
                <div className="author">{t.author}</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="content-section">
        <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Body Massage <em>Prices</em> in Aerocity</h2>
        <div style={{ maxWidth: '800px', margin: '32px auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontSize: '0.7rem' }}>Service</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontSize: '0.7rem' }}>Duration</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontSize: '0.7rem' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Full Body Swedish Massage', '60 min', '₹2,000'],
                ['Deep Tissue Massage', '90 min', '₹3,500'],
                ['Thai Massage', '75 min', '₹3,200'],
                ['Aromatherapy Massage', '75 min', '₹3,000'],
                ['Hot Stone Therapy', '75 min', '₹3,500'],
                ['Couples Body Massage', '120 min', '₹6,000'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(201,168,76,0.06)' }}>
                  <td style={{ padding: '12px', color: 'var(--cream)' }}>{row[0]}</td>
                  <td style={{ padding: '12px', color: 'var(--muted)' }}>{row[1]}</td>
                  <td style={{ padding: '12px', color: 'var(--gold)' }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="content-section" style={{ paddingTop: 0 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Body Massage in Aerocity</h2>
        <div className="faq-mini" style={{ maxWidth: '800px', margin: '32px auto' }}>
          {[
            { q: "Which is the best body massage in Aerocity?", a: "Russian Spa Centre offers one of the best body massage experiences near Aerocity with professional therapists and convenient 24/7 timing." },
            { q: "Do you offer couples body massage?", a: "Yes, we have beautiful private couples suites with synchronized full body massages." },
            { q: "How close are you to Aerocity hotels?", a: "We are just 2-5 minutes drive from most Aerocity hotels." },
            { q: "Are you open 24 hours?", a: "Yes, we operate 24/7 throughout the year." },
          ].map((faq, i) => (
            <div key={i} className="faq-mini-item">
              <div className="faq-mini-question">{faq.q} <span>+</span></div>
              <div className="faq-mini-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Ready for a Relaxing Body Massage in Aerocity?</h2>
        <p>Book instantly — open 24/7</p>
        <button id="whatsappCtaBtn" className="whatsapp-btn-large">
          Book on WhatsApp — Instant Confirmation
        </button>
        <p style={{ marginTop: '20px', fontSize: '0.75rem' }}>📞 Or call: <a href="tel:+918929979542" style={{ color: 'var(--dark)', fontWeight: 'bold' }}>+91 8929979542</a></p>
      </div>

      {/* Location */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 className="section-title">Visit Us for Body Massage in <em>Aerocity</em></h2>
        <p>Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037</p>
        <div style={{ background: '#2a2418', height: '250px', borderRadius: '8px', margin: '24px 0' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy"
          />
        </div>
      </div>

      <InteractiveElements />
    </>
  );
}