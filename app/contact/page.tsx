// app/contact/page.tsx
import type { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact Russian Spa Centre | Best Spa in Mahipalpur Aerocity Dwarka | Call +91 8929979542",
  description:
    "Visit our spa in Mahipalpur near IGI Airport. Book your appointment via WhatsApp or call +91 8929979542. Open 24/7. Office No. 118, Defence Enclave, Adjoining Aerocity, New Delhi. Near JW Marriott Hotel Aerocity. Free parking available.",
  keywords:
    "spa contact number Mahipalpur, book spa appointment Aerocity, Russian spa phone number, massage centre near me, spa WhatsApp number Delhi, Russian banya booking, spa near JW Marriott Aerocity, spa in Defence Enclave Mahipalpur, massage parlour contact, body spa number, luxury spa booking, couples spa reservation, deep tissue massage booking, Swedish massage appointment, Thai spa near me, aromatherapy spa contact, hot stone therapy booking, reflexology centre near me, sports massage appointment, pregnancy spa contact, 24 hours spa phone number, spa email address, Russian spa location, spa directions Mahipalpur, spa near IGI Airport contact, wellness centre booking, spa customer care Delhi NCR, Russian Spa Centre Mahipalpur contact",
  openGraph: {
    title: "Contact Russian Spa Centre | Book Your Appointment | Mahipalpur Aerocity",
    description: "Call +91 8929979542 or WhatsApp us to book your spa appointment. Open 24/7 near IGI Airport. Office No. 118, Defence Enclave, Mahipalpur.",
    url: "https://mahipalpurspaservicecentre.com/contact",
    siteName: "Russian Spa Centre",
    images: [
      {
        url: "https://mahipalpurspaservicecentre.com/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Russian Spa Centre Contact - Book Your Appointment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Russian Spa Centre | Book Your Appointment",
    description: "Call +91 8929979542 or WhatsApp us. Open 24/7 near IGI Airport.",
    images: ["https://mahipalpurspaservicecentre.com/contact-og.png"],
  },
  alternates: {
    canonical: "https://mahipalpurspaservicecentre.com/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
