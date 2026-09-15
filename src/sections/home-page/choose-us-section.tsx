'use client';

const barriers = [
  {
    title: 'Regulatory Compliance Risks',
    desc: 'Keeping pace with evolving financial and industry regulations while maintaining secure, compliant operational practices.',
  },
  {
    title: 'Sensitive Data Exposure',
    desc: 'Financial, customer, and proprietary information requires strong protection across applications, devices, users, and networks.',
  },
  {
    title: 'Disconnected Client Data',
    desc: 'Customer data spread across multiple legacy systems reduces operational visibility and creates redundant administrative work.',
  },
  {
    title: 'Manual Workflow Friction',
    desc: 'Repetitive paper or manual processes increase administrative effort, introduce human error, and slow down service delivery.',
  },
  {
    title: 'Limited Operational Visibility',
    desc: 'Disconnected systems and fragmented reporting make it harder for leadership teams to understand performance and make informed decisions.',
  },
  {
    title: 'Legacy Systems & Scalability',
    desc: 'Legacy platforms create security risks, integration hurdles, and scalability bottlenecks as business requirements evolve.',
  },
];

const approachSteps = [
  {
    step: '01',
    title: 'Assess',
    desc: 'Review your current technology environment, core systems, security risks, and operational priorities.',
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'Develop a practical, risk-managed roadmap aligned with business and compliance requirements.',
  },
  {
    step: '03',
    title: 'Implement',
    desc: 'Modernise, integrate, and secure the required technology infrastructure with minimal business disruption.',
  },
  {
    step: '04',
    title: 'Manage & Improve',
    desc: 'Continuously monitor, support, protect, and optimize your technology environment as your organization grows.',
  },
];

export default function ChooseUsSection() {
  return (
    <section className="tw:bg-[#F4F6F8] tw:w-full tw:py-24 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:border-b tw:border-slate-200/60">
      <div className="tw:mx-auto tw:max-w-[1440px]">
        
        {/* PART 1: Technology Barriers Grid */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
            COMMON CHALLENGES
          </span>
          <h2 className="tw:text-[32px] tw:sm:text-[42px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3 tw:leading-tight">
            Technology Barriers We Help Organisations Overcome
          </h2>
          <p className="tw:mt-4 tw:text-[16px] tw:text-slate-600 tw:leading-relaxed">
            Organisations operate in an environment where compliance, security, efficiency, and client trust are critical. We eliminate technology barriers that limit growth.
          </p>
        </div>

        {/* Vertical Barrier Cards */}
        <div className="tw:mt-14 tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6">
          {barriers.map((item, idx) => (
            <div
              key={idx}
              className="tw:bg-white tw:p-7 tw:rounded-2xl tw:border-t-4 tw:border-[#176AB3] tw:border-x tw:border-b tw:border-slate-200/80 tw:shadow-sm tw:hover:shadow-md tw:hover:-translate-y-1 tw:transition-all tw:duration-300 tw:flex tw:flex-col tw:justify-between"
            >
              <div>
                <div className="tw:w-9 tw:h-9 tw:rounded-lg tw:bg-[#EAF5FF] tw:text-[#176AB3] tw:font-bold tw:text-[13px] tw:flex tw:items-center tw:justify-center tw:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="tw:text-[17px] tw:font-extrabold tw:text-[#0B192C]">
                  {item.title}
                </h3>
                <p className="tw:mt-2.5 tw:text-[13.5px] tw:leading-relaxed tw:text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PART 2: Practical Approach Process Timeline */}
        <div className="tw:mt-24 tw:pt-20 tw:border-t tw:border-slate-200/80">
          <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
            <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
              OUR APPROACH
            </span>
            <h2 className="tw:text-[32px] tw:sm:text-[42px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3 tw:leading-tight">
              A Practical Approach to Secure Modernisation
            </h2>
            <p className="tw:mt-4 tw:text-[16px] tw:text-slate-600 tw:leading-relaxed">
              Netciples combines technology consulting, managed IT, cybersecurity, and software engineering capabilities to upgrade your environment without unnecessary disruption.
            </p>
          </div>

          {/* 4-Step Horizontal Timeline Grid */}
          <div className="tw:mt-16 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-4 tw:gap-8 tw:relative">
            {approachSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="tw:relative tw:bg-white tw:p-8 tw:rounded-2xl tw:border tw:border-slate-200/80 tw:shadow-sm tw:hover:shadow-lg tw:hover:border-[#176AB3]/40 tw:transition-all tw:duration-300"
              >
                {/* Step Circle Badge */}
                <div className="tw:w-12 tw:h-12 tw:rounded-xl tw:bg-[#176AB3] tw:text-white tw:font-black tw:text-[16px] tw:flex tw:items-center tw:justify-center tw:mb-6 tw:shadow-md tw:shadow-[#176AB3]/20">
                  {stepItem.step}
                </div>

                <h3 className="tw:text-[20px] tw:font-extrabold tw:text-[#0B192C]">
                  {stepItem.title}
                </h3>
                <p className="tw:mt-3 tw:text-[14px] tw:leading-relaxed tw:text-slate-600">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
