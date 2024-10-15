import React, { useState } from 'react';
import { Language, ToneOfVoice } from '@/data/essay-hook-generator';

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

  const [hookTypes, setHookTypes] = useState('question');
  const [paperGenre, setPaperGenre] = useState('essay');
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = () => {
    return content1;
  };
  const setData = () => {
    api
      .hookGenerator({
        content1,
        hookTypes,
        paperGenre,
        language,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };

  return (
    <div className="p-4 pl-0 pr-6 h-full">
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-2xl shadow-xl">
        <div className="">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Enter your topic or keyword</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 "
              placeholder=""
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 flex-1 flex flex-col p-2 mt-2">
              <h1>Hook types (optional)</h1>
              <select
                onChange={(e) => setHookTypes(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                <option value="Paragraph">question</option>
                <option value="Bullet Points">quotation</option>
                <option value="Paragraph">statistical</option>
                <option value="Paragraph">anecdotal</option>
                <option value="Paragraph">autobiography</option>
                <option value="Paragraph">definition</option>
              </select>
            </div>
            <div className="w-1/2 flex-1 flex flex-col p-2 mt-2">
              <h1>Paper genre (optional)</h1>
              <select
                onChange={(e) => setPaperGenre(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                <option value="Paragraph">essay</option>
                <option value="Bullet Points">speech</option>
                <option value="Bullet Points">research paper</option>
                <option value="Bullet Points">thesis</option>
                <option value="Bullet Points">report</option>
                <option value="Bullet Points">coursework</option>
              </select>
            </div>
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
