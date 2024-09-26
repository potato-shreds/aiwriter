import React from 'react';

import HeaderWritingTools from './HeaderWritingTools';
import AIApps from './AIApps';
import HeaderNavHid from './HeaderNavHid';

const HeaderNav: React.FC = () => {
  return (
    <div className="flex items-center">
      <nav className="header-center xl:hidden">
        <a
          href="/#Overview"
          className="header-center-item hover:text-[#00D3B6]"
          title="Overview"
        >
          Overview
        </a>
        <a
          href="/#Templates"
          className="header-center-item hover:text-[#00D3B6]"
          title="Template"
        >
          Templates
        </a>
        <div className="font-medium text-sm group/item hover:text-[#00D3B6] flex items-center gap-1 py-5">
          <a href="/ai-writing-tools" className="hover:cursor-pointer">
            Writing Tools
          </a>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer"
          >
            <path
              d="M4.70435 6.75L9.20435 11.25L13.7043 6.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <HeaderWritingTools show={true} type="block" />
        </div>
        <div className="header-center-item hover:text-[#00D3B6] group header-center-product flex items-center gap-[2px]">
          <span className="hover:text-[#00D3B6]">AI APPs</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer"
          >
            <path
              d="M4.70435 6.75L9.20435 11.25L13.7043 6.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <AIApps show={true} type="block" />
        </div>
        <a
          href="/#Q&A"
          className="header-center-item hover:text-[#00D3B6]"
          title="Q&A"
        >
          Q&A
        </a>
      </nav>
      <HeaderNavHid />
    </div>
  );
};

export default HeaderNav;
