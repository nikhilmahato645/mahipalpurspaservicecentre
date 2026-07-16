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
  School,
  Landmark,
  Briefcase,
  Sun,
  Waves,
  Flame,
  Hand,
  Wind,
  Droplet,
  Dumbbell,
  BedDouble,
  RefreshCw,
  Leaf,
  Laptop,
  Moon,
  PersonStanding,
  Ban,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./SpaInDwarka.module.css";

/* ---------------------------------- DATA ---------------------------------- */

const WHY_CHOOSE_DWARKA = [
  { icon: Sparkles, title: "Luxury Wellness", desc: "A boutique-style spa environment built for real relaxation, not a rushed, transactional visit." },
  { icon: Hand, title: "Professional Massage", desc: "Trained therapists using correct anatomy-based technique for lasting relief, not generic rubbing." },
  { icon: Route, title: "Easy Accessibility", desc: "Reached from Dwarka in minutes via Dwarka Expressway, NH-48 and the Aerocity corridor." },
  { icon: Building2, title: "Dwarka Convenience", desc: "A short, direct drive for residents of every Dwarka sector — no need to travel deep into the city." },
  { icon: Plane, title: "Airport Connectivity", desc: "Sitting on the same corridor as IGI Airport, so travel fatigue is treated close to where it starts." },
  { icon: Lock, title: "Privacy", desc: "Private treatment rooms and a discreet, professional atmosphere throughout your visit." },
  { icon: BedDouble, title: "Comfort", desc: "Clean linens, calming decor, and unhurried session pacing designed around your comfort." },
  { icon: Star, title: "Premium Experience", desc: "Consistent, high-standard service every visit — the same quality whether you arrive at noon or midnight." },
];

const SPA_JOURNEY = [
  { step: "01", title: "Booking", desc: "Reserve by phone or WhatsApp. Tell us your preferred treatment, time, and whether you're coming from Dwarka Sector 21, Janakpuri, or elsewhere along the corridor, so we can advise on travel time." },
  { step: "02", title: "Arrival", desc: "Arrive by cab, private car, or Uber/Ola. Parking is available directly at the premises — no circling the block looking for a spot." },
  { step: "03", title: "Reception", desc: "A short check-in at reception, where you're offered water or herbal tea while your room is prepared." },
  { step: "04", title: "Consultation", desc: "A brief, honest conversation about pain points, stress levels, allergies, and pressure preference — this shapes the entire session." },
  { step: "05", title: "Treatment Selection", desc: "Based on the consultation, we confirm the right therapy — Swedish for relaxation, deep tissue for chronic knots, Banya for a full reset, and so on." },
  { step: "06", title: "Massage Session", desc: "The core treatment, delivered at a calm, unhurried pace in a private room, with music and lighting kept low and non-intrusive." },
  { step: "07", title: "Relaxation", desc: "A short rest period after the session — many guests use this time in the steam room or simply lying quietly before dressing." },
  { step: "08", title: "Post-Treatment Care", desc: "Water, light aftercare guidance (hydration, stretching, avoiding heavy meals immediately after deep tissue work), and any product recommendations if relevant." },
  { step: "09", title: "Departure", desc: "A relaxed checkout with no upsell pressure. If you're heading back toward Dwarka, we can advise on the quickest route back via the Expressway." },
];

