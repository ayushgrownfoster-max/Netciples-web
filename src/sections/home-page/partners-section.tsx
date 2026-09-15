'use client';

const partners = [
  {
    name: 'Microsoft',
    status: 'Solutions Partner & Cloud Expert',
    color: 'tw:hover:border-blue-500',
    logo: (
      <svg className="tw:h-9 tw:w-auto" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: 'Amazon Web Services',
    status: 'AWS Advanced Tier Partner',
    color: 'tw:hover:border-amber-500',
    logo: (
      <svg className="tw:h-9 tw:w-auto tw:text-[#FF9900]" viewBox="0 0 80 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 28.5c-3.2 2.3-7.8 3.5-11.8 3.5-5.6 0-10.6-2-14.4-5.4l1.9-2.3c3.2 2.9 7.4 4.6 12.2 4.6 3.6 0 7.4-1 9.9-2.8l2.2 2.4zm10.7-18.7v18.7h-3.4v-1.8c-1.8 1.5-4.2 2.2-6.7 2.2-5.4 0-9.2-3.8-9.2-8.7 0-5.2 4.1-8.7 9.8-8.7 2.2 0 4.2.6 5.9 1.7v-3.4c0-3.3-2.4-5.1-6.4-5.1-2.9 0-5.8 1-8.1 2.6l-1.7-2.6c2.9-2 6.6-3.2 10.4-3.2 6.1 0 9.4 3.1 9.4 8.3zm-3.4 11.2v-6c-1.4-.9-3-1.4-4.8-1.4-3.7 0-6.1 2.2-6.1 5.4 0 3.1 2.2 5.3 5.7 5.3 1.9 0 3.8-.7 5.2-1.9zm44.2 4.8l-1.9 2.5c-7.9 5.8-17.7 9.1-27.6 9.1-13.8 0-26.2-5.5-35.2-14.7l2.2-2.2c8.3 8.5 19.8 13.6 32.7 13.6 9.2 0 18.2-3.1 25.6-8.5zm3.6-2.2c-.6-.7-3.9-1-5.3-1.2-1.4-.2-1.7-.8-1.1-1.3 1.2-1.1 5.4-1.2 6.2-.2.8 1 .5 2.1.2 2.7z" />
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    status: 'Google Cloud Partner',
    color: 'tw:hover:border-red-500',
    logo: (
      <svg className="tw:h-9 tw:w-auto" viewBox="0 0 537 325" xmlns="http://www.w3.org/2000/svg">
        <path d="M438.5 162.5c0-10.3-.9-20.1-2.6-29.6H270v56.1h94.7c-4.1 22.1-16.5 40.8-35.2 53.3v44.3h57c33.3-30.7 52-75.9 52-124.1z" fill="#4285F4" />
        <path d="M270 334c47.5 0 87.4-15.7 116.5-42.6l-57-44.3c-15.8 10.6-36 16.9-59.5 16.9-45.8 0-84.6-30.9-98.4-72.5H112v45.7C141 295.1 200.7 334 270 334z" fill="#34A853" />
        <path d="M171.6 191.5c-3.5-10.6-5.5-22-5.5-33.8s2-23.2 5.5-33.8V78.2H112C100.2 101.7 93.5 128.8 93.5 157.7s6.7 56 18.5 79.5l59.6-45.7z" fill="#FBBC05" />
        <path d="M270 78c25.9 0 49.1 8.9 67.4 26.4l50.5-50.5C357.3 25.7 317.5 8 270 8c-69.3 0-129 38.9-158 97.7l59.6 45.7C185.4 108.9 224.2 78 270 78z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: 'Cisco Systems',
    status: 'Certified Networking Partner',
    color: 'tw:hover:border-cyan-500',
    logo: (
      <svg className="tw:h-9 tw:w-auto tw:text-[#00BCEB]" viewBox="0 0 100 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="24" width="4" height="16" rx="2" />
        <rect x="18" y="16" width="4" height="24" rx="2" />
        <rect x="30" y="8" width="4" height="32" rx="2" />
        <rect x="42" y="16" width="4" height="24" rx="2" />
        <rect x="54" y="8" width="4" height="32" rx="2" />
        <rect x="66" y="16" width="4" height="24" rx="2" />
        <rect x="78" y="24" width="4" height="16" rx="2" />
      </svg>
    ),
  },
  {
    name: 'Druva',
    status: 'Enterprise Backup Partner',
    color: 'tw:hover:border-emerald-500',
    logo: (
      <svg className="tw:h-9 tw:w-auto tw:text-[#00A3E0]" viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6C11.4 6 6 11.4 6 18s5.4 12 12 12c5.3 0 9.8-3.5 11.3-8.3C30.4 20.6 29 18.5 27 18.2c-2-.3-3.8 1.1-4.2 3.1-.7 2.2-2.7 3.7-5 3.7-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3c1.9 0 3.6 1 4.5 2.6l4-2.3C24.7 9.8 21.6 6 18 6z" />
        <text x="36" y="26" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#00A3E0">druva</text>
      </svg>
    ),
  },
];

export default function PartnersSection() {
  return (
    <section className="tw:bg-slate-50 tw:w-full tw:py-20 tw:px-5 tw:sm:px-8 tw:lg:px-12">
      <div className="tw:mx-auto tw:max-w-[1440px]">
        {/* Header */}
        <div className="tw:text-center tw:max-w-3xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#FF5F20] tw:bg-[#FFF2EC] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#FFD7C7]">
            OUR ECOSYSTEM
          </span>
          <h2 className="tw:text-[30px] tw:sm:text-[38px] tw:font-bold tw:text-slate-900 tw:mt-3">
            Industry-Leading Technology Partners
          </h2>
          <p className="tw:mt-3 tw:text-[15px] tw:text-slate-600">
            We partner with world-class cloud providers, hardware leaders, and security pioneers to engineer best-in-class enterprise architectures.
          </p>
        </div>

        {/* 5 Vertical Partner Cards with Company Logos */}
        <div className="tw:mt-12 tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-5 tw:gap-5">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`tw:bg-white tw:p-6 tw:rounded-2xl tw:border-t-4 tw:border-[#176AB3] tw:border-x tw:border-b tw:border-slate-200 tw:shadow-sm tw:flex tw:flex-col tw:items-center tw:justify-between tw:text-center tw:hover:shadow-lg tw:hover:-translate-y-1 ${partner.color} tw:transition-all tw:duration-300`}
            >
              <div className="tw:w-full tw:flex tw:flex-col tw:items-center">
                {/* Company Logo Container */}
                <div className="tw:h-14 tw:w-full tw:flex tw:items-center tw:justify-center tw:mb-2">
                  {partner.logo}
                </div>
                
                {/* Company Name */}
                <div className="tw:font-extrabold tw:text-[16px] tw:text-[#0B192C]">
                  {partner.name}
                </div>

                {/* Status Badge */}
                <div className="tw:mt-3 tw:text-[11px] tw:font-bold tw:text-slate-600 tw:uppercase tw:tracking-wider tw:bg-slate-50 tw:px-3 tw:py-1.5 tw:rounded-lg tw:border tw:border-slate-200/80 tw:w-full">
                  {partner.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
