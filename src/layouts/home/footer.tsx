'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="tw:bg-[#0076B9] tw:text-white tw:px-6 tw:xl:px-[100px] tw:py-[50px] tw:overflow-hidden">
      {/* MAIN WRAPPER */}
      <div className=" tw:mx-auto tw:flex tw:flex-col tw:gap-15 tw:sm:gap-0 tw:sm:flex-row tw:justify-between tw:sm:items-center">
        {/* LEFT — SOCIAL + COPYRIGHT */}
        <div className="tw:flex tw:flex-col tw:items-start tw:gap-4">
          {/* COPYRIGHT */}
          <p className="tw:text-[16px]">Netciples copyright © 2025. All Rights Reserved.</p>

          {/* SOCIAL ICONS */}
          <div className="tw:flex tw:gap-4">
            <Link target="_blank" href="https://www.linkedin.com/company/netciples/">
              <Image src="/images/linkedin.svg" width={36} height={36} alt="LinkedIn" />
            </Link>

            <Link target="_blank" href="https://www.instagram.com/netciples?igsh=dWZ4d3NjODB4Mnpi">
              <Image src="/images/instagram.svg" width={36} height={36} alt="Instagram" />
            </Link>

            <Link href="#">
              <Image src="/images/facebook.svg" width={36} height={36} alt="Facebook" />
            </Link>

            {/* <Link href="#">
              <Image src="/images/twitter.svg" width={36} height={36} alt="Twitter / X" />
            </Link> */}
          </div>
        </div>

        {/* ADDRESS */}

        <div className="tw:flex tw:flex-col tw:lg:flex-row tw:items-start tw:justify-between tw:gap-5 tw:lg:gap-15 tw:max-w-[481px]">
          <div className="tw:text-[16px] tw:leading-relaxed tw:sm:mt-4 tw:lg:mt-0 tw:text-left tw:md:text-left tw:lg:text-left">
            <p>2 Messiter Street, </p>
            <p>Campsie NSW 2194</p>
          </div>

          <div className="tw:text-[16px] tw:flex tw:flex-col tw:gap-1 tw:text-left tw:md:text-right">
            <p>info@netciples.com.au</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
