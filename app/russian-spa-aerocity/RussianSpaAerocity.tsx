"use client";

import { useState } from "react";
import {
  Sparkles,
  PhoneCall,
  MessageCircle,
  Flame,
  Leaf,
  Plane,
  Building2,
  ShowerHead,
  Dumbbell,
  WavesLadder,
  Mountain,
  Footprints,
  HeartHandshake,
  Flower2,
  Activity,
  Clock,
  GraduationCap,
  Lock,
  ShieldCheck,
  Wallet,
  Star,
  TrainFront,
  Landmark,
  Quote,
  ChevronDown,
  MapPin,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./RussianSpaAerocity.module.css";

const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at your spa in Aerocity. Please share more details about services and availability.";
const WHATSAPP_URL = `https://wa.me/918929979542?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WHY_RUSSIAN_SPA = [
  { icon: Flame, title: "Authentic Russian Banya", desc: "Traditional steam + Venik massage" },
  { icon: Leaf, title: "Imported Venik", desc: "Fresh birch & oak bundles from Russia" },
  { icon: Plane, title: "5-7 min from Airport", desc: "Ideal for layovers & transit" },
  { icon: Building2, title: "Near Aerocity Hotels", desc: "JW Marriott, Andaz, Pullman & more" },
];

const SERVICES = [
  { icon: Flame, name: "Traditional Russian Banya Experience" },
  { icon: Leaf, name: "Venik Massage (Birch & Oak Bundles)" },
  { icon: ShowerHead, name: "Russian Steam Room Session" },
  { icon: Dumbbell, name: "Russian Deep Tissue Massage" },
  { icon: WavesLadder, name: "Swedish + Russian Fusion Massage" },
  { icon: Mountain, name: "Hot Stone Therapy with Banya" },
  { icon: Footprints, name: "Russian Reflexology" },
  { icon: HeartHandshake, name: "Couples Russian Banya Package" },
  { icon: Flower2, name: "Aromatherapy after Banya" },
  { icon: Activity, name: "Post-Flight Recovery Russian Package" },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Open 24/7", desc: "Available anytime — perfect for travelers" },
  { icon: GraduationCap, title: "Certified Russian Therapists", desc: "Specially trained in Banya techniques" },
  { icon: Lock, title: "Complete Privacy", desc: "Private Banya suites" },
  { icon: ShieldCheck, title: "Highest Hygiene Standards", desc: "Medical-grade cleaning" },
  { icon: Wallet, title: "Best Value in Delhi", desc: "Authentic experience at fair prices" },
  { icon: Star, title: "Authentic Experience", desc: "Most genuine Russian Banya in Delhi NCR" },
];

const NEARBY = [
  { icon: Building2, name: "JW Marriott Aerocity", distance: "2-3 min" },
  { icon: Building2, name: "Andaz Aerocity", distance: "3 min" },
  { icon: Building2, name: "Pullman Aerocity", distance: "3 min" },
  { icon: Building2, name: "Roseate House", distance: "4 min" },
  { icon: Plane, name: "IGI Airport T3", distance: "5-7 min" },
  { icon: TrainFront, name: "Aerocity Metro Station", distance: "3 min" },
  { icon: Landmark, name: "Worldmark Aerocity", distance: "2 min" },
];

const TESTIMONIALS = [
  {
    text: "The Russian Banya was incredibly authentic — best I've experienced outside Russia. Perfect after a long international flight. Highly recommended!",
    author: "Alexei Ivanov",
    location: "Russian Traveler",
  },
  {
    text: "Amazing Venik massage! The therapists really know the traditional technique. Felt completely rejuvenated. Will come back every time I'm in Delhi.",
    author: "Priya Malhotra",
    location: "Andaz Aerocity Guest",
  },
  {
    text: "Unique and relaxing experience. The couples Russian Banya package was perfect for our anniversary. Great location near the airport.",
    author: "Rahul & Anika",
    location: "Aerocity",
  },
];

const PRICING = [
  ["Traditional Russian Banya + Venik", "60 min", "₹2,800"],
  ["Russian Banya Experience", "90 min", "₹3,500"],
  ["Russian Deep Tissue Massage", "75 min", "₹3,200"],
  ["Couples Russian Banya Package", "120 min", "₹6,500"],
  ["Russian Banya + Swedish Massage", "90 min", "₹3,800"],
  ["Post-Flight Recovery Package", "60 min", "₹2,500"],
];

const FAQS = [
  {
    q: "Is this an authentic Russian Spa in Aerocity?",
    a: "Yes. We offer genuine Russian Banya with traditional Venik treatment using imported bundles and techniques followed in Russia.",
  },
  {
    q: "How far is your Russian Spa from Aerocity hotels?",
    a: "Just 2-5 minutes drive from JW Marriott, Andaz, Pullman, Roseate House and other Aerocity hotels.",
  },
  {
    q: "Do you offer couples Russian Banya?",
    a: "Yes, we have private couples suites specially designed for romantic Russian Banya experience.",
  },
  {
    q: "What are your timings?",
    a: "We are open 24 hours a day, 7 days a week — perfect for flight arrivals and layovers.",
  },
  {
    q: "Do you have experienced therapists?",
    a: "Yes, our therapists are specially trained in Russian Banya and Venik massage techniques.",
  },
];

const KEYWORDS = [
  "russian spa aerocity",
  "russian banya aerocity",
  "authentic russian banya",
  "russian spa near airport",
  "venik massage aerocity",
  "russian massage delhi",
  "24 hour russian spa",
];

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

export default function RussianSpaAerocity() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={13} strokeWidth={2} />
            Authentic Russian Experience
          </div>
          <h1>
            Best <em>Russian Spa in Aerocity</em>
            <br />
            Near IGI Airport Delhi
          </h1>
          <p className={styles.heroText}>
            Experience traditional Russian Banya with authentic Venik treatment, luxury body
            massage, and complete wellness therapies. Just minutes from Aerocity hotels and IGI
            Airport Terminal 3. Open 24/7.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <button type="button" onClick={openWhatsApp} className="btn-outline">
              <MessageCircle size={15} /> Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHY RUSSIAN SPA */}
      <section className={styles.section}>
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <div className="section-label">Why Russian Spa?</div>
            <h2 className="section-title">
              Traditional <em>Russian Banya</em> in Aerocity
            </h2>
            <div className="divider" />
            <p>
              Bring the authentic Russian wellness tradition to Aerocity. Our Russian Spa Centre
              offers genuine Banya experience with imported Venik (birch &amp; oak bundles),
              steam, and expert therapists trained in Russian techniques.
            </p>
            <p>
              Perfect for travelers staying in Aerocity hotels or those looking for a unique and
              deeply relaxing experience near IGI Airport.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {WHY_RUSSIAN_SPA.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.iconChip}>
                  <item.icon size={20} strokeWidth={1.8} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.centerHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Russian Treatments
          </div>
          <h2 className="section-title">
            Signature <em>Russian Spa Services</em>
          </h2>
          <div className="divider" />
          <p className={styles.leadText}>
            Authentic Russian wellness combined with modern luxury therapies.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {SERVICES.map((service, i) => (
            <div key={i} className={styles.serviceItem}>
              <div className={styles.iconChip}>
                <service.icon size={18} strokeWidth={1.8} />
              </div>
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.section}>
        <div className={styles.centerHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">
            Best <em>Russian Spa in Aerocity</em>
          </h2>
          <div className="divider" />
        </div>
        <div className={styles.whyGrid}>
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconChip}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.centerHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Convenient Location
          </div>
          <h2 className="section-title">
            Serving <em>Aerocity Hotels</em>
          </h2>
          <div className="divider" />
        </div>
        <div className={styles.nearbyGrid}>
          {NEARBY.map((place, i) => (
            <div key={i} className={styles.nearbyCard}>
              <div className={styles.iconChip}>
                <place.icon size={18} strokeWidth={1.8} />
              </div>
              <h4>{place.name}</h4>
              <p>{place.distance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section}>
        <div className={styles.centerHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Guest Experiences
          </div>
          <h2 className="section-title">
            What Our <em>Russian Spa Clients</em> Say
          </h2>
          <div className="divider" />
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
      </section>

      {/* PRICING */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.centerHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Pricing
          </div>
          <h2 className="section-title">
            Russian Spa <em>Packages</em>
          </h2>
          <div className="divider" />
        </div>
        <div className={styles.pricingWrap}>
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
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.pricingNote}>
          *15% off for first-time visitors. Mention website when booking.
        </p>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.centerHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2 className="section-title">Russian Spa in Aerocity</h2>
          <div className="divider" />
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
        <h2>Ready for an Authentic Russian Spa Experience in Aerocity?</h2>
        <p>Book your traditional Banya session now — open 24/7</p>
        <button type="button" onClick={openWhatsApp} className={styles.whatsappBtn}>
          <MessageCircle size={20} />
          Book on WhatsApp — Instant Confirmation
        </button>
        <p className={styles.ctaPhoneLine}>
          <PhoneCall size={14} /> Or call: <a href="tel:+918929979542">+91 8929979542</a>
        </p>
      </section>

      {/* LOCATION & MAP */}
      <section className={styles.mapSection}>
        <div className={styles.mapInner}>
          <h2 className="section-title">
            Visit Our <em>Russian Spa Near Aerocity</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={15} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur,
            New Delhi — 110037
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre Aerocity Location"
            />
          </div>
          <div className={styles.keywordCloud}>
            {KEYWORDS.map((kw, i) => (
              <span key={i}>{kw}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
