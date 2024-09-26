'use client';

import React, { useState, useEffect } from 'react';

import { aiWritingToolsData, toolTypes } from '@/data/aiWritingToolsData';
import { getAiWritingToolsData } from './AiWritingToolsContentFunc';

interface AiWritingToolsContentProps {
  activeToolType: number;
  searchValue: string;
}

type AiWritingToolItems = {
  id: number;
  icon_address: string;
  tool_type_label: string;
  tool_list: AiWritingToolItem[];
};
interface AiWritingToolItem {
  icon_address: string;
  is_popular: boolean;
  recommend_sort: number;
  toolType: {
    id: number;
    tool_type_label: string;
    tool_type: string;
  };
  tool_desc: string;
  tool_name_label: string;
  tool_url: string;
  tool_host: string | null; // 允许为 null
}

const AiWritingToolsContent: React.FC<AiWritingToolsContentProps> = ({
  activeToolType,
  searchValue,
}) => {
  const [toolsData, setToolsData] = useState<AiWritingToolItems[]>([]);

  useEffect(() => {
    console.log(searchValue);

    const toolsData = getAiWritingToolsData(
      aiWritingToolsData,
      toolTypes[activeToolType].tool_type_label,
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
                className="aiWritingTool border border-[#E9EEF6] p-4 rounded-lg group transition-all relative"
                key={index}
              >
                <div className="font-semibold flex space-x-2 main-color">
                  <div>
                    <span
                      className="inline-flex justify-center items-center w-6 h-6"
                      style={{
                        background: `url(https://hix.ai${item.icon_address})`,
                      }}
                    ></span>
                  </div>
                  <a
                    className="block after:absolute after:w-full after:h-full after:left-0 after:top-0"
                    href={`https://${item.tool_host}/${item.tool_url}`}
                    target="_blank"
                  >
                    {item.tool_name_label}
                  </a>
                </div>
                <p className="mt-1 text-sm text-display-secondary auxiliary-color">
                  {item.tool_desc}
                </p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default AiWritingToolsContent;
