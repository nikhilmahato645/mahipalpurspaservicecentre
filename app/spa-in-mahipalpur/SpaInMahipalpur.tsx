"use client";

import { useState } from "react";
import {
  Plane,
  Building2,
  TrainFront,
  Car,
  Clock,
  GraduationCap,
  Lock,
  SprayCan,
  Wallet,
  Star,
  HeartHandshake,
  ShowerHead,
  Flame,
  WavesLadder,
  Dumbbell,
  Hand,
  Flower2,
  CircleDot,
  Footprints,
  Waypoints,
  Activity,
  Baby,
  Feather,
  Building,
  House,
  Quote,
  ChevronDown,
  PhoneCall,
  MapPin,
  MessageCircle,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./SpaInMahipalpur.module.css";

const WHY_MAHIPALPUR_FEATURES = [
  { icon: Plane, title: "10 min from IGI Airport", desc: "Perfect for travelers during layovers or after flights" },
  { icon: Building2, title: "Near Aerocity Hotels", desc: "2 min from JW Marriott, Andaz, Pullman & more" },
  { icon: TrainFront, title: "Metro Accessible", desc: "Aerocity & Mahipalpur metro stations nearby" },
  { icon: Car, title: "Free Parking", desc: "Complimentary secure parking for all guests" },
];

const SERVICES = [
  { icon: Flame, name: "Russian Banya Experience", desc: "Traditional Venik Treatment" },
  { icon: WavesLadder, name: "Swedish Massage", desc: "Classic Relaxation Therapy" },
  { icon: Dumbbell, name: "Deep Tissue Massage", desc: "Chronic Pain Relief" },
  { icon: Hand, name: "Thai Massage", desc: "Ancient Energy Work" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "Healing Essential Oils" },
  { icon: CircleDot, name: "Hot Stone Therapy", desc: "Deep Warmth Relaxation" },
  { icon: Footprints, name: "Reflexology", desc: "Whole Body Healing Through Feet" },
  { icon: Waypoints, name: "Shiatsu Massage", desc: "Japanese Meridian Therapy" },
  { icon: Activity, name: "Sports Massage", desc: "Performance Recovery" },
  { icon: HeartHandshake, name: "Couples Spa Package", desc: "Romantic Experience for Two" },
  { icon: Baby, name: "Prenatal Massage", desc: "Safe Pregnancy Care" },
  { icon: Feather, name: "Balinese Massage", desc: "Island Paradise Therapy" },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Open 24/7", desc: "365 days a year — including all holidays. We never close." },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Internationally trained with 5+ years experience." },
  { icon: Lock, title: "100% Privacy", desc: "Private rooms with complete discretion guaranteed." },
  { icon: SprayCan, title: "Hospital Hygiene", desc: "Medical-grade disinfection between every guest." },
  { icon: Wallet, title: "Best Prices", desc: "Luxury experience at affordable rates. No hidden charges." },
  { icon: Star, title: "350+ 5-Star Reviews", desc: "Trusted by thousands of satisfied clients." },
  { icon: HeartHandshake, title: "Couples Suites", desc: "Private romantic suites for couples." },
  { icon: ShowerHead, title: "Premium Amenities", desc: "Lockers, showers, robes, slippers included." },
];

const NEARBY_LOCATIONS = [
  { icon: Plane, name: "IGI Airport T3", distance: "10 min drive" },
  { icon: Building2, name: "JW Marriott Aerocity", distance: "2 min drive" },
  { icon: Building2, name: "Andaz Aerocity", distance: "3 min drive" },
  { icon: Building2, name: "Pullman Aerocity", distance: "3 min drive" },
  { icon: Building2, name: "Roseate House", distance: "4 min drive" },
  { icon: TrainFront, name: "Aerocity Metro", distance: "5 min auto" },
  { icon: Building, name: "Worldmark Aerocity", distance: "3 min drive" },
  { icon: House, name: "Vasant Kunj", distance: "10 min drive" },
  { icon: House, name: "Dwarka Sector 10", distance: "12 min drive" },
];

