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

interface essayCheckerData {
  content1: string;
}
const essayChecker = async (data: essayCheckerData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-checker',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayRewriterData {
  content1: string;
  language: string;
  outLanguage: string;
  domain: string;
}
const essayRewriter = async (data: essayRewriterData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-rewriter',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayHookGeneratorData {
  content1: string;
  language: string;
  targetAudience: string;
  toneOfVoice: string;
}
const essayHookGenerator = async (data: essayHookGeneratorData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-hook-generator',
      data
    );
    console.log('Response:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

interface essayExpanderData {
  content1: string;
  language: string;
  targetAudience: string;
  toneOfVoice: string;
  number: string;
}
const essayExpander = async (data: essayExpanderData) => {
  try {
    const response = await axiosInstance.post(
      '/api/generate/essay-expander',
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
  essayChecker,
  essayRewriter,
  essayHookGenerator,
  essayExpander,
};

export default api;
