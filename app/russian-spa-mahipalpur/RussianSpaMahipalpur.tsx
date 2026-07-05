"use client";

import { useState } from "react";
import {
  Flame,
  Leaf,
  Thermometer,
  Dumbbell,
  Snowflake,
  Flower2,
  WavesLadder,
  Hand,
  HeartHandshake,
  Gem,
  GraduationCap,
  ShieldCheck,
  Clock,
  Lock,
  Wallet,
  Star,
  Plane,
  Building2,
  TrainFront,
  MapPin,
  Quote,
  ChevronDown,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./RussianSpaMahipalpur.module.css";

const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at your spa in Mahipalpur. Please share more details about services and availability.";

function openWhatsApp() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/918929979542?text=${encodedMessage}`, "_blank");
}

const INTRO_CARDS = [
  { icon: Leaf, title: "Authentic Venik Massage", desc: "Traditional Russian birch leaf therapy" },
  { icon: Flame, title: "Russian Steam Ritual", desc: "Contrast therapy for deep detox" },
  { icon: Gem, title: "Imported Russian Equipment", desc: "Genuine veniks & spa accessories" },
  { icon: GraduationCap, title: "Russian-Trained Therapists", desc: "Experts in traditional techniques" },
];

const SERVICES = [
  { icon: Flame, name: "Authentic Russian Banya", desc: "Traditional Venik Treatment" },
  { icon: Leaf, name: "Venik Massage (Berezovy)", desc: "Birch Leaf Therapy" },
  { icon: Thermometer, name: "Russian Steam Ritual", desc: "Contrast Temperature Experience" },
  { icon: Dumbbell, name: "Russian Deep Tissue Massage", desc: "Sport Recovery" },
  { icon: Snowflake, name: "Russian Ice Plunge", desc: "Traditional Cold Therapy" },
  { icon: Flower2, name: "Honey & Venik Scrub", desc: "Siberian Detox Treatment" },
  { icon: WavesLadder, name: "Swedish Massage", desc: "Classic Relaxation" },
  { icon: Dumbbell, name: "Deep Tissue Massage", desc: "Chronic Pain Relief" },
  { icon: Hand, name: "Thai Massage", desc: "Ancient Energy Work" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "Healing Essential Oils" },
  { icon: Gem, name: "Hot Stone Therapy", desc: "Deep Warmth Relaxation" },
  { icon: HeartHandshake, name: "Russian Couples Spa", desc: "Romantic Experience for Two" },
];

const WHY_US = [
  { icon: Flame, title: "Authentic Russian Banya", desc: "Only genuine Russian banya experience in Mahipalpur." },
  { icon: Leaf, title: "Imported Venik Bundles", desc: "Birch & oak veniks sourced from Russia." },
  { icon: Clock, title: "Open 24/7", desc: "365 days a year — including all holidays." },
  { icon: GraduationCap, title: "Russian-Trained Therapists", desc: "Experts in traditional venik massage." },
  { icon: Lock, title: "100% Privacy", desc: "Private rooms with complete discretion." },
  { icon: ShieldCheck, title: "Hospital Hygiene", desc: "Medical-grade disinfection protocols." },
  { icon: Wallet, title: "Best Prices", desc: "Luxury Russian spa at affordable rates." },
  { icon: Star, title: "500+ 5-Star Reviews", desc: "Trusted by thousands of clients." },
];

const NEARBY = [
  { icon: Plane, name: "IGI Airport T3", distance: "10 min drive" },
  { icon: Building2, name: "JW Marriott Aerocity", distance: "2 min drive" },
  { icon: Building2, name: "Andaz Aerocity", distance: "3 min drive" },
  { icon: Building2, name: "Pullman Aerocity", distance: "3 min drive" },
  { icon: Building2, name: "Roseate House", distance: "4 min drive" },
  { icon: TrainFront, name: "Aerocity Metro", distance: "5 min auto" },
  { icon: Building2, name: "Worldmark Aerocity", distance: "3 min drive" },
  { icon: MapPin, name: "Vasant Kunj", distance: "10 min drive" },
  { icon: MapPin, name: "Dwarka Sector 10", distance: "12 min drive" },
];

const TESTIMONIALS = [
  {
    text: "The best Russian spa in Mahipalpur! The authentic banya with venik massage is incredible. I've visited spas across Delhi NCR, but this is the only place that offers genuine Russian experience. The therapists are truly experts.",
    author: "Vikram Singh",
    location: "Mahipalpur Resident",
  },
  {
    text: "Found this Russian spa near IGI Airport during my layover. The steam ritual and birch leaf massage was exactly what I needed after a 14-hour flight. Professional, authentic, and very relaxing.",
    author: "James Mitchell",
    location: "Business Traveler from London",
  },
  {
    text: "The Russian couples spa package is wonderful! My wife and I experienced the traditional banya together. The private suite, venik massage, and contrast therapy made it unforgettable.",
    author: "Rahul Kapoor",
    location: "South Delhi",
  },
];

const PRICING = [
  ["Authentic Russian Banya + Venik Massage", "90 min", "₹3,500"],
  ["Russian Venik Massage (Birch/Oak)", "60 min", "₹2,800"],
  ["Russian Steam Ritual + Ice Plunge", "45 min", "₹2,200"],
  ["Russian Deep Tissue Massage", "75 min", "₹3,200"],
  ["Full Body Swedish Massage", "60 min", "₹2,000"],
  ["Deep Tissue Massage", "90 min", "₹3,500"],
  ["Thai Massage", "75 min", "₹3,200"],
  ["Aromatherapy Massage", "75 min", "₹3,000"],
  ["Russian Couples Spa Package", "120 min", "₹6,500"],
  ["Hot Stone Therapy", "75 min", "₹3,500"],
];

const FAQS = [
  {
    q: "Which is the best Russian spa in Mahipalpur near IGI Airport?",
    a: "Russian Spa Centre is the only authentic Russian spa in Mahipalpur, offering genuine Russian Banya with traditional Venik massage, imported equipment, and Russian-trained therapists. We're just 10 minutes from IGI Airport.",
  },
  {
    q: "What is Russian Banya and Venik massage?",
    a: "Russian Banya is a traditional steam bath ritual followed by Venik massage using birch or oak leaves. The venik is used to gently massage the body, improving circulation, detoxifying skin, and providing deep relaxation. It's a centuries-old Russian wellness tradition.",
  },
  {
    q: "Do you offer Russian spa for couples?",
    a: "Yes! Our Russian couples spa package includes a private banya session, synchronized venik massage, and romantic amenities. Perfect for anniversaries or special occasions.",
  },
  {
    q: "Is Russian spa available 24/7 in Mahipalpur?",
    a: "Absolutely. We are open 24 hours a day, 7 days a week, 365 days a year — including all holidays. We never close.",
  },
  {
    q: "How far is your Russian spa from Aerocity?",
    a: "Just 2-3 minutes drive from all Aerocity hotels including JW Marriott, Andaz, Pullman, and Holiday Inn.",
  },
  {
    q: "Do you have male and female therapists for Russian treatments?",
    a: "Yes, we have both male and female certified Russian-trained therapists. You can request your preference when booking.",
  },
];

const KEYWORDS = [
  "russian spa in mahipalpur",
  "best russian spa mahipalpur",
  "authentic russian banya mahipalpur",
  "russian spa near igi airport",
  "venik massage mahipalpur",
  "russian body massage mahipalpur",
  "russian banya mahipalpur",
  "spa in mahipalpur",
  "best spa mahipalpur",
  "spa near igi airport",
  "body massage mahipalpur",
  "spa near aerocity",
  "deep tissue massage mahipalpur",
  "couples spa mahipalpur",
  "24 hour spa mahipalpur",
  "russian spa delhi ncr",
  "russian banya delhi",
];

export default function RussianSpaMahipalpur() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Flame size={13} strokeWidth={2} />
            Authentic Russian Banya
          </div>
          <h1>
            Best <em>Russian Spa in Mahipalpur</em> Near IGI Airport Delhi
          </h1>
          <p className={styles.heroText}>
            Experience the true Russian Banya tradition with Venik massage, steam rituals, and luxury body
            therapies. Just 10 minutes from IGI Airport Terminal 3 — open 24/7 for travelers and locals.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <button type="button" onClick={openWhatsApp} className="btn-outline">
              <MessageCircle size={15} /> Book via WhatsApp
            </button>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.num}>24/7</span>
              <span className={styles.label}>Always Open</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.num}>10min</span>
              <span className={styles.label}>From IGI Airport</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.num}>500+</span>
              <span className={styles.label}>5-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* INTRO */}
      <section className={styles.introSection}>
        <div className={styles.introGrid}>
          <div className={styles.introText}>
            <div className="section-label">Authentic Russian Experience</div>
            <h2 className="section-title">
              India&apos;s Finest <em>Russian Spa</em> in Mahipalpur
            </h2>
            <div className="divider" />
            <p>
              Welcome to Russian Spa Centre — the only authentic Russian spa in Mahipalpur. Our signature
              Russian Banya experience brings centuries-old Russian wellness traditions to Delhi NCR. From
              the traditional Venik (birch leaf) massage to contrast steam rituals, we offer an unparalleled
              spa journey.
            </p>
            <p>
              Located strategically near IGI Airport and Aerocity, our Russian spa is the perfect destination
              for travelers seeking authentic European wellness. We combine Russian banya expertise with
              luxury hospitality — making us the most sought-after Russian spa in Mahipalpur.
            </p>
          </div>
          <div className={styles.introCardsGrid}>
            {INTRO_CARDS.map((item, i) => (
              <div key={i} className={styles.introCard}>
                <div className={styles.introCardIcon}>
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
      <section className={styles.servicesSection}>
        <div className={styles.servicesIntro}>
          <div className="section-label" style={{ justifyContent: "center" }}>Our Russian Treatments</div>
          <h2 className="section-title">
            Signature <em>Russian Spa</em> Services in Mahipalpur
          </h2>
          <p>
            We bring authentic Russian wellness traditions to Delhi NCR. Experience our exclusive Russian
            Banya treatments alongside premium massage therapies.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <s.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.whySection}>
        <div className="section-label" style={{ justifyContent: "center" }}>Why Russian Spa Centre</div>
        <h2 className="section-title">
          What Makes Us the <em>Best Russian Spa in Mahipalpur</em>
        </h2>
        <div className={styles.whyGrid}>
          {WHY_US.map((item, i) => (
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

      {/* NEARBY */}
      <section className={styles.nearbySection}>
        <div className="section-label" style={{ justifyContent: "center" }}>Visit Our Russian Spa</div>
        <h2 className="section-title">
          Convenient for <em>Travelers &amp; Residents</em>
        </h2>
        <div className={styles.nearbyIntro}>
          <p>Our Mahipalpur location is easily accessible from these popular Delhi NCR destinations:</p>
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
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>Client Experiences</div>
          <h2 className="section-title">
            What Our <em>Russian Spa Clients</em> Say
          </h2>
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
      <section className={styles.pricingSection}>
        <div className="section-label" style={{ justifyContent: "center" }}>Affordable Russian Luxury</div>
        <h2 className="section-title">
          Russian Spa <em>Prices</em> in Mahipalpur
        </h2>
        <div className={styles.pricingCard}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>Russian Spa Service</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((row, i) => (
                <tr key={i}>
                  <td>{row[0]}</td>
                  <td className={styles.duration}>{row[1]}</td>
                  <td className={styles.price}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.pricingNote}>
          *20% off for first-time visitors on Russian Banya experience. Mention our website when booking.
        </p>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="section-label" style={{ justifyContent: "center" }}>FAQs</div>
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Questions About <em>Russian Spa in Mahipalpur</em>
        </h2>
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
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
          Book Your Experience
        </div>
        <h2>Ready for the Best Russian Spa Experience in Mahipalpur?</h2>
        <p>Book your authentic Russian Banya session now — we&apos;re open 24/7 and always ready to welcome you.</p>
        <div className={styles.ctaActions}>
          <button type="button" onClick={openWhatsApp} className={styles.whatsappBtn}>
            <MessageCircle size={18} /> Book on WhatsApp — Instant Confirmation
          </button>
        </div>
        <p className={styles.ctaCallNote}>
          <PhoneCall size={14} /> Or call us directly:{" "}
          <a href="tel:+918929979542">+91 8929979542</a>
        </p>
      </section>

      {/* MAP */}
      <section className={styles.mapSection}>
        <h2 className="section-title">
          Visit Our <em>Russian Spa in Mahipalpur</em>
        </h2>
        <p className={styles.addressLine}>
          <MapPin size={16} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
        </p>
        <div className={styles.mapFrameWrap}>
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
          {KEYWORDS.map((k, i) => (
            <span key={i}>{k}</span>
          ))}
        </div>
      </section>
    </>
  );
}
