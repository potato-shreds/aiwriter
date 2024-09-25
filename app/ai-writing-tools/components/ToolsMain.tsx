'use client';

import React, { useState } from 'react';

import ToolsTabs from './ToolsTabs';
import ToolsTypes from './ToolsTypes/ToolsTypes';
import ToolsContent from './ToolsContent/ToolsContent';

interface ToolsMainProps {
  activeTab: string;
  searchValue: string;
  setActiveTab: (tab: string) => void;
}

const ToolsMain: React.FC<ToolsMainProps> = ({
  activeTab,
  setActiveTab,
  searchValue,
}) => {
  const [activeToolType, setActiveToolType] = useState(0);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setActiveToolType(0);
  };

  const changeToolType = (index: number) => {
    setActiveToolType(index);
  };

  return (
    <div className="max-w-[1232px] px-4 mx-auto pb-14 pt-6 md:py-6 font_fam">
      <ToolsTabs activeTab={activeTab} setActiveTab={changeTab} />
      <div className="flex relative gap-x-8">
        <ToolsTypes
          activeTab={activeTab}
          activeToolType={activeToolType}
          setActiveToolType={changeToolType}
        />
        <ToolsContent
          activeTab={activeTab}
          activeToolType={activeToolType}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default ToolsMain;
