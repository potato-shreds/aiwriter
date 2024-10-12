'use client';
import React, { useState } from 'react';

import Header from '@/app/components/Header/Header';
import AiWritingToolsTitle from '@/app/components/AiWritingToolsPage/AiWritingToolsTitle';
import Footer from '@/app/components/Footer';
import ToolsMain from '@/app/components/ToolsMain/ToolsMain';
import MainContent from './component/MainContent';
import Response from './component/Response';
const EssayHookGenerator: React.FC = () => {
  interface responseDateObject {
    content: string;
  }

  // Default
  const ToolType = 2;
  const activeTool = 'Press Release Introduction Generator';
  const [responseDate, setResponseDate] = useState<responseDateObject[]>([]);

  return (
    <div>
      <title>Press Release Introduction Generator | WriteAI</title>
      <meta
        name="description"
        content="Craft press release intros in seconds with our advanced AI tool. Try it for free and enhance your media outreach effortlessly!"
      />
      <meta
        name="keywords"
        content="Press Release Introduction Generator, create press release intro, AI press release tool, media outreach, free press release generator, writing tool"
      />
      <Header />
      <div className="pb-12 relative overflow-hidden sm:pb-6 bg-gradient-to-b from-[#E8ECF8] to-white z-0 after:absolute after:left-0 after:-translate-x-[70%] after:top-0 after:w-full after:h-1/2 after:z-[-1] after:rounded-full after:blur-3xl after:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] after:from-[#22C9A4] after:via-[#6A51FF] after:to-[#ECF4FF] after:opacity-25">
        <AiWritingToolsTitle
          title={activeTool}
          desc="Craft press release intros in seconds with our advanced AI - try it for free!"
        />
      </div>
      <div className="mt-5">
        <ToolsMain
          main={
            <MainContent
              setResponseDate={setResponseDate}
              activeTool={activeTool}
            />
          }
          response={
            <Response responseDate={responseDate} activeTool={activeTool} />
          }
          ToolType={ToolType}
          activeTool={activeTool}
        />
      </div>
      <Footer />
    </div>
  );
};

export default EssayHookGenerator;