const TREATMENTS = [
  {
    icon: Flame,
    name: "Russian Banya",
    desc: "An authentic steam bathing ritual using controlled heat cycles and traditional venik (birch branch) technique to open pores, ease muscle stiffness, and clear the mind.",
    benefits: "Deep muscular relaxation, improved circulation, respiratory relief, mental reset.",
    suitedFor: "Guests wanting a full sensory reset — long work weeks, travel fatigue, or simply a novel wellness experience.",
    duration: "60–90 minutes",
    frequency: "Every 2–4 weeks for general wellness.",
    aftercare: "Hydrate well, avoid alcohol immediately after, rest for 20–30 minutes before driving.",
  },
  {
    icon: Hand,
    name: "Swedish Massage",
    desc: "Long, flowing strokes combined with light-to-medium pressure kneading, designed for whole-body relaxation rather than targeted pain relief.",
    benefits: "Reduces overall tension, improves sleep quality, lowers stress hormones.",
    suitedFor: "First-time spa visitors and anyone wanting calm, gentle full-body relaxation.",
    duration: "60 minutes",
    frequency: "Every 2–3 weeks.",
    aftercare: "Light stretching and a warm shower help extend the relaxed feeling.",
  },
  {
    icon: Dumbbell,
    name: "Deep Tissue Massage",
    desc: "Firm, targeted pressure applied to deeper muscle layers and connective tissue, aimed at chronic tension rather than surface-level relaxation.",
    benefits: "Releases stubborn knots, eases lower back and shoulder pain, restores mobility.",
    suitedFor: "Desk-job professionals, drivers, and anyone with recurring back, neck, or shoulder stiffness.",
    duration: "75–90 minutes",
    frequency: "Weekly to fortnightly during active pain relief, then monthly for maintenance.",
    aftercare: "Mild soreness for a day is normal; hydrate and apply light warmth if needed.",
  },
  {
    icon: PersonStanding,
    name: "Thai Massage",
    desc: "An acupressure-based technique performed without oils, combining assisted stretching with rhythmic pressure along the body's energy lines.",
    benefits: "Improves flexibility, relieves joint stiffness, leaves guests energised rather than drowsy.",
    suitedFor: "Active individuals, frequent travellers, and anyone wanting an alert, refreshed feeling afterward.",
    duration: "75 minutes",
    frequency: "Every 3–4 weeks.",
    aftercare: "Gentle movement and stretching post-session helps maintain the flexibility gains.",
  },
  {
    icon: Flame,
    name: "Hot Stone Massage",
    desc: "Heated basalt stones are used alongside massage strokes so warmth penetrates muscle fibre faster than hands alone, ideal for deep-seated stiffness.",
    benefits: "Faster muscle release, improved blood flow, a deeply warming, calming sensation.",
    suitedFor: "Guests with chronic muscular tightness or those visiting during colder months.",
    duration: "75 minutes",
    frequency: "Every 3–4 weeks.",
    aftercare: "Avoid very hot showers immediately after; drink water to support circulation.",
  },
  {
    icon: Leaf,
    name: "Aromatherapy Massage",
    desc: "A relaxation-focused massage using essential oil blends chosen for your specific concern — stress, poor sleep, or muscular tension.",
    benefits: "Calms the nervous system, supports better sleep, elevates mood.",
    suitedFor: "Anyone dealing with anxiety, burnout, or disrupted sleep patterns.",
    duration: "60–75 minutes",
    frequency: "Every 2–3 weeks.",
    aftercare: "Avoid strong perfumes or additional fragrances for a few hours to let the oils settle.",
  },
  {
    icon: Droplet,
    name: "Reflexology",
    desc: "Focused pressure-point work on the hands and feet, based on the idea that these zones correspond to different areas of the body.",
    benefits: "Whole-body relaxation, improved circulation in extremities, a lighter, energised feeling.",
    suitedFor: "Guests short on time, or anyone who stands or walks for long hours during the day.",
    duration: "45 minutes",
    frequency: "Weekly to fortnightly.",
    aftercare: "Drink water; mild tenderness in the feet for a short period is normal.",
  },
  {
    icon: Dumbbell,
    name: "Sports Massage",
    desc: "A firmer, targeted massage style aimed at muscle recovery, injury prevention, and performance maintenance for physically active guests.",
    benefits: "Speeds up recovery after exercise, reduces injury risk, improves range of motion.",
    suitedFor: "Runners, gym-goers, and anyone recovering from physical exertion.",
    duration: "60–90 minutes",
    frequency: "Weekly during high training loads, otherwise as needed.",
    aftercare: "Light stretching and hydration; avoid intense training the same day.",
  },
  {
    icon: HeartHandshake,
    name: "Couples Spa",
    desc: "Two therapists work in a shared private suite, delivering synchronised massage sessions for partners, families, or friends who want to relax together.",
    benefits: "Shared relaxation experience, ideal for anniversaries, pre-travel unwinding, or simply quality time.",
    suitedFor: "Couples and pairs wanting a joint wellness experience rather than separate solo sessions.",
    duration: "90–120 minutes",
    frequency: "As a special-occasion or monthly treat.",
    aftercare: "Same as the chosen individual therapies — hydration and rest afterward.",
  },
  {
    icon: Wind,
    name: "Steam Bath",
    desc: "A moist-heat session that opens airways and pores, often used as a warm-up before massage or as a standalone relaxation ritual.",
    benefits: "Clears congestion, softens muscles ahead of massage, promotes light detoxification through sweat.",
    suitedFor: "Guests with mild congestion, tight muscles, or anyone wanting to relax before a treatment.",
    duration: "15–20 minutes",
    frequency: "Each visit, as a complement to massage.",
    aftercare: "Rehydrate immediately; avoid steam if you have specific cardiovascular concerns without medical clearance.",
  },
  {
    icon: Sun,
    name: "Sauna",
    desc: "A dry-heat therapy session that raises core body temperature to promote sweating, circulation, and a deep sense of relaxation.",
    benefits: "Muscle relaxation, improved circulation, stress relief.",
    suitedFor: "Guests who prefer dry heat over steam, or want a shorter pre-massage warm-up.",
    duration: "10–15 minutes",
    frequency: "Each visit, as a complement to massage.",
    aftercare: "Cool down gradually and hydrate before your massage session begins.",
  },
  {
    icon: Waves,
    name: "Jacuzzi",
    desc: "Warm, jet-driven water therapy that eases joint pressure and relaxes muscles before or after a treatment.",
    benefits: "Reduces joint stress, soothes tired muscles, adds a resort-style finish to the visit.",
    suitedFor: "Guests wanting an added relaxation layer alongside their massage booking.",
    duration: "15–20 minutes",
    frequency: "Each visit, as availability allows.",
    aftercare: "Pat dry, rest briefly, and hydrate before heading back out.",
  },
];

