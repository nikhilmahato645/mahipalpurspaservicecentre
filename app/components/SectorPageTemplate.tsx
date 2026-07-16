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
  ShieldCheck,
  Star,
  HeartHandshake,
  ShowerHead,
  MapPin,
  PhoneCall,
  MessageCircle,
  Quote,
  ChevronDown,
  Info,
  Sparkles,
  Route,
  Landmark,
  Hand,
  Wind,
  Droplet,
  Dumbbell,
  BedDouble,
  RefreshCw,
  Leaf,
  MessageSquare,
  Ban,
} from "lucide-react";
import TherapistSection from "./TherapistSection";
import styles from "./SectorPage.module.css";
import type { SectorEntry } from "../data/sectorRegistry";
import type { SectorPageContent } from "../data/sectorContentTypes";

/* ------------------------- SHARED / OPERATIONAL CONTENT -------------------------
   These sections describe universal business process, ethics and hygiene practice
   that hold true at every location — they are intentionally shared rather than
   location-specific, the same way a booking flow or hygiene checklist does not
   change from one service area to the next. Everything that IS location-specific
   (hero, about-area guide, why-choose, treatments, FAQs, nearby areas, directions,
   testimonials) is supplied per-page via `content`.
------------------------------------------------------------------------------- */

const SPA_JOURNEY = [
  { step: "01", title: "Booking", desc: "Reserve by phone or WhatsApp and tell us your preferred treatment, time, and starting point so we can advise on travel time." },
  { step: "02", title: "Arrival", desc: "Arrive by cab, private car, or Uber/Ola. On-site parking means no circling the block looking for a spot." },
  { step: "03", title: "Reception", desc: "A short check-in at reception, where you're offered water or herbal tea while your room is prepared." },
  { step: "04", title: "Consultation", desc: "A brief, honest conversation about pain points, stress levels, allergies, and pressure preference shapes the entire session." },
  { step: "05", title: "Treatment Selection", desc: "Based on the consultation, we confirm the right therapy — Swedish for relaxation, deep tissue for chronic knots, Banya for a full reset, and so on." },
  { step: "06", title: "Massage Session", desc: "The core treatment, delivered at a calm, unhurried pace in a private room, with music and lighting kept low and non-intrusive." },
  { step: "07", title: "Relaxation", desc: "A short rest period after the session — many guests use this time in the steam room or simply lying quietly before dressing." },
  { step: "08", title: "Post-Treatment Care", desc: "Water, light aftercare guidance, and any product recommendations if relevant to your treatment." },
  { step: "09", title: "Departure", desc: "A relaxed checkout with no upsell pressure, plus route guidance for the drive back." },
];

const WHY_CUSTOMERS_CHOOSE_US = [
  { icon: GraduationCap, title: "Professional Therapists", desc: "Trained in anatomy-correct technique across Russian and Indian massage styles." },
  { icon: Sparkles, title: "Luxury Atmosphere", desc: "A calm, well-maintained environment designed for genuine relaxation." },
  { icon: Route, title: "Convenient Location", desc: "Positioned directly on the Mahipalpur–Aerocity–NH-48 corridor, close to the airport." },
  { icon: Car, title: "Easy Accessibility", desc: "Reachable by private car, taxi, Uber, or Ola with parking available on-site." },
  { icon: Lock, title: "Privacy", desc: "Private rooms and a discreet, professional service culture throughout." },
  { icon: Leaf, title: "Relaxing Environment", desc: "Lighting, music, and pacing all designed to support a genuine reset, not a rushed transaction." },
  { icon: Clock, title: "Flexible Appointments", desc: "Open 24/7, making it workable around office hours, flights, or weekend plans." },
];

