'use client';

import { CONFIG } from '@/global-config';

export default function TrustSection() {
  return (
    <section className="tw:w-full tw:pt-32 tw:sm:pt-40 tw:pb-5 tw:px-4 tw:md:px-10 tw:lg:px-20">
      <div className="tw:text-center tw:flex tw:items-center tw:flex-col  tw:mx-auto tw:mb-12">
        <h1 className="heading1 tw:text-[#FF6A00] tw:max-w-[400px] tw:md:max-w-[800px] tw:lg:max-w-5xl tw:font-bold tw:leading-7 tw:sm:leading-8 tw:md:leading-14 tw:lg:leading-16">
          Building Trust Through Innovation, Integrity,
          and Expertise
        </h1>

        <p className="body_text_style tw:mt-3 tw:leading-6 tw:max-w-[450px] tw:md:max-w-[700px] tw:xl:max-w-[860px]">
          We support your growth with trusted IT consulting and end-to-end software solutions, built
          on transparency and long-term partnership. With Netciples, you gain a dedicated team
          committed to your success.
        </p>
        <div className="tw:flex tw:justify-center tw:mt-[70px] tw:max-w-7xl">
          <img
            src={`${CONFIG.assetsDir}/images/about.png`}
            alt="Team Working"
            className="
            tw:md:w-[750px] tw:md:h-[400px]
            tw:xl:w-[950px] tw:xl:h-[450px]
            tw:rounded-2xl tw:object-cover
          "
          />
        </div>
      </div>
    </section>
  );
}
