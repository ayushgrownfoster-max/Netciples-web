"use client";

import Image from "next/image";

export default function SecuritySection() {
  return (
    <section className="tw:w-full tw:py-6 tw:lg:py-16 tw:flex tw:justify-center tw:px-6">
      <div className="tw:max-w-[1230px] tw:w-full">

        <div className="
          tw:flex tw:flex-col tw:lg:flex-row 
          tw:items-center tw:gap-6 tw:md:gap-14
          tw:bg-[#00A3FF0F] 
          tw:p-2 tw:md:p-6 tw:lg:p-0.5 
          tw:rounded-3xl
        ">
          
          {/* LEFT IMAGE */}
          <div className="tw:w-full tw:lg:w-[500px] tw:flex tw:justify-center">
            <Image
              src="/images/security2.jpg" 
              alt="Security"
              width={700}
              height={450}
              className="tw:w-[499px] tw:h-[250px] tw:md:h-[390px] tw:lg:h-[480px] tw:object-cover tw:rounded-tl-[20px] tw:rounded-tr-[20px] tw:lg:rounded-tl-[20px] tw:lg:rounded-bl-[20px] "
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="tw:w-full tw:lg:max-w-[580px] tw:text-[16px] tw:text-justify tw:lg:text-left tw:md:text-[16px] tw:lg:text-[20px] tw:text-[#000000] tw:leading-4.5 tw:md:leading-6">
            <p>
              Lorem ipsum dolor sit amet consectetur. Quisque platea placerat 
              non nulla tellus nulla nulla nec sollicitudin. Maecenas sapien in 
              nibh dictum diam in at aliquam. Quis lobortis quisque phasellus 
              nibh gravida non habitant. Velit nec augue dis quis. Laoreet 
              pretium fringilla elementum cursus suspendisse lacus. Id fames 
              porttitor porttitor odio vitae eleifend id. Bibendum nunc faucibus 
              consectetur et. Integer nunc nec volutpat fames duis odio 
              adipiscing in mauris. Laoreet aliquet et viverra venenatis nec 
              maecenas sed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
