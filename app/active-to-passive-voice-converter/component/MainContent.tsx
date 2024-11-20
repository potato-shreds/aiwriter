'use client';
import React, { useState, useMemo } from 'react';
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
import MainContentButton from '@/app/components/buttons/mainContentButton';

const MainContent: React.FC<MainContentProps> = ({
  setResponseDate,
  activeTool,
  responseDate,
}) => {
  const [content1, setContent1] = useState('');

  const [language, setLanguage] = useState(Language[0].name);
  const [isLoading, setIsLoading] = useState(false);

  const isSatisfy = useMemo(() => {
    return content1;
  }, [content1]);
  const setData = () => {
    setIsLoading(true);
    api
      .activeToPassiveVoiceConverter({
        content1,
        language,
      })
      .then((res) => {
        setIsLoading(false);
        setResponseDate([...responseDate, { content: res.content }]);
      })
      .catch((err) => {
        setResponseDate([...responseDate, { content: 'Something went wrong' }]);
      });
  };
  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="">
          <div className="flex">
            <h3>{activeTool}</h3>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>Paste your content here</h3>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder=""
              onChange={(e) => setContent1(e.target.value)}
              rows={5}
            />
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
