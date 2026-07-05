// const THERAPISTS = [
//   {
//     img: "/home_images/girl_russian/russiangirl1.jpg",
//     name: "Natasha",
//     tag: "Russian Banya",
//     years: "8 Years · Certified",
//     desc: "Natasha is our lead Banya specialist, trained in authentic steam therapy and birch venik technique. Guests from Russia confirm her ritual is correct — right temperature, right technique, nothing staged.",
//     price: "₹3,500",
//     duration: "90 min",
//   },
//   {
//     img: "/home_images/girl_indian/indiangirl1.webp",
//     name: "Priya",
//     tag: "Swedish Massage",
//     years: "6 Years · Certified",
//     desc: "Priya's long, flowing strokes are built for complete relaxation. A favourite among first-time guests and regulars who want a calm, unhurried full-body session.",
//     price: "₹2,800",
//     duration: "60 min",
//   },
//   {
//     img: "/home_images/girl_russian/russiangirl2.jpg",
//     name: "Elena",
//     tag: "Aromatherapy",
//     years: "5 Years · Certified",
//     desc: "Elena selects custom essential oil blends for your specific concern — stress, sleep, muscle tension. She consults before every session to get the blend exactly right for you.",
//     price: "₹3,200",
//     duration: "75 min",
//   },
//   {
//     img: "/home_images/girl_indian/indiangirl2.jpg",
//     name: "Ananya",
//     tag: "Deep Tissue",
//     years: "7 Years · Certified",
//     desc: "Ananya works firm, targeted pressure into chronic tension — stiff shoulders, lower back pain, sports recovery. Guests with desk-job pain book her repeatedly.",
//     price: "₹3,500",
//     duration: "90 min",
//   },
//   {
//     img: "/home_images/girl_russian/russiangirl3.jpg",
//     name: "Irina",
//     tag: "Russian Banya",
//     years: "9 Years · Certified",
//     desc: "Irina brings nine years in Banya practice and deep knowledge of heat sequencing — when to raise steam, when to cool, how to read the guest's body. Her sessions feel intuitive, not mechanical.",
//     price: "₹3,500",
//     duration: "60 min",
//   },
//   {
//     img: "/home_images/girl_indian/indiangirl3.jpg",
//     name: "Kavya",
//     tag: "Thai Massage",
//     years: "4 Years · Certified",
//     desc: "Kavya uses acupressure along energy lines, no oils, just skilled hands. Guests leave noticeably lighter and more awake, not drowsy.",
//     price: "₹3,200",
//     duration: "75 min",
//   },
//   {
//     img: "/home_images/girl_russian/russiangirl4.jpg",
//     name: "Daria",
//     tag: "Hot Stone",
//     years: "4 Years · Certified",
//     desc: "Daria trained in St. Petersburg and specialises in mood-based hot stone therapy. Heated basalt stones at 50–55°C penetrate muscle fibre faster than hands alone — ideal for deep stiffness.",
//     price: "₹3,800",
//     duration: "75 min",
//   },
//   {
//     img: "/home_images/girl_indian/indiangirl4.jpg",
//     name: "Meera",
//     tag: "Couples Package",
//     years: "6 Years · Certified",
//     desc: "Meera leads our couples sessions — two therapists, synchronised timing, a private room with Banya access. Book 24 hours ahead for guaranteed availability.",
//     price: "₹7,500",
//     duration: "120 min",
//   },
// ];

