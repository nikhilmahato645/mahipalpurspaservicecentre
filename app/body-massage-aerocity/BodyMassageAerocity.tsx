"use client";

import { useState } from "react";
import {
  Plane,
  Hotel,
  TrainFront,
  Car,
  WavesLadder,
  Dumbbell,
  Hand,
  Flower2,
  Gem,
  Flame,
  Footprints,
  Zap,
  HeartHandshake,
  Leaf,
  Clock,
  GraduationCap,
  Lock,
  ShieldCheck,
  Wallet,
  Star,
  Quote,
  PhoneCall,
  MessageCircle,
  MapPin,
  ChevronDown,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./BodyMassageAerocity.module.css";

const PHONE = "+918929979542";
const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at your spa in Aerocity. Please share more details about services and availability.";

const openWhatsApp = () => {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/918929979542?text=${encoded}`, "_blank");
};

const LOCATION_PERKS = [
  { icon: Plane, title: "5-7 min from Airport", desc: "Ideal for layovers" },
  { icon: Hotel, title: "Close to All Aerocity Hotels", desc: "JW Marriott, Andaz, Pullman & more" },
  { icon: TrainFront, title: "Aerocity Metro", desc: "Just 3-5 minutes away" },
  { icon: Car, title: "Free Parking", desc: "Complimentary for all guests" },
];

const SERVICES = [
  { icon: WavesLadder, name: "Full Body Swedish Massage" },
  { icon: Dumbbell, name: "Deep Tissue Massage" },
  { icon: Hand, name: "Thai Massage" },
  { icon: Flower2, name: "Aromatherapy Massage" },
  { icon: Gem, name: "Hot Stone Therapy" },
  { icon: Flame, name: "Russian Banya + Massage" },
  { icon: Footprints, name: "Foot Reflexology" },
  { icon: Zap, name: "Sports Massage" },
  { icon: HeartHandshake, name: "Couples Body Massage" },
  { icon: Leaf, name: "Balinese & Shiatsu Massage" },
];

const WHY_CHOOSE = [
  { icon: Clock, title: "Open 24/7", desc: "Always available" },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Male & Female options" },
  { icon: Lock, title: "100% Privacy", desc: "Private rooms" },
  { icon: ShieldCheck, title: "Hospital Hygiene", desc: "Strict sanitization" },
  { icon: Wallet, title: "Best Prices", desc: "Premium quality at fair rates" },
  { icon: Star, title: "Excellent Reviews", desc: "Loved by Aerocity guests" },
];

const NEARBY = [
  { icon: Hotel, name: "JW Marriott Aerocity", distance: "2-3 min" },
  { icon: Hotel, name: "Andaz Aerocity", distance: "3 min" },
  { icon: Hotel, name: "Pullman Aerocity", distance: "3 min" },
  { icon: Hotel, name: "Roseate House", distance: "4 min" },
  { icon: Plane, name: "IGI Airport T3", distance: "5-7 min" },
  { icon: TrainFront, name: "Aerocity Metro", distance: "3 min" },
];

const TESTIMONIALS = [
  {
    text: "Outstanding deep tissue massage. Exactly what I needed after a long flight. Very professional and convenient location.",
    author: "David Thompson",
    location: "Transit Passenger",
  },
  {
    text: "The couples massage was perfect. Beautiful ambiance and skilled therapists. Highly recommend for Aerocity visitors.",
    author: "Neha & Vikram",
    location: "JW Marriott Guests",
  },
];

const PRICING = [
  { name: "Full Body Swedish Massage", duration: "60 min", price: "₹2,000" },
  { name: "Deep Tissue Massage", duration: "90 min", price: "₹3,500" },
  { name: "Thai Massage", duration: "75 min", price: "₹3,200" },
  { name: "Aromatherapy Massage", duration: "75 min", price: "₹3,000" },
  { name: "Hot Stone Therapy", duration: "75 min", price: "₹3,500" },
  { name: "Couples Body Massage", duration: "120 min", price: "₹6,000" },
];

const FAQS = [
  {
    q: "Which is the best body massage in Aerocity?",
    a: "Russian Spa Centre offers one of the best body massage experiences near Aerocity with professional therapists and convenient 24/7 timing.",
  },
  {
    q: "Do you offer couples body massage?",
    a: "Yes, we have beautiful private couples suites with synchronized full body massages.",
  },
  {
    q: "How close are you to Aerocity hotels?",
    a: "We are just 2-5 minutes drive from most Aerocity hotels.",
  },
  {
    q: "Are you open 24 hours?",
    a: "Yes, we operate 24/7 throughout the year.",
  },
];

export default function BodyMassageAerocity() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Star size={13} strokeWidth={2} />
            Aerocity&apos;s Best
          </div>
          <h1>
            Best <em>Body Massage in Aerocity</em>
            <br />
            Near IGI Airport
          </h1>
          <p className={styles.heroText}>
            Premium full body massage, deep tissue, Swedish, Thai &amp; couples massage just minutes from Aerocity
            hotels and IGI Airport Terminal 3. Open 24/7 with professional therapists.
          </p>
          <div className={styles.heroActions}>
            <a href={`tel:${PHONE}`} className="btn-gold">
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
        <div className={styles.twoCol}>
          <div>
            <div className="section-label">Why Aerocity?</div>
            <h2 className="section-title">
              Perfect Location for <em>Premium Massage</em>
            </h2>
            <div className="divider" />
            <div className={styles.introText}>
              <p>
                Located right next to Aerocity, we serve guests from all luxury hotels and travelers transiting
                through Delhi Airport. Experience rejuvenating body massage without traveling far.
              </p>
            </div>
          </div>
          <div className={styles.grid4}>
            {LOCATION_PERKS.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}>
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE MASSAGES */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.centered}`}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          Signature Massages
        </div>
        <h2 className="section-title">
          Best <em>Body Massage</em> in Aerocity
        </h2>
        <div className="divider" style={{ margin: "20px auto 0" }} />
        <div className={styles.serviceGrid}>
          {SERVICES.map((service, i) => (
            <div key={i} className={styles.servicePill}>
              <div className={styles.servicePillIcon}>
                <service.icon size={19} strokeWidth={1.8} />
              </div>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={`${styles.section} ${styles.centered}`}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          Why Choose Us
        </div>
        <h2 className="section-title">
          Best Body Massage Centre in <em>Aerocity</em>
        </h2>
        <div className="divider" style={{ margin: "20px auto 0" }} />
        <div className={styles.grid6} style={{ marginTop: "48px" }}>
          {WHY_CHOOSE.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY HOTELS & AREAS */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.centered}`}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          Nearby Hotels &amp; Areas
        </div>
        <h2 className="section-title">
          Convenient for <em>Aerocity Guests</em>
        </h2>
        <div className="divider" style={{ margin: "20px auto 0" }} />
        <div className={styles.grid6} style={{ marginTop: "48px" }}>
          {NEARBY.map((place, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>
                <place.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{place.name}</h3>
              <span className={styles.cardBadge}>{place.distance}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`${styles.section} ${styles.centered}`}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          Guest Feedback
        </div>
        <h2 className="section-title">What Aerocity Guests Say</h2>
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
      </section>

      {/* PRICING */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.centered}`}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          Pricing
        </div>
        <h2 className="section-title">
          Body Massage <em>Prices</em> in Aerocity
        </h2>
        <div className={styles.priceGrid}>
          {PRICING.map((row, i) => (
            <div key={i} className={styles.priceCard}>
              <div className={styles.name}>{row.name}</div>
              <span className={styles.amount}>{row.price}</span>
              <div className={styles.duration}>{row.duration}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.centered}`} style={{ paddingTop: 0 }}>
        <div className="section-label" style={{ justifyContent: "center" }}>
          FAQs
        </div>
        <h2 className="section-title">Body Massage in Aerocity</h2>
        <div className={styles.faqList} style={{ maxWidth: "800px", margin: "48px auto 0", textAlign: "left" }}>
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
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
          Book Your Session
        </div>
        <h2>Ready for a Relaxing Body Massage in Aerocity?</h2>
        <p>Book instantly — open 24/7</p>
        <button type="button" className={styles.whatsappBtn} onClick={openWhatsApp}>
          <MessageCircle size={18} /> Book on WhatsApp — Instant Confirmation
        </button>
        <p className={styles.ctaPhone}>
          <PhoneCall size={14} /> Or call:{" "}
          <a href={`tel:${PHONE}`}>+91 8929979542</a>
        </p>
      </section>

      {/* LOCATION */}
      <section className={styles.locationSection}>
        <h2 className="section-title">
          Visit Us for Body Massage in <em>Aerocity</em>
        </h2>
        <p className={styles.locationAddress}>
          <MapPin size={16} strokeWidth={1.8} />
          Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
        </p>
        <div className={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
