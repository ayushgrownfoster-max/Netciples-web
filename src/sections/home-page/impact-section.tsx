"use client";

export default function ImpactSection() {
  const impactData = [
    {
      title: "Clients",
      desc: "Supporting businesses across Australia with reliable IT solutions tailored to their needs.",
    },
    {
      title: "Projects Delivered",
      desc: "Cloud migrations, software builds, cybersecurity deployments, and managed IT transformations.",
    },
    {
      title: "System Uptime Guarantee",
      desc: "Backed by SLAs and proactive monitoring.",
    },
    {
      title: "Years of Experience",
      desc: "Proven years of experience delivering reliable IT solutions and driving business growth.",
    },
  ];

  return (
    <section className="tw:w-full tw:py-24 tw:px-5 tw:flex tw:flex-col tw:items-center tw:-mt-20 tw:lg:mt-0">
      {/* Heading */}
      <h2 className="heading2 tw:font-bold tw:text-center tw:text-[#FF6A00]">
        Our Impact
      </h2>

      {/* Subtitle */}
      <p className="tw:text-center tw:max-w-[450px] tw:md:max-w-xl tw:mt-4 body_text_style tw:leading-6">
        Consistent results backed by measurable improvements, proven processes, and long-term
        partnerships with multiple clients across Australia.
      </p>

      {/* Impact Cards */}
      <div
        className="
        tw:mt-8 tw:md:mt-16
        tw:grid 
        tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-4 
        tw:gap-8
        tw:w-full tw:max-w-6xl
      "
      >
        {impactData.map((item, index) => (
          <div
            key={index}
            className="
              tw:bg-white
              tw:rounded-3xl
              tw:px-8 tw:lg:px-4 tw:xl:px-6 
              tw:py-10
              tw:flex tw:flex-col tw:items-center
              tw:text-center
              tw:border tw:border-solid tw:border-black/5
              tw:shadow-[0px_3px_8px_0px_#00000005]
              tw:hover:shadow-lg
              tw:transition
              tw:justify-start
            "
          >
            <h4 className="tw:text-[20px] tw:md:text-[22px] tw:font-semibold tw:text-black">
              {item.title}
            </h4>

            <p className="tw:mt-3 body_text_style tw:leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
