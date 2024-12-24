// axiosInstance.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: 'http://34.168.109.32:8030/',
  baseURL: 'https://ai-writer.app/',

  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