const HYGIENE_STANDARDS = [
  { icon: ShowerHead, title: "Room Sanitisation", desc: "Every treatment room is cleaned and sanitised between guests, not just at the start of the day." },
  { icon: BedDouble, title: "Fresh Towels & Linens", desc: "Freshly laundered towels, robes, and linens are used for every single session." },
  { icon: Hand, title: "Massage Table Hygiene", desc: "Tables are wiped down and re-covered with fresh sheets after every guest." },
  { icon: Droplet, title: "Premium Massage Oils", desc: "Oils and lotions are stored correctly and dispensed hygienically, never reused between guests." },
  { icon: Wind, title: "Steam Room Cleaning", desc: "Steam and Banya areas are cleaned and ventilated between sessions to maintain air and surface hygiene." },
  { icon: ShieldCheck, title: "Equipment Sanitation", desc: "Hot stones, tools, and any shared equipment are sanitised after each use." },
  { icon: Lock, title: "Guest Privacy", desc: "Private changing areas and treatment rooms, with staff trained in discretion and professional conduct." },
];

const THERAPIST_MATTERS = [
  { icon: Hand, title: "Body Anatomy", desc: "Understanding muscle groups and pressure points is what separates therapeutic massage from generic rubbing." },
  { icon: Dumbbell, title: "Pressure Techniques", desc: "Knowing when to apply firm pressure and when to ease off prevents both ineffective sessions and unnecessary discomfort." },
  { icon: ShieldCheck, title: "Professional Ethics", desc: "A clear, respectful, consent-based approach to every session, with boundaries communicated and honoured." },
  { icon: MessageSquare, title: "Communication", desc: "A short pre-session conversation about pain points and preferences shapes a far more effective massage." },
  { icon: HeartHandshake, title: "Client Comfort", desc: "Room temperature, table setup, and pacing are all adjusted to what makes each individual guest comfortable." },
  { icon: Sparkles, title: "Personalised Wellness", desc: "No two sessions are identical — technique is adapted to the guest's body, goals, and tolerance on that particular day." },
];

const PRICING = [
  { service: "Russian Banya Experience", duration: "60 min", price: "₹2,500" },
  { service: "Full Body Swedish Massage", duration: "60 min", price: "₹2,000" },
  { service: "Deep Tissue Massage (Extended)", duration: "90 min", price: "₹3,500" },
  { service: "Traditional Thai Massage", duration: "75 min", price: "₹3,200" },
  { service: "Aromatherapy Massage", duration: "75 min", price: "₹3,000" },
  { service: "Hot Stone Therapy", duration: "75 min", price: "₹3,500" },
  { service: "Foot Reflexology", duration: "45 min", price: "₹2,200" },
  { service: "Couples Spa Package (Premium)", duration: "120 min", price: "₹7,500" },
];

const WHY_ICONS = [Sparkles, Hand, Route, Building2, Plane, Lock, BedDouble, Star];
const TREAT_ICONS = [Wind, Hand, Dumbbell, Leaf, Droplet, HeartHandshake, Building2, Sparkles];
const NEARBY_ICONS = [MapPin, Building2, TrainFront, Landmark, MapPin, Building2, MapPin, Building2];
const WELLNESS_ICONS = [Hand, Dumbbell, RefreshCw, Leaf, BedDouble, Route];

function openWhatsApp(displayName: string) {
  const message = `Hello! I'm coming from ${displayName} and want to book an appointment at your spa in Mahipalpur. Please share details and availability.`;
  const encodedMessage = encodeURIComponent(message);
  window.open("https://wa.me/918929979542?text=" + encodedMessage, "_blank");
}

