import React from 'react';
import Image from 'next/image';

import { toolTypes } from '@/data/gptToolsData';

interface GPTToolsTypeProps {
  activeToolType: number;
  setActiveToolType: (index: number) => void;
}

const GPTToolsType: React.FC<GPTToolsTypeProps> = ({
  activeToolType,
  setActiveToolType,
}) => {
  return (
    <aside className="w-full">
      <ul className="space-y-1">
        {toolTypes.map((item, index) => {
          return (
            <li key={index} onClick={() => setActiveToolType(index)}>
              <div
                className={`${
                  activeToolType === index
                    ? 'text-primary TabBar_toolIconActive__b3QJJ bg-[#F1F6FE]'
                    : 'text-display'
                } TabBar_toolIcon__H2HT8  flex items-center space-x-2 w-full p-2 rounded-lg hover:cursor-pointer hover:text-primary hover:bg-[#F1F6FE]`}
              >
                <div className="w-[18px] h-[18px] relative TabBar_iconWrap__gqqBE">
                  <figure className="w-[18px] h-[18px] absolute left-[18px] top-0">
                    <Image
                      src={`https://hix.ai${item.tool_type_icon}`}
                      alt={item.tool_type}
                      loading="eager"
                      width={18}
                      height={18}
                      decoding="async"
                      className="TabBar_menuIcon__Tb961"
                      style={{ color: 'transparent' }}
                    />
                  </figure>
                </div>
                <span className="text-sm font-semibold">{item.tool_type}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default GPTToolsType;
