import React, { useState } from 'react';
import { Language } from '@/data/essay-hook-generator';
import { GenreOfTheText } from '@/data/rhetorical-analysis-generator';

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

  const [genreOfTheText, setGenreOfTheText] = useState(GenreOfTheText[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const setData = () => {
    api
      .rhetoricalAnalysisGenerator({
        content1,
        content2,
        language,
        genreOfTheText,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };

  const isSatisfy = content1.length > 0;

  return (
    <div className="p-4 pl-0 pr-6 h-full">
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-2xl shadow-xl resize-none">
        <div className="overflow-y-scroll h-full">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Paste your content here</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              rows={4}
              placeholder=""
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 flex flex-col p-2 mt-2">
              <h1>Genre of the text</h1>
              <select
                onChange={(e) => setGenreOfTheText(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {GenreOfTheText.map((lang) => (
                  <option key={lang.id} value={lang.name}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Additional information (optional)</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Add additional information here"
              onChange={(e) => setContent2(e.target.value)}
              rows={4}
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
