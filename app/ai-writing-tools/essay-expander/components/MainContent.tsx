'use client';
import React, { useState } from 'react';
import api from '@/app/utils/gemini';

import {
  Language,
  TargetAudience,
  ToneOfVoice,
} from '@/data/essay-hook-generator';

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
  const [language, setLanguage] = useState(Language[0].name);
  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [numberOfWords, setNumberOfWords] = useState('300');

  const setData = () => {
    api
      .essayExpander({
        content1: content1,
        language: language,
        targetAudience: targetAudience,
        toneOfVoice: toneOfVoice,
        number: numberOfWords,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };
  const isSatisfy = content1.length > 0;

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div>
          <div className="flex">
            <h1>Essay Extender</h1>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Content to expand on</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Businesses today need every edge and advantage they can get."
              rows={2}
              onChange={(e) => {
                setContent1(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex flex-wrap">
            <div className="flex-1 flex flex-col p-2 mt-2">
              <h1>Target audience</h1>
              <select
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {TargetAudience.map((language) => (
                  <option key={language.id} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex flex-col p-2 mt-2">
              <h1>Tone of voice</h1>
              <select
                value={toneOfVoice}
                onChange={(e) => setToneOfVoice(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {ToneOfVoice.map((language) => (
                  <option key={language.id} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full flex flex-col p-2 mt-2">
              <h1>Number of output words</h1>
              <input
                type="text"
                placeholder="300"
                className="w-full mt-2 p-1 border border-gray-200 rounded-md"
                onChange={(e) => setNumberOfWords(e.target.value)}
              />
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
