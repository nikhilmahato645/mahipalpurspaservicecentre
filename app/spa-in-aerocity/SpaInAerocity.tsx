"use client";

import { useState } from "react";
import {
  Plane,
  Building2,
  TrainFront,
  Car,
  Check,
  Clock,
  GraduationCap,
  Lock,
  ShieldCheck,
  Wallet,
  Star,
  HeartHandshake,
  ShowerHead,
  MapPin,
  PhoneCall,
  MessageCircle,
  Quote,
  ChevronDown,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./SpaInAerocity.module.css";

const WHY_AEROCITY = [
  { icon: Plane, title: "5-7 min from IGI Airport T3", desc: "Ideal for layovers and transit passengers" },
  { icon: Building2, title: "Walking Distance to Hotels", desc: "Very close to JW Marriott, Andaz, Pullman & more" },
  { icon: TrainFront, title: "Aerocity Metro Station", desc: "Just 3-5 minutes away" },
  { icon: Car, title: "Free Valet Parking", desc: "Complimentary secure parking for guests" },
];

const SERVICES = [
  "Russian Banya Experience with Traditional Venik",
  "Swedish Massage — Deep Relaxation",
  "Deep Tissue Massage — Pain Relief & Recovery",
  "Thai Massage — Energy Balancing",
  "Aromatherapy Massage — Essential Oil Therapy",
  "Hot Stone Therapy — Soothing Warmth",
  "Reflexology — Full Body Healing",
  "Shiatsu & Balinese Massage",
  "Sports Massage — Athletic Recovery",
  "Couples Spa Package — Romantic Experience",
  "Prenatal Massage",
  "Signature Luxury Packages",
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Open 24/7", desc: "Available round the clock, every day of the year" },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Internationally trained with 5+ years experience" },
  { icon: Lock, title: "100% Privacy & Discretion", desc: "Private suites for complete comfort" },
  { icon: ShieldCheck, title: "Hospital-Grade Hygiene", desc: "Strict sanitization between every session" },
  { icon: Wallet, title: "Premium at Best Price", desc: "Luxury experience without inflated costs" },
  { icon: Star, title: "Highly Rated", desc: "Excellent reviews from Aerocity hotel guests" },
  { icon: HeartHandshake, title: "Couples Suites", desc: "Dedicated romantic spaces" },
  { icon: ShowerHead, title: "Premium Amenities", desc: "Showers, robes, lockers & more" },
];

const NEARBY = [
  { icon: Building2, name: "JW Marriott Aerocity", distance: "2-3 min" },
  { icon: Building2, name: "Andaz Aerocity", distance: "3 min" },
  { icon: Building2, name: "Pullman Aerocity", distance: "3 min" },
  { icon: Building2, name: "Roseate House", distance: "4 min" },
  { icon: Plane, name: "IGI Airport T3", distance: "5-7 min" },
  { icon: TrainFront, name: "Aerocity Metro Station", distance: "3 min" },
  { icon: Building2, name: "Worldmark Aerocity", distance: "2 min" },
  { icon: MapPin, name: "Vasant Kunj", distance: "10 min" },
  { icon: MapPin, name: "Mahipalpur", distance: "5 min" },
];

const TESTIMONIALS = [
  { text: "Best spa experience near Aerocity! The Russian Banya was authentic and incredibly relaxing after a long flight. Highly recommended for transit passengers.", author: "Michael Chen", location: "International Traveler" },
  { text: "Perfect couples spa session at Russian Spa Centre. The therapists were professional and the ambiance was luxurious. Will visit again on our next trip to Delhi.", author: "Rohan & Sneha", location: "Andaz Aerocity Guests" },
  { text: "Excellent deep tissue massage. The location is so convenient from JW Marriott. Felt refreshed and ready for my meetings.", author: "Aarav Kapoor", location: "Business Traveler" },
];

const PRICING = [
  { service: "Russian Banya Experience", duration: "60 min", price: "₹2,500" },
  { service: "Full Body Swedish Massage", duration: "60 min", price: "₹2,000" },
  { service: "Deep Tissue Massage", duration: "90 min", price: "₹3,500" },
  { service: "Thai Massage", duration: "75 min", price: "₹3,200" },
  { service: "Aromatherapy Massage", duration: "75 min", price: "₹3,000" },
  { service: "Couples Spa Package", duration: "120 min", price: "₹6,000" },
  { service: "Hot Stone Therapy", duration: "75 min", price: "₹3,500" },
  { service: "Reflexology", duration: "45 min", price: "₹2,200" },
];

const FAQS = [
  { q: "Which is the best spa in Aerocity near IGI Airport?", a: "Russian Spa Centre is recognized as one of the best spas serving Aerocity, offering authentic Russian Banya, certified therapists, and 24/7 convenience." },
  { q: "Do you offer couples spa packages in Aerocity?", a: "Yes! We have dedicated private couples suites with synchronized massages and romantic ambiance." },
  { q: "How far is your spa from Aerocity hotels?", a: "Just 2-5 minutes drive from most Aerocity hotels including JW Marriott, Andaz, Pullman, and Roseate House." },
  { q: "What are your spa timings?", a: "We are open 24 hours a day, 7 days a week, 365 days a year." },
  { q: "Do you have male and female therapists?", a: "Yes, both male and female certified therapists are available. Preference can be requested at the time of booking." },
];

