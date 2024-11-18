import React from 'react';
import Footer from '@/app//components/Footer';
import './page.css';
import Header from '@/app/components/Header/Header';

const support: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div id="contents" className="bg-white max-w-2xl mx-auto py-40">
        <p className="text-xl mb-2">Hi,</p>
        <p className="text-xl mb-4">Welcome to AI Writer!</p>
        <p className="text-xl mb-2 ">
          If you have any questions about our service or any related matters,
          please contact us via email at{' '}
          <a
            className="text-blue-500 underline"
            href="mailto:ai.writer@outlook.com"
          >
            ai.writer@outlook.com
          </a>
          .
        </p>
        <p className="text-base mt-10">
          <a className="text-blue-500 underline" href="https://ai-writer.app">
            Go Back to Home Page for More Information!
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default support;
