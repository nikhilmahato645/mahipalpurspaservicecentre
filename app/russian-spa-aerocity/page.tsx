// app/russian-spa-aerocity/page.tsx
import type { Metadata } from "next";
import InteractiveElements from "../spa-in-mahipalpur/interactive";

export const metadata: Metadata = {
  title: "Russian Spa in Aerocity Delhi | Authentic Russian Banya Near IGI Airport | 24/7",
  description:
    "Experience authentic Russian Spa & Banya in Aerocity at Russian Spa Centre. Traditional Venik treatment, luxury body massage & wellness therapies. Just minutes from Aerocity hotels and IGI Airport. Open 24/7. Call +91 8929979542",
  keywords:
    "russian spa aerocity, russian banya aerocity, best russian spa aerocity, authentic russian banya delhi, russian spa near igi airport, russian massage aerocity, venik massage aerocity, luxury russian spa aerocity, body massage aerocity, couples russian spa aerocity, 24 hour russian spa aerocity, russian spa near aerocity hotels, banya near delhi airport",
  openGraph: {
    title: "Best Russian Spa in Aerocity | Authentic Russian Banya",
    description: "Traditional Russian Banya & Venik Treatment in Aerocity. Minutes from hotels & IGI Airport. Open 24/7.",
    url: "https://mahipalpurspaservicecentre.com/russian-spa-aerocity",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Authentic Russian Spa in Aerocity",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Russian Spa & Banya in Aerocity Delhi",
    description: "Authentic Russian Wellness Experience Near Aerocity Hotels & Airport. Open 24/7",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/russian-spa-aerocity/",
  },
};

