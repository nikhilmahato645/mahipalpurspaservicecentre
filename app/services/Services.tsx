// "use client";

// import { useState } from "react";
// import {
//   Flame,
//   WavesLadder,
//   Dumbbell,
//   Flower2,
//   Hand,
//   Activity,
//   CircleDot,
//   Footprints,
//   Waypoints,
//   HeartHandshake,
//   Feather,
//   Baby,
//   Clock,
//   GraduationCap,
//   Sofa,
//   Plane,
//   Check,
//   ChevronDown,
//   PhoneCall,
//   MessageCircle,
//   MapPin,
//   DoorOpen,
//   ClipboardCheck,
//   Sparkles,
//   Bed,
//   CalendarCheck,
//   Moon,
//   HeartPulse,
//   PlaneLanding,
//   Zap,
//   type LucideIcon,
// } from "lucide-react";
// import TherapistSection from "../components/TherapistSection";
// import styles from "./Services.module.css";

// type Service = {
//   id: string;
//   icon: LucideIcon;
//   name: string;
//   tagline: string;
//   price: string;
//   duration: string;
//   description: string;
//   includes: string[];
//   benefits: string[];
// };

// const SERVICES: Service[] = [
//   {
//     id: "banya",
//     icon: Flame,
//     name: "Russian Banya Experience",
//     tagline: "The Heart of Russian Wellness",
//     price: "₹2,500",
//     duration: "60 minutes",
//     description:
//       "Immerse yourself in the most authentic Russian Banya experience in Delhi NCR. Our traditional steam bath uses imported birch-leaf Venik for a therapeutic ritual perfected over centuries. The heat opens your pores, the herbal steam cleanses your lungs, and the Venik treatment stimulates circulation like nothing else. Includes herbal tea and private room access. This is the signature Russian spa in Mahipalpur that discerning clients travel from across Delhi NCR to experience.",
//     includes: ["Traditional Venik Treatment", "Steam Bath Session", "Herbal Tea", "Private Room", "Shower Facilities"],
//     benefits: ["Detoxifies body deeply", "Improves blood circulation", "Boosts immune system", "Relieves muscle soreness", "Reduces stress & anxiety"],
//   },
//   {
//     id: "swedish",
//     icon: WavesLadder,
//     name: "Swedish Massage",
//     tagline: "Classic Relaxation, Timeless Results",
//     price: "₹2,800",
//     duration: "60 minutes",
//     description:
//       "The world's most beloved massage technique, performed by our certified therapists using five fundamental strokes — effleurage, petrissage, friction, tapotement, and vibration. Scientifically proven to lower cortisol, boost immunity, and improve sleep. Perfect as a regular wellness ritual or a first introduction to therapeutic massage. As one of the most requested body massage services in Mahipalpur, our Swedish massage sets the standard for excellence.",
//     includes: ["Full Body Treatment", "Premium Massage Oils", "Shoulder & Neck Focus", "Complimentary Refreshments", "Hot Towels"],
//     benefits: ["Reduces stress hormones", "Improves sleep quality", "Relieves muscle tension", "Enhances blood flow", "Boosts mood & energy"],
//   },
//   {
//     id: "deep-tissue",
//     icon: Dumbbell,
//     name: "Deep Tissue Therapy",
//     tagline: "Targeted Relief for Chronic Tension",
//     price: "₹3,500",
//     duration: "90 minutes",
//     description:
//       "For those with persistent tension, chronic pain, or demanding physical lifestyles. Our therapists work systematically through muscle layers to release deeply held tension, break up adhesions, and restore mobility. Combines deep pressure, trigger point therapy, and myofascial release for lasting therapeutic results. This deep tissue massage is ideal for athletes, office workers, and anyone dealing with chronic back or neck pain.",
//     includes: ["Therapeutic Deep Massage", "Trigger Point Release", "Hot Towel Treatment", "Pain Relief Focus", "Post-Session Stretch Guidance"],
//     benefits: ["Breaks down scar tissue", "Relieves chronic pain", "Improves range of motion", "Reduces inflammation", "Accelerates injury recovery"],
//   },
//   {
//     id: "aromatherapy",
//     icon: Flower2,
//     name: "Aromatherapy Massage",
//     tagline: "Healing Through Scent and Touch",
//     price: "₹3,000",
//     duration: "75 minutes",
//     description:
//       "A luxurious fusion of gentle massage and the therapeutic power of 100% pure essential oils. Our therapists customize every oil blend to your needs — lavender for relaxation, eucalyptus for respiratory health, peppermint for energy, rosemary for mental clarity. The oils penetrate your skin while the aromas stimulate your limbic system for complete mind-body healing. This aroma oil massage is perfect for those seeking both physical relief and emotional balance.",
//     includes: ["Customized Oil Blend Consultation", "Full Body Massage", "Premium Organic Oils", "Aromatherapy Diffuser Room", "Take-Home Oil Sample"],
//     benefits: ["Reduces anxiety & depression", "Improves respiratory health", "Boosts mental clarity", "Enhances mood naturally", "Promotes deep relaxation"],
//   },
//   {
//     id: "thai",
//     icon: Hand,
//     name: "Thai Massage",
//     tagline: "Ancient Energy Work for the Modern Body",
//     price: "₹3,200",
//     duration: "75 minutes",
//     description:
//       "Performed on a comfortable floor mat in loose comfortable clothing, Thai massage is an active therapy combining acupressure, assisted yoga postures, and rhythmic pressure along the body's Sen energy lines. Improves flexibility dramatically, releases blocked energy, and leaves you feeling both deeply relaxed and vibrantly energized. Our Thai massage therapists are trained in traditional techniques passed down through generations.",
//     includes: ["No Oil Required", "Performed Fully Clothed", "Assisted Yoga Stretches", "Acupressure Work", "Sen Line Energy Therapy"],
//     benefits: ["Increases flexibility dramatically", "Relieves joint pain", "Improves posture", "Boosts energy levels", "Balances body energy"],
//   },
//   {
//     id: "sports",
//     icon: Activity,
//     name: "Sports Massage",
//     tagline: "Performance Enhancement & Recovery",
//     price: "₹3,800",
//     duration: "60 minutes",
//     description:
//       "Designed for athletes and active individuals at all levels. Our sports massage therapists understand sport-specific movement patterns and target overused muscle groups with precision. Combines deep tissue work, stretching, and trigger point therapy to enhance performance, prevent injuries, and accelerate recovery between training sessions. Whether you're a marathon runner, gym enthusiast, or weekend warrior, this sports massage will optimize your performance.",
//     includes: ["Sports-Specific Assessment", "Pre/Post Event Options", "Trigger Point Therapy", "Assisted Stretching", "Recovery Guidance"],
//     benefits: ["Prevents sports injuries", "Accelerates muscle recovery", "Improves athletic performance", "Reduces muscle soreness", "Increases flexibility"],
//   },
//   {
//     id: "hot-stone",
//     icon: CircleDot,
//     name: "Hot Stone Therapy",
//     tagline: "Deep Warmth, Deeper Relaxation",
//     price: "₹3,500",
//     duration: "75 minutes",
//     description:
//       "An ancient healing practice using smooth, heated basalt stones placed at key energy points on your body. The penetrating warmth allows muscles to release tension more deeply than conventional massage. Stones are also used as massage tools to work out knots and tightness. The combination of heat and skilled touch creates one of the most profoundly relaxing experiences available. This hot stone massage is a favorite among clients seeking ultimate stress relief.",
//     includes: ["Heated Basalt Stones", "Full Body Stone Massage", "Hot Stone Acupressure", "Aromatherapy Enhancement", "Extended Relaxation Time"],
//     benefits: ["Deep muscle relaxation", "Improved blood circulation", "Reduced chronic pain", "Stress hormone reduction", "Enhanced sleep quality"],
//   },
//   {
//     id: "reflexology",
//     icon: Footprints,
//     name: "Reflexology",
//     tagline: "Whole-Body Healing Through Your Feet",
//     price: "₹2,200",
//     duration: "45 minutes",
//     description:
//       "Ancient healing science that treats your entire body through precisely applied pressure to reflex points on your feet, hands, and ears. Opens energy pathways, stimulates your body's natural healing ability, and is remarkably effective for headaches, digestive issues, hormonal balance, and chronic pain. Begins with a warm essential oil foot bath. This reflexology treatment is a must-try for anyone experiencing stress-related health issues.",
//     includes: ["Warm Essential Oil Foot Bath", "Full Reflexology Session", "Foot & Lower Leg Massage", "Energy Pathway Assessment", "Take-Home Pressure Point Guide"],
//     benefits: ["Reduces headaches & migraines", "Improves digestive function", "Balances hormones naturally", "Relieves sinus pressure", "Promotes overall wellness"],
//   },
//   {
//     id: "shiatsu",
//     icon: Waypoints,
//     name: "Shiatsu Massage",
//     tagline: "Japanese Energy Balancing",
//     price: "₹3,500",
//     duration: "60 minutes",
//     description:
//       "The Japanese art of finger pressure therapy, working along your body's meridian lines to balance the flow of Qi (life energy). Unlike Western massage, Shiatsu addresses your entire being — physical, emotional, and spiritual. Performed clothed on a comfortable mat, this deeply meditative treatment promotes profound calm, mental clarity, and lasting balance. Experience authentic Shiatsu massage from practitioners trained in Japan.",
//     includes: ["Energy Assessment", "Meridian Line Therapy", "Performed Fully Clothed", "Acupressure Points", "Post-Treatment Wellness Guidance"],
//     benefits: ["Balances body energy", "Reduces anxiety & stress", "Improves circulation", "Relieves muscle tension", "Promotes spiritual wellness"],
//   },
//   {
//     id: "couples",
//     icon: HeartHandshake,
//     name: "Couples Spa Package",
//     tagline: "A Shared Wellness Journey",
//     price: "₹7,500",
//     duration: "120 minutes",
//     description:
//       "The ultimate romantic wellness experience for two. Begin together in our authentic Russian Banya, then receive synchronized full-body massages from two expert therapists in our beautifully designed couples suite. Choose Swedish, aromatherapy, or hot stone for each partner. Includes complimentary champagne and chocolate-covered strawberries in your private lounge. This couple's spa package is perfect for anniversaries, honeymoons, or a memorable date night.",
//     includes: ["Russian Banya Access", "Synchronized Dual Massage", "Private Couples Room", "Champagne & Chocolates", "Sauna & Steam Room Access", "Complimentary Refreshments"],
//     benefits: ["Shared wellness experience", "Strengthens emotional connection", "Celebrates special occasions", "Ultimate relaxation together", "Creates lasting memories"],
//   },
//   {
//     id: "balinese",
//     icon: Feather,
//     name: "Balinese Massage",
//     tagline: "Island Paradise Meets Therapeutic Touch",
//     price: "₹3,200",
//     duration: "75 minutes",
//     description:
//       "Experience the healing traditions of Indonesia with our authentic Balinese massage. This unique modality combines gentle stretching, acupressure, reflexology, and aromatherapy with medium-pressure massage techniques. Using a blend of exotic essential oils including frangipani, ylang-ylang, and sandalwood, this treatment transports you to a tropical paradise while addressing real therapeutic needs. Perfect for those seeking both relaxation and therapeutic benefit.",
//     includes: ["Exotic Oil Blend", "Traditional Balinese Techniques", "Gentle Stretching", "Acupressure Points", "Aromatherapy Experience"],
//     benefits: ["Deep relaxation response", "Improved skin health", "Reduced muscle tension", "Enhanced mood & wellbeing", "Stress relief"],
//   },
//   {
//     id: "prenatal",
//     icon: Baby,
//     name: "Prenatal Massage",
//     tagline: "Nurturing Care for Expecting Mothers",
//     price: "₹3,200",
//     duration: "60 minutes",
//     description:
//       "Specially designed for the unique needs of pregnancy. Our certified prenatal massage therapists use side-lying positioning with supportive cushions to ensure your comfort and safety. Gentle, specialized techniques relieve pregnancy-related back pain, reduce swelling in hands and feet, ease sciatic pain, and promote better sleep. All therapists are trained in pregnancy-safe pressure points and techniques. A wonderful gift for any expecting mother.",
//     includes: ["Side-Lying Positioning", "Pregnancy-Safe Techniques", "Lower Back Focus", "Leg & Foot Relief", "Birth Preparation Guidance"],
//     benefits: ["Reduces pregnancy back pain", "Decreases swelling (edema)", "Improves sleep quality", "Reduces stress & anxiety", "Prepares body for birth"],
//   },
// ];

