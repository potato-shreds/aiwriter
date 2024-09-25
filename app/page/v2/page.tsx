import React from 'react';
import Image from 'next/image';

const v2: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-5">
      <div className="w-full md:w-1/2 bg-white p-10 rounded shadow-xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Welcome to AI Writer App
        </h1>
        <p className="text-lg mb-10">
          AI Writer is a revolutionary app that leverages artificial
          intelligence to assist you with your writing. Whether you are working
          on a novel, an essay, or simply drafting an email, AI Writer is your
          perfect writing companion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <Image
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/b8/17/d7/b817d7bd-46e4-d243-0061-73e0b84a10d5/a9b49371-7b40-4e1a-b54b-59c69b550817_6.5-posterv4-01.png/230x0w.webp"
            alt="App Screenshot 1"
            width={230}
            height={0}
          />
          <Image
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/5a/09/7f/5a097fee-fa68-1f5d-6f83-d11e407c03be/94aaf4a8-d823-49df-81fe-6f487293776b_6.5-poster-01.png/230x0w.webp"
            alt="App Screenshot 2"
            width={230}
            height={0}
          />
          <Image
            src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/04/cb/17/04cb17d5-d0d9-6259-bed7-b083a797e628/6b7505af-944b-4f97-ad9a-342c2d08de6d_6.5-poster-02.png/230x0w.webp"
            alt="App Screenshot 3"
            width={230}
            height={0}
          />
        </div>
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

export default v2;
