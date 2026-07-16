// app/data/sectorContentTypes.ts
// Shared shape for the unique, AI-authored content that fills each sector landing page.

export interface TitleDesc {
  title: string;
  desc: string;
}

export interface TreatmentContent {
  name: string;
  desc: string;
  benefits: string;
  suitedFor: string;
  duration: string;
  frequency: string;
  aftercare: string;
}

export interface NearbyAreaContent {
  name: string;
  note: string;
}

export interface ReachRow {
  from: string;
  route: string;
  time: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  location: string;
}

export interface SectorPageContent {
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  heroBadge: string;
  h1Line1: string;
  h1Line2: string;
  heroText: string;
  noticeText: string;
  aboutParagraphs: string[];
  whyChoose: TitleDesc[];
  treatments: TreatmentContent[];
  wellnessGuide: TitleDesc[];
  nearbyAreas: NearbyAreaContent[];
  howToReach: ReachRow[];
  faqs: FaqItem[];
  testimonials: TestimonialItem[];
}