// const SERVICE_HIGHLIGHTS = [
//   { icon: Clock, title: "24/7 Availability", description: "We're open 365 days a year, including all holidays. Perfect for late-night relaxation or early morning rejuvenation." },
//   { icon: GraduationCap, title: "Certified Therapists", description: "All our massage therapists are internationally certified, insured, and have minimum 5 years of professional experience." },
//   { icon: Sofa, title: "Private Luxury Rooms", description: "Each treatment room features soft lighting, premium linens, temperature control, and en-suite facilities." },
//   { icon: Plane, title: "Airport Location", description: "Located just 10 minutes from IGI Airport, perfect for travelers seeking relaxation during layovers." },
// ];

// // New: goal-based guide mapping common needs to specific services already listed above.
// const CHOOSE_GUIDE = [
//   {
//     icon: Moon,
//     goal: "Stress Relief & Relaxation",
//     text: "If you simply need to unwind and switch off, start with a lighter-touch, full-body treatment designed purely for relaxation.",
//     recommend: ["swedish", "aromatherapy", "hot-stone"],
//   },
//   {
//     icon: HeartPulse,
//     goal: "Chronic Pain or Muscle Tension",
//     text: "Persistent knots, stiff shoulders, or lower-back pain respond best to firmer, targeted pressure that works through muscle layers.",
//     recommend: ["deep-tissue", "shiatsu", "sports"],
//   },
//   {
//     icon: PlaneLanding,
//     goal: "Post-Flight Recovery",
//     text: "Just landed at IGI Airport? Rehydrate your body and ease travel stiffness with a warming, circulation-boosting treatment.",
//     recommend: ["banya", "reflexology", "swedish"],
//   },
//   {
//     icon: Zap,
//     goal: "Flexibility & Energy",
//     text: "For stiffness, poor posture, or a need for an energy reset, active stretch-based therapy works better than passive massage.",
//     recommend: ["thai"],
//   },
//   {
//     icon: HeartHandshake,
//     goal: "A Shared Experience",
//     text: "Celebrating an anniversary, honeymoon, or simply want a wellness outing together — book a synchronized session for two.",
//     recommend: ["couples"],
//   },
//   {
//     icon: Baby,
//     goal: "Pregnancy-Safe Care",
//     text: "Expecting mothers need specialized positioning and pregnancy-safe pressure points — never a generic deep-tissue treatment.",
//     recommend: ["prenatal"],
//   },
// ];

