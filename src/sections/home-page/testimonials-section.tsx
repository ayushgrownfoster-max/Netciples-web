'use client';

const testimonials = [
  {
    quote: 'Netciples transformed our IT infrastructure completely. Their team understood our business needs and delivered a solution that genuinely improved our operations from day one.',
    author: 'James Thornton',
    company: 'Thornton Capital Group',
    industry: 'Finance',
  },
  {
    quote: 'Working with Netciples on our custom software project was seamless. They kept us informed throughout and delivered exactly what we needed on time and on budget.',
    author: 'Sarah Okonkwo',
    company: 'PrimeMart Retail',
    industry: 'Retail & E-commerce',
  },
  {
    quote: 'Their IT consulting team helped us build a clear technology roadmap. For the first time we have a strategy that truly aligns with where we want to take the business.',
    author: 'David Lim',
    company: 'Lim Manufacturing Solutions',
    industry: 'Manufacturing',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="tw:bg-[#F4F6F8] tw:w-full tw:py-24 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:border-b tw:border-slate-200/60">
      <div className="tw:mx-auto tw:max-w-[1440px]">
        
        {/* Header */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="tw:text-[32px] tw:sm:text-[42px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3 tw:leading-tight">
            What Our Clients Say
          </h2>
          <p className="tw:mt-3 tw:text-[16px] tw:text-slate-600">
            Real feedback from executive and technical leaders partnering with Netciples.
          </p>
        </div>

        {/* 3 Vertical Testimonial Cards */}
        <div className="tw:mt-16 tw:grid tw:grid-cols-1 tw:md:grid-cols-3 tw:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="tw:bg-white tw:border-t-4 tw:border-[#176AB3] tw:border-x tw:border-b tw:border-slate-200/80 tw:p-8 tw:rounded-2xl tw:flex tw:flex-col tw:justify-between tw:shadow-sm tw:hover:shadow-xl tw:hover:-translate-y-1 tw:transition-all tw:duration-300"
            >
              <div>
                {/* Top Quote Icon */}
                <div className="tw:text-[44px] tw:font-serif tw:leading-none tw:text-[#176AB3] tw:mb-3">
                  “
                </div>

                {/* Quote Text */}
                <p className="tw:text-[14.5px] tw:text-slate-700 tw:leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author & Company Details */}
              <div className="tw:mt-8 tw:pt-5 tw:border-t tw:border-slate-100">
                <h3 className="tw:text-[16px] tw:font-extrabold tw:text-[#0B192C]">
                  {item.author}
                </h3>
                <p className="tw:text-[13px] tw:font-medium tw:text-slate-500 tw:mt-0.5">
                  {item.company} · <span className="tw:text-[#176AB3] tw:font-semibold">{item.industry}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
