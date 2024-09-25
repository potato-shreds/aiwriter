'use client';

import React from 'react';

import '@/public/styles/aiWritingTools/toolsTabs.css';

interface ToolsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ToolsTabs: React.FC<ToolsTabsProps> = ({ activeTab, setActiveTab }) => {
  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mx-auto bg-[#F7FAFF] border border-[#DEE8F9] w-fit p-1 rounded-full flex items-center gap-x-2 text-sm font-semibold mb-6 cursor-pointer">
        <div
          className={`${
            activeTab === 'Tools'
              ? 'text-primary bg-white rounded-full shadow-cardPlan py-1 px-4 hover:text-primary'
              : 'text-[#677788] py-1 px-4 hover:text-primary'
          }`}
          onClick={() => changeTab('Tools')}
        >
          AI writing tools
        </div>
        <div
          className={`${
            activeTab === 'GPTs'
              ? 'text-primary bg-white rounded-full shadow-cardPlan py-1 px-4 hover:text-primary'
              : 'text-[#677788] py-1 px-4 hover:text-primary'
          }`}
          onClick={() => changeTab('GPTs')}
        >
          GPTs
        </div>
      </div>
    </div>
  );
};

export default ToolsTabs;