// const VISIT_STEPS = [
//   { icon: DoorOpen, title: "Arrive Anytime", desc: "Walk in 24/7 or call ahead — we welcome guests any hour, any day, including holidays." },
//   { icon: ClipboardCheck, title: "Brief Consultation", desc: "Tell us your goals, pressure preference, and any concerns so we can match you to the right therapist and treatment." },
//   { icon: Sparkles, title: "Your Treatment", desc: "Relax in a private, temperature-controlled room for your full, uninterrupted session — no rushing, ever." },
//   { icon: Bed, title: "Rest & Refresh", desc: "Use our shower and locker facilities, and enjoy complimentary tea before you head out." },
//   { icon: CalendarCheck, title: "Book Your Return", desc: "First-time visitors get 15% off — many guests rebook on the spot for their next session." },
// ];

// const FAQS = [
//   { q: "What types of massage do you offer?", a: "We offer 12+ specialized massage treatments including Russian Banya, Swedish, Deep Tissue, Thai, Aromatherapy, Hot Stone, Reflexology, Shiatsu, Sports Massage, Balinese, Prenatal Massage, and Couples Packages. Each treatment is performed by certified therapists in private rooms." },
//   { q: "Do I need to book an appointment?", a: "While walk-ins are welcome 24/7, we recommend advance booking especially for couples packages and weekend visits. Call +91 8929979542 or use our online booking form." },
//   { q: "Are your therapists certified?", a: "Yes! All our massage therapists are internationally certified, insured, and have minimum 5 years of professional experience. Many are trained in Russia, Thailand, Bali, and Japan." },
//   { q: "What's the difference between Swedish and Deep Tissue?", a: "Swedish massage uses lighter pressure for overall relaxation, while Deep Tissue targets specific problem areas with firmer pressure to reach deeper muscle layers. Both are excellent — your therapist will recommend based on your needs." },
//   { q: "Is the Russian Banya authentic?", a: "Absolutely. Our Russian Banya uses traditional Venik (birch/oak leaves) treatments, precise humidity control (40-60%), and temperatures up to 90°C followed by cold plunges — exactly as practiced in Russia." },
//   { q: "Do you offer couples massage?", a: "Yes! Our Couples Spa Package includes synchronized massages in a private couples suite with Russian Banya access, champagne, and chocolates. Perfect for anniversaries or date nights." },
//   { q: "What should I wear?", a: "Disposable undergarments are provided. For Thai and Shiatsu massage, loose comfortable clothing is provided. All treatments prioritize your comfort and modesty." },
//   { q: "How close are you to the airport?", a: "We're just 10 minutes from IGI Airport (Terminal 3). Many travelers book us during layovers. Free pickup available for longer bookings." },
//   { q: "Do you have male and female therapists?", a: "Yes, we have both male and female certified therapists. You can request your preference when booking." },
//   { q: "What are your hygiene standards?", a: "Hospital-grade disinfection, single-use linens, sterilized equipment, and mandatory therapist health checks. All treatment rooms are sanitized between every guest." },
// ];

// const KEYWORDS = [
//   "Russian Body", "Massage Centres", "Beauty Spas For Men", "Russian Body Massage Centres",
//   "24 Hours Beauty Spas Massage", "Centres For Men", "24 Hours Body Massage Centres",
//   "Russian spa in mahipalpur", "Russian spa in aerocity", "Russian spa Mahipalpur",
//   "Body Massage in Dwarka", "Full Body Massage", "Aromatherapy Massage", "Hot Stone Massage",
//   "Deep Tissue Massage", "Swedish Massage", "Thai Massage", "Reflexology", "Shiatsu Massage",
//   "Sports Massage", "Couples Spa Package", "Balinese Massage", "Prenatal Massage",
// ];

// const WHATSAPP_MESSAGE =
//   "Hello! I'd like to book a spa treatment. Could you share availability and help me choose a service?";
// const WHATSAPP_URL = `https://wa.me/918929979542?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// // Extracts the numeric minutes from strings like "60 minutes" for ISO 8601 duration.
// function toIsoDuration(duration: string): string {
//   const minutes = duration.match(/\d+/)?.[0] ?? "60";
//   return `PT${minutes}M`;
// }

// // Extracts a plain numeric price from strings like "₹2,500" for structured data.
// function toNumericPrice(price: string): string {
//   return price.replace(/[^\d]/g, "");
// }

// const SERVICES_JSON_LD = {
//   "@context": "https://schema.org",
//   "@type": "ItemList",
//   name: "Spa Services | Russian Spa Centre Mahipalpur",
//   itemListElement: SERVICES.map((s, i) => ({
//     "@type": "ListItem",
//     position: i + 1,
//     item: {
//       "@type": "Service",
//       serviceType: s.name,
//       name: s.name,
//       description: s.description,
//       provider: {
//         "@type": "LocalBusiness",
//         name: "Russian Spa Centre Mahipalpur",
//         telephone: "+91 8929979542",
//         address: {
//           "@type": "PostalAddress",
//           streetAddress: "Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur",
//           addressLocality: "New Delhi",
//           postalCode: "110037",
//           addressCountry: "IN",
//         },
//       },
//       areaServed: "New Delhi NCR",
//       offers: {
//         "@type": "Offer",
//         price: toNumericPrice(s.price),
//         priceCurrency: "INR",
//         availability: "https://schema.org/InStock",
//       },
//       // duration of the appointment, expressed as ISO 8601
//       duration: toIsoDuration(s.duration),
//     },
//   })),
// };

