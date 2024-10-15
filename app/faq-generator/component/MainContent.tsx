'use client';
import React, { useState } from 'react';
import {
  Language,
  TargetAudience,
  ToneOfVoice,
} from '@/data/essay-hook-generator';
import { BookGenre } from '@/data/book-writer';

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
  const [number, setNumber] = useState('');

  const [bookGenre, setBookGenre] = useState(BookGenre[0].name);
  const [language, setLanguage] = useState(Language[0].name);

  const isSatisfy = () => {
    return content1;
  };
  const setData = () => {
    api
      .faqGenerator({
        content1,
        content2,
        bookGenre,
        number,
        language,
      })
      .then((res) => {
        setResponseDate([...responseDate, { content: res.content }]);
      });
  };
  return (
    <div className="p-4 pl-0 pr-6 h-full ">
      <div className="flex flex-col justify-between h-full p-4  bg-white rounded-2xl shadow-xl">
        <div className="overflow-y-scroll">
          <div className="flex">
            <h2>{activeTool}</h2>
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>FAQ Topic</h3>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Tell us where these FAQs will be used. Example: customer support"
              onChange={(e) => setContent1(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-col p-2 mt-2">
            <h3>FAQ source (optional)</h3>
            <textarea
              className="w-90 py-2 px-4 rounded-md border border-gray-200 mt-2 resize-none"
              placeholder="Paste your text sources for generating FAQs."
              onChange={(e) => setContent2(e.target.value)}
              rows={5}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="flex-1 flex flex-col p-2 mt-2">
              <h3>Book Genre</h3>
              <select
                onChange={(e) => setBookGenre(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {BookGenre.map((language) => (
                  <option key={language.id} value={language.name}>
                    {language.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex flex-col p-2 mt-2">
              <h3>Number of output FAQs</h3>
              <select
                onChange={(e) => setNumber(e.target.value)}
                className="p-2 rounded-md border border-gray-200 mt-2"
              >
                {Array.from({ length: 8 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
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
