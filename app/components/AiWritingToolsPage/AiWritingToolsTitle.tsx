import React from 'react';

interface AiWritingToolsTitleProps {
  title: string;
  desc: string;
}

const AiWritingToolsTitle: React.FC<AiWritingToolsTitleProps> = ({
  title,
  desc,
}) => {
  console.log(desc);

  return (
    <div className="max-w-[1232px] mb-[-42px] relative mx-auto px-4 z-[1]">
      <div className="block text-xs text-display pt-3 text-left pb-3">
        <a className="font-semibold hover:underline" href="/">
          Home
        </a>
        <span className="inline-block mx-1 pb-0.5"> {'>'} </span>
        <a className="font-semibold hover:underline" href="/ai-writing-tools">
          Tools
        </a>
        <span className="inline-block mx-1 pb-0.5"> {'>'} </span>
        <span className="inline-block mx-1 pb-0.5">{title}</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 container relative mx-auto pb-5 pt-12">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-[#536D8C] text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default AiWritingToolsTitle;
