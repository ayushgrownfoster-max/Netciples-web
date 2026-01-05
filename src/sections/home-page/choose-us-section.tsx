'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ChooseUsSection() {
  const features = [
    {
      title: 'Personalized Service',
      desc: 'Dedicated IT account managers, and tailored solutions based on your business needs.',
      icon: '/images/icons/service.svg',
    },
    {
      title: 'Cutting Edge Technology',
      desc: 'Innovative solutions built with the latest technology to future-proof your business.',
      icon: '/images/icons/technology.svg',
    },
    {
      title: '24/7 Support',
      desc: 'Average response time: 8 minutes. Support resolution rate: 92% within the first 24 hours.',
      icon: '/images/icons/support.svg',
    },
    {
      title: 'Experienced Team',
      desc: 'A team of certified engineers and IT professionals.',
      icon: '/images/icons/team1.svg',
      width:'32px'
    },
  ];

  return (

      <section className="tw:w-full tw:py-8 tw:px-7 tw:lg:px-7 tw:xl:px-5 tw:flex tw:flex-col tw:items-center tw:mb-20 tw:-mt-20 tw:md:-mt-10 tw:lg:mt-0">
        
        {/* <div
          className="tw:bg-[#00a2ff0e] tw:text-primary tw:px-6 tw:py-2 tw:rounded-full tw:text-[16px] tw:md:text-[18px] tw:font-bold tw:border tw:border-[#CDE6FF]"
          
        >
          Why Choose US
        </div> */}

        <Link href="/about#our-approach">
        <div
          className="tw:bg-[#00a2ff0e] tw:text-primary tw:px-6 tw:py-2 tw:rounded-full
                    tw:text-[16px] tw:md:text-[18px] tw:font-bold
                    tw:border tw:border-[#CDE6FF]
                    tw:cursor-pointer tw:hover:bg-primary
                    tw:hover:text-white tw:transition-all"
        >
          Why Choose Us
        </div>
       </Link>

        
        <h2
          className="heading2 tw:font-bold tw:mt-6 tw:text-center tw:text-[#FF6A00]"
        >
          What Makes Us Different
        </h2>

        <p
          className=" tw:text-center tw:mt-4 tw:max-w-[400px] tw:md:max-w-xl body_text_style tw:leading-6"
        >
          Our certified experts, fast response times, and personalized support ensure your business
          stays online, protected, and future-ready.
        </p>

        {/* Section Grid */}
        <div className="tw:mt-16 tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-20 tw:lg:gap-0 tw:w-full tw:sm:max-w-7xl tw:items-center">
          {/* LEFT SIDE FEATURES */}
          <div
            className="tw:flex tw:flex-col tw:gap-6 tw:order-2 tw:lg:order-1 "
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="tw:bg-white tw:p-3 tw:rounded-2xl tw:flex tw:items-start tw:gap-4 tw:shadow-sm card"
              >
                <div className={`${item.width ? `tw:w-[${item.width}] tw:sm:w-16`:'tw:w-16'} tw:h-16 tw:flex tw:items-center tw:justify-center `}>
                  <Image src={item.icon} alt={item.title} width={38} height={36} />
                </div>

                <div>
                  <h3 className="tw:text-[16px] tw:md:text-[20px] tw:font-semibold tw:text-black">{item.title}</h3>
                  <p className="body_text_style tw:leading-relaxed tw:mt-1 tw:max-w-full tw:md:max-w-90 desc-text ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
           <div
            className="tw:relative tw:flex tw:w-min tw:justify-center tw:justify-self-center tw:lg:justify-self-end tw:order-1 tw:lg:order-2 tw:mr-4 tw:md:mr-5"
          >
            {/* BLUE BOX IMAGE */}
            <div className="box tw:w-full tw:h-full tw:rounded-[20px] tw:md:rounded-[34px] tw:bg-[#00A3FFB2] tw:absolute tw:top-4 tw:md:top-5 tw:left-4 tw:md:left-5" />

            {/* HANDS IMAGE */}
            <div
              className="tw:relative tw:z-10 tw:w-60 tw:h-60 tw:sm:w-[270px] tw:sm:h-[270px] tw:md:w-[370px] tw:md:h-[370px] tw:lg:w-[410px] tw:lg:h-[410px] tw:xl:w-[460px] tw:xl:h-[438px]"
            >
              <Image
                src="/images/make2.png"
                alt="Team Hands"
                fill
                className="hands tw:object-cover tw:rounded-[20px] tw:md:rounded-[30px] tw:shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
