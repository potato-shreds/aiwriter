'use client';

import React, { useState } from 'react';
import NavBar from './components/NavBar';

interface ToolsMainProps {
  main: React.ReactNode;
  response?: React.ReactNode;
  activeTool: string;
  ToolType: number;
}

const ToolsMain: React.FC<ToolsMainProps> = ({
  main,
  response,
  activeTool,
  ToolType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" mx-auto px-6 flex justify-center items-center ">
      <div className="shadow-2xl flex justify-center items-center pl-4 rounded-3xl bg-[#f4f9ff]">
        <NavBar
          activeTool={activeTool}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          ToolType={ToolType}
        />
        <div className="px-6 w-[70rem] h-[35rem] bg-white-200 flex">
          <div className="flex-1 z-999">{main}</div>
          {response ? <div className="flex-1">{response}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default ToolsMain;
