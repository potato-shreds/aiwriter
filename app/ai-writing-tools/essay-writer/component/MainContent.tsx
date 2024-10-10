'use client';
import React, { useState, useMemo } from 'react';
import { Language } from '@/data/essay-hook-generator';

import { EssayType, Words } from '@/data/essay-writer';
import api from '@/app/utils/gemini';

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
  const [thesisTopic, setThesisTopic] = useState('');

  const [essayType, setEssayType] = useState(EssayType[0].name);
  const [words, setWords] = useState(Words[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = useMemo(() => {
    return thesisTopic;
  }, [thesisTopic]);

  const setData = () => {
    api
      .essayWriter({
        content1: thesisTopic,
        essayType: essayType,
        words: words,
        language: language,
      })
      .then((res) => {
        setResponseDate(res);
      });
  };

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className=" ">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Describe your topic</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              rows={5}
              placeholder=""
              value={thesisTopic}
              onChange={(e) => setThesisTopic(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap">
            <div className="flex-1 flex flex-col p-2 mt-2">
              <h1>Essay Type</h1>
              <select
                value={essayType}
                onChange={(e) => setEssayType(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {EssayType.map((language) => (
                  <option key={language.id} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex flex-col p-2 mt-2">
              <h1>Words</h1>
              <select
                value={words}
                onChange={(e) => setWords(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {Words.map((language) => (
                  <option key={language.id} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
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
              isSatisfy ? '' : 'opacity-50 cursor-not-allowed'
            } `}
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
