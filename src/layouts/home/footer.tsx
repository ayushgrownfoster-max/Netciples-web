'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="tw:relative tw:bg-gradient-to-b tw:from-[#0B192C] tw:via-[#0F4C81] tw:to-[#176AB3] tw:text-white tw:w-full tw:pt-16 tw:pb-8 tw:px-6 tw:sm:px-10 tw:lg:px-16 tw:overflow-hidden tw:border-t tw:border-white/10">
      {/* Background Subtle Tech Ambient Glow Orbs */}
      <div className="tw:absolute tw:-top-24 tw:-right-24 tw:w-96 tw:h-96 tw:bg-[#00A3FF]/15 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />
      <div className="tw:absolute tw:-bottom-24 tw:-left-24 tw:w-96 tw:h-96 tw:bg-[#176AB3]/20 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />

      <div className="tw:relative tw:mx-auto tw:max-w-[1440px]">
        
        {/* MAIN FOOTER GRID (Company Info Left + 4 Navigation Columns Right) */}
        <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-12 tw:gap-12 tw:pb-14">
          
          {/* LEFT COLUMN - Brand, Tagline, Contact Details */}
          <div className="tw:lg:col-span-4 tw:flex tw:flex-col tw:items-start">
            
            {/* Logo Wrapper */}
            <Link href="/" className="tw:inline-flex tw:items-center tw:gap-3 tw:bg-white/10 tw:backdrop-blur-md tw:p-3.5 tw:rounded-2xl tw:border tw:border-white/20 tw:hover:bg-white/20 tw:transition-all">
              <img src="/logo/logo.svg" alt="Netciples Logo" className="tw:h-9 tw:w-auto tw:brightness-0 tw:invert" />
            </Link>

            {/* Tagline */}
            <p className="tw:mt-5 tw:text-[15px] tw:text-slate-200 tw:leading-relaxed tw:max-w-sm">
              Managed IT Services, Software Development &amp; IT Consulting.
            </p>

            {/* Contact Details List */}
            <div className="tw:mt-6 tw:space-y-3.5 tw:text-[14px]">
              
              {/* Email */}
              <a
                href="mailto:info@netciples.com.au"
                className="tw:flex tw:items-center tw:gap-3 tw:text-slate-200 tw:hover:text-white tw:transition-colors group"
              >
                <div className="tw:w-9 tw:h-9 tw:rounded-xl tw:bg-white/10 tw:flex tw:items-center tw:justify-center tw:group-hover:bg-[#00A3FF] tw:transition-colors tw:shrink-0">
                  <svg className="tw:w-4 tw:h-4 tw:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="tw:font-medium">info@netciples.com.au</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+61426254475"
                className="tw:flex tw:items-center tw:gap-3 tw:text-slate-200 tw:hover:text-white tw:transition-colors group"
              >
                <div className="tw:w-9 tw:h-9 tw:rounded-xl tw:bg-white/10 tw:flex tw:items-center tw:justify-center tw:group-hover:bg-[#00A3FF] tw:transition-colors tw:shrink-0">
                  <svg className="tw:w-4 tw:h-4 tw:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="tw:font-medium">+61 426 254 475</span>
              </a>

              {/* Location Address */}
              <div className="tw:flex tw:items-start tw:gap-3 tw:text-slate-200">
                <div className="tw:w-9 tw:h-9 tw:rounded-xl tw:bg-white/10 tw:flex tw:items-center tw:justify-center tw:shrink-0 tw:mt-0.5">
                  <svg className="tw:w-4 tw:h-4 tw:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="tw:font-medium tw:leading-snug">2 Messiter Street, Campsie NSW 2194</span>
              </div>

            </div>
          </div>

          {/* RIGHT 4 NAVIGATION COLUMNS */}
          <div className="tw:lg:col-span-8 tw:grid tw:grid-cols-2 tw:sm:grid-cols-4 tw:gap-8">
            
            {/* COLUMN 1: COMPANY */}
            <div>
              <h3 className="tw:text-[13px] tw:font-extrabold tw:uppercase tw:tracking-widest tw:text-[#00A3FF] tw:mb-4">
                COMPANY
              </h3>
              <ul className="tw:space-y-3 tw:text-[14.5px] tw:font-medium">
                <li>
                  <Link href="/about" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about#story" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: SERVICES */}
            <div>
              <h3 className="tw:text-[13px] tw:font-extrabold tw:uppercase tw:tracking-widest tw:text-[#00A3FF] tw:mb-4">
                SERVICES
              </h3>
              <ul className="tw:space-y-3 tw:text-[14.5px] tw:font-medium">
                <li>
                  <Link href="/service/#managed-it" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Managed IT Services
                  </Link>
                </li>
                <li>
                  <Link href="/service/#software-development" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="/service/#it-consulting" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: INDUSTRIES */}
            <div>
              <h3 className="tw:text-[13px] tw:font-extrabold tw:uppercase tw:tracking-widest tw:text-[#00A3FF] tw:mb-4">
                INDUSTRIES
              </h3>
              <ul className="tw:space-y-3 tw:text-[14.5px] tw:font-medium">
                <li>
                  <Link href="/industry/#professional-services" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Professional Services
                  </Link>
                </li>
                <li>
                  <Link href="/industry/#finance" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/industry/#retail-ecommerce" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Retail &amp; E-commerce
                  </Link>
                </li>
                <li>
                  <Link href="/industry/#healthcare" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/industry/#manufacturing" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/industry/#small-medium-enterprise" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Small &amp; Medium Enterprises
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4: RESOURCES */}
            <div>
              <h3 className="tw:text-[13px] tw:font-extrabold tw:uppercase tw:tracking-widest tw:text-[#00A3FF] tw:mb-4">
                RESOURCES
              </h3>
              <ul className="tw:space-y-3 tw:text-[14.5px] tw:font-medium">
                <li>
                  <Link href="/resources/blogs" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/customer-support" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Client Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="tw:text-slate-300 tw:hover:text-white tw:transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR (Divider + Copyright + Social Links + Privacy) */}
        <div className="tw:pt-8 tw:border-t tw:border-white/10 tw:flex tw:flex-col tw:sm:flex-row tw:items-center tw:justify-between tw:gap-4 tw:text-[13.5px] tw:text-slate-300">
          
          {/* Copyright */}
          <div>
            &copy; {new Date().getFullYear()} Netciples. All rights reserved.
          </div>

          {/* Center Social Icons */}
          <div className="tw:flex tw:items-center tw:gap-3">
            <Link
              href="https://www.linkedin.com/company/netciples/"
              target="_blank"
              aria-label="LinkedIn"
              className="tw:w-9 tw:h-9 tw:rounded-full tw:bg-white/10 tw:flex tw:items-center tw:justify-center tw:hover:bg-[#00A3FF] tw:transition-all"
            >
              <Image src="/images/linkedin.svg" width={18} height={18} alt="LinkedIn" className="tw:brightness-0 tw:invert" />
            </Link>
            <Link
              href="https://www.instagram.com/netciples?igsh=dWZ4d3NjODB4Mnpi"
              target="_blank"
              aria-label="Instagram"
              className="tw:w-9 tw:h-9 tw:rounded-full tw:bg-white/10 tw:flex tw:items-center tw:justify-center tw:hover:bg-[#00A3FF] tw:transition-all"
            >
              <Image src="/images/instagram.svg" width={18} height={18} alt="Instagram" className="tw:brightness-0 tw:invert" />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="Facebook"
              className="tw:w-9 tw:h-9 tw:rounded-full tw:bg-white/10 tw:flex tw:items-center tw:justify-center tw:hover:bg-[#00A3FF] tw:transition-all"
            >
              <Image src="/images/facebook.svg" width={18} height={18} alt="Facebook" className="tw:brightness-0 tw:invert" />
            </Link>
          </div>

          {/* Right Links */}
          <div className="tw:flex tw:items-center tw:gap-6">
            <Link href="/contact" className="tw:hover:text-white tw:transition-colors">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
