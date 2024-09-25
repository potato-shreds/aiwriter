'use client';

import React from 'react';

import GPTToolsType from './GPTToolsType';
import AiWritingToolsType from './AiWritingToolsType';

import '@/public/styles/aiWritingTools/toolsType.css';

interface ToolsTypesProps {
  activeTab: string;
  activeToolType: number;
  setActiveToolType: (index: number) => void;
}

const ToolsTypes: React.FC<ToolsTypesProps> = ({
  activeTab,
  activeToolType,
  setActiveToolType,
}) => {
  const changeToolType = (index: number) => {
    setActiveToolType(index);
  };

  return (
    <div className="top-[70px] w-[176px] sticky  left-0 h-full hidden md:block">
      {activeTab === 'Tools' ? (
        <AiWritingToolsType
          activeToolType={activeToolType}
          setActiveToolType={changeToolType}
        />
      ) : (
        <GPTToolsType
          activeToolType={activeToolType}
          setActiveToolType={changeToolType}
        />
      )}
    </div>
  );
};

export default ToolsTypes;
