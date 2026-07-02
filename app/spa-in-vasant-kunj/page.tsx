// app/spa-in-vasant-kunj/page.tsx
import type { Metadata } from "next";
import InteractiveElements from "./interactive";

export const metadata: Metadata = {
  title: "Spa in Vasant Kunj | Luxury Massage Centre South Delhi | Russian Spa",
  description:
    "Looking for the best spa in Vasant Kunj? Experience authentic Russian Banya, luxury body massage & wellness therapies in South Delhi. Open 24/7. Certified therapists. Call +91 8929979542",
  keywords:
    "spa in vasant kunj, best spa vasant kunj, spa near ambience mall vasant kunj, body massage vasant kunj, russian spa vasant kunj, luxury spa vasant kunj, massage centre vasant kunj, spa near dlf avenue, russian banya vasant kunj, deep tissue massage vasant kunj, swedish massage vasant kunj, thai spa vasant kunj, aromatherapy vasant kunj, couples spa vasant kunj, hot stone therapy vasant kunj, reflexology vasant kunj, sports massage vasant kunj, 24 hour spa vasant kunj, spa near saket, vasant kunj massage centre, russian spa delhi ncr, body to body massage vasant kunj, full body massage vasant kunj, spa for men vasant kunj, ladies spa vasant kunj, affordable spa vasant kunj, luxury spa south delhi",
  openGraph: {
    title: "Best Spa in Vasant Kunj | Luxury Russian Spa South Delhi",
    description: "Premium Russian Banya & body massage in Vasant Kunj. Close to Ambience Mall & DLF Avenue. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-vasant-kunj",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-vasant-kunj-og.png",
        width: 1200,
        height: 630,
        alt: "Best Spa in Vasant Kunj - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Vasant Kunj | Luxury Massage South Delhi",
    description: "Luxury Russian Spa & Massage in Vasant Kunj. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/spa-vasant-kunj-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-vasant-kunj/",
  },
};

