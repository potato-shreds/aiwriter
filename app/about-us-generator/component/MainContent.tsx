'use client';
import React, { useState, useMemo } from 'react';
import {
  Language,
  TargetAudience,
  ToneOfVoice,
} from '@/data/essay-hook-generator';
import MainContentButton from '@/app/components/buttons/mainContentButton';

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
  const [content3, setContent3] = useState('300');

  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [language, setLanguage] = useState(Language[0].name);
  const [isLoading, setIsLoading] = useState(false);

  const isSatisfy = useMemo(() => {
    return content1 && content2 && content3;
  }, [content1, content2, content3]);
  const setData = () => {
    setIsLoading(true);
    api
      .aboutUsGenerator({
        content1,
        content2,
        targetAudience,
        toneOfVoice,
        outputLanguage: language,
      })
      .then((res) => {
        setIsLoading(false);
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="overflow-y-scroll ">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Business information</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Since its founding in 1970, the Five-Star Stories has been dedicated to providing fearless, high-quality local journalism, especially in times of crisis."
              onChange={(e) => setContent1(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Target keywords</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              type="text"
              placeholder="Add your target keywords"
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Number of output words</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              type="text"
              placeholder="300"
              onChange={(e) => setContent3(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 flex-1 flex flex-col p-2 mt-2">
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
            <div className="w-1/2 flex-1 flex flex-col p-2 mt-2">
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
          <MainContentButton
            setData={setData}
            isSatisfy={isSatisfy}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
