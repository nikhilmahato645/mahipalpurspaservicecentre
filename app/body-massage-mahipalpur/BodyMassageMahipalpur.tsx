"use client";

import {
  Sparkles,
  WavesLadder,
  Dumbbell,
  Hand,
  Flower2,
  Flame,
  HeartHandshake,
  CircleCheckBig,
  Clock,
  GraduationCap,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./BodyMassageMahipalpur.module.css";

const SERVICES = [
  { icon: WavesLadder, name: "Swedish Full Body Massage", desc: "Relaxing & therapeutic" },
  { icon: Dumbbell, name: "Deep Tissue Massage", desc: "For muscle relief" },
  { icon: Hand, name: "Thai Massage", desc: "Traditional & energizing" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "With essential oils" },
  { icon: Flame, name: "Hot Stone Massage", desc: "For deep relaxation" },
  { icon: HeartHandshake, name: "Couples Massage", desc: "For two people" },
];

const WHY_CHOOSE = [
  { icon: Clock, text: "24/7 Open for your convenience" },
  { icon: GraduationCap, text: "Certified Professional Therapists" },
  { icon: Sparkles, text: "Premium Quality Oils & Lotions" },
  { icon: ShieldCheck, text: "Clean & Hygienic Environment" },
  { icon: MapPin, text: "Multiple Locations in Delhi NCR" },
  { icon: CircleCheckBig, text: "Affordable & Transparent Pricing" },
];

export default function BodyMassageMahipalpur() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={13} strokeWidth={2} />
            Mahipalpur · Near IGI Airport
          </div>
          <h1>Professional Body Massage in Mahipalpur</h1>
          <p className={styles.heroText}>
            Experience the ultimate body massage experience at Russian Spa Centre, located in Mahipalpur near IGI Airport.
            Our certified massage therapists provide world-class full body massage treatments using premium oils and traditional techniques.
          </p>
          <div className={styles.heroActions}>
            <a href="/contact" className="btn-gold">Book Your Massage Now</a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* SERVICES */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>Our Services</div>
            <h2 className="section-title">Body Massage <em>Services</em></h2>
          </div>
          <div className={styles.cardGrid}>
            {SERVICES.map((s, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}><s.icon size={24} strokeWidth={1.8} /></div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className={`${styles.section} ${styles.whySection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>Why Choose Us</div>
            <h2 className="section-title">Why Choose Our Body Massage <em>Service</em></h2>
          </div>
          <div className={styles.whyGrid}>
            {WHY_CHOOSE.map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}><w.icon size={20} strokeWidth={1.8} /></div>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className={`${styles.section} ${styles.locationSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>Find Us</div>
            <h2 className="section-title">Our <em>Location</em></h2>
          </div>
          <div className={styles.locationBlock}>
            <div className={styles.locationIcon}><MapPin size={24} strokeWidth={1.8} /></div>
            <div>
              <h3>Mahipalpur, Near IGI Airport</h3>
              <p>
                Located just 10 minutes from IGI Airport in Mahipalpur, we&apos;re easily accessible from anywhere in Delhi NCR.
                Near Aerocity, Defence Enclave, and all major landmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>Book Your Experience</div>
        <h2>Ready for Your <em>Massage?</em></h2>
        <p>Open 24/7 · Certified Therapists · 10 Min from IGI Airport</p>
        <a href="/contact" className="btn-gold">Book Your Massage Now</a>
      </section>
    </>
  );
}