export default function SectorPageTemplate({
  entry,
  content,
}: {
  entry: SectorEntry;
  content: SectorPageContent;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const canonical = `https://mahipalpurspaservicecentre.com/${entry.slug}/`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["SpaOrHealthClub", "LocalBusiness"],
                name: `Russian Spa Centre — Serving ${entry.displayName}`,
                image: "https://mahipalpurspaservicecentre.com/logo.png",
                telephone: "+91 8929979542",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
                  addressLocality: "New Delhi",
                  postalCode: "110037",
                  addressCountry: "IN",
                },
                url: canonical,
                openingHours: "Mo-Su 00:00-23:59",
                priceRange: "₹1800-₹7500",
                areaServed: [
                  { "@type": "Place", name: entry.displayName },
                  { "@type": "Place", name: entry.cityName },
                  ...content.nearbyAreas.map((a) => ({ "@type": "Place", name: a.name })),
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://mahipalpurspaservicecentre.com/" },
                  { "@type": "ListItem", position: 2, name: "Locations", item: "https://mahipalpurspaservicecentre.com/locations/" },
                  { "@type": "ListItem", position: 3, name: `Spa in ${entry.displayName}`, item: canonical },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: content.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Route size={13} strokeWidth={2} />
            {content.heroBadge}
          </div>
          <h1>
            {content.h1Line1}
            <br />
            <em>{content.h1Line2}</em>
          </h1>
          <p className={styles.heroText}>{content.heroText}</p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <button type="button" className="btn-outline" onClick={() => openWhatsApp(entry.displayName)}>
              <MessageCircle size={15} /> Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* LOCATION NOTICE */}
      <section className={styles.noticeSection}>
        <div className={styles.noticeBox}>
          <Info size={20} strokeWidth={1.8} />
          <p>
            <strong>Please note:</strong> {content.noticeText}
          </p>
        </div>
      </section>

      <TherapistSection />

      {/* WHY CHOOSE US */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Why Choose Us</div>
          <h2 className="section-title">Why Choose Our <em>Spa Near {entry.displayName}</em></h2>
        </div>
        <div className={styles.whyGrid}>
          {content.whyChoose.map((item, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <div key={i} className={styles.whyCard}>
                <div className={styles.whyIcon}><Icon size={22} strokeWidth={1.8} /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT THE AREA */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.twoColumnText} style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="section-label">Local Guide</div>
          <h2 className="section-title">About <em>{entry.displayName}</em></h2>
          <div className="divider" />
          {content.aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* SPA JOURNEY */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Your Visit</div>
          <h2 className="section-title">The Complete <em>Spa Experience</em></h2>
        </div>
        <div className={styles.journeyGrid}>
          {SPA_JOURNEY.map((s, i) => (
            <div key={i} className={styles.journeyCard}>
              <span className={styles.journeyStep}>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TREATMENTS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Our Treatments</div>
          <h2 className="section-title">Premium <em>Wellness Treatments</em></h2>
          <p className={styles.sectionSub}>Every treatment below is available at our Mahipalpur centre, minutes from {entry.displayName}.</p>
        </div>
        <div className={styles.treatGrid}>
          {content.treatments.map((t, i) => {
            const Icon = TREAT_ICONS[i % TREAT_ICONS.length];
            return (
              <div key={i} className={styles.treatCard}>
                <div className={styles.treatIcon}><Icon size={22} strokeWidth={1.8} /></div>
                <h3>{t.name}</h3>
                <p className={styles.treatDesc}>{t.desc}</p>
                <div className={styles.treatMeta}>
                  <div><strong>Benefits:</strong> {t.benefits}</div>
                  <div><strong>Best for:</strong> {t.suitedFor}</div>
                  <div><strong>Duration:</strong> {t.duration}</div>
                  <div><strong>Frequency:</strong> {t.frequency}</div>
                  <div><strong>Aftercare:</strong> {t.aftercare}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WELLNESS GUIDE */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Wellness Guide</div>
          <h2 className="section-title">Wellness Guide for <em>{entry.displayName} Residents</em></h2>
        </div>
        <div className={styles.guideGrid}>
          {content.wellnessGuide.map((item, i) => {
            const Icon = WELLNESS_ICONS[i % WELLNESS_ICONS.length];
            return (
              <div key={i} className={styles.guideCard}>
                <div className={styles.guideIcon}><Icon size={20} strokeWidth={1.8} /></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Nearby Areas We Serve</div>
          <h2 className="section-title">Serving <em>{entry.displayName} &amp; Surrounding Areas</em></h2>
        </div>
        <div className={styles.nearbyGrid}>
          {content.nearbyAreas.map((place, i) => {
            const Icon = NEARBY_ICONS[i % NEARBY_ICONS.length];
            return (
              <div key={i} className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}><Icon size={18} strokeWidth={1.8} /></div>
                <h4>{place.name}</h4>
                <p>{place.note}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW TO REACH */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Directions</div>
          <h2 className="section-title">How to <em>Reach Us</em> from {entry.displayName}</h2>
        </div>
        <div className={styles.reachTableWrap}>
          <table className={styles.reachTable}>
            <thead><tr><th>From</th><th>Route</th><th>Est. Time</th></tr></thead>
            <tbody>
              {content.howToReach.map((r, i) => (
                <tr key={i}><td>{r.from}</td><td>{r.route}</td><td>{r.time}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.reachOptions}>
          <div><Car size={16} strokeWidth={1.8} /> By Taxi / Private Car</div>
          <div><Car size={16} strokeWidth={1.8} /> By Uber or Ola</div>
          <div><TrainFront size={16} strokeWidth={1.8} /> By Metro + Cab (last mile)</div>
          <div><Building2 size={16} strokeWidth={1.8} /> On-site Parking Available</div>
        </div>
      </section>

      {/* WHY CUSTOMERS CHOOSE US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Guest Confidence</div>
          <h2 className="section-title">Why Customers from <em>{entry.displayName} Choose Us</em></h2>
        </div>
        <div className={styles.whyGrid}>
          {WHY_CUSTOMERS_CHOOSE_US.map((item, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIcon}><item.icon size={22} strokeWidth={1.8} /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HYGIENE STANDARDS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Standards</div>
          <h2 className="section-title">Hygiene &amp; <em>Safety Standards</em></h2>
        </div>
        <div className={styles.guideGrid}>
          {HYGIENE_STANDARDS.map((item, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.guideIcon}><item.icon size={20} strokeWidth={1.8} /></div>
              <div><h4>{item.title}</h4><p>{item.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY THERAPISTS MATTER */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>The Difference</div>
          <h2 className="section-title">Why Professional <em>Therapists Matter</em></h2>
        </div>
        <div className={styles.guideGrid}>
          {THERAPIST_MATTERS.map((item, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.guideIcon}><item.icon size={20} strokeWidth={1.8} /></div>
              <div><h4>{item.title}</h4><p>{item.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>Guest Experiences</div>
            <h2 className="section-title">What Our <em>{entry.displayName} Guests</em> Say</h2>
          </div>
          <div className={styles.testiGrid}>
            {content.testimonials.map((t, i) => (
              <div key={i} className={styles.testiCard}>
                <Quote size={26} strokeWidth={1.5} />
                <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                <div className={styles.testiAuthor}><strong>{t.author}</strong><span>{t.location}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>Transparent Pricing</div>
          <h2 className="section-title">Spa <em>Prices</em> for {entry.displayName} Guests</h2>
        </div>
        <div className={styles.pricingCard}>
          <table className={styles.pricingTable}>
            <thead><tr><th>Service</th><th>Duration</th><th>Price</th></tr></thead>
            <tbody>
              {PRICING.map((row, i) => (
                <tr key={i}>
                  <td className={styles.service}>{row.service}</td>
                  <td className={styles.duration}>{row.duration}</td>
                  <td className={styles.price}>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.pricingNote}>*15% off for first-time visitors. Mention our website when booking.</p>
      </section>

      {/* FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>FAQs</div>
          <h2 className="section-title">Questions About <em>Spa in {entry.displayName}</em></h2>
        </div>
        <div className={styles.faqList}>
          {content.faqs.map((faq, i) => {
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
        <h2>Ready to Relax — Minutes from {entry.displayName}?</h2>
        <p>Book your appointment now — open 24/7 with instant confirmation via WhatsApp or call.</p>
        <button type="button" className={styles.whatsappBtn} onClick={() => openWhatsApp(entry.displayName)}>
          <MessageCircle size={20} />
          Book on WhatsApp — Instant Confirmation
        </button>
        <div className={styles.ctaCallRow}>
          <PhoneCall size={14} /> Or call us: <a href="tel:+918929979542">+91 8929979542</a>
        </div>
      </section>

      {/* MAP */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="section-title">Visit Us — <em>Minutes from {entry.displayName}</em></h2>
          <p className={styles.mapAddress}>
            <MapPin size={15} />
            Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
          </p>
          <p className={styles.mapNote}>
            <Ban size={13} /> Not located inside {entry.displayName} — reachable via road, minutes from Mahipalpur.
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`Russian Spa Centre - Serving ${entry.displayName}`}
            />
          </div>
          <div className="keyword-cloud">
            {content.keywords.slice(0, 14).map((kw, i) => (
              <span key={i}>{kw}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
