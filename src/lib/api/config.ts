import type { AxiosRequestConfig } from 'axios';

import { CONFIG } from 'src/global-config';

export const API_CONFIG: AxiosRequestConfig = {
  baseURL: CONFIG.serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
};
