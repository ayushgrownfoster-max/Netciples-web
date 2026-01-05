'use client';

import Image from 'next/image';
import { blogs } from '@/data/blogs';
import { useParams } from 'next/navigation';
import BlogDetailsSection from '@/sections/blog-page/blog-details-section';


export default function BlogIdDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id))!;

//   if (!blog)
//     return (
//       <div className="tw:w-full tw:py-42 tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:mb-15 tw:md:mb-25">
//         <h2 className="tw:text-[22px] tw:sm:text-[26px] tw:font-semibold tw:text-[#000000] ">
//           No Data Found!
//         </h2>
//         <p className="tw:text-[#767676] tw:text-[14px] tw:sm:text-[18px] tw:mt-2 tw:max-w-[300px]">
//           It looks like there’s nothing to show here right now.
//         </p>
//       </div>
//     );

  return (
    <>
      <section className="tw:w-full tw:px-6 tw:py-16 tw:flex tw:justify-center tw:mt-20">
        <div className="tw:max-w-[960px] tw:w-full">
          {/* Title */}
          <h1 className="tw:text-[24px] tw:md:text-[38px] tw:lg:text-[56px] tw:font-bold tw:mb-6 tw:leading-none">
            {blog.title}
          </h1>

          {/* Author Info */}
          <div className="tw:flex tw:items-center tw:gap-3 tw:mb-8">
            <Image
              src={blog.avatar}
              alt={blog.author}
              width={45}
              height={45}
              className="tw:rounded-full"
            />
            <div>
              <p className="tw:text-[16px] tw:font-medium">{blog.author}</p>
              <p className="tw:text-[14px] tw:text-[#767676B2]">{blog.date}</p>
            </div>
          </div>

          {/* Main Image */}
          <div className="tw:w-full tw:h-[300px] tw:md:h-[480px] tw:rounded-xl tw:md:rounded-3xl tw:overflow-hidden tw:mb-10">
            <Image
              src={blog.img}
              alt={blog.title}
              width={1000}
              height={600}
              className="tw:w-full tw:h-full tw:object-cover"
            />
          </div>

          {/* Description text */}
          <p className="tw:text-center tw:text-[12px] tw:md:text-[19px] tw:leading-4 tw:md:leading-5.5 tw:text-[#000000] tw:font-medium tw:max-w-[900px] tw:mx-auto tw:italic">
            {blog.longDesc}
          </p>
        </div>
      </section>

      <BlogDetailsSection
        points={[
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
        ]}
      />

      <BlogDetailsSection
        title="Lorem ipsum dolor sit amet consectetur."
        points={[
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
        ]}
      />

      <BlogDetailsSection
        title="Lorem ipsum dolor sit amet consectetur."
        points={[
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur. Morbi dolor id in morbi ipsum dictum sodales. Leo sed mattis posuere vivamus scelerisque nulla pellentesque tortor aliquet. Sit leo orci velit risus dui aliquet metus dolor. Elementum amet ornare volutpat posuere aliquam suspendisse quam morbi. Aliquet vitae interdum fermentum mauris pharetra massa.',
          },
        ]}
      />
    </>
  );
}
