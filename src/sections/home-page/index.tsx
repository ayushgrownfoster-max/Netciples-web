'use client';

import HeroSection from './hero-section';
import MissionVisionSection from './mission-vision-section';
import ServicesSection from './services-section';
import IndustriesSection from './industries-section';
import ChooseUsSection from './choose-us-section';
import ImpactSection from './impact-section';
import PartnersSection from './partners-section';
import TestimonialsSection from './testimonials-section';
import FAQSection from './faq-section';
import ConsultationSection from './consultation-section';

export default function HomePageView() {
  return (
    <div className="tw:w-full tw:flex tw:flex-col">
      <HeroSection />
      <MissionVisionSection />
      <ServicesSection />
      <IndustriesSection />
      <ChooseUsSection />
      <ImpactSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <ConsultationSection />
    </div>
  );
}
