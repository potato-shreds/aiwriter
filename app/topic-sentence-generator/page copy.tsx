'use client';
import React, { useState } from 'react';

import Header from '@/app/components/Header/Header';
import AiWritingToolsTitle from '@/app/components/AiWritingToolsPage/AiWritingToolsTitle';
import Footer from '@/app/components/Footer';
import ToolsMain from '@/app/components/ToolsMain/ToolsMain';
import MainContent from './components/MainContent';
import Response from './components/Response';

const EssayRewriter: React.FC = () => {
  interface responseDateObject {
    content: string;
  }
  // Default
  const ToolType = 2;
  const [responseDate, setResponseDate] = useState<responseDateObject[]>([]);
  const activeTool = 'Topic Sentence Generator';
  return (
    <div>
      <Header />
      <div className="pb-12 relative overflow-hidden sm:pb-6 bg-gradient-to-b from-[#E8ECF8] to-white z-0 after:absolute after:left-0 after:-translate-x-[70%] after:top-0 after:w-full after:h-1/2 after:z-[-1] after:rounded-full after:blur-3xl after:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] after:from-[#22C9A4] after:via-[#6A51FF] after:to-[#ECF4FF] after:opacity-25">
        <AiWritingToolsTitle
          title={activeTool}
          desc="Elevate your writing's first impression with HIX Writer's topic sentence generator, the perfect tool for crafting engaging and thought-provoking opening sentences."
        />
      </div>
      <div className="mt-5">
        <ToolsMain
          main={
            <MainContent
              setResponseDate={setResponseDate}
              responseDate={responseDate}
              activeTool={activeTool}
            />
          }
          ToolType={ToolType}
          activeTool={activeTool}
          response={
            <Response responseDate={responseDate} activeTool={activeTool} />
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default EssayRewriter;
