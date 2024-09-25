import React from 'react';

import Search from './Search';

interface BriefIntroductionProps {
  title: string;
  text: string[];
  placeholder: string;
  setSearchValue: (value: string) => void;
}

const BriefIntroduction: React.FC<BriefIntroductionProps> = ({
  title,
  text,
  placeholder,
  setSearchValue,
}) => {
  return (
    <div
      id="briefIntroduction"
      className="bg-[#F1F6FE] pt-16 md:pt-12bg-[#F1F6FE] md:pt-12 font_fam"
    >
      <div className="max-w-[1232px] px-4 mx-auto pt-12 pb-16 md:pt-8 md:pb-10">
        <h1 className="main-color text-center text-2xl font-bold mx-auto max-w-[760px] md:text-3xl">
          {title}
        </h1>
        <p className="mx-auto text-center mt-3 max-w-[760px] text-[#536D8C] text-sm md:text-base">
          {text.map((textItem, index) => (
            <React.Fragment key={index}>
              {index === 1 ? <span>{text[1]}</span> : textItem}
            </React.Fragment>
          ))}
        </p>
        <div className="mx-auto w-full max-w-[520px] mt-8 md:mt-5">
          <Search placeholder={placeholder} setSearchValue={setSearchValue} />
        </div>
      </div>
    </div>
  );
};

export default BriefIntroduction;