const PROFESSIONAL_GUIDE = [
  { icon: Laptop, title: "Office Stress", desc: "Long meeting-heavy days and constant screen time build up tension in the shoulders and jaw long before it's consciously noticed." },
  { icon: PersonStanding, title: "Laptop Posture", desc: "Hours hunched over a laptop — common among Dwarka's IT and corporate office workers — rounds the shoulders and strains the neck." },
  { icon: Hand, title: "Neck Pain", desc: "Deep tissue and Swedish work on the neck and upper trapezius directly targets the tightness that builds from desk-based work." },
  { icon: Dumbbell, title: "Back Pain", desc: "Prolonged sitting compresses the lower back; targeted massage restores blood flow and eases chronic stiffness." },
  { icon: Moon, title: "Mental Fatigue", desc: "Aromatherapy and Banya sessions help reset an overworked mind, not just tired muscles." },
  { icon: BedDouble, title: "Poor Sleep", desc: "Relaxation-focused massage lowers stress hormones that often keep professionals awake at night." },
  { icon: Dumbbell, title: "Fitness Recovery", desc: "Sports massage supports gym-goers and runners across Dwarka's residential sectors in recovering faster between sessions." },
  { icon: RefreshCw, title: "Work-Life Balance", desc: "A scheduled, recurring spa visit is a simple way to protect personal recovery time in an otherwise packed calendar." },
];

const TRAVELLER_GUIDE = [
  { icon: Plane, title: "Airport Travel Fatigue", desc: "Long check-in queues, security lines, and cramped seating leave the body stiff — deep tissue and reflexology work address this directly." },
  { icon: Car, title: "Long Driving Hours", desc: "Drivers and commuters using NH-48 and Dwarka Expressway for daily travel often carry tension in the lower back and shoulders." },
  { icon: Briefcase, title: "Business Meetings", desc: "A pre- or post-meeting massage helps professionals arrive sharper or unwind after a demanding day of negotiations." },
  { icon: Route, title: "Daily Commuting", desc: "Dwarka's residents commuting toward Gurugram, Aerocity, or central Delhi benefit from a wellness stop along the same corridor." },
  { icon: Plane, title: "Flight Layovers", desc: "Transit passengers with a few free hours can use that window for a full-body massage rather than waiting at the terminal." },
  { icon: Moon, title: "Jet Lag", desc: "Aromatherapy and Swedish massage help regulate the nervous system after long-haul travel disruption." },
  { icon: Route, title: "Road Trips", desc: "Guests arriving or departing via the Dwarka Expressway toward NCR and beyond often stop for a massage before continuing their journey." },
  { icon: Leaf, title: "Stress Relief", desc: "Whatever the source — travel, deadlines, family responsibilities — the goal of every session is a measurable drop in physical and mental tension." },
  { icon: RefreshCw, title: "Recovery After Travel", desc: "A structured post-travel massage routine helps the body recover faster than rest alone." },
];