// export default function TherapistSection() {
//   return (
//     <section className="ther-sec">
//       <style>{`
//         .ther-sec { padding: 90px 60px; max-width: 1280px; margin: 0 auto; }
//         .ther-head { text-align: center; max-width: 640px; margin: 0 auto 56px; }
//         .ther-head .section-label { justify-content: center; }
//         .ther-head p { font-size: 0.9rem; color: var(--muted); margin-top: 14px; line-height: 1.85; }
//         .ther-grid {
//           display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px;
//         }
//         .ther-card {
//           background: #fff; border: 1px solid var(--gold-pale); border-radius: 18px;
//           overflow: hidden; box-shadow: 0 2px 14px rgba(124,77,188,0.06);
//           transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
//           display: flex; flex-direction: column;
//         }
//         .ther-card:hover { box-shadow: 0 12px 32px rgba(124,77,188,0.14); transform: translateY(-4px); border-color: rgba(124,77,188,0.3); }
//         .ther-photo { position: relative; aspect-ratio: 3/3.6; overflow: hidden; }
//         .ther-photo img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
//         .ther-card:hover .ther-photo img { transform: scale(1.05); }
//         .ther-tag {
//           position: absolute; top: 12px; left: 12px;
//           background: var(--gold); color: #fff;
//           font-size: 0.6rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
//           padding: 5px 11px; border-radius: 100px;
//         }
//         .ther-price-badge {
//           position: absolute; top: 12px; right: 12px;
//           background: rgba(255,255,255,0.92); color: var(--cream);
//           font-size: 0.72rem; font-weight: 700;
//           padding: 5px 11px; border-radius: 100px;
//         }
//         .ther-body { padding: 18px 18px 20px; flex: 1; display: flex; flex-direction: column; }
//         .ther-name-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px; }
//         .ther-name-row h3 { font-family: var(--font-display); font-size: 1.25rem; font-weight: 600; color: var(--cream); }
//         .ther-years { font-size: 0.62rem; color: var(--gold); background: var(--gold-pale); padding: 3px 9px; border-radius: 100px; white-space: nowrap; }
//         .ther-desc { font-size: 0.78rem; color: var(--muted); line-height: 1.65; margin-bottom: 14px; flex: 1; }
//         .ther-price-row { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 14px; }
//         .ther-amt { font-family: var(--font-display); font-size: 1.35rem; color: var(--gold); font-weight: 600; }
//         .ther-dur { font-size: 0.65rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
//         .ther-actions { display: flex; gap: 8px; }
//         .ther-btn {
//           flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
//           padding: 10px 8px; border-radius: 10px;
//           font-size: 0.74rem; font-weight: 600;
//           transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
//         }
//         .ther-btn img { width: 15px; height: 15px; }
//         .ther-btn-call { background: var(--gold); color: #fff; }
//         .ther-btn-call:hover { background: #5E348F; color: #fff; transform: translateY(-1px); }
//         .ther-btn-wa { background: #25D366; color: #fff; }
//         .ther-btn-wa:hover { background: #1EBE57; color: #fff; transform: translateY(-1px); }

//         @media (max-width: 1100px) {
//           .ther-grid { grid-template-columns: repeat(3, 1fr); }
//         }
//         @media (max-width: 767px) {
//           .ther-sec { padding: 64px 24px; }
//           .ther-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
//           .ther-name-row h3 { font-size: 1.05rem; }
//         }
//         @media (max-width: 480px) {
//           .ther-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <div className="ther-head">
//         <div className="section-label">Meet Our Therapists</div>
//         <h2 className="section-title">Certified <em>Hands</em> You Can Trust</h2>
//         <p>Trained in authentic Russian Banya culture and European spa technique. Available 24/7 at Russian Spa Centre, Mahipalpur.</p>
//       </div>

