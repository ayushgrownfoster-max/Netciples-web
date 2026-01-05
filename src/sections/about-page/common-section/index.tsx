'use client';

type MissionProps = {
  id?: string;
  title: string;
  highlightText?: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  bottom?:boolean
};

export default function CommonSection({
  id,
  title,
  highlightText,
  paragraphs,
  image,
  imageAlt,
  bottom
}: MissionProps) {
  return (
    <section id={id}  className={`tw:py-10 tw:px-4 tw:md:px-6 tw:xl:px-20 ${bottom?'tw:mb-40':'tw:mb-0'}`}>
      <div
        className={`
          tw:max-w-[1250px] tw:w-full tw:mx-auto
          tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-12 tw:md:gap-0 tw:items-center
        `}
      >
        <div className="tw:md:max-w-[700px] tw:flex  tw:justify-start  tw:order-2 tw:sm:order-1 tw:xl:mx-0">
          <img
            src={image}
            alt={imageAlt}
            className="tw:md:w-[320px] tw:md:h-[400px] tw:lg:w-[420px] tw:lg:h-[500px] tw:xl:w-[499px] tw:xl:h-[600px] tw:rounded-xl tw:object-cover"
          />
        </div>

        <div className=" tw:max-w-[500px] tw:md:max-w-full tw:mx-auto tw:md:mx-0 tw:order-1 tw:sm:order-2">
          <h2
            className="heading2 tw:font-bold tw:mb-3 tw:max-w-[550px] tw:text-[#FF6A00]"
          >
            {title}
          </h2>

          {highlightText && (
            <p className="body_text_style tw:max-w-[590px] tw:leading-6 tw:mb-4 tw:text-justify tw:sm:text-left">
              {highlightText}
            </p>
          )}

          <div className="tw:max-w-[550px]">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="body_text_style tw:leading-6 tw:text-[#000000] tw:mb-4 tw:text-justify tw:sm:text-left"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