const NEARBY_AREAS = [
  { icon: TrainFront, name: "Dwarka Sector 21 Metro", note: "Blue Line & Airport Express interchange" },
  { icon: Building2, name: "Dwarka Sector 10", note: "Residential sector" },
  { icon: Building2, name: "Dwarka Sector 12", note: "Residential & commercial mix" },
  { icon: Building2, name: "Dwarka Sector 13", note: "Residential sector" },
  { icon: Building2, name: "Dwarka Sector 14", note: "Residential sector" },
  { icon: MapPin, name: "Dwarka Sector 6", note: "Residential sector" },
  { icon: MapPin, name: "Dwarka Mor", note: "Major junction & metro station" },
  { icon: MapPin, name: "Palam", note: "Adjoining residential area" },
  { icon: MapPin, name: "Janakpuri", note: "West Delhi commercial hub" },
  { icon: MapPin, name: "Dashrath Puri", note: "Residential locality" },
  { icon: Building2, name: "Aerocity", note: "Hospitality & business district" },
  { icon: Plane, name: "IGI Airport", note: "Terminal 1, 2 & 3" },
];

const HOW_TO_REACH = [
  { from: "Dwarka Sector 21 Metro", route: "Via Dwarka Expressway / Airport corridor toward Aerocity & Mahipalpur", time: "~20–25 min by road" },
  { from: "Dwarka Sector 10", route: "Via Dwarka Expressway connecting to NH-48", time: "~25–30 min by road" },
  { from: "Dwarka Sector 12", route: "Via Najafgarh Road / Dwarka Expressway toward NH-48", time: "~25–30 min by road" },
  { from: "Janakpuri", route: "Via Najafgarh Road onto NH-48 toward Mahipalpur", time: "~20–25 min by road" },
  { from: "Palam", route: "Via Palam Road connecting to the Airport corridor", time: "~15–20 min by road" },
  { from: "IGI Airport (T1/T2/T3)", route: "Direct via the Airport Corridor to Mahipalpur", time: "~10–15 min by road" },
];

const WHY_CUSTOMERS_CHOOSE_US = [
  { icon: GraduationCap, title: "Professional Therapists", desc: "Trained in anatomy-correct technique across Russian and Indian massage styles." },
  { icon: Sparkles, title: "Luxury Atmosphere", desc: "A calm, well-maintained environment designed for genuine relaxation." },
  { icon: Route, title: "Convenient Location", desc: "Positioned directly on the Dwarka Expressway–NH-48–Aerocity corridor, minutes from Dwarka by road." },
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
  { icon: MessageCircle, title: "Communication", desc: "A short pre-session conversation about pain points and preferences shapes a far more effective massage." },
  { icon: HeartHandshake, title: "Client Comfort", desc: "Room temperature, table setup, and pacing are all adjusted to what makes each individual guest comfortable." },
  { icon: Sparkles, title: "Personalised Wellness", desc: "No two sessions are identical — technique is adapted to the guest's body, goals, and tolerance on that particular day." },
];

const TESTIMONIALS = [
  { text: "I live in Dwarka Sector 12 and was hesitant about the drive, but it took less than half an hour via the Expressway. The deep tissue massage was exactly what my desk-job back needed.", author: "Rahul M.", location: "Dwarka Sector 12" },
  { text: "Booked a couples spa session before a flight out of IGI Airport. The location on the airport corridor made it easy to fit in on our way from Dwarka.", author: "Ishita & Karan", location: "Dwarka Resident" },
  { text: "The Russian Banya was a completely new experience for me. Worth the short drive from Dwarka Mor — I felt reset for days afterward.", author: "Sanjay T.", location: "Dwarka Mor" },
];

const FAQS = [
  { q: "Is your spa located inside Dwarka?", a: "No. Our spa is based in Mahipalpur, directly on the Dwarka Expressway–NH-48–Aerocity corridor, which keeps travel time from most Dwarka sectors to around 20–30 minutes by road." },
  { q: "Why do people search for a 'spa in Dwarka' if you're in Mahipalpur?", a: "Dwarka is a large residential sub-city without many premium spa options of its own, so residents regularly travel a short distance along the Expressway to reach a full-service wellness centre like ours." },
  { q: "How far is Mahipalpur from Dwarka Sector 21 Metro?", a: "It's roughly a 20–25 minute drive via the Dwarka Expressway and the Airport corridor, depending on traffic." },
  { q: "Can I reach your spa by metro from Dwarka?", a: "The Blue Line and Airport Express connect Dwarka to nearby interchange points, but the final stretch to our Mahipalpur location is best completed by taxi, Uber, or Ola." },
  { q: "Do you offer Russian Banya near Dwarka?", a: "Yes — our Russian Banya is available at our Mahipalpur centre, a short drive from Dwarka via the Expressway and NH-48." },
  { q: "What massage types are available for Dwarka guests?", a: "Swedish, deep tissue, Thai, hot stone, aromatherapy, reflexology, and sports massage are all available, alongside Russian Banya and couples packages." },
  { q: "Is parking available for guests driving from Dwarka?", a: "Yes, parking is available directly at the premises, so there's no need to search for street parking after your drive in." },
  { q: "Are you open late for guests coming after work from Dwarka?", a: "Yes, we operate 24 hours a day, seven days a week, which works well for professionals finishing late in Dwarka's commercial areas." },
  { q: "Do you have couples spa packages for Dwarka residents?", a: "Yes, our couples package includes two therapists working in a shared private suite, ideal for partners travelling in together from Dwarka." },
  { q: "Is the drive from Janakpuri or Palam similar to Dwarka?", a: "Yes — Janakpuri and Palam sit along a similar road corridor, so travel times to our Mahipalpur centre are broadly comparable, typically 15–25 minutes." },
  { q: "What should I expect on my first visit if I'm coming from Dwarka?", a: "A short consultation about your goals and any pain points, followed by your chosen treatment in a private room, with time afterward to relax before heading back." },
  { q: "Do you treat travel fatigue for people flying out of IGI Airport near Dwarka?", a: "Yes, many guests combine an airport trip with a massage beforehand, since our location sits directly on the airport corridor." },
  { q: "Is there a dress code for my visit?", a: "Comfortable, easily removable clothing is recommended. Robes and private changing areas are provided for every treatment." },
  { q: "How often should I get a massage if I commute daily via Dwarka Expressway?", a: "For general recovery, every 2–3 weeks is a reasonable rhythm; for chronic pain, weekly or fortnightly sessions are more effective initially." },
  { q: "Do you have both male and female therapists?", a: "Yes, both are available, and preference can be mentioned when you book by phone or WhatsApp." },
  { q: "Can I book same-day if I'm travelling from Dwarka?", a: "Yes, same-day bookings are accepted based on availability — calling or messaging ahead helps us confirm your preferred slot and therapist." },
  { q: "Is the Dwarka Expressway route reliable for reaching you?", a: "Yes, it's a direct, well-connected route linking Dwarka to NH-48 and the Aerocity/airport corridor where our centre is based." },
  { q: "Do you offer hygiene guarantees for every session?", a: "Every room, table, and set of linens is cleaned and refreshed between guests, with equipment sanitised after each use." },
  { q: "What's the benefit of visiting a spa outside Dwarka rather than a local option?", a: "A dedicated, larger wellness centre allows for more therapy variety, private couples suites, and Russian Banya — services that are harder to find within Dwarka itself." },
  { q: "How do I book from Dwarka — call or WhatsApp?", a: "Both work. Call +91 8929979542 for immediate booking, or message on WhatsApp to confirm timing and treatment before you set out." },
];

const KEYWORDS = [
  "spa in dwarka",
  "best spa in dwarka",
  "luxury spa in dwarka",
  "russian spa in dwarka",
  "body massage in dwarka",
  "full body massage dwarka",
  "massage centre dwarka",
  "spa near dwarka sector 21 metro",
  "spa near dwarka mor",
  "spa near janakpuri",
  "spa near palam",
  "russian banya dwarka",
];

function openWhatsApp() {
  const message =
    "Hello! I'm coming from Dwarka and want to book an appointment at your spa near the Dwarka Expressway / Mahipalpur. Please share details and availability.";
  const encodedMessage = encodeURIComponent(message);
  window.open("https://wa.me/918929979542?text=" + encodedMessage, "_blank");
}

/* --------------------------------- COMPONENT --------------------------------- */

