"use client";

import { useState } from "react";
import {
  Images,
  DoorOpen,
  Flame,
  Building2,
  Lock,
  Sofa,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./Gallery.module.css";

/* Original "Our Facilities" list, expanded with fuller descriptions */
const FACILITIES = [
  {
    icon: DoorOpen,
    title: "Luxury Treatment Rooms",
    desc: "Private & comfortable spaces for all therapies. Each room is fully enclosed for complete privacy, fitted with premium massage tables and fresh linens laid out before every guest.",
  },
  {
    icon: Flame,
    title: "Russian Banya Chamber",
    desc: "Authentic steam bath facility recreating the traditional Russian banya with imported birch venik. It's one of the few genuine Banya chambers available in Mahipalpur.",
  },
  {
    icon: Building2,
    title: "Reception Area",
    desc: "A welcoming & luxurious entrance where our team greets every guest and helps you choose the right therapist and treatment, day or night.",
  },
  {
    icon: Lock,
    title: "Changing Facilities",
    desc: "Complete amenities for guests — secure personal lockers, robes, and slippers provided in a clean, separate changing area before and after your session.",
  },
  {
    icon: Sofa,
    title: "Relaxation Lounge",
    desc: "Post-treatment comfort area where guests can unwind with herbal tea before heading back out, extending the calm of the session a little longer.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Standards",
    desc: "Premium cleanliness & maintenance with hospital-grade disinfection protocols followed between every guest, across every room in the facility.",
  },
];

/* Original "Gallery Categories" list, now paired with real photos */
const GALLERY_GROUPS = [
  {
    icon: DoorOpen,
    title: "Treatment Room Tours",
    desc: "A look inside our private treatment rooms — each one enclosed, quietly lit, and reset with fresh linens before every guest arrives.",
    images: [
      { src: "/home_images/mahipalpurspa1.jpg", caption: "Private treatment room set up for a full body massage" },
      { src: "/home_images/mahipalpurspa4.jpg", caption: "Softly lit massage suite with premium linens" },
      { src: "/home_images/mahipalpurspa9.jpg", caption: "Treatment room prepared for an aromatherapy session" },
    ],
  },
  {
    icon: Flame,
    title: "Russian Banya Facilities",
    desc: "Our authentic Banya chamber, imported and built for traditional Venik steam therapy — a facility unique to Russian Spa Centre in Mahipalpur.",
    images: [
      { src: "/home_images/mahipalpurspa2.jpg", caption: "Authentic Russian Banya steam chamber" },
      { src: "/home_images/mahipalpurspa11.jpg", caption: "Banya chamber interior with traditional wood detailing" },
    ],
  },
  {
    icon: Sofa,
    title: "Spa Interior Design",
    desc: "Every corner of the spa — corridors, waiting nooks, and treatment wings — is finished with the same calm, premium aesthetic.",
    images: [
      { src: "/home_images/mahipalpurspa3.jpg", caption: "Elegant spa interior with calming decor" },
      { src: "/home_images/mahipalpurspa6.jpg", caption: "Corridor leading to private treatment suites" },
    ],
  },
  {
    icon: ShowerHead,
    title: "Hydrotherapy Areas",
    desc: "Clean, modern shower and hydrotherapy zones for guests to freshen up before or after their treatment.",
    images: [
      { src: "/home_images/mahipalpurspa7.jpg", caption: "Shower and hydrotherapy zone for guests" },
      { src: "/home_images/mahipalpurspa13.jpg", caption: "Clean, modern hydrotherapy facilities" },
    ],
  },
  {
    icon: Building2,
    title: "Reception & Lounge",
    desc: "The welcoming entrance and relaxation lounge where your visit begins and ends — comfortable seating and a calm atmosphere throughout.",
    images: [
      { src: "/home_images/mahipalpurspa5.jpg", caption: "Welcoming reception area at Russian Spa Centre" },
      { src: "/home_images/mahipalpurspa8.jpg", caption: "Relaxation lounge for post-treatment comfort" },
      { src: "/home_images/mahipalpurspa12.jpg", caption: "Guest lounge with comfortable seating" },
    ],
  },
];

const FAQS = [
  {
    q: "Can I visit the spa before booking a treatment?",
    a: "Yes — you're welcome to stop by and see our treatment rooms, Russian Banya chamber, and relaxation lounge in person before deciding on a service. Since we're open 24/7, there's no need to schedule a special appointment just to look around.",
  },
  {
    q: "Do I need to book in advance to tour the facility?",
    a: "Walk-ins are always welcome for a quick facility tour, though calling ahead lets our team show you around without interrupting any ongoing treatments.",
  },
  {
    q: "Is photography allowed inside the spa?",
    a: "For guest privacy, photography inside treatment rooms and the Banya chamber is not permitted during active sessions. Our reception and lounge areas can be photographed with staff permission.",
  },
  {
    q: "How clean and hygienic are the rooms shown in this gallery?",
    a: "Every room follows hospital-grade hygiene protocols, with fresh linens and surface disinfection between each guest — the same standard maintained across every area pictured here, whether it's 2pm or 2am.",
  },
];

const ALL_GALLERY_IMAGES = GALLERY_GROUPS.flatMap((g) => g.images);

export default function Gallery() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Images size={13} strokeWidth={2} /> Take A Look Inside
          </div>
          <h1>
            Spa <em>Gallery</em>
          </h1>
          <p className={styles.heroSub}>Russian Spa Centre</p>
          <p className={styles.heroText}>
            Explore our beautiful spa facilities and professional environment designed for ultimate relaxation and
            wellness.
          </p>
          <div className={styles.heroActions}>
            <a href="/contact" className="btn-gold">
              <ArrowRight size={15} /> Visit Us Today
            </a>
            <a href="tel:+918929979542" className="btn-outline">
              <PhoneCall size={15} /> Call +91 8929979542
            </a>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* OUR FACILITIES */}
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Inside The Spa
          </div>
          <h2 className="section-title">
            Our <em>Facilities</em>
          </h2>
          <p>Every space at Russian Spa Centre is built for comfort, privacy, and hospital-grade hygiene.</p>
        </div>
        <div className={styles.grid3}>
          {FACILITIES.map((f, i) => (
            <div key={i} className={styles.iconCard}>
              <div className={styles.iconChip}>
                <f.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL SPA ENVIRONMENT */}
      <section className={`${styles.section} ${styles.envSection}`}>
        <div className={styles.twoCol}>
          <div className={styles.envVisual}>
            <img src="/home_images/mahipalpurspa16.jpg" alt="Professional spa environment at Russian Spa Centre" loading="lazy" />
            <div className={styles.envVisualScrim} />
            <div className={styles.envVisualInner}>
              <div className={styles.envIconChip}>
                <Sparkles size={24} strokeWidth={1.8} />
              </div>
              <div className={styles.envTag}>
                A <em>Serene Atmosphere</em> In Every Detail
              </div>
            </div>
          </div>
          <div>
            <div className="section-label">Ambience</div>
            <h2 className="section-title">
              Professional <em>Spa Environment</em>
            </h2>
            <div className="divider" />
            <p>
              Our spa is designed with premium aesthetics, creating a serene atmosphere for complete relaxation.
              Every detail from lighting to aromatherapy is carefully curated for your wellness journey.
            </p>
            <p>
              From the moment you step through reception to the moment you leave the relaxation lounge, the same
              hospital-grade hygiene and certified-therapist standard applies — 24 hours a day, 7 days a week, just
              10 minutes from IGI Airport.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Gallery Categories
          </div>
          <h2 className="section-title">
            A Closer <em>Look Around</em>
          </h2>
          <p>Browse real photos from our Mahipalpur facility, grouped by area.</p>
        </div>

        {GALLERY_GROUPS.map((group, gi) => (
          <div key={gi} className={styles.categoryBlock}>
            <div className={styles.categoryHead}>
              <div className={styles.categoryIconChip}>
                <group.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{group.title}</h3>
            </div>
            <p className={styles.categoryDesc}>{group.desc}</p>
            <div className={group.images.length >= 3 ? styles.galleryGrid3 : styles.galleryGrid2}>
              {group.images.map((img, ii) => (
                <div key={ii} className={styles.galleryItem}>
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className={styles.galleryCaption}>{img.caption}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Before You Visit
          </div>
          <h2 className="section-title">
            Gallery &amp; <em>Visit FAQs</em>
          </h2>
        </div>
        <div className={styles.faqInner}>
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
          Book Your Experience
        </div>
        <h2>
          Ready To See It For <em>Yourself?</em>
        </h2>
        <p>Come experience the facilities in person — open 24/7, no appointment required for a walk-through.</p>
        <div className={styles.ctaActions}>
          <a href="/contact" className="btn-gold">
            <ArrowRight size={15} /> Visit Us Today
          </a>
          <a
            href="https://wa.me/918929979542?text=Hello%2C%20I%20want%20to%20visit%20the%20spa%20and%20see%20the%20facilities"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-outline ${styles.ctaOutline}`}
          >
            <MessageCircle size={15} /> Ask On WhatsApp
          </a>
        </div>
      </section>

      {/* STRUCTURED DATA: Image Gallery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Russian Spa Centre Mahipalpur — Spa Gallery",
            description:
              "Photo gallery of Russian Spa Centre Mahipalpur showing treatment rooms, the Russian Banya chamber, spa interior, hydrotherapy areas, and the reception & relaxation lounge.",
            url: "https://mahipalpurspaservicecentre.com/gallery/",
            associatedMedia: ALL_GALLERY_IMAGES.map((img) => ({
              "@type": "ImageObject",
              contentUrl: `https://mahipalpurspaservicecentre.com${img.src}`,
              description: img.caption,
            })),
          }),
        }}
      />
    </>
  );
}
