"use client";

import {
  HeartHandshake,
  Droplets,
  Sparkles,
  Gift,
  CalendarHeart,
  Lock,
  Clock,
  MapPin,
  GraduationCap,
  DoorOpen,
  Globe,
  Wallet,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./CoupleSpaDelhi.module.css";

const SERVICES = [
  { icon: HeartHandshake, title: "Couples Massage Package", desc: "Swedish, Deep Tissue, Thai & Aromatherapy for two" },
  { icon: Droplets, title: "Romantic Jacuzzi Treatment", desc: "Private hydrotherapy and relaxation" },
  { icon: Sparkles, title: "Couples Wellness Retreat", desc: "Full day spa package with multiple therapies" },
  { icon: Gift, title: "Honeymoon Package", desc: "Special romantic spa experience" },
  { icon: CalendarHeart, title: "Anniversary Special", desc: "Customized couples treatment" },
  { icon: Lock, title: "Private Spa Suite", desc: "Intimate setting for exclusive treatments" },
];

const WHY_CHOOSE = [
  { icon: Clock, text: "24/7 Open - Book Anytime" },
  { icon: MapPin, text: "Multiple Locations in Delhi NCR" },
  { icon: GraduationCap, text: "Certified Professional Therapists" },
  { icon: DoorOpen, text: "Luxury Private Treatment Rooms" },
  { icon: Globe, text: "International Wellness Standards" },
  { icon: Wallet, text: "Competitive & Transparent Pricing" },
];

const OCCASIONS = [
  "Honeymoon Couples",
  "Anniversaries",
  "Romantic Getaways",
  "Valentine's Day",
  "Special Occasions",
  "Corporate Couple Events",
  "Relationship Wellness",
];

const LOCATIONS = [
  "Mahipalpur (near IGI Airport)",
  "Aerocity",
  "Vasant Kunj",
  "Other Prime Delhi NCR Locations",
];

export default function CoupleSpaDelhi() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <HeartHandshake size={13} strokeWidth={2} />
            Romantic Wellness For Two
          </div>
          <h1>Couple Spa in Delhi - Romantic Wellness Retreat</h1>
          <p className={styles.heroSub}>Mahipalpur · Aerocity · Near IGI Airport</p>
          <p className={styles.heroText}>
            Experience ultimate relaxation and bonding with your loved one at Russian Spa Centre&apos;s
            exclusive Couple Spa packages in Delhi. Located near IGI Airport in Mahipalpur and Aerocity,
            we provide the perfect romantic retreat for couples seeking rejuvenation and wellness.
          </p>
          <div className={styles.heroActions}>
            <a href="/contact" className="btn-gold">
              Book Your Couple Spa Now <ArrowRight size={15} />
            </a>
            <a href="tel:+918929979542" className="btn-outline">
              <PhoneCall size={14} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* SERVICES */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Our Couple Spa Services</div>
          <h2 className="section-title">Romantic Treatments <em>For Two</em></h2>
          <div className="divider" style={{ margin: "20px auto 0" }} />
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIcon}><s.icon size={24} strokeWidth={1.8} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={styles.whySection}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Why Choose Us</div>
          <h2 className="section-title">Why Choose Our <em>Couple Spa</em></h2>
          <div className="divider" style={{ margin: "20px auto 0" }} />
        </div>
        <div className={styles.whyGrid}>
          {WHY_CHOOSE.map((w, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIcon}><w.icon size={20} strokeWidth={1.8} /></div>
              <span>{w.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className={styles.occasionsSection}>
        <div className={styles.occasionsInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>Ideal Occasions</div>
          <h2 className="section-title">Perfect For Every <em>Celebration</em></h2>
          <div className="divider" style={{ margin: "20px auto 0" }} />
          <p>
            Honeymoon couples, anniversaries, romantic getaways, Valentine&apos;s Day, special occasions,
            corporate couple events, and relationship wellness.
          </p>
          <div className={styles.chipRow}>
            {OCCASIONS.map((o, i) => (
              <span key={i} className={styles.chip}>
                <HeartHandshake size={14} strokeWidth={1.8} />
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & BOOKING */}
      <section className={styles.locationSection}>
        <div className={styles.locationInner}>
          <div className={styles.locationText}>
            <div className="section-label">Visit Us</div>
            <h2 className="section-title">Location & <em>Booking</em></h2>
            <div className="divider" />
            <p>
              Visit us in Mahipalpur (near IGI Airport), Aerocity, Vasant Kunj, and other prime Delhi NCR
              locations. Open 24/7 for your convenience.
            </p>
          </div>
          <div className={styles.locationChips}>
            {LOCATIONS.map((loc, i) => (
              <div key={i} className={styles.locationChip}>
                <MapPin size={17} strokeWidth={1.8} />
                <span>{loc}</span>
              </div>
            ))}
            <div className={styles.locationChip}>
              <Clock size={17} strokeWidth={1.8} />
              <span>Open 24/7 for Your Convenience</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>Book Your Experience</div>
        <h2>Ready For Your <em>Romantic Escape?</em></h2>
        <p>Open 24/7 · Multiple Delhi NCR Locations · Private Couples Suites</p>
        <div className={styles.ctaActions}>
          <a href="/contact" className="btn-gold">
            Book Your Couple Spa Now <ArrowRight size={15} />
          </a>
          <a href="tel:+918929979542" className={`btn-outline ${styles.ctaOutline}`}>
            <PhoneCall size={14} /> +91 8929979542
          </a>
        </div>
      </section>
    </>
  );
}
