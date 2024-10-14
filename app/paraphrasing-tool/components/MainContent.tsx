'use client';

import React, { useState } from 'react';
import { Language, Domain } from '@/data/essay-rewriter';
import api from '@/app/utils/gemini';

const MainContent: React.FC = () => {
  const [originalText, setOriginalText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedDomain, setSelectedDomain] = useState('Standard');
  const [selectedGoals, setSelectedGoals] = useState('English');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
    console.log(event.target.value);
  };
  const handleDomainChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomain(event.target.value);
    console.log(event.target.value);
  };
  const handleGoalsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGoals(event.target.value);
    console.log(event.target.value);
  };
  const setData = () => {
    api
      .paraphrasingTool({
        content1: originalText,
        domain: selectedDomain,
        language: selectedLanguage,
        outputLanguage: selectedGoals,
      })
      .then((res) => {
        setRewrittenText(res.content);
      });
  };

  const isSatisfy = originalText.length > 0;

  return (
    <div className="flex flex-col py-4 h-full">
      <span className="text-base text-slate-500">Essay Rewriter</span>
      <div className="flex-1 flex gap-4">
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg font-semibold">Original</h1>
          <div className="flex gap-8 mt-2 rounded-md">
            <div className="flex-1 ">
              <label
                htmlFor="language-select"
                className="sr-only  rounded-2xl overflow-hidden"
              >
                Select Language
              </label>
              <select
                id="language-select"
                className="coco-select coco-select-sm coco-select-borderless w-full"
                value={selectedLanguage}
                onChange={handleChange}
              >
                {Language.map((item) => {
                  return (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex-1 ">
              <label
                htmlFor="language-select"
                className="sr-only rounded-2xl overflow-hidden"
              >
                Select Domain
              </label>
              <select
                id="language-select"
                className="coco-select coco-select-sm coco-select-borderless w-full"
                value={selectedDomain}
                onChange={handleDomainChange}
              >
                {Domain.map((item) => {
                  return (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="h-full flex  flex-col bg-white rounded-xl p-4 box-border mt-2 justify-between">
            <div className="flex-1 h-32">
              <textarea
                className="w-full h-full border-0 outline-none resize-none p-2 bg-transparent"
                placeholder="Copy and paste your text here"
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className={`bg-blue-400 text-white px-4 py-2 rounded-md ${
                  isSatisfy ? '' : 'cursor-not-allowed opacity-50'
                } `}
                onClick={() => {
                  if (isSatisfy) {
                    setData();
                  } else {
                  }
                }}
              >
                Rewrite
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-lg font-semibold">Rewritten</h1>
          <div className="flex gap-8 mt-2 rounded-md w-1/2">
            <div className="flex-1 ">
              <label
                htmlFor="language-select"
                className="sr-only rounded-2xl overflow-hidden"
              >
                Select Goals
              </label>
              <select
                id="language-select"
                className="coco-select coco-select-sm coco-select-borderless w-full"
                value={selectedGoals}
                onChange={handleGoalsChange}
              >
                {Language.map((item) => {
                  return (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
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
