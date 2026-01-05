"use client";

import Link from "next/link";
import Image from "next/image";

export default function ConsultationSection() {
  return (
  
    <section className="tw:w-full tw:mb-40 tw:px-4 tw:sm:px-5 tw:flex tw:justify-center">
      
      <div
        className="
          tw:relative
          tw:w-full tw:max-w-[1265px]
          tw:bg-[#E8F4FF]
          tw:rounded-3xl
          tw:py-10 tw:px-4 tw:sm:px-10 tw:md:p-15 tw:lg:p-24
          tw:overflow-hidden
        "
      >
        <div className="tw:block tw:absolute tw:inset-0 tw:right-0 tw:top-0 tw:z-0">
          <Image
            src="/images/consult-bg.png"  
            alt="Background Pattern"
            fill
            className="tw:object-cover tw:object-right tw:opacity-80"
          />
        </div>

        {/* Content */}
        <div className="tw:relative tw:z-10 tw:sm:max-w-175">
          
          <h2 className="heading1 tw:font-semibold tw:text-black tw:leading-snug">
            Scale Your Business With
            <br />Secure & Modern IT Solutions
          </h2>

          <p className="tw:mt-4 body_text_style tw:leading-6 tw:max-w-[580px]">
            From managed IT to cloud modernization and cybersecurity, Netciples
            supports your long-term digital growth with proven expertise.
          </p>

          {/* Button */}
          <div className="btn tw:mt-8 tw:whitespace-nowrap">
            <Link
              href="/contact"
              className="
                tw:bg-primary
                tw:text-white
                tw:px-8 tw:py-3
                tw:rounded-full
                tw:font-medium
                tw:inline-block
                tw:text-sm tw:md:text-base tw:lg:text-[18px]
                hover:tw:bg-[#1d8ae0]
                tw:transition-all
              "
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
   
  );
}
