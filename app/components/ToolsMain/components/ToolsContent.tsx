import React from 'react';
import { getAiWritingToolsData } from '@/app/ai-writing-tools/components/ToolsContent/AiWritingToolsContentFunc';
import { aiWritingToolsData, toolTypes } from '@/data/aiWritingToolsData';

interface ToolsContentProps {
  activeToolType: number;
  activeTool: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ToolsContent: React.FC<ToolsContentProps> = ({
  activeToolType,
  activeTool,
  isOpen,
  setIsOpen,
}) => {
  const toolsData = getAiWritingToolsData(
    aiWritingToolsData,
    toolTypes[activeToolType].tool_type_label,
    ''
  );

  return (
    <div
      className={`transition-transform duration-300 ${
        isOpen ? 'translate-x-0 w-[530px] ' : 'translate-x-[-530px]'
      }  h-[526px] overflow-hidden bg-white`}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="space-y-14 h-full overflow-y-auto">
        {toolsData.map((toolItem, toolIndex) => (
          <li key={toolIndex} className="pl-4">
            <h2 className="font-bold md:text-xl text-lg py-4 sticky top-0 bg-white z-10">
              {toolItem.tool_type_label}
            </h2>
            <ul className="block mt-5 md:mt-3">
              {toolItem.tool_list.map((item, index) => (
                <li
                  className={`${
                    item.tool_name_label === activeTool
                      ? 'border-blue-400 border-2'
                      : ''
                  } aiWritingTool border border-[#E9EEF6] p-4 rounded-lg group transition-all relative mb-4`}
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
                      href={`http://${item.tool_host}/${item.tool_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
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
    </div>
  );
};

export default ToolsContent;
