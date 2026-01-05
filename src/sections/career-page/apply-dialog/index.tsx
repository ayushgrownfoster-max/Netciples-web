'use client';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { CONFIG } from '@/global-config';
import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

interface ApplyJobModalProps {
  job: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const validationSchema = Yup.object({
  coverLetter: Yup.string().required('Cover letter is required'),
  resume: Yup.mixed().required('Resume is required'),
});

export default function ApplyModal({ job, onClose, isOpen }: ApplyJobModalProps) {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const formik = useFormik({
    initialValues: {
      coverLetter: '',
      resume: null as File | null,
      resumeTypeError: '',
      resumeSizeError: '',
    },

    validationSchema,

    onSubmit: (values) => {
      console.log('FORM SUBMITTED:', values);
      onClose();
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,

    onDrop: (acceptedFiles) => {
      const uploadedFile = acceptedFiles[0];
      if (!uploadedFile) return;

      setFile(uploadedFile);
      formik.setFieldValue('resume', uploadedFile);

      // clear error fields
      formik.setFieldError('resume', '');
      formik.setFieldValue('resumeTypeError', '');
      formik.setFieldValue('resumeSizeError', '');

      formik.setTouched({
        ...formik.touched,
        resume: false,
      });
    },

    onDropRejected: (rejectedFiles) => {
      const err = rejectedFiles[0]?.errors[0];

      // Clear file
      setFile(null);
      formik.setFieldValue('resume', null);

      // Reset old errors
      formik.setFieldValue('resumeTypeError', '');
      formik.setFieldValue('resumeSizeError', '');

      if (!err) return;

      if (err.code === 'file-invalid-type') {
        formik.setFieldValue('resumeTypeError', 'Only PDF files are allowed');
      }

      if (err.code === 'file-too-large') {
        formik.setFieldValue('resumeSizeError', 'File size must be less than 5MB');
      }

      formik.setTouched({
        ...formik.touched,
        resume: false,
      });
    },
  });

  if (!isOpen) return null;

  return (
    <div className="tw:fixed tw:inset-0 tw:bg-black/50 tw:flex tw:items-center tw:justify-center tw:z-50">
      <div
        className="tw:bg-white tw:rounded-[20px] tw:sm:rounded-[36px] tw:px-4 tw:py-5 tw:sm:px-20 tw:sm:py-7 tw:xl:py-[50px] tw:max-w-[640px] tw:w-full tw:mx-2 tw:relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tw:max-w-[420px] tw:mx-auto">
          <h2 className="tw:text-center tw:text-[24px] tw:sm:text-[28px] tw:font-semibold">
            Apply for this job
          </h2>

          <p className="tw:text-center tw:text-[#767676] tw:mt-2 tw:text-[16px]">
            You have applied for the <span className="tw:font-semibold">{job}</span> position.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="tw:relative">
            <textarea
              name="coverLetter"
              placeholder="Cover letter"
              rows={6}
              maxLength={1000}
              value={formik.values.coverLetter}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="tw:bg-[#767676]/8 tw:text-[#767676] tw:resize-none tw:placeholder:text-[#767676] tw:w-full tw:mt-10 tw:p-4 tw:rounded-[10px] tw:text-[15px] tw:focus:outline-none"
            />
            <span className="tw:absolute tw:bottom-3 tw:right-2 tw:text-[12px] tw:text-[#767676] tw:bg-[#f4f4f4]">
              {formik.values.coverLetter.length} / 1000
            </span>
          </div>

          {formik.touched.coverLetter && formik.errors.coverLetter && (
            <p className="tw:text-red-500 tw:text-sm tw:mt-1">{formik.errors.coverLetter}</p>
          )}

          <div
            {...getRootProps()}
            className={`tw:border-dashed tw:border-[1.3px] tw:rounded-xl tw:py-7 tw:mt-6 tw:flex tw:flex-col tw:items-center tw:justify-center tw:cursor-pointer
              ${isDragActive ? 'tw:bg-blue-50 tw:border-primary' : 'tw:border-[#767676]/40'}
            `}
          >
            <input {...getInputProps()} />

            {!file ? (
              <div className="tw:flex tw:flex-col tw:items-center">
                <img src={`${CONFIG.assetsDir}/images/icons/upload.svg`} width={19.5} />
                <p className="tw:mt-2 tw:text-[#767676]">
                  {isDragActive ? 'Drop file here...' : 'Upload Resume'}
                </p>
              </div>
            ) : (
              <div className="tw:text-center">
                <p className="tw:text-primary tw:font-medium">{file.name}</p>
                <p className="tw:text-xs tw:text-[#767676] tw:mt-1">
                  {(file.size / 1024).toFixed(1)} KB
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                    formik.setFieldValue('resume', null);
                  }}
                  className="tw:text-red-500 tw:cursor-pointer tw:text-sm tw:mt-2"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {formik.touched.resume && formik.errors.resume && (
            <p className="tw:text-red-500 tw:text-sm tw:mt-1">{formik.errors.resume}</p>
          )}
          {formik.values.resumeTypeError && (
            <p className="tw:text-red-500 tw:text-sm tw:mt-1">{formik.values.resumeTypeError}</p>
          )}

          {formik.values.resumeSizeError && (
            <p className="tw:text-red-500 tw:text-sm tw:mt-1">{formik.values.resumeSizeError}</p>
          )}

          <div className="tw:flex tw:items-center tw:sm:flex-row tw:justify-center tw:gap-3 tw:mx-auto">
            <button
              type="button"
              className="tw:bg-[#767676]/8 tw:text-[#767676] tw:w-full tw:py-[15px] tw:sm:max-w-[234px]  tw:cursor-pointer tw:px-5 tw:sm:px-[90px] tw:rounded-2xl tw:mt-[34px] tw:text-[15px] tw:sm:text-[16px]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="tw:bg-primary tw:text-white tw:w-full tw:py-[15px] tw:sm:max-w-[234px]  tw:cursor-pointer tw:px-5 tw:sm:px-[90px] tw:rounded-2xl tw:mt-[34px] tw:text-[15px] tw:sm:text-[16px] tw:font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
