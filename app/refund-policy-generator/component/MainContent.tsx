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
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');

  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = useMemo(() => {
    return content1 && content2 && content3;
  }, [content1, content2, content3]);

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="overflow-y-scroll ">
          <div className="flex">
            <h3>{activeTool}</h3>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Website name</h3>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Apple, Amazon, Tesla"
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Website URL</h3>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="https://..."
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Enter your company’s return policy</h3>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              rows={5}
              placeholder="coco-input-affix-wrapper coco-field-textarea scrollbar TextArea_TextAreaField__CNT2_ coco-input-textarea-affix-wrapper coco-input-textarea-show-count css-16uqlgr coco-input-show-count"
              onChange={(e) => setContent3(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 flex flex-col p-2 mt-2">
              <h3>Language</h3>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {Language.map((language) => (
                  <option key={language.id} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
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
