'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { toolTypes } from '@/data/aiWritingToolsData';
import ToolsContent from './ToolsContent';

interface NavBarProps {
  activeTool: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  ToolType: number;
}

const NavBar: React.FC<NavBarProps> = ({
  activeTool,
  isOpen,
  setIsOpen,
  ToolType,
}) => {
  const [activeToolType, setActiveToolType] = useState(0);
  const handleToolType = (index: number) => {
    setIsOpen(!isOpen);
    setActiveToolType(index);
  };
  return (
    <div className="flex justify-center items-center relative">
      <div>
        <ul className="bg-white shadow-xl rounded-2xl p-2 my-4">
          {toolTypes.map((item, index) => (
            <li
              onClick={() => handleToolType(index)}
              id={`mli_${item.tool_type_label
                .replace(/\s+/g, '-')
                .toLowerCase()}`}
              className={`${
                ToolType === index
                  ? 'text-primary TabBar_toolIconActive__b3QJJ bg-[#F1F6FE]'
                  : 'text-display'
              } w-20 h-16 TabBar_toolIcon__H2HT8  hover:cursor-pointer hover:bg-[#F1F6FE]`}
              key={index}
            >
              <div className="flex flex-col items-center text-center group hover:cursor-pointer hover transition-all select-none hover:bg-[rgba(244,249,255,0.56)] px-3 py-[10px] TabBar_toolIconActive__b3QJJ text-display-secondary">
                <div className="w-[18px] h-[18px] relative TabBar_toolIconActive__b3QJJ">
                  <figure className="w-[18px] h-[18px] absolute  top-0 ">
                    <Image
                      src={`http://hix.ai${item.icon_address}`}
                      alt={item.tool_type_label}
                      width={22}
                      height={22}
                    />
                  </figure>
                </div>

                <span className="text-xs mt-1">{item.tool_type_label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`absolute left-[6.02rem] top-1/2 transform -translate-y-1/2 overflow-hidden rounded-xl -z-10 ${
          isOpen ? 'z-10' : ''
        }`}
      >
        <ToolsContent
          activeToolType={activeToolType}
          activeTool={activeTool}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};

export default NavBar;
