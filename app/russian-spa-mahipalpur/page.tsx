// app/spa-in-mahipalpur/page.tsx
import type { Metadata } from "next";
import InteractiveElements from "./interactive";

export const metadata: Metadata = {
  title: "Russian Spa in Mahipalpur | Authentic Russian Banya Centre Delhi | 24/7 Open",
  description:
    "Experience the finest Russian Spa in Mahipalpur. Authentic Russian Banya with Venik massage, luxury body massage & wellness therapies near IGI Airport & Aerocity. Open 24/7. Certified therapists. Call +91 8929979542",
  keywords:
    "russian spa in mahipalpur, best russian spa mahipalpur, authentic russian banya mahipalpur, russian spa near igi airport, russian body massage mahipalpur, russian spa mahipalpur, luxury russian spa mahipalpur, russian banya mahipalpur, venik massage mahipalpur, spa in mahipalpur, best spa mahipalpur, spa near igi airport, body massage mahipalpur, spa near aerocity, deep tissue massage mahipalpur, swedish massage mahipalpur, thai spa mahipalpur, couples spa mahipalpur, 24 hour spa mahipalpur, spa near delhi airport, mahipalpur massage centre, body to body massage mahipalpur, full body massage mahipalpur, affordable spa mahipalpur",
  openGraph: {
    title: "Best Russian Spa in Mahipalpur Near IGI Airport | Authentic Russian Banya Centre",
    description: "Experience authentic Russian Banya & luxury body massage in Mahipalpur. Just 10 minutes from IGI Airport. Open 24/7. Call +91 8929979542",
    url: "https://mahipalpurspaservicecentre.com/spa-in-mahipalpur",
    siteName: "Russian Spa Centre Mahipalpur",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/russian-spa-mahipalpur-og.png",
        width: 1200,
        height: 630,
        alt: "Best Russian Spa in Mahipalpur - Authentic Russian Banya Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Russian Spa in Mahipalpur Near IGI Airport",
    description: "Authentic Russian Banya & Luxury Massage in Mahipalpur. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/russian-spa-mahipalpur-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/spa-in-mahipalpur",
  },
};

