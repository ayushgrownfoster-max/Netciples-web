'use client';

export default function AIAutomationSection() {
  return (
    <section id="ai-automation" className="tw:py-8 tw:sm:py-13 tw:md:py-15 tw:lg:py-25 tw:px-4 tw:md:px-6 tw:lg:px-10  tw:xl:px-20 tw:mb-20 ">
      <div
        className="tw:max-w-[1250px] tw:w-full tw:mx-auto tw:grid tw:grid-cols-1 tw:md:grid-cols-2 tw:gap-12 tw:md:gap-0 tw:items-center"
      >
        <div
          className="
            tw:md:max-w-[700px]  tw:xl:mx-0 tw:flex
           tw:order-1 tw:justify-center tw:md:justify-start tw:sm:h-[720px]  tw:lg:h-[720px] tw:xl:h-[750px]"
        
        >
          <img
            src='/images/ai-automation.png'
            className="tw:sm:w-[499px] tw:sm:h-[600px] tw:md:w-[320px] tw:md:h-[400px] tw:lg:w-[420px] tw:lg:h-[500px] tw:xl:w-[499px] tw:xl:h-[600px] tw:rounded-xl tw:object-cover"
          />
        </div>

        <div
          className="
             tw:max-w-[500px] tw:md:max-w-full tw:mx-auto tw:md:mx-0 tw:sm:-mt-30 tw:md:mt-0
            tw:order-2"
          
        >
          <h2
            className="tw:text-[#FF6A00] heading2 tw:font-semibold tw:mb-3 tw:max-w-[550px]"
          >
            AI & Automation
          </h2>

          <div className="tw:max-w-[605px]">
              <p
                className="body_text_style tw:leading-6.5 tw:mb-4 tw:text-justify tw:sm:text-left"
              >
                At Netciples, we design and implement practical AI and automation solutions that integrate seamlessly with your existing Microsoft environment. We help businesses use AI and automation to reduce manual work, improve efficiency, and make smarter decisions. Our solutions are built around the Microsoft ecosystem and designed to integrate seamlessly with your existing systems.
              </p>
            
          </div>

          <h3 className="tw:font-semibold tw:text-[18px] tw:sm:text-[22px] tw:lg:text-[26px]  tw:mb-4">
            Our AI & Automation Services
          </h3>

          <div className="tw:space-y-5 tw:text-[15px] tw:text-[#333]">
            
            <div>
              <p className="tw:font-semibold tw:text-[16px] tw:sm:text-[18px] tw:lg:text-[20px]">Microsoft Azure AI</p>
              <p className="body_text_style tw:leading-6.5">
                AI solutions that turn data into actionable insights and enable intelligent decision-making.
              </p>
            </div>

            <div>
              <p className="tw:font-semibold  tw:text-[16px] tw:sm:text-[18px] tw:lg:text-[20px]">Microsoft Copilot</p>
              <p className="body_text_style tw:leading-6.5">
                Copilot enablement, governance, and adoption to help teams work faster and smarter.
              </p>
            </div>

            <div>
              <p className="tw:font-semibold  tw:text-[16px] tw:sm:text-[18px] tw:lg:text-[20px]">Business Process Automation</p>
              <p className="body_text_style tw:leading-6.5">
                Automate repetitive tasks and workflows to boost productivity, reduce errors, and improve consistency.
              </p>
            </div>

            <div>
              <p className="tw:font-semibold  tw:text-[16px] tw:sm:text-[18px] tw:lg:text-[20px]">Microsoft Power Automate</p>
              <p className="body_text_style tw:leading-6.5">
                Low-code automation across Microsoft 365 and third-party applications for seamless workflow.
              </p>
            </div>

            <div>
              <p className="tw:font-semibold  tw:text-[16px] tw:sm:text-[18px] tw:lg:text-[20px]">Workflow Design & Optimisation</p>
              <p className="body_text_style tw:leading-6.5">
                Analyse, improve, and automate business processes for maximum efficiency, scalability, and operational excellence.
              </p>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
