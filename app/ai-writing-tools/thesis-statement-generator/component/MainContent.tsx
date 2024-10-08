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
  const [thesisTopic, setThesisTopic] = useState('');
  const [topicMainIdea, setTopicMainIdea] = useState('');
  const [evidence, setEvidence] = useState('');
  const [anotherEvidence, setAnotherEvidence] = useState('');
  const [counterargument, setCounterargument] = useState('');

  const [targetAudience, setTargetAudience] = useState(TargetAudience[0].name);
  const [toneOfVoice, setToneOfVoice] = useState(ToneOfVoice[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = useMemo(() => {
    return (
      thesisTopic &&
      topicMainIdea &&
      evidence &&
      anotherEvidence &&
      counterargument
    );
  }, [thesisTopic, topicMainIdea, evidence, anotherEvidence, counterargument]);

  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="overflow-y-scroll ">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>

          <div className="flex flex-col p-2 mt-2">
            <h1>Thesis topic</h1>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              rows={5}
              placeholder="Advantages of Jogging VS Other Types of Sports"
              value={thesisTopic}
              onChange={(e) => setThesisTopic(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Main idea about the topic</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Jogging is beneficial for our body"
              value={topicMainIdea}
              onChange={(e) => setTopicMainIdea(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Evidence to support the main idea</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Jogging helps losing weight"
              value={evidence}
              onChange={(e) => setEvidence(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Another Evidence to support the main idea</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Jogging strengthens our immune system"
              value={anotherEvidence}
              onChange={(e) => setAnotherEvidence(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>Counterargument for the thesis statement</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Jogging could cause joint pain and injury"
              value={counterargument}
              onChange={(e) => setCounterargument(e.target.value)}
            />
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
