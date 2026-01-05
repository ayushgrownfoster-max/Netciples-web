

'use client';

import { CONFIG } from '@/global-config';

export default function OurVision() {
  return (
    <section className=" tw:py-10 tw:px-4 tw:md:px-6 tw:xl:px-25 tw:max-w-360 tw:2xl:mx-auto">
      <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:lg:gap-[84px] tw:xl:gap-36 tw:items-center  ">
        <div className="tw:max-w-full tw:lg:max-w-[650px] tw:xl:max-w-xl tw:mt-2 tw:md:mt-20">
          <h2 className="heading2 tw:font-bold tw:leading-tight tw:mb-6 tw:text-[#FF6A00] tw:max-w-[600px] ">
            Our Vision
          </h2>
          
          <div className="tw:max-w-full ">
            <p className="body_text_style tw:mb-4 tw:leading-6 tw:text-justify tw:sm:text-left ">
            Founded in 2023, Netciples started with a vision to simplify technology for businesses.<br/>
            What began as a small idea has grown into a trusted partner for modern IT solutions.
          </p>
            <p className="body_text_style tw:leading-6 tw:mb-4 tw:text-justify tw:sm:text-left">
              Netciples was created to help businesses navigate the digital world with simple,
              reliable, and secure IT solutions. From the start, our focus has been on delivering
              technology that supports real business growth. As a startup, we built our foundation
              on innovation and a strong commitment to client success.
            </p>

            <p className="body_text_style tw:leading-6  tw:mb-4 tw:text-justify tw:sm:text-left">
              As we expanded, we strengthened our capabilities in managed IT services, cloud
              solutions, and software development. Every project reinforced our belief that
              technology should make work easier, not harder. This approach continues to guide how
              we build and deliver our solutions.
            </p>

            <p className="body_text_style tw:leading-6  tw:mb-4 tw:text-justify tw:sm:text-left">
              Today, our team is driven by transparency, collaboration, and continuous improvement.
              We focus on creating impactful digital experiences that help businesses operate
              smarter. Our vision remains the same—using technology to create long-term value for
              every client we partner with.
            </p>
          </div>
        </div>

        {/* <div className="tw:flex tw:items-center tw:lg:items-start tw:flex-col tw:lg:flex-row tw:justify-between tw:gap-2.5">
         
        </div> */}
        
         <div className='tw:mt-10 tw:lg:max-w-[520px]'>
            <img
              src={`${CONFIG.assetsDir}/images/Vision.png`}
              alt="Netciples Vision"
              className="tw:sm:h-[350px] tw:w-full  tw:lg:w-[520px] tw:lg:h-[587px] tw:rounded-xl tw:object-cover"
            />
          </div>
      </div>
    </section>
  );
}



// 'use client';

// import { CONFIG } from '@/global-config';

// export default function OurVision() {
//   return (
//     <section className="tw:bg-[#00A3FF0D] tw:py-10 tw:px-4 tw:md:px-6 tw:xl:px-20">
//       <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-1 tw:gap-6 tw:items-center tw:max-w-[1250px] tw:mx-auto">
//         <div className="tw:max-w-full tw:lg:max-w-[650px] tw:xl:max-w-[757px] ">
//           <h2 className="tw:text-[20px] tw:sm:text-[30px] tw:lg:text-[30px] tw:xl:text-[36px] tw:font-bold tw:leading-tight tw:mb-6 tw:text-[#FF6A00] ">
//             The Vision Behind Netciples
//           </h2>
//           <h6 className="tw:text-[#000000] tw:text-[15px] tw:lg:text-[16px] tw:xl:text-[20px] tw:leading-5 tw:text-justify tw:sm:text-left">
//             Founded in 2023, Netciples started with a vision to simplify technology for businesses.
//             What began as a small idea has grown into a trusted partner for modern IT solutions.
//           </h6>
//         </div>

//         <div className="tw:flex tw:items-center tw:lg:items-start tw:flex-col tw:lg:flex-row tw:justify-between tw:gap-2.5">
//           <div className="tw:max-w-full  tw:lg:max-w-[560px] ">
//             <p className="tw:text-[14px] tw:sm:text-[14px] tw:lg:text-[17px] tw:xl:text-[20px] tw:leading-5 tw:text-[#767676] tw:mb-5 tw:text-justify tw:sm:text-left">
//               Netciples was created to help businesses navigate the digital world with simple,
//               reliable, and secure IT solutions. From the start, our focus has been on delivering
//               technology that supports real business growth. As a startup, we built our foundation
//               on innovation and a strong commitment to client success.
//             </p>

//             <p className="tw:text-[14px] tw:lg:text-[17px] tw:xl:text-[20px] tw:leading-5 tw:text-[#767676] tw:mb-5 tw:text-justify tw:sm:text-left">
//               As we expanded, we strengthened our capabilities in managed IT services, cloud
//               solutions, and software development. Every project reinforced our belief that
//               technology should make work easier, not harder. This approach continues to guide how
//               we build and deliver our solutions.
//             </p>

//             <p className="tw:text-[14px] tw:lg:text-[17px] tw:xl:text-[20px] tw:leading-5 tw:text-[#767676] tw:mb-5 tw:text-justify tw:sm:text-left">
//               Today, our team is driven by transparency, collaboration, and continuous improvement.
//               We focus on creating impactful digital experiences that help businesses operate
//               smarter. Our vision remains the same—using technology to create long-term value for
//               every client we partner with.
//             </p>
//           </div>
//           <div>
//             <img
//               src={`${CONFIG.assetsDir}/images/Vision.png`}
//               alt="Netciples Vision"
//               className="tw:sm:w-[750px] tw:sm:h-[350px] tw:lg:w-[420px] tw:lg:h-[262px] tw:xl:w-[540px] tw:xl:h-[342px] tw:rounded-xl tw:object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