//       <div className="ther-grid">
//         {THERAPISTS.map((t, i) => (
//           <div key={i} className="ther-card">
//             <div className="ther-photo">
//               <img src={t.img} alt={`${t.name} — ${t.tag} therapist at Russian Spa Centre Mahipalpur`} loading="lazy" decoding="async" width={320} height={384} />
//               <span className="ther-tag">{t.tag}</span>
//               <span className="ther-price-badge">{t.price}</span>
//             </div>
//             <div className="ther-body">
//               <div className="ther-name-row">
//                 <h3>{t.name}</h3>
//                 <span className="ther-years">{t.years}</span>
//               </div>
//               <p className="ther-desc">{t.desc}</p>
//               <div className="ther-price-row">
//                 <span className="ther-amt">{t.price}</span>
//                 <span className="ther-dur">{t.duration}</span>
//               </div>
//               <div className="ther-actions">
//                 <a href="tel:+918929979542" className="ther-btn ther-btn-call">
//                   <img src="/call_whatshap/call.png" alt="" /> Call Now
//                 </a>
//                 <a
//                   href={`https://wa.me/918929979542?text=Hi%2C%20I%20want%20to%20book%20a%20session%20with%20${t.name}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="ther-btn ther-btn-wa"
//                 >
//                   <img src="/call_whatshap/whatshap.png" alt="" /> WhatsApp
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
const THERAPISTS_RUSSIAN = [
  {
    img: "/home_images/girl_russian/r1.jpeg",
    name: "Natasha",
    tag: "Russian Banya",
    years: "8 Years · Certified",
    desc: "Natasha is our lead Banya specialist, trained in authentic steam therapy and birch venik technique. Guests from Russia confirm her ritual is correct — right temperature, right technique, nothing staged.",
    price: "₹3,500",
    duration: "90 min",
  },
  {
    img: "/home_images/girl_russian/r2.jpeg",
    name: "Elena",
    tag: "Aromatherapy",
    years: "5 Years · Certified",
    desc: "Elena selects custom essential oil blends for your specific concern — stress, sleep, muscle tension. She consults before every session to get the blend exactly right for you.",
    price: "₹3,200",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_russian/r3.jpeg",
    name: "Irina",
    tag: "Russian Banya",
    years: "9 Years · Certified",
    desc: "Irina brings nine years in Banya practice and deep knowledge of heat sequencing — when to raise steam, when to cool, how to read the guest's body. Her sessions feel intuitive, not mechanical.",
    price: "₹3,500",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_russian/r4.jpeg",
    name: "Daria",
    tag: "Hot Stone",
    years: "4 Years · Certified",
    desc: "Daria trained in St. Petersburg and specialises in mood-based hot stone therapy. Heated basalt stones at 50–55°C penetrate muscle fibre faster than hands alone — ideal for deep stiffness.",
    price: "₹3,800",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_russian/r5.jpeg",
    name: "Svetlana",
    tag: "Swedish Massage",
    years: "7 Years · Certified",
    desc: "Svetlana combines Russian techniques with Swedish strokes for a unique fusion experience. Her rhythmic movements and expert pressure points ensure deep relaxation.",
    price: "₹3,000",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_russian/r6.jpeg",
    name: "Olga",
    tag: "Deep Tissue",
    years: "6 Years · Certified",
    desc: "Olga specializes in deep tissue work, focusing on chronic pain areas. Her firm yet gentle approach releases tension and restores mobility in just one session.",
    price: "₹3,400",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_russian/r7.jpeg",
    name: "Tatiana",
    tag: "Reflexology",
    years: "5 Years · Certified",
    desc: "Tatiana's reflexology sessions target specific pressure points in hands and feet. Her precise technique promotes whole-body healing and energy balance.",
    price: "₹2,800",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_russian/r8.jpeg",
    name: "Anna",
    tag: "Pregnancy Massage",
    years: "4 Years · Certified",
    desc: "Anna specializes in prenatal massage, using safe techniques to relieve pregnancy discomfort. Expecting mothers love her gentle and nurturing approach.",
    price: "₹3,200",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_russian/r9.jpeg",
    name: "Maria",
    tag: "Sports Massage",
    years: "6 Years · Certified",
    desc: "Maria focuses on sports recovery and injury prevention. Her deep tissue work enhances athletic performance and speeds up post-workout recovery.",
    price: "₹3,600",
    duration: "90 min",
  },
  {
    img: "/home_images/girl_russian/r10.jpeg",
    name: "Yulia",
    tag: "Lymphatic Drainage",
    years: "5 Years · Certified",
    desc: "Yulia's gentle lymphatic drainage massage helps reduce swelling, boost immunity, and promote detoxification. Her technique is both relaxing and therapeutic.",
    price: "₹3,000",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_russian/r11.jpeg",
    name: "Victoria",
    tag: "Couples Package",
    years: "8 Years · Certified",
    desc: "Victoria leads our Russian couples sessions with authentic Banya rituals. Two therapists, synchronized timing, and a private room with full spa access.",
    price: "₹7,500",
    duration: "120 min",
  },
];

