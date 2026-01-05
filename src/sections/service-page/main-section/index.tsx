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
  bottom:boolean
};

export default function MainSection() {
  const serviceSections: ServiceSection[] = [
    {
      id: 1,
      sectionId: 'managed-it',
      title: 'Managed IT Services',
      paragraphs: [
        'Our Managed IT Services cover everything from network monitoring and system maintenance to data backups and ongoing technical support. We take care of your IT infrastructure so your business can operate smoothly without interruptions.',
        'With proactive management, reduced downtime, and 24/7 expert support, we ensure your technology stays secure, efficient, and always up to date. This allows you to focus on growth while we handle the complexities of your IT needs.',
      ],
      image: `${CONFIG.assetsDir}/images/IT image.png`,
      imageAlt: 'IT Services',
      buttonText: 'Get a Free Consultation',
      reverse: false,
      bottom: false,

    },
    {
      id: 2,
      sectionId: 'cloud-solutions',
      title: 'Cloud Solutions',
      paragraphs: [
        'Our Cloud Solutions help businesses seamlessly migrate their data, applications, and operations to secure cloud environments. From cloud migration to infrastructure management and virtual desktop setups, we ensure a smooth transition with minimal disruption. Our team supports you at every step, making your cloud journey simple and reliable.',
        'By moving to the cloud, your business gains scalability, cost efficiency, and the flexibility to work from anywhere. These solutions allow you to grow without limitations, optimize expenses, and adapt quickly to changing business needs—all while maintaining strong security and performance.',
      ],
      image: `${CONFIG.assetsDir}/images/cloud-img.png`,
      imageAlt: 'Cloud Solutions',
      buttonText: 'Discover How We Can Help',
      reverse: true,
       bottom: false,
    },
    {
      id: 3,
      sectionId: 'cybersecurity',
      title: 'Cybersecurity',
      paragraphs: [
        'Our Cybersecurity services are designed to protect your business from evolving digital threats. We provide advanced threat detection, rapid incident response, strong network security, and detailed risk assessments to keep your systems safe. Our approach ensures vulnerabilities are identified early and addressed proactively.',
        'With enhanced data protection, compliance support, and continuous monitoring, you gain the confidence to operate securely. These solutions provide peace of mind, allowing your team to focus on business goals while we safeguard your digital environment.',
      ],
      image: `${CONFIG.assetsDir}/images/cyber-img.png`,
      imageAlt: 'Cybersecurity',
      buttonText: 'Secure Your Business Today',
      reverse: false,
       bottom: false,
    },
    {
      id: 4,
      sectionId: 'it-consulting',
      title: 'IT Consulting',
      paragraphs: [
        'Our IT Consulting services help businesses build the right technology strategy to support long-term growth. We provide expert guidance in creating clear technology roadmaps, optimizing business processes, and planning digital transformation initiatives. Our team works closely with you to understand your goals and deliver solutions that align with your vision.',
        'With tailored technology strategies and smarter IT investments, your business can operate more efficiently and adapt quickly to change. We focus on maximizing value, reducing unnecessary costs, and ensuring your technology supports both current needs and future opportunities.',
      ],
      image: `${CONFIG.assetsDir}/images/IT-consulting-img.png`,
      imageAlt: 'IT Consulting',
      buttonText: 'Consult with an IT Expert',
      reverse: true,
      bottom: false,
    },
    {
      id: 5,
      sectionId: 'software-development',
      title: 'Software Development',
      paragraphs: [
        'Our Software Development services deliver custom-built solutions tailored to your business needs. From mobile app development to API integrations and system automation, we create software that enhances performance and supports your long-term goals. Every solution is designed to be scalable, efficient, and easy to use.',
        'With bespoke applications and streamlined processes, we help your business operate smarter and faster. Our development approach focuses on improving workflow efficiency, reducing manual tasks, and enabling better overall productivity through reliable, high-quality software.',
      ],
      image: `${CONFIG.assetsDir}/images/Software.png`,
      imageAlt: 'Software Development',
      buttonText: 'Get Started with Custom Software',
      reverse: false,
       bottom: false,
    },
    {
      id: 6,
      sectionId: 'data-analytics',
      title: 'Data Management & Analytics',
      paragraphs: [
        'Our Data Management & Analytics services help businesses organize, store, and utilize their data more effectively. We provide secure data storage solutions, powerful business intelligence tools, and advanced predictive analytics to turn raw information into meaningful insights. Our goal is to make your data accessible, reliable, and easy to use.',
        'With data-driven decision-making and optimized data handling, your business can operate with greater clarity and efficiency. These solutions enable smarter strategies, improved performance, and better forecasting, helping you stay one step ahead in a competitive market.',
      ],
      image: `${CONFIG.assetsDir}/images/Data-Mngt-img.png`,
      imageAlt: 'Data Management & Analytics',
      buttonText: 'Leverage Your Data',
      reverse: true,
      bottom: true
    },
  ];
  

  return (
    <div>
      {serviceSections.map((section) => (
        <CommonSection
          key={section.id}
          bottom={section.bottom}
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
