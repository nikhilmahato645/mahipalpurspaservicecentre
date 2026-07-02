// app/body-massage-vasant-kunj/page.tsx
import type { Metadata } from "next";
import InteractiveElements from "../spa-in-mahipalpur/interactive"; // Reuse if same component works

export const metadata: Metadata = {
  title: "Body Massage in Vasant Kunj | Luxury Spa Centre Vasant Kunj Delhi",
  description:
    "Experience the best body massage in Vasant Kunj at Russian Spa Centre. Full body massage, deep tissue, Swedish, Thai, couples massage & more. Just 10-12 mins from IGI Airport & Aerocity. Open 24/7. Call +91 8929979542",
  keywords:
    "body massage vasant kunj, best body massage vasant kunj, spa in vasant kunj, full body massage vasant kunj, deep tissue massage vasant kunj, swedish massage vasant kunj, thai massage vasant kunj, couples massage vasant kunj, massage centre vasant kunj, russian spa vasant kunj, luxury spa vasant kunj, massage near vasant kunj, body to body massage vasant kunj, aromatherapy massage vasant kunj, hot stone massage vasant kunj, reflexology vasant kunj, sports massage vasant kunj, 24 hour massage vasant kunj, spa near vasant kunj delhi, massage in vasant kunj delhi",
  openGraph: {
    title: "Best Body Massage in Vasant Kunj | Russian Spa Centre",
    description: "Premium full body massage & wellness therapies in Vasant Kunj. 10-12 mins from IGI Airport. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/body-massage-vasant-kunj",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png", // You can change image later
        width: 1200,
        height: 630,
        alt: "Best Body Massage in Vasant Kunj - Russian Spa Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Body Massage in Vasant Kunj Delhi",
    description: "Luxury Full Body Massage & Spa in Vasant Kunj. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/body-massage-vasant-kunj/",
  },
};

