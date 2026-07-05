"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Building2,
  Building,
  TrainFront,
  Car,
  Flame,
  WavesLadder,
  Dumbbell,
  Activity,
  Flower2,
  Flower,
  Thermometer,
  Footprints,
  Hand,
  PersonStanding,
  HeartHandshake,
  Baby,
  Clock,
  GraduationCap,
  Lock,
  ShieldCheck,
  Wallet,
  Star,
  UsersRound,
  ShowerHead,
  Stethoscope,
  TreePine,
  House,
  Quote,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  MapPin,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./SpaInVasantKunj.module.css";

const WHY_VK = [
  { icon: ShoppingBag, title: "Next to Ambience Mall", desc: "Perfect post-shopping relaxation" },
  { icon: Building2, title: "DLF Avenue Nearby", desc: "Minutes from South Delhi's premium hub" },
  { icon: TrainFront, title: "Metro Accessible", desc: "Vasant Kunj & Saket metro stations close" },
  { icon: Car, title: "Ample Parking", desc: "Complimentary secure parking for all guests" },
];

const SERVICES = [
  { icon: Flame, name: "Russian Banya Experience", desc: "Traditional Venik Treatment" },
  { icon: WavesLadder, name: "Swedish Massage", desc: "Classic Relaxation Therapy" },
  { icon: Dumbbell, name: "Deep Tissue Massage", desc: "Chronic Pain Relief" },
  { icon: Activity, name: "Thai Massage", desc: "Ancient Energy Work" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "Healing Essential Oils" },
  { icon: Thermometer, name: "Hot Stone Therapy", desc: "Deep Warmth Relaxation" },
  { icon: Footprints, name: "Reflexology", desc: "Whole Body Healing Through Feet" },
  { icon: Hand, name: "Shiatsu Massage", desc: "Japanese Meridian Therapy" },
  { icon: PersonStanding, name: "Sports Massage", desc: "Performance Recovery" },
  { icon: HeartHandshake, name: "Couples Spa Package", desc: "Romantic Experience for Two" },
  { icon: Baby, name: "Prenatal Massage", desc: "Safe Pregnancy Care" },
  { icon: Flower, name: "Balinese Massage", desc: "Island Paradise Therapy" },
];

const WHY_CHOOSE_US = [
  { icon: Clock, title: "Open 24/7", desc: "365 days a year — including all holidays. We never close." },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Internationally trained with 5+ years experience." },
  { icon: Lock, title: "100% Privacy", desc: "Private rooms with complete discretion guaranteed." },
  { icon: ShieldCheck, title: "Hospital Hygiene", desc: "Medical-grade disinfection between every guest." },
  { icon: Wallet, title: "Best Prices", desc: "Luxury experience at affordable rates. No hidden charges." },
  { icon: Star, title: "350+ 5-Star Reviews", desc: "Trusted by thousands of satisfied clients." },
  { icon: UsersRound, title: "Couples Suites", desc: "Private romantic suites for couples." },
  { icon: ShowerHead, title: "Premium Amenities", desc: "Lockers, showers, robes, slippers included." },
];

const NEARBY = [
  { icon: ShoppingBag, name: "Ambience Mall Vasant Kunj", distance: "2 min drive" },
  { icon: Building2, name: "DLF Avenue Saket", distance: "5 min drive" },
  { icon: Stethoscope, name: "Fortis Hospital VK", distance: "3 min drive" },
  { icon: Building, name: "Vasant Square Mall", distance: "4 min drive" },
  { icon: TreePine, name: "Deer Park", distance: "7 min drive" },
  { icon: TrainFront, name: "Vasant Kunj Metro", distance: "5 min auto" },
  { icon: House, name: "Saket", distance: "8 min drive" },
  { icon: House, name: "Hauz Khas", distance: "12 min drive" },
  { icon: House, name: "Greater Kailash", distance: "15 min drive" },
];

const TESTIMONIALS = [
  {
    text: "Finally found a luxury spa in Vasant Kunj that delivers! The Russian Banya is incredible. After a long day of shopping at Ambience Mall, this is exactly what I needed.",
    author: "Priya Sharma",
    location: "Vasant Kunj Resident",
  },
  {
    text: "Best spa near Ambience Mall. The deep tissue massage was perfect for my back pain. Professional therapists and spotless facility. Highly recommend.",
    author: "Ankit Mehta",
    location: "Saket",
  },
  {
    text: "The couples spa package is amazing! My husband and I celebrated our anniversary here. Private suite, synchronized massage, and the ambiance was perfect.",
    author: "Neha Kapoor",
    location: "Hauz Khas",
  },
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
  {
    q: "Which is the best spa in Vasant Kunj near Ambience Mall?",
    a: "Russian Spa Centre is widely recognized as the best spa in Vasant Kunj, offering authentic Russian Banya, certified therapists, hospital-grade hygiene, and 24/7 availability — just minutes from Ambience Mall and DLF Avenue.",
  },
  {
    q: "Do you offer body massage in Vasant Kunj for couples?",
    a: "Yes! We have dedicated couples suites with synchronized massages, private rooms, and romantic amenities. Perfect for anniversaries or date nights in South Delhi.",
  },
  {
    q: "Is Russian spa available in Vasant Kunj?",
    a: "Absolutely. We are the premier spa in Vasant Kunj offering authentic Russian Banya with traditional Venik treatments, imported from Russia.",
  },
  {
    q: "What are your spa timings in Vasant Kunj?",
    a: "We are open 24 hours a day, 7 days a week, 365 days a year — including all holidays. We never close.",
  },
  {
    q: "How far is your spa from Saket?",
    a: "Just 5-8 minutes drive from Saket, DLF Avenue, and Select Citywalk. Very convenient for South Delhi residents.",
  },
  {
    q: "Do you have male and female therapists?",
    a: "Yes, we have both male and female certified therapists. You can request your preference when booking.",
  },
];

