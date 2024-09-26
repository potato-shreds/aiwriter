import React from 'react';

import { writingToolsHeaderData } from '@/data/headerData';

interface HeaderWritingToolsProps {
  show: boolean;
  type: 'hid' | 'block';
}

const HeaderWritingTools: React.FC<HeaderWritingToolsProps> = ({
  show,
  type,
}) => {
  return show && type === 'block' ? (
    <div className="bg-white shadow-[0px_12px_24px_rgba(0,80,125,0.08)] absolute top-[62px] left-1/2 -translate-x-1/2 max-w-[1300px] w-full min-w-fit rounded-xl transition-all overflow-hidden origin-top-left opacity-0 scale-y-0 -translate-y-5 -z-10 flex group-hover/item:opacity-100 group-hover/item:scale-y-100 group-hover/item:translate-y-0 group-hover/item:z-10">
      <div className="px-[30px] py-5 space-y-4 flex-1">
        {writingToolsHeaderData.map(
          (writingToolsHeaderItem, writingToolsHeaderIndex) => (
            <div key={writingToolsHeaderIndex}>
              <span className="text-sm font-normal text-[#677788]">
                {writingToolsHeaderItem.tool_type_label}
              </span>
              <ul className="pt-2 border-t border-[#E9EEF6] mt-2 grid grid-cols-3 gap-x-5">
                {writingToolsHeaderItem.tool_list?.map((item, index) => (
                  <li
                    className="writing-tools-item hover:cursor-pointer flex items-center gap-2 px-2 py-[6px] rounded-lg hover:bg-[#F1F6FE] relative text-[#677788]"
                    key={index}
                  >
                    <div className="w-[34px] h-[34px] bg-white p-1 flex items-center justify-center rounded-lg border border-[#F1F6FE] shadow-icon">
                      <span
                        className="w-[26px] h-[26px] bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(https://hix.ai${item.icon_address})`,
                        }}
                      ></span>
                    </div>
                    <a
                      className="inline-block font-semibold text-display text-sm"
                      href={item.tool_url}
                      target="_blank"
                    >
                      {item.tool_name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
        <a
          href="/ai-writing-tools"
          className="w-fit mx-auto text-primary mt-3 font-semibold flex items-center gap-1 group"
        >
          See All 120+ AI Writing Tools
          <span className="w-6 i-com--right-arrow transition-all group-hover:translate-x-2"></span>
        </a>
      </div>
    </div>
  ) : show && type === 'hid' ? (
    <div className="mx-4 text-display-secondary border-b block">
      {writingToolsHeaderData.map(
        (writingToolsHeaderItem, writingToolsHeaderIndex) => (
          <div key={writingToolsHeaderIndex} className="px-1 py-[10px]">
            <p className="text-md">{writingToolsHeaderItem.tool_type_label}</p>
            <ul>
              {writingToolsHeaderItem.tool_list?.map((item, index) => (
                <li
                  className="writing-tools-item hover:cursor-pointer"
                  key={index}
                >
                  <a
                    className="flex gap-x-3 items-center px-3 py-2 rounded-lg"
                    href={item.tool_url}
                    target="_blank"
                  >
                    <div className="w-[34px] h-[34px] bg-white p-1 flex items-center justify-center rounded-lg border border-[#F1F6FE] shadow-icon">
                      <span
                        className="w-[26px] h-[26px] bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(https://hix.ai${item.icon_address})`,
                        }}
                      ></span>
                    </div>
                    <span className="text-display font-semibold">
                      {item.tool_name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
      <a
        href="/ai-writing-tools"
        className="w-fit mx-auto text-primary mt-3 font-semibold flex items-center gap-1 group"
      >
        See All 120+ AI Writing Tools
        <span className="w-6 i-com--right-arrow transition-all group-hover:translate-x-2"></span>
      </a>
    </div>
  ) : null;
};

export default HeaderWritingTools;
