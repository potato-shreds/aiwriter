import React, { useState } from 'react';
import {
  Language,
  TargetAudience,
  ToneOfVoice,
} from '@/data/essay-hook-generator';
import { EssayType } from '@/data/essay-outline-generator';
import api from '@/app/utils/gemini';

interface responseDateObject {
  content: string;
}
interface MainContentProps {
  setResponseDate: React.Dispatch<React.SetStateAction<responseDateObject[]>>;
  activeTool: string;
  responseDate: responseDateObject[];
}

const MainContent: React.FC<MainContentProps> = ({
  setResponseDate,
  activeTool,
  responseDate,
}) => {
  const [language, setLanguage] = useState(Language[0].name);
  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [essayType, setEssayType] = useState(EssayType[0].name);
  const [essayPurpose, setEssayPurpose] = useState('');
  const [essayTitle, setEssayTitle] = useState('');

  const setData = () => {
    api
      .essayOutlineGenerator({
        content1: essayTitle,
        essayType: essayType,
        essayPurpose: essayPurpose,
        language: language,
        targetAudience: targetAudience,
        toneOfVoice: toneOfVoice,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };

  const isSatisfy = essayTitle.length > 0;

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="overflow-y-scroll">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Essay title or topic</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="The Impact of Social Media on Mental Health"
              value={essayTitle}
              onChange={(e) => setEssayTitle(e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col p-2 mt-2">
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
          <div className="flex flex-col p-2 mt-2">
            <h1>Essay purpose(optional)</h1>
            <div>
              <textarea
                className="w-full py-2 px-4 rounded-md border border-gray-200 mt-2"
                placeholder="To Persuade Readers About the Benefits of Online Faxing"
                rows={4}
                value={essayPurpose}
                onChange={(e) => setEssayPurpose(e.target.value)}
              ></textarea>
            </div>
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
