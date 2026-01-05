'use client';

import React from 'react';
import { CONFIG } from '@/global-config';

import CommonSection from '../common-section';

type ServiceSection = {
  id: number;
  sectionId: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  buttonText: string;
  reverse: boolean;
};

export default function MainSection() {
  const serviceSections: ServiceSection[] = [
    {
      id: 1,
      sectionId: 'smbs',
      title: 'SMBs',
      paragraphs: [
        'Small and medium businesses face unique challenges as they grow, from managing daily operations to adopting the right technology. With limited resources and increasing competition, SMBs need solutions that are efficient, scalable, and affordable.',
        'At Netciples, we empower SMBs with tailored IT services designed to boost productivity and support long-term growth. Our solutions help businesses streamline processes, protect their data, and leverage technology to stay ahead in a fast-changing market.',
      ],
      image: `${CONFIG.assetsDir}/images/SMB.png`,
      imageAlt: 'SMBs',
      buttonText: 'Explore',
      reverse: false,
    },
    {
      id: 2,
      sectionId: 'finance',
      title: 'Finance',
      paragraphs: [
        'Our IT solutions for the financial sector are designed to strengthen cybersecurity, enhance data management, and ensure full compliance with industry regulations. We help financial institutions safeguard sensitive information, streamline operations, and maintain the reliability needed in high-risk environments.',
        'With secure systems, smarter data handling, and continuous monitoring, we support your ability to deliver safe, efficient, and compliant financial services. Our goal is to empower your institution with technology that protects your customers and keeps your operations running seamlessly.',
      ],
      image: `${CONFIG.assetsDir}/images/Finance.png`,
      imageAlt: 'Finance',
      buttonText: 'Explore',
      reverse: true,
    },
    {
      id: 3,
      sectionId: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      paragraphs: [
        'Our IT services for the retail and e-commerce sector help streamline inventory management, enhance online store performance, and protect sensitive customer data. We support your digital platforms with reliable infrastructure and smooth system integrations, ensuring your operations stay efficient and responsive.',
        'With advanced security measures, optimized e-commerce workflows, and real-time inventory insights, we help you create a seamless shopping experience for your customers. These solutions allow your business to run smarter and more securely while boosting productivity and long-term growth.',
      ],
      image: `${CONFIG.assetsDir}/images/Retail.png`,
      imageAlt: 'Retail & E-commerce',
      buttonText: 'Explore',
      reverse: false,
    },
    
  ];
  

  return (
    <div>
      {serviceSections.map((section) => (
        <CommonSection
          key={section.id}
          id={section.sectionId}
          title={section.title}
          paragraphs={section.paragraphs}
          image={section.image}
          buttonText={section.buttonText}
          imageAlt={section.imageAlt}
          reverse={section.reverse}
        />
      ))}
    </div>
  );
}