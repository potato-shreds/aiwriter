// src/utils/axios.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 Axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时设置
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 可以在这里处理响应数据
    return response.data; // 只返回数据部分
  },
  (error) => {
    // 处理错误
    const { response } = error;
    if (response) {
      // 服务器返回的错误
      console.error('Error:', response.data);
    } else {
      // 网络错误
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// 封装常见请求方法
const api = {
  get: <T>(url: string, params?: Record<string, any>): Promise<T> =>
    axiosInstance.get(url, { params }),

  post: <T>(url: string, data: any): Promise<T> =>
    axiosInstance.post(url, data),

  put: <T>(url: string, data: any): Promise<T> => axiosInstance.put(url, data),

  delete: <T>(url: string): Promise<T> => axiosInstance.delete(url),
};

export { api };
