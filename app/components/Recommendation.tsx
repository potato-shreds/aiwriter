'use client';

import React, { useState } from 'react';

import { aiAppsData, writingToolsHeaderData } from '@/data/headerData';

const Recommendation: React.FC = () => {
  const [toolsIndex, setToolsIndex] = useState(-1);

  const changeToolsIndex = (writingToolsIndex: number) => {
    if (toolsIndex === writingToolsIndex) {
      setToolsIndex(-1);
    } else {
      setToolsIndex(writingToolsIndex);
    }
  };

  return (
    <div className="py-12 lg:py-8 max-w-[800px] px-4 mx-auto text-white font-sans">
      <div className="flex flex-row gap-6 text-left justify-between flex-wrap">
        <dl className=" flex flex-col space-y-3 [&_dd]:text-sm">
          <dt className=" mb-5 lg:mb-4 md:mb-3">Writing Tools</dt>
          {writingToolsHeaderData.map((writingToolsItem, writingToolsIndex) => (
            <dd
              key={writingToolsIndex}
              className="w-fit gap-1 hover:cursor-pointer"
              onClick={() => changeToolsIndex(writingToolsIndex)}
            >
              <div className="writing-tools-item flex items-center gap-2">
                <span>{writingToolsItem.tool_type_label}</span>
                <span
                  className={`bcg i-down ${
                    writingToolsIndex === toolsIndex ? '' : '-rotate-90'
                  } w-[18px] h-[18px] shrink-0 transition-all bg-white rounded-full`}
                ></span>
              </div>
              <div
                className="flex flex-col gap-1 mt-1"
                onClick={(event) => event.stopPropagation()}
              >
                {writingToolsIndex === toolsIndex &&
                  writingToolsHeaderData[toolsIndex].tool_list.map(
                    (item, index) => (
                      <a
                        key={index}
                        className="writing-tools-item break-words whitespace-normal block"
                        href={item.tool_url}
                      >
                        {item.tool_name}
                      </a>
                    )
                  )}
              </div>
            </dd>
          ))}
        </dl>
        <dl className=" flex flex-col space-y-3 [&_dd]:text-sm">
          <dt className=" mb-5 lg:mb-4 md:mb-3">AI Apps</dt>
          {aiAppsData.map((aiAppItem, aiAppIndex) => (
            <dd key={aiAppIndex}>
              <div className="flex items-center gap-2">
                <a
                  className="ai-app-item break-words whitespace-normal block underline "
                  href={aiAppItem.app_url}
                >
                  {aiAppItem.app_name}
                </a>
                <span>&gt;</span>
              </div>
            </dd>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Recommendation;