const THERAPISTS_INDIAN = [
  {
    img: "/home_images/girl_indian/i1.jpeg",
    name: "Priya",
    tag: "Swedish Massage",
    years: "6 Years · Certified",
    desc: "Priya's long, flowing strokes are built for complete relaxation. A favourite among first-time guests and regulars who want a calm, unhurried full-body session.",
    price: "₹2,800",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_indian/i2.jpeg",
    name: "Ananya",
    tag: "Deep Tissue",
    years: "7 Years · Certified",
    desc: "Ananya works firm, targeted pressure into chronic tension — stiff shoulders, lower back pain, sports recovery. Guests with desk-job pain book her repeatedly.",
    price: "₹3,500",
    duration: "90 min",
  },
  {
    img: "/home_images/girl_indian/i3.jpeg",
    name: "Kavya",
    tag: "Thai Massage",
    years: "4 Years · Certified",
    desc: "Kavya uses acupressure along energy lines, no oils, just skilled hands. Guests leave noticeably lighter and more awake, not drowsy.",
    price: "₹3,200",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_indian/i4.jpeg",
    name: "Meera",
    tag: "Couples Package",
    years: "6 Years · Certified",
    desc: "Meera leads our couples sessions — two therapists, synchronised timing, a private room with Banya access. Book 24 hours ahead for guaranteed availability.",
    price: "₹7,500",
    duration: "120 min",
  },
  {
    img: "/home_images/girl_indian/i5.jpeg",
    name: "Riya",
    tag: "Aromatherapy",
    years: "5 Years · Certified",
    desc: "Riya creates custom aromatherapy blends using traditional Indian essential oils. Her sessions are deeply relaxing and tailored to individual needs.",
    price: "₹3,000",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_indian/i6.jpeg",
    name: "Sneha",
    tag: "Hot Stone",
    years: "4 Years · Certified",
    desc: "Sneha's hot stone therapy combines heated basalt stones with traditional Indian massage techniques. Perfect for deep muscle relaxation and stress relief.",
    price: "₹3,600",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_indian/i7.jpeg",
    name: "Neha",
    tag: "Ayurvedic Massage",
    years: "8 Years · Certified",
    desc: "Neha brings authentic Ayurvedic techniques using warm herbal oils. Her Abhyanga massage balances doshas and promotes complete mind-body harmony.",
    price: "₹3,800",
    duration: "90 min",
  },
  {
    img: "/home_images/girl_indian/i8.jpeg",
    name: "Aisha",
    tag: "Bridal Package",
    years: "5 Years · Certified",
    desc: "Aisha specializes in bridal packages including pre-wedding glow treatments, herbal masks, and full-body massage. Perfect for your special day preparations.",
    price: "₹6,000",
    duration: "120 min",
  },
  {
    img: "/home_images/girl_indian/i9.jpeg",
    name: "Pooja",
    tag: "Relaxation Therapy",
    years: "6 Years · Certified",
    desc: "Pooja's gentle relaxation therapy focuses on stress reduction and mental clarity. Her soothing techniques melt away tension and restore inner peace.",
    price: "₹2,800",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_indian/i10.jpeg",
    name: "Deepika",
    tag: "Trigger Point Therapy",
    years: "7 Years · Certified",
    desc: "Deepika specializes in trigger point therapy for chronic pain conditions. Her precise pressure points release knots and provide lasting relief.",
    price: "₹3,400",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_indian/i11.jpeg",
    name: "Nisha",
    tag: "Spiritual Massage",
    years: "5 Years · Certified",
    desc: "Nisha combines massage with healing energy work. Her sessions incorporate Reiki principles and chakra balancing for a transformative experience.",
    price: "₹3,200",
    duration: "75 min",
  },
  {
    img: "/home_images/girl_indian/i12.jpeg",
    name: "Kiran",
    tag: "Medical Massage",
    years: "8 Years · Certified",
    desc: "Kiran's medical massage therapy addresses specific health conditions. Her therapeutic approach helps manage chronic pain, sciatica, and postural issues.",
    price: "₹3,800",
    duration: "90 min",
  },
  {
    img: "/home_images/girl_indian/i13.jpeg",
    name: "Anjali",
    tag: "Postnatal Massage",
    years: "4 Years · Certified",
    desc: "Anjali specializes in postnatal recovery massage. Her gentle techniques help new mothers regain energy, reduce pain, and restore well-being.",
    price: "₹3,000",
    duration: "60 min",
  },
  {
    img: "/home_images/girl_indian/i14.jpeg",
    name: "Shreya",
    tag: "Herbal Compress Massage",
    years: "6 Years · Certified",
    desc: "Shreya uses warm herbal poultices in her unique massage therapy. The combination of heat and herbs promotes deep tissue healing and detoxification.",
    price: "₹3,600",
    duration: "75 min",
  },
];

