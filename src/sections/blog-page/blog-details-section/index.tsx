"use client";

import Image from "next/image";

interface Point {
  text: string;
}

interface BlogDetailsProps {
  title?: string;
  points: Point[];
}

export default function BlogDetailsSection({ title, points }: BlogDetailsProps) {
  return (
    <section className="tw:w-full tw:py-6 tw:px-6 tw:lg:px-6 tw:flex tw:justify-center tw:mb-6 tw:md:mb-20">
      <div className="tw:max-w-4xl tw:w-full tw:space-y-10">

        {/* Title */}
        {title && (
          <h2 className="tw:text-[20px] tw:md:text-[30px] tw:font-semibold tw:text-black">
            {title}
          </h2>
        )}

        {/* Points */}
        <div className="tw:space-y-8">
          {points.map((item, index) => (
            <div key={index} className="tw:flex tw:items-start tw:gap-4">

              {/* Bullet Icon */}
              <Image
                src="/images/icons/bullet.svg"
                alt="bullet"
                width={18}
                height={18}
                className="tw:mt-1"
              />

              {/* Text */}
              <p className="tw:text-[16px] tw:md:text-[18px] tw:lg:text-[20px] tw:leading-4.5 tw:md:leading-6 tw:text-[#333]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
