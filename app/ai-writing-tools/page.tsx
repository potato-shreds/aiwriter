'use client';

import React, { useState, useEffect } from 'react';

import Header from '@/app/components/Header/Header';
import BriefIntroduction from './components/BriefIntroduction';
import ToolsMain from './components/ToolsMain';
import Footer from '@/app/components/Footer';

import '@/public/styles/aiWritingTools/aiWritingTools.css';

const AiWritingTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tools');
  const [title, setTitle] = useState('');
  const [text, setText] = useState([] as string[]);
  const [placeholder, setPlaceholder] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (activeTab === 'Tools') {
      setTitle(
        'Best AI Writing Tools: AI-powered Tools to Cover All Your Writing Needs'
      );
      setText([
        'Choose from ',
        '318 templates',
        ' and bring your ideas to life with high-quality content.',
      ]);
      setPlaceholder('Search for an AI writing tool');
    } else if (activeTab === 'GPTs') {
      setTitle(
        'Best AI Writing GPTs: Explore ChatGPT-powered GPTs for All Your Writing Needs'
      );
      setText([
        'Choose from ',
        '55',
        '+ GPTs template to craft your first-rate content.',
      ]);
      setPlaceholder('Search for a GPTs');
    }
  }, [activeTab]);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const changeSearchValue = (value: string) => {
    setSearch(value);
  };

  return (
    <div>
      <Header />
      <BriefIntroduction
        title={title}
        text={text}
        placeholder={placeholder}
        setSearchValue={changeSearchValue}
      />
      <ToolsMain
        activeTab={activeTab}
        setActiveTab={changeTab}
        searchValue={search}
      />
      <Footer />
    </div>
  );
};

export default AiWritingTools;
