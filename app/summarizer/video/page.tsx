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
  const activeTool = 'YouTube Video Summarizer';
  const [responseDate, setResponseDate] = useState<responseDateObject[]>([]);

  return (
    <div>
      <title>YouTube Video Summarizer</title>
      <meta
        name="description"
        content="Quickly view key points of any online video with HIX Writer's YouTube Video Summarizer. Try it for free and save time on video content!"
      />
      <meta
        name="keywords"
        content="YouTube Video Summarizer, video summary tool, online video summarizer, free video summarizer, key points of video, HIX Writer, summarize videos"
      />
      <Header />
      <div className="pb-12 relative overflow-hidden sm:pb-6 bg-gradient-to-b from-[#E8ECF8] to-white z-0 after:absolute after:left-0 after:-translate-x-[70%] after:top-0 after:w-full after:h-1/2 after:z-[-1] after:rounded-full after:blur-3xl after:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] after:from-[#22C9A4] after:via-[#6A51FF] after:to-[#ECF4FF] after:opacity-25">
        <AiWritingToolsTitle
          title={activeTool}
          desc="View key points of any online video in a flash with HIX Writer's YouTube video summarizer - Try it for free."
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
