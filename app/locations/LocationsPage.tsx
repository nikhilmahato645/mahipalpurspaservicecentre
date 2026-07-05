"use client";

import {
  MapPin,
  PhoneCall,
  Navigation,
  Building2,
  Flame,
  Hand,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Clock,
  GraduationCap,
  Car,
  ArrowRight,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./LocationsPage.module.css";

const SERVICES_ALL = [
  { icon: Flame, label: "Russian Banya (Authentic Steam Therapy)" },
  { icon: Hand, label: "Full Body Massage (Multiple Types)" },
  { icon: HeartHandshake, label: "Couples Spa Packages" },
  { icon: Sparkles, label: "Wellness & Rejuvenation Therapies" },
  { icon: ShieldCheck, label: "Premium Facilities & Hygiene" },
  { icon: Clock, label: "Open 24/7 for your convenience" },
];

const WHY_VISIT = [
  { icon: MapPin, label: "Strategic locations near IGI Airport & major landmarks" },
  { icon: ShieldCheck, label: "Consistent premium service standards" },
  { icon: GraduationCap, label: "Certified & experienced therapists" },
  { icon: Sparkles, label: "Clean, luxurious spa environment" },
  { icon: Car, label: "Easy parking available" },
  { icon: Clock, label: "Open round-the-clock for travelers & professionals" },
];

export default function LocationsPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <MapPin size={13} strokeWidth={2} />
            Delhi NCR&apos;s Spa Network
          </div>
          <h1>
            Our Premium Spa <em>Locations</em> in Delhi NCR
          </h1>
          <p className={styles.heroText}>
            Russian Spa Centre operates multiple premium locations across Delhi NCR, each offering the same
            world-class spa services 24/7.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call & Book Now
            </a>
            <a href="/contact" className="btn-outline">
              <Navigation size={15} /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* PRIMARY LOCATIONS */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Find Us
          </div>
          <h2 className="section-title">
            Primary <em>Locations</em>
          </h2>
        </div>
        <div className={styles.locationsGrid}>
          {/* Mahipalpur (Main Centre) */}
          <div className={styles.locationCard}>
            <div className={styles.locationBadge}>Main Centre</div>
            <div className={styles.locationIconChip}>
              <Building2 size={22} strokeWidth={1.8} />
            </div>
            <h3>Mahipalpur (Main Centre)</h3>
            <p className={styles.locationAddress}>
              <MapPin size={15} strokeWidth={1.8} />
              Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037
            </p>
            <p className={styles.locationMeta}>
              <Car size={15} strokeWidth={1.8} />
              10 minutes from IGI Airport Terminal 3 | Near JW Marriott Hotel Aerocity | Easy parking
            </p>
            <p className={styles.locationPhone}>
              <PhoneCall size={15} strokeWidth={1.8} />
              +91 8929979542 (Call/WhatsApp available 24/7)
            </p>
            <a href="/spa-in-mahipalpur/" className={styles.locationLink}>
              Visit Mahipalpur Spa Page <ArrowRight size={14} />
            </a>
            <div className={styles.locationRelated}>
              Related:
              <a href="/russian-spa-mahipalpur/">Russian Spa Mahipalpur</a>
              ·
              <a href="/body-massage-mahipalpur/">Body Massage Mahipalpur</a>
            </div>
          </div>

          {/* Aerocity Location */}
          <div className={styles.locationCard}>
            <div className={styles.locationIconChip}>
              <Building2 size={22} strokeWidth={1.8} />
            </div>
            <h3>Aerocity Location</h3>
            <p>Premium location near 5-star hotels and shopping complex. Minutes from IGI Airport.</p>
            <a href="/spa-in-aerocity/" className={styles.locationLink}>
              Visit Aerocity Spa Page <ArrowRight size={14} />
            </a>
            <div className={styles.locationRelated}>
              Related:
              <a href="/russian-spa-aerocity/">Russian Spa Aerocity</a>
              ·
              <a href="/body-massage-aerocity/">Body Massage Aerocity</a>
            </div>
          </div>

          {/* Vasant Kunj Location */}
          <div className={styles.locationCard}>
            <div className={styles.locationIconChip}>
              <Building2 size={22} strokeWidth={1.8} />
            </div>
            <h3>Vasant Kunj Location</h3>
            <p>South Delhi location near Ambience Mall and DLF Avenue for convenient access.</p>
            <a href="/spa-in-vasant-kunj/" className={styles.locationLink}>
              Visit Vasant Kunj Spa Page <ArrowRight size={14} />
            </a>
            <div className={styles.locationRelated}>
              Related:
              <a href="/body-massage-vasant-kunj/">Body Massage Vasant Kunj</a>
            </div>
          </div>

          {/* Other Locations */}
          <div className={styles.locationCard}>
            <div className={styles.locationIconChip}>
              <MapPin size={22} strokeWidth={1.8} />
            </div>
            <h3>Other Locations</h3>
            <p>Multiple spa centers across Delhi NCR. Call +91 8929979542 for more location details.</p>
          </div>
        </div>
      </section>

      {/* SERVICES AT ALL LOCATIONS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            What&apos;s Included
          </div>
          <h2 className="section-title">
            Services at <em>All Locations</em>
          </h2>
        </div>
        <div className={styles.grid3}>
          {SERVICES_ALL.map((s, i) => (
            <div key={i} className={styles.checkCard}>
              <div className={styles.checkIconChip}>
                <s.icon size={20} strokeWidth={1.8} />
              </div>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY VISIT OUR LOCATIONS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">
            Why Visit <em>Our Locations</em>
          </h2>
        </div>
        <div className={styles.grid3}>
          {WHY_VISIT.map((w, i) => (
            <div key={i} className={styles.checkCard}>
              <div className={styles.checkIconChip}>
                <w.icon size={20} strokeWidth={1.8} />
              </div>
              <span>{w.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO REACH US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.reachBox}>
          <div className={styles.reachIcon}>
            <Navigation size={26} strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
              How to <em>Reach Us</em>
            </h2>
            <p>
              <strong>Phone:</strong> +91 8929979542 (24/7) &middot; <strong>WhatsApp:</strong> Available for
              instant communication
            </p>
            <p>For nearest location, directions, and current availability, please call or message us anytime.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
          Visit Us Today
        </div>
        <h2>
          Find Your Nearest <em>Spa</em>
        </h2>
        <a href="/contact" className="btn-gold" style={{ marginTop: "8px" }}>
          <Navigation size={16} /> Get Directions
        </a>
      </section>
    </>
  );
}