export default function BodyMassageVasantKunjPage() {
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
          <div className="section-label" style={{ justifyContent: 'center' }}>Vasant Kunj's Best</div>
          <h1>Best <em>Body Massage in Vasant Kunj</em><br />Delhi</h1>
          <p>Experience premium full body massage, deep tissue, Swedish, Thai & Russian therapies at Russian Spa Centre. Just 10-12 minutes from IGI Airport. Open 24/7 with certified therapists.</p>
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
            <h2 className="section-title-small">Premium <em>Wellness Destination</em> in South Delhi</h2>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              Vasant Kunj is one of Delhi's most affluent and well-connected areas. Our spa is ideally located to serve residents of Vasant Kunj, Vasant Vihar, Munirka, and nearby sectors.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
              Whether you're looking for a relaxing full body massage after a long day or deep tissue therapy for muscle recovery, we bring luxury wellness right to your neighborhood with authentic Russian techniques and modern therapies.
            </p>
          </div>
          <div>
            <div className="why-grid" style={{ marginTop: 0 }}>
              {[
                { icon: '✈️', title: '12 min from IGI Airport', desc: 'Convenient for travelers and airport staff' },
                { icon: '🏠', title: 'Heart of Vasant Kunj', desc: 'Easily accessible from all sectors' },
                { icon: '🛍️', title: 'Near DLF Promenade & Ambience Mall', desc: 'Perfect after shopping or work' },
                { icon: '🚗', title: 'Free Parking Available', desc: 'Secure parking for all clients' },
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

        {/* Services We Offer - Focused on Body Massage */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Signature Massages</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Best <em>Body Massage Services</em> in Vasant Kunj</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '700px', margin: '16px auto 32px' }}>
            Professional body massage treatments tailored for relaxation, pain relief, and rejuvenation.
          </p>
          <div className="service-list">
            {[
              '🌿 Full Body Swedish Massage — Ultimate Relaxation',
              '💪 Deep Tissue Massage — Muscle Knots & Tension Relief',
              '🔥 Russian Banya + Venik Massage',
              '🧘 Thai Massage — Stretching & Energy Flow',
              '🌸 Aromatherapy Massage — Essential Oil Healing',
              '🪨 Hot Stone Therapy — Deep Muscle Warmth',
              '👣 Foot Reflexology — Full Body Healing',
              '☯️ Shiatsu & Balinese Massage',
              '🏃 Sports Massage — Recovery for Active People',
              '💑 Couples Body Massage Package',
            ].map((service, i) => (
              <div key={i} className="service-item">{service}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Makes Us the <em>Best Massage Centre in Vasant Kunj</em></h2>
          <div className="why-grid">
            {[
              { icon: '🕐', title: 'Open 24/7', desc: 'Available round the clock for your convenience' },
              { icon: '🎓', title: 'Certified Therapists', desc: 'Highly trained male & female therapists' },
              { icon: '🔒', title: 'Complete Privacy', desc: 'Private rooms with full discretion' },
              { icon: '🧼', title: 'Hygienic Standards', desc: 'Medical-grade cleaning after every session' },
              { icon: '💰', title: 'Best Value', desc: 'Premium quality at reasonable prices' },
              { icon: '⭐', title: '500+ Happy Clients', desc: 'Excellent reviews from Vasant Kunj residents' },
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
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Convenient for <em>Vasant Kunj & Surroundings</em></h2>
          <div className="nearby-grid">
            {[
              { icon: '🏠', name: 'Vasant Kunj Sector A,B,C,D', distance: 'Local' },
              { icon: '🏠', name: 'Vasant Vihar', distance: '8-10 min' },
              { icon: '🛍️', name: 'DLF Promenade Mall', distance: '5 min' },
              { icon: '✈️', name: 'IGI Airport T3', distance: '12 min' },
              { icon: '🏨', name: 'Aerocity Hotels', distance: '10-12 min' },
              { icon: '🏠', name: 'Munirka & RK Puram', distance: '10 min' },
              { icon: '🛍️', name: 'Ambience Mall Vasant Kunj', distance: '6 min' },
              { icon: '🏠', name: 'Saket & Malviya Nagar', distance: '15-18 min' },
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
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Love</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Vasant Kunj Clients Say</h2>
          <div className="testimonial-mini-grid">
            {[
              { text: "The best full body massage I've had in Delhi. Deep tissue was excellent and the therapists are very professional. Highly recommend for Vasant Kunj residents.", author: "Anjali Sharma", location: "Vasant Kunj" },
              { text: "Perfect after a long flight. Got a Swedish + Aromatherapy combo. Felt completely rejuvenated. Clean and peaceful environment.", author: "Arjun Mehra", location: "Frequent Traveler" },
              { text: "Couples massage was amazing! Great ambiance and skilled therapists. We'll definitely come back.", author: "Priya & Rohan", location: "Vasant Vihar" },
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
        <div className="section-label" style={{ justifyContent: 'center' }}>Our Prices</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Body <em>Massage Prices</em> in Vasant Kunj</h2>
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
                ['Russian Banya Experience', '60 min', '₹2,500'],
                ['Hot Stone Therapy', '75 min', '₹3,500'],
                ['Couples Body Massage', '120 min', '₹6,000'],
                ['Foot Reflexology', '45 min', '₹2,200'],
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
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)' }}>*First-time visitors get 15% off. Mention website at booking.</p>
      </div>

      {/* FAQ Section */}
      <div className="content-section" style={{ paddingTop: 0 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Common Questions About <em>Body Massage in Vasant Kunj</em></h2>
        <div className="faq-mini" style={{ maxWidth: '800px', margin: '32px auto' }}>
          {[
            { q: "Which is the best body massage centre in Vasant Kunj?", a: "Russian Spa Centre is considered one of the best for body massage in Vasant Kunj, offering professional therapists, premium ambiance, and 24/7 availability." },
            { q: "Do you offer couples body massage in Vasant Kunj?", a: "Yes, we have beautiful private couples suites with synchronized full body massages." },
            { q: "How far is your centre from Vasant Kunj?", a: "We are very conveniently located and easily reachable from all sectors of Vasant Kunj within 5-12 minutes." },
            { q: "Are you open 24 hours for massage in Vasant Kunj?", a: "Yes, we operate 24/7 throughout the year." },
            { q: "Do you provide male and female therapists?", a: "Yes, both male and female certified therapists are available. You can choose your preference." },
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
        <h2>Ready for a Rejuvenating Body Massage in Vasant Kunj?</h2>
        <p>Book your session now — open 24/7 with instant confirmation.</p>
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
          <h2 className="section-title">Visit Us for Body Massage in <em>Vasant Kunj</em></h2>
          <p style={{ marginBottom: '24px' }}>Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037 (Serving Vasant Kunj)</p>
          <div style={{ background: '#2a2418', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', margin: '24px 0' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre - Body Massage Vasant Kunj"
            />
          </div>
          <div className="keyword-cloud">
            <span>body massage vasant kunj</span>
            <span>best body massage vasant kunj</span>
            <span>full body massage vasant kunj</span>
            <span>spa in vasant kunj</span>
            <span>deep tissue massage vasant kunj</span>
            <span>swedish massage vasant kunj</span>
            <span>couples massage vasant kunj</span>
            <span>massage centre vasant kunj</span>
            <span>russian spa vasant kunj</span>
            <span>24 hour massage vasant kunj</span>
          </div>
        </div>
      </div>

      <InteractiveElements />
    </>
  );
}