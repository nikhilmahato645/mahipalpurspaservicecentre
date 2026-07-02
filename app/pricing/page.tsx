// app/pricing/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Prices & Packages | Best Massage Rates in Mahipalpur | Russian Spa Centre 2026",
  description:
    "Affordable luxury spa rates in Delhi NCR. Russian Banya ₹2,500, Swedish Massage ₹2,000, Deep Tissue ₹3,500, Couples Package ₹6,000. Best price guarantee. 15% off first visit. Transparent pricing with zero hidden charges. Open 24/7 near IGI Airport. Call +91 8929979542",
  keywords:
    "spa price list, massage rates Delhi, affordable spa near me, Russian banya cost, body massage charges, cheap massage Mahipalpur, luxury spa prices, couples massage rate, deep tissue price, Swedish massage cost, aromatherapy rates, Thai massage charges, hot stone therapy price, reflexology cost, sports massage rate, spa packages Delhi, wellness treatment prices, best value spa, budget friendly massage, premium spa rates, Russian Spa Centre pricing, massage deals Aerocity, spa offers Mahipalpur, 24 hours spa cost, body to body massage price, full body massage charges, spa near airport rates",
  openGraph: {
    title: "Spa Prices & Packages | Best Massage Rates Mahipalpur | Russian Spa Centre",
    description: "Transparent pricing for all spa services. Russian Banya from ₹2,500, Full Body Massage from ₹2,000. 15% off first visit. No hidden charges.",
    url: "https://mahipalpurspaservicecentre.com/pricing",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/pricing-og.png",
        width: 1200,
        height: 630,
        alt: "Spa Prices and Packages Mahipalpur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Prices & Best Massage Rates | Russian Spa Centre",
    description: "Affordable luxury spa rates. Best price guarantee. Open 24/7.",
    images: ["https://mahipalpurspaservicecentre.com/pricing-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/pricing/",
  },
};

