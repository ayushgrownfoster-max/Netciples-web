/**
 * @description Api client for the application
 * @author Chintan Prajapati (https://github.com/imchintan)
 * @version 1.0.0
 * @since 05/06/2025
 */

import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CancelTokenSource,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
// import type { Response } from './types';

import axios from 'axios';

import { API_CONFIG } from './config';

// Utility function to convert string to camelCase
const toCamelCase = (str: string): string => {
  // First convert PascalCase to camelCase
  str = str.replace(/^[A-Z]/, (c) => c.toLowerCase());
  // Then handle hyphenated and underscore cases
  return str.replace(/([-_][a-z])/gi, (c) => c.toUpperCase().replace('-', '').replace('_', ''));
};

// Utility function to convert object keys to camelCase recursively
const convertToCamelCase = <T>(data: T): T => {
  if (Array.isArray(data)) {
    return data.map((item) => convertToCamelCase(item)) as unknown as T;
  }

  if (data !== null && typeof data === 'object') {
    return Object.keys(data).reduce((result, key) => {
      const camelKey = toCamelCase(key);
      const value = (data as Record<string, unknown>)[key];
      return {
        ...result,
        [camelKey]: convertToCamelCase(value),
      };
    }, {}) as T;
  }

  return data;
};

class ApiClient {
  private client: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: unknown) => void;
    config: InternalAxiosRequestConfig;
  }> = [];
  private cancelTokenSource: CancelTokenSource | null = null;

  constructor() {
    this.client = axios.create(API_CONFIG);
    this.setupInterceptors();
  }


  // Setup interceptors for the api client
  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Get token from localStorage or your auth state management

        // Add cancel token to all requests
        if (this.cancelTokenSource) {
          config.cancelToken = this.cancelTokenSource.token;
        }

        // Add timestamp to prevent caching
        const separator = config.url?.includes('?') ? '&' : '?';
        config.url = `${config.url}${separator}_t=${Date.now()}`;

        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        // Convert response data keys to camelCase
        if (response.data) {
          response.data = convertToCamelCase(response.data);
        }
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config;
        // Handle 401 Unauthorized errors
        if (error.response?.status === 401 && originalRequest) {
          

          if (this.isRefreshing) {
            // If already refreshing, add request to queue
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject, config: originalRequest });
            })
              .then((token) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                return this.client(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          this.isRefreshing = true;

          
        }

        return Promise.reject(error);
      }
    );
  }

  // Generic request methods
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  // Post request
  public async post<T, D = Record<string, unknown> | string>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  // Put request
  public async put<T, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  // Delete request
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  // Patch request
  public async patch<T, D = Record<string, unknown>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();
