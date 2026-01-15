import axios from 'axios';
import { CONFIG } from '@/global-config';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const submitApplyForm = async (data: FormData) => {
  const response = await axios.post(`${CONFIG.serverUrl}/api/v1/apply`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const useApplyJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) => submitApplyForm(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apply'] });
    },
  });
};
