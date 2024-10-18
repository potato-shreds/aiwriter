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
  const [content3, setContent3] = useState('');

  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = () => {
    return content1;
  };
  const setData = () => {
    api
      .paragraphGenerator({
        content1,
        content2,
        content3,
        targetAudience,
        toneOfVoice,
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
            <h1>What is your paragraph about?</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Tell us the main points of your paragraph or paste the paragraph title here"
              onChange={(e) => setContent1(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Keywords (optional)</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Enter your keywords"
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Additional information (optional)</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Add additional information here"
              onChange={(e) => setContent3(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 flex-1 flex flex-col p-2 mt-2">
              <h1>Target audience</h1>
              <select
                onChange={(e) => setTargetAudience(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {TargetAudience.map((audience) => (
                  <option key={audience.id} value={audience.name}>
                    {audience.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2 flex-1 flex flex-col p-2 mt-2">
              <h1>Tone of voice</h1>
              <select
                onChange={(e) => setToneOfVoice(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {ToneOfVoice.map((tone) => (
                  <option key={tone.id} value={tone.name}>
                    {tone.name}
                  </option>
                ))}
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
