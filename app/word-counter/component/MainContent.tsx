'use client';
import React, { useState, useMemo } from 'react';
import { Language } from '@/data/essay-hook-generator';

interface responseDateObject {
  content: string;
}
interface MainContentProps {
  setResponseDate: React.Dispatch<React.SetStateAction<responseDateObject[]>>;
  activeTool: string;
}

const MainContent: React.FC<MainContentProps> = ({
  setResponseDate,
  activeTool,
}) => {
  const [content1, setContent1] = useState('');

  const isSatisfy = useMemo(() => {
    return content1;
  }, [content1]);

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="">
          <div className="flex">
            <h3>{activeTool}</h3>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Text to Check</h3>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none "
              placeholder="Enter or paste the text for which you want to count words"
              onChange={(e) => setContent1(e.target.value)}
              rows={13}
            />
          </div>
        </div>
        <div className="flex justify-end items-center mb-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSatisfy ? '' : 'opacity-50 cursor-not-allowed'
            } `}
            onClick={() => {
              if (isSatisfy) {
                setResponseDate([{ content: 'sad' }]);
              } else {
              }
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
