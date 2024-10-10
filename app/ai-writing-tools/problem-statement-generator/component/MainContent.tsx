import React, { useState } from 'react';
import { Language } from '@/data/essay-hook-generator';
import { ResearchProblemType } from '@/data/problem-statement-generator';

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
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');

  const [researchProblemType, setResearchProblemType] = useState(
    ResearchProblemType[0].name
  );
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = () => {
    return content1 && content2 && content3;
  };
  // Send a network request and get a response
  const setResponse = () => {};

  return (
    <div className="p-4 pl-0 pr-6 h-full">
      <div className="flex flex-col justify-between h-full p-4 bg-white rounded-2xl shadow-xl">
        <div className="">
          <div className="flex">
            <h1>{activeTool}</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 flex flex-col p-2 mt-2">
              <h1>Research Problem Type</h1>
              <select
                onChange={(e) => setResearchProblemType(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {ResearchProblemType.map((lang) => (
                  <option key={lang.id} value={lang.name}>
                    {lang.name}
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

          <div className="flex flex-col p-2 mt-2">
            <h1>Area of Concern</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Formulate your area of concern"
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>The key arguments</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Enter your key arguments here"
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h1>The essential counterargument</h1>
            <input
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2"
              type="text"
              placeholder="Enter your essential counterarguments here"
              onChange={(e) => setContent3(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end items-center mb-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSatisfy() ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => {
              if (isSatisfy()) {
                setResponse();
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
