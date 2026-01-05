'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ReviewSection() {
  const reviews = [
    {
      name: 'Eleanor Pena',
      time: '2 months ago',
      text: 'It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.',
      avatar: '/images/avatar1.png',
    },
    {
      name: 'Eleanor Pena',
      time: '2 months ago',
      text: 'It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.',
      avatar: '/images/avatar1.png',
    },
    {
      name: 'Eleanor Pena',
      time: '2 months ago',
      text: 'It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.',
      avatar: '/images/avatar1.png',
    },
    // NEXT 3
    {
      name: 'xxEleanor Pena',
      time: '2 months ago',
      text: 'It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.',
      avatar: '/images/avatar1.png',
    },
    {
      name: 'yyEleanor Pena',
      time: '2 months ago',
      text: 'It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.',
      avatar: '/images/avatar1.png',
    },
    {
      name: 'zzEleanor Pena',
      time: '2 months ago',
      text: 'It was a pleasure working with the Coca team. They understood the brief correctly and delivered great designs exceeding the expectations.',
      avatar: '/images/avatar1.png',
    },
  ];

  return (
    <section className="tw:w-full tw:py-20 tw:flex tw:justify-center tw:px-4 tw:-mt-28 tw:lg:-mt-2 tw:xl:mt-5 tw:mb-10 tw:md:mb-25">
      <div className="tw:max-w-7xl tw:w-full tw:flex tw:flex-col tw:lg:flex-col tw:xl:flex-row tw:gap-12 tw:lg:items-center tw:xl:items-start">
        {/* LEFT SECTION */}
        <div className="tw:w-full tw:lg:w-[260px] tw:mt-14 tw:flex tw:flex-col tw:items-center">
          <h2 className="tw:text-[25px] tw:font-bold tw:text-black ">EXCELLENT</h2>

          <div className="tw:flex tw:mt-1 tw:gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Image key={i} src="/images/icons/star.svg" width={25} height={25} alt="star" />
            ))}
          </div>

          <p className="tw:mt-2 tw:text-gray-600 tw:text-[16px]">
            Based on <span className="tw:font-bold tw:text-black">66 reviews</span>
          </p>

          <Image
            src="/images/google-logo.png"
            alt="google"
            width={100}
            height={40}
            className="tw:mt-4"
          />
        </div>

        {/* RIGHT SWIPER SLIDER */}
        <div className="tw:flex-1  tw:max-w-250 tw:relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.review-next-btn',
              prevEl: '.review-prev-btn',
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
            className="tw:pb-10"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className='tw:pb-1'>
                <div className="tw:bg-[#F5F5F5] tw:max-w-[670px] tw:lg:max-w-[420px] tw:xl:max-w-[520px] tw:p-8 tw:rounded-3xl tw:shadow-sm tw:h-full tw:flex tw:flex-col tw:gap-5">
                  {/* Header */}
                  <div className="tw:flex tw:justify-between tw:items-center">
                    <div className="tw:flex tw:items-center tw:gap-3">
                      <Image
                        src={review.avatar}
                        width={48}
                        height={48}
                        alt="avatar"
                        className="tw:rounded-full"
                      />

                      <div>
                        <h3 className="tw:text-lg tw:font-semibold">{review.name}</h3>
                        <p className="tw:text-gray-500 tw:text-sm">{review.time}</p>
                      </div>
                    </div>

                    <Image src="/images/icons/google.svg" width={28} height={28} alt="google" />
                  </div>

                  {/* Stars */}
                  <div className="tw:flex tw:items-center tw:gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Image
                        key={s}
                        src="/images/icons/star.svg"
                        width={20}
                        height={20}
                        alt="star"
                      />
                    ))}

                    <Image src="/images/icons/tick.svg" width={15} height={15} alt="verified" />
                  </div>

                  {/* Review Text */}
                  <p className="body_text_style tw:leading-relaxed">
                    {review.text}
                  </p>

                  {/* Read more */}
                  <p className="tw:text-gray-600 tw:text-sm tw:font-medium">Read more</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NEXT ARROW BUTTON */}
          <button
            className="
                    review-prev-btn
                    tw:absolute
                    tw:top-1/2 
                    tw:-left-3
                    tw:lg:-left-4
                    tw:-translate-y-1/2
                  tw:bg-white
                    tw:w-8 tw:h-8
                    tw:rounded-full
                    tw:flex tw:items-center tw:justify-center
                    tw:shadow-md
                    hover:tw:bg-gray-100
                    tw:z-5
                    tw:cursor-pointer

                    tw:disabled:hidden
                 "
          >
            <Image src="/images/icons/left-arrow.svg" width={5} height={5} alt="arrow"/>
          </button>

          <button
            className="
              review-next-btn
              tw:absolute
              tw:top-1/2 
              tw:-right-3
              tw:lg:-right-2
              tw:xl:-right-6
              tw:-translate-y-1/2
              tw:bg-white
              tw:w-8 tw:h-8
              tw:rounded-full
              tw:flex tw:items-center tw:justify-center
              tw:shadow-md
              hover:tw:bg-gray-100
              tw:z-5
              tw:cursor-pointer

              tw:disabled:hidden
            "
          >
            <Image src="/images/icons/rightarrow.svg" width={5} height={5} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

