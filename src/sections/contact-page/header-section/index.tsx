'use client';

export default function ContactSection() {
  return (
    <section className="tw:w-full tw:pt-28 tw:md:pt-30 tw:lg:pt-35 tw:pb-5 tw:sm:pb-0 tw:px-4 tw:md:px-10 tw:lg:px-20">
      <div className="tw:text-center tw:flex tw:items-center tw:flex-col  tw:mx-auto tw:lg:mb-12">
        <h1 className="heading2 tw:text-[#FF6A00] tw:max-w-[500px] tw:md:max-w-[800px] tw:lg:max-w-5xl tw:xl:max-w-6xl tw:font-bold tw:leading-7 tw:sm:leading-8 tw:md:leading-13 tw:xl:leading-18">
          Contact Us
        </h1>

        <p className="body_text_style tw:mt-3  tw:leading-6 tw:max-w-[500px] tw:sm:max-w-[555px] tw:md:max-w-[655px]">
          Reach out to us for IT solutions, collaboration opportunities, or recruitment queries. Our team is ready to understand your needs and guide you forward.
        </p>
      </div>
    </section>
  );
}