// export default function Services() {
//   const [openFaq, setOpenFaq] = useState<number | null>(0);

//   return (
//     <>
//       {/* Structured data for search engines & AI crawlers */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_JSON_LD) }}
//       />

//       {/* HERO */}
//       <section className={styles.hero}>
//         <div className={styles.heroImage} />
//         <div className={styles.heroScrim} />
//         <div className={styles.heroContent}>
//           <div className={styles.heroBadge}>Our Treatments</div>
//           <h1>
//             Signature <em>Services</em>
//             <br />
//             &amp; Treatments
//           </h1>
//           <p className={styles.heroText}>
//             From authentic Russian Banya to specialized therapeutic massage — every treatment is customized to your
//             body, performed by internationally certified therapists in private, impeccably clean rooms. As the
//             premier Russian spa in Mahipalpur and Aerocity, we offer Delhi NCR&apos;s most comprehensive range of
//             wellness services, open 24/7 near IGI Airport.
//           </p>
//           <div className={styles.heroActions}>
//             <a href="tel:+918929979542" className="btn-gold">
//               <PhoneCall size={15} /> Call Now: +91 8929979542
//             </a>
//             <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
//               <MessageCircle size={15} /> Book via WhatsApp
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* THERAPISTS */}
//       <TherapistSection />

//       {/* SERVICE HIGHLIGHTS */}
//       <section className={styles.section} style={{ paddingBottom: 0 }}>
//         <div className={styles.grid4}>
//           {SERVICE_HIGHLIGHTS.map((h, i) => (
//             <div key={i} className={styles.iconCard}>
//               <div className={styles.iconChip}>
//                 <h.icon size={22} strokeWidth={1.8} />
//               </div>
//               <h3>{h.title}</h3>
//               <p>{h.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW TO CHOOSE — new SEO content */}
//       <section className={styles.section}>
//         <div className={styles.sectionCenterHead}>
//           <div className="section-label" style={{ justifyContent: "center" }}>
//             Not Sure Where to Start?
//           </div>
//           <h2 className="section-title">
//             How to Choose the <em>Right Massage</em> For You
//           </h2>
//           <p>
//             With 12+ specialized treatments on offer, here&apos;s a quick guide matching common wellness goals to the
//             services above.
//           </p>
//         </div>
//         <div className={styles.guideGrid}>
//           {CHOOSE_GUIDE.map((g, i) => (
//             <div key={i} className={styles.guideCard}>
//               <div className={styles.iconChip}>
//                 <g.icon size={20} strokeWidth={1.8} />
//               </div>
//               <h3>{g.goal}</h3>
//               <p>{g.text}</p>
//               <div className={styles.guideRecs}>
//                 {g.recommend.map((id) => {
//                   const svc = SERVICES.find((s) => s.id === id);
//                   if (!svc) return null;
//                   return (
//                     <a key={id} href={`#${id}`} className={styles.guideRecLink}>
//                       <svc.icon size={13} strokeWidth={2} /> {svc.name}
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHAT HAPPENS DURING YOUR VISIT — new SEO content */}
//       <section className={styles.section} style={{ background: "var(--dark-2)", maxWidth: "none" }}>
//         <div className={styles.section} style={{ padding: 0 }}>
//           <div className={styles.sectionCenterHead}>
//             <div className="section-label" style={{ justifyContent: "center" }}>
//               Your Visit
//             </div>
//             <h2 className="section-title">
//               What Happens During <em>Your Visit</em>
//             </h2>
//             <p>From arrival to check-out, here&apos;s exactly what to expect when you visit Russian Spa Centre.</p>
//           </div>
//           <div className={styles.processGrid}>
//             {VISIT_STEPS.map((step, i) => (
//               <div key={i} className={styles.processStep}>
//                 <div className={styles.processNum}>
//                   <step.icon size={24} strokeWidth={1.8} />
//                 </div>
//                 <h4>{step.title}</h4>
//                 <p>{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* DETAILED SERVICES LIST */}
//       <section className={styles.section}>
//         <div className={styles.sectionCenterHead}>
//           <div className="section-label" style={{ justifyContent: "center" }}>
//             Full Treatment Menu
//           </div>
//           <h2 className="section-title">
//             Explore Every <em>Service</em> in Detail
//           </h2>
//         </div>
//         <div className={styles.servicesList}>
//           {SERVICES.map((s) => (
//             <div key={s.id} id={s.id} className={styles.serviceDetailCard}>
//               <div>
//                 <div className={styles.svcIconChip}>
//                   <s.icon size={26} strokeWidth={1.8} />
//                 </div>
//                 <div className={styles.svcTagline}>{s.tagline}</div>
//                 <h3 className={styles.svcName}>{s.name}</h3>
//                 <p className={styles.svcDesc}>{s.description}</p>
//                 <div className={styles.svcPriceRow}>
//                   <span className={styles.svcPrice}>{s.price}</span>
//                   <span className={styles.svcDuration}>
//                     <Clock size={13} /> {s.duration}
//                   </span>
//                   <a href="tel:+918929979542" className={`btn-gold ${styles.svcBookBtn}`}>
//                     Book This
//                   </a>
//                 </div>
//               </div>
//               <div>
//                 <div className={styles.includesLabel}>What&apos;s Included</div>
//                 <div className={styles.includesList}>
//                   {s.includes.map((inc, i) => (
//                     <div key={i} className={styles.includesItem}>
//                       <Check size={14} strokeWidth={2.5} /> {inc}
//                     </div>
//                   ))}
//                 </div>
//                 <div className={styles.benefitsList}>
//                   {s.benefits.map((benefit, i) => (
//                     <span key={i} className={styles.benefitBadge}>
//                       {benefit}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ALL PACKAGES INCLUDE */}
//         <div className={styles.packageNote}>
//           <div className={styles.packageNoteIcon}>
//             <Sparkles size={22} strokeWidth={1.8} />
//           </div>
//           <div>
//             <h3>All Packages Include</h3>
//             <div className={styles.packageNoteGrid}>
//               <div className={styles.packageNoteItem}>
//                 <Check size={14} strokeWidth={2.5} /> Complimentary tea &amp; refreshments
//               </div>
//               <div className={styles.packageNoteItem}>
//                 <Check size={14} strokeWidth={2.5} /> Locker &amp; shower facilities
//               </div>
//               <div className={styles.packageNoteItem}>
//                 <Check size={14} strokeWidth={2.5} /> No rush — full treatment time guaranteed
//               </div>
//               <div className={styles.packageNoteItem}>
//                 <Check size={14} strokeWidth={2.5} /> No hidden charges
//               </div>
//               <div className={styles.packageNoteItem}>
//                 <Check size={14} strokeWidth={2.5} /> Free parking available
//               </div>
//               <div className={styles.packageNoteItem}>
//                 <Check size={14} strokeWidth={2.5} /> 15% off for first-time visitors
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className={styles.section} style={{ paddingTop: 0 }}>
//         <div className={styles.sectionCenterHead}>
//           <div className="section-label" style={{ justifyContent: "center" }}>
//             FAQ
//           </div>
//           <h2 className="section-title">
//             Frequently Asked <em>Questions</em>
//           </h2>
//           <p>Everything you need to know about our spa services in Mahipalpur &amp; Aerocity.</p>
//         </div>
//         <div className={styles.faqInner}>
//           <div className={styles.faqList}>
//             {FAQS.map((faq, i) => {
//               const isOpen = openFaq === i;
//               return (
//                 <div key={i} className={styles.faqItem}>
//                   <button
//                     type="button"
//                     className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ""}`}
//                     onClick={() => setOpenFaq(isOpen ? null : i)}
//                     aria-expanded={isOpen}
//                   >
//                     {faq.q}
//                     <ChevronDown size={18} strokeWidth={2} />
//                   </button>
//                   <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
//                     <p>{faq.a}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className={styles.ctaSection}>
//         <div className="section-label" style={{ justifyContent: "center", color: "#D4B3F5" }}>
//           Book Your Experience
//         </div>
//         <h2>Ready to Experience True Wellness?</h2>
//         <p>Call us anytime — we are open 24 hours, 7 days a week, including all holidays. First-time visitors receive 15% off any service.</p>
//         <div className={styles.ctaActions}>
//           <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
//             <MessageCircle size={20} /> Book on WhatsApp — Instant Confirmation
//           </a>
//         </div>
//         <p className={styles.ctaCallLine}>
//           <PhoneCall size={14} /> Or call us directly: <a href="tel:+918929979542">+91 8929979542</a>
//         </p>
//         <p className={styles.ctaAddress}>
//           <MapPin size={14} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037
//         </p>
//       </section>

