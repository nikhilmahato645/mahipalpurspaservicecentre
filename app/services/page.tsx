// app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spa Services | Russian Banya, Massage & Wellness Treatments | Russian Spa Centre Mahipalpur",
  description:
    "Explore our full range of spa services: Russian Banya, Swedish, Deep Tissue, Thai, Aromatherapy, Reflexology, Shiatsu & Couples Packages. Certified therapists. Open 24/7. Call +91 8929979542",
  keywords:
    "Russian Body, Massage Centres, Beauty Spas For Men, Russian Body Massage Centres, Russian Body Massage Centres-Z, Beauty Spas For Men-A, 24 Hours Beauty Spas Massage, Centres For Men, 24 Hours Beauty Spas-A, Massage Centres For Men-Z, 24 Hours Body Massage Centres, Beauty Spas, 24 Hours Body Massage Centres-Z, Beauty Spas-A, Russian spa in mahipalpur, Russian spa in aerocity, Russian spa Mahipalpur, Russian Banya, Swedish Massage, Deep Tissue Massage, Thai Massage, Aromatherapy, Reflexology, Shiatsu Massage, Sports Massage, Couples Spa Package, Hot Stone Massage, Body Massage in Mahipalpur, Full Body Massage, Spa Services Delhi NCR",
  openGraph: {
    title: "Spa Services | Russian Banya & Massage Treatments | Russian Spa Centre",
    description: "Authentic Russian Banya, Swedish, Deep Tissue, Thai, Aromatherapy & Couples Packages. Open 24/7 near Delhi Airport.",
    url: "https://mahipalpurspaservicecentre.com/services",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/services-og.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Services | Russian Banya & Massage Treatments",
    description: "Premium spa services in Mahipalpur. Open 24/7. Book now!",
    images: ["https://mahipalpurspaservicecentre.com/services-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/services/",
  },
};

