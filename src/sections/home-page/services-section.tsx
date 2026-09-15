'use client';

import Link from 'next/link';

const capabilities = [
  {
    title: 'Secure Business Operations',
    desc: 'Strengthen enterprise technology environments while improving the reliability, security, and efficiency of core operations.',
    link: '/service/#managed-it',
    features: [
      'Identity & Access Management',
      'Security Controls & Compliance',
      'Business Continuity & Backup',
    ],
    outcome: 'Reduced technology risk and stronger operational resilience.',
  },
  {
    title: 'Workflow Automation & Integration',
    desc: 'Digitise repetitive business processes to reduce manual effort, eliminate data duplication, and improve operational consistency.',
    link: '/service/#software-development',
    features: [
      'Process Automation & Scripting',
      'Workflow Digitisation',
      'System & API Integration',
    ],
    outcome: 'Greater efficiency, faster turnaround times, and fewer manual errors.',
  },
  {
    title: 'CRM & Client Visibility',
    desc: 'Connect customer information and relationship workflows to improve client management, reporting, and service delivery.',
    link: '/service/#software-development',
    features: [
      'Customer Relationship Management',
      'Client Data Visibility',
      'Reporting & Activity Tracking',
    ],
    outcome: 'Better customer relationship tracking and enhanced operational visibility.',
  },
  {
    title: 'Data & Business Intelligence',
    desc: 'Turn connected business information into clearer insights for operational, tactical, and commercial decision-making.',
    link: '/service/#it-consulting',
    features: [
      'Data Integration & Warehousing',
      'Business Performance Dashboards',
      'Real-Time Operational Reporting',
    ],
    outcome: 'Faster, better-informed business decision-making with clear reporting.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="tw:bg-white tw:w-full tw:py-24 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:border-b tw:border-slate-200/60">
      <div className="tw:mx-auto tw:max-w-[1440px]">
        
        {/* Section Header */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
            TECHNOLOGY SOLUTIONS
          </span>
          <h2 className="tw:text-[32px] tw:sm:text-[42px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3 tw:leading-tight">
            Technology That Strengthens Business Operations
          </h2>
          <p className="tw:mt-4 tw:text-[16px] tw:text-slate-600 tw:leading-relaxed">
            Netciples helps organizations build resilient, compliant, and scalable technology foundations that drive productivity and protect critical assets.
          </p>
        </div>

        {/* 4-Col Vertical Capabilities Cards Grid */}
        <div className="tw:mt-16 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-4 tw:gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="tw:group tw:bg-white tw:rounded-2xl tw:p-6 tw:border-t-4 tw:border-[#176AB3] tw:border-x tw:border-b tw:border-slate-200 tw:shadow-sm tw:hover:shadow-xl tw:hover:border-[#176AB3]/80 tw:hover:-translate-y-1 tw:transition-all tw:duration-300 tw:flex tw:flex-col tw:justify-between"
            >
              <div>
                {/* Top Badge Icon */}
                <div className="tw:w-10 tw:h-10 tw:rounded-xl tw:bg-[#EAF5FF] tw:flex tw:items-center tw:justify-center tw:text-[#176AB3] tw:font-black tw:text-[14px] tw:mb-4">
                  0{idx + 1}
                </div>

                {/* Title */}
                <h3 className="tw:text-[17px] tw:font-extrabold tw:text-[#0B192C] tw:group-hover:text-[#176AB3] tw:transition-colors tw:leading-snug">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="tw:mt-2.5 tw:text-[13.5px] tw:leading-relaxed tw:text-slate-600">
                  {cap.desc}
                </p>

                {/* Feature Checkmarks List */}
                <div className="tw:mt-5 tw:space-y-2.5">
                  {cap.features.map((feat, i) => (
                    <div key={i} className="tw:flex tw:items-center tw:gap-2.5 tw:text-[13px] tw:font-medium tw:text-slate-700">
                      <svg className="tw:w-4 tw:h-4 tw:text-[#176AB3] tw:shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Outcome Box */}
                <div className="tw:mt-5 tw:p-3.5 tw:rounded-xl tw:bg-[#F4F6F8] tw:border tw:border-slate-200/80">
                  <span className="tw:text-[10.5px] tw:font-bold tw:uppercase tw:tracking-wider tw:text-[#176AB3]">
                    KEY OUTCOME
                  </span>
                  <p className="tw:mt-1 tw:text-[12.5px] tw:font-bold tw:text-[#0B192C] tw:leading-snug">
                    {cap.outcome}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="tw:mt-5 tw:pt-4 tw:border-t tw:border-slate-100 tw:flex tw:items-center tw:justify-between">
                <Link
                  href={cap.link}
                  className="tw:inline-flex tw:items-center tw:gap-1.5 tw:text-[13px] tw:font-bold tw:text-[#176AB3] tw:group-hover:text-[#0F4C81] tw:transition-colors"
                >
                  <span>Explore details</span>
                  <svg className="tw:w-3.5 tw:h-3.5 tw:transition-transform tw:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
