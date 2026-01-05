"use client";

import Image from "next/image";

export default function CEOSection() {
  return (
    <section className="tw:w-full tw:py-20 tw:px-6 tw:flex tw:justify-center tw:bg-[#EDF6FF] tw:rounded-3xl tw:mt-20">
      <div className="tw:max-w-4xl tw:w-full tw:text-center tw:flex tw:flex-col tw:items-center tw:gap-6">

        {/* Avatar */}
        <Image
          src="/images/ceo-avatar.png" 
          alt="CEO"
          width={95}
          height={95}
          className="tw:rounded-full tw:object-cover tw:-mt-5"
        />

        {/* Quote */}
        <p className="tw:text-[13px] tw:md:text-[16px] tw:lg:text-[18px] tw:text-[#000000] tw:max-w-[680px] tw:leading-relaxed">
          “Lorem ipsum dolor sit amet consectetur. Quisque platea placerat non nulla tellus nulla nulla nec sollicitudin. 
          Maecenas sapien in nibh dictum diam in at aliquam. Quis lobortis quisque phasellus nibh gravida non habitant. 
          Velit nec augue dis quis. Laoreet pretium fringilla elementum.”
        </p>

        {/* Name + Position */}
        <div>
          <h3 className="tw:text-[16px] tw:md:text-[20px] tw:font-semibold">Abby McInerney</h3>
          <p className="tw:text-[18px] tw:text-gray-600">CEO</p>
        </div>

      </div>
    </section>
  );
}