const services = [
  {
    id: "banya",
    icon: "🔥",
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
    icon: "🌊",
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
    icon: "💪",
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
    icon: "🌸",
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
    icon: "🧘",
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
    icon: "🏃",
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
    icon: "🪨",
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
    icon: "👣",
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
    icon: "☯️",
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
    icon: "💑",
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
    icon: "🌺",
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
    icon: "🤰",
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

// Additional SEO content sections
const serviceHighlights = [
  { title: "24/7 Availability", description: "We're open 365 days a year, including all holidays. Perfect for late-night relaxation or early morning rejuvenation." },
  { title: "Certified Therapists", description: "All our massage therapists are internationally certified, insured, and have minimum 5 years of professional experience." },
  { title: "Private Luxury Rooms", description: "Each treatment room features soft lighting, premium linens, temperature control, and en-suite facilities." },
  { title: "Airport Location", description: "Located just 10 minutes from IGI Airport, perfect for travelers seeking relaxation during layovers." },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        .page-hero {
          padding: 140px 60px 80px;
          background: var(--dark-2);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          position: relative; overflow: hidden;
        }
        .page-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .page-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; }
        .page-hero h1 { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 300; color: var(--cream); line-height: 1.15; }
        .page-hero h1 em { font-style: italic; color: var(--gold); }
        .page-hero p { font-size: 0.9rem; color: var(--muted); max-width: 560px; margin-top: 20px; line-height: 1.9; }

        .services-list { max-width: 1200px; margin: 0 auto; padding: 80px 60px; display: flex; flex-direction: column; gap: 2px; }
        .svc-item {
          background: var(--dark-3); border: 1px solid rgba(201,168,76,0.08);
          padding: 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
          transition: border-color 0.3s;
        }
        .svc-item:hover { border-color: rgba(201,168,76,0.2); }
        .svc-item:nth-child(even) { background: var(--dark-2); }
        .svc-left {}
        .svc-icon { font-size: 2.5rem; margin-bottom: 20px; }
        .svc-tagline { font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
        .svc-name { font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 300; color: var(--cream); margin-bottom: 20px; line-height: 1.2; }
        .svc-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.9; margin-bottom: 32px; }
        .svc-price-row { display: flex; align-items: center; gap: 24px; padding-top: 24px; border-top: 1px solid rgba(201,168,76,0.15); flex-wrap: wrap; }
        .svc-price { font-family: var(--font-display); font-size: 2rem; color: var(--gold); font-weight: 300; }
        .svc-duration { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }
        .svc-right {}
        .includes-label { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 16px; }
        .includes-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; }
        .includes-item { display: flex; align-items: center; gap: 12px; font-size: 0.82rem; color: var(--cream); opacity: 0.8; }
        .includes-item::before { content: '✓'; color: var(--gold); font-size: 0.75rem; flex-shrink: 0; }
        .benefits-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .benefit-badge { background: rgba(201,168,76,0.1); padding: 6px 14px; border-radius: 20px; font-size: 0.7rem; color: var(--gold); }

        .highlights-grid { max-width: 1200px; margin: 0 auto; padding: 60px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        .highlight-card { text-align: center; padding: 32px 24px; background: rgba(255,255,255,0.02); border: 1px solid rgba(201,168,76,0.1); border-radius: 8px; }
        .highlight-icon { font-size: 2rem; margin-bottom: 16px; }
        .highlight-card h3 { font-family: var(--font-display); font-size: 1.2rem; color: var(--gold); margin-bottom: 12px; }
        .highlight-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.6; }

        .book-strip { background: var(--gold); padding: 80px 60px; text-align: center; }
        .book-strip h2 { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 300; color: var(--dark); margin-bottom: 8px; }
        .book-strip p { font-size: 0.85rem; color: rgba(10,8,6,0.7); margin-bottom: 32px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .book-strip .btn-dark { background: var(--dark); color: var(--gold); padding: 14px 36px; font-size: 0.75rem; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 500; display: inline-block; transition: opacity 0.2s; border: none; cursor: pointer; }
        .book-strip .btn-dark:hover { opacity: 0.85; }

        .faq-section { max-width: 800px; margin: 0 auto; padding: 60px; }
        .faq-item { background: rgba(255,255,255,0.02); margin-bottom: 12px; padding: 20px; border-radius: 4px; }
        .faq-question { font-weight: 500; color: var(--gold); cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; font-size: 0.85rem; color: var(--muted); margin-top: 8px; }
        .faq-item.open .faq-answer { max-height: 300px; }

        .keyword-cloud { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 40px 20px; max-width: 1200px; margin: 0 auto; }
        .keyword-cloud span { font-size: 0.65rem; color: var(--muted); background: rgba(255,255,255,0.05); padding: 4px 12px; border-radius: 20px; }

        @media (max-width: 900px) {
          .svc-item { grid-template-columns: 1fr; gap: 32px; padding: 36px 28px; }
          .services-list, .page-hero { padding-left: 24px; padding-right: 24px; }
          .book-strip { padding: 60px 24px; }
          .highlights-grid { grid-template-columns: 1fr; padding: 40px 24px; gap: 20px; }
          .faq-section { padding: 40px 24px; }
        }
      `}</style>

      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label">Our Treatments</div>
          <h1>Signature <em>Services</em><br />& Treatments</h1>
          <p>From authentic Russian Banya to specialized therapeutic massage — every treatment is customized to your body, performed by internationally certified therapists in private, impeccably clean rooms. As the premier Russian spa in Mahipalpur and Aerocity, we offer Delhi NCR's most comprehensive range of wellness services, open 24/7 near IGI Airport.</p>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="highlights-grid">
        {serviceHighlights.map((h, i) => (
          <div key={i} className="highlight-card">
            <div className="highlight-icon">{i === 0 ? "🕐" : i === 1 ? "🎓" : i === 2 ? "🛋️" : "✈️"}</div>
            <h3>{h.title}</h3>
            <p>{h.description}</p>
          </div>
        ))}
      </div>

      {/* Services List */}
      <div className="services-list">
        {services.map((s) => (
          <div key={s.id} id={s.id} className="svc-item">
            <div className="svc-left">
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-tagline">{s.tagline}</div>
              <h2 className="svc-name">{s.name}</h2>
              <p className="svc-desc">{s.description}</p>
              <div className="svc-price-row">
                <span className="svc-price">{s.price}</span>
                <span className="svc-duration">{s.duration}</span>
                <a href="tel:+918929979542" className="btn-gold" style={{ marginLeft: 'auto', padding: '10px 24px', fontSize: '0.7rem' }}>Book This</a>
              </div>
            </div>
            <div className="svc-right">
              <div className="includes-label">What's Included</div>
              <div className="includes-list">
                {s.includes.map((inc, i) => (
                  <div key={i} className="includes-item">{inc}</div>
                ))}
              </div>
              <div className="benefits-list">
                {s.benefits.map((benefit, i) => (
                  <span key={i} className="benefit-badge">{benefit}</span>
                ))}
              </div>
              <div style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)', padding: '20px 24px', marginTop: '24px' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>All Packages Include</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: '1.8' }}>
                  ✓ Complimentary tea & refreshments &nbsp;·&nbsp; ✓ Locker & shower facilities<br />
                  ✓ No rush — full treatment time guaranteed &nbsp;·&nbsp; ✓ No hidden charges<br />
                  ✓ Free parking available &nbsp;·&nbsp; ✓ 15% off for first-time visitors
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Frequently Asked <em>Questions</em></h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--muted)' }}>Everything you need to know about our spa services in Mahipalpur & Aerocity</p>
        
        {[
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
        ].map((faq, idx) => (
          <div key={idx} className="faq-item">
            <div className="faq-question">{faq.q} <span style={{ fontSize: '1.2rem' }}>+</span></div>
            <div className="faq-answer">{faq.a}</div>
          </div>
        ))}
      </div>

      {/* Keyword Cloud for SEO */}
      <div className="keyword-cloud">
        <span>Russian Body</span><span>Massage Centres</span><span>Beauty Spas For Men</span>
        <span>Russian Body Massage Centres</span><span>24 Hours Beauty Spas Massage</span>
        <span>Centres For Men</span><span>24 Hours Body Massage Centres</span>
        <span>Russian spa in mahipalpur</span><span>Russian spa in aerocity</span>
        <span>Russian spa Mahipalpur</span><span>Body Massage in Dwarka</span>
        <span>Full Body Massage</span><span>Aromatherapy Massage</span><span>Hot Stone Massage</span>
        <span>Deep Tissue Massage</span><span>Swedish Massage</span><span>Thai Massage</span>
        <span>Reflexology</span><span>Shiatsu Massage</span><span>Sports Massage</span>
        <span>Couples Spa Package</span><span>Balinese Massage</span><span>Prenatal Massage</span>
      </div>

      {/* CTA Section */}
      <div className="book-strip">
        <h2>Ready to Experience True Wellness?</h2>
        <p>Call us anytime — we are open 24 hours, 7 days a week, including all holidays. First-time visitors receive 15% off any service.</p>
        <a href="tel:+918929979542" className="btn-dark">📞 +91 8929979542 — Call & Book Now</a>
        <p style={{ marginTop: '20px', fontSize: '0.75rem', color: 'rgba(10,8,6,0.6)' }}>📍 Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037</p>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
              const faqItem = question.parentElement;
              faqItem.classList.toggle('open');
            });
          });
        `
      }} />
    </>
  );
}