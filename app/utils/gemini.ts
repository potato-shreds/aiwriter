import axiosInstance from './axios';

interface essayWriterData {
  content1: string;
  essayType: string;
  words: string;
  language: string;
}
const essayWriter = async (data: essayWriterData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-writer',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const api = {
  essayWriter,
};

export default api;
