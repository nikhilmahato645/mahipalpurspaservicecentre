"use client";

import {
  Flame,
  Droplet,
  HeartHandshake,
  Dumbbell,
  Timer,
  Tags,
  GraduationCap,
  Users,
  Hotel,
  Sparkles,
  Building2,
  Sunrise,
  Moon,
  CalendarDays,
  Crown,
  Leaf,
  ShieldCheck,
  Coffee,
  Lock,
  Car,
  Music,
  Shirt,
  Banknote,
  CircleCheckBig,
  ArrowRight,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./Pricing.module.css";

const FEATURED_PACKAGES = [
  {
    icon: Flame,
    name: "Russian Banya",
    price: "₹2,500",
    duration: "60 Minutes",
    includes: ["Traditional Venik Treatment", "Steam Bath Session", "Herbal Tea", "Private Room", "Shower Facilities"],
    popular: false,
  },
  {
    icon: Droplet,
    name: "Full Body Massage",
    price: "₹2,000",
    duration: "60 Minutes",
    includes: ["Swedish or Deep Tissue", "Premium Massage Oils", "Shoulder & Neck Focus", "Complimentary Refreshments", "Hot Towels"],
    popular: true,
  },
  {
    icon: HeartHandshake,
    name: "Couples Package",
    price: "₹6,000",
    duration: "120 Minutes",
    includes: ["Russian Banya Access", "Synchronized Massage", "Private Couples Room", "Champagne & Chocolates", "Side-by-Side Treatment"],
    popular: false,
  },
  {
    icon: Dumbbell,
    name: "Deep Tissue",
    price: "₹3,500",
    duration: "90 Minutes",
    includes: ["Therapeutic Deep Massage", "Trigger Point Release", "Hot Towel Treatment", "Pain Relief Focus", "Post-Session Stretch"],
    popular: false,
  },
];

const HOW_PRICING_WORKS = [
  {
    icon: Timer,
    title: "Session Length",
    desc: "Price scales with time on the table — a 45-minute reflexology session and a 120-minute couples package are priced differently because both hands-on time and materials used scale together.",
  },
  {
    icon: Tags,
    title: "Products & Technique",
    desc: "Treatments using imported oils, volcanic hot stones, or extended Banya heat sessions reflect the cost of specialty products and specialised technique — never a random markup.",
  },
  {
    icon: GraduationCap,
    title: "Therapist Expertise",
    desc: "Every rate is published and fixed — the same certified therapist charges the same price for the same service every time, regardless of who is booking.",
  },
  {
    icon: Users,
    title: "Solo vs. Couples & Groups",
    desc: "Couples and group sessions include a private suite and multiple therapists working together, priced per couple or per group — never simply doubled from the solo rate.",
  },
];

const COMPLETE_PRICE_LIST = [
  { name: "Russian Banya Experience", duration: "60 min", price: "₹2,500", discounted: "₹2,125" },
  { name: "Full Body Swedish Massage", duration: "60 min", price: "₹2,000", discounted: "₹1,700" },
  { name: "Full Body Deep Tissue", duration: "60 min", price: "₹2,500", discounted: "₹2,125" },
  { name: "Deep Tissue Therapy (Extended)", duration: "90 min", price: "₹3,500", discounted: "₹2,975" },
  { name: "Aromatherapy Massage", duration: "75 min", price: "₹3,000", discounted: "₹2,550" },
  { name: "Traditional Thai Massage", duration: "75 min", price: "₹3,200", discounted: "₹2,720" },
  { name: "Sports Performance Massage", duration: "60 min", price: "₹3,800", discounted: "₹3,230" },
  { name: "Foot Reflexology", duration: "45 min", price: "₹2,200", discounted: "₹1,870" },
  { name: "Japanese Shiatsu", duration: "60 min", price: "₹3,500", discounted: "₹2,975" },
  { name: "Hot Volcanic Stone Therapy", duration: "75 min", price: "₹3,500", discounted: "₹2,975" },
  { name: "Balinese Massage", duration: "75 min", price: "₹3,200", discounted: "₹2,720" },
  { name: "Prenatal Pregnancy Massage", duration: "60 min", price: "₹3,200", discounted: "₹2,720" },
  { name: "Couples Spa Package (Basic)", duration: "90 min", price: "₹5,000", discounted: "₹4,250" },
  { name: "Couples Spa Package (Premium)", duration: "120 min", price: "₹7,500", discounted: "₹6,375" },
  { name: "Russian Banya + Massage Combo", duration: "90 min", price: "₹4,500", discounted: "₹3,825" },
  { name: "Head, Neck & Shoulder Focus", duration: "45 min", price: "₹1,800", discounted: "₹1,530" },
  { name: "Back & Neck Pain Relief", duration: "60 min", price: "₹2,200", discounted: "₹1,870" },
  { name: "Lymphatic Drainage Massage", duration: "60 min", price: "₹3,000", discounted: "₹2,550" },
  { name: "Four Hands Synchronized Massage", duration: "60 min", price: "₹4,000", discounted: "₹3,400" },
];

const COMPARISON = [
  { icon: Hotel, label: "5-Star Hotel Spa", rate: "₹8,000+", note: "for 60 min massage", save: "vs", highlight: false },
  { icon: Sparkles, label: "Russian Spa Centre", rate: "₹2,000", note: "for 60 min massage", save: "Save up to 75%", highlight: true },
  { icon: Building2, label: "Local Spa", rate: "₹2,500+", note: "for 60 min massage", save: "Lower quality, no guarantees", highlight: false },
];

const SPECIAL_OFFERS = [
  { icon: Sunrise, offer: "Early Bird Special", discount: "20% off", condition: "Book before 11 AM" },
  { icon: Moon, offer: "Late Night Relaxation", discount: "20% off", condition: "After 11 PM" },
  { icon: CalendarDays, offer: "Weekday Wellness", discount: "15% off", condition: "Monday - Thursday" },
  { icon: Users, offer: "Group Booking", discount: "25% off", condition: "3+ people together" },
  { icon: Crown, offer: "Monthly Membership", discount: "30% off", condition: "Subscribe & save" },
  { icon: GraduationCap, offer: "Student/ Senior Citizen", discount: "20% off", condition: "Valid ID required" },
];

const WHATS_INCLUDED = [
  { icon: Timer, title: "Full Treatment Time Guaranteed", desc: "Your 60 minutes means 60 minutes of hands-on therapy — not including changing time. We never rush." },
  { icon: Leaf, title: "Premium Organic Products", desc: "Only therapeutic-grade, hypoallergenic oils and lotions. No cheap fillers or synthetic fragrances." },
  { icon: ShieldCheck, title: "Hospital-Grade Cleanliness", desc: "Fresh linens for every guest. UV-sterilized equipment. Medical-grade disinfectants used between each session." },
  { icon: Coffee, title: "Complimentary Herbal Tea", desc: "Relax before or after your treatment with our selection of premium organic teas — always included." },
  { icon: Lock, title: "Private Locker & Shower", desc: "Secure storage for your valuables and access to our clean, modern shower facilities at no extra cost." },
  { icon: Car, title: "Free Parking", desc: "Complimentary secure parking for all guests. Located conveniently with easy access." },
  { icon: Music, title: "Ambient Music & Aromatherapy", desc: "Every room features calming soundscapes and subtle aromatherapy to enhance your relaxation." },
  { icon: Shirt, title: "Fresh Robes & Slippers", desc: "Plush robes and disposable slippers provided for every guest. Nothing extra to pay." },
];

const FAQS = [
  { q: "Are there any hidden charges?", a: "Never. The price you see is exactly what you pay. Taxes are included. No surprise fees for towels, lockers, or amenities." },
  { q: "Do you accept card payments?", a: "Yes — credit cards, debit cards, UPI, Google Pay, and cash all accepted. We also have EMI options for packages." },
  { q: "Is the 15% off for first-time visitors?", a: "Yes! Just mention our website when booking or show this page upon arrival for your discount." },
  { q: "Do you have group discounts?", a: "Absolutely. Groups of 3+ receive 25% off. Perfect for birthday parties, bachelor/bachelorette groups, or corporate outings." },
  { q: "What about tips/gratuity?", a: "Gratuity is always optional and at your discretion. Our therapists are paid fairly regardless of tips." },
  { q: "Can I customize a package?", a: "Yes — we can create custom combinations of services. Call us to discuss your preferences and get a personalized quote." },
  { q: "Should I book a package or pay à la carte?", a: "If you already know the one treatment you want, our standard per-service rate is simplest. If you're planning multiple visits or want bundled extras — like Banya plus massage, or a couples session — our Featured Packages and Monthly Membership are built to save you more per session than paying à la carte each time." },
  { q: "Does the price ever change after I book?", a: "No. The rate we quote when you book — including any 15% first-visit discount — is the rate you pay. We don't add service charges, product upcharges, or last-minute fees once your session is confirmed." },
];

const KEYWORDS = [
  "spa price list Mahipalpur",
  "affordable massage near me",
  "best body massage rates Delhi",
  "Russian banya cost",
  "cheap spa Aerocity",
  "budget friendly massage",
  "luxury spa affordable prices",
  "couple massage rate Delhi",
  "deep tissue therapy price",
  "Swedish massage charges",
  "Thai massage cost Mahipalpur",
  "hot stone therapy price",
  "reflexology charges",
  "sports massage rate",
  "pregnancy massage price",
  "24 hours spa cost",
  "body to body massage price",
  "full body massage charges",
  "spa near airport rates",
  "best value spa Delhi NCR",
  "weekly spa deals",
  "membership spa offers",
];

const WHATSAPP_MESSAGE =
  "Hello! I'd like to know more about your spa prices and packages. Please share availability.";
const WHATSAPP_URL = `https://wa.me/918929979542?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

const priceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Russian Spa Centre — Spa & Massage Price List",
  url: "https://mahipalpurspaservicecentre.com/pricing",
  itemListElement: COMPLETE_PRICE_LIST.map((item, i) => ({
    "@type": "Offer",
    position: i + 1,
    price: item.price.replace(/[₹,]/g, ""),
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name: item.name,
      provider: {
        "@type": "LocalBusiness",
        name: "Russian Spa Centre Mahipalpur",
        telephone: "+91 8929979542",
      },
    },
  })),
};

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceCatalogJsonLd) }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>Affordable Luxury</div>
            <h1>
              Best Value <em>Spa Rates</em>
              <br />
              in Delhi NCR
            </h1>
            <p className={styles.heroText}>
              Compare our prices with any 5-star hotel spa — you&apos;ll save 40-60% without compromising quality.
              Zero hidden fees, guaranteed.
            </p>
          </div>
          <div className={styles.offerBox}>
            <div className={styles.offerPct}>15%</div>
            <div className={styles.offerLabel}>Off Your</div>
            <div className={styles.offerNote}>First Visit — Mention This Website</div>
          </div>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* FEATURED PACKAGES */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className="section-label">Featured Packages</div>
          <h2 className="section-title">
            Most <em>Popular</em> Choices
          </h2>
        </div>
        <div className={styles.packagesGrid}>
          {FEATURED_PACKAGES.map((p, i) => (
            <div key={i} className={`${styles.pkgCard} ${p.popular ? styles.pkgCardPopular : ""}`}>
              {p.popular && <div className={styles.popularBadge}>Best Value</div>}
              <div className={styles.pkgIconChip}>
                <p.icon size={24} strokeWidth={1.8} />
              </div>
              <div className={styles.pkgName}>{p.name}</div>
              <div className={styles.pkgPrice}>{p.price}</div>
              <div className={styles.pkgDuration}>/ {p.duration}</div>
              <ul className={styles.pkgIncludes}>
                {p.includes.map((inc, j) => (
                  <li key={j}>
                    <CircleCheckBig size={14} strokeWidth={2} />
                    {inc}
                  </li>
                ))}
              </ul>
              <a href="tel:+918929979542" className={`${p.popular ? "btn-gold" : "btn-outline"} ${styles.pkgCta}`}>
                Book Now <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HOW OUR PRICING WORKS */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.sectionHead}>
          <div className="section-label">Transparent By Design</div>
          <h2 className="section-title">
            How Our <em>Pricing Works</em>
          </h2>
          <p>
            No membership required to see real prices, no &ldquo;call for quote&rdquo; games. Here&apos;s exactly what
            determines the rate for any session.
          </p>
        </div>
        <div className={styles.howGrid}>
          {HOW_PRICING_WORKS.map((h, i) => (
            <div key={i} className={styles.howCard}>
              <div className={styles.howIconChip}>
                <h.icon size={20} strokeWidth={1.8} />
              </div>
              <h4>{h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE PRICE TABLE */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.sectionHead}>
          <div className="section-label">Complete Price List</div>
          <h2 className="section-title">
            Every <em>Treatment</em> &amp; Rate
          </h2>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>Therapy / Service</th>
                <th>Session Length</th>
                <th>Standard Price</th>
                <th>With 15% Off (First Visit)</th>
              </tr>
            </thead>
            <tbody>
              {COMPLETE_PRICE_LIST.map((r, i) => (
                <tr key={i}>
                  <td>{r.name}</td>
                  <td>{r.duration}</td>
                  <td className={styles.priceCol}>{r.price}</td>
                  <td className={styles.priceColOff}>{r.discounted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PRICE COMPARISON */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.comparisonSection}>
          <div className="section-label">Value Comparison</div>
          <h2 className="section-title">
            Why We&apos;re <em>Delhi&apos;s Best Value</em>
          </h2>
          <div className={styles.comparisonGrid}>
            {COMPARISON.map((c, i) => (
              <div key={i} className={`${styles.comparisonCard} ${c.highlight ? styles.comparisonCardHighlight : ""}`}>
                <div className={styles.comparisonIconChip}>
                  <c.icon size={20} strokeWidth={1.8} />
                </div>
                <div className={styles.comparisonLabel}>{c.label}</div>
                <div className={styles.comparisonRate}>{c.rate}</div>
                <div className={styles.comparisonFor}>{c.note}</div>
                <div className={styles.comparisonSave}>{c.save}</div>
              </div>
            ))}
          </div>
          <p className={styles.comparisonNote}>
            You don&apos;t need to pay 5-star hotel prices for 5-star service. Experience premium quality at
            affordable rates.
          </p>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.sectionHead}>
          <div className="section-label">Special Discounts</div>
          <h2 className="section-title">
            Ways to <em>Save More</em>
          </h2>
        </div>
        <div className={styles.offersGrid}>
          {SPECIAL_OFFERS.map((o, i) => (
            <div key={i} className={styles.offerCard}>
              <div className={styles.offerIconChip}>
                <o.icon size={20} strokeWidth={1.8} />
              </div>
              <div className={styles.offerName}>{o.offer}</div>
              <div className={styles.offerDiscount}>{o.discount}</div>
              <div className={styles.offerCondition}>{o.condition}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.includedSection}>
          <div className="section-label">No Hidden Charges</div>
          <h2 className="section-title">
            What&apos;s <em>Included</em> in Every Price
          </h2>
          <div className={styles.includedGrid}>
            {WHATS_INCLUDED.map((a, i) => (
              <div key={i} className={styles.aiItem}>
                <div className={styles.aiIconChip}>
                  <a.icon size={18} strokeWidth={1.8} />
                </div>
                <div className={styles.aiText}>
                  <strong>{a.title}</strong>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE & MEMBERSHIP */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.customSection}>
          <div className={styles.customCard}>
            <div className={styles.customIconChip}>
              <Building2 size={22} strokeWidth={1.8} />
            </div>
            <h3>Corporate Wellness Program</h3>
            <p>
              Special negotiated rates for companies of all sizes. We partner with HR departments to provide
              employee wellness benefits including on-site chair massage, discounted therapy sessions, and wellness
              workshops. Perfect for reducing workplace stress and improving employee productivity. Call us for a
              custom corporate quote based on your team size and needs.
            </p>
            <a href="tel:+918929979542" className="btn-gold">
              Request Corporate Rates <ArrowRight size={14} />
            </a>
          </div>
          <div className={styles.customCard}>
            <div className={styles.customIconChip}>
              <Crown size={22} strokeWidth={1.8} />
            </div>
            <h3>Monthly Membership Club</h3>
            <p>
              Join our exclusive membership program and enjoy 30% off all services, priority booking, free upgrade
              to 90-minute sessions monthly, birthday complimentary treatment, and referral bonuses. Membership
              starts at just ₹3,999/month for 2 sessions — less than ₹2,000 per premium massage. Cancel anytime with
              30-day notice. The best value for regular wellness seekers.
            </p>
            <a href="tel:+918929979542" className="btn-outline">
              Ask About Membership <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* PRICE PROMISE */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.guaranteeBox}>
          <div className={styles.guaranteeIconChip}>
            <Banknote size={26} strokeWidth={1.8} />
          </div>
          <h3>Best Price Guarantee</h3>
          <p>
            Find a lower rate for an equivalent service at any comparable spa in Mahipalpur, Aerocity, or Delhi
            Airport area? We&apos;ll match the price and give you 10% off your next visit. No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionTop}`}>
        <div className={styles.sectionHead}>
          <div className="section-label">Pricing FAQs</div>
          <h2 className="section-title">
            Questions About <em>Our Rates</em>
          </h2>
        </div>
        <div className={styles.faqGrid}>
          {FAQS.map((faq, i) => (
            <div key={i} className={styles.faqCard}>
              <div className={styles.faqQ}>{faq.q}</div>
              <div className={styles.faqA}>{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
          Book Your Experience
        </div>
        <h2>
          Ready for <em>Delhi&apos;s Best-Value</em> Spa?
        </h2>
        <p>Call or WhatsApp us now — open 24/7, zero hidden charges, 15% off your first visit.</p>
        <div className={styles.ctaActions}>
          <button type="button" className={styles.whatsappBtn} onClick={openWhatsApp}>
            <MessageCircle size={18} /> Book on WhatsApp
          </button>
          <a href="tel:+918929979542" className="btn-outline">
            <PhoneCall size={14} /> +91 8929979542
          </a>
        </div>
      </section>

      {/* KEYWORD CLOUD */}
      <div className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.keywordCloud}>
          {KEYWORDS.map((kw, i) => (
            <span key={i} className={styles.keywordPill}>
              {kw}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}