export default function SpaInDwarka() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["SpaOrHealthClub", "LocalBusiness"],
                name: "Russian Spa Centre — Serving Dwarka",
                image: "https://mahipalpurspaservicecentre.com/logo.png",
                telephone: "+91 8929979542",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
                  addressLocality: "New Delhi",
                  postalCode: "110037",
                  addressCountry: "IN",
                },
                url: "https://mahipalpurspaservicecentre.com/spa-in-dwarka/",
                openingHours: "Mo-Su 00:00-23:59",
                priceRange: "₹1800-₹7500",
                areaServed: [
                  { "@type": "Place", name: "Dwarka" },
                  { "@type": "Place", name: "Dwarka Sector 21" },
                  { "@type": "Place", name: "Dwarka Mor" },
                  { "@type": "Place", name: "Janakpuri" },
                  { "@type": "Place", name: "Palam" },
                  { "@type": "Place", name: "Aerocity" },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://mahipalpurspaservicecentre.com/" },
                  { "@type": "ListItem", position: 2, name: "Locations", item: "https://mahipalpurspaservicecentre.com/locations/" },
                  { "@type": "ListItem", position: 3, name: "Spa in Dwarka", item: "https://mahipalpurspaservicecentre.com/spa-in-dwarka/" },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
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
            Serving Dwarka via the Expressway
          </div>
          <h1>
            Best <em>Spa in Dwarka</em>
            <br />
            Near the Dwarka Expressway
          </h1>
          <p className={styles.heroText}>
            Russian Spa Centre is based in Mahipalpur, directly on the Dwarka Expressway–NH-48–Aerocity corridor —
            reachable from most Dwarka sectors in around 20–30 minutes by road. Enjoy authentic Russian Banya, full
            body massage, and luxury wellness therapies, open 24/7 with certified therapists.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:+918929979542" className="btn-gold">
              <PhoneCall size={15} /> Call Now: +91 8929979542
            </a>
            <button type="button" className="btn-outline" onClick={openWhatsApp}>
              <MessageCircle size={15} /> Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* IMPORTANT LOCATION NOTICE */}
      <section className={styles.noticeSection}>
        <div className={styles.noticeBox}>
          <Info size={20} strokeWidth={1.8} />
          <p>
            <strong>Please note:</strong> our spa is physically located in Mahipalpur, not inside Dwarka itself. We
            serve Dwarka residents and visitors because of the direct, convenient connectivity via the Dwarka
            Expressway, NH-48, Aerocity, and the Airport corridor. We are not affiliated with, partnered with, or
            located at any Dwarka metro station, residential society, hotel, or government building.
          </p>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHY CHOOSE US NEAR DWARKA */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">
            Why Choose Our <em>Spa Near Dwarka</em>
          </h2>
          <p className={styles.sectionSub}>
            A short, direct drive from Dwarka along the Expressway brings you to a full-service luxury wellness
            centre built around privacy, comfort, and professional technique.
          </p>
        </div>
        <div className={styles.whyGrid}>
          {WHY_CHOOSE_DWARKA.map((item, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT DWARKA */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.twoColumn}>
          <div className={styles.twoColumnText}>
            <div className="section-label">Local Guide</div>
            <h2 className="section-title">
              About <em>Dwarka</em>
            </h2>
            <div className="divider" />
            <p>
              Dwarka is one of Delhi&rsquo;s largest planned residential sub-cities, laid out across numbered
              sectors that range from dense residential blocks to institutional and commercial zones. Its
              sector-based planning makes it easy to navigate — each sector functions almost like a self-contained
              neighbourhood with its own markets, parks, and schools, while still connecting cleanly to the wider
              sub-city grid.
            </p>
            <p>
              The area is home to a large number of schools, coaching institutes, and colleges, making it a
              family-oriented and education-focused part of Delhi. Alongside this, Dwarka has grown a genuine
              commercial identity, with office complexes and business establishments serving both local residents
              and the wider West Delhi region.
            </p>
            <p>
              Connectivity is one of Dwarka&rsquo;s biggest strengths. The Delhi Metro&rsquo;s Blue Line runs through
              multiple Dwarka sectors, with Dwarka Sector 21 also serving as an interchange point toward the Airport
              Express Line. Road connectivity is equally strong: the Dwarka Expressway (also known as the
              Delhi–Gurugram Expressway) links Dwarka directly to NH-48, while local roads connect it to Palam,
              Janakpuri, and Dashrath Puri.
            </p>
            <p>
              On weekends, residents often head toward nearby markets, parks, and sports facilities within the
              sub-city, or travel a short distance out along the Expressway toward Aerocity and the airport corridor
              for dining, shopping, or — increasingly — wellness services that aren&rsquo;t as readily available
              within Dwarka&rsquo;s own commercial sectors.
            </p>
            <p>
              This is precisely why residents and visitors from Dwarka regularly search for nearby wellness
              services: the sub-city is large and well-connected, but a dedicated luxury spa with Russian Banya,
              couples suites, and a full range of massage therapies is something most guests currently travel a
              short distance for, along a corridor they already use daily for work and travel.
            </p>
          </div>
          <div className={styles.miniCards}>
            {[
              { icon: School, title: "Educational Hub", desc: "Numerous schools, coaching centres, and colleges across sectors" },
              { icon: TrainFront, title: "Metro Connectivity", desc: "Blue Line through Dwarka; Sector 21 links to Airport Express" },
              { icon: Landmark, title: "Business Districts", desc: "Growing commercial and institutional office presence" },
              { icon: Route, title: "Road Network", desc: "Dwarka Expressway links directly to NH-48 and the airport corridor" },
            ].map((item, i) => (
              <div key={i} className={styles.miniCard}>
                <div className={styles.miniIcon}>
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETE SPA EXPERIENCE */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Your Visit
          </div>
          <h2 className="section-title">
            The Complete <em>Spa Experience</em>
          </h2>
          <p className={styles.sectionSub}>
            From the first phone call to walking back out to your car, here&rsquo;s exactly what a visit looks like.
          </p>
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

      {/* PREMIUM WELLNESS TREATMENTS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Our Treatments
          </div>
          <h2 className="section-title">
            Premium <em>Wellness Treatments</em>
          </h2>
          <p className={styles.sectionSub}>
            Every treatment below is available at our Mahipalpur centre, minutes from Dwarka via the Expressway.
          </p>
        </div>
        <div className={styles.treatGrid}>
          {TREATMENTS.map((t, i) => (
            <div key={i} className={styles.treatCard}>
              <div className={styles.treatIcon}>
                <t.icon size={22} strokeWidth={1.8} />
              </div>
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
          ))}
        </div>
      </section>

      {/* WELLNESS GUIDE FOR PROFESSIONALS & RESIDENTS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            For Professionals
          </div>
          <h2 className="section-title">
            Wellness Guide for <em>Professionals &amp; Residents</em>
          </h2>
          <p className={styles.sectionSub}>
            Dwarka is home to a large number of office-going professionals — here&rsquo;s how regular massage
            addresses the specific strain of desk-based work.
          </p>
        </div>
        <div className={styles.guideGrid}>
          {PROFESSIONAL_GUIDE.map((item, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.guideIcon}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WELLNESS GUIDE FOR TRAVELLERS & RESIDENTS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            For Travellers
          </div>
          <h2 className="section-title">
            Wellness Guide for <em>Travellers &amp; Residents</em>
          </h2>
          <p className={styles.sectionSub}>
            Dwarka&rsquo;s proximity to IGI Airport and the NH-48 corridor means many residents and visitors are
            frequent travellers themselves.
          </p>
        </div>
        <div className={styles.guideGrid}>
          {TRAVELLER_GUIDE.map((item, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.guideIcon}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEARBY AREAS WE SERVE */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Nearby Areas We Serve
          </div>
          <h2 className="section-title">
            Serving <em>Dwarka &amp; Surrounding Areas</em>
          </h2>
          <p className={styles.sectionSub}>Accessible from every part of Dwarka and its neighbouring localities:</p>
        </div>
        <div className={styles.nearbyGrid}>
          {NEARBY_AREAS.map((place, i) => (
            <div key={i} className={styles.nearbyCard}>
              <div className={styles.nearbyIcon}>
                <place.icon size={18} strokeWidth={1.8} />
              </div>
              <h4>{place.name}</h4>
              <p>{place.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO REACH */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Directions
          </div>
          <h2 className="section-title">
            How to <em>Reach Us</em> from Dwarka
          </h2>
        </div>
        <div className={styles.reachTableWrap}>
          <table className={styles.reachTable}>
            <thead>
              <tr>
                <th>From</th>
                <th>Route</th>
                <th>Est. Time</th>
              </tr>
            </thead>
            <tbody>
              {HOW_TO_REACH.map((r, i) => (
                <tr key={i}>
                  <td>{r.from}</td>
                  <td>{r.route}</td>
                  <td>{r.time}</td>
                </tr>
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

      {/* WHY CUSTOMERS FROM DWARKA CHOOSE US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Guest Confidence
          </div>
          <h2 className="section-title">
            Why Customers from <em>Dwarka Choose Us</em>
          </h2>
        </div>
        <div className={styles.whyGrid}>
          {WHY_CUSTOMERS_CHOOSE_US.map((item, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FIRST VISIT GUIDE */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.twoColumn}>
          <div className={styles.twoColumnText}>
            <div className="section-label">New Here?</div>
            <h2 className="section-title">
              First Visit <em>Guide</em>
            </h2>
            <div className="divider" />
            <p>
              <strong>Booking:</strong> Call or WhatsApp ahead, especially if you&rsquo;re travelling from Dwarka
              during peak traffic hours, so we can plan your slot accurately.
            </p>
            <p>
              <strong>Consultation:</strong> On arrival, a short conversation covers any pain points, allergies, and
              your comfort with pressure levels.
            </p>
            <p>
              <strong>Treatment Selection:</strong> Based on that conversation, we recommend the therapy best suited
              to your goals — relaxation, pain relief, or recovery.
            </p>
            <p>
              <strong>Dress Code:</strong> Comfortable clothing is fine; robes and private changing areas are
              provided for the treatment itself.
            </p>
            <p>
              <strong>What to Expect:</strong> A calm, unhurried session in a private room, followed by a short rest
              period before you head back — including the drive back toward Dwarka.
            </p>
          </div>
          <div className={styles.miniCards}>
            <div className={styles.miniCard}>
              <div className={styles.miniIcon}>
                <ShowerHead size={22} strokeWidth={1.8} />
              </div>
              <h3>Hygiene & Safety</h3>
              <p>Sanitised rooms, fresh linens, and clean equipment for every guest.</p>
            </div>
            <div className={styles.miniCard}>
              <div className={styles.miniIcon}>
                <GraduationCap size={22} strokeWidth={1.8} />
              </div>
              <h3>Trained Therapists</h3>
              <p>Anatomy-aware technique, adapted to your comfort and goals.</p>
            </div>
            <div className={styles.miniCard}>
              <div className={styles.miniIcon}>
                <Clock size={22} strokeWidth={1.8} />
              </div>
              <h3>Open 24/7</h3>
              <p>Fits around office hours, flights, or weekend plans.</p>
            </div>
            <div className={styles.miniCard}>
              <div className={styles.miniIcon}>
                <Lock size={22} strokeWidth={1.8} />
              </div>
              <h3>Total Privacy</h3>
              <p>Private rooms and discreet, professional service throughout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HYGIENE & SAFETY STANDARDS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Standards
          </div>
          <h2 className="section-title">
            Hygiene &amp; <em>Safety Standards</em>
          </h2>
        </div>
        <div className={styles.guideGrid}>
          {HYGIENE_STANDARDS.map((item, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.guideIcon}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PROFESSIONAL THERAPISTS MATTER */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            The Difference
          </div>
          <h2 className="section-title">
            Why Professional <em>Therapists Matter</em>
          </h2>
        </div>
        <div className={styles.guideGrid}>
          {THERAPIST_MATTERS.map((item, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.guideIcon}>
                <item.icon size={20} strokeWidth={1.8} />
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.sectionHeader}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Guest Experiences
            </div>
            <h2 className="section-title">
              What Our <em>Dwarka Guests</em> Say
            </h2>
          </div>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testiCard}>
                <Quote size={26} strokeWidth={1.5} />
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
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Transparent Pricing
          </div>
          <h2 className="section-title">
            Spa <em>Prices</em> for Dwarka Guests
          </h2>
        </div>
        <div className={styles.pricingCard}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: "Russian Banya Experience", duration: "60 min", price: "₹2,500" },
                { service: "Full Body Swedish Massage", duration: "60 min", price: "₹2,000" },
                { service: "Deep Tissue Massage (Extended)", duration: "90 min", price: "₹3,500" },
                { service: "Traditional Thai Massage", duration: "75 min", price: "₹3,200" },
                { service: "Aromatherapy Massage", duration: "75 min", price: "₹3,000" },
                { service: "Hot Stone Therapy", duration: "75 min", price: "₹3,500" },
                { service: "Foot Reflexology", duration: "45 min", price: "₹2,200" },
                { service: "Sports Performance Massage", duration: "60 min", price: "₹3,800" },
                { service: "Couples Spa Package (Premium)", duration: "120 min", price: "₹7,500" },
              ].map((row, i) => (
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
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQs
          </div>
          <h2 className="section-title">
            Questions About <em>Spa in Dwarka</em>
          </h2>
        </div>
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
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Ready to Relax — Minutes from Dwarka?</h2>
        <p>Book your appointment now — open 24/7 with instant confirmation via WhatsApp or call.</p>
        <button type="button" className={styles.whatsappBtn} onClick={openWhatsApp}>
          <MessageCircle size={20} />
          Book on WhatsApp — Instant Confirmation
        </button>
        <div className={styles.ctaCallRow}>
          <PhoneCall size={14} /> Or call us: <a href="tel:+918929979542">+91 8929979542</a>
        </div>
      </section>

      {/* MAP / ADDRESS */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="section-title">
            Visit Us — <em>Minutes from Dwarka</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={15} />
            Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
          </p>
          <p className={styles.mapNote}>
            <Ban size={13} /> Not located inside Dwarka — accessible via Dwarka Expressway, NH-48 & Aerocity.
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre - Serving Dwarka via Mahipalpur Location"
            />
          </div>
          <div className="keyword-cloud">
            {KEYWORDS.map((kw, i) => (
              <span key={i}>{kw}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
