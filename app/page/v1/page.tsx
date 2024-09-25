import React from 'react';

import './page.css';

const v1: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg bg-center">
      <div className="bg-white p-10 rounded shadow-xl text-center w-3/4 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Welcome to AI Writer App
        </h1>
        <p className="text-lg mb-10">
          AI Writer is a revolutionary app that leverages artificial
          intelligence to assist you with your writing. Whether you are working
          on a novel, an essay, or simply drafting an email, AI Writer is your
          perfect writing companion.
        </p>
        <div className="flex justify-around">
          <a href="https://apps.apple.com/app/id1639845219">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download for iOS
            </button>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ai.chat.writer">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Download for Android
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default v1;
