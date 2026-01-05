'use client';

import { CONFIG } from "@/global-config";

export default function LifeAtNetciples() {
  const items = [
    {
      title: 'Culture of Innovation:',
      desc: 'Work in an environment that encourages new ideas, creativity, and modern problem-solving.',
    },
    {
      title: 'Collaborative Teamwork:',
      desc: 'Join a supportive team where everyone grows together and contributes to meaningful projects.',
    },
    {
      title: 'Flexible Work Approach:',
      desc: 'Enjoy a balanced work style that values productivity, comfort, and individual needs.',
    },
    {
      title: 'Continuous Learning:',
      desc: 'Access opportunities for training, upskilling, and professional development to advance your career.',
    },
    {
      title: 'Impactful Work:',
      desc: 'Contribute to real solutions that help businesses thrive and evolve in the digital world.',
    },
  ];

  return (
    <section className=" tw:py-10 tw:sm:py-20 tw:px-4 tw:md:px-6 tw:xl:px-6">
      <h2 className="tw:text-center heading2 tw:font-semibold tw:mb-14 tw:-mt-20 tw:lg:mt-0 tw:text-[#FF6A00]">
        <div>Why work at Netciples?</div>
      </h2>

      <div className="
        tw:flex tw:flex-wrap tw:max-w-[1440px] tw:mx-auto tw:justify-center tw:gap-6
      ">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              tw:bg-white tw:p-5 tw:rounded-3xl
              tw:w-full tw:max-w-[330px] tw:border tw:border-[rgba(0,0,0,0.04)] tw:shadow-[0px_3px_8px_0px_#00000005] tw:lg:max-w-[350px] tw:min-h-60
              tw:shrink-0
            "
          >
            <div className="tw:bg-[#FFFFFF]  tw:border-[0.32px] tw:border-[rgba(0,0,0,0.05)] tw:w-15 tw:h-15 tw:flex tw:items-center tw:justify-center tw:rounded-lg tw:mb-[30px]">
              <span className="tw:text-xl"><img src={`${CONFIG.assetsDir}/images/icons/black_star.svg`} width={26} height={26} alt="star" /></span>
            </div>

            <h3 className="tw:text-[21px] tw:lg:text-[22px] tw:font-semibold tw:mb-2">{item.title}</h3>

            <p className="body_text_style tw:leading-6">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