function TherapistCard({ therapist }) {
  return (
    <div className="ther-card">
      <div className="ther-photo">
        <img 
          src={therapist.img} 
          alt={`${therapist.name} — ${therapist.tag} therapist at Russian Spa Centre Mahipalpur`} 
          loading="lazy" 
          decoding="async" 
          width={320} 
          height={384} 
        />
        <span className="ther-tag">{therapist.tag}</span>
        <span className="ther-price-badge">{therapist.price}</span>
      </div>
      <div className="ther-body">
        <div className="ther-name-row">
          <h3>{therapist.name}</h3>
          <span className="ther-years">{therapist.years}</span>
        </div>
        <p className="ther-desc">{therapist.desc}</p>
        <div className="ther-price-row">
          <span className="ther-amt">{therapist.price}</span>
          <span className="ther-dur">{therapist.duration}</span>
        </div>
        <div className="ther-actions">
          <a href="tel:+918929979542" className="ther-btn ther-btn-call">
            <img src="/call_whatshap/call.png" alt="Call" /> Call Now
          </a>
          <a
            href={`https://wa.me/918929979542?text=Hi%2C%20I%20want%20to%20book%20a%20session%20with%20${therapist.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ther-btn ther-btn-wa"
          >
            <img src="/call_whatshap/whatshap.png" alt="WhatsApp" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TherapistSection() {
  return (
    <>
      <style>{`
        .ther-sec { 
          padding: 90px 60px; 
          max-width: 1280px; 
          margin: 0 auto; 
          background: #faf8f5;
        }
        
        .ther-head { 
          text-align: center; 
          max-width: 640px; 
          margin: 0 auto 56px; 
        }
        
        .ther-head .section-label { 
          justify-content: center; 
          display: inline-block;
          background: var(--gold-pale);
          color: var(--gold);
          padding: 6px 20px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        
        .ther-head .section-title {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--cream);
          margin-top: 16px;
          margin-bottom: 8px;
        }
        
        .ther-head .section-title em {
          color: var(--gold);
          font-style: normal;
        }
        
        .ther-head p { 
          font-size: 0.95rem; 
          color: var(--muted); 
          margin-top: 14px; 
          line-height: 1.85; 
        }
        
        .ther-category {
          margin-bottom: 70px;
        }
        .ther-category:last-child {
          margin-bottom: 0;
        }
        
        .ther-category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--gold-pale);
        }
        
        .ther-category-title {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--cream);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .ther-category-title .flag {
          font-size: 2rem;
        }
        
        .ther-category-title span {
          color: var(--gold);
        }
        
        .ther-category-count {
          font-size: 0.85rem;
          color: var(--muted);
          background: var(--gold-pale);
          padding: 4px 16px;
          border-radius: 100px;
          font-weight: 500;
        }
        
        .ther-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        
        .ther-card {
          background: #fff;
          border: 1px solid var(--gold-pale);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 2px 14px rgba(124,77,188,0.06);
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          display: flex;
          flex-direction: column;
        }
        .ther-card:hover {
          box-shadow: 0 12px 32px rgba(124,77,188,0.14);
          transform: translateY(-4px);
          border-color: rgba(124,77,188,0.3);
        }
        
        .ther-photo {
          position: relative;
          aspect-ratio: 3/3.6;
          overflow: hidden;
          background: #f0ece6;
        }
        .ther-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s;
        }
        .ther-card:hover .ther-photo img {
          transform: scale(1.05);
        }
        
        .ther-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--gold);
          color: #fff;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 100px;
        }
        
        .ther-price-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(255,255,255,0.95);
          color: var(--cream);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 100px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .ther-body {
          padding: 18px 18px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .ther-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 6px;
        }
        .ther-name-row h3 {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--cream);
          margin: 0;
        }
        .ther-years {
          font-size: 0.62rem;
          color: var(--gold);
          background: var(--gold-pale);
          padding: 3px 9px;
          border-radius: 100px;
          white-space: nowrap;
          font-weight: 600;
        }
        
        .ther-desc {
          font-size: 0.78rem;
          color: var(--muted);
          line-height: 1.65;
          margin-bottom: 14px;
          flex: 1;
        }
        
        .ther-price-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .ther-amt {
          font-family: var(--font-display);
          font-size: 1.35rem;
          color: var(--gold);
          font-weight: 600;
        }
        .ther-dur {
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
        }
        
        .ther-actions {
          display: flex;
          gap: 8px;
        }
        .ther-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 8px;
          border-radius: 10px;
          font-size: 0.74rem;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }
        .ther-btn img {
          width: 15px;
          height: 15px;
        }
        .ther-btn-call {
          background: var(--gold);
          color: #fff;
        }
        .ther-btn-call:hover {
          background: #5E348F;
          color: #fff;
          transform: translateY(-1px);
        }
        .ther-btn-wa {
          background: #25D366;
          color: #fff;
        }
        .ther-btn-wa:hover {
          background: #1EBE57;
          color: #fff;
          transform: translateY(-1px);
        }

        @media (max-width: 1100px) {
          .ther-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .ther-sec { 
            padding: 64px 24px; 
          }
          .ther-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .ther-name-row h3 { 
            font-size: 1.05rem; 
          }
          .ther-category-title { 
            font-size: 1.4rem; 
          }
          .ther-head .section-title {
            font-size: 2rem;
          }
          .ther-category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .ther-grid {
            grid-template-columns: 1fr;
          }
          .ther-sec { 
            padding: 40px 16px; 
          }
        }
      `}</style>

      <section className="ther-sec">
        <div className="ther-head">
          <div className="section-label">Meet Our Therapists</div>
          <h2 className="section-title">Certified <em>Hands</em> You Can Trust</h2>
          <p>Trained in authentic Russian Banya culture and European spa technique. Available 24/7 at Russian Spa Centre, Mahipalpur.</p>
        </div>

        {/* Indian Therapists Section */}
        <div className="ther-category">
          <div className="ther-category-header">
            <h3 className="ther-category-title">
              <span className="flag">🇮🇳</span> Indian <span>Therapists</span>
            </h3>
            <span className="ther-category-count">{THERAPISTS_INDIAN.length} Therapists</span>
          </div>
          <div className="ther-grid">
            {THERAPISTS_INDIAN.map((therapist, i) => (
              <TherapistCard key={`indian-${i}`} therapist={therapist} />
            ))}
          </div>
        </div>

        {/* Russian Therapists Section */}
        <div className="ther-category">
          <div className="ther-category-header">
            <h3 className="ther-category-title">
              <span className="flag">🇷🇺</span> Russian <span>Therapists</span>
            </h3>
            <span className="ther-category-count">{THERAPISTS_RUSSIAN.length} Therapists</span>
          </div>
          <div className="ther-grid">
            {THERAPISTS_RUSSIAN.map((therapist, i) => (
              <TherapistCard key={`russian-${i}`} therapist={therapist} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}