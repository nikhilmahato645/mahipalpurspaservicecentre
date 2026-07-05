"use client";

import { useState } from "react";
import {
  Star,
  Leaf,
  GraduationCap,
  ShieldCheck,
  Clock,
  Flame,
  WavesLadder,
  Dumbbell,
  Flower2,
  Hand,
  HeartHandshake,
  Sparkle,
  Globe,
  MapPin,
  Gem,
  Lock,
  Trophy,
  Car,
  MessageCircle,
  PhoneCall,
  CalendarCheck,
  PartyPopper,
  ChevronDown,
  Quote,
  ArrowRight,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./Home.module.css";

const MARQUEE_ITEMS = [
  "Russian Banya", "Swedish Massage", "Deep Tissue", "Thai Massage", "Aromatherapy",
  "Couples Package", "Reflexology", "Shiatsu", "Sports Massage", "Hot Stone Therapy",
];

const FEATURES = [
  { icon: Leaf, title: "Authentic Russian Banya", desc: "Traditional Venik treatments with imported birch leaves — an experience unique in all of Delhi NCR." },
  { icon: GraduationCap, title: "Certified Therapists", desc: "Internationally trained, continuously educated. Over 50 years of combined healing expertise." },
  { icon: ShieldCheck, title: "Hospital-Grade Hygiene", desc: "Third-party audited cleanliness protocols. Fresh linens, hypoallergenic products, spotless rooms." },
  { icon: Clock, title: "Open 24/7, Every Day", desc: "Late-night arrival? Early morning flight? We are always here for you, no appointment wait." },
];

const SERVICES = [
  { icon: Flame, name: "Russian Banya", desc: "Authentic Venik steam bath experience with birch leaves. Centuries of healing wisdom.", price: "₹2,500", duration: "60 min" },
  { icon: WavesLadder, name: "Swedish Massage", desc: "Classic full-body technique with long flowing strokes for complete relaxation.", price: "₹2,800", duration: "60 min" },
  { icon: Dumbbell, name: "Deep Tissue Therapy", desc: "Intensive therapeutic work for chronic tension, pain, and muscle recovery.", price: "₹3,500", duration: "90 min" },
  { icon: Flower2, name: "Aromatherapy Massage", desc: "Premium essential oils customized to your needs — relax, energize, or heal.", price: "₹3,000", duration: "75 min" },
  { icon: Hand, name: "Thai Massage", desc: "Ancient acupressure and yoga-stretching therapy for energy and flexibility.", price: "₹3,200", duration: "75 min" },
  { icon: HeartHandshake, name: "Couples Package", desc: "Synchronized massage with Banya access, champagne & private couples room.", price: "₹7,500", duration: "120 min" },
];

const GALLERY = [
  "/home_images/mahipalpurspa1.jpg",
  "/home_images/mahipalpurspa4.jpg",
  "/home_images/mahipalpurspa7.jpg",
  "/home_images/mahipalpurspa10.jpg",
  "/home_images/mahipalpurspa13.jpg",
];

const PROCESS = [
  { icon: PhoneCall, title: "Call & Book", desc: "Call or WhatsApp us anytime, 24/7 — no waiting, no appointment queue." },
  { icon: CalendarCheck, title: "Confirm Your Slot", desc: "We confirm your preferred therapist, treatment and time within minutes." },
  { icon: Sparkle, title: "Relax & Unwind", desc: "Step into your private room and let our certified therapists take over." },
  { icon: PartyPopper, title: "Leave Refreshed", desc: "Walk out renewed, with care tips and an open invitation to return." },
];

const WHY_US = [
  { icon: Globe, title: "Authentic Techniques", desc: "Real Russian Banya with imported birch Venik. Not a marketing label — a genuine cultural tradition." },
  { icon: MapPin, title: "Prime Location", desc: "10 minutes from IGI Airport, 5 minutes from Aerocity hotels. Convenient for every traveler." },
  { icon: Gem, title: "Premium Products", desc: "100% pure organic essential oils and therapeutic-grade imported products. No compromises." },
  { icon: Lock, title: "Complete Privacy", desc: "Individual private treatment rooms. Discretion and comfort guaranteed for every client." },
  { icon: Star, title: "90%+ Retention Rate", desc: "Our clients return — month after month. That loyalty is our greatest achievement." },
  { icon: Trophy, title: "Award-Winning", desc: "Recognized as NCR's Best Spa by leading lifestyle publications and wellness associations." },
  { icon: Car, title: "Free Parking", desc: "Complimentary secure parking for all guests. Convenient and hassle-free arrival." },
  { icon: MessageCircle, title: "Multi-Lingual Staff", desc: "We communicate in Russian, English, Hindi, and more to serve our international clientele." },
];

const HOTELS = [
  { img: "/home_images/hotels_images/hotel_aloft.jpg", name: "Aloft Aerocity" },
  { img: "/home_images/hotels_images/hotel_jw.jpeg", name: "JW Marriott" },
  { img: "/home_images/hotels_images/hotel_le_meridien.jpg", name: "Le Méridien" },
  { img: "/home_images/hotels_images/hotel_pullman.jpg", name: "Pullman" },
  { img: "/home_images/hotels_images/hotel_roseate.jpg", name: "Roseate" },
  { img: "/home_images/hotels_images/hotel_suryaa.jpg", name: "Suryaa" },
];

const PRICING = [
  { name: "Russian Banya", amount: "₹2,500", duration: "60 minutes", featured: false },
  { name: "Full Body Massage", amount: "₹2,000", duration: "60 minutes", featured: true },
  { name: "Couples Package", amount: "₹6,000", duration: "120 minutes", featured: false },
  { name: "Deep Tissue", amount: "₹3,500", duration: "90 minutes", featured: false },
];

const TESTIMONIALS = [
  { quote: "The Russian Banya experience is absolutely authentic. Nothing compares to the traditional Venik treatment. The therapists are highly skilled and the facility is impeccably clean.", author: "Priya Malhotra", from: "Gurgaon · Russian Banya & Aromatherapy" },
  { quote: "As a frequent traveler to Delhi, I always book a session during my layovers. The location near the airport is incredibly convenient, and the deep tissue massage is exactly what I need after long flights.", author: "James Mitchell", from: "Business Traveler, UK · Deep Tissue Massage" },
  { quote: "As a physician, I am particular about hygiene and professionalism. Russian Spa Centre exceeds all expectations. The hygiene standards are hospital-grade. Remarkable improvement in my chronic back pain!", author: "Dr. Anita Sharma", from: "Aerocity · Thai & Sports Massage" },
];

const FAQS = [
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome 24/7, but booking ahead guarantees your preferred therapist and time slot — especially for couples packages and peak evening hours." },
  { q: "Is Russian Spa Centre safe and hygienic?", a: "Yes. We follow hospital-grade hygiene protocols — fresh linens for every guest, hypoallergenic products, and third-party audited cleanliness standards." },
  { q: "How far are you from IGI Airport?", a: "Just 10 minutes from Terminal 3, and 5 minutes from Aerocity hotels — ideal for layovers, early check-ins, and late-night arrivals." },
  { q: "Do you offer couples sessions?", a: "Yes, our Couples Package includes synchronized massage, private Banya access, and a dedicated relaxation room for two." },
  { q: "What payment methods do you accept?", a: "We accept cash, all major credit/debit cards, and UPI payments including Google Pay and PhonePe." },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Star size={13} strokeWidth={2} />
            4.8 Stars · 350+ Reviews · Delhi NCR&apos;s #1 Spa
          </div>
          <h1>Spa in Mahipalpur Near IGI Airport Delhi</h1>
          <p className={styles.heroSub}>Mahipalpur · Aerocity · Near IGI Airport</p>
          <p className={styles.heroText}>
            Experience centuries-old Russian Banya traditions combined with world-class massage therapies.
            Certified therapists, impeccable hygiene, and unmatched luxury — just 10 minutes from Delhi Airport.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold"><PhoneCall size={15} /> Call & Book Now</a>
            <a href="/services" className="btn-outline">View Services</a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><span className={styles.num}>10+</span><span className={styles.label}>Years of Excellence</span></div>
            <div className={styles.heroStat}><span className={styles.num}>350+</span><span className={styles.label}>5-Star Reviews</span></div>
            <div className={styles.heroStat}><span className={styles.num}>24/7</span><span className={styles.label}>Always Open</span></div>
            <div className={styles.heroStat}><span className={styles.num}>10min</span><span className={styles.label}>From IGI Airport</span></div>
          </div>
        </div>
        <div className={styles.heroSide}>Mahipalpur · Aerocity · Delhi NCR</div>
        <div className={styles.openBadge}>
          <div className={styles.openBadgeInner}>
            <Clock size={16} strokeWidth={1.8} />
            <span>Open</span>
            <span>24/7</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} className={styles.marqueeItem}>
              <Sparkle size={11} strokeWidth={2} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* THERAPISTS — untouched */}
      <TherapistSection />

      {/* INTRO / ABOUT */}
      <section id="about" className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.introVisual}>
            <img src="/home_images/mahipalpurspa10.jpg" alt="Russian Spa Centre treatment room" loading="lazy" />
            <div className={styles.introVisualScrim} />
            <div className={styles.introVisualInner}>
              <div className={styles.visualIcon}><Flame size={26} strokeWidth={1.8} /></div>
              <div className={styles.visualTag}>Where Ancient <em>Russian Traditions</em> Meet Modern Luxury</div>
            </div>
          </div>
          <div>
            <div className="section-label">About Us</div>
            <h2 className="section-title">Delhi NCR&apos;s Most <em>Trusted</em> Spa Destination</h2>
            <div className="divider" />
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.9, marginBottom: "32px" }}>
              At Russian Spa Centre, we bring the authentic healing art of the Russian Banya to the heart of Delhi. With internationally certified therapists trained across Russia, Thailand, Sweden, and Japan, we deliver treatments that go far beyond ordinary massage — we craft transformative wellness experiences.
            </p>
            <div className={styles.featuresList}>
              {FEATURES.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <div className={styles.featureIcon}><f.icon size={19} strokeWidth={1.8} /></div>
                  <div className={styles.featureText}>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.seoLinks}>
          <a href="/spa-in-mahipalpur">Best Spa in Mahipalpur</a>
          <a href="/spa-near-igi-airport">Spa Near IGI Airport</a>
          <a href="/body-massage-in-mahipalpur">Body Massage in Mahipalpur</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <div>
            <div className="section-label">Our Treatments</div>
            <h2 className="section-title">Signature <em>Services</em></h2>
          </div>
          <a href="/services" className="btn-outline">All Services <ArrowRight size={14} /></a>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s, i) => (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIcon}><s.icon size={24} strokeWidth={1.8} /></div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <div className={styles.serviceMeta}>
                <span className={styles.servicePrice}>{s.price}</span>
                <span className={styles.serviceDuration}>{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryInner}>
          <div className={styles.galleryHeader}>
            <div>
              <div className="section-label">Inside The Spa</div>
              <h2 className="section-title">A Glimpse of Our <em>Sanctuary</em></h2>
            </div>
            <a href="/gallery" className="btn-outline">Full Gallery <ArrowRight size={14} /></a>
          </div>
          <div className={styles.galleryGrid}>
            {GALLERY.map((src, i) => (
              <a key={i} href="/gallery" className={styles.galleryItem}>
                <img src={src} alt="Russian Spa Centre interior and treatment ambience" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <div className="section-label">Simple & Seamless</div>
          <h2 className="section-title">How Your Visit <em>Works</em></h2>
          <div className={styles.processGrid}>
            {PROCESS.map((p, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.processNum}><p.icon size={26} strokeWidth={1.8} /></div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">What Sets Us <em>Apart</em></h2>
          <div className={styles.whyGrid}>
            {WHY_US.map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <div className={styles.icon}><w.icon size={20} strokeWidth={1.8} /></div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY HOTELS */}
      <section className={styles.hotelsSection}>
        <div className={styles.hotelsInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>Preferred By Travelers</div>
          <h2 className="section-title">Trusted By Guests Of Aerocity&apos;s <em>Finest Hotels</em></h2>
          <p>
            Staying nearby? We regularly welcome guests from Delhi&apos;s leading airport hotels who want authentic Russian wellness minutes from their room.
          </p>
          <div className={styles.hotelsGrid}>
            {HOTELS.map((h, i) => (
              <div key={i} className={styles.hotelCard}>
                <img src={h.img} alt={`${h.name} guests near Russian Spa Centre`} loading="lazy" />
                <span>{h.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING STRIP */}
      <div id="pricing" className={styles.pricingStrip}>
        <div className={styles.pricingStripInner}>
          <div className={styles.pricingStripHeader}>
            <div>
              <div className="section-label">Transparent Pricing</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>No Hidden Charges. <em>Ever.</em></h2>
            </div>
            <div className={styles.badge}>15% Off · First Visit</div>
          </div>
          <div className={styles.priceItems}>
            {PRICING.map((p, i) => (
              <div key={i} className={`${styles.priceItem}${p.featured ? ` ${styles.featured}` : ""}`}>
                {p.featured && <div className={styles.priceItemBadge}>Most Popular</div>}
                <div className={styles.name}>{p.name}</div>
                <span className={styles.amount}>{p.amount}</span>
                <div className={styles.duration}>{p.duration}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "40px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/pricing" className="btn-gold">View All Prices</a>
            <a href="tel:+918929979542" className="btn-outline"><PhoneCall size={14} /> +91 8929979542</a>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className="section-label">Client Stories</div>
          <h2 className="section-title">What Our Guests <em>Say</em></h2>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testiCard}>
                <Quote size={28} strokeWidth={1.5} />
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={13} fill="#E8A63C" strokeWidth={0} />)}
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className={styles.testiAuthor}>
                  <strong>{t.author}</strong>
                  <span>{t.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className="section-label" style={{ justifyContent: "center" }}>Good To Know</div>
          <h2 className="section-title" style={{ textAlign: "center" }}>Frequently Asked <em>Questions</em></h2>
          <div className={styles.faqList}>
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={styles.faqItem}>
                  <button
                    type="button"
                    className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ""}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {f.q}
                    <ChevronDown size={18} strokeWidth={2} />
                  </button>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>Book Your Experience</div>
        <h2>Ready to <em>Unwind?</em></h2>
        <a href="tel:+918929979542" className={styles.ctaPhone}><PhoneCall size={26} /> +91 8929979542</a>
        <p>Open 24/7 · Free Parking · 10 Min from IGI Airport · 15% Off Your First Visit</p>
        <div className={styles.ctaActions}>
          <a href="tel:+918929979542" className="btn-gold">Call Now & Book</a>
          <a href="/contact" className={`btn-outline ${styles.ctaOutline}`}>Send Us a Message</a>
        </div>
      </section>
    </>
  );
}
