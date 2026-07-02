// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Russian Spa Centre | Best Spa in Mahipalpur Aerocity Dwarka | Call +91 8929979542",
  description:
    "Visit our spa in Mahipalpur near IGI Airport. Book your appointment via WhatsApp or call +91 8929979542. Open 24/7. Office No. 118, Defence Enclave, Adjoining Aerocity, New Delhi. Near JW Marriott Hotel Aerocity. Free parking available.",
  keywords:
    "spa contact number Mahipalpur, book spa appointment Aerocity, Russian spa phone number, massage centre near me, spa WhatsApp number Delhi, Russian banya booking, spa near JW Marriott Aerocity, spa in Defence Enclave Mahipalpur, massage parlour contact, body spa number, luxury spa booking, couples spa reservation, deep tissue massage booking, Swedish massage appointment, Thai spa near me, aromatherapy spa contact, hot stone therapy booking, reflexology centre near me, sports massage appointment, pregnancy spa contact, 24 hours spa phone number, spa email address, Russian spa location, spa directions Mahipalpur, spa near IGI Airport contact, wellness centre booking, spa customer care Delhi NCR, Russian Spa Centre Mahipalpur contact",
  openGraph: {
    title: "Contact Russian Spa Centre | Book Your Appointment | Mahipalpur Aerocity",
    description: "Call +91 8929979542 or WhatsApp us to book your spa appointment. Open 24/7 near IGI Airport. Office No. 118, Defence Enclave, Mahipalpur.",
    url: "https://mahipalpurspaservicecentre.com/contact",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre Contact - Book Your Appointment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Russian Spa Centre | Book Your Appointment",
    description: "Call +91 8929979542 or WhatsApp us. Open 24/7 near IGI Airport.",
    images: ["https://mahipalpurspaservicecentre.com/contact-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-hero {
          padding: 140px 60px 80px;
          background: var(--dark-2);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          position: relative;
          overflow: hidden;
        }
        .contact-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .contact-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; }
        .contact-hero h1 { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 300; color: var(--cream); line-height: 1.2; }
        .contact-hero h1 em { color: var(--gold); font-style: italic; }
        .contact-hero p { font-size: 0.9rem; color: var(--muted); margin-top: 16px; max-width: 500px; line-height: 1.9; }

        .contact-body { max-width: 1200px; margin: 0 auto; padding: 80px 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }

        .contact-info-panel {}
        .info-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); padding: 40px; margin-bottom: 2px; transition: border-color 0.3s; }
        .info-card:last-child { margin-bottom: 0; }
        .info-card:hover { border-color: rgba(201,168,76,0.25); }
        .info-card-label { font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .info-card-value { font-family: var(--font-display); font-size: 1.4rem; font-weight: 300; color: var(--cream); line-height: 1.4; }
        .info-card-value a { color: var(--gold); transition: opacity 0.2s; }
        .info-card-value a:hover { opacity: 0.8; }
        .info-card-note { font-size: 0.78rem; color: var(--muted); margin-top: 8px; line-height: 1.7; }
        .open-now { display: inline-flex; align-items: center; gap: 8px; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.25); padding: 8px 16px; margin-top: 16px; border-radius: 30px; }
        .open-now .dot { width: 7px; height: 7px; border-radius: 50%; background: #4caf50; animation: pulse 2s infinite; }
        .open-now span { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        .whatsapp-btn { display: inline-flex; align-items: center; gap: 12px; background: #25D366; color: white; padding: 12px 24px; border-radius: 50px; font-weight: 500; margin-top: 16px; transition: transform 0.2s; width: 100%; justify-content: center; }
        .whatsapp-btn:hover { transform: scale(1.02); color: white; }

        .booking-panel {}
        .booking-panel h2 { font-family: var(--font-display); font-size: 1.8rem; font-weight: 300; color: var(--cream); margin-bottom: 8px; }
        .booking-panel h2 em { color: var(--gold); font-style: italic; }
        .booking-panel p { font-size: 0.82rem; color: var(--muted); margin-bottom: 32px; line-height: 1.8; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 4px; }
        .form-group.full { grid-column: 1 / -1; }
        .form-group label { font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); }
        .form-group input, .form-group select, .form-group textarea {
          background: var(--dark-3); border: 1px solid rgba(201,168,76,0.15);
          padding: 14px 16px; color: var(--cream); font-family: var(--font-body); font-size: 0.85rem;
          outline: none; transition: border-color 0.2s; width: 100%;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: rgba(201,168,76,0.5); }
        .form-group select { appearance: none; cursor: pointer; }
        .form-group textarea { resize: vertical; min-height: 100px; }
        .form-submit { margin-top: 24px; }
        .form-submit button { width: 100%; cursor: pointer; }
        .form-note { font-size: 0.75rem; color: var(--muted); margin-top: 12px; text-align: center; line-height: 1.6; }

        .quick-book { max-width: 1200px; margin: 0 auto; padding: 0 60px 80px; }
        .quick-book-inner { background: var(--gold); padding: 48px 60px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; border-radius: 8px; }
        .quick-book-inner h3 { font-family: var(--font-display); font-size: 2rem; font-weight: 300; color: var(--dark); }
        .quick-book-inner h3 span { display: block; font-size: 1rem; opacity: 0.7; margin-top: 4px; }
        .btn-dark-solid { background: var(--dark); color: var(--gold); padding: 14px 36px; font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; display: inline-block; transition: opacity 0.2s; white-space: nowrap; border: none; cursor: pointer; }
        .btn-dark-solid:hover { opacity: 0.85; }

        .location-section { max-width: 1200px; margin: 0 auto; padding: 0 60px 80px; }
        .location-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 2px; }
        .location-info { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.1); padding: 48px; }
        .location-info h3 { font-family: var(--font-display); font-size: 1.6rem; color: var(--gold); font-weight: 300; margin-bottom: 24px; }
        .loc-items { display: flex; flex-direction: column; gap: 20px; }
        .loc-item { display: flex; gap: 16px; align-items: flex-start; }
        .loc-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }
        .loc-text strong { display: block; font-size: 0.82rem; color: var(--cream); font-weight: 500; margin-bottom: 2px; }
        .loc-text p { font-size: 0.8rem; color: var(--muted); line-height: 1.7; }
        .location-map { background: var(--dark-2); border: 1px solid rgba(201,168,76,0.1); overflow: hidden; }
        .location-map iframe { width: 100%; height: 100%; min-height: 450px; border: 0; }
        .map-fallback { display: flex; align-items: center; justify-content: center; min-height: 450px; flex-direction: column; gap: 16px; background: var(--dark-3); }
        .map-fallback p { font-size: 0.85rem; color: var(--muted); text-align: center; }
        .map-fallback a { color: var(--gold); font-size: 0.78rem; letter-spacing: 0.15em; text-transform: uppercase; border: 1px solid rgba(201,168,76,0.3); padding: 10px 24px; transition: all 0.2s; display: inline-block; }
        .map-fallback a:hover { background: var(--gold); color: var(--dark); }

        .nearby-section { max-width: 1200px; margin: 0 auto; padding: 40px 60px 80px; }
        .nearby-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-top: 32px; }
        .nearby-card { background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08); padding: 24px; text-align: center; }
        .nearby-card .icon { font-size: 1.5rem; margin-bottom: 12px; }
        .nearby-card h4 { color: var(--gold); font-size: 0.85rem; margin-bottom: 8px; }
        .nearby-card p { font-size: 0.7rem; color: var(--muted); }

        .keyword-cloud { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 40px 20px; max-width: 1200px; margin: 0 auto; border-top: 1px solid rgba(201,168,76,0.1); }
        .keyword-cloud span { font-size: 0.65rem; color: var(--muted); background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; }

        @media (max-width: 900px) {
          .contact-body { grid-template-columns: 1fr; gap: 48px; }
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full { grid-column: auto; }
          .quick-book, .location-section, .contact-hero, .contact-body, .nearby-section { padding-left: 24px; padding-right: 24px; }
          .quick-book-inner { padding: 32px 24px; flex-direction: column; text-align: center; }
          .location-grid { grid-template-columns: 1fr; }
          .location-map iframe { min-height: 300px; }
          .nearby-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .nearby-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-inner">
          <div className="section-label">Get In Touch</div>
          <h1>Book Your <em>Appointment</em></h1>
          <p>Fill out the form below and we will confirm your booking via WhatsApp within 30 minutes. Or simply call us — we are available 24 hours a day, 7 days a week.</p>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-info-panel">
          <div className="info-card">
            <div className="info-card-label">Phone & WhatsApp</div>
            <div className="info-card-value"><a href="tel:+918929979542">+91 8929979542</a></div>
            <div className="info-card-note">Call or WhatsApp anytime. We respond immediately.</div>
            <a href="https://wa.me/918929979542?text=Hello%2C%20I%20want%20to%20book%20a%20spa%20appointment.%20My%20name%20is%20" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.914 3.149.915h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.766-5.767-5.766zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.068-.248-.078-.57-.182-.978-.335-1.526-.575-2.55-1.862-2.628-1.945-.078-.083-.628-.835-.628-1.592 0-.757.399-1.13.542-1.284.142-.154.31-.192.414-.192.104 0 .207.004.298.142.089.139.377.931.377.931s.127.236.031.381c-.096.145-.238.238-.341.381-.102.142-.187.261-.056.457.13.196.585.967 1.254 1.567.862.774 1.59.984 1.82 1.094.23.11.507.037.68-.142.173-.179.454-.593.569-.784.115-.191.23-.191.381-.114.152.076.962.454 1.134.537.172.083.284.124.326.191.042.067.042.389-.102.794z"/>
              </svg>
              Book via WhatsApp → Instant Confirmation
            </a>
            <div className="open-now"><span className="dot" /><span>Open Right Now · 24/7 · 365 Days</span></div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Email</div>
            <div className="info-card-value"><a href="mailto:info@russianspacentre.com" style={{ fontSize: '1rem' }}>info@russianspacentre.com</a></div>
            <div className="info-card-note">We reply to all emails within 2 hours.</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Visit Us</div>
            <div className="info-card-value" style={{ fontSize: '1rem' }}>
              Office No. 118, Defence Enclave<br />
              Adjoining Aerocity, Mahipalpur<br />
              New Delhi, Delhi 110037
            </div>
            <div className="info-card-note">📍 Near JW Marriott Hotel New Delhi Aerocity · 10 minutes from IGI Airport T3 · Free parking available</div>
          </div>
          <div className="info-card">
            <div className="info-card-label">Opening Hours</div>
            <div className="info-card-value">Open 24 Hours</div>
            <div className="info-card-note">Monday — Sunday · Including all public holidays · We never close</div>
          </div>
        </div>

        <div className="booking-panel">
          <h2>Send a <em>Booking Request</em></h2>
          <p>Fill in your details and preferred service. We will confirm your appointment via WhatsApp within 30 minutes.</p>
          <form id="bookingForm" action="https://wa.me/918929979542" method="get" target="_blank">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Preferred Date & Time</label>
                <input type="datetime-local" id="datetime" name="datetime" />
              </div>
              <div className="form-group full">
                <label>Select Service *</label>
                <select id="service" name="service" required>
                  <option value="">Choose a service...</option>
                  <option>🔥 Russian Banya Experience — ₹2,500 (60 min)</option>
                  <option>🌊 Swedish Massage — ₹2,800 (60 min)</option>
                  <option>💪 Deep Tissue Therapy — ₹3,500 (90 min)</option>
                  <option>🌸 Aromatherapy Massage — ₹3,000 (75 min)</option>
                  <option>🧘 Thai Massage — ₹3,200 (75 min)</option>
                  <option>🏃 Sports Massage — ₹3,800 (60 min)</option>
                  <option>👣 Reflexology — ₹2,200 (45 min)</option>
                  <option>☯️ Shiatsu Massage — ₹3,500 (60 min)</option>
                  <option>🪨 Hot Stone Therapy — ₹3,500 (75 min)</option>
                  <option>💑 Couples Spa Package — ₹6,000 (120 min)</option>
                  <option>⭐ Couples Premium Package — ₹7,500 (120 min)</option>
                  <option>🤰 Prenatal Massage — ₹3,200 (60 min)</option>
                  <option>🌺 Balinese Massage — ₹3,200 (75 min)</option>
                  <option>📞 Custom / Ask Us</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Additional Notes / Special Requests</label>
                <textarea id="notes" name="notes" placeholder="Any health conditions, preferred therapist gender, or special requests..." rows={3}></textarea>
              </div>
            </div>
            <div className="form-submit">
              <button type="submit" className="btn-gold" style={{ width: '100%', padding: '16px', fontSize: '0.78rem', letterSpacing: '0.22em', border: 'none', cursor: 'pointer' }}>
                📱 Submit & Continue on WhatsApp →
              </button>
            </div>
            <p className="form-note">By submitting, you will be redirected to WhatsApp to complete your booking. We will confirm your appointment within 30 minutes. 15% off on your first visit when you mention this website.</p>
          </form>
        </div>
      </div>

      {/* QUICK BOOK */}
      <div className="quick-book">
        <div className="quick-book-inner">
          <h3>
            Prefer to Call?
            <span>We are always available, day or night.</span>
          </h3>
          <a href="tel:+918929979542" className="btn-dark-solid">📞 +91 8929979542</a>
        </div>
      </div>

      {/* LOCATION WITH GOOGLE MAPS */}
      <div className="location-section">
        <div className="section-label">Find Us</div>
        <h2 className="section-title" style={{ marginBottom: '40px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Visit <em>Our Spa</em></h2>
        <div className="location-grid">
          <div className="location-info">
            <h3>Location Details</h3>
            <div className="loc-items">
              {[
                { icon: '📍', title: 'Exact Address', desc: 'Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037' },
                { icon: '🏨', title: 'Near JW Marriott Aerocity', desc: 'Just a 2-minute walk from JW Marriott Hotel New Delhi Aerocity. Easily accessible from all Aerocity hotels.' },
                { icon: '✈️', title: '10 Min from IGI Airport', desc: 'From T3 — take NH-48 toward Mahipalpur. We are right off the main road with clear signage.' },
                { icon: '🚇', title: 'Metro Accessible', desc: 'Airport Express Line (Aerocity station - 5 min) + Magenta Line. Short auto-ride from either station.' },
                { icon: '🚗', title: 'Free Parking On-Site', desc: 'Secure, complimentary parking for all clients. No need to worry about your vehicle.' },
                { icon: '📞', title: 'Directions via WhatsApp', desc: 'Message us on +91 8929979542 and we will send you live location and step-by-step directions.' },
              ].map((l, i) => (
                <div key={i} className="loc-item">
                  <div className="loc-icon">{l.icon}</div>
                  <div className="loc-text">
                    <strong>{l.title}</strong>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '450px' }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Russian Spa Centre Location Map - Mahipalpur Aerocity"
            />
          </div>
        </div>
      </div>

      {/* NEARBY LANDMARKS SECTION */}
      <div className="nearby-section">
        <div className="section-label">Nearby Locations</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', marginBottom: '8px' }}>Conveniently Located Near <em>You</em></h2>
        <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>Easily accessible from these popular Delhi NCR destinations:</p>
        <div className="nearby-grid">
          {[
            { icon: '✈️', name: 'IGI Airport T3', distance: '10 minutes drive' },
            { icon: '🏨', name: 'JW Marriott Aerocity', distance: '2 minutes walk' },
            { icon: '🏨', name: 'Andaz Aerocity', distance: '3 minutes drive' },
            { icon: '🏨', name: 'Pullman Aerocity', distance: '3 minutes drive' },
            { icon: '🏨', name: 'Roseate House', distance: '4 minutes drive' },
            { icon: '🏨', name: 'Holiday Inn Aerocity', distance: '5 minutes drive' },
            { icon: '🚇', name: 'Aerocity Metro Station', distance: '5 minutes auto' },
            { icon: '🚇', name: 'Mahipalpur Metro', distance: '2 minutes walk' },
            { icon: '🏢', name: 'Worldmark Aerocity', distance: '3 minutes drive' },
            { icon: '🏢', name: 'DLF Cyber City', distance: '15 minutes drive' },
            { icon: '🌳', name: 'Vasant Kunj', distance: '10 minutes drive' },
            { icon: '🏠', name: 'Dwarka Sector 10', distance: '12 minutes drive' },
          ].map((place, i) => (
            <div key={i} className="nearby-card">
              <div className="icon">{place.icon}</div>
              <h4>{place.name}</h4>
              <p>{place.distance}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KEYWORD CLOUD for SEO */}
      <div className="keyword-cloud">
        <span>spa contact number Mahipalpur</span>
        <span>book spa appointment Aerocity</span>
        <span>Russian spa phone number</span>
        <span>massage centre near me</span>
        <span>spa WhatsApp number Delhi</span>
        <span>Russian banya booking</span>
        <span>spa near JW Marriott Aerocity</span>
        <span>spa in Defence Enclave Mahipalpur</span>
        <span>massage parlour contact</span>
        <span>body spa number</span>
        <span>luxury spa booking</span>
        <span>couples spa reservation</span>
        <span>deep tissue massage booking</span>
        <span>Swedish massage appointment</span>
        <span>Thai spa near me</span>
        <span>aromatherapy spa contact</span>
        <span>hot stone therapy booking</span>
        <span>reflexology centre near me</span>
        <span>sports massage appointment</span>
        <span>pregnancy spa contact</span>
        <span>24 hours spa phone number</span>
        <span>spa email address</span>
        <span>Russian spa location</span>
        <span>spa directions Mahipalpur</span>
        <span>spa near IGI Airport contact</span>
        <span>wellness centre booking</span>
        <span>spa customer care Delhi NCR</span>
        <span>Russian Spa Centre Mahipalpur contact</span>
        <span>spa in Aerocity phone number</span>
        <span>massage in Dwarka booking</span>
      </div>

      {/* FORM REDIRECT SCRIPT */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const form = document.getElementById('bookingForm');
          if (form) {
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              const name = document.getElementById('name')?.value || '';
              const phone = document.getElementById('phone')?.value || '';
              const email = document.getElementById('email')?.value || '';
              const datetime = document.getElementById('datetime')?.value || '';
              const serviceSelect = document.getElementById('service');
              const service = serviceSelect?.options[serviceSelect.selectedIndex]?.text || '';
              const notes = document.getElementById('notes')?.value || '';
              
              let message = 'Hello Russian Spa Centre,%0A%0A';
              message += '*NEW BOOKING REQUEST*%0A%0A';
              message += '📝 *Name:* ' + encodeURIComponent(name) + '%0A';
              message += '📞 *Phone:* ' + encodeURIComponent(phone) + '%0A';
              message += '✉️ *Email:* ' + encodeURIComponent(email) + '%0A';
              if (datetime) message += '📅 *Preferred Date/Time:* ' + encodeURIComponent(datetime) + '%0A';
              message += '💆 *Service:* ' + encodeURIComponent(service) + '%0A';
              if (notes) message += '📝 *Notes:* ' + encodeURIComponent(notes) + '%0A%0A';
              message += 'Please confirm my appointment. Thank you!';
              
              const whatsappUrl = 'https://wa.me/918929979542?text=' + message;
              window.open(whatsappUrl, '_blank');
            });
          }
        `
      }} />
    </>
  );
}