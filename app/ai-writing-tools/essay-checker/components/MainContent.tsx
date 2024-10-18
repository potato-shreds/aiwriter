import React, { useState, useMemo } from 'react';
import api from '@/app/utils/gemini';

interface responseDateObject {
  content: string;
}
interface MainContentProps {
  setResponseDate: React.Dispatch<React.SetStateAction<responseDateObject[]>>;
  responseDate: responseDateObject[];
}

const MainContent: React.FC<MainContentProps> = ({
  setResponseDate,
  responseDate,
}) => {
  const [content1, setContent1] = useState('');
  const setData = () => {
    api
      .essayChecker({
        content1: content1,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };
  const isSatisfy = useMemo(() => {
    return content1;
  }, [content1]);
  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div>
          <div className="flex">
            <h1>Essay Checker</h1>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h2>Essay to Check</h2>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none resize-none"
              placeholder="Enter or paste the essay that needs to be checked"
              rows={13}
              onChange={(e) => setContent1(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end items-center mb-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSatisfy ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              if (isSatisfy) {
                setData();
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
