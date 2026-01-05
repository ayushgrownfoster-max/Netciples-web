import React from 'react';
import { CONFIG } from '@/global-config';

import TrustSection from './trust-section';
import OurVision from './our-vision-section';
import CommonSection from './common-section';
import CoreValues from './core-values-section';

const AboutUsSection = () => (
  <>
    <TrustSection />
    <OurVision />
    <CommonSection
      title="Our Mission"
      highlightText="At Netciples, our mission is to deliver innovative and reliable IT solutions that empower businesses to operate with confidence. We focus on creating technology that is secure, efficient, and aligned with each client's unique goals."
      paragraphs={[
        'We are committed to a truly customer-centric approach, ensuring every solution is tailored, transparent, and built for long-term success. Our purpose is simple—help businesses grow through smarter, more dependable technology.',
      ]}
      bottom={false}
      image={`${CONFIG.assetsDir}/images/Mission.png`}
      imageAlt="Our Mission - Empowering businesses with innovative IT solutions"
    />
    <CoreValues />
    <CommonSection
      id="our-approach"
      title="Our Approach"
      highlightText="We begin by understanding each client’s unique goals, challenges, and vision. Every solution we create is thoughtfully tailored to fit their specific business needs and long-term growth."
      paragraphs={[
        'We follow a secure, efficient, and transparent process from planning to delivery. With clear communication and reliable execution, we ensure smooth collaboration and results that truly make an impact.',
      ]}
      bottom
      image={`${CONFIG.assetsDir}/images/Approach.png`}
      imageAlt="Our Approach - Tailored solutions through understanding and collaboration"
    />
  </>
);

export default AboutUsSection;
