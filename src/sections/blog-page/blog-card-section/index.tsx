"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogCardSection() {
  const filters = [
    "All",
    "Cybersecurity",
    "Cloud Solutions",
    "IT Best Practices",
    "Small Business IT Tips",
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();



  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.",
      author: "Jane Cooper",
      date: "Nov 6",
      avatar: "/images/ceo-avatar.png",
      img: "/images/blog1.png",
      category: "Cybersecurity",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.",
      author: "Jane Cooper",
      date: "Nov 6",
      avatar: "/images/ceo-avatar.png",
      img: "/images/blog1.png",
      category: "Cloud Solutions",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.",
      author: "Jane Cooper",
      date: "Nov 6",
      avatar: "/images/ceo-avatar.png",
      img: "/images/blog1.png",
      category: "IT Best Practices",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.",
      author: "Jane Cooper",
      date: "Nov 6",
      avatar: "/images/ceo-avatar.png",
      img: "/images/blog1.png",
      category: "Cybersecurity",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.",
      author: "Jane Cooper",
      date: "Nov 6",
      avatar: "/images/ceo-avatar.png",
      img: "/images/blog1.png",
      category: "Cloud Solutions",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit",
      desc: "Lorem ipsum dolor sit amet consectetur. Pellentesque molestie tortor ultricies vitae.",
      author: "Jane Cooper",
      date: "Nov 6",
      avatar: "/images/ceo-avatar.png",
      img: "/images/blog1.png",
      category: "IT Best Practices",
    },
  ];

  const filteredBlogs =
    activeFilter === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeFilter);

      

  return (
    <section className="tw:w-full tw:px-6 tw:py-14 tw:flex tw:justify-center tw:mb-30">
      <div className="tw:max-w-[1230px] tw:w-full ">

        {/* FILTER BUTTONS */}
        {/* <div className="tw:flex tw:flex-wrap tw:gap-4 tw:justify-center tw:mb-10"> */}
        <div className="tw:flex tw:gap-3.5 tw:overflow-x-auto tw:whitespace-nowrap tw:lg:flex-wrap tw:lg:justify-center  tw:pb-2 tw:mb-16">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                tw:px-5 tw:py-2 tw:rounded-lg tw:text-sm tw:border tw:transition tw:cursor-pointer
                ${
                  activeFilter === filter
                    ? "tw:bg-[#00A3FF] tw:text-white tw:border-[#00A3FF]"
                    : "tw:bg-white tw:text-black tw:border-gray-200 tw:hover:bg-gray-100"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* CARD GRID */}
        {filteredBlogs.length === 0 ? (
          <div className="tw:w-full tw:py-22 tw:flex tw:flex-col tw:items-center tw:justify-center tw:text-center tw:mb-15 tw:md:mb-40">
            <h2 className="tw:text-[22px] tw:sm:text-[26px] tw:font-semibold tw:text-[#000000] ">
              No Data Found!
            </h2>
            <p className="tw:text-[#767676] tw:text-[14px] tw:sm:text-[18px] tw:mt-2 tw:max-w-[300px]">
              It looks like there’s nothing to show here right now.
            </p>
          </div>
        ) : (
        <div className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6 tw:mt-6">
          {filteredBlogs.map((blog) => (
             <Link
                href={`/resources/blogs/${blog.id}`}
                key={blog.id}
                className="group tw:bg-white tw:rounded-2xl tw:block"
              >
            <div
              key={blog.id}
              className="tw:bg-white tw:rounded-2xl tw:shadow-[0px_1px_3px_0px_#00000005] tw:border tw:border-[#0000000A] tw:overflow-hidden tw:transition-all tw:hover:shadow-sm tw:group tw:cursor-pointer"
            >
              {/* IMAGE */}
              <div className="tw:w-full tw:h-[280px] tw:md:h-[360px] tw:rounded-t-2xl tw:overflow-hidden">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={600}
                  height={300}
                  className="tw:w-full tw:h-full tw:object-cover tw:transition-transform tw:duration-500 tw:group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="tw:p-5">
                <h3 className="tw:text-[18px] tw:md:text-[22px] tw:font-semibold tw:mb-2">
                  {blog.title}
                </h3>

                <p className="tw:text-[14px] tw:md:text-[16px] tw:text-[#767676] tw:mb-4 tw:leading-3.5 tw:md:leading-4.5">
                  {blog.desc}
                </p>

                {/* AUTHOR INFO */}
                <div className="tw:flex tw:items-center tw:gap-3 tw:mb-4">
                  <Image
                    src={blog.avatar}
                    alt={blog.author}
                    width={34}
                    height={34}
                    className="tw:rounded-full tw:object-cover"
                  />
                  <div>
                    <p className="tw:text-[14px] tw:font-medium">{blog.author}</p>
                    <p className="tw:text-[12px] tw:text-[#767676B2]">{blog.date}</p>
                  </div>
                </div>

                {/* READ MORE */}
                <button onClick={() => router.push(`/resources/blogs/${blog.id}`)} className="tw:flex tw:items-center tw:gap-2 tw:text-[14px] tw:font-semibold tw:text-black tw:hover:opacity-70 tw:cursor-pointer">
                  Read more
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="tw:mt-0.5"
                  />
                </button>
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