export default function PricingPage() {
  return (
    <>
      <style>{`
        .pricing-hero {
          padding: 140px 60px 80px;
          background: var(--dark-2);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          position: relative; overflow: hidden;
        }
        .pricing-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 50% 70% at 90% 40%, rgba(201,168,76,0.07) 0%, transparent 60%);
        }
        .pricing-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 32px; }
        .pricing-hero h1 { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 300; color: var(--cream); line-height: 1.2; }
        .pricing-hero h1 em { color: var(--gold); font-style: italic; }
        .offer-box { background: var(--gold); padding: 24px 32px; text-align: center; }
        .offer-box .pct { font-family: var(--font-display); font-size: 3rem; font-weight: 300; color: var(--dark); line-height: 1; }
        .offer-box .off-label { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(10,8,6,0.7); }
        .offer-box .off-note { font-size: 0.75rem; color: var(--dark); margin-top: 4px; font-weight: 500; }

        .pricing-content { max-width: 1200px; margin: 0 auto; padding: 80px 60px; }

        .main-packages { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-bottom: 2px; }
        .pkg-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); padding: 40px 28px; text-align: center; position: relative; transition: border-color 0.3s; }
        .pkg-card.popular { background: var(--dark-2); border-color: rgba(201,168,76,0.35); }
        .popular-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--dark); font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; padding: 4px 14px; font-weight: 600; white-space: nowrap; }
        .pkg-icon { font-size: 2rem; margin-bottom: 16px; }
        .pkg-name { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
        .pkg-price { font-family: var(--font-display); font-size: 2.8rem; color: var(--gold); font-weight: 300; line-height: 1; margin-bottom: 4px; }
        .pkg-duration { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-bottom: 24px; }
        .pkg-includes { text-align: left; border-top: 1px solid rgba(201,168,76,0.12); padding-top: 20px; }
        .pkg-includes li { font-size: 0.78rem; color: var(--muted); padding: 5px 0; display: flex; align-items: flex-start; gap: 8px; }
        .pkg-includes li::before { content: '✓'; color: var(--gold); flex-shrink: 0; font-size: 0.72rem; margin-top: 2px; }
        .pkg-cta { display: block; width: 100%; margin-top: 24px; background: var(--gold); color: var(--dark); padding: 12px; font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 500; text-align: center; transition: background 0.2s; cursor: pointer; border: none; }
        .pkg-cta:hover { background: var(--gold-light); }
        .pkg-cta.outline { background: transparent; border: 1px solid rgba(201,168,76,0.3); color: var(--gold); }
        .pkg-cta.outline:hover { background: var(--gold); color: var(--dark); }

        .table-section { margin-top: 80px; }
        .table-label { margin-bottom: 32px; }
        .price-table { width: 100%; border-collapse: collapse; }
        .price-table thead tr { border-bottom: 1px solid rgba(201,168,76,0.3); }
        .price-table th { font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); padding: 12px 20px; text-align: left; font-weight: 500; }
        .price-table td { padding: 18px 20px; font-size: 0.85rem; color: var(--muted); border-bottom: 1px solid rgba(201,168,76,0.06); }
        .price-table tr:hover td { background: rgba(201,168,76,0.03); color: var(--cream); }
        .price-table td:first-child { color: var(--cream); font-weight: 400; }
        .price-table td.price-col { color: var(--gold); font-family: var(--font-display); font-size: 1.1rem; font-weight: 300; }

        .comparison-section { margin-top: 80px; background: linear-gradient(135deg, var(--dark-3) 0%, var(--dark-2) 100%); padding: 56px; border-radius: 8px; }
        .comparison-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 40px; }
        .comparison-card { text-align: center; padding: 24px; background: rgba(255,255,255,0.02); border-radius: 8px; }
        .comparison-card .rate { font-family: var(--font-display); font-size: 2rem; color: var(--gold); margin: 12px 0; }
        .comparison-card .save { color: #4CAF50; font-size: 0.75rem; margin-top: 8px; }

        .all-included { margin-top: 80px; background: var(--dark-3); border: 1px solid rgba(201,168,76,0.12); padding: 56px; }
        .all-included-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 40px; }
        .ai-item { display: flex; gap: 16px; align-items: flex-start; }
        .ai-icon { font-size: 1.4rem; flex-shrink: 0; }
        .ai-text strong { display: block; font-size: 0.82rem; color: var(--cream); font-weight: 500; margin-bottom: 4px; }
        .ai-text p { font-size: 0.78rem; color: var(--muted); line-height: 1.7; }

        .custom-section { margin-top: 80px; display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .custom-card { padding: 48px; background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); }
        .custom-card h3 { font-family: var(--font-display); font-size: 1.5rem; color: var(--gold); margin-bottom: 12px; font-weight: 400; }
        .custom-card p { font-size: 0.82rem; color: var(--muted); line-height: 1.8; margin-bottom: 24px; }

        .keyword-cloud { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 40px 20px; max-width: 1200px; margin: 0 auto; border-top: 1px solid rgba(201,168,76,0.1); margin-top: 40px; }
        .keyword-cloud span { font-size: 0.65rem; color: var(--muted); background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; }

        @media (max-width: 1024px) {
          .main-packages { grid-template-columns: repeat(2, 1fr); }
          .all-included-grid { grid-template-columns: 1fr 1fr; }
          .comparison-grid { grid-template-columns: 1fr; }
          .custom-section { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .pricing-hero, .pricing-content { padding-left: 24px; padding-right: 24px; }
          .pricing-hero { padding-top: 120px; padding-bottom: 60px; }
          .main-packages { grid-template-columns: 1fr; }
          .all-included-grid { grid-template-columns: 1fr; }
          .price-table th, .price-table td { padding: 12px 8px; font-size: 0.75rem; }
          .all-included { padding: 32px 24px; }
          .comparison-section { padding: 32px 24px; }
        }
      `}</style>

      <div className="pricing-hero">
        <div className="pricing-hero-bg" />
        <div className="pricing-hero-inner">
          <div>
            <div className="section-label">Affordable Luxury</div>
            <h1>Best Value <em>Spa Rates</em><br />in Delhi NCR</h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '16px' }}>Compare our prices with any 5-star hotel spa — you'll save 40-60% without compromising quality. Zero hidden fees, guaranteed.</p>
          </div>
          <div className="offer-box">
            <div className="pct">15%</div>
            <div className="off-label">Off Your</div>
            <div className="off-note">First Visit — Mention This Website</div>
          </div>
        </div>
      </div>

      <div className="pricing-content">

        {/* MAIN PACKAGES */}
        <div className="section-label">Featured Packages</div>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>Most <em>Popular</em> Choices</h2>
        <div className="main-packages">
          {[
            { icon: '🔥', name: 'Russian Banya', price: '₹2,500', duration: '60 Minutes', includes: ['Traditional Venik Treatment', 'Steam Bath Session', 'Herbal Tea', 'Private Room', 'Shower Facilities'], popular: false },
            { icon: '💆', name: 'Full Body Massage', price: '₹2,000', duration: '60 Minutes', includes: ['Swedish or Deep Tissue', 'Premium Massage Oils', 'Shoulder & Neck Focus', 'Complimentary Refreshments', 'Hot Towels'], popular: true },
            { icon: '💑', name: 'Couples Package', price: '₹6,000', duration: '120 Minutes', includes: ['Russian Banya Access', 'Synchronized Massage', 'Private Couples Room', 'Champagne & Chocolates', 'Side-by-Side Treatment'], popular: false },
            { icon: '💪', name: 'Deep Tissue', price: '₹3,500', duration: '90 Minutes', includes: ['Therapeutic Deep Massage', 'Trigger Point Release', 'Hot Towel Treatment', 'Pain Relief Focus', 'Post-Session Stretch'], popular: false },
          ].map((p, i) => (
            <div key={i} className={`pkg-card${p.popular ? ' popular' : ''}`}>
              {p.popular && <div className="popular-badge">Best Value</div>}
              <div className="pkg-icon">{p.icon}</div>
              <div className="pkg-name">{p.name}</div>
              <div className="pkg-price">{p.price}</div>
              <div className="pkg-duration">/ {p.duration}</div>
              <ul className="pkg-includes">
                {p.includes.map((inc, j) => <li key={j}>{inc}</li>)}
              </ul>
              <a href="tel:+918929979542" className={`pkg-cta${p.popular ? '' : ' outline'}`}>Book Now →</a>
            </div>
          ))}
        </div>

        {/* COMPLETE PRICE TABLE */}
        <div className="table-section">
          <div className="table-label">
            <div className="section-label">Complete Price List</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Every <em>Treatment</em> & Rate</h2>
          </div>
          <table className="price-table">
            <thead>
              <tr>
                <th>Therapy / Service</th>
                <th>Session Length</th>
                <th>Standard Price</th>
                <th>With 15% Off (First Visit)</th>
               </tr>
            </thead>
            <tbody>
              {[
                { name: 'Russian Banya Experience', duration: '60 min', price: '₹2,500', discounted: '₹2,125' },
                { name: 'Full Body Swedish Massage', duration: '60 min', price: '₹2,000', discounted: '₹1,700' },
                { name: 'Full Body Deep Tissue', duration: '60 min', price: '₹2,500', discounted: '₹2,125' },
                { name: 'Deep Tissue Therapy (Extended)', duration: '90 min', price: '₹3,500', discounted: '₹2,975' },
                { name: 'Aromatherapy Massage', duration: '75 min', price: '₹3,000', discounted: '₹2,550' },
                { name: 'Traditional Thai Massage', duration: '75 min', price: '₹3,200', discounted: '₹2,720' },
                { name: 'Sports Performance Massage', duration: '60 min', price: '₹3,800', discounted: '₹3,230' },
                { name: 'Foot Reflexology', duration: '45 min', price: '₹2,200', discounted: '₹1,870' },
                { name: 'Japanese Shiatsu', duration: '60 min', price: '₹3,500', discounted: '₹2,975' },
                { name: 'Hot Volcanic Stone Therapy', duration: '75 min', price: '₹3,500', discounted: '₹2,975' },
                { name: 'Balinese Massage', duration: '75 min', price: '₹3,200', discounted: '₹2,720' },
                { name: 'Prenatal Pregnancy Massage', duration: '60 min', price: '₹3,200', discounted: '₹2,720' },
                { name: 'Couples Spa Package (Basic)', duration: '90 min', price: '₹5,000', discounted: '₹4,250' },
                { name: 'Couples Spa Package (Premium)', duration: '120 min', price: '₹7,500', discounted: '₹6,375' },
                { name: 'Russian Banya + Massage Combo', duration: '90 min', price: '₹4,500', discounted: '₹3,825' },
                { name: 'Head, Neck & Shoulder Focus', duration: '45 min', price: '₹1,800', discounted: '₹1,530' },
                { name: 'Back & Neck Pain Relief', duration: '60 min', price: '₹2,200', discounted: '₹1,870' },
                { name: 'Lymphatic Drainage Massage', duration: '60 min', price: '₹3,000', discounted: '₹2,550' },
                { name: 'Four Hands Synchronized Massage', duration: '60 min', price: '₹4,000', discounted: '₹3,400' },
              ].map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.duration}</td>
                  <td className="price-col">{r.price}</td>
                  <td className="price-col" style={{ color: '#4CAF50' }}>{r.discounted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PRICE COMPARISON SECTION - Unique to pricing page */}
        <div className="comparison-section">
          <div className="section-label">Value Comparison</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Why We're <em>Delhi's Best Value</em></h2>
          <div className="comparison-grid">
            <div className="comparison-card">
              <div>🏨 5-Star Hotel Spa</div>
              <div className="rate">₹8,000+</div>
              <div>for 60 min massage</div>
              <div className="save">vs</div>
            </div>
            <div className="comparison-card" style={{ border: '1px solid var(--gold)' }}>
              <div>✨ Russian Spa Centre</div>
              <div className="rate">₹2,000</div>
              <div>for 60 min massage</div>
              <div className="save">Save up to 75%</div>
            </div>
            <div className="comparison-card">
              <div>🏪 Local Spa</div>
              <div className="rate">₹2,500+</div>
              <div>for 60 min massage</div>
              <div className="save">Lower quality, no guarantees</div>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.85rem', color: 'var(--muted)' }}>You don't need to pay 5-star hotel prices for 5-star service. Experience premium quality at affordable rates.</p>
        </div>

        {/* SPECIAL OFFERS SECTION */}
        <div className="table-section">
          <div className="table-label">
            <div className="section-label">Special Discounts</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Ways to <em>Save More</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { offer: 'Early Bird Special', discount: '20% off', condition: 'Book before 11 AM', icon: '🌅' },
              { offer: 'Late Night Relaxation', discount: '20% off', condition: 'After 11 PM', icon: '🌙' },
              { offer: 'Weekday Wellness', discount: '15% off', condition: 'Monday - Thursday', icon: '📅' },
              { offer: 'Group Booking', discount: '25% off', condition: '3+ people together', icon: '👥' },
              { offer: 'Monthly Membership', discount: '30% off', condition: 'Subscribe & save', icon: '⭐' },
              { offer: 'Student/ Senior Citizen', discount: '20% off', condition: 'Valid ID required', icon: '🎓' },
            ].map((offer, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem' }}>{offer.icon}</div>
                <div style={{ fontSize: '1.2rem', color: 'var(--gold)', fontWeight: '500', marginTop: '8px' }}>{offer.offer}</div>
                <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', margin: '8px 0' }}>{offer.discount}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{offer.condition}</div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="all-included">
          <div className="section-label">No Hidden Charges</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>What's <em>Included</em> in Every Price</h2>
          <div className="all-included-grid">
            {[
              { icon: '⏱️', title: 'Full Treatment Time Guaranteed', desc: 'Your 60 minutes means 60 minutes of hands-on therapy — not including changing time. We never rush.' },
              { icon: '🧴', title: 'Premium Organic Products', desc: 'Only therapeutic-grade, hypoallergenic oils and lotions. No cheap fillers or synthetic fragrances.' },
              { icon: '🏥', title: 'Hospital-Grade Cleanliness', desc: 'Fresh linens for every guest. UV-sterilized equipment. Medical-grade disinfectants used between each session.' },
              { icon: '🍵', title: 'Complimentary Herbal Tea', desc: 'Relax before or after your treatment with our selection of premium organic teas — always included.' },
              { icon: '🔒', title: 'Private Locker & Shower', desc: 'Secure storage for your valuables and access to our clean, modern shower facilities at no extra cost.' },
              { icon: '🚗', title: 'Free Parking', desc: 'Complimentary secure parking for all guests. Located conveniently with easy access.' },
              { icon: '🎵', title: 'Ambient Music & Aromatherapy', desc: 'Every room features calming soundscapes and subtle aromatherapy to enhance your relaxation.' },
              { icon: '🧺', title: 'Fresh Robes & Slippers', desc: 'Plush robes and disposable slippers provided for every guest. Nothing extra to pay.' },
            ].map((a, i) => (
              <div key={i} className="ai-item">
                <div className="ai-icon">{a.icon}</div>
                <div className="ai-text">
                  <strong>{a.title}</strong>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CORPORATE & MEMBERSHIP */}
        <div className="custom-section">
          <div className="custom-card">
            <h3>🏢 Corporate Wellness Program</h3>
            <p>Special negotiated rates for companies of all sizes. We partner with HR departments to provide employee wellness benefits including on-site chair massage, discounted therapy sessions, and wellness workshops. Perfect for reducing workplace stress and improving employee productivity. Call us for a custom corporate quote based on your team size and needs.</p>
            <a href="tel:+918929979542" className="btn-gold">Request Corporate Rates →</a>
          </div>
          <div className="custom-card">
            <h3>⭐ Monthly Membership Club</h3>
            <p>Join our exclusive membership program and enjoy 30% off all services, priority booking, free upgrade to 90-minute sessions monthly, birthday complimentary treatment, and referral bonuses. Membership starts at just ₹3,999/month for 2 sessions — less than ₹2,000 per premium massage. Cancel anytime with 30-day notice. The best value for regular wellness seekers.</p>
            <a href="tel:+918929979542" className="btn-outline">Ask About Membership →</a>
          </div>
        </div>

        {/* PRICE PROMISE */}
        <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'rgba(201,168,76,0.05)', borderRadius: '8px' }}>
          <div style={{ fontSize: '2.5rem' }}>💰</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '12px' }}>Best Price Guarantee</h3>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--muted)', fontSize: '0.85rem' }}>Find a lower rate for an equivalent service at any comparable spa in Mahipalpur, Aerocity, or Delhi Airport area? We'll match the price and give you 10% off your next visit. No questions asked.</p>
        </div>

        {/* FAQ for Pricing */}
        <div style={{ marginTop: '60px' }}>
          <div className="section-label">Pricing FAQs</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', marginBottom: '32px' }}>Questions About <em>Our Rates</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {[
              { q: 'Are there any hidden charges?', a: 'Never. The price you see is exactly what you pay. Taxes are included. No surprise fees for towels, lockers, or amenities.' },
              { q: 'Do you accept card payments?', a: 'Yes — credit cards, debit cards, UPI, Google Pay, and cash all accepted. We also have EMI options for packages.' },
              { q: 'Is the 15% off for first-time visitors?', a: 'Yes! Just mention our website when booking or show this page upon arrival for your discount.' },
              { q: 'Do you have group discounts?', a: 'Absolutely. Groups of 3+ receive 25% off. Perfect for birthday parties, bachelor/bachelorette groups, or corporate outings.' },
              { q: 'What about tips/gratuity?', a: 'Gratuity is always optional and at your discretion. Our therapists are paid fairly regardless of tips.' },
              { q: 'Can I customize a package?', a: 'Yes — we can create custom combinations of services. Call us to discuss your preferences and get a personalized quote.' },
            ].map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px' }}>
                <div style={{ color: 'var(--gold)', fontWeight: '500', marginBottom: '8px' }}>{faq.q}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KEYWORD CLOUD for SEO */}
        <div className="keyword-cloud">
          <span>spa price list Mahipalpur</span>
          <span>affordable massage near me</span>
          <span>best body massage rates Delhi</span>
          <span>Russian banya cost</span>
          <span>cheap spa Aerocity</span>
          <span>budget friendly massage</span>
          <span>luxury spa affordable prices</span>
          <span>couple massage rate Delhi</span>
          <span>deep tissue therapy price</span>
          <span>Swedish massage charges</span>
          <span>Thai massage cost Mahipalpur</span>
          <span>hot stone therapy price</span>
          <span>reflexology charges</span>
          <span>sports massage rate</span>
          <span>pregnancy massage price</span>
          <span>24 hours spa cost</span>
          <span>body to body massage price</span>
          <span>full body massage charges</span>
          <span>spa near airport rates</span>
          <span>best value spa Delhi NCR</span>
          <span>weekly spa deals</span>
          <span>membership spa offers</span>
        </div>

      </div>
    </>
  );
}