'use client';

import Link from 'next/link';
import Image from 'next/image';

const industries = [
  {
    title: 'Financial Services',
    tag: 'Compliance & Data Security',
    desc: 'Encrypted infrastructure, identity management, and high-availability operational systems engineered for financial practices.',
    link: '/industry/#finance',
    image: '/images/Finance.png',
  },
  {
    title: 'Professional Services',
    tag: 'Enterprise Productivity',
    desc: 'Secure, connected, and scalable technology environments that support team productivity, governance, and client collaboration.',
    link: '/industry/#professional-services',
    image: '/images/Data-Mngt-img.png',
  },
  {
    title: 'Retail & E-commerce',
    tag: 'High Traffic Cloud Scaling',
    desc: 'Cloud scaling, platform stability, data integration, and multi-channel system availability for seamless customer transactions.',
    link: '/industry/#retail-ecommerce',
    image: '/images/Retail.png',
  },
  {
    title: 'Manufacturing & Supply Chain',
    tag: 'Process & System Integration',
    desc: 'Operational automation, ERP data connectivity, and system monitoring to reduce downtime and improve workflow visibility.',
    link: '/industry/#manufacturing',
    image: '/images/manufacturing1.png',
  },
  {
    title: 'Healthcare IT',
    tag: 'Patient Data Protection',
    desc: 'Secure, compliant technology environments that safeguard sensitive records while improving care coordination.',
    link: '/industry/#healthcare',
    image: '/images/IT image.png',
  },
  {
    title: 'Small & Medium Enterprises',
    tag: 'Agile IT Support',
    desc: 'Tailored managed IT support, cloud migration, and cybersecurity protection designed for mid-market business agility.',
    link: '/industry/#small-medium-enterprise',
    image: '/images/SMB.png',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="tw:bg-white tw:w-full tw:py-24 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:border-b tw:border-slate-200/60">
      <div className="tw:mx-auto tw:max-w-[1440px]">
        
        {/* Header */}
        <div className="tw:flex tw:flex-col tw:lg:flex-row tw:lg:items-end tw:justify-between tw:gap-6">
          <div className="tw:max-w-2xl">
            <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
              INDUSTRIES WE SUPPORT
            </span>
            <h2 className="tw:text-[32px] tw:sm:text-[42px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3 tw:leading-tight">
              Domain Expertise Across Critical Sectors
            </h2>
            <p className="tw:mt-3 tw:text-[16px] tw:text-slate-600 tw:leading-relaxed">
              Industry-specific technology solutions engineered to address operational complexity and stringent compliance requirements.
            </p>
          </div>
          <Link
            href="/service"
            className="tw:inline-flex tw:items-center tw:gap-2 tw:text-[14px] tw:font-bold tw:text-[#176AB3] tw:hover:text-[#0F4C81] tw:transition-colors tw:shrink-0"
          >
            <span>View All Industry Solutions</span>
            <svg className="tw:w-4 tw:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* 6 Industry Vertical Cards Grid */}
        <div className="tw:mt-14 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-3 tw:gap-8">
          {industries.map((ind, idx) => (
            <Link
              key={idx}
              href={ind.link}
              className="tw:group tw:bg-white tw:rounded-2xl tw:border-t-4 tw:border-[#176AB3] tw:border-x tw:border-b tw:border-slate-200/90 tw:shadow-sm tw:hover:shadow-xl tw:hover:border-[#176AB3]/80 tw:hover:-translate-y-1 tw:transition-all tw:duration-300 tw:overflow-hidden tw:flex tw:flex-col tw:justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="tw:relative tw:h-[210px] tw:w-full tw:overflow-hidden tw:bg-slate-100">
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="tw:object-cover tw:group-hover:scale-105 tw:transition-transform tw:duration-500"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                  <div className="tw:absolute tw:top-4 tw:left-4">
                    <span className="tw:bg-white/95 tw:backdrop-blur-md tw:text-[#176AB3] tw:text-[11px] tw:font-bold tw:px-3 tw:py-1 tw:rounded-full tw:shadow-sm tw:border tw:border-slate-200">
                      {ind.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="tw:p-6">
                  <h3 className="tw:text-[19px] tw:font-extrabold tw:text-[#0B192C] tw:group-hover:text-[#176AB3] tw:transition-colors">
                    {ind.title}
                  </h3>
                  <p className="tw:mt-2.5 tw:text-[13.5px] tw:text-slate-600 tw:leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>

              {/* Footer CTA Link */}
              <div className="tw:px-6 tw:pb-6 tw:pt-2 tw:flex tw:items-center tw:justify-between tw:text-[13.5px] tw:font-bold tw:text-[#176AB3]">
                <span>Explore sector framework</span>
                <svg className="tw:w-4 tw:h-4 tw:transition-transform tw:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
