import {
  Flame,
  Leaf,
  Snowflake,
  Sparkles,
  Hand,
  HeartHandshake,
  CircleCheck,
  Droplets,
  DoorOpen,
  ShieldCheck,
  BedDouble,
  MapPin,
  Clock,
  PhoneCall,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./RussianBanyaDelhi.module.css";

const SERVICES = [
  { icon: Flame, title: "Traditional Russian Steam Bath", desc: "Hot steam therapy" },
  { icon: Leaf, title: "Venik Massage", desc: "Birch branch therapeutic massage" },
  { icon: Snowflake, title: "Cold Water Therapy", desc: "Circulation enhancement" },
  { icon: Sparkles, title: "Full Banya Experience", desc: "Complete ritual treatment" },
  { icon: Hand, title: "Post-Banya Massage", desc: "Relaxation therapy" },
  { icon: HeartHandshake, title: "Couples Banya Package", desc: "Shared experience" },
];

const BENEFITS = [
  "Deep body detoxification",
  "Improved blood circulation",
  "Stress relief & relaxation",
  "Skin rejuvenation",
  "Muscle tension relief",
  "Immune system boost",
  "Complete wellness experience",
];

const FACILITIES = [
  { icon: Flame, title: "Authentic Russian Banya Chamber" },
  { icon: Droplets, title: "Cold Water Immersion Pool" },
  { icon: DoorOpen, title: "Private Treatment Rooms" },
  { icon: ShieldCheck, title: "Certified Banya Therapists" },
  { icon: Leaf, title: "Premium birch branches (Venik)" },
  { icon: BedDouble, title: "Luxury changing facilities" },
];

export default function RussianBanyaDelhi() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Flame size={13} strokeWidth={2} />
            Authentic Russian Wellness Tradition
          </div>
          <h1>Authentic Russian Banya in Delhi</h1>
          <p className={styles.heroText}>
            Discover the ancient art of Russian Banya at Russian Spa Centre in Delhi. Our authentic Russian Banya
            offers traditional steam therapy combined with Venik massage, providing complete body detoxification,
            rejuvenation, and wellness benefits.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold"><PhoneCall size={15} /> Book Your Banya Experience</a>
            <a href="/contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHAT IS RUSSIAN BANYA */}
      <section className={styles.section}>
        <div className="section-label">The Tradition</div>
        <h2 className="section-title">What is <em>Russian Banya</em>?</h2>
        <div className="divider" />
        <p className={styles.sectionText}>
          Russian Banya is a traditional Russian steam bath experience that dates back centuries. It combines hot
          steam therapy with cold water plunges and Venik (birch branches) massage to cleanse, detoxify, and
          revitalize the body. This holistic wellness therapy promotes circulation, relaxation, and overall health.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our Russian Banya <em>Services</em></h2>
          <div className="divider" />
          <div className={styles.cardsGrid}>
            {SERVICES.map((s, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardIcon}><s.icon size={24} strokeWidth={1.8} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.section}>
        <div className="section-label">Why It Works</div>
        <h2 className="section-title">Benefits of <em>Russian Banya</em></h2>
        <div className="divider" />
        <div className={styles.checkGrid}>
          {BENEFITS.map((b, i) => (
            <div key={i} className={styles.checkItem}>
              <div className={styles.checkIcon}><CircleCheck size={18} strokeWidth={1.8} /></div>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className="section-label">Our Space</div>
          <h2 className="section-title">Our Banya <em>Facilities</em></h2>
          <div className="divider" />
          <div className={styles.checkGrid}>
            {FACILITIES.map((f, i) => (
              <div key={i} className={styles.checkItem}>
                <div className={styles.checkIcon}><f.icon size={18} strokeWidth={1.8} /></div>
                <span>{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & HOURS */}
      <section className={styles.section}>
        <div className="section-label">Visit Us</div>
        <h2 className="section-title">Location & <em>Hours</em></h2>
        <div className="divider" />
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}><MapPin size={22} strokeWidth={1.8} /></div>
            <div>
              <h3>Prime Delhi NCR Locations</h3>
              <p>Visit us in Mahipalpur near IGI Airport, Aerocity, or other prime Delhi NCR locations.</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.cardIcon}><Clock size={22} strokeWidth={1.8} /></div>
            <div>
              <h3>Open 24/7</h3>
              <p>Open 24/7 for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>Book Your Experience</div>
        <h2>Ready for Your <em>Banya Experience?</em></h2>
        <p>Open 24/7 · Mahipalpur · Aerocity · Near IGI Airport</p>
        <div className={styles.ctaActions}>
          <a href="/contact" className="btn-gold">Book Your Banya Experience</a>
          <a href="tel:+918929979542" className={`btn-outline ${styles.ctaOutline}`}><PhoneCall size={14} /> +91 8929979542</a>
        </div>
      </section>
    </>
  );
}