//       {/* KEYWORD CLOUD FOR SEO */}
//       <div className={styles.section} style={{ paddingTop: 0 }}>
//         <div className={styles.keywordCloud}>
//           {KEYWORDS.map((kw, i) => (
//             <span key={i} className={styles.keywordPill}>
//               {kw}
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useState } from "react";
import {
  Flame,
  WavesLadder,
  Dumbbell,
  Flower2,
  Hand,
  Activity,
  CircleDot,
  Footprints,
  Waypoints,
  HeartHandshake,
  Feather,
  Baby,
  Clock,
  GraduationCap,
  Sofa,
  Plane,
  Check,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  MapPin,
  DoorOpen,
  ClipboardCheck,
  Sparkles,
  Bed,
  CalendarCheck,
  Moon,
  HeartPulse,
  PlaneLanding,
  Zap,
  type LucideIcon,
} from "lucide-react";
import TherapistSection from "../components/TherapistSection";
import styles from "./Services.module.css";

type Service = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  benefits: string[];
};

const SERVICES: Service[] = [
  {
    id: "banya",
    icon: Flame,
    name: "Russian Banya Experience",
    tagline: "The Heart of Russian Wellness",
    price: "₹2,500",
    duration: "60 minutes",
    description:
      "Immerse yourself in the most authentic Russian Banya experience in Delhi NCR. Our traditional steam bath uses imported birch-leaf Venik for a therapeutic ritual perfected over centuries. The heat opens your pores, the herbal steam cleanses your lungs, and the Venik treatment stimulates circulation like nothing else. Includes herbal tea and private room access. This is the signature Russian spa in Mahipalpur that discerning clients travel from across Delhi NCR to experience.",
    includes: ["Traditional Venik Treatment", "Steam Bath Session", "Herbal Tea", "Private Room", "Shower Facilities"],
    benefits: ["Detoxifies body deeply", "Improves blood circulation", "Boosts immune system", "Relieves muscle soreness", "Reduces stress & anxiety"],
  },
  {
    id: "swedish",
    icon: WavesLadder,
    name: "Swedish Massage",
    tagline: "Classic Relaxation, Timeless Results",
    price: "₹2,800",
    duration: "60 minutes",
    description:
      "The world's most beloved massage technique, performed by our certified therapists using five fundamental strokes — effleurage, petrissage, friction, tapotement, and vibration. Scientifically proven to lower cortisol, boost immunity, and improve sleep. Perfect as a regular wellness ritual or a first introduction to therapeutic massage. As one of the most requested body massage services in Mahipalpur, our Swedish massage sets the standard for excellence.",
    includes: ["Full Body Treatment", "Premium Massage Oils", "Shoulder & Neck Focus", "Complimentary Refreshments", "Hot Towels"],
    benefits: ["Reduces stress hormones", "Improves sleep quality", "Relieves muscle tension", "Enhances blood flow", "Boosts mood & energy"],
  },
  {
    id: "deep-tissue",
    icon: Dumbbell,
    name: "Deep Tissue Therapy",
    tagline: "Targeted Relief for Chronic Tension",
    price: "₹3,500",
    duration: "90 minutes",
    description:
      "For those with persistent tension, chronic pain, or demanding physical lifestyles. Our therapists work systematically through muscle layers to release deeply held tension, break up adhesions, and restore mobility. Combines deep pressure, trigger point therapy, and myofascial release for lasting therapeutic results. This deep tissue massage is ideal for athletes, office workers, and anyone dealing with chronic back or neck pain.",
    includes: ["Therapeutic Deep Massage", "Trigger Point Release", "Hot Towel Treatment", "Pain Relief Focus", "Post-Session Stretch Guidance"],
    benefits: ["Breaks down scar tissue", "Relieves chronic pain", "Improves range of motion", "Reduces inflammation", "Accelerates injury recovery"],
  },
  {
    id: "aromatherapy",
    icon: Flower2,
    name: "Aromatherapy Massage",
    tagline: "Healing Through Scent and Touch",
    price: "₹3,000",
    duration: "75 minutes",
    description:
      "A luxurious fusion of gentle massage and the therapeutic power of 100% pure essential oils. Our therapists customize every oil blend to your needs — lavender for relaxation, eucalyptus for respiratory health, peppermint for energy, rosemary for mental clarity. The oils penetrate your skin while the aromas stimulate your limbic system for complete mind-body healing. This aroma oil massage is perfect for those seeking both physical relief and emotional balance.",
    includes: ["Customized Oil Blend Consultation", "Full Body Massage", "Premium Organic Oils", "Aromatherapy Diffuser Room", "Take-Home Oil Sample"],
    benefits: ["Reduces anxiety & depression", "Improves respiratory health", "Boosts mental clarity", "Enhances mood naturally", "Promotes deep relaxation"],
  },
  {
    id: "thai",
    icon: Hand,
    name: "Thai Massage",
    tagline: "Ancient Energy Work for the Modern Body",
    price: "₹3,200",
    duration: "75 minutes",
    description:
      "Performed on a comfortable floor mat in loose comfortable clothing, Thai massage is an active therapy combining acupressure, assisted yoga postures, and rhythmic pressure along the body's Sen energy lines. Improves flexibility dramatically, releases blocked energy, and leaves you feeling both deeply relaxed and vibrantly energized. Our Thai massage therapists are trained in traditional techniques passed down through generations.",
    includes: ["No Oil Required", "Performed Fully Clothed", "Assisted Yoga Stretches", "Acupressure Work", "Sen Line Energy Therapy"],
    benefits: ["Increases flexibility dramatically", "Relieves joint pain", "Improves posture", "Boosts energy levels", "Balances body energy"],
  },
  {
    id: "sports",
    icon: Activity,
    name: "Sports Massage",
    tagline: "Performance Enhancement & Recovery",
    price: "₹3,800",
    duration: "60 minutes",
    description:
      "Designed for athletes and active individuals at all levels. Our sports massage therapists understand sport-specific movement patterns and target overused muscle groups with precision. Combines deep tissue work, stretching, and trigger point therapy to enhance performance, prevent injuries, and accelerate recovery between training sessions. Whether you're a marathon runner, gym enthusiast, or weekend warrior, this sports massage will optimize your performance.",
    includes: ["Sports-Specific Assessment", "Pre/Post Event Options", "Trigger Point Therapy", "Assisted Stretching", "Recovery Guidance"],
    benefits: ["Prevents sports injuries", "Accelerates muscle recovery", "Improves athletic performance", "Reduces muscle soreness", "Increases flexibility"],
  },
  {
    id: "hot-stone",
    icon: CircleDot,
    name: "Hot Stone Therapy",
    tagline: "Deep Warmth, Deeper Relaxation",
    price: "₹3,500",
    duration: "75 minutes",
    description:
      "An ancient healing practice using smooth, heated basalt stones placed at key energy points on your body. The penetrating warmth allows muscles to release tension more deeply than conventional massage. Stones are also used as massage tools to work out knots and tightness. The combination of heat and skilled touch creates one of the most profoundly relaxing experiences available. This hot stone massage is a favorite among clients seeking ultimate stress relief.",
    includes: ["Heated Basalt Stones", "Full Body Stone Massage", "Hot Stone Acupressure", "Aromatherapy Enhancement", "Extended Relaxation Time"],
    benefits: ["Deep muscle relaxation", "Improved blood circulation", "Reduced chronic pain", "Stress hormone reduction", "Enhanced sleep quality"],
  },
  {
    id: "reflexology",
    icon: Footprints,
    name: "Reflexology",
    tagline: "Whole-Body Healing Through Your Feet",
    price: "₹2,200",
    duration: "45 minutes",
    description:
      "Ancient healing science that treats your entire body through precisely applied pressure to reflex points on your feet, hands, and ears. Opens energy pathways, stimulates your body's natural healing ability, and is remarkably effective for headaches, digestive issues, hormonal balance, and chronic pain. Begins with a warm essential oil foot bath. This reflexology treatment is a must-try for anyone experiencing stress-related health issues.",
    includes: ["Warm Essential Oil Foot Bath", "Full Reflexology Session", "Foot & Lower Leg Massage", "Energy Pathway Assessment", "Take-Home Pressure Point Guide"],
    benefits: ["Reduces headaches & migraines", "Improves digestive function", "Balances hormones naturally", "Relieves sinus pressure", "Promotes overall wellness"],
  },
  {
    id: "shiatsu",
    icon: Waypoints,
    name: "Shiatsu Massage",
    tagline: "Japanese Energy Balancing",
    price: "₹3,500",
    duration: "60 minutes",
    description:
      "The Japanese art of finger pressure therapy, working along your body's meridian lines to balance the flow of Qi (life energy). Unlike Western massage, Shiatsu addresses your entire being — physical, emotional, and spiritual. Performed clothed on a comfortable mat, this deeply meditative treatment promotes profound calm, mental clarity, and lasting balance. Experience authentic Shiatsu massage from practitioners trained in Japan.",
    includes: ["Energy Assessment", "Meridian Line Therapy", "Performed Fully Clothed", "Acupressure Points", "Post-Treatment Wellness Guidance"],
    benefits: ["Balances body energy", "Reduces anxiety & stress", "Improves circulation", "Relieves muscle tension", "Promotes spiritual wellness"],
  },
  {
    id: "couples",
    icon: HeartHandshake,
    name: "Couples Spa Package",
    tagline: "A Shared Wellness Journey",
    price: "₹7,500",
    duration: "120 minutes",
    description:
      "The ultimate romantic wellness experience for two. Begin together in our authentic Russian Banya, then receive synchronized full-body massages from two expert therapists in our beautifully designed couples suite. Choose Swedish, aromatherapy, or hot stone for each partner. Includes complimentary champagne and chocolate-covered strawberries in your private lounge. This couple's spa package is perfect for anniversaries, honeymoons, or a memorable date night.",
    includes: ["Russian Banya Access", "Synchronized Dual Massage", "Private Couples Room", "Champagne & Chocolates", "Sauna & Steam Room Access", "Complimentary Refreshments"],
    benefits: ["Shared wellness experience", "Strengthens emotional connection", "Celebrates special occasions", "Ultimate relaxation together", "Creates lasting memories"],
  },
  {
    id: "balinese",
    icon: Feather,
    name: "Balinese Massage",
    tagline: "Island Paradise Meets Therapeutic Touch",
    price: "₹3,200",
    duration: "75 minutes",
    description:
      "Experience the healing traditions of Indonesia with our authentic Balinese massage. This unique modality combines gentle stretching, acupressure, reflexology, and aromatherapy with medium-pressure massage techniques. Using a blend of exotic essential oils including frangipani, ylang-ylang, and sandalwood, this treatment transports you to a tropical paradise while addressing real therapeutic needs. Perfect for those seeking both relaxation and therapeutic benefit.",
    includes: ["Exotic Oil Blend", "Traditional Balinese Techniques", "Gentle Stretching", "Acupressure Points", "Aromatherapy Experience"],
    benefits: ["Deep relaxation response", "Improved skin health", "Reduced muscle tension", "Enhanced mood & wellbeing", "Stress relief"],
  },
  {
    id: "prenatal",
    icon: Baby,
    name: "Prenatal Massage",
    tagline: "Nurturing Care for Expecting Mothers",
    price: "₹3,200",
    duration: "60 minutes",
    description:
      "Specially designed for the unique needs of pregnancy. Our certified prenatal massage therapists use side-lying positioning with supportive cushions to ensure your comfort and safety. Gentle, specialized techniques relieve pregnancy-related back pain, reduce swelling in hands and feet, ease sciatic pain, and promote better sleep. All therapists are trained in pregnancy-safe pressure points and techniques. A wonderful gift for any expecting mother.",
    includes: ["Side-Lying Positioning", "Pregnancy-Safe Techniques", "Lower Back Focus", "Leg & Foot Relief", "Birth Preparation Guidance"],
    benefits: ["Reduces pregnancy back pain", "Decreases swelling (edema)", "Improves sleep quality", "Reduces stress & anxiety", "Prepares body for birth"],
  },
];