const KEYWORDS = [
  "spa in aerocity",
  "best spa aerocity",
  "luxury spa aerocity",
  "russian spa aerocity",
  "body massage aerocity",
  "spa near igi airport",
  "couples spa aerocity",
  "russian banya aerocity",
  "24 hour spa aerocity",
  "massage centre aerocity",
];

function openWhatsApp() {
  const message =
    "Hello! I want to book an appointment at your spa in Aerocity. Please share more details about services and availability.";
  const encodedMessage = encodeURIComponent(message);
  window.open("https://wa.me/918929979542?text=" + encodedMessage, "_blank");
}

export default function SpaInAerocity() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Plane size={13} strokeWidth={2} />
            Aerocity&apos;s Premier
          </div>
          <h1>
            Best <em>Spa in Aerocity</em>
            <br />
            Near IGI Airport Delhi
          </h1>
          <p className={styles.heroText}>
            Experience authentic Russian Banya, luxury body massage, and world-class wellness therapies just minutes
            from Aerocity hotels and IGI Airport Terminal 3. Open 24/7 with certified therapists.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <button type="button" className="btn-outline" onClick={openWhatsApp}>
              <MessageCircle size={15} /> Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHY AEROCITY */}
      <section className={styles.section}>
        <div className={styles.twoColumn}>
          <div className={styles.twoColumnText}>
            <div className="section-label">Why Aerocity?</div>
            <h2 className="section-title">
              Luxury <em>Spa Destination</em> Near Airport
            </h2>
            <div className="divider" />
            <p>
              Aerocity has become Delhi NCR&rsquo;s most premium hospitality hub with world-class hotels. Our spa is
              perfectly located to serve guests staying at JW Marriott, Andaz, Pullman, Roseate House, and other
              luxury hotels.
            </p>
            <p>
              Whether you&rsquo;re a business traveler, tourist on layover, or local resident, Russian Spa Centre
              offers the finest Russian Banya and body massage experience in Aerocity.
            </p>
          </div>
          <div className={styles.miniCards}>
            {WHY_AEROCITY.map((item, i) => (
              <div key={i} className={styles.miniCard}>
                <div className={styles.miniIcon}>
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Treatments
          </div>
          <h2 className="section-title">
            Luxury <em>Spa Services</em> in Aerocity
          </h2>
          <p className={styles.sectionSub}>
            Comprehensive range of premium spa treatments available 24/7 at our Aerocity-adjacent location.
          </p>
        </div>
        <div className={styles.serviceChecklist}>
          {SERVICES.map((service, i) => (
            <div key={i} className={styles.serviceRow}>
              <div className={styles.serviceCheck}>
                <Check size={16} strokeWidth={2.2} />
              </div>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">
            What Makes Us the <em>Best Spa in Aerocity</em>
          </h2>
        </div>
        <div className={styles.whyGrid}>
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Serving Nearby Areas
          </div>
          <h2 className="section-title">
            Convenient for <em>Aerocity &amp; Beyond</em>
          </h2>
          <p className={styles.sectionSub}>Easily accessible from all major Aerocity hotels and surrounding areas:</p>
        </div>
        <div className={styles.nearbyGrid}>
          {NEARBY.map((place, i) => (
            <div key={i} className={styles.nearbyCard}>
              <div className={styles.nearbyIcon}>
                <place.icon size={18} strokeWidth={1.8} />
              </div>
              <h4>{place.name}</h4>
              <p>{place.distance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Guest Love
            </div>
            <h2 className="section-title">
              What Our <em>Aerocity Guests</em> Say
            </h2>
          </div>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testiCard}>
                <Quote size={26} strokeWidth={1.5} />
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} fill="#E8A63C" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <div className={styles.testiAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Affordable Luxury
          </div>
          <h2 className="section-title">
            Spa <em>Prices</em> in Aerocity
          </h2>
        </div>
        <div className={styles.pricingCard}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((row, i) => (
                <tr key={i}>
                  <td className={styles.service}>{row.service}</td>
                  <td className={styles.duration}>{row.duration}</td>
                  <td className={styles.price}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.pricingNote}>*15% off for first-time visitors. Mention our website when booking.</p>
      </section>

      {/* FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2 className="section-title">
            Questions About <em>Spa in Aerocity</em>
          </h2>
        </div>
        <div className={styles.faqList}>
          {FAQS.map((faq, i) => {
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
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready for the Best Spa Experience in Aerocity?</h2>
        <p>Book your appointment now — open 24/7 with instant confirmation via WhatsApp or call.</p>
        <button type="button" className={styles.whatsappBtn} onClick={openWhatsApp}>
          <MessageCircle size={20} />
          Book on WhatsApp — Instant Confirmation
        </button>
        <div className={styles.ctaCallRow}>
          <PhoneCall size={14} /> Or call us: <a href="tel:+918929979542">+91 8929979542</a>
        </div>
      </section>

      {/* MAP / ADDRESS */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="section-title">
            Visit Our <em>Spa Near Aerocity</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={15} />
            Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre - Spa in Aerocity Location"
            />
          </div>
          <div className="keyword-cloud">
            {KEYWORDS.map((kw, i) => (
              <span key={i}>{kw}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