const KEYWORDS = [
  "spa in vasant kunj",
  "best spa vasant kunj",
  "spa near ambience mall",
  "body massage vasant kunj",
  "russian spa vasant kunj",
  "luxury spa vasant kunj",
  "massage centre vasant kunj",
  "spa near saket",
  "russian banya vasant kunj",
  "deep tissue massage vasant kunj",
  "swedish massage vasant kunj",
  "thai spa vasant kunj",
  "couples spa vasant kunj",
  "24 hour spa vasant kunj",
  "spa near dlf avenue",
  "vasant kunj massage centre",
  "body to body massage vasant kunj",
  "full body massage vasant kunj",
  "affordable spa vasant kunj",
];

const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at your spa in Vasant Kunj. Please share more details about services and availability.";

function openWhatsApp() {
  window.open(`https://wa.me/918929979542?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank");
}

export default function SpaInVasantKunj() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <MapPin size={13} strokeWidth={2} />
            South Delhi&apos;s Finest
          </div>
          <h1>
            Best <em>Spa in Vasant Kunj</em>
            <br />
            Luxury Massage South Delhi
          </h1>
          <p className={styles.heroText}>
            Experience authentic Russian Banya, luxury body massage, and world-class wellness therapies in the
            heart of South Delhi. Open 24/7 — your sanctuary in Vasant Kunj awaits.
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

      {/* WHY VASANT KUNJ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div className={styles.twoColText}>
              <div className="section-label">Why Vasant Kunj?</div>
              <h2 className="section-title">
                South Delhi&apos;s <em>Premium Spa Destination</em>
              </h2>
              <div className="divider" />
              <p>
                Vasant Kunj has established itself as South Delhi&apos;s premier hub for luxury wellness and
                relaxation. As the best spa in Vasant Kunj, Russian Spa Centre offers unparalleled convenience for
                residents of South Delhi, shoppers at Ambience Mall, and professionals across the district.
              </p>
              <p>
                Whether you&apos;re looking to unwind after a day of shopping, need relief from work stress, or
                simply want to experience authentic Russian wellness traditions, our Vasant Kunj location delivers
                luxury and authenticity that sets us apart from other spas in South Delhi.
              </p>
            </div>
            <div className={styles.featureGrid}>
              {WHY_VK.map((item, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.iconChip}>
                    <item.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Our Treatments
            </div>
            <h2 className="section-title">
              Luxury <em>Spa Services</em> in Vasant Kunj
            </h2>
            <p>
              We offer South Delhi&apos;s most comprehensive range of spa treatments — all available 24/7 at our
              Vasant Kunj location.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.iconChip}>
                  <s.icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Why Choose Us
            </div>
            <h2 className="section-title">
              What Makes Us the <em>Best Spa in Vasant Kunj</em>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={i} className={styles.whyCard}>
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

      {/* NEARBY LOCATIONS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Serving Nearby Areas
            </div>
            <h2 className="section-title">
              Convenient for <em>South Delhi Residents</em>
            </h2>
            <p>Our Vasant Kunj location is easily accessible from these popular South Delhi destinations:</p>
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Client Love
            </div>
            <h2 className="section-title">
              What Our <em>Vasant Kunj Clients</em> Say
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
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Affordable Luxury
            </div>
            <h2 className="section-title">
              Spa <em>Prices</em> in Vasant Kunj
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
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              FAQs
            </div>
            <h2 className="section-title">
              Questions About <em>Spa in Vasant Kunj</em>
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
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
          Book Your Visit
        </div>
        <h2>Ready for the Best Spa Experience in Vasant Kunj?</h2>
        <p>Book your appointment now — we&apos;re open 24/7 and always ready to welcome you.</p>
        <button type="button" onClick={openWhatsApp} className={styles.whatsappBtn}>
          <MessageCircle size={20} strokeWidth={2} />
          Book on WhatsApp — Instant Confirmation
        </button>
        <div className={styles.ctaCallLine}>
          <PhoneCall size={14} />
          Or call us directly: <a href="tel:+918929979542">+91 8929979542</a>
        </div>
      </section>

      {/* MAP & ADDRESS */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className="section-title">
            Visit Our <em>Spa in Vasant Kunj</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={16} /> Near Ambience Mall, Vasant Kunj, New Delhi — 110070
          </p>
          <div className={styles.mapFrameWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sVasant%20Kunj%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre Vasant Kunj Location"
            />
          </div>
          <div className={styles.keywordCloud}>
            {KEYWORDS.map((k, i) => (
              <span key={i}>{k}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
