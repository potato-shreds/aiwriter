// axiosInstance.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: 'http://34.168.109.32:8030/',
  baseURL: 'https://ai-writer.app/',

  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 可选：设置超时时间
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前可以进行一些操作，比如添加token
    // config.headers.Authorization = `Bearer ${yourToken}`;
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 处理响应数据
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default axiosInstance;