export default function SpaMahipalpurPage() {
  return (
    <>
      <style>{`
        .page-hero {
          padding: 140px 60px 80px;
          background: linear-gradient(135deg, var(--dark-2) 0%, #1a1a1a 100%);
          border-bottom: 1px solid rgba(201,168,76,0.25);
          position: relative;
          overflow: hidden;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" opacity="0.05"><path fill="none" stroke="%23c9a84c" stroke-width="1" d="M400 100 L500 200 L400 300 L300 200 L400 100 Z M400 400 L500 500 L400 600 L300 500 L400 400 Z M200 300 L300 400 L200 500 L100 400 L200 300 Z M600 300 L700 400 L600 500 L500 400 L600 300 Z"/><circle cx="400" cy="200" r="30" fill="none" stroke="%23c9a84c" stroke-width="1"/><circle cx="400" cy="500" r="30" fill="none" stroke="%23c9a84c" stroke-width="1"/></svg>');
          background-repeat: repeat;
          background-size: 60px;
          pointer-events: none;
        }
        .page-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .page-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; text-align: center; z-index: 2; }
        .page-hero h1 { font-family: var(--font-display); font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 300; color: var(--cream); line-height: 1.2; letter-spacing: -0.02em; }
        .page-hero h1 em { color: var(--gold); font-style: italic; text-shadow: 0 0 15px rgba(201,168,76,0.3); }
        .page-hero p { font-size: 0.9rem; color: var(--muted); margin-top: 20px; max-width: 650px; margin-left: auto; margin-right: auto; line-height: 1.9; }

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
        .why-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); padding: 32px 24px; text-align: center; transition: transform 0.2s, border-color 0.2s; }
        .why-card:hover { border-color: rgba(201,168,76,0.3); transform: translateY(-2px); }
        .why-icon { font-size: 2rem; margin-bottom: 16px; }
        .why-card h3 { font-size: 1rem; color: var(--gold); margin-bottom: 8px; letter-spacing: 0.5px; }
        .why-card p { font-size: 0.75rem; color: var(--muted); line-height: 1.6; }

        .russian-badge {
          display: inline-block;
          background: linear-gradient(135deg, #0039a6 0%, #0039a6 33%, #ffffff 33%, #ffffff 66%, #d52b1e 66%, #d52b1e 100%);
          color: white;
          font-weight: bold;
          padding: 4px 12px;
          border-radius: 30px;
          font-size: 0.7rem;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

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

        .cta-section { background: linear-gradient(135deg, var(--gold) 0%, #b88c2e 100%); padding: 60px; text-align: center; }
        .cta-section h2 { font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 2.5rem); color: var(--dark); margin-bottom: 16px; }
        .cta-section p { color: rgba(10,8,6,0.8); margin-bottom: 24px; }

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

      {/* Hero Section with Russian Identity */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="russian-badge">AUTHENTIC RUSSIAN BANYA</div>
          <h1>Best <em>Russian Spa in Mahipalpur</em><br />Near IGI Airport Delhi</h1>
          <p>Experience the true Russian Banya tradition with Venik massage, steam rituals, and luxury body therapies. Just 10 minutes from IGI Airport Terminal 3 — open 24/7 for travelers and locals.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
            <a href="tel:+918929979542" className="btn-gold">📞 Call Now: +91 8929979542</a>
            <button id="whatsappHeroBtn" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              💬 Book via WhatsApp
            </button>
          </div>
        </div>
      </div>

      <div className="content-section">
        {/* Russian Spa Introduction */}
        <div className="two-column">
          <div>
            <div className="section-label">Authentic Russian Experience</div>
            <h2 className="section-title-small">India's Finest <em>Russian Spa</em> in Mahipalpur</h2>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              Welcome to Russian Spa Centre — the only authentic Russian spa in Mahipalpur. Our signature Russian Banya experience brings centuries-old Russian wellness traditions to Delhi NCR. From the traditional Venik (birch leaf) massage to contrast steam rituals, we offer an unparalleled spa journey.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
              Located strategically near IGI Airport and Aerocity, our Russian spa is the perfect destination for travelers seeking authentic European wellness. We combine Russian banya expertise with luxury hospitality — making us the most sought-after Russian spa in Mahipalpur.
            </p>
          </div>
          <div>
            <div className="why-grid" style={{ marginTop: 0 }}>
              {[
                { icon: '🌿', title: 'Authentic Venik Massage', desc: 'Traditional Russian birch leaf therapy' },
                { icon: '🔥', title: 'Russian Steam Ritual', desc: 'Contrast therapy for deep detox' },
                { icon: '🇷🇺', title: 'Imported Russian Equipment', desc: 'Genuine veniks & spa accessories' },
                { icon: '🎓', title: 'Russian-Trained Therapists', desc: 'Experts in traditional techniques' },
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

        {/* Russian Spa Services */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Russian Treatments</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Signature <em>Russian Spa</em> Services in Mahipalpur</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '700px', margin: '16px auto 32px' }}>
            We bring authentic Russian wellness traditions to Delhi NCR. Experience our exclusive Russian Banya treatments alongside premium massage therapies.
          </p>
          <div className="service-list">
            {[
              '🇷🇺 Authentic Russian Banya — Traditional Venik Treatment',
              '🌿 Venik Massage (Berezovy) — Birch Leaf Therapy',
              '🔥 Russian Steam Ritual — Contrast Temperature Experience',
              '💪 Russian Deep Tissue Massage — Sport Recovery',
              '❄️ Russian Ice Plunge — Traditional Cold Therapy',
              '🧘 Honey & Venik Scrub — Siberian Detox Treatment',
              '🌊 Swedish Massage — Classic Relaxation',
              '💪 Deep Tissue Massage — Chronic Pain Relief',
              '🧘 Thai Massage — Ancient Energy Work',
              '🌸 Aromatherapy Massage — Healing Essential Oils',
              '🪨 Hot Stone Therapy — Deep Warmth Relaxation',
              '💑 Russian Couples Spa — Romantic Experience for Two',
            ].map((service, i) => (
              <div key={i} className="service-item">{service}</div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Russian Spa */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Why Russian Spa Centre</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Makes Us the <em>Best Russian Spa in Mahipalpur</em></h2>
          <div className="why-grid">
            {[
              { icon: '🇷🇺', title: 'Authentic Russian Banya', desc: 'Only genuine Russian banya experience in Mahipalpur.' },
              { icon: '🌿', title: 'Imported Venik Bundles', desc: 'Birch & oak veniks sourced from Russia.' },
              { icon: '🕐', title: 'Open 24/7', desc: '365 days a year — including all holidays.' },
              { icon: '🎓', title: 'Russian-Trained Therapists', desc: 'Experts in traditional venik massage.' },
              { icon: '🔒', title: '100% Privacy', desc: 'Private rooms with complete discretion.' },
              { icon: '🧼', title: 'Hospital Hygiene', desc: 'Medical-grade disinfection protocols.' },
              { icon: '💰', title: 'Best Prices', desc: 'Luxury Russian spa at affordable rates.' },
              { icon: '⭐', title: '500+ 5-Star Reviews', desc: 'Trusted by thousands of clients.' },
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
          <div className="section-label" style={{ justifyContent: 'center' }}>Visit Our Russian Spa</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>Convenient for <em>Travelers & Residents</em></h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '32px' }}>
            Our Mahipalpur location is easily accessible from these popular Delhi NCR destinations:
          </p>
          <div className="nearby-grid">
            {[
              { icon: '✈️', name: 'IGI Airport T3', distance: '10 min drive' },
              { icon: '🏨', name: 'JW Marriott Aerocity', distance: '2 min drive' },
              { icon: '🏨', name: 'Andaz Aerocity', distance: '3 min drive' },
              { icon: '🏨', name: 'Pullman Aerocity', distance: '3 min drive' },
              { icon: '🏨', name: 'Roseate House', distance: '4 min drive' },
              { icon: '🚇', name: 'Aerocity Metro', distance: '5 min auto' },
              { icon: '🏢', name: 'Worldmark Aerocity', distance: '3 min drive' },
              { icon: '🏠', name: 'Vasant Kunj', distance: '10 min drive' },
              { icon: '🏠', name: 'Dwarka Sector 10', distance: '12 min drive' },
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

      {/* Testimonials Section with Russian Spa Focus */}
      <div className="testimonial-section">
        <div className="testimonial-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Experiences</div>
          <h2 className="section-title-small" style={{ textAlign: 'center' }}>What Our <em>Russian Spa Clients</em> Say</h2>
          <div className="testimonial-mini-grid">
            {[
              { text: "The best Russian spa in Mahipalpur! The authentic banya with venik massage is incredible. I've visited spas across Delhi NCR, but this is the only place that offers genuine Russian experience. The therapists are truly experts.", author: "Vikram Singh", location: "Mahipalpur Resident" },
              { text: "Found this Russian spa near IGI Airport during my layover. The steam ritual and birch leaf massage was exactly what I needed after a 14-hour flight. Professional, authentic, and very relaxing.", author: "James Mitchell", location: "Business Traveler from London" },
              { text: "The Russian couples spa package is wonderful! My wife and I experienced the traditional banya together. The private suite, venik massage, and contrast therapy made it unforgettable.", author: "Rahul Kapoor", location: "South Delhi" },
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

      {/* Pricing Table with Russian Services Highlighted */}
      <div className="content-section">
        <div className="section-label" style={{ justifyContent: 'center' }}>Affordable Russian Luxury</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Russian Spa <em>Prices</em> in Mahipalpur</h2>
        <div style={{ maxWidth: '800px', margin: '32px auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(201,168,76,0.3)' }}>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontSize: '0.7rem' }}>Russian Spa Service</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontSize: '0.7rem' }}>Duration</th>
                <th style={{ padding: '12px', textAlign: 'left', color: 'var(--gold)', fontSize: '0.7rem' }}>Price</th>
               </tr>
            </thead>
            <tbody>
              {[
                ['🇷🇺 Authentic Russian Banya + Venik Massage', '90 min', '₹3,500'],
                ['🌿 Russian Venik Massage (Birch/Oak)', '60 min', '₹2,800'],
                ['🔥 Russian Steam Ritual + Ice Plunge', '45 min', '₹2,200'],
                ['🇷🇺 Russian Deep Tissue Massage', '75 min', '₹3,200'],
                ['💆 Full Body Swedish Massage', '60 min', '₹2,000'],
                ['💪 Deep Tissue Massage', '90 min', '₹3,500'],
                ['🧘 Thai Massage', '75 min', '₹3,200'],
                ['🌸 Aromatherapy Massage', '75 min', '₹3,000'],
                ['💑 Russian Couples Spa Package', '120 min', '₹6,500'],
                ['🪨 Hot Stone Therapy', '75 min', '₹3,500'],
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
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)' }}>*20% off for first-time visitors on Russian Banya experience. Mention our website when booking.</p>
      </div>

      {/* FAQ Section - Russian Spa Focused */}
      <div className="content-section" style={{ paddingTop: 0 }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
        <h2 className="section-title-small" style={{ textAlign: 'center' }}>Questions About <em>Russian Spa in Mahipalpur</em></h2>
        <div className="faq-mini" style={{ maxWidth: '800px', margin: '32px auto' }}>
          {[
            { q: "Which is the best Russian spa in Mahipalpur near IGI Airport?", a: "Russian Spa Centre is the only authentic Russian spa in Mahipalpur, offering genuine Russian Banya with traditional Venik massage, imported equipment, and Russian-trained therapists. We're just 10 minutes from IGI Airport." },
            { q: "What is Russian Banya and Venik massage?", a: "Russian Banya is a traditional steam bath ritual followed by Venik massage using birch or oak leaves. The venik is used to gently massage the body, improving circulation, detoxifying skin, and providing deep relaxation. It's a centuries-old Russian wellness tradition." },
            { q: "Do you offer Russian spa for couples?", a: "Yes! Our Russian couples spa package includes a private banya session, synchronized venik massage, and romantic amenities. Perfect for anniversaries or special occasions." },
            { q: "Is Russian spa available 24/7 in Mahipalpur?", a: "Absolutely. We are open 24 hours a day, 7 days a week, 365 days a year — including all holidays. We never close." },
            { q: "How far is your Russian spa from Aerocity?", a: "Just 2-3 minutes drive from all Aerocity hotels including JW Marriott, Andaz, Pullman, and Holiday Inn." },
            { q: "Do you have male and female therapists for Russian treatments?", a: "Yes, we have both male and female certified Russian-trained therapists. You can request your preference when booking." },
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
        <h2>Ready for the Best Russian Spa Experience in Mahipalpur?</h2>
        <p>Book your authentic Russian Banya session now — we're open 24/7 and always ready to welcome you.</p>
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
          <h2 className="section-title">Visit Our <em>Russian Spa in Mahipalpur</em></h2>
          <p style={{ marginBottom: '24px' }}>Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037</p>
          <div style={{ background: '#2a2418', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', margin: '24px 0' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen 
              loading="lazy"
              title="Russian Spa Centre Mahipalpur Location"
            />
          </div>
          <div className="keyword-cloud">
            <span>russian spa in mahipalpur</span>
            <span>best russian spa mahipalpur</span>
            <span>authentic russian banya mahipalpur</span>
            <span>russian spa near igi airport</span>
            <span>venik massage mahipalpur</span>
            <span>russian body massage mahipalpur</span>
            <span>russian banya mahipalpur</span>
            <span>spa in mahipalpur</span>
            <span>best spa mahipalpur</span>
            <span>spa near igi airport</span>
            <span>body massage mahipalpur</span>
            <span>spa near aerocity</span>
            <span>deep tissue massage mahipalpur</span>
            <span>couples spa mahipalpur</span>
            <span>24 hour spa mahipalpur</span>
            <span>russian spa delhi ncr</span>
            <span>russian banya delhi</span>
          </div>
        </div>
      </div>

      {/* Interactive Elements (WhatsApp & FAQ) */}
      <InteractiveElements />
    </>
  );
}