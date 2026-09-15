'use client';

import Image from 'next/image';

const corePriorities = [
  {
    title: 'Protect Sensitive Data',
    desc: 'Strengthen the protection of financial, customer, and business data across enterprise systems, user identities, and devices.',
    icon: (
      <svg className="tw:w-6 tw:h-6 tw:text-[#176AB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Improve Regulatory Readiness',
    desc: 'Support governance, access control, and technology practices aligned with stringent regulatory and compliance requirements.',
    icon: (
      <svg className="tw:w-6 tw:h-6 tw:text-[#176AB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Connect Business Data',
    desc: 'Create end-to-end visibility by unifying customer information, core enterprise applications, and operational workflows.',
    icon: (
      <svg className="tw:w-6 tw:h-6 tw:text-[#176AB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Operational Efficiency',
    desc: 'Eliminate manual friction and administrative bottlenecks through secure cloud architecture and custom workflow automation.',
    icon: (
      <svg className="tw:w-6 tw:h-6 tw:text-[#176AB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function MissionVisionSection() {
  return (
    <section className="tw:bg-[#F4F6F8] tw:w-full tw:py-20 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:border-b tw:border-slate-200/60">
      <div className="tw:mx-auto tw:max-w-[1440px]">

        {/* Core Priorities Card Header */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
            ORGANISATIONAL PRIORITIES
          </span>
          <h2 className="tw:text-[30px] tw:sm:text-[38px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3 tw:leading-tight">
            Technology Built Around Security, Compliance and Performance
          </h2>
          <p className="tw:mt-3 tw:text-[15.5px] tw:text-slate-600 tw:leading-relaxed">
            We partner with organisations to solve high-impact technology challenges, safeguard critical assets, and build agile operational foundations.
          </p>
        </div>

        {/* 4 Priorities Cards Grid */}
        <div className="tw:mt-12 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-4 tw:gap-6">
          {corePriorities.map((item, idx) => (
            <div
              key={idx}
              className="tw:bg-white tw:p-7 tw:rounded-2xl tw:border tw:border-slate-200/80 tw:shadow-sm tw:hover:shadow-lg tw:hover:border-[#176AB3]/40 tw:hover:-translate-y-1 tw:transition-all tw:duration-300 tw:flex tw:flex-col tw:items-start"
            >
              <div className="tw:w-12 tw:h-12 tw:rounded-full tw:bg-[#EAF5FF] tw:flex tw:items-center tw:justify-center tw:mb-5">
                {item.icon}
              </div>
              <h3 className="tw:text-[18px] tw:font-extrabold tw:text-[#0B192C]">
                {item.title}
              </h3>
              <p className="tw:mt-2.5 tw:text-[14px] tw:leading-relaxed tw:text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission & Vision Split Layout */}
        <div className="tw:mt-20 tw:pt-16 tw:border-t tw:border-slate-200/80 tw:grid tw:grid-cols-1 tw:lg:grid-cols-12 tw:gap-10 tw:items-stretch">

          {/* Left Column Image */}
          <div className="tw:lg:col-span-5 tw:relative tw:min-h-[360px] tw:lg:min-h-[440px] tw:rounded-3xl tw:overflow-hidden tw:shadow-md tw:border tw:border-slate-200 tw:bg-white">
            <Image
              src="/images/Mission.png"
              alt="Netciples Engineering & Consultation Team"
              fill
              className="tw:object-cover tw:object-center"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="tw:absolute tw:bottom-6 tw:left-6 tw:right-6 tw:bg-white/95 tw:backdrop-blur-md tw:p-5 tw:rounded-2xl tw:shadow-lg tw:border tw:border-slate-200">
              <div className="tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-wider tw:text-[#176AB3]">Proven Execution</div>
              <div className="tw:text-[15px] tw:font-extrabold tw:text-[#0B192C] tw:mt-0.5">Architectural Integrity &amp; Client Governance</div>
            </div>
          </div>

          {/* Right Column Mission & Vision Cards */}
          <div className="tw:lg:col-span-7 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:gap-6">

            {/* OUR MISSION CARD */}
            <div className="tw:p-7 tw:rounded-2xl tw:border-t-4 tw:border-[#176AB3] tw:bg-white tw:shadow-sm tw:border-x tw:border-b tw:border-slate-200 tw:flex tw:flex-col tw:justify-between">
              <div>

                <h3 className="tw:mt-4 tw:text-[18px] tw:sm:text-[20px] tw:font-extrabold tw:text-[#0B192C] tw:leading-snug">
                  To deliver resilient, transparent IT solutions that empower organisations to operate with total confidence.
                </h3>
                <p className="tw:mt-3 tw:text-[14px] tw:leading-relaxed tw:text-slate-600">
                  At Netciples, our mission is to engineer reliable technology foundations tailored to your business goals. We eliminate technical debt, enhance operational transparency, and partner closely with your team to support sustainable growth.
                </p>
              </div>
            </div>

            {/* OUR VISION CARD */}
            <div className="tw:p-7 tw:rounded-2xl tw:border-t-4 tw:border-[#00A3FF] tw:bg-white tw:shadow-sm tw:border-x tw:border-b tw:border-slate-200 tw:flex tw:flex-col tw:justify-between">
              <div>

                <h3 className="tw:mt-4 tw:text-[18px] tw:sm:text-[20px] tw:font-extrabold tw:text-[#0B192C] tw:leading-snug">
                  The trusted technology partner for forward-thinking enterprises.
                </h3>
                <p className="tw:mt-3 tw:text-[14px] tw:leading-relaxed tw:text-slate-600">
                  Netciples transforms fragmented legacy environments into modern, secure technical assets. Driven by architectural clarity and operational excellence, our engineering frameworks deliver long-term reliability and peace of mind.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
