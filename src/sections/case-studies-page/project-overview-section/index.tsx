"use client";

export default function ProjectOverviewSection() {
  return (
    <section className="tw:w-full tw:py-2 tw:md:py-20 tw:px-6 tw:md:px-10 tw:lg:px-10 tw:xl:px-6 tw:max-w-[1240px] tw:mx-auto ">
      <div className="tw:max-w-7xl tw:w-full tw:grid tw:grid-cols-1 tw:md:grid-cols-2 ">

        {/* LEFT SIDE TITLE */}
        <div>
          <h2 className="tw:text-[34px] tw:md:text-[40px] tw:lg:text-[44px] tw:font-semibold tw:text-black tw:leading-tight tw:md:max-w-2.5 tw:mb-6">
            Project Overview
          </h2>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="tw:space-y-4 tw:text-[16px] tw:md:text-[14px] tw:lg:text-[19px]  tw:leading-4.5 tw:md:leading-5.5 tw:max-w-[780px]">
          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum
            dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla
            pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus
            dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam
            morbi. Aliquet vitae interdum fermentum mauris pharetra massa.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum
            dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla
            pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus
            dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam
            morbi. Aliquet vitae interdum fermentum mauris pharetra massa.
          </p>
        </div>

      </div>
    </section>
  );
}