const SERVICE_HIGHLIGHTS = [
  { icon: Clock, title: "24/7 Availability", description: "We're open 365 days a year, including all holidays. Perfect for late-night relaxation or early morning rejuvenation." },
  { icon: GraduationCap, title: "Certified Therapists", description: "All our massage therapists are internationally certified, insured, and have minimum 5 years of professional experience." },
  { icon: Sofa, title: "Private Luxury Rooms", description: "Each treatment room features soft lighting, premium linens, temperature control, and en-suite facilities." },
  { icon: Plane, title: "Airport Location", description: "Located just 10 minutes from IGI Airport, perfect for travelers seeking relaxation during layovers." },
];

const CHOOSE_GUIDE = [
  {
    icon: Moon,
    goal: "Stress Relief & Relaxation",
    text: "If you simply need to unwind and switch off, start with a lighter-touch, full-body treatment designed purely for relaxation.",
    recommend: ["swedish", "aromatherapy", "hot-stone"],
  },
  {
    icon: HeartPulse,
    goal: "Chronic Pain or Muscle Tension",
    text: "Persistent knots, stiff shoulders, or lower-back pain respond best to firmer, targeted pressure that works through muscle layers.",
    recommend: ["deep-tissue", "shiatsu", "sports"],
  },
  {
    icon: PlaneLanding,
    goal: "Post-Flight Recovery",
    text: "Just landed at IGI Airport? Rehydrate your body and ease travel stiffness with a warming, circulation-boosting treatment.",
    recommend: ["banya", "reflexology", "swedish"],
  },
  {
    icon: Zap,
    goal: "Flexibility & Energy",
    text: "For stiffness, poor posture, or a need for an energy reset, active stretch-based therapy works better than passive massage.",
    recommend: ["thai"],
  },
  {
    icon: HeartHandshake,
    goal: "A Shared Experience",
    text: "Celebrating an anniversary, honeymoon, or simply want a wellness outing together — book a synchronized session for two.",
    recommend: ["couples"],
  },
  {
    icon: Baby,
    goal: "Pregnancy-Safe Care",
    text: "Expecting mothers need specialized positioning and pregnancy-safe pressure points — never a generic deep-tissue treatment.",
    recommend: ["prenatal"],
  },
];

