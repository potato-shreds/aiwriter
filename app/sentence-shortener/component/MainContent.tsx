'use client';
import React, { useState } from 'react';
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
  activeTool: string;
}

const MainContent: React.FC<MainContentProps> = ({
  setResponseDate,
  activeTool,
}) => {
  const [content1, setContent1] = useState('');
  const [number, setNumber] = useState('300');

  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = () => {
    return content1;
  };

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="">
          <div className="flex">
            <h2>{activeTool}</h2>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Sentence to shorten</h3>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Businesses today need every edge and advantage they can get."
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Number of output words</h3>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="300"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap">
            <div className="flex-1 flex flex-col p-2 mt-2">
              <h3>Target audience</h3>
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
              <h3>Tone of voice</h3>
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
              isSatisfy() ? '' : 'opacity-50 cursor-not-allowed'
            } `}
            onClick={() => {
              if (isSatisfy()) {
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