const TESTIMONIALS = [
  { text: "Best spa in Mahipalpur! The Russian Banya is absolutely authentic. I've tried many spas in the area, but this one is exceptional. Clean, professional, and therapists are highly skilled.", author: "Vikram Singh", location: "Mahipalpur Resident" },
  { text: "Perfect location near the airport. I booked a deep tissue massage during my layover and it was exactly what I needed after a long flight. Very professional and relaxing.", author: "James Mitchell", location: "Business Traveler" },
  { text: "The couples spa package is wonderful! My wife and I celebrated our anniversary here. Private room, synchronized massage, and the Russian Banya was a unique experience.", author: "Rahul Kapoor", location: "South Delhi" },
];

const PRICING = [
  ["Russian Banya Experience", "60 min", "₹2,500"],
  ["Full Body Swedish Massage", "60 min", "₹2,000"],
  ["Deep Tissue Massage", "90 min", "₹3,500"],
  ["Thai Massage", "75 min", "₹3,200"],
  ["Aromatherapy Massage", "75 min", "₹3,000"],
  ["Couples Spa Package", "120 min", "₹6,000"],
  ["Hot Stone Therapy", "75 min", "₹3,500"],
  ["Reflexology", "45 min", "₹2,200"],
];

const FAQS = [
  { q: "Which is the best spa in Mahipalpur near IGI Airport?", a: "Russian Spa Centre is widely recognized as the best spa in Mahipalpur, offering authentic Russian Banya, certified therapists, hospital-grade hygiene, and 24/7 availability — just 10 minutes from IGI Airport." },
  { q: "Do you offer body massage in Mahipalpur for couples?", a: "Yes! We have dedicated couples suites with synchronized massages, private rooms, and romantic amenities. Perfect for anniversaries or date nights." },
  { q: "Is Russian spa available in Mahipalpur?", a: "Absolutely. We are the only spa in Mahipalpur offering authentic Russian Banya with traditional Venik treatments, imported from Russia." },
  { q: "What are your spa timings in Mahipalpur?", a: "We are open 24 hours a day, 7 days a week, 365 days a year — including all holidays. We never close." },
  { q: "How far is your spa from Aerocity?", a: "Just 2-3 minutes drive from all Aerocity hotels including JW Marriott, Andaz, Pullman, and Holiday Inn." },
  { q: "Do you have male and female therapists?", a: "Yes, we have both male and female certified therapists. You can request your preference when booking." },
];

const KEYWORDS = [
  "spa in mahipalpur",
  "best spa mahipalpur",
  "spa near igi airport",
  "body massage mahipalpur",
  "russian spa mahipalpur",
  "luxury spa mahipalpur",
  "massage centre mahipalpur",
  "spa near aerocity",
  "russian banya mahipalpur",
  "deep tissue massage mahipalpur",
  "swedish massage mahipalpur",
  "thai spa mahipalpur",
  "couples spa mahipalpur",
  "24 hour spa mahipalpur",
  "spa near delhi airport",
  "mahipalpur massage centre",
  "body to body massage mahipalpur",
  "full body massage mahipalpur",
  "affordable spa mahipalpur",
];