export default function RussianSpaAerocityPage() {
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
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .nearby-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-mini-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 40px 24px; }
        }
        @media (max-width: 480px) {
          .why-grid, .nearby-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero Section */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Authentic Russian Experience</div>
          <h1>Best <em>Russian Spa in Aerocity</em><br />Near IGI Airport Delhi</h1>
          <p>Experience traditional Russian Banya with authentic Venik treatment, luxury body massage, and complete wellness therapies. Just minutes from Aerocity hotels and IGI Airport Terminal 3. Open 24/7.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a href="tel:+918929979542" className="btn-gold">📞 Call Now: +91 8929979542</a>
            <button id="whatsappHeroBtn" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 Book via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="content-section">
        {/* Why Russian Spa Section */}
        <div className="two-column">
          <div>
            <div className="section-label">Why Russian Spa?</div>
            <h2 className="section-title-small">Traditional <em>Russian Banya</em> in Aerocity</h2>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              Bring the authentic Russian wellness tradition to Aerocity. Our Russian Spa Centre offers genuine Banya experience with imported Venik (birch & oak bundles), steam, and expert therapists trained in Russian techniques.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
              Perfect for travelers staying in Aerocity hotels or those looking for a unique and deeply relaxing experience near IGI Airport.
            </p>
          </div>
          <div>
            <div className="why-grid" style={{ marginTop: 0 }}>
              {[
                { icon: '🧖‍♂️', title: 'Authentic Russian Banya', desc: 'Traditional steam + Venik massage' },
                { icon: '🌿', title: 'Imported Venik', desc: 'Fresh birch & oak bundles from Russia' },
                { icon: '✈️', title: '5-7 min from Airport', desc: 'Ideal for layovers & transit' },
                { icon: '🏨', title: 'Near Aerocity Hotels', desc: 'JW Marriott, Andaz, Pullman & more' },
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
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Russian Treatments</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Signature <em>Russian Spa Services</em></h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '700px', margin: '16px auto 32px' }}>
            Authentic Russian wellness combined with modern luxury therapies.
          </p>
          <div className="service-list">
            {[
              '🔥 Traditional Russian Banya Experience',
              '🌿 Venik Massage (Birch & Oak Bundles)',
              '🧖‍♂️ Russian Steam Room Session',
              '💪 Russian Deep Tissue Massage',
              '🌊 Swedish + Russian Fusion Massage',
              '🪨 Hot Stone Therapy with Banya',
              '👣 Russian Reflexology',
              '💑 Couples Russian Banya Package',
              '🌸 Aromatherapy after Banya',
              '🏃 Post-Flight Recovery Russian Package',
            ].map((service, i) => (
              <div key={i} className="service-item">{service}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Best <em>Russian Spa in Aerocity</em></h2>
          <div className="why-grid">
            {[
              { icon: '🕐', title: 'Open 24/7', desc: 'Available anytime — perfect for travelers' },
              { icon: '🎓', title: 'Certified Russian Therapists', desc: 'Specially trained in Banya techniques' },
              { icon: '🔒', title: 'Complete Privacy', desc: 'Private Banya suites' },
              { icon: '🧼', title: 'Highest Hygiene Standards', desc: 'Medical-grade cleaning' },
              { icon: '💰', title: 'Best Value in Delhi', desc: 'Authentic experience at fair prices' },
              { icon: '⭐', title: 'Authentic Experience', desc: 'Most genuine Russian Banya in Delhi NCR' },
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
          <div className="section-label" style={{ justifyContent: 'center' }}>Convenient Location</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Serving <em>Aerocity Hotels</em></h2>
          <div className="nearby-grid">
            {[
              { icon: '🏨', name: 'JW Marriott Aerocity', distance: '2-3 min' },
              { icon: '🏨', name: 'Andaz Aerocity', distance: '3 min' },
              { icon: '🏨', name: 'Pullman Aerocity', distance: '3 min' },
              { icon: '🏨', name: 'Roseate House', distance: '4 min' },
              { icon: '✈️', name: 'IGI Airport T3', distance: '5-7 min' },
              { icon: '🚇', name: 'Aerocity Metro Station', distance: '3 min' },
              { icon: '🏢', name: 'Worldmark Aerocity', distance: '2 min' },
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
          <div className="section-label" style={{ justifyContent: 'center' }}>Guest Experiences</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Our <em>Russian Spa Clients</em> Say</h2>
          <div className="testimonial-mini-grid">
            {[
              { text: "The Russian Banya was incredibly authentic — best I've experienced outside Russia. Perfect after a long international flight. Highly recommended!", author: "Alexei Ivanov", location: "Russian Traveler" },
              { text: "Amazing Venik massage! The therapists really know the traditional technique. Felt completely rejuvenated. Will come back every time I'm in Delhi.", author: "Priya Malhotra", location: "Andaz Aerocity Guest" },
              { text: "Unique and relaxing experience. The couples Russian Banya package was perfect for our anniversary. Great location near the airport.", author: "Rahul & Anika", location: "Aerocity" },
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
        <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Russian Spa <em>Packages</em></h2>
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
                ['Traditional Russian Banya + Venik', '60 min', '₹2,800'],
                ['Russian Banya Experience', '90 min', '₹3,500'],
                ['Russian Deep Tissue Massage', '75 min', '₹3,200'],
                ['Couples Russian Banya Package', '120 min', '₹6,500'],
                ['Russian Banya + Swedish Massage', '90 min', '₹3,800'],
                ['Post-Flight Recovery Package', '60 min', '₹2,500'],
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
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)' }}>*15% off for first-time visitors. Mention website when booking.</p>
      </div>

      {/* FAQ */}
      <div className="content-section" style={{ paddingTop: 0 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Russian Spa in Aerocity</h2>
        <div className="faq-mini" style={{ maxWidth: '800px', margin: '32px auto' }}>
          {[
            { q: "Is this an authentic Russian Spa in Aerocity?", a: "Yes. We offer genuine Russian Banya with traditional Venik treatment using imported bundles and techniques followed in Russia." },
            { q: "How far is your Russian Spa from Aerocity hotels?", a: "Just 2-5 minutes drive from JW Marriott, Andaz, Pullman, Roseate House and other Aerocity hotels." },
            { q: "Do you offer couples Russian Banya?", a: "Yes, we have private couples suites specially designed for romantic Russian Banya experience." },
            { q: "What are your timings?", a: "We are open 24 hours a day, 7 days a week — perfect for flight arrivals and layovers." },
            { q: "Do you have experienced therapists?", a: "Yes, our therapists are specially trained in Russian Banya and Venik massage techniques." },
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
        <h2>Ready for an Authentic Russian Spa Experience in Aerocity?</h2>
        <p>Book your traditional Banya session now — open 24/7</p>
        <button id="whatsappCtaBtn" className="whatsapp-btn-large">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.914 3.149.915h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.068-.248-.078-.57-.182-.978-.335-1.526-.575-2.55-1.862-2.628-1.945-.078-.083-.628-.835-.628-1.592 0-.757.399-1.13.542-1.284.142-.154.31-.192.414-.192.104 0 .207.004.298.142.089.139.377.931.377.931s.127.236.031.381c-.096.145-.238.238-.341.381-.102.142-.187.261-.056.457.13.196.585.967 1.254 1.567.862.774 1.59.984 1.82 1.094.23.11.507.037.68-.142.173-.179.454-.593.569-.784.115-.191.23-.191.381-.114.152.076.962.454 1.134.537.172.083.284.124.326.191.042.067.042.389-.102.794z"/>
          </svg>
          Book on WhatsApp — Instant Confirmation
        </button>
        <p style={{ marginTop: '20px', fontSize: '0.75rem' }}>📞 Or call: <a href="tel:+918929979542" style={{ color: 'var(--dark)', fontWeight: 'bold' }}>+91 8929979542</a></p>
      </div>

      {/* Location & Map */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Visit Our <em>Russian Spa Near Aerocity</em></h2>
          <p style={{ marginBottom: '24px' }}>Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037</p>
          <div style={{ background: '#2a2418', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', margin: '24px 0' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre Aerocity Location"
            />
          </div>
          <div className="keyword-cloud">
            <span>russian spa aerocity</span>
            <span>russian banya aerocity</span>
            <span>authentic russian banya</span>
            <span>russian spa near airport</span>
            <span>venik massage aerocity</span>
            <span>russian massage delhi</span>
            <span>24 hour russian spa</span>
          </div>
        </div>
      </div>

      <InteractiveElements />
    </>
  );
}