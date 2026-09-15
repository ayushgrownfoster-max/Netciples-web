'use client';

import FAQSection from './faq-section';
import HeroSection from './hero-section';
import ImpactSection from './impact-section';
import ServicesSection from './services-section';
import PartnersSection from './partners-section';
import ChooseUsSection from './choose-us-section';
import IndustriesSection from './industries-section';
import TestimonialsSection from './testimonials-section';
import ConsultationSection from './consultation-section';
import MissionVisionSection from './mission-vision-section';

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
