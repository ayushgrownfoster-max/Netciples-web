'use client';

import * as Yup from 'yup';
import { toast } from 'sonner';
import { useFormik } from 'formik';
import { CONFIG } from '@/global-config';
import { countryCodes } from '@/data/CountryCode';
import { useRef, useState, useEffect } from 'react';
import { useCreateContact } from '@/store/use-contact';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required('Name is required')
    .max(50, 'Name must be at most 50 characters'),
  email: Yup.string().trim().email('Enter a valid email').required('Email is required'),
  phone: Yup.string()
    .required('Phone Number is required')
    .trim()
    .matches(/^[0-9]*$/, 'Only numbers are allowed')
    .min(5, 'Phone number must be at least 5 digits')
    .max(15, 'Phone number cannot exceed 15 digits'),
  company: Yup.string()
    .trim()
    .required('Company name is required')
    .max(50, 'Company name must be at most 50 characters'),

  inquiry: Yup.string().trim().required('Please Select inquiry type'),
  otherText: Yup.string()
    .trim()
    .when('inquiry', {
      is: 'Other',
      then: (schema) => schema.required('Please describe your inquiry'),
      otherwise: (schema) => schema.notRequired(),
    }),
});

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Select Inquiry Type');
  const [openCode, setOpenCode] = useState(false);
  const [searchCode, setSearchCode] = useState('');
  const createContact = useCreateContact();
  const [selectedCode, setSelectedCode] = useState({
    iso2: 'in',
    name: 'India',
    code: '+91',
  });

  const inquiryOptions = [
    'IT Services Consultation',
    'Cloud Solutions',
    'Cyber Security',
    'Software Development',
    'Data Management & Analytics',
    'Other',
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);
  const countryCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (countryCodeRef.current && !countryCodeRef.current.contains(e.target as Node)) {
        setOpenCode(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      inquiry: '',
      otherText: '',
      message: '',
      countryCode: '+91',
    },

    validationSchema,

    onSubmit: async (values) => {
      try {
        const data = {
          name: values.name,
          email: values.email,
          countryCode: values.countryCode,
          phone: values.phone,
          companyName: values.company,
          inquiryType: values.inquiry !== 'Other' ? values.inquiry : values.otherText,
          message: values.message,
        };
        const response = await createContact.mutateAsync(data);
        toast.success(response.message);
        clearFormValues();
      } catch (error: any) {
        const msg = error?.response?.data?.message || error?.message || 'An unknown error occurred';

        toast.error(msg);
      }
    },
  });

  const clearFormValues = () => {
    formik.resetForm();
    setSelected('Select Inquiry Type');
    setOpen(false);
    setOpenCode(false);
    setSearchCode('');
    setSelectedCode({
      iso2: 'in',
      name: 'India',
      code: '+91',
    });
  };
  return (
    <section className="tw:w-full tw:px-4 tw:md:px-6 tw:xl:px-0 tw:py-10 tw:sm:py-20 tw:max-w-[1240px] tw:xl:mx-auto">
      <div className="tw:grid tw:grid-cols-1 tw:lg:grid-cols-2 tw:gap-5 tw:xl:gap-2.5">
        <div className="tw:bg-white tw:py-5 tw:sm:py-8 tw:relative tw:z-1 tw:px-5 tw:sm:px-14 tw:lg:px-8 tw:xl:py-10  tw:xl:px-14 tw:rounded-xl tw:sm:rounded-3xl tw:shadow-sm tw:border-0 tw:lg:max-w-[592px]">
          <h2 className="tw:text-[20px] tw:sm:text-[26px] tw:font-semibold">Get In Touch!</h2>
          <p className="body_text_style tw:mt-2">
            We&apos;d love to hear from you and see how we can help.
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className="tw:mt-8 tw:flex tw:flex-col tw:gap-6  tw:xl:max-w-[480px]"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name*"
                className="tw:w-full tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:max-h-12 tw:p-4 tw:text-[14px] tw:rounded-xl tw:outline-none"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="tw:text-red-500 tw:text-sm tw:px-4 tw:py-2">{formik.errors.name}</p>
              )}
            </div>

            <div className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:lg:grid-cols-1 tw:xl:grid-cols-2 tw:gap-6 tw:xl:gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email*"
                  className="tw:w-full tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:max-h-12 tw:p-4 tw:text-[14px] tw:rounded-xl tw:outline-none"
                />

                {formik.touched.email && formik.errors.email && (
                  <p className="tw:text-red-500 tw:px-4 tw:py-2 tw:text-sm">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div ref={countryCodeRef}>
                <div className="tw:flex tw:rounded-xl tw:max-h-12 tw:gap-1 tw:bg-[#F5F5F5] tw:items-center tw:relative">
                  <div
                    onClick={() => setOpenCode(!openCode)}
                    className="tw:flex tw:items-center tw:gap-2 tw:px-4 tw:py-4 tw:cursor-pointer"
                  >
                    <span className="tw:text-[14px] tw:text-[#767676]">{selectedCode.code}</span>

                    <img
                      src={`${CONFIG.assetsDir}/assets/icons/workspaces/drop_down_icon_1.svg`}
                      alt="dropdown"
                      className={`tw:transition-transform tw:w-3 tw:h-3 ${
                        openCode ? 'tw:rotate-180 tw:duration-300' : 'tw:duration-300'
                      }`}
                    />
                  </div>

                  <div className=" tw:h-8 tw:w-px tw:bg-[#a6a4a4] " />

                  <input
                    type="tel"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your phone*"
                    className="tw:p-2 tw:rounded-xl tw:w-full tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:text-[14px] tw:outline-none"
                  />

                  {openCode && (
                    <div className="tw:absolute tw:top-14 tw:left-0 tw:w-full tw:bg-white tw:shadow-lg tw:rounded-xl tw:z-50 tw:pb-3 tw:border tw:border-gray-200 tw:max-h-72 tw:overflow-y-auto">
                      <div className="tw:px-3 tw:sticky tw:top-0 tw:bg-white tw:z-10 tw:pb-3">
                        <input
                          type="text"
                          placeholder="Search country…"
                          value={searchCode}
                          onChange={(e) => setSearchCode(e.target.value)}
                          className="tw:w-full tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:text-[14px] tw:px-2 tw:mt-3 tw:pt-2 tw:pb-2 tw:rounded-lg tw:outline-none"
                        />
                      </div>

                      {countryCodes
                        .filter((item) => {
                          const query = searchCode.toLowerCase();
                          return (
                            item.name.toLowerCase().includes(query) || item.code.includes(query)
                          );
                        })
                        .map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedCode(item);
                              formik.setFieldValue('countryCode', item.code);
                              setOpenCode(false);
                              setSearchCode('');
                            }}
                            className={`tw:px-3 tw:py-2 tw:text-[14px] ${
                              selectedCode.code === item.code
                                ? 'tw:bg-primary tw:text-white'
                                : 'tw:bg-white tw:hover:bg-[#4abcfd] tw:hover:text-white tw:text-black'
                            } tw:cursor-pointer tw:rounded-md`}
                          >
                            {item.name} ({item.code})
                          </div>
                        ))}

                      {countryCodes.filter(
                        (item) =>
                          item.name.toLowerCase().includes(searchCode.toLowerCase()) ||
                          item.code.includes(searchCode)
                      ).length === 0 && (
                        <p className="tw:text-center tw:text-[#767676] tw:py-2 tw:text-sm">
                          No results found
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {formik.touched.phone && formik.errors.phone && (
                  <p className="tw:text-red-500 tw:px-4 tw:py-2 tw:text-sm">
                    {formik.errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your company name*"
                className="tw:w-full tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:max-h-12 tw:text-[14px] tw:p-4 tw:rounded-xl tw:outline-none"
              />
              {formik.touched.company && formik.errors.company && (
                <p className="tw:text-red-500 tw:px-4 tw:py-2 tw:text-sm">
                  {formik.errors.company}
                </p>
              )}
            </div>

            <div className="tw:relative tw:w-full" ref={dropdownRef}>
              <div
                onClick={() => setOpen(!open)}
                className="tw:flex tw:justify-between tw:items-center tw:bg-[#F5F5F5] tw:rounded-xl tw:py-4 tw:px-4 tw:cursor-pointer"
              >
                <p
                  className={`tw:text-[14px] ${
                    selected !== 'Select Inquiry Type' ? 'tw:text-black' : 'tw:text-[#767676]'
                  }`}
                >
                  {selected}
                </p>

                <img
                  src={`${CONFIG.assetsDir}/assets/icons/workspaces/drop_down_icon_2.svg`}
                  alt="dropdown"
                  className={`tw:w-3 tw:h-3 tw:transition-transform tw:mr-2 ${
                    open ? 'tw:rotate-180 tw:duration-300' : 'tw:duration-300'
                  }`}
                />
              </div>

              {open && (
                <div className="tw:absolute tw:top-14 tw:left-0 tw:w-full tw:bg-white tw:shadow-lg tw:rounded-xl tw:z-9999 tw:py-5 tw:border tw:border-gray-200">
                  {inquiryOptions.map((item, index) =>
                    item !== 'Other' ? (
                      <div key={index}>
                        <div
                          onClick={() => {
                            setSelected(item);
                            formik.setFieldValue('inquiry', item);
                            formik.setFieldValue('otherText', '', false);
                            setOpen(false);
                          }}
                          className={`tw:cursor-pointer ${selected == item ? 'tw:bg-primary tw:text-white ' : 'tw:bg-white tw:text-black tw:hover:bg-[#4abcfd] tw:hover:text-white'} tw:duration-300 tw:flex tw:flex-col tw:font-medium tw:gap-1 tw:py-4 tw:text-[14px] tw:px-2.5 tw:mx-2.5 tw:rounded-md`}
                        >
                          {item}
                        </div>
                        <hr className="tw:border-gray-200 tw:mx-5" />
                      </div>
                    ) : (
                      <div
                        key={index}
                        onClick={() => {
                          setSelected('Other');
                          formik.setFieldValue('inquiry', 'Other');
                          setOpen(true);
                        }}
                        className="tw:cursor-pointer tw:pt-2 tw:font-medium tw:text-[14px] tw:px-2.5 tw:mx-2.5 tw:rounded-md"
                      >
                        Other
                        <div className="tw:relative tw:py-3">
                          <textarea
                            placeholder="Write your inquiry here…"
                            rows={3}
                            maxLength={50}
                            value={formik.values.otherText}
                            onChange={(e) => {
                              setSelected(e.target.value || 'Other');
                              formik.setFieldValue('otherText', e.target.value);
                            }}
                            className="tw:w-full tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:border-0 tw:text-[14px] tw:p-3 tw:rounded-xl tw:outline-none tw:resize-none tw:font-normal"
                          />
                          <span className="tw:absolute tw:bottom-5 tw:right-2 tw:text-[12px] tw:text-[#767676] tw:font-normal">
                            {formik.values.otherText.length}/50
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {formik.touched.inquiry && formik.errors.inquiry && (
                <p className="tw:text-red-500 tw:px-4 tw:py-2 tw:text-sm">
                  {formik.errors.inquiry}
                </p>
              )}
              {formik.touched.otherText && formik.errors.otherText && (
                <p className="tw:text-red-500 tw:px-4 tw:py-2 tw:text-sm">
                  {formik.errors.otherText}
                </p>
              )}
            </div>

            <div className="tw:relative">
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={4}
                maxLength={500}
                placeholder="Write message"
                className="tw:w-full tw:h-[90px] tw:bg-[#F5F5F5] tw:placeholder:text-[#767676] tw:resize-none tw:text-[14px] tw:p-4 tw:rounded-xl tw:outline-none"
              />
              <span className="tw:absolute tw:bottom-3 tw:right-2 tw:text-[12px] tw:text-[#767676]">
                {formik.values.message.length} / 500
              </span>
            </div>

            <button
              type="submit"
              className="tw:bg-primary tw:cursor-pointer tw:hover:bg-[#0285d1] tw:sm:max-w-[180px] tw:text-[14px] tw:sm:text-[16px] tw:text-white tw:py-3 tw:sm:py-3 tw:rounded-2xl tw:text-lg"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="tw:flex tw:flex-col tw:relative tw:-z-1 tw:lg:justify-between tw:xl:justify-start tw:gap-6 tw:lg:max-w-[618px]">
          <div className="tw:bg-white tw:p-5 tw:sm:p-14 tw:lg:p-8 tw:xl:p-10 tw:rounded-2xl tw:sm:rounded-3xl tw:lg:h-full tw:xl:h-full tw:shadow-sm tw:border-0">
            <h2 className="tw:text-[20px] tw:sm:text-[26px] tw:font-semibold">
              Contact information
            </h2>
            <hr className="tw:border-gray-200 tw:my-4 tw:sm:my-6" />

            <div className="tw:flex tw:flex-col tw:gap-7">
              {/* <div className="tw:flex tw:items-start tw:gap-4">
                <img
                  src={`${CONFIG.assetsDir}/assets/icons/workspaces/call.svg`}
                  className="tw:pt-2"
                  alt=""
                />
                <div>
                  <p className="tw:text-[#767676] tw:text-[14px] tw:sm:text-[16px]">Phone number</p>
                  <p className="tw:text-[16px] tw:sm:text-lg tw:font-medium">123-456-7890</p>
                </div>
              </div> */}

              <div className="tw:flex tw:items-start tw:gap-4">
                <img
                  src={`${CONFIG.assetsDir}/assets/icons/workspaces/mail.svg`}
                  className="tw:pt-2"
                  alt=""
                />
                <div>
                  <p className="body_text_style">Email</p>
                  <p className="tw:text-[16px] tw:sm:text-lg tw:font-medium">
                    info@netciples.com.au
                  </p>
                </div>
              </div>

              <div className="tw:flex tw:items-start tw:gap-4">
                <img
                  src={`${CONFIG.assetsDir}/assets/icons/workspaces/map.svg`}
                  className="tw:pt-2"
                  alt=""
                />
                <div>
                  <p className="body_text_style">Address</p>
                  <p className="tw:text-[16px] tw:sm:text-lg tw:font-medium">
                    2 Messiter Street,
                    <br />
                    Campsie NSW 2194
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tw:bg-white tw:p-5 tw:sm:p-14 tw:lg:p-8 tw:xl:p-10 tw:rounded-2xl tw:lg:h-full tw:xl:h-full tw:sm:rounded-3xl tw:shadow-sm tw:border-0">
            <h2 className="tw:text-[20px] tw:sm:text-[26px] tw:font-semibold">Business hours</h2>
            <hr className="tw:border-gray-200 tw:my-4 tw:sm:my-6" />

            <div className="tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:gap-6">
              <div>
                <p className="body_text_style">Monday - Friday</p>
                <p className="tw:text-[16px] tw:sm:text-lg tw:font-medium">9:00 am - 6:00 pm</p>
              </div>

              <div>
                <p className="body_text_style">Saturday - Sunday</p>
                <p className="tw:text-[16px] tw:sm:text-lg tw:font-medium">9:00 am - 12:00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
