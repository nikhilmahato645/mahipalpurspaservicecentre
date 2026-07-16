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
  ShoppingBag,
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
  Footprints,
  Luggage,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./SpaInKarolBagh.module.css";

/* ---------------------------------- DATA ---------------------------------- */

const WHY_CHOOSE_KAROL_BAGH = [
  { icon: Sparkles, title: "Luxury Wellness", desc: "A calm, boutique-style spa environment built for genuine relaxation, away from Karol Bagh's busy market noise." },
  { icon: Hand, title: "Professional Massage", desc: "Anatomy-correct technique across Russian and Indian massage styles, applied by trained therapists." },
  { icon: Route, title: "Easy Accessibility", desc: "Reached from Karol Bagh in minutes via NH-48, Dhaula Kuan, and the Airport Corridor." },
  { icon: Building2, title: "Central Delhi Convenience", desc: "A short, direct drive for shoppers, office-goers, and residents without navigating deep into other parts of the city." },
  { icon: Plane, title: "Airport Connectivity", desc: "Sitting on the same corridor as IGI Airport, ideal for travellers passing through New Delhi Railway Station or the airport." },
  { icon: Lock, title: "Privacy", desc: "Private treatment rooms and a discreet, professional atmosphere throughout your visit." },
  { icon: BedDouble, title: "Comfort", desc: "Clean linens, calming decor, and an unhurried session pace designed around your comfort." },
  { icon: Star, title: "Premium Experience", desc: "The same high standard of service every visit, whether you arrive after a shopping trip or a late flight." },
];

const SPA_JOURNEY = [
  { step: "01", title: "Booking", desc: "Reserve by phone or WhatsApp. Tell us your preferred treatment and time, and whether you're travelling from Ajmal Khan Road, Rajendra Place, or elsewhere near Karol Bagh, so we can advise on travel time." },
  { step: "02", title: "Arrival", desc: "Arrive by cab, private car, or Uber/Ola. On-site parking means no circling the block after your drive in from Central Delhi." },
  { step: "03", title: "Reception", desc: "A short check-in at reception, with water or herbal tea offered while your treatment room is prepared." },
  { step: "04", title: "Consultation", desc: "A brief, honest conversation about pain points, stress levels, allergies, and pressure preference shapes the entire session." },
  { step: "05", title: "Treatment Selection", desc: "Based on the consultation, we confirm the right therapy — Swedish for relaxation, deep tissue for chronic knots, Banya for a full reset, and so on." },
  { step: "06", title: "Massage Session", desc: "The core treatment, delivered at a calm, unhurried pace in a private room, with music and lighting kept low and non-intrusive." },
  { step: "07", title: "Relaxation", desc: "A short rest period after the session — many guests use this time in the steam room or simply lying quietly before dressing." },
  { step: "08", title: "Post-Treatment Care", desc: "Water, light aftercare guidance (hydration, stretching, avoiding heavy meals immediately after deep tissue work), and product recommendations if relevant." },
  { step: "09", title: "Departure", desc: "A relaxed checkout with no upsell pressure. If you're heading back toward Karol Bagh, we can advise on the quickest route back via NH-48 and Dhaula Kuan." },
];

