import React, { useState } from 'react';
import { Language } from '@/data/essay-hook-generator';

interface responseDateObject {
  content: string;
}

interface MainContentProps {
  setResponseDate: React.Dispatch<React.SetStateAction<responseDateObject[]>>;
  activeTool: string;
  responseDate: responseDateObject[];
}
import api from '@/app/utils/gemini';

const MainContent: React.FC<MainContentProps> = ({
  setResponseDate,
  activeTool,
  responseDate,
}) => {
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');

  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = () => {
    return content1;
  };
  const setData = () => {
    api
      .blogMetaDescriptionGenerator({
        content1,
        content2,
        language,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };

  return (
    <div className="p-4 pl-0 pr-6 h-full">
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-2xl shadow-xl resize-none">
        <div className="overflow-y-scroll">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>What is your page about?</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none "
              placeholder="Describe your page's content in a few words."
              onChange={(e) => setContent1(e.target.value)}
              rows={5}
            />
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Keywords (optional)</h1>
            <input
              type="text"
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none "
              placeholder="Enter your keywords"
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 flex flex-col p-2 mt-2">
              <h1>Language</h1>
              <select
                onChange={(e) => setLanguage(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {Language.map((lang) => (
                  <option key={lang.id} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center mb-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSatisfy() ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              if (isSatisfy()) {
                setData();
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
