'use client';
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
  const [pasteText, setPasteText] = useState('');
  const [summaryType, setSummaryType] = useState('Paragraph');
  const [language, setLanguage] = useState(Language[0].name);
  const setData = () => {
    api
      .researchPaperSummarizer({
        content1: pasteText,
        summaryType,
        language,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };
  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Paste Text</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Enter or paste your text here"
              rows={5}
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col p-2 mt-2">
            <h1>Summary Type</h1>
            <select
              value={summaryType}
              onChange={(e) => setSummaryType(e.target.value)}
              className="p-2 rounded-md border border-gray-200 mt-2"
            >
              <option value="Paragraph">Paragraph</option>
              <option value="Bullet Points">Bullet Points</option>
            </select>
          </div>

          <div className="flex flex-wrap">
            <div className="w-1/2 flex flex-col p-2 mt-2">
              <h1>Language</h1>
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
              pasteText === '' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => {
              setData();
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