const TREATMENTS = [
  {
    icon: Flame,
    name: "Russian Banya",
    desc: "An authentic steam bathing ritual using controlled heat cycles and traditional venik (birch branch) technique to open pores, ease muscle stiffness, and clear the mind.",
    benefits: "Deep muscular relaxation, improved circulation, respiratory relief, mental reset.",
    suitedFor: "Guests wanting a full sensory reset — long market days, work weeks, or simply a novel wellness experience.",
    duration: "60–90 minutes",
    frequency: "Every 2–4 weeks for general wellness.",
    aftercare: "Hydrate well, avoid alcohol immediately after, rest for 20–30 minutes before driving.",
  },
  {
    icon: Hand,
    name: "Swedish Massage",
    desc: "Long, flowing strokes combined with light-to-medium pressure kneading, designed for whole-body relaxation rather than targeted pain relief.",
    benefits: "Reduces overall tension, improves sleep quality, lowers stress hormones.",
    suitedFor: "First-time spa visitors and anyone wanting calm, gentle full-body relaxation after a busy day in the market.",
    duration: "60 minutes",
    frequency: "Every 2–3 weeks.",
    aftercare: "Light stretching and a warm shower help extend the relaxed feeling.",
  },
  {
    icon: Dumbbell,
    name: "Deep Tissue Massage",
    desc: "Firm, targeted pressure applied to deeper muscle layers and connective tissue, aimed at chronic tension rather than surface-level relaxation.",
    benefits: "Releases stubborn knots, eases lower back and shoulder pain, restores mobility.",
    suitedFor: "Rajendra Place and Patel Nagar office professionals, and anyone with recurring back, neck, or shoulder stiffness.",
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
    suitedFor: "Guests with chronic muscular tightness, or those visiting during Delhi's colder months.",
    duration: "75 minutes",
    frequency: "Every 3–4 weeks.",
    aftercare: "Avoid very hot showers immediately after; drink water to support circulation.",
  },
  {
    icon: Leaf,
    name: "Aromatherapy Massage",
    desc: "A relaxation-focused massage using essential oil blends chosen for your specific concern — stress, poor sleep, or muscular tension.",
    benefits: "Calms the nervous system, supports better sleep, elevates mood.",
    suitedFor: "Anyone dealing with anxiety, burnout, or disrupted sleep patterns from a demanding work or travel schedule.",
    duration: "60–75 minutes",
    frequency: "Every 2–3 weeks.",
    aftercare: "Avoid strong perfumes or additional fragrances for a few hours to let the oils settle.",
  },
  {
    icon: Droplet,
    name: "Reflexology",
    desc: "Focused pressure-point work on the hands and feet, based on the idea that these zones correspond to different areas of the body.",
    benefits: "Whole-body relaxation, improved circulation in extremities, a lighter, energised feeling.",
    suitedFor: "Shoppers who've spent hours walking Ajmal Khan Road and Ghaffar Market, or anyone who stands for long hours.",
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
    benefits: "Shared relaxation experience, ideal for anniversaries, pre-travel unwinding, or simply quality time after a day of shopping.",
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
  { icon: Laptop, title: "Office Stress", desc: "Long meeting-heavy days at Rajendra Place and Patel Nagar's commercial towers build up tension in the shoulders and jaw long before it's consciously noticed." },
  { icon: PersonStanding, title: "Laptop Posture", desc: "Hours hunched over a laptop, common across Karol Bagh's business offices, rounds the shoulders and strains the neck." },
  { icon: Hand, title: "Neck Pain", desc: "Deep tissue and Swedish work on the neck and upper trapezius directly targets the tightness that builds from desk-based work." },
  { icon: Dumbbell, title: "Back Pain", desc: "Prolonged sitting compresses the lower back; targeted massage restores blood flow and eases chronic stiffness." },
  { icon: Moon, title: "Mental Fatigue", desc: "Aromatherapy and Banya sessions help reset an overworked mind, not just tired muscles." },
  { icon: BedDouble, title: "Poor Sleep", desc: "Relaxation-focused massage lowers stress hormones that often keep professionals awake at night." },
  { icon: Dumbbell, title: "Fitness Recovery", desc: "Sports massage supports gym-goers and active residents around Karol Bagh in recovering faster between sessions." },
  { icon: RefreshCw, title: "Work-Life Balance", desc: "A scheduled, recurring spa visit is a simple way to protect personal recovery time in an otherwise packed calendar." },
];

const SHOPPER_TRAVELLER_GUIDE = [
  { icon: ShoppingBag, title: "Shopping Fatigue", desc: "A full day covering Ajmal Khan Road, Ghaffar Market, and Tank Road leaves the legs, feet, and shoulders (from carrying bags) noticeably strained." },
  { icon: Footprints, title: "Long Walking Hours", desc: "Karol Bagh's market lanes involve extensive walking on hard surfaces — reflexology and foot-focused massage directly relieve this." },
  { icon: Briefcase, title: "Business Meetings", desc: "A pre- or post-meeting massage helps professionals arrive sharper or unwind after a demanding day of negotiations near Connaught Place or Jhandewalan." },
  { icon: TrainFront, title: "Railway Travel", desc: "Guests arriving at or departing from New Delhi Railway Station often use a short massage window to ease the stiffness of train travel." },
  { icon: Plane, title: "Airport Transfers", desc: "The same NH-48 and Airport Corridor route used to reach IGI Airport passes directly by our Mahipalpur location, making a stopover simple." },
  { icon: Moon, title: "Jet Lag", desc: "Aromatherapy and Swedish massage help regulate the nervous system after long-haul travel disruption." },
  { icon: Route, title: "Road Trips", desc: "Guests arriving or departing via NH-48 toward Gurugram, Jaipur, or beyond often stop for a massage before continuing their journey." },
  { icon: Leaf, title: "Stress Relief", desc: "Whatever the source — shopping, deadlines, travel — the goal of every session is a measurable drop in physical and mental tension." },
  { icon: Luggage, title: "Recovery After Travel", desc: "A structured post-travel massage routine helps the body recover faster than rest alone." },
];

const NEARBY_AREAS = [
  { icon: TrainFront, name: "Karol Bagh Metro Station", note: "Blue Line station" },
  { icon: ShoppingBag, name: "Ajmal Khan Road", note: "Main shopping street" },
  { icon: ShoppingBag, name: "Ghaffar Market", note: "Electronics & retail market" },
  { icon: Route, name: "Tank Road", note: "Commercial stretch" },
  { icon: Route, name: "Pusa Road", note: "Connecting arterial road" },
  { icon: Building2, name: "Rajendra Place", note: "Commercial office hub" },
  { icon: Building2, name: "Jhandewalan", note: "Business & residential mix" },
  { icon: Building2, name: "Patel Nagar", note: "Residential locality" },
  { icon: TrainFront, name: "New Delhi Railway Station", note: "Major rail terminus" },
  { icon: Landmark, name: "Connaught Place", note: "Central business & retail district" },
  { icon: Building2, name: "Aerocity", note: "Hospitality & business district" },
  { icon: Plane, name: "IGI Airport", note: "Terminal 1, 2 & 3" },
];

const HOW_TO_REACH = [
  { from: "Karol Bagh Metro Station", route: "Via Pusa Road / Ring Road onto NH-48 toward Dhaula Kuan & Mahipalpur", time: "~25–30 min by road" },
  { from: "Ajmal Khan Road", route: "Via Pusa Road connecting to NH-48", time: "~25–30 min by road" },
  { from: "Rajendra Place", route: "Via Ring Road / Naraina onto NH-48", time: "~20–25 min by road" },
  { from: "Connaught Place", route: "Via Panchkuian Road / Ring Road onto the Airport Corridor", time: "~25–30 min by road" },
  { from: "New Delhi Railway Station", route: "Via Ajmeri Gate / Ring Road toward NH-48 and Dhaula Kuan", time: "~30–35 min by road" },
  { from: "IGI Airport (T1/T2/T3)", route: "Direct via the Airport Corridor to Mahipalpur", time: "~10–15 min by road" },
];

const WHY_CUSTOMERS_CHOOSE_US = [
  { icon: GraduationCap, title: "Professional Therapists", desc: "Trained in anatomy-correct technique across Russian and Indian massage styles." },
  { icon: Sparkles, title: "Luxury Atmosphere", desc: "A calm, well-maintained environment designed for genuine relaxation, away from market crowds." },
  { icon: Route, title: "Convenient Location", desc: "Positioned directly on the NH-48–Dhaula Kuan–Aerocity corridor, minutes from Karol Bagh by road." },
  { icon: Car, title: "Easy Accessibility", desc: "Reachable by private car, taxi, Uber, or Ola with parking available on-site." },
  { icon: Lock, title: "Privacy", desc: "Private rooms and a discreet, professional service culture throughout." },
  { icon: Leaf, title: "Relaxing Environment", desc: "Lighting, music, and pacing all designed to support a genuine reset, not a rushed transaction." },
  { icon: Clock, title: "Flexible Appointments", desc: "Open 24/7, making it workable around shopping trips, office hours, flights, or weekend plans." },
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
  { text: "Spent the whole afternoon at Ghaffar Market and my feet were done for. The drive out via NH-48 took about half an hour, and the reflexology session was exactly what I needed.", author: "Priya S.", location: "Ajmal Khan Road Shopper" },
  { text: "I work near Rajendra Place and booked a deep tissue massage after a long week of back-to-back meetings. Well worth the short drive down NH-48.", author: "Vikram N.", location: "Rajendra Place Professional" },
  { text: "Had a few hours before my train from New Delhi Railway Station and used the time for a Swedish massage. The route via Dhaula Kuan was quick and easy.", author: "Amit & Kavya", location: "Railway Traveller" },
];

const FAQS = [
  { q: "Is your spa located inside Karol Bagh?", a: "No. Our spa is based in Mahipalpur, directly on the NH-48–Dhaula Kuan–Aerocity corridor, which keeps travel time from Karol Bagh to around 20–30 minutes by road." },
  { q: "Why do people search for a 'spa in Karol Bagh' if you're in Mahipalpur?", a: "Karol Bagh is a dense commercial and shopping district without many premium spa options of its own, so residents, shoppers, and office-goers regularly travel a short distance via NH-48 to reach a full-service wellness centre like ours." },
  { q: "How far is Mahipalpur from Karol Bagh Metro Station?", a: "It's roughly a 25–30 minute drive via Pusa Road, Ring Road, and NH-48, depending on traffic." },
  { q: "Can I reach your spa by metro from Karol Bagh?", a: "The Blue Line runs through Karol Bagh, but the final stretch to our Mahipalpur location is best completed by taxi, Uber, or Ola." },
  { q: "Do you offer Russian Banya near Karol Bagh?", a: "Yes — our Russian Banya is available at our Mahipalpur centre, a short drive from Karol Bagh via NH-48 and Dhaula Kuan." },
  { q: "What massage types are available for Karol Bagh guests?", a: "Swedish, deep tissue, Thai, hot stone, aromatherapy, reflexology, and sports massage are all available, alongside Russian Banya and couples packages." },
  { q: "Is parking available for guests driving from Karol Bagh?", a: "Yes, parking is available directly at the premises, so there's no need to search for street parking after your drive in." },
  { q: "Are you open late for guests coming after a shopping trip on Ajmal Khan Road?", a: "Yes, we operate 24 hours a day, seven days a week, which works well for shoppers finishing late in Karol Bagh's markets." },
  { q: "Do you have couples spa packages for Karol Bagh residents?", a: "Yes, our couples package includes two therapists working in a shared private suite, ideal for partners travelling in together from Karol Bagh." },
  { q: "Is the drive from Connaught Place or Jhandewalan similar to Karol Bagh?", a: "Yes — both sit along a comparable route toward NH-48, so travel times to our Mahipalpur centre are broadly similar, typically 20–30 minutes." },
  { q: "What should I expect on my first visit if I'm coming from Karol Bagh?", a: "A short consultation about your goals and any pain points, followed by your chosen treatment in a private room, with time afterward to relax before heading back." },
  { q: "Do you treat travel fatigue for people arriving at New Delhi Railway Station near Karol Bagh?", a: "Yes, many guests combine a rail journey with a massage beforehand or afterward, since our location sits on the same NH-48 corridor used to reach the airport." },
  { q: "Is there a dress code for my visit?", a: "Comfortable, easily removable clothing is recommended. Robes and private changing areas are provided for every treatment." },
  { q: "How often should I get a massage if I work near Rajendra Place or Patel Nagar?", a: "For general recovery, every 2–3 weeks is a reasonable rhythm; for chronic desk-related pain, weekly or fortnightly sessions are more effective initially." },
  { q: "Do you have both male and female therapists?", a: "Yes, both are available, and preference can be mentioned when you book by phone or WhatsApp." },
  { q: "Can I book same-day if I'm travelling from Karol Bagh?", a: "Yes, same-day bookings are accepted based on availability — calling or messaging ahead helps us confirm your preferred slot and therapist." },
  { q: "Is the NH-48 route reliable for reaching you from Karol Bagh?", a: "Yes, it's a direct, well-connected route linking Central Delhi to Dhaula Kuan and the Aerocity/airport corridor where our centre is based." },
  { q: "Do you offer hygiene guarantees for every session?", a: "Every room, table, and set of linens is cleaned and refreshed between guests, with equipment sanitised after each use." },
  { q: "What's the benefit of visiting a spa outside Karol Bagh rather than a local option?", a: "A dedicated, larger wellness centre allows for more therapy variety, private couples suites, and Russian Banya — services that are harder to find within Karol Bagh's own commercial lanes." },
  { q: "How do I book from Karol Bagh — call or WhatsApp?", a: "Both work. Call +91 8929979542 for immediate booking, or message on WhatsApp to confirm timing and treatment before you set out." },
];

const IMAGE_ALTS = [
  "Spa in Karol Bagh area — Russian Spa Centre reception near NH-48",
  "Russian Banya steam room serving guests travelling from Karol Bagh",
  "Deep tissue massage session for Rajendra Place office professionals",
  "Swedish massage room at spa near Karol Bagh Metro Station",
  "Couples spa suite for guests from Karol Bagh and Connaught Place",
  "Hot stone therapy setup near the NH-48 spa corridor",
  "Aromatherapy oils used in massage sessions near Ajmal Khan Road",
  "Thai massage treatment room accessible from Patel Nagar and Karol Bagh",
  "Reflexology foot massage station for Ghaffar Market shoppers",
  "Sports massage recovery session for Karol Bagh residents",
  "Steam bath facility near the Dhaula Kuan–Aerocity corridor",
  "Sauna room at wellness centre serving Karol Bagh travellers",
  "Jacuzzi relaxation area near IGI Airport and Karol Bagh",
  "Private treatment suite near Jhandewalan",
  "Therapist consultation room near Tank Road",
  "Clean massage table setup for guests arriving from Karol Bagh",
  "Spa entrance and parking area near the NH-48 corridor",
  "Wellness lounge for professionals commuting from Rajendra Place",
  "Massage oils and towels prepared for Karol Bagh-bound guests",
  "Front desk booking area near Karol Bagh and Aerocity corridor",
];

const KEYWORDS = [
  "spa in karol bagh",
  "best spa in karol bagh",
  "luxury spa in karol bagh",
  "russian spa in karol bagh",
  "body massage in karol bagh",
  "full body massage karol bagh",
  "massage centre karol bagh",
  "spa near karol bagh metro",
  "spa near ajmal khan road",
  "spa near ghaffar market",
  "spa near rajendra place",
  "russian banya karol bagh",
];

function openWhatsApp() {
  const message =
    "Hello! I'm coming from Karol Bagh and want to book an appointment at your spa near NH-48 / Mahipalpur. Please share details and availability.";
  const encodedMessage = encodeURIComponent(message);
  window.open("https://wa.me/918929979542?text=" + encodedMessage, "_blank");
}

/* --------------------------------- COMPONENT --------------------------------- */

export default function SpaInKarolBagh() {
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
                name: "Russian Spa Centre — Serving Karol Bagh",
                image: "https://mahipalpurspaservicecentre.com/logo.png",
                telephone: "+91 8929979542",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
                  addressLocality: "New Delhi",
                  postalCode: "110037",
                  addressCountry: "IN",
                },
                url: "https://mahipalpurspaservicecentre.com/spa-in-karol-bagh/",
                openingHours: "Mo-Su 00:00-23:59",
                priceRange: "₹1800-₹7500",
                areaServed: [
                  { "@type": "Place", name: "Karol Bagh" },
                  { "@type": "Place", name: "Ajmal Khan Road" },
                  { "@type": "Place", name: "Rajendra Place" },
                  { "@type": "Place", name: "Patel Nagar" },
                  { "@type": "Place", name: "Jhandewalan" },
                  { "@type": "Place", name: "Aerocity" },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://mahipalpurspaservicecentre.com/" },
                  { "@type": "ListItem", position: 2, name: "Locations", item: "https://mahipalpurspaservicecentre.com/locations/" },
                  { "@type": "ListItem", position: 3, name: "Spa in Karol Bagh", item: "https://mahipalpurspaservicecentre.com/spa-in-karol-bagh/" },
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
            Serving Karol Bagh via NH-48
          </div>
          <h1>
            Best <em>Spa in Karol Bagh</em>
            <br />
            Near Ajmal Khan Road
          </h1>
          <p className={styles.heroText}>
            Russian Spa Centre is based in Mahipalpur, directly on the NH-48–Dhaula Kuan–Aerocity corridor —
            reachable from Karol Bagh in around 20–30 minutes by road. Enjoy authentic Russian Banya, full body
            massage, and luxury wellness therapies, open 24/7 with certified therapists.
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
            <strong>Please note:</strong> our spa is physically located in Mahipalpur, not inside Karol Bagh itself.
            We serve Karol Bagh residents, shoppers, and visitors because of the direct, convenient connectivity via
            NH-48, Dhaula Kuan, Aerocity, and the Airport corridor. We are not affiliated with, partnered with, or
            located at any Karol Bagh metro station, market, hotel, or government building.
          </p>
        </div>
      </section>

      {/* THERAPISTS */}
      <TherapistSection />

      {/* WHY CHOOSE US NEAR KAROL BAGH */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">
            Why Choose Our <em>Spa Near Karol Bagh</em>
          </h2>
          <p className={styles.sectionSub}>
            A short, direct drive from Karol Bagh along NH-48 brings you to a full-service luxury wellness centre
            built around privacy, comfort, and professional technique.
          </p>
        </div>
        <div className={styles.whyGrid}>
          {WHY_CHOOSE_KAROL_BAGH.map((item, i) => (
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

      {/* ABOUT KAROL BAGH */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.twoColumn}>
          <div className={styles.twoColumnText}>
            <div className="section-label">Local Guide</div>
            <h2 className="section-title">
              About <em>Karol Bagh</em>
            </h2>
            <div className="divider" />
            <p>
              Karol Bagh is one of Delhi&rsquo;s busiest and most established commercial and residential
              neighbourhoods, known for its dense mix of shopping streets, wholesale markets, and long-settled
              residential blocks. It has a distinct character shaped by decades as a trading hub — a place where
              generations of families have run businesses alongside a genuinely lived-in residential community.
            </p>
            <p>
              Ajmal Khan Road is the area&rsquo;s best-known shopping stretch, drawing steady footfall for clothing,
              footwear, and accessories, while Ghaffar Market has built its own reputation for electronics and
              consumer goods at competitive prices. Tank Road adds another dense commercial layer, particularly
              known for wholesale garment trade, making Karol Bagh a genuine shopping destination for visitors
              across Delhi NCR, not just local residents.
            </p>
            <p>
              Connectivity is one of Karol Bagh&rsquo;s biggest strengths. The Delhi Metro&rsquo;s Blue Line runs a
              station directly through the area, while Pusa Road and Rani Jhansi Road provide strong road links to
              Rajendra Place, Patel Nagar, and Jhandewalan. New Delhi Railway Station and Connaught Place are both a
              short drive away, and the broader road network connects onward to NH-48 and the airport corridor.
            </p>
            <p>
              On weekends, the area sees a steady flow of visitors browsing its markets, alongside residents running
              daily errands and office-goers from nearby business hubs like Rajendra Place. Karol Bagh&rsquo;s
              accessibility from Central Delhi, and its position along routes leading toward the airport, means many
              shoppers and professionals are already travelling this corridor regularly for other reasons.
            </p>
            <p>
              This is precisely why residents and visitors from Karol Bagh regularly search for nearby wellness
              services: the neighbourhood is dense, commercially busy, and well-connected, but a dedicated luxury
              spa with Russian Banya, couples suites, and a full range of massage therapies is something most guests
              currently travel a short distance for, along a corridor they already use for work, shopping, and
              travel.
            </p>
          </div>
          <div className={styles.miniCards}>
            {[
              { icon: ShoppingBag, title: "Shopping Destination", desc: "Ajmal Khan Road, Ghaffar Market, and Tank Road draw visitors from across Delhi" },
              { icon: TrainFront, title: "Metro Connectivity", desc: "Blue Line station directly serving Karol Bagh" },
              { icon: Landmark, title: "Business District", desc: "Close to Rajendra Place's commercial office towers" },
              { icon: Route, title: "Road Network", desc: "Pusa Road and Rani Jhansi Road link onward to NH-48 and the airport corridor" },
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
            Every treatment below is available at our Mahipalpur centre, minutes from Karol Bagh via NH-48.
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
            Karol Bagh is home to a large number of office-going professionals and business owners — here&rsquo;s
            how regular massage addresses the specific strain of desk-based and market-floor work.
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

      {/* WELLNESS GUIDE FOR SHOPPERS & TRAVELLERS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            For Shoppers &amp; Travellers
          </div>
          <h2 className="section-title">
            Wellness Guide for <em>Shoppers &amp; Travellers</em>
          </h2>
          <p className={styles.sectionSub}>
            Karol Bagh&rsquo;s markets and its proximity to New Delhi Railway Station mean many visitors are
            shoppers and travellers carrying real physical fatigue.
          </p>
        </div>
        <div className={styles.guideGrid}>
          {SHOPPER_TRAVELLER_GUIDE.map((item, i) => (
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
            Serving <em>Karol Bagh &amp; Surrounding Areas</em>
          </h2>
          <p className={styles.sectionSub}>Accessible from every part of Karol Bagh and its neighbouring localities:</p>
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
            How to <em>Reach Us</em> from Karol Bagh
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

      {/* WHY CUSTOMERS FROM KAROL BAGH CHOOSE US */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHeader}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Guest Confidence
          </div>
          <h2 className="section-title">
            Why Customers from <em>Karol Bagh Choose Us</em>
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
              <strong>Booking:</strong> Call or WhatsApp ahead, especially if you&rsquo;re travelling from Karol
              Bagh during peak traffic hours, so we can plan your slot accurately.
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
              period before you head back — including the drive back toward Karol Bagh.
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
              <p>Fits around shopping trips, office hours, flights, or weekend plans.</p>
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
              What Our <em>Karol Bagh Guests</em> Say
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
            Spa <em>Prices</em> for Karol Bagh Guests
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
            Questions About <em>Spa in Karol Bagh</em>
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
        <h2>Ready to Relax — Minutes from Karol Bagh?</h2>
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
            Visit Us — <em>Minutes from Karol Bagh</em>
          </h2>
          <p className={styles.mapAddress}>
            <MapPin size={15} />
            Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi — 110037
          </p>
          <p className={styles.mapNote}>
            <Ban size={13} /> Not located inside Karol Bagh — accessible via NH-48, Dhaula Kuan &amp; Aerocity.
          </p>
          <div className={styles.mapFrame}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.703123456789!2d77.1234567!3d28.5432123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f0b2d8e3e5f%3A0x7b4e2d8f6a9c3e2d!2sDefence%20Enclave%2C%20Mahipalpur%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Russian Spa Centre - Serving Karol Bagh via Mahipalpur Location"
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
