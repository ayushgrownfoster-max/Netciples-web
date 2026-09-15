'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does Netciples protect sensitive financial and client data?',
    answer: 'Netciples implements secure technology solutions aligned with regulatory requirements, using encryption, multi-factor authentication, and zero-trust access controls to protect sensitive financial and client data across all environments.',
  },
  {
    question: 'How do you handle backup, recovery, and business continuity?',
    answer: 'We partner with enterprise backup solutions (such as Druva) to deploy automated cloud backups and multi-site network failovers. This ensures your organization experiences minimal downtime and complete data resilience.',
  },
  {
    question: 'Can Netciples modernize legacy applications without business disruption?',
    answer: 'Yes, Netciples specializes in upgrading legacy platforms and integrating fragmented business applications into modern cloud architecture with minimal disruption to your daily operations.',
  },
  {
    question: 'What Managed IT Services & Support SLAs are available?',
    answer: 'We offer complete proactive management including 24/7 network monitoring, Microsoft 365 administration, cybersecurity protection, dedicated helpdesk support, and guaranteed 15-minute response SLAs for critical issues.',
  },
  {
    question: 'How do we begin a strategic IT consultation with Netciples?',
    answer: 'You can schedule an initial discovery call with our senior engineering team. We evaluate your current architecture, discuss your operational priorities, and present a practical technology roadmap tailored to your budget and growth targets.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="tw:bg-white tw:w-full tw:py-24 tw:px-5 tw:sm:px-8 tw:lg:px-12 tw:border-b tw:border-slate-200/60">
      <div className="tw:mx-auto tw:max-w-[840px]">
        
        {/* Header */}
        <div className="tw:text-center tw:max-w-2xl tw:mx-auto">
          <span className="tw:inline-block tw:text-[12px] tw:font-bold tw:uppercase tw:tracking-widest tw:text-[#176AB3] tw:bg-[#EAF5FF] tw:px-3.5 tw:py-1 tw:rounded-md tw:border tw:border-[#BDE0FE]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="tw:text-[30px] tw:sm:text-[38px] tw:font-extrabold tw:text-[#0B192C] tw:mt-3">
            Frequently Asked Questions
          </h2>
          <p className="tw:mt-3 tw:text-[15.5px] tw:text-slate-600">
            Find answers to common questions regarding Netciples technology solutions, cybersecurity standards, and consulting engagements.
          </p>
        </div>

        {/* Vertical Accordion Stack */}
        <div className="tw:mt-12 tw:flex tw:flex-col tw:gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`tw:bg-white tw:border tw:rounded-2xl tw:overflow-hidden tw:transition-all tw:shadow-sm ${
                  isOpen ? 'tw:border-[#176AB3] tw:border-t-4 tw:shadow-md' : 'tw:border-slate-200/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="tw:w-full tw:px-7 tw:py-5.5 tw:flex tw:items-center tw:justify-between tw:text-left tw:font-extrabold tw:text-[16px] tw:sm:text-[17.5px] tw:text-[#0B192C] tw:hover:text-[#176AB3] tw:transition-colors tw:focus:outline-none"
                >
                  <span className="tw:pr-4">{faq.question}</span>
                  <span className={`tw:shrink-0 tw:w-8 tw:h-8 tw:rounded-full tw:flex tw:items-center tw:justify-center tw:font-bold tw:text-[18px] tw:transition-colors ${
                    isOpen ? 'tw:bg-[#176AB3] tw:text-white' : 'tw:bg-[#F4F6F8] tw:text-slate-600'
                  }`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="tw:px-7 tw:pb-6 tw:pt-1 tw:text-[14.5px] tw:leading-relaxed tw:text-slate-600 tw:border-t tw:border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
