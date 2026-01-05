"use client";

interface Points {
  label: string;        // Bold text 
  description: string;  
}

interface Content {
  label?: string;       // Category heading 
  points: Points[];
}

interface CSRSectionProps {
  title: string;
  subtitle?: string;
  content: Content;
  bgColor?: string;
}

export default function CSRSection({ title, subtitle, content, bgColor }: CSRSectionProps) {
  return (
    <section className={`tw:w-full tw:py-15 tw:md:py-20 tw:px-6 tw:md:px-10 tw:lg:px-28 tw:flex tw:justify-center tw:max-w-[1440px] tw:mx-auto ${bgColor || ""}`}>
      <div className="tw:w-full tw:grid tw:grid-cols-1 tw:md:grid-cols-3 tw:gap-10 tw:md:gap-38 tw:lg:gap-78">

        {/* LEFT TITLE */}
        <div>
          <h2 className="tw:text-[34px] tw:md:text-[44px] tw:font-semibold tw:text-[#000000] tw:leading-tight">
            {title.split(" ")[0]}  {title.split(" ")[1]}
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className="tw:space-y-4 tw:text-[15px] tw:text-[#333] tw:leading-relaxed tw:max-w-[630px] tw:col-span-2">

          {/* Subtitle */}
          {subtitle && (
            <p className="tw:text-[16px] tw:md:text-[20px] tw:text-[#000000] tw:leading-4.5 tw:md:leading-6">
              {subtitle}
            </p>
          )}

          {/* Category Label (Key elements of the solution:) */}
          {content.label && (
            <p className="tw:text-[16px] tw:mt-12.5 tw:md:text-[20px] tw:text-[#000000]">
              {content.label}
            </p>
          )}

          {/* POINTS */}
          {content.points.map((item, index) => (
            <p key={index} className="tw:text-[16px] tw:md:text-[20px] tw:leading-4.5 tw:md:leading-6">
              <span className="tw:font-semibold">{item.label}</span> – {item.description}
            </p>
          ))}

        </div>

      </div>
    </section>
  );
}
