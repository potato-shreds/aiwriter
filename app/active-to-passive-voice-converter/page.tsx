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
  const activeTool = 'Active to Passive Voice Converter';
  const [responseDate, setResponseDate] = useState<responseDateObject[]>([]);

  return (
    <>
      <title>{activeTool}</title>
      <meta
        name="description"
        content="Easily change active sentences into passive voice online with HIX Writer’s reliable Active to Passive Voice Converter. Transform your writing effortlessly!"
      />
      <meta
        name="keywords"
        content="Active to Passive Voice Converter, convert active to passive voice, online voice converter, sentence transformation, writing tool, HIX Writer, grammar tool"
      />
      <Header />
      <div className="pb-12 relative overflow-hidden sm:pb-6 bg-gradient-to-b from-[#E8ECF8] to-white z-0 after:absolute after:left-0 after:-translate-x-[70%] after:top-0 after:w-full after:h-1/2 after:z-[-1] after:rounded-full after:blur-3xl after:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] after:from-[#22C9A4] after:via-[#6A51FF] after:to-[#ECF4FF] after:opacity-25">
        <AiWritingToolsTitle
          title={activeTool}
          desc="Change active sentences into passive voice online easily with HIX Writer’s highly-reliable active to passive voice converter."
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
    </>
  );
};

export default EssayHookGenerator;
