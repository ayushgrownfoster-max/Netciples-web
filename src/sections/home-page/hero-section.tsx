'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <style>
        {` 
         
         @media (max-width: 425px){
          .text {
            font-size:20px
          }
      }

       @media (max-width: 320px){
          .text {
            font-size:16px
          }
      }
          
          `}
      </style>
      <section className="tw:w-full tw:px-2.5 tw:lg:px-5 tw:xl:px-[100px] tw:pt-[120px] tw:md:pt-[120px] tw:lg:pt-[157px] tw:pb-14 tw:md:pb-[50px] tw:lg:pb-[100px] tw:flex tw:justify-center tw:items-center">
        {/* Outer Container with shadow + rounded */}
        {/* <div
          className="
        tw:relative
        tw:md:w-[1140px] tw:lg:w-[1240px] 
        tw:max-w-7xl
        tw:h-[400px] tw:md:h-[450px] tw:lg:h-[550px]
        tw:rounded-3xl
        tw:overflow-hidden
        tw:shadow-xl
      "
        > */}
         <div
          className="
        tw:relative
        tw:md:w-[750px]
        tw:lg:w-full
        tw:h-[450px]
        tw:md:h-[400px]
        tw:lg:h-[500px]
        tw:rounded-3xl
        tw:overflow-hidden
        tw:shadow-xl
      "
        >
          {/* Background Image */}
          <img
            src="/images/hero-bg5.png"
            alt="Hero Background"
            className="tw:object-cover tw:w-full tw:h-full"
          />

          {/* Dark overlay */}
          <div className="tw:absolute tw:inset-0 tw:bg-black/60" />

          {/* Content */}
          <div
            className="
          tw:absolute tw:inset-0
          tw:flex tw:flex-col tw:items-center tw:justify-center
          tw:text-center tw:px-4 tw:sm:px-5 
        "
          >
            <h1 className="tw:text-white heading1 tw:font-bold tw:leading-tight tw:items-center">
              Empowering Your Business with
              <br />
              Tailored IT Solutions
            </h1>

            <p className="tw:text-white/90 tw:text-[16px] tw:leading-6 tw:md:text-shadow-md tw:mt-4 tw:max-w-2xl">
              Reliable, secure, and innovative IT services to help your business grow.
            </p>

            {/* Buttons */}
            <div className="tw:mt-8 tw:flex tw:gap-4 tw:flex-wrap tw:justify-center ">
              <Link
                href="/contact"
                className="
                tw:bg-primary
                tw:text-white
                tw:px-6 tw:py-3
                tw:rounded-full
                tw:font-medium
                tw:text-sm tw:md:text-base
                tw:hover:bg-[#1d8ae0]
                tw:transition
              "
              >
                Request a Consultation
              </Link>

              <Link
                href="/about"
                className="
                tw:bg-[#FF6A00]
                tw:text-white
                tw:px-6 tw:py-3
                tw:rounded-full
                tw:font-medium
                tw:text-sm tw:md:text-base
                tw:hover:bg-[#e67324]
                tw:transition
              "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
