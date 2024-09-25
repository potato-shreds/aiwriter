'use client';

import React, { useState, useEffect } from 'react';

import { getGPTsToolsData } from './GPTToolsContentFunc';
import { gptToolsData, toolTypes } from '@/data/gptToolsData';

interface GPTToolsContentProps {
  activeToolType: number;
  searchValue: string;
}

type GPTToolItems = {
  tool_type_label: string;
  tool_list: GPTToolItem[];
};
type GPTToolItem = {
  id: number;
  tool_type: string;
  desc: string;
  tool_name: string;
  tool_url: string;
  enable: boolean;
  tool_type_icon: string;
  tool_sort: number;
};

const GPTToolsContent: React.FC<GPTToolsContentProps> = ({
  activeToolType,
  searchValue,
}) => {
  const [toolsData, setToolsData] = useState<GPTToolItems[]>([]);
  useEffect(() => {
    const toolsData = getGPTsToolsData(
      gptToolsData,
      toolTypes[activeToolType].tool_type,
      searchValue
    );
    setToolsData(toolsData);
  }, [activeToolType, searchValue]);

  return (
    <ul className="space-y-14 md:space-y-6">
      {toolsData.map((toolItem, toolIndex) => (
        <li key={toolIndex}>
          <h2 className="text-xl font-bold md:text-2xl main-color">
            {toolItem.tool_type_label}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 md:mt-3">
            {toolItem.tool_list.map((item, index) => (
              <li
                className="aiWritingTool border border-[#E9EEF6] rounded-lg group transition-all"
                key={index}
              >
                <a
                  href={`${item.tool_url}`}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="p-4 w-full h-full block"
                >
                  <div className="font-semibold flex items-center space-x-2 main-color">
                    <span>{item.tool_name}</span>
                  </div>
                  <p className="mt-1 text-sm text-display-secondary auxiliary-color">
                    {item.desc}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default GPTToolsContent;
