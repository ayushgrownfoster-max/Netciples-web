'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="tw:relative tw:bg-gradient-to-b tw:from-[#F4F6F8] tw:via-[#F8FAFC] tw:to-white tw:w-full tw:overflow-hidden tw:py-16 tw:lg:py-24 tw:border-b tw:border-slate-200/60">
      {/* Background Subtle Tech Wave Overlay */}
      <div className="tw:absolute tw:inset-0 tw:bg-[radial-gradient(#176AB3_1px,transparent_1px)] [background-size:24px_24px] tw:opacity-[0.03] tw:pointer-events-none" />
      <div className="tw:absolute tw:-top-24 tw:-right-24 tw:w-96 tw:h-96 tw:bg-[#00A3FF]/10 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />
      <div className="tw:absolute tw:-bottom-24 tw:-left-24 tw:w-96 tw:h-96 tw:bg-[#176AB3]/10 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />

      <div className="tw:relative tw:mx-auto tw:max-w-[1440px] tw:px-5 tw:sm:px-8 tw:lg:px-12">
        <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-12 tw:gap-12 tw:lg:gap-8 tw:items-center">

          {/* Left Content Column */}
          <div className="tw:lg:col-span-7 tw:flex tw:flex-col tw:items-start">

            {/* Upper Category Badge Pill */}
            <div className="tw:inline-flex tw:items-center tw:gap-2.5 tw:px-4 tw:py-1.5 tw:rounded-full tw:bg-[#EAF5FF] tw:border tw:border-[#BDE0FE] tw:shadow-sm">
              <span className="tw:relative tw:flex tw:h-2.5 tw:w-2.5">
                <span className="tw:animate-ping tw:absolute tw:inline-flex tw:h-full tw:w-full tw:rounded-full tw:bg-[#176AB3] tw:opacity-75" />
                <span className="tw:relative tw:inline-flex tw:rounded-full tw:h-2.5 tw:w-2.5 tw:bg-[#176AB3]" />
              </span>
              <span className="tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-wider tw:text-[#176AB3]">
                Managed IT Services &amp; Digital Solutions
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="tw:mt-6 tw:text-[38px] tw:sm:text-[50px] tw:lg:text-[56px] tw:font-extrabold tw:leading-[1.14] tw:tracking-tight tw:text-[#0B192C]">
              Secure Technology Foundations Built for{' '}
              <span className="tw:bg-gradient-to-r tw:from-[#176AB3] tw:to-[#00A3FF] tw:bg-clip-text tw:text-transparent">
                Scalable Business Performance
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="tw:mt-6 tw:text-[16px] tw:sm:text-[18px] tw:leading-[1.65] tw:text-slate-600 tw:max-w-2xl">
              Netciples helps enterprise &amp; financial services organisations streamline operations, enhance cybersecurity compliance, and engineer resilient cloud infrastructure built for long-term growth.
            </p>

            {/* CTA Button Pair */}
            <div className="tw:mt-8 tw:flex tw:flex-col tw:sm:flex-row tw:gap-4 tw:w-full tw:sm:w-auto">
              <Link
                href="/contact"
                className="tw:inline-flex tw:items-center tw:justify-center tw:gap-2.5 tw:px-8 tw:py-4 tw:rounded-xl tw:bg-[#176AB3] tw:text-white tw:font-bold tw:text-[15px] tw:shadow-md tw:shadow-[#176AB3]/20 tw:hover:bg-[#0F4C81] tw:hover:shadow-lg tw:hover:-translate-y-0.5 tw:transition-all"
              >
                <span>Book Discovery Call</span>
                <svg className="tw:w-4 tw:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/service"
                className="tw:inline-flex tw:items-center tw:justify-center tw:gap-2.5 tw:px-8 tw:py-4 tw:rounded-xl tw:border-2 tw:border-[#176AB3] tw:bg-white tw:text-[#176AB3] tw:font-bold tw:text-[15px] tw:hover:bg-[#EAF5FF] tw:hover:-translate-y-0.5 tw:transition-all"
              >
                <span>Explore Capabilities</span>
                <svg className="tw:w-4 tw:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* Bottom SLA / Trust Bar */}
            <div className="tw:mt-10 tw:pt-8 tw:border-t tw:border-slate-200/80 tw:flex tw:flex-wrap tw:gap-6 tw:text-[13px] tw:font-semibold tw:text-slate-600">
              <div className="tw:flex tw:items-center tw:gap-2">
                <svg className="tw:w-5 tw:h-5 tw:text-[#176AB3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>99.9% Operational Uptime</span>
              </div>
              <div className="tw:flex tw:items-center tw:gap-2">
                <svg className="tw:w-5 tw:h-5 tw:text-[#176AB3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>15-Min Response SLA</span>
              </div>
              <div className="tw:flex tw:items-center tw:gap-2">
                <svg className="tw:w-5 tw:h-5 tw:text-[#176AB3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO 27001 Security Standards</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Showcase */}
          <div className="tw:lg:col-span-5 tw:relative tw:flex tw:justify-center">
            <div className="tw:relative tw:w-full tw:h-[380px] tw:sm:h-[460px] tw:lg:h-[500px] tw:rounded-3xl tw:overflow-hidden tw:shadow-xl tw:border-4 tw:border-white tw:bg-slate-100">
              <Image
                src="/images/hero-bg5.png"
                alt="Netciples Technology & Managed IT Services Infrastructure"
                fill
                priority
                className="tw:object-cover tw:object-center tw:scale-105 tw:hover:scale-100 tw:transition-transform tw:duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />

              {/* Gradient Theme Overlay */}
              <div className="tw:absolute tw:inset-0 tw:bg-gradient-to-t tw:from-[#0B192C]/70 tw:via-transparent tw:to-transparent" />

              {/* Floating Badge 1 - Top Left */}

              {/* Floating Badge 2 - Bottom Right */}


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
