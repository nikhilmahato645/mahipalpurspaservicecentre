import {
  Star,
  Flame,
  Hand,
  Flower2,
  HeartHandshake,
  Gem,
  Footprints,
  Sparkles,
  Clock,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Wallet,
  Lock,
  PhoneCall,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./SpaInDelhi.module.css";

const SERVICES = [
  { icon: Flame, title: "Russian Banya", desc: "Authentic traditional steam therapy" },
  { icon: Hand, title: "Body Massage", desc: "Swedish, Deep Tissue, Thai & more" },
  { icon: Flower2, title: "Aromatherapy", desc: "Relaxation with essential oils" },
  { icon: HeartHandshake, title: "Couples Spa", desc: "Romantic wellness packages" },
  { icon: Gem, title: "Hot Stone Therapy", desc: "Deep muscle relaxation" },
  { icon: Footprints, title: "Reflexology", desc: "Traditional healing therapy" },
  { icon: Sparkles, title: "Wellness Packages", desc: "Customized spa experiences" },
];

const WHY_US = [
  { icon: Clock, text: "24/7 Open - Spa whenever you want" },
  { icon: MapPin, text: "Multiple Locations Across Delhi NCR" },
  { icon: GraduationCap, text: "Certified & Experienced Therapists" },
  { icon: Gem, text: "Premium Quality Products" },
  { icon: ShieldCheck, text: "Luxury & Clean Environment" },
  { icon: Wallet, text: "Affordable Pricing with Quality Guarantee" },
  { icon: Lock, text: "Private & Comfortable Treatment Rooms" },
];

const LOCATIONS = [
  { name: "Mahipalpur", sub: "Near IGI Airport", href: "/spa-in-mahipalpur" },
  { name: "Aerocity", sub: "Delhi NCR", href: "/spa-in-aerocity" },
  { name: "Vasant Kunj", sub: "Delhi NCR", href: "/spa-in-vasant-kunj" },
  { name: "Gurugram Guests", sub: "25-40 min via NH-48", href: "/spa-in-gurugram" },
];

export default function SpaInDelhi() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Star size={13} strokeWidth={2} />
            Delhi NCR&apos;s Premium Wellness Destination
          </div>
          <h1>Best Spa in Delhi - Premium Wellness Experience</h1>
          <p className={styles.heroSub}>Mahipalpur · Aerocity · Vasant Kunj</p>
          <p className={styles.heroText}>
            Welcome to Russian Spa Centre, Delhi&apos;s premier destination for luxury spa services and wellness
            treatments. With multiple locations across Delhi NCR including Mahipalpur, Aerocity, Vasant Kunj, and
            near IGI Airport, we bring the finest spa experience to your doorstep.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold"><PhoneCall size={15} /> Call & Book Now</a>
            <a href="/contact" className="btn-outline">Find Your Nearest Spa</a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* SERVICES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Our Treatments</div>
          <h2 className="section-title">Our Spa Services in <em>Delhi</em></h2>
          <div className="divider" style={{ margin: "20px auto" }} />
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}><s.icon size={24} strokeWidth={1.8} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>Why Choose Us</div>
            <h2 className="section-title">Why Russian Spa Centre <em>Delhi</em></h2>
            <div className="divider" style={{ margin: "20px auto" }} />
          </div>
          <div className={styles.whyGrid}>
            {WHY_US.map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}><w.icon size={20} strokeWidth={1.8} /></div>
                <span>{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Where To Find Us</div>
          <h2 className="section-title">Our Locations in <em>Delhi</em></h2>
          <div className="divider" style={{ margin: "20px auto" }} />
        </div>
        <p className={styles.locationsText}>
          Mahipalpur (near IGI Airport), Aerocity, Vasant Kunj, and other premium locations throughout Delhi NCR.
          All locations feature the same high standards of luxury and service.
        </p>
        <div className={styles.locationsGrid}>
          {LOCATIONS.map((l, i) => (
            <a key={i} href={l.href} className={styles.locationCard}>
              <div className={styles.locationIcon}><MapPin size={20} strokeWidth={1.8} /></div>
              <div>
                <strong>{l.name}</strong>
                <span>{l.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>Book Your Experience</div>
        <h2>Find Your <em>Nearest Spa</em></h2>
        <p>Open 24/7 · Multiple Locations Across Delhi NCR · Certified Therapists</p>
        <div className={styles.ctaActions}>
          <a href="tel:+918929979542" className="btn-gold">Call Now & Book</a>
          <a href="/contact" className={`btn-outline ${styles.ctaOutline}`}>Find Your Nearest Spa</a>
        </div>
      </section>
    </>
  );
}
