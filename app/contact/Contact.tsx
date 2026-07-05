"use client";

import { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  User,
  Calendar,
  MessageSquareText,
  Flame,
  Send,
  Building2,
  Plane,
  TrainFront,
  Car,
  House,
  Building,
  CircleCheck,
  ChevronDown,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./Contact.module.css";

const SERVICE_OPTIONS = [
  "Russian Banya Experience — ₹2,500 (60 min)",
  "Swedish Massage — ₹2,800 (60 min)",
  "Deep Tissue Therapy — ₹3,500 (90 min)",
  "Aromatherapy Massage — ₹3,000 (75 min)",
  "Thai Massage — ₹3,200 (75 min)",
  "Sports Massage — ₹3,800 (60 min)",
  "Reflexology — ₹2,200 (45 min)",
  "Shiatsu Massage — ₹3,500 (60 min)",
  "Hot Stone Therapy — ₹3,500 (75 min)",
  "Couples Spa Package — ₹6,000 (120 min)",
  "Couples Premium Package — ₹7,500 (120 min)",
  "Prenatal Massage — ₹3,200 (60 min)",
  "Balinese Massage — ₹3,200 (75 min)",
  "Custom / Ask Us",
];

const LOCATION_DETAILS = [
  {
    icon: MapPin,
    title: "Exact Address",
    desc: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037",
  },
  {
    icon: Building2,
    title: "Near JW Marriott Aerocity",
    desc: "Just a 2-minute walk from JW Marriott Hotel New Delhi Aerocity. Easily accessible from all Aerocity hotels.",
  },
  {
    icon: Plane,
    title: "10 Min from IGI Airport",
    desc: "From T3 — take NH-48 toward Mahipalpur. We are right off the main road with clear signage.",
  },
  {
    icon: TrainFront,
    title: "Metro Accessible",
    desc: "Airport Express Line (Aerocity station - 5 min) + Magenta Line. Short auto-ride from either station.",
  },
  {
    icon: Car,
    title: "Free Parking On-Site",
    desc: "Secure, complimentary parking for all clients. No need to worry about your vehicle.",
  },
  {
    icon: MessageCircle,
    title: "Directions via WhatsApp",
    desc: "Message us on +91 8929979542 and we will send you live location and step-by-step directions.",
  },
];

const NEARBY_LANDMARKS = [
  { icon: Plane, name: "IGI Airport T3", distance: "10 minutes drive" },
  { icon: Building2, name: "JW Marriott Aerocity", distance: "2 minutes walk" },
  { icon: Building2, name: "Andaz Aerocity", distance: "3 minutes drive" },
  { icon: Building2, name: "Pullman Aerocity", distance: "3 minutes drive" },
  { icon: Building2, name: "Roseate House", distance: "4 minutes drive" },
  { icon: Building2, name: "Holiday Inn Aerocity", distance: "5 minutes drive" },
  { icon: TrainFront, name: "Aerocity Metro Station", distance: "5 minutes auto" },
  { icon: TrainFront, name: "Mahipalpur Metro", distance: "2 minutes walk" },
  { icon: Building, name: "Worldmark Aerocity", distance: "3 minutes drive" },
  { icon: Building, name: "DLF Cyber City", distance: "15 minutes drive" },
  { icon: House, name: "Vasant Kunj", distance: "10 minutes drive" },
  { icon: House, name: "Dwarka Sector 10", distance: "12 minutes drive" },
];

const EXPECT_ITEMS = [
  {
    icon: Clock,
    title: "Fast Response",
    desc: "We reply to every call, WhatsApp message and booking form within minutes — most requests are confirmed within 30 minutes.",
  },
  {
    icon: MessageCircle,
    title: "Simple Confirmation",
    desc: "Once you reach out, we confirm your preferred therapist, treatment and time slot directly over WhatsApp or phone — no back and forth required.",
  },
  {
    icon: CircleCheck,
    title: "Open Around The Clock",
    desc: "Since we never close, you can reach us any hour of the day or night and speak to a real person, not an automated queue.",
  },
];

const BOOKING_FAQS = [
  {
    q: "Can I book a same-day appointment?",
    a: "Yes. We welcome same-day and walk-in bookings 24/7. For guaranteed availability of your preferred therapist or time slot — especially for couples packages — booking a little in advance is recommended.",
  },
  {
    q: "Do you require advance payment?",
    a: "No advance payment is required to confirm your appointment. Simply fill out the form or message us on WhatsApp, and pay at the spa via cash, card, or UPI.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Absolutely. You can reschedule or adjust your booking anytime by calling or messaging us on WhatsApp. Since we're open 24/7, finding a new slot that works for you is easy.",
  },
];

const KEYWORDS = [
  "spa contact number Mahipalpur",
  "book spa appointment Aerocity",
  "Russian spa phone number",
  "massage centre near me",
  "spa WhatsApp number Delhi",
  "Russian banya booking",
  "spa near JW Marriott Aerocity",
  "spa in Defence Enclave Mahipalpur",
  "massage parlour contact",
  "body spa number",
  "luxury spa booking",
  "couples spa reservation",
  "deep tissue massage booking",
  "Swedish massage appointment",
  "Thai spa near me",
  "aromatherapy spa contact",
  "hot stone therapy booking",
  "reflexology centre near me",
  "sports massage appointment",
  "pregnancy spa contact",
  "24 hours spa phone number",
  "spa email address",
  "Russian spa location",
  "spa directions Mahipalpur",
  "spa near IGI Airport contact",
  "wellness centre booking",
  "spa customer care Delhi NCR",
  "Russian Spa Centre Mahipalpur contact",
  "spa in Aerocity phone number",
  "massage in Dwarka booking",
];

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Russian Spa Centre",
  url: "https://mahipalpurspaservicecentre.com/contact",
  description:
    "Contact Russian Spa Centre in Mahipalpur to book your appointment. Call, WhatsApp, or fill out the booking form. Open 24/7, near IGI Airport and Aerocity.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Russian Spa Centre Mahipalpur",
    image: "https://mahipalpurspaservicecentre.com/logo.png",
    telephone: "+91 8929979542",
    email: "info@russianspacentre.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110037",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 8929979542",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Russian"],
    },
  },
};

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function handleBookingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const datetime = (formData.get("datetime") as string) || "";
    const notes = (formData.get("notes") as string) || "";

    const serviceSelect = form.elements.namedItem("service") as HTMLSelectElement | null;
    const service = serviceSelect?.options[serviceSelect.selectedIndex]?.text || "";

    let message = "Hello Russian Spa Centre,%0A%0A";
    message += "*NEW BOOKING REQUEST*%0A%0A";
    message += "📝 *Name:* " + encodeURIComponent(name) + "%0A";
    message += "📞 *Phone:* " + encodeURIComponent(phone) + "%0A";
    message += "✉️ *Email:* " + encodeURIComponent(email) + "%0A";
    if (datetime) message += "📅 *Preferred Date/Time:* " + encodeURIComponent(datetime) + "%0A";
    message += "💆 *Service:* " + encodeURIComponent(service) + "%0A";
    if (notes) message += "📝 *Notes:* " + encodeURIComponent(notes) + "%0A%0A";
    message += "Please confirm my appointment. Thank you!";

    const whatsappUrl = "https://wa.me/918929979542?text=" + message;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSON_LD) }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Get In Touch</div>
          <h1>
            Book Your <em>Appointment</em>
          </h1>
          <p className={styles.heroText}>
            Fill out the form below and we will confirm your booking via WhatsApp within 30 minutes. Or simply
            call us — we are available 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* THERAPISTS */}
      {/* <TherapistSection /> */}

      {/* CONTACT INFO + BOOKING FORM */}
      <section className={styles.section}>
        <div className={styles.contactGrid}>
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.iconChip}>
                  <PhoneCall size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className={styles.infoCardLabel}>Phone &amp; WhatsApp</div>
                  <div className={styles.infoCardValue}>
                    <a href="tel:+918929979542">+91 8929979542</a>
                  </div>
                </div>
              </div>
              <div className={styles.infoCardNote}>Call or WhatsApp anytime. We respond immediately.</div>
              <a
                href="https://wa.me/918929979542?text=Hello%2C%20I%20want%20to%20book%20a%20spa%20appointment.%20My%20name%20is%20"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <MessageCircle size={18} />
                Book via WhatsApp — Instant Confirmation
              </a>
              <div className={styles.openNow}>
                <span className={styles.dot} />
                <span>Open Right Now · 24/7 · 365 Days</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.iconChip}>
                  <Mail size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className={styles.infoCardLabel}>Email</div>
                  <div className={styles.infoCardValue} style={{ fontSize: "1.05rem" }}>
                    <a href="mailto:info@russianspacentre.com">info@russianspacentre.com</a>
                  </div>
                </div>
              </div>
              <div className={styles.infoCardNote}>We reply to all emails within 2 hours.</div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.iconChip}>
                  <MapPin size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className={styles.infoCardLabel}>Visit Us</div>
                  <div className={styles.infoCardValue} style={{ fontSize: "1.05rem" }}>
                    Office No. 118, Defence Enclave
                    <br />
                    Adjoining Aerocity, Mahipalpur
                    <br />
                    New Delhi, Delhi 110037
                  </div>
                </div>
              </div>
              <div className={styles.infoCardNote}>
                <MapPin size={14} strokeWidth={1.8} />
                <span>
                  Near JW Marriott Hotel New Delhi Aerocity · 10 minutes from IGI Airport T3 · Free parking
                  available
                </span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>
                <div className={styles.iconChip}>
                  <Clock size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <div className={styles.infoCardLabel}>Opening Hours</div>
                  <div className={styles.infoCardValue}>Open 24 Hours</div>
                </div>
              </div>
              <div className={styles.infoCardNote}>
                Monday — Sunday · Including all public holidays · We never close
              </div>
            </div>
          </div>

          <div className={styles.bookingPanel}>
            <h2>
              Send a <em>Booking Request</em>
            </h2>
            <p>
              Fill in your details and preferred service. We will confirm your appointment via WhatsApp within
              30 minutes.
            </p>
            <form id="bookingForm" onSubmit={handleBookingSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <User size={13} /> Full Name *
                  </label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    <PhoneCall size={13} /> Phone Number *
                  </label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    <Mail size={13} /> Email Address
                  </label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="datetime">
                    <Calendar size={13} /> Preferred Date &amp; Time
                  </label>
                  <input type="datetime-local" id="datetime" name="datetime" />
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label htmlFor="service">
                    <Flame size={13} /> Select Service *
                  </label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>
                      Choose a service...
                    </option>
                    {SERVICE_OPTIONS.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label htmlFor="notes">
                    <MessageSquareText size={13} /> Additional Notes / Special Requests
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Any health conditions, preferred therapist gender, or special requests..."
                    rows={3}
                  />
                </div>
              </div>
              <div className={styles.formSubmit}>
                <button type="submit" className="btn-gold">
                  <Send size={16} /> Submit &amp; Continue on WhatsApp →
                </button>
              </div>
              <p className={styles.formNote}>
                By submitting, you will be redirected to WhatsApp to complete your booking. We will confirm your
                appointment within 30 minutes. 15% off on your first visit when you mention this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Good To Know
          </div>
          <h2 className="section-title">
            What To Expect When You <em>Contact Us</em>
          </h2>
          <p>From the moment you reach out, here is exactly how the process works.</p>
        </div>
        <div className={styles.grid3}>
          {EXPECT_ITEMS.map((item, i) => (
            <div key={i} className={styles.iconCard}>
              <div className={styles.iconChipCenter}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK BOOK CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h3>
            Prefer to Call?
            <span>We are always available, day or night.</span>
          </h3>
          <a href="tel:+918929979542" className={styles.ctaCallBtn}>
            <PhoneCall size={16} /> +91 8929979542
          </a>
        </div>
      </section>

      {/* LOCATION WITH GOOGLE MAPS */}
      <section className={styles.section}>
        <div className="section-label">Find Us</div>
        <h2 className="section-title" style={{ marginBottom: "40px", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
          Visit <em>Our Spa</em>
        </h2>
        <div className={styles.locationGrid}>
          <div className={styles.locationInfo}>
            <h3>Location Details</h3>
            <div className={styles.locItems}>
              {LOCATION_DETAILS.map((l, i) => (
                <div key={i} className={styles.locItem}>
                  <div className={styles.locIcon}>
                    <l.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className={styles.locText}>
                    <strong>{l.title}</strong>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.locationMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Russian Spa Centre Location Map - Mahipalpur Aerocity"
            />
          </div>
        </div>
      </section>

      {/* NEARBY LANDMARKS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="section-label">Nearby Locations</div>
        <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", marginBottom: "8px" }}>
          Conveniently Located Near <em>You</em>
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "8px" }}>
          Easily accessible from these popular Delhi NCR destinations:
        </p>
        <div className={styles.nearbyGrid}>
          {NEARBY_LANDMARKS.map((place, i) => (
            <div key={i} className={styles.iconCard}>
              <div className={styles.iconChipCenter}>
                <place.icon size={20} strokeWidth={1.8} />
              </div>
              <h4>{place.name}</h4>
              <p>{place.distance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2 className="section-title">
            Questions About <em>Booking</em>
          </h2>
        </div>
        <div className={styles.faqInner}>
          <div className={styles.faqList}>
            {BOOKING_FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={styles.faqItem}>
                  <button
                    type="button"
                    className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ""}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown size={18} strokeWidth={2} />
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* KEYWORD CLOUD for SEO */}
      <div className={styles.keywordCloud}>
        {KEYWORDS.map((kw, i) => (
          <span key={i} className={styles.keywordPill}>
            {kw}
          </span>
        ))}
      </div>
    </>
  );
}
