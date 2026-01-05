'use client';

import Link from 'next/link';

type MissionProps = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  buttonText: string;
  reverse: boolean;
};

export default function CommonSection({
  id,
  title,
  paragraphs,
  image,
  imageAlt,
  buttonText,
  reverse,
}: MissionProps) {
  return (
    <section id={id} className="tw:py-8 tw:sm:py-13 tw:md:py-15  tw:lg:py-25 tw:px-4 tw:md:px-6 tw:lg:px-10 tw:xl:px-10 tw:2xl:px-20">
      <div className="tw:md:max-w-3xl tw:lg:max-w-[1000px] tw:xl:max-w-[1240px] tw:w-full tw:mx-auto tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-10 tw:xl:gap-0 tw:items-center">
        <div
          className={` 
            tw:md:max-w-[619px]  tw:xl:mx-0 tw:flex
            ${reverse ? 'tw:md:order-2 tw:justify-center tw:md:justify-end' : 'tw:order-1 tw:justify-center tw:md:justify-start'}
          `}
        >
          <img
            src={image}
            alt={imageAlt}
            className="tw:md:w-[320px] tw:md:h-[400px] tw:lg:w-[420px] tw:lg:h-[500px] tw:xl:w-[499px] tw:xl:h-[600px] tw:rounded-xl tw:object-cover"
          />
        </div>

        <div
          className={`
             tw:max-w-[500px] tw:md:max-w-[621px] tw:mx-auto tw:md:mx-0
            ${reverse ? 'tw:md:order-1' : 'tw:order-2'}
          `}
        >
          <h2
            className="heading2 tw:text-[#FF6A00] tw:font-semibold tw:mb-3 tw:max-w-[621px]"
          >
            {title}
          </h2>

          <div className="tw:max-w-[621px]">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="body_text_style tw:leading-6 tw:mb-4 tw:text-justify tw:sm:text-left"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="tw:max-w-[621px] tw:flex tw:sm:block tw:justify-start tw:sm:justify-start tw:items-center tw:sm:items-start ">
            <Link href="#">
              <button
                className="tw:bg-primary tw:text-white tw:text-[14px] tw:sm:text-[18px] tw:px-7 tw:max-w-fit tw:h-[50px] tw:text-center tw:rounded-3xl tw:cursor-pointer tw:hover:bg-[#1d8ae0] tw:mt-2"
              >
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
