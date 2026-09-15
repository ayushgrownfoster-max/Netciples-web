'use client';

import Link from 'next/link';

export default function ConsultationSection() {
  return (
    <section className="tw:relative tw:bg-gradient-to-r tw:from-[#0B192C] tw:via-[#0F4C81] tw:to-[#176AB3] tw:text-white tw:w-full tw:py-20 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:overflow-hidden">
      {/* Background Subtle Tech Wave Overlay */}
      <div className="tw:absolute tw:-top-24 tw:-right-24 tw:w-96 tw:h-96 tw:bg-[#00A3FF]/20 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />
      <div className="tw:absolute tw:-bottom-24 tw:-left-24 tw:w-96 tw:h-96 tw:bg-[#176AB3]/30 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />

      <div className="tw:relative tw:mx-auto tw:max-w-[960px] tw:text-center tw:flex tw:flex-col tw:items-center tw:bg-white/5 tw:backdrop-blur-md tw:border-t-4 tw:border-white/40 tw:border-x tw:border-b tw:border-white/10 tw:p-10 tw:sm:p-14 tw:rounded-3xl tw:shadow-2xl">
        
        {/* Uppercase Badge */}
        <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-white tw:bg-white/15 tw:px-4 tw:py-1.5 tw:rounded-full tw:border tw:border-white/20">
          DISCUSS YOUR PRIORITIES
        </span>

        {/* Headline */}
        <h2 className="tw:mt-4 tw:text-[30px] tw:sm:text-[42px] tw:font-extrabold tw:leading-tight tw:text-white">
          Ready to Discuss Your Technology Priorities?
        </h2>

        {/* Subtitle */}
        <p className="tw:mt-4 tw:max-w-2xl tw:text-[15.5px] tw:sm:text-[17.5px] tw:text-slate-200 tw:leading-relaxed">
          Discover practical ways to improve cybersecurity, operational efficiency, and technology resilience with our senior engineering team.
        </p>

        {/* Buttons */}
        <div className="tw:mt-8 tw:flex tw:flex-col tw:sm:flex-row tw:gap-4 tw:w-full tw:sm:w-auto">
          <Link
            href="/contact"
            className="tw:inline-flex tw:items-center tw:justify-center tw:gap-3 tw:bg-white tw:text-[#0B192C] tw:px-8 tw:py-4 tw:rounded-xl tw:font-bold tw:text-[15px] tw:shadow-lg tw:hover:bg-slate-100 tw:hover:-translate-y-0.5 tw:transition-all"
          >
            <span>Request a Consultation</span>
            <svg className="tw:w-4 tw:h-4 tw:text-[#176AB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="tw:inline-flex tw:items-center tw:justify-center tw:gap-2.5 tw:border-2 tw:border-white/40 tw:bg-white/10 tw:text-white tw:px-8 tw:py-4 tw:rounded-xl tw:font-bold tw:text-[15px] tw:hover:bg-white/20 tw:transition-all"
          >
            <span>Contact Engineering Team</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
