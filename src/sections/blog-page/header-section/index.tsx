"use client";

export default function BlogHeader() {
  return (
    <section
      className="tw:w-full tw:py-34 tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:mt-20 tw:mb-8"
      style={{
        background: "linear-gradient(90deg, #0076B9 0%, #003553 100%)",
      }}
    >
      <h1 className="tw:text-white tw:text-[32px] tw:md:text-[48px] tw:font-semibold tw:mb-4">
        Blog
      </h1>

      <p className="tw:text-white/80 tw:max-w-2xl tw:px-4 tw:text-[16px] tw:md:text-[18px] tw:leading-5 tw:md:leading-6">
        Stay updated with industry trends, expert advice, and helpful resources designed to engage and inform.
      </p>
    </section>
  );
}
