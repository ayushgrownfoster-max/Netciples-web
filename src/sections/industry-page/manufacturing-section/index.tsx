"use client";

import Image from "next/image";
import { useState } from "react";

export default function ManufacturingSection() {
  const [hoverCard, setHoverCard] = useState<number | null>(1);

  return (
    <section id="manufacturing" className="tw:w-full tw:py-20 tw:flex tw:justify-center tw:px-4 tw:md:px-6 tw:lg:px-10 tw:mb-25">
      <div className="tw:md:max-w-3xl tw:lg:max-w-[1000px] tw:xl:max-w-[1240px] tw:mx-auto tw:w-full tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-10 tw:xl:gap-0">

        {/* LEFT CONTENT */}
        <div className="tw:flex tw:flex-col tw:items-center tw:max-w-[500px] tw:md:max-w-full tw:mx-auto tw:md:mx-0 tw:xl:max-w-[619px] tw:md:items-start tw:justify-start">
          <h2 className="heading2 tw:text-[#FF6A00] tw:w-full  tw:font-semibold tw:mb-6">
            Manufacturing
          </h2>

          <p className="body_text_style tw:leading-6 tw:lg:max-w-[420px] tw:xl:max-w-[490px]">
            Our IT solutions help manufacturers enhance productivity through IoT
            integration, advanced automation, and efficient supply chain management systems.
            We deliver reliable, scalable technology that streamlines operations and supports
            long-term growth for both large manufacturers and SMBs.
          </p>
        </div>

        {/* RIGHT SIDE (Vertical Cards) */}
        <div className="tw:relative tw:pl-8 tw:space-y-12 tw:max-w-[500px] tw:mx-auto tw:md:mx-0 tw:md:max-w-[621px]">

          {/* Vertical Line */}
          <div
            className="tw:absolute tw:top-0 tw:left-0 tw:w-1 tw:h-full tw:rounded-full tw:transition-all tw:duration-300"
            style={{
              background:
                hoverCard === 1
                  ? "linear-gradient(to bottom, #00A3FF 50%, #D9D9D9 50%)"
                  : "linear-gradient(to bottom, #D9D9D9 50%, #00A3FF 50%)",
            }}
          />

          {/* CARD 1 */}
          <div
            className="tw:flex tw:flex-col tw:md:flex-row tw:items-start tw:gap-6"
            onMouseEnter={() => setHoverCard(1)}
          >
            <Image
              src="/images/manufacturing1.png"
              alt="Manufacturing Tech"
              width={240}
              height={240}
              className="tw:rounded-xl tw:object-cover tw:w-[210px] tw:h-[250px]"
            />

            <div className="tw:flex tw:flex-col tw:gap-4 tw:pt-1">
              <h3 className="tw:text-[18px] tw:font-semibold tw:text-black">
                Manufacturing & Industrial Technology Solutions
              </h3>

              <p className="body_text_style tw:leading-6 tw:max-w-[621px]">
                We provide advanced IT solutions for manufacturing, including IoT integration
                and intelligent supply chain systems, helping SMBs streamline operations and
                boost efficiency.
              </p>

              <button className="tw:bg-primary tw:text-white tw:text-[14px] tw:px-6 tw:py-2 tw:rounded-full tw:w-fit tw:hover:bg-[#00a2ffbd] tw:transition">
                Explore
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="tw:flex tw:flex-col tw:md:flex-row tw:items-start tw:gap-6"
            onMouseEnter={() => setHoverCard(2)}
          >
            <Image
              src="/images/manufacturing2.png"
              alt="IT Solutions for SMBs"
              width={240}
              height={240}
              className="tw:rounded-xl tw:object-cover tw:w-[210px] tw:h-[250px]"
            />

            <div className="tw:flex tw:flex-col tw:gap-4 tw:pt-1">
              <h3 className="tw:text-[18px] tw:font-semibold tw:text-black">
                IT Solutions for Startups & SMB Growth
              </h3>

              <p className="body_text_style tw:leading-6 tw:max-w-full">
                We deliver affordable, scalable IT solutions designed to support startups
                and small businesses as they grow, innovate, and streamline their operations.
              </p>

              <button className="tw:bg-primary tw:text-white tw:text-[14px] tw:px-6 tw:py-2 tw:rounded-full tw:w-fit tw:hover:bg-[#00a2ffbd] tw:transition">
                Explore
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
