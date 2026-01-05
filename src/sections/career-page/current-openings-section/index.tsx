'use client';

import { useState } from 'react';

import ApplyModal from '../apply-dialog';

export default function CurrentOpenings() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleApply = (job: string) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  const items = [
    {
      title: 'IT Support Technician',
      desc: 'Provide technical support and troubleshoot IT issues to ensure smooth day-to-day operations.',
    },
    {
      title: 'Software Developer',
      desc: 'Design, build, and maintain software solutions that support business needs.',
    },
    {
      title: 'Marketing & Sales Manager',
      desc: 'Lead marketing and sales activities to drive growth and build strong client relationships.',
    },
  ];

  return (
    <section className="tw:px-4 tw:sm:px-[15px] tw:py-24 tw:max-w-[750px] tw:mx-auto">
      <h2 className="tw:text-center heading2 tw:font-semibold ">
        <div>
           <span className="tw:text-primary"> Current Openings</span>
        </div>
      </h2>

      <div className="">
        {' '}
        <p
          className="tw:text-center tw:leading-6 tw:mt-3 tw:max-w-[370px] tw:sm:max-w-[400px] body_text_style tw:mx-auto"
        >
          Explore our open roles, complete with detailed job descriptions and required
          qualifications.
        </p>
      </div>

      <div className="tw:grid tw:grid-cols-1 tw:gap-6 tw:max-w-[750px] tw:mt-14">
        {items.map((job, index) => (
          <div
            key={index}
            className="tw:bg-white tw:flex tw:justify-between tw:border tw:border-[rgba(0,0,0,0.04)] tw:shadow-[0_1px_3px_rgba(0,0,0,0.02)] tw:items-center tw:rounded-2xl tw:p-6 tw:flex-col tw:sm:flex-row tw:gap-4"
          >
            <div className="tw:sm:text-left tw:text-center">
              <h3 className="tw:text-[18px] tw:font-semibold">{job.title}</h3>
              <p className="body_text_style tw:max-w-[366px] tw:mt-1.5">
                {job.desc}
              </p>
            </div>

            <button
              onClick={() => handleApply(job.title)}
              className="tw:px-6 tw:py-2.5 tw:border tw:rounded-3xl tw:font-medium tw:text-primary tw:border-primary tw:cursor-pointer"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {openModal && <ApplyModal isOpen={openModal} job={selectedJob} onClose={() => setOpenModal(false)} />}
    </section>
  );
}