const VISIT_STEPS = [
  { icon: DoorOpen, title: "Arrive Anytime", desc: "Walk in 24/7 or call ahead — we welcome guests any hour, any day, including holidays." },
  { icon: ClipboardCheck, title: "Brief Consultation", desc: "Tell us your goals, pressure preference, and any concerns so we can match you to the right therapist and treatment." },
  { icon: Sparkles, title: "Your Treatment", desc: "Relax in a private, temperature-controlled room for your full, uninterrupted session — no rushing, ever." },
  { icon: Bed, title: "Rest & Refresh", desc: "Use our shower and locker facilities, and enjoy complimentary tea before you head out." },
  { icon: CalendarCheck, title: "Book Your Return", desc: "First-time visitors get 15% off — many guests rebook on the spot for their next session." },
];

const FAQS = [
  { q: "What types of massage do you offer?", a: "We offer 12+ specialized massage treatments including Russian Banya, Swedish, Deep Tissue, Thai, Aromatherapy, Hot Stone, Reflexology, Shiatsu, Sports Massage, Balinese, Prenatal Massage, and Couples Packages. Each treatment is performed by certified therapists in private rooms." },
  { q: "Do I need to book an appointment?", a: "While walk-ins are welcome 24/7, we recommend advance booking especially for couples packages and weekend visits. Call +91 8929979542 or use our online booking form." },
  { q: "Are your therapists certified?", a: "Yes! All our massage therapists are internationally certified, insured, and have minimum 5 years of professional experience. Many are trained in Russia, Thailand, Bali, and Japan." },
  { q: "What's the difference between Swedish and Deep Tissue?", a: "Swedish massage uses lighter pressure for overall relaxation, while Deep Tissue targets specific problem areas with firmer pressure to reach deeper muscle layers. Both are excellent — your therapist will recommend based on your needs." },
  { q: "Is the Russian Banya authentic?", a: "Absolutely. Our Russian Banya uses traditional Venik (birch/oak leaves) treatments, precise humidity control (40-60%), and temperatures up to 90°C followed by cold plunges — exactly as practiced in Russia." },
  { q: "Do you offer couples massage?", a: "Yes! Our Couples Spa Package includes synchronized massages in a private couples suite with Russian Banya access, champagne, and chocolates. Perfect for anniversaries or date nights." },
  { q: "What should I wear?", a: "Disposable undergarments are provided. For Thai and Shiatsu massage, loose comfortable clothing is provided. All treatments prioritize your comfort and modesty." },
  { q: "How close are you to the airport?", a: "We're just 10 minutes from IGI Airport (Terminal 3). Many travelers book us during layovers. Free pickup available for longer bookings." },
  { q: "Do you have male and female therapists?", a: "Yes, we have both male and female certified therapists. You can request your preference when booking." },
  { q: "What are your hygiene standards?", a: "Hospital-grade disinfection, single-use linens, sterilized equipment, and mandatory therapist health checks. All treatment rooms are sanitized between every guest." },
];

