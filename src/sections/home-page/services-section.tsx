"use client";

import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Managed IT Services",
      desc: "Reliable network monitoring, dedicated support and seamless maintenance, ensuring your systems run smoothly every day.",
      icon: "/images/icons/managed-it.svg",
      link: "/service/#managed-it",
    },
    {
      title: "Cloud Solutions",
      desc: "Cloud migration made seamless, with secure infrastructure management, ensuring scalable and reliable performance.",
      icon: "/images/icons/cloud.svg",
      link: "/service/#cloud-solutions"
    },
    {
      title: "Software Development",
      desc: "End-to-end software development, from planning to deployment and support, crafted to grow with your business.",
      icon: "/images/icons/software.svg",
      link: "/service/#software-development",
    },
    {
      title: "Cybersecurity",
      desc: "Threat detection in real time, rapid incident response, and keeping your business protected around the clock.",
      icon: "/images/icons/cybersecurity.svg",
      link: "/service/#cybersecurity",
    },
  ];

  return (
    <section className="tw:w-full tw:py-20 tw:flex tw:flex-col tw:items-center tw:px-5 tw:mb-20">
      
      {/* Heading */}
      <h2 className="heading2 tw:font-bold tw:text-center tw:text-[#FF6A00]">
        Key Services
      </h2>

      <p className="tw:text-center tw:max-w-[400px] tw:md:max-w-xl tw:mt-4 body_text_style  tw:leading-6">
        Comprehensive technology solutions designed to enhance performance, strengthen
        security, and support long-term growth.
      </p>

      {/* Services Grid */}
      <div className="
        tw:mt-14 
        tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-2 tw:xl:grid-cols-4
        tw:gap-8
        tw:w-full tw:max-w-7xl
      " >
        
        {services.map((item, index) => (
          <div
            key={index}
            className="
              tw:bg-white 
              tw:rounded-3xl 
              tw:p-5 
              tw:border tw:border-solid tw:border-black/5
              tw:shadow-[0px_3px_8px_0px_#00000005]
              tw:hover:shadow-lg 
              tw:transition 
              tw:cursor-pointer 
            "
          >
            
            {/* Icon Box */}
            <div className=" tw:w-16 tw:h-16 tw:flex tw:items-center tw:justify-center tw:rounded-xl tw:mr-15 ">
              <Image
                src={item.icon}
                alt={item.title}
                width={84}
                height={64}
              />
            </div>

            {/* Title */}
            <h3 className="tw:text-[20px] tw:md:text-[22px] tw:font-semibold tw:text-[#FF6A00] tw:mt-19 tw:md:mt-18">
              {item.title}
            </h3>

            {/* Description */}
            <p className="tw:mt-3 body_text_style tw:leading-relaxed tw:max-w-xl">
              {item.desc}
            </p>

            {/* Read More */}
            <Link
              href={item.link}
              className="tw:mt-6 tw:flex tw:items-center tw:gap-2 tw:text-black tw:font-bold tw:text-[15px]"
            >
              Read more
              <Image
                src="/images/icons/arrow-right.svg"
                width={12}
                height={12}
                alt="arrow"
                className="tw:mt-1"
              />
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}