export default function SpaVasantKunjPage() {
  return (
    <>
      <style>{`
        .page-hero {
          padding: 140px 60px 80px;
          background: var(--dark-2);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          position: relative;
          overflow: hidden;
        }
        .page-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .page-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; text-align: center; }
        .page-hero h1 { font-family: var(--font-display); font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 300; color: var(--cream); line-height: 1.2; }
        .page-hero h1 em { color: var(--gold); font-style: italic; }
        .page-hero p { font-size: 0.9rem; color: var(--muted); margin-top: 20px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.9; }

        .content-section { max-width: 1200px; margin: 0 auto; padding: 80px 60px; }
        .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 80px; }
        .two-column.reverse { direction: rtl; }
        .two-column.reverse > div { direction: ltr; }
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
          .two-column.reverse { direction: ltr; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .nearby-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-mini-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 40px 24px; }
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; }
          .nearby-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>South Delhi's Finest</div>
          <h1>Best <em>Spa in Vasant Kunj</em><br />Luxury Massage South Delhi</h1>
          <p>Experience authentic Russian Banya, luxury body massage, and world-class wellness therapies in the heart of South Delhi. Open 24/7 — your sanctuary in Vasant Kunj awaits.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a href="tel:+918929979542" className="btn-gold">📞 Call Now: +91 8929979542</a>
            <button id="whatsappHeroBtn" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 Book via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="content-section">
        {/* Why Vasant Kunj Section */}
        <div className="two-column">
          <div>
            <div className="section-label">Why Vasant Kunj?</div>
            <h2 className="section-title-small">South Delhi's <em>Premium Spa Destination</em></h2>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              Vasant Kunj has established itself as South Delhi's premier hub for luxury wellness and relaxation. As the best spa in Vasant Kunj, Russian Spa Centre offers unparalleled convenience for residents of South Delhi, shoppers at Ambience Mall, and professionals across the district.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
              Whether you're looking to unwind after a day of shopping, need relief from work stress, or simply want to experience authentic Russian wellness traditions, our Vasant Kunj location delivers luxury and authenticity that sets us apart from other spas in South Delhi.
            </p>
          </div>
          <div>
            <div className="why-grid" style={{ marginTop: 0 }}>
              {[
                { icon: '🛍️', title: 'Next to Ambience Mall', desc: 'Perfect post-shopping relaxation' },
                { icon: '🏢', title: 'DLF Avenue Nearby', desc: "Minutes from South Delhi's premium hub" },
                { icon: '🚇', title: 'Metro Accessible', desc: 'Vasant Kunj & Saket metro stations close' },
                { icon: '🚗', title: 'Ample Parking', desc: 'Complimentary secure parking for all guests' },
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

        {/* Services We Offer */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Treatments</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Luxury <em>Spa Services</em> in Vasant Kunj</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '700px', margin: '16px auto 32px' }}>
            We offer South Delhi's most comprehensive range of spa treatments — all available 24/7 at our Vasant Kunj location.
          </p>
          <div className="service-list">
            {[
              '🔥 Russian Banya Experience — Traditional Venik Treatment',
              '🌊 Swedish Massage — Classic Relaxation Therapy',
              '💪 Deep Tissue Massage — Chronic Pain Relief',
              '🧘 Thai Massage — Ancient Energy Work',
              '🌸 Aromatherapy Massage — Healing Essential Oils',
              '🪨 Hot Stone Therapy — Deep Warmth Relaxation',
              '👣 Reflexology — Whole Body Healing Through Feet',
              '☯️ Shiatsu Massage — Japanese Meridian Therapy',
              '🏃 Sports Massage — Performance Recovery',
              '💑 Couples Spa Package — Romantic Experience for Two',
              '🤰 Prenatal Massage — Safe Pregnancy Care',
              '🌺 Balinese Massage — Island Paradise Therapy',
            ].map((service, i) => (
              <div key={i} className="service-item">{service}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Makes Us the <em>Best Spa in Vasant Kunj</em></h2>
          <div className="why-grid">
            {[
              { icon: '🕐', title: 'Open 24/7', desc: '365 days a year — including all holidays. We never close.' },
              { icon: '🎓', title: 'Certified Therapists', desc: 'Internationally trained with 5+ years experience.' },
              { icon: '🔒', title: '100% Privacy', desc: 'Private rooms with complete discretion guaranteed.' },
              { icon: '🧼', title: 'Hospital Hygiene', desc: 'Medical-grade disinfection between every guest.' },
              { icon: '💰', title: 'Best Prices', desc: 'Luxury experience at affordable rates. No hidden charges.' },
              { icon: '⭐', title: '350+ 5-Star Reviews', desc: 'Trusted by thousands of satisfied clients.' },
              { icon: '💑', title: 'Couples Suites', desc: 'Private romantic suites for couples.' },
              { icon: '🚿', title: 'Premium Amenities', desc: 'Lockers, showers, robes, slippers included.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Locations */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Serving Nearby Areas</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Convenient for <em>South Delhi Residents</em></h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '32px' }}>
            Our Vasant Kunj location is easily accessible from these popular South Delhi destinations:
          </p>
          <div className="nearby-grid">
            {[
              { icon: '🛍️', name: 'Ambience Mall Vasant Kunj', distance: '2 min drive' },
              { icon: '🏬', name: 'DLF Avenue Saket', distance: '5 min drive' },
              { icon: '🏥', name: 'Fortis Hospital VK', distance: '3 min drive' },
              { icon: '🏢', name: 'Vasant Square Mall', distance: '4 min drive' },
              { icon: '🌳', name: 'Deer Park', distance: '7 min drive' },
              { icon: '🚇', name: 'Vasant Kunj Metro', distance: '5 min auto' },
              { icon: '🏠', name: 'Saket', distance: '8 min drive' },
              { icon: '🏠', name: 'Hauz Khas', distance: '12 min drive' },
              { icon: '🏠', name: 'Greater Kailash', distance: '15 min drive' },
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

      {/* Testimonials Section */}
      <div className="testimonial-section">
        <div className="testimonial-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Love</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Our <em>Vasant Kunj Clients</em> Say</h2>
          <div className="testimonial-mini-grid">
            {[
              { text: "Finally found a luxury spa in Vasant Kunj that delivers! The Russian Banya is incredible. After a long day of shopping at Ambience Mall, this is exactly what I needed.", author: "Priya Sharma", location: "Vasant Kunj Resident" },
              { text: "Best spa near Ambience Mall. The deep tissue massage was perfect for my back pain. Professional therapists and spotless facility. Highly recommend.", author: "Ankit Mehta", location: "Saket" },
              { text: "The couples spa package is amazing! My husband and I celebrated our anniversary here. Private suite, synchronized massage, and the ambiance was perfect.", author: "Neha Kapoor", location: "Hauz Khas" },
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

      {/* Pricing Table */}
      <div className="content-section">
        <div className="section-label" style={{ justifyContent: 'center' }}>Affordable Luxury</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Spa <em>Prices</em> in Vasant Kunj</h2>
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
                ['Russian Banya Experience', '60 min', '₹2,500'],
                ['Full Body Swedish Massage', '60 min', '₹2,000'],
                ['Deep Tissue Massage', '90 min', '₹3,500'],
                ['Thai Massage', '75 min', '₹3,200'],
                ['Aromatherapy Massage', '75 min', '₹3,000'],
                ['Couples Spa Package', '120 min', '₹6,000'],
                ['Hot Stone Therapy', '75 min', '₹3,500'],
                ['Reflexology', '45 min', '₹2,200'],
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
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)' }}>*15% off for first-time visitors. Mention our website when booking.</p>
      </div>

      {/* FAQ Section */}
      <div className="content-section" style={{ paddingTop: 0 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Questions About <em>Spa in Vasant Kunj</em></h2>
        <div className="faq-mini" style={{ maxWidth: '800px', margin: '32px auto' }}>
          {[
            { q: "Which is the best spa in Vasant Kunj near Ambience Mall?", a: "Russian Spa Centre is widely recognized as the best spa in Vasant Kunj, offering authentic Russian Banya, certified therapists, hospital-grade hygiene, and 24/7 availability — just minutes from Ambience Mall and DLF Avenue." },
            { q: "Do you offer body massage in Vasant Kunj for couples?", a: "Yes! We have dedicated couples suites with synchronized massages, private rooms, and romantic amenities. Perfect for anniversaries or date nights in South Delhi." },
            { q: "Is Russian spa available in Vasant Kunj?", a: "Absolutely. We are the premier spa in Vasant Kunj offering authentic Russian Banya with traditional Venik treatments, imported from Russia." },
            { q: "What are your spa timings in Vasant Kunj?", a: "We are open 24 hours a day, 7 days a week, 365 days a year — including all holidays. We never close." },
            { q: "How far is your spa from Saket?", a: "Just 5-8 minutes drive from Saket, DLF Avenue, and Select Citywalk. Very convenient for South Delhi residents." },
            { q: "Do you have male and female therapists?", a: "Yes, we have both male and female certified therapists. You can request your preference when booking." },
          ].map((faq, i) => (
            <div key={i} className="faq-mini-item">
              <div className="faq-mini-question">{faq.q} <span>+</span></div>
              <div className="faq-mini-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready for the Best Spa Experience in Vasant Kunj?</h2>
        <p>Book your appointment now — we're open 24/7 and always ready to welcome you.</p>
        <button id="whatsappCtaBtn" className="whatsapp-btn-large">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.914 3.149.915h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.068-.248-.078-.57-.182-.978-.335-1.526-.575-2.55-1.862-2.628-1.945-.078-.083-.628-.835-.628-1.592 0-.757.399-1.13.542-1.284.142-.154.31-.192.414-.192.104 0 .207.004.298.142.089.139.377.931.377.931s.127.236.031.381c-.096.145-.238.238-.341.381-.102.142-.187.261-.056.457.13.196.585.967 1.254 1.567.862.774 1.59.984 1.82 1.094.23.11.507.037.68-.142.173-.179.454-.593.569-.784.115-.191.23-.191.381-.114.152.076.962.454 1.134.537.172.083.284.124.326.191.042.067.042.389-.102.794z"/>
          </svg>
          Book on WhatsApp — Instant Confirmation
        </button>
        <p style={{ marginTop: '20px', fontSize: '0.75rem' }}>📞 Or call us directly: <a href="tel:+918929979542" style={{ color: 'var(--dark)', fontWeight: 'bold' }}>+91 8929979542</a></p>
      </div>

      {/* Location & Map */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Visit Our <em>Spa in Vasant Kunj</em></h2>
          <p style={{ marginBottom: '24px' }}>Near Ambience Mall, Vasant Kunj, New Delhi — 110070</p>
          <div style={{ background: '#2a2418', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', margin: '24px 0' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sVasant%20Kunj%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen 
              loading="lazy"
              title="Russian Spa Centre Vasant Kunj Location"
            />
          </div>
          <div className="keyword-cloud">
            <span>spa in vasant kunj</span>
            <span>best spa vasant kunj</span>
            <span>spa near ambience mall</span>
            <span>body massage vasant kunj</span>
            <span>russian spa vasant kunj</span>
            <span>luxury spa vasant kunj</span>
            <span>massage centre vasant kunj</span>
            <span>spa near saket</span>
            <span>russian banya vasant kunj</span>
            <span>deep tissue massage vasant kunj</span>
            <span>swedish massage vasant kunj</span>
            <span>thai spa vasant kunj</span>
            <span>couples spa vasant kunj</span>
            <span>24 hour spa vasant kunj</span>
            <span>spa near dlf avenue</span>
            <span>vasant kunj massage centre</span>
            <span>body to body massage vasant kunj</span>
            <span>full body massage vasant kunj</span>
            <span>affordable spa vasant kunj</span>
          </div>
        </div>
      </div>

      {/* Interactive Elements (WhatsApp & FAQ) */}
      <InteractiveElements />
    </>
  );
}