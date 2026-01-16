import axios from 'axios';
import { CONFIG } from '@/global-config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type ContactFormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  companyName: string;
  inquiryType: string;
  message: string;
};

const submitContactForm = async (data: ContactFormData) => {
  const response = await axios.post(`${CONFIG.serverUrl}/api/v1/contact`, data);
  return response.data;
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ContactFormData) => submitContactForm(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] });
    },
  });
};
