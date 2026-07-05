"use client";

import { useState } from "react";
import {
  Plane,
  Building2,
  ShoppingBag,
  Car,
  WavesLadder,
  Dumbbell,
  Flame,
  Hand,
  Flower2,
  Sun,
  Route,
  Sparkles,
  ThumbsUp,
  HeartHandshake,
  Clock,
  GraduationCap,
  Lock,
  ShieldCheck,
  Wallet,
  Star,
  Hotel,
  Quote,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  MapPin,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./BodyMassageVasantKunj.module.css";

const WHATSAPP_MESSAGE =
  "Hello! I want to book an appointment at your spa in Vasant Kunj. Please share more details about services and availability.";

const openWhatsApp = () => {
  const encoded = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/918929979542?text=${encoded}`, "_blank");
};

const WHY_VK = [
  { icon: Plane, title: "12 min from IGI Airport", desc: "Convenient for travelers and airport staff" },
  { icon: Building2, title: "Heart of Vasant Kunj", desc: "Easily accessible from all sectors" },
  { icon: ShoppingBag, title: "Near DLF Promenade & Ambience Mall", desc: "Perfect after shopping or work" },
  { icon: Car, title: "Free Parking Available", desc: "Secure parking for all clients" },
];

const SERVICES = [
  { icon: WavesLadder, name: "Full Body Swedish Massage", desc: "Ultimate Relaxation" },
  { icon: Dumbbell, name: "Deep Tissue Massage", desc: "Muscle Knots & Tension Relief" },
  { icon: Flame, name: "Russian Banya + Venik Massage", desc: "" },
  { icon: Hand, name: "Thai Massage", desc: "Stretching & Energy Flow" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "Essential Oil Healing" },
  { icon: Sun, name: "Hot Stone Therapy", desc: "Deep Muscle Warmth" },
  { icon: Route, name: "Foot Reflexology", desc: "Full Body Healing" },
  { icon: Sparkles, name: "Shiatsu & Balinese Massage", desc: "" },
  { icon: ThumbsUp, name: "Sports Massage", desc: "Recovery for Active People" },
  { icon: HeartHandshake, name: "Couples Body Massage Package", desc: "" },
];

const WHY_US = [
  { icon: Clock, title: "Open 24/7", desc: "Available round the clock for your convenience" },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Highly trained male & female therapists" },
  { icon: Lock, title: "Complete Privacy", desc: "Private rooms with full discretion" },
  { icon: ShieldCheck, title: "Hygienic Standards", desc: "Medical-grade cleaning after every session" },
  { icon: Wallet, title: "Best Value", desc: "Premium quality at reasonable prices" },
  { icon: Star, title: "500+ Happy Clients", desc: "Excellent reviews from Vasant Kunj residents" },
];

const NEARBY = [
  { icon: Building2, name: "Vasant Kunj Sector A,B,C,D", distance: "Local" },
  { icon: Building2, name: "Vasant Vihar", distance: "8-10 min" },
  { icon: ShoppingBag, name: "DLF Promenade Mall", distance: "5 min" },
  { icon: Plane, name: "IGI Airport T3", distance: "12 min" },
  { icon: Hotel, name: "Aerocity Hotels", distance: "10-12 min" },
  { icon: Building2, name: "Munirka & RK Puram", distance: "10 min" },
  { icon: ShoppingBag, name: "Ambience Mall Vasant Kunj", distance: "6 min" },
  { icon: Building2, name: "Saket & Malviya Nagar", distance: "15-18 min" },
];

const TESTIMONIALS = [
  {
    text: "The best full body massage I've had in Delhi. Deep tissue was excellent and the therapists are very professional. Highly recommend for Vasant Kunj residents.",
    author: "Anjali Sharma",
    location: "Vasant Kunj",
  },
  {
    text: "Perfect after a long flight. Got a Swedish + Aromatherapy combo. Felt completely rejuvenated. Clean and peaceful environment.",
    author: "Arjun Mehra",
    location: "Frequent Traveler",
  },
  {
    text: "Couples massage was amazing! Great ambiance and skilled therapists. We'll definitely come back.",
    author: "Priya & Rohan",
    location: "Vasant Vihar",
  },
];

const PRICING = [
  { icon: WavesLadder, name: "Full Body Swedish Massage", duration: "60 min", price: "₹2,000" },
  { icon: Dumbbell, name: "Deep Tissue Massage", duration: "90 min", price: "₹3,500" },
  { icon: Hand, name: "Thai Massage", duration: "75 min", price: "₹3,200" },
  { icon: Flower2, name: "Aromatherapy Massage", duration: "75 min", price: "₹3,000" },
  { icon: Flame, name: "Russian Banya Experience", duration: "60 min", price: "₹2,500" },
  { icon: Sun, name: "Hot Stone Therapy", duration: "75 min", price: "₹3,500" },
  { icon: HeartHandshake, name: "Couples Body Massage", duration: "120 min", price: "₹6,000" },
  { icon: Route, name: "Foot Reflexology", duration: "45 min", price: "₹2,200" },
];

const FAQS = [
  {
    q: "Which is the best body massage centre in Vasant Kunj?",
    a: "Russian Spa Centre is considered one of the best for body massage in Vasant Kunj, offering professional therapists, premium ambiance, and 24/7 availability.",
  },
  {
    q: "Do you offer couples body massage in Vasant Kunj?",
    a: "Yes, we have beautiful private couples suites with synchronized full body massages.",
  },
  {
    q: "How far is your centre from Vasant Kunj?",
    a: "We are very conveniently located and easily reachable from all sectors of Vasant Kunj within 5-12 minutes.",
  },
  {
    q: "Are you open 24 hours for massage in Vasant Kunj?",
    a: "Yes, we operate 24/7 throughout the year.",
  },
  {
    q: "Do you provide male and female therapists?",
    a: "Yes, both male and female certified therapists are available. You can choose your preference.",
  },
];

const KEYWORDS = [
  "body massage vasant kunj",
  "best body massage vasant kunj",
  "full body massage vasant kunj",
  "spa in vasant kunj",
  "deep tissue massage vasant kunj",
  "swedish massage vasant kunj",
  "couples massage vasant kunj",
  "massage centre vasant kunj",
  "russian spa vasant kunj",
  "24 hour massage vasant kunj",
];

export default function BodyMassageVasantKunj() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className="section-label">Vasant Kunj&apos;s Best</div>
          <h1>
            Best <em>Body Massage in Vasant Kunj</em>
            <br />
            Delhi
          </h1>
          <p className={styles.heroText}>
            Experience premium full body massage, deep tissue, Swedish, Thai & Russian therapies at Russian Spa
            Centre. Just 10-12 minutes from IGI Airport. Open 24/7 with certified therapists.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <button type="button" className={styles.whatsappBtn} onClick={openWhatsApp}>
              <MessageCircle size={15} /> Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHY VASANT KUNJ */}
      <section className={styles.whySection}>
        <div className={styles.whyGridWrap}>
          <div className={styles.whyText}>
            <div className="section-label">Why Vasant Kunj?</div>
            <h2 className="section-title">
              Premium <em>Wellness Destination</em> in South Delhi
            </h2>
            <div className="divider" />
            <p>
              Vasant Kunj is one of Delhi&apos;s most affluent and well-connected areas. Our spa is ideally located
              to serve residents of Vasant Kunj, Vasant Vihar, Munirka, and nearby sectors.
            </p>
            <p>
              Whether you&apos;re looking for a relaxing full body massage after a long day or deep tissue therapy
              for muscle recovery, we bring luxury wellness right to your neighborhood with authentic Russian
              techniques and modern therapies.
            </p>
          </div>
          <div className={styles.miniCardGrid}>
            {WHY_VK.map((item, i) => (
              <div key={i} className={styles.miniCard}>
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
      <section className={styles.servicesSection}>
        <div className={styles.sectionHead}>
          <div className="section-label">Our Signature Massages</div>
          <h2 className="section-title">
            Best <em>Body Massage Services</em> in Vasant Kunj
          </h2>
          <p>Professional body massage treatments tailored for relaxation, pain relief, and rejuvenation.</p>
        </div>
        <div className={styles.serviceGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.iconChip}>
                <s.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{s.name}</h4>
                {s.desc && <p>{s.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={styles.chooseSection}>
        <div className={styles.sectionHead}>
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">
            What Makes Us the <em>Best Massage Centre in Vasant Kunj</em>
          </h2>
        </div>
        <div className={styles.chooseGrid}>
          {WHY_US.map((item, i) => (
            <div key={i} className={styles.chooseCard}>
              <div className={styles.iconChip} style={{ margin: "0 auto 16px" }}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY LOCATIONS */}
      <section className={styles.nearbySection}>
        <div className={styles.sectionHead}>
          <div className="section-label">Serving Nearby Areas</div>
          <h2 className="section-title">
            Convenient for <em>Vasant Kunj & Surroundings</em>
          </h2>
        </div>
        <div className={styles.nearbyGrid}>
          {NEARBY.map((place, i) => (
            <div key={i} className={styles.nearbyCard}>
              <div className={styles.iconChip} style={{ margin: "0 auto 12px" }}>
                <place.icon size={18} strokeWidth={1.8} />
              </div>
              <h5>{place.name}</h5>
              <span>{place.distance}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Client Love
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            What Vasant Kunj <em>Clients Say</em>
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
        <div className={styles.sectionHead}>
          <div className="section-label">Our Prices</div>
          <h2 className="section-title">
            Body <em>Massage Prices</em> in Vasant Kunj
          </h2>
        </div>
        <div className={styles.pricingGrid}>
          {PRICING.map((p, i) => (
            <div key={i} className={styles.priceCard}>
              <div className={styles.iconChip}>
                <p.icon size={20} strokeWidth={1.8} />
              </div>
              <h5>{p.name}</h5>
              <span className={styles.amount}>{p.price}</span>
              <div className={styles.duration}>{p.duration}</div>
            </div>
          ))}
        </div>
        <p className={styles.pricingNote}>*First-time visitors get 15% off. Mention website at booking.</p>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Common Questions About <em>Body Massage in Vasant Kunj</em>
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
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready for a Rejuvenating Body Massage in Vasant Kunj?</h2>
        <p>Book your session now — open 24/7 with instant confirmation.</p>
        <button type="button" className={styles.ctaWhatsapp} onClick={openWhatsApp}>
          <MessageCircle size={22} />
          Book on WhatsApp — Instant Confirmation
        </button>
        <p className={styles.ctaCallLine}>
          <PhoneCall size={14} /> Or call: <a href="tel:+918929979542">+91 8929979542</a>
        </p>
      </section>

      {/* LOCATION & MAP */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="section-title">
            Visit Us for Body Massage in <em>Vasant Kunj</em>
          </h2>
          <p className={styles.address}>
            <MapPin size={16} />
            Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037 (Serving Vasant
            Kunj)
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre - Body Massage Vasant Kunj"
            />
          </div>
          <div className="keyword-cloud">
            {KEYWORDS.map((kw) => (
              <span key={kw}>{kw}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
