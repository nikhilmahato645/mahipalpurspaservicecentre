'use client';

import { useEffect } from 'react';

export default function InteractiveElements() {
  useEffect(() => {
    // WhatsApp message function
    const sendWhatsAppMessage = () => {
      const message = 'Hello! I want to book an appointment at your spa in Vasant Kunj. Please share more details about services and availability.';
      const encodedMessage = encodeURIComponent(message);
      window.open('https://wa.me/918929979542?text=' + encodedMessage, '_blank');
    };

    // Setup WhatsApp button listeners
    const heroBtn = document.getElementById('whatsappHeroBtn');
    const ctaBtn = document.getElementById('whatsappCtaBtn');

    if (heroBtn) heroBtn.addEventListener('click', sendWhatsAppMessage);
    if (ctaBtn) ctaBtn.addEventListener('click', sendWhatsAppMessage);

    // Setup FAQ toggle
    document.querySelectorAll('.faq-mini-question').forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        if (faqItem) faqItem.classList.toggle('open');
      });
    });

    // Cleanup function
    return () => {
      if (heroBtn) heroBtn.removeEventListener('click', sendWhatsAppMessage);
      if (ctaBtn) ctaBtn.removeEventListener('click', sendWhatsAppMessage);
    };
  }, []);

  return null;
}
