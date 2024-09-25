import React from 'react';

import AiWritingToolsContent from './AiWritingToolsContent';
import GPTToolsContent from './GPTToolsContent';

import '@/public/styles/aiWritingTools/toolsContent.css';

interface ToolsContentProps {
  activeTab: string;
  activeToolType: number;
  searchValue: string;
}

const ToolsContent: React.FC<ToolsContentProps> = ({
  activeTab,
  activeToolType,
  searchValue,
}) => {
  return (
    <div className="flex-1">
      {activeTab === 'Tools' ? (
        <AiWritingToolsContent
          activeToolType={activeToolType}
          searchValue={searchValue}
        />
      ) : (
        <GPTToolsContent
          activeToolType={activeToolType}
          searchValue={searchValue}
        />
      )}
    </div>
  );
};

export default ToolsContent;
