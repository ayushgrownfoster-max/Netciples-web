'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';
import CEOSection from '@/sections/case-studies-page/ceo-section';
import CSRSection from '@/sections/case-studies-page/csr-section';
import SecuritySection from '@/sections/case-studies-page/security-section';
import ProjectOverviewSection from '@/sections/case-studies-page/project-overview-section';

export default function CaseStudyIdDetail() {
  const { id } = useParams();
  const study = caseStudies.find((item) => item.id === Number(id));

  if (!study) 
    return (
      <div className="tw:w-full tw:py-42 tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:mb-15 tw:md:mb-25">
        <h2 className="tw:text-[22px] tw:sm:text-[26px] tw:font-semibold tw:text-[#000000] ">
          No Data Found!
        </h2>
        <p className="tw:text-[#767676] tw:text-[14px] tw:sm:text-[18px] tw:mt-2 tw:max-w-[300px]">
          It looks like there’s nothing to show here right now.
        </p>
      </div>
    );
  return (
    <>
      <section className="tw:w-full tw:py-16 tw:px-6 tw:flex tw:justify-center tw:mt-20">
        <div className="tw:max-w-[1240px] tw:w-full tw:text-center">
          {/* TITLE */}
          <h1 className="tw:text-[30px] tw:md:text-[40px] tw:lg:text-[48px] tw:font-bold tw:mb-4">
            {study.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="tw:text-[#767676] tw:text-[13px] tw:md:text-[18px] tw:lg:text-[20px] tw:mb-10 tw:max-w-[550px] tw:mx-auto">
            {study.desc}
          </p>

          {/* IMAGE */}
          <div className="tw:w-full tw:h-[250px] tw:md:h-[400px] tw:lg:h-[509px] tw:rounded-xl tw:md:rounded-3xl tw:overflow-hidden tw:mx-auto">
            <Image
              src={study.img}
              alt={study.title}
              width={1200}
              height={600}
              className="tw:w-full tw:h-full tw:object-cover"
            />
          </div>
        </div>
      </section>
      <ProjectOverviewSection />
      <SecuritySection />
      <CSRSection
        title="The Challenge"
        subtitle="Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus."
        content={{
          label: 'Key challenges identified:',
          points: [
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
          ],
        }}
      />
      <CSRSection
        title="The Solution"
        subtitle="Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus."
        bgColor="tw:bg-[#FE5E000A]"
        content={{
          label: 'Key elements of the solution:',
          points: [
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
          ],
        }}
      />
      <CSRSection
        title="The Result"
        subtitle="Lorem ipsum dolor sit amet consectetur. Leo porta euismod mattis et pellentesque bibendum. Vel dui sed cursus eu viverra tortor diam eget facilisis. Vitae quis etiam pellentesque elit adipiscing nulla suspendisse scelerisque laoreet."
        content={{
          points: [
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
            {
              label: 'Lorem ipsum dolor',
              description:
                'sit amet consectetur morbi dolor id in morbi ipsum dictum sodales leo sed mattis posuere vivamus.',
            },
          ],
        }}
      />
      <CEOSection/>
    </>
  );
}
