'use client';
import React, { useState } from 'react';
import { Language } from '@/data/essay-rewriter';

const MainContent: React.FC = () => {
  const [originalText, setOriginalText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedGoals, setSelectedGoals] = useState('English');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    console.log(event.target.value);
  };

  const handleGoalsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGoals(event.target.value);
    console.log(event.target.value);
  };

  const isSatisfy = () => {
    return originalText.length > 0;
  };

  return (
    <div className="flex flex-col py-4 h-full">
      <div className="flex-1 flex gap-4">
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg font-semibold">Your Content</h1>

          <div className="h-full flex  flex-col bg-white rounded-xl p-4 box-border mt-2 justify-between">
            <div className="flex-1 h-32">
              <textarea
                className="w-full h-full border-0 outline-none resize-none p-2 bg-transparent"
                placeholder="Enter the text you want to humanize here"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className={`bg-blue-400 text-white px-4 py-2 rounded-md ${
                  !isSatisfy() && 'opacity-50 pointer-events-none'
                } `}
              >
                Humanize
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg font-semibold">Output</h1>

          <div className="h-full flex  flex-col bg-white rounded-xl p-4 box-border mt-2 justify-between">
            <div className="flex-1 h-32">
              <textarea
                className="w-full h-full border-0 outline-none resize-none p-2 bg-transparent"
                placeholder=""
                value={rewrittenText}
                disabled
              ></textarea>
            </div>
            {rewrittenText !== '' && (
              <div className="flex justify-end">
                <div className="flex gap-2">
                  <button className="bg-blue-400 text-white p-1 rounded-3xl">
                    copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
