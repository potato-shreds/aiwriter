'use client';
import React, { useState, useMemo } from 'react';
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
  const [EssayTopic, setEssayTopic] = useState('');
  const [TargetKeyWords, setTargetKeyWords] = useState('');
  const [ReferencingStyle, setReferencingStyle] = useState('');
  const [outlineSuggestions, setOutlineSuggestions] = useState('');
  const [essayTitle, setEssayTitle] = useState('');

  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = useMemo(() => {
    return EssayTopic && TargetKeyWords && ReferencingStyle;
  }, [EssayTopic, TargetKeyWords, ReferencingStyle]);

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="overflow-y-scroll ">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Essay Topic</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              placeholder="If you have a specific title, please provide it here"
              value={EssayTopic}
              onChange={(e) => setEssayTopic(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Target keywords</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              value={TargetKeyWords}
              placeholder="Add your target keywords"
              onChange={(e) => setTargetKeyWords(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Referencing Style</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              placeholder="Indicate the preferred referencing style or citation format, e.g., APA, MLA, Harvard"
              value={ReferencingStyle}
              onChange={(e) => setReferencingStyle(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Outline suggestions (optional)</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              placeholder="If you have a specific outline or structure in mind, please provide it here"
              value={outlineSuggestions}
              onChange={(e) => setOutlineSuggestions(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Essay title (optional)</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              value={essayTitle}
              placeholder="If you have a specific title, please provide it here"
              onChange={(e) => setEssayTitle(e.target.value)}
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
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSatisfy ? '' : 'opacity-50 cursor-not-allowed'
            } `}
            onClick={() => {
              if (isSatisfy) {
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
