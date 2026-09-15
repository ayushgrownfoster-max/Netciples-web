'use client';

const stats = [
  { value: '99.9%', label: 'Infrastructure Uptime SLA', desc: 'Continuous proactive monitoring and automated failover for enterprise cloud platforms.' },
  { value: '15 Min', label: 'Average Response SLA', desc: 'Rapid technical triage and senior engineer response times for critical support tickets.' },
  { value: '100+', label: 'Organisations Supported', desc: 'Trusted by business leaders across finance, professional services, retail, and healthcare.' },
  { value: '98%', label: 'Client Partnership Retention', desc: 'Long-term strategic relationships built on architectural transparency and proven ROI.' },
];

export default function ImpactSection() {
  return (
    <section className="tw:relative tw:bg-[#0B192C] tw:text-white tw:w-full tw:py-24 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:overflow-hidden">
      {/* Background Subtle Blur Orbs */}
      <div className="tw:absolute tw:top-1/2 tw:left-1/4 tw:-translate-y-1/2 tw:w-96 tw:h-96 tw:bg-[#176AB3]/20 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />
      <div className="tw:absolute tw:top-1/2 tw:right-1/4 tw:-translate-y-1/2 tw:w-96 tw:h-96 tw:bg-[#00A3FF]/15 tw:rounded-full tw:blur-3xl tw:pointer-events-none" />

      <div className="tw:relative tw:mx-auto tw:max-w-[1440px]">
        {/* Header */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#00A3FF] tw:bg-white/10 tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-white/15">
            PROVEN PERFORMANCE
          </span>
          <h2 className="tw:text-[32px] tw:sm:text-[42px] tw:font-extrabold tw:mt-3 tw:text-white tw:leading-tight">
            Measurable SLA Metrics &amp; Operational Impact
          </h2>
          <p className="tw:mt-3 tw:text-[16px] tw:text-slate-300">
            Real performance standards engineered to keep your business online, protected, and performing at its best.
          </p>
        </div>

        {/* 4 Stat Vertical Cards Grid */}
        <div className="tw:mt-16 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-4 tw:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="tw:bg-white/5 tw:backdrop-blur-md tw:border-t-4 tw:border-[#00A3FF] tw:border-x tw:border-b tw:border-white/10 tw:p-7 tw:rounded-2xl tw:text-center tw:flex tw:flex-col tw:items-center tw:justify-between tw:hover:border-[#00A3FF] tw:hover:bg-white/10 tw:hover:-translate-y-1 tw:transition-all tw:duration-300"
            >
              <div>
                <div className="tw:text-[40px] tw:sm:text-[46px] tw:font-black tw:text-[#00A3FF] tw:tracking-tight tw:leading-none">
                  {stat.value}
                </div>
                <h3 className="tw:text-[17px] tw:font-extrabold tw:text-white tw:mt-3">
                  {stat.label}
                </h3>
                <p className="tw:text-[13px] tw:text-slate-300 tw:mt-3 tw:leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