const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at your spa in Mahipalpur. Please share more details about services and availability.";
const WHATSAPP_URL = `https://wa.me/918929979542?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function SpaInMahipalpur() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Mahipalpur&apos;s Finest</div>
          <h1>
            Best <em>Spa in Mahipalpur</em>
            <br />
            Near IGI Airport Delhi
          </h1>
          <p className={styles.heroText}>
            Experience authentic Russian Banya, luxury body massage, and world-class wellness therapies just 10
            minutes from IGI Airport Terminal 3. Open 24/7 — we&apos;re always here for you.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <MessageCircle size={15} /> Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHY MAHIPALPUR */}
      <section className={styles.section}>
        <div className={styles.twoCol}>
          <div>
            <div className="section-label">Why Mahipalpur?</div>
            <h2 className="section-title">
              Perfectly Located <em>Spa Hub</em> Near Airport
            </h2>
            <div className="divider" />
            <p>
              Mahipalpur has emerged as Delhi NCR&apos;s premier spa destination, thanks to its strategic location
              near IGI Airport and Aerocity. As the best spa in Mahipalpur, Russian Spa Centre offers unparalleled
              convenience for travelers, business professionals, and local residents alike.
            </p>
            <p>
              Whether you&apos;re landing at Delhi Airport after a long flight, staying at luxury hotels in
              Aerocity, or living in South Delhi, our Mahipalpur location is your ideal wellness destination. We
              combine authentic Russian wellness traditions with modern luxury — something no other spa in
              Mahipalpur offers.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {WHY_MAHIPALPUR_FEATURES.map((item, i) => (
              <div key={i} className={styles.iconCard}>
                <div className={styles.iconChip}>
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
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Treatments
          </div>
          <h2 className="section-title">
            Luxury <em>Spa Services</em> in Mahipalpur
          </h2>
          <p>
            We offer Delhi NCR&apos;s most comprehensive range of spa treatments — all available 24/7 at our
            Mahipalpur location.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIconChip}>
                <s.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">
            What Makes Us the <em>Best Spa in Mahipalpur</em>
          </h2>
        </div>
        <div className={styles.grid4}>
          {WHY_CHOOSE_US.map((item, i) => (
            <div key={i} className={styles.iconCard}>
              <div className={styles.iconChip}>
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
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Serving Nearby Areas
          </div>
          <h2 className="section-title">
            Convenient for <em>Travelers &amp; Residents</em>
          </h2>
          <p>Our Mahipalpur location is easily accessible from these popular Delhi NCR destinations:</p>
        </div>
        <div className={styles.grid3}>
          {NEARBY_LOCATIONS.map((place, i) => (
            <div key={i} className={styles.iconCard}>
              <div className={styles.iconChip}>
                <place.icon size={20} strokeWidth={1.8} />
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
          <div className={styles.sectionCenterHead} style={{ margin: "0 auto" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Client Love
            </div>
            <h2 className="section-title">
              What Our <em>Mahipalpur Clients</em> Say
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
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Affordable Luxury
          </div>
          <h2 className="section-title">
            Spa <em>Prices</em> in Mahipalpur
          </h2>
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
        <p className={styles.pricingNote}>*15% off for first-time visitors. Mention our website when booking.</p>
      </section>

      {/* FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2 className="section-title">
            Questions About <em>Spa in Mahipalpur</em>
          </h2>
        </div>
        <div className={styles.faqInner}>
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
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
          Book Your Experience
        </div>
        <h2>Ready for the Best Spa Experience in Mahipalpur?</h2>
        <p>Book your appointment now — we&apos;re open 24/7 and always ready to welcome you.</p>
        <div className={styles.ctaActions}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
            <MessageCircle size={20} /> Book on WhatsApp — Instant Confirmation
          </a>
        </div>
        <p className={styles.ctaCallLine}>
          <PhoneCall size={14} /> Or call us directly: <a href="tel:+918929979542">+91 8929979542</a>
        </p>
      </section>

      {/* MAP & ADDRESS */}
      <section className={styles.mapSection}>
        <h2 className="section-title">
          Visit Our <em>Spa in Mahipalpur</em>
        </h2>
        <p className={styles.mapAddress}>
          <MapPin size={16} strokeWidth={1.8} />
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
            title="Russian Spa Centre Mahipalpur Location"
          />
        </div>
        <div className={styles.keywordCloud}>
          {KEYWORDS.map((kw, i) => (
            <span key={i} className={styles.keywordPill}>
              {kw}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