const KEYWORDS = [
  "Russian Body", "Massage Centres", "Beauty Spas For Men", "Russian Body Massage Centres",
  "24 Hours Beauty Spas Massage", "Centres For Men", "24 Hours Body Massage Centres",
  "Russian spa in mahipalpur", "Russian spa in aerocity", "Russian spa Mahipalpur",
  "Body Massage in Dwarka", "Full Body Massage", "Aromatherapy Massage", "Hot Stone Massage",
  "Deep Tissue Massage", "Swedish Massage", "Thai Massage", "Reflexology", "Shiatsu Massage",
  "Sports Massage", "Couples Spa Package", "Balinese Massage", "Prenatal Massage",
];

const WHATSAPP_MESSAGE =
  "Hello! I'd like to book a spa treatment. Could you share availability and help me choose a service?";
const WHATSAPP_URL = `https://wa.me/918929979542?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank");
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Our Treatments</div>
          <h1>
            Signature <em>Services</em>
            <br />
            &amp; Treatments
          </h1>
          <p className={styles.heroText}>
            From authentic Russian Banya to specialized therapeutic massage — every treatment is customized to your
            body, performed by internationally certified therapists in private, impeccably clean rooms. As the
            premier Russian spa in Mahipalpur and Aerocity, we offer Delhi NCR&apos;s most comprehensive range of
            wellness services, open 24/7 near IGI Airport.
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

      {/* THERAPISTS */}
      <TherapistSection />

      {/* SERVICE HIGHLIGHTS */}
      <section className={styles.section} style={{ paddingBottom: 0 }}>
        <div className={styles.grid4}>
          {SERVICE_HIGHLIGHTS.map((h, i) => (
            <div key={i} className={styles.iconCard}>
              <div className={styles.iconChip}>
                <h.icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{h.title}</h3>
              <p>{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Not Sure Where to Start?
          </div>
          <h2 className="section-title">
            How to Choose the <em>Right Massage</em> For You
          </h2>
          <p>
            With 12+ specialized treatments on offer, here&apos;s a quick guide matching common wellness goals to the
            services above.
          </p>
        </div>
        <div className={styles.guideGrid}>
          {CHOOSE_GUIDE.map((g, i) => (
            <div key={i} className={styles.guideCard}>
              <div className={styles.iconChip}>
                <g.icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{g.goal}</h3>
              <p>{g.text}</p>
              <div className={styles.guideRecs}>
                {g.recommend.map((id) => {
                  const svc = SERVICES.find((s) => s.id === id);
                  if (!svc) return null;
                  return (
                    <a key={id} href={`#${id}`} className={styles.guideRecLink}>
                      <svc.icon size={13} strokeWidth={2} /> {svc.name}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT HAPPENS DURING YOUR VISIT */}
      <section className={styles.section} style={{ background: "var(--dark-2)", maxWidth: "none" }}>
        <div className={styles.section} style={{ padding: 0 }}>
          <div className={styles.sectionCenterHead}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              Your Visit
            </div>
            <h2 className="section-title">
              What Happens During <em>Your Visit</em>
            </h2>
            <p>From arrival to check-out, here&apos;s exactly what to expect when you visit Russian Spa Centre.</p>
          </div>
          <div className={styles.processGrid}>
            {VISIT_STEPS.map((step, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.processNum}>
                  <step.icon size={24} strokeWidth={1.8} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className={styles.section}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Full Treatment Menu
          </div>
          <h2 className="section-title">
            Explore Every <em>Service</em> in Detail
          </h2>
        </div>
        <div className={styles.servicesList}>
          {SERVICES.map((s) => (
            <div key={s.id} id={s.id} className={styles.serviceDetailCard}>
              <div>
                <div className={styles.svcIconChip}>
                  <s.icon size={26} strokeWidth={1.8} />
                </div>
                <div className={styles.svcTagline}>{s.tagline}</div>
                <h3 className={styles.svcName}>{s.name}</h3>
                <p className={styles.svcDesc}>{s.description}</p>
                <div className={styles.svcPriceRow}>
                  <span className={styles.svcPrice}>{s.price}</span>
                  <span className={styles.svcDuration}>
                    <Clock size={13} /> {s.duration}
                  </span>
                  <a href="tel:+918929979542" className={`btn-gold ${styles.svcBookBtn}`}>
                    Book This
                  </a>
                </div>
              </div>
              <div>
                <div className={styles.includesLabel}>What&apos;s Included</div>
                <div className={styles.includesList}>
                  {s.includes.map((inc, i) => (
                    <div key={i} className={styles.includesItem}>
                      <Check size={14} strokeWidth={2.5} /> {inc}
                    </div>
                  ))}
                </div>
                <div className={styles.benefitsList}>
                  {s.benefits.map((benefit, i) => (
                    <span key={i} className={styles.benefitBadge}>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ALL PACKAGES INCLUDE */}
        <div className={styles.packageNote}>
          <div className={styles.packageNoteIcon}>
            <Sparkles size={22} strokeWidth={1.8} />
          </div>
          <div>
            <h3>All Packages Include</h3>
            <div className={styles.packageNoteGrid}>
              <div className={styles.packageNoteItem}>
                <Check size={14} strokeWidth={2.5} /> Complimentary tea &amp; refreshments
              </div>
              <div className={styles.packageNoteItem}>
                <Check size={14} strokeWidth={2.5} /> Locker &amp; shower facilities
              </div>
              <div className={styles.packageNoteItem}>
                <Check size={14} strokeWidth={2.5} /> No rush — full treatment time guaranteed
              </div>
              <div className={styles.packageNoteItem}>
                <Check size={14} strokeWidth={2.5} /> No hidden charges
              </div>
              <div className={styles.packageNoteItem}>
                <Check size={14} strokeWidth={2.5} /> Free parking available
              </div>
              <div className={styles.packageNoteItem}>
                <Check size={14} strokeWidth={2.5} /> 15% off for first-time visitors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionCenterHead}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            FAQ
          </div>
          <h2 className="section-title">
            Frequently Asked <em>Questions</em>
          </h2>
          <p>Everything you need to know about our spa services in Mahipalpur &amp; Aerocity.</p>
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
        <h2>Ready to Experience True Wellness?</h2>
        <p>Call us anytime — we are open 24 hours, 7 days a week, including all holidays. First-time visitors receive 15% off any service.</p>
        <div className={styles.ctaActions}>
          <button type="button" className={styles.whatsappBtn} onClick={openWhatsApp}>
            <MessageCircle size={20} /> Book on WhatsApp — Instant Confirmation
          </button>
        </div>
        <p className={styles.ctaCallLine}>
          <PhoneCall size={14} /> Or call us directly: <a href="tel:+918929979542">+91 8929979542</a>
        </p>
        <p className={styles.ctaAddress}>
          <MapPin size={14} /> Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037
        </p>
      </section>

      {/* KEYWORD CLOUD FOR SEO */}
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