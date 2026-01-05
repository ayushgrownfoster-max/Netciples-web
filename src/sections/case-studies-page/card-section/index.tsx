'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CaseStudyCardSection() {
  const filters = [
    'All',
    'Retail',
    'Finance',
    'Tech',
    'Healthcare',
    'Retail2',
    'Retail3',
    'Retail4',
    'Retail5',
    'Retail6',
    'Retail7',
    'Retail8',
    'Retail9',
    'Retail10',
    'Retail11',
  ];
  const [activeFilter, setActiveFilter] = useState('All');


  const caseStudies = [
    {
      id: 1,
      title: 'Case Study 1',
      desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.',
      category: 'Retail',
      img: '/images/case1.png',
    },
    {
      id: 2,
      title: 'Case Study 2',
      desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.',
      category: 'Finance',
      img: '/images/case2.png',
    },
    {
      id: 3,
      title: 'Case Study 3',
      desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.',
      category: 'Retail',
      img: '/images/case3.png',
    },
    {
      id: 4,
      title: 'Case Study 6',
      desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.',
      category: 'Tech',
      img: '/images/case4.png',
    },
    {
      id: 5,
      title: 'Case Study 8',
      desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.',
      category: 'Retail',
      img: '/images/case5.png',
    },
    {
      id: 6,
      title: 'Case Study 10',
      desc: 'Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.',
      category: 'Tech',
      img: '/images/case6.png',
    },
  ];

  const filteredData =
    activeFilter === 'All' ? caseStudies : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section className="tw:w-full tw:py-16 tw:px-6 tw:flex tw:justify-center tw:mb-30">
      <div className="tw:max-w-7xl tw:w-full">
        {/* FILTER BUTTONS */}
        {/* <div className="tw:flex tw:flex-wrap tw:gap-4 tw:justify-center tw:mb-10"> */}
        <div className="tw:flex tw:gap-3.5 tw:overflow-x-auto tw:whitespace-nowrap tw:lg:flex-wrap tw:lg:justify-center  tw:pb-2 tw:mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                tw:px-5 tw:py-2.5 tw:rounded-xl tw:text-[15px] tw:border tw:transition tw:cursor-pointer
                ${
                  activeFilter === filter
                    ? 'tw:bg-primary tw:text-white tw:border-primary'
                    : 'tw:bg-white tw:text-black tw:border-gray-100 tw:hover:bg-gray-100'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* CARD GRID */}
        {filteredData.length === 0 ? (
          <div className="tw:w-full tw:py-22 tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:mb-15 tw:md:mb-40">
            <h2 className="tw:text-[22px] tw:sm:text-[26px] tw:font-semibold tw:text-[#000000] ">
              No Data Found!
            </h2>
            <p className="tw:text-[#767676] tw:text-[14px] tw:sm:text-[18px] tw:mt-2 tw:max-w-[300px]">
              It looks like there’s nothing to show here right now.
            </p>
          </div>
        ) : (
          <div className="tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-x-5 tw:gap-y-10 tw:md:gap-y-20">
            {filteredData.map((study) => (
              <Link
                href={`/resources/case-studies/${study.id}`}
                key={study.id}
                className="group tw:bg-white tw:rounded-2xl tw:block"
              >
                <div
                  key={study.id}
                  className="tw:bg-white tw:rounded-2xl tw:shadow-[0px_1px_6px_0px_#00000005] tw:transition-all tw:hover:shadow-sm tw:border tw:border-gray-100 tw:group tw:cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="tw:w-full tw:h-[241px] tw:md:h-[341px] tw:lg:h-[441px] tw:rounded-t-2xl tw:overflow-hidden ">
                    <Image
                      src={study.img}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="tw:w-full tw:h-full tw:object-cover tw:transition-transform tw:duration-500 tw:group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="tw:p-6">
                    <h3 className="tw:text-[20px] tw:md:text-[26px] tw:font-semibold tw:mb-2">
                      {study.title}
                    </h3>
                    <p className="tw:text-[14px] tw:lg:text-[18px] tw:text-[#767676] tw:leading-relaxed tw:max-w-[440px]">
                      {study.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
