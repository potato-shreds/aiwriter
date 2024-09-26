import React, { useState } from 'react';

import AIApps from './AIApps';
import HeaderWritingTools from './HeaderWritingTools';

const HeaderNavHid: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const [showAIApps, setShowAIApps] = useState(false);
  const [showWritingTools, setShowWritingTools] = useState(false);

  return (
    <div className="header-nav-hid">
      <div className="flex gap-x-2">
        <span
          className={`w-6 h-6 hover:cursor-pointer bcg ${
            showNav ? 'i-close' : 'i-menu'
          }`}
          onClick={() => setShowNav(!showNav)}
        ></span>
      </div>
      {showNav && (
        <div className="bg-[#F8FAFE] w-full absolute z-10 top-16 md:top-16 left-0 h-[calc(100vh-64px)] overflow-y-auto text-display text-[#33312C]">
          <div className="overflow-hidden bg-white">
            <a
              className="font-semibold py-3 px-4 flex justify-between items-center text-sm sm:text-lg hover:cursor-pointer hover:text-[#00D3B6]"
              href="/#Overview"
              onClick={() => setShowNav(false)}
            >
              Overview
            </a>
          </div>
          <div className="overflow-hidden bg-white">
            <a
              className="font-semibold py-3 px-4 flex justify-between items-center text-sm sm:text-lg hover:cursor-pointer hover:text-[#00D3B6]"
              href="/#Templates"
              onClick={() => setShowNav(false)}
            >
              Templates
            </a>
          </div>
          <div className="overflow-hidden bg-white">
            <p
              className="font-semibold px-4 flex items-center justify-between text-sm sm:text-lg bg-white py-3 hover:cursor-pointer hover:text-[#00D3B6]"
              onClick={() => setShowWritingTools(!showWritingTools)}
            >
              <span>Writing Tools</span>
              <span
                className={`bcg i-down ${
                  showWritingTools ? '' : '-rotate-90'
                } w-6 transition-all block h-4 `}
              ></span>
            </p>
            <HeaderWritingTools show={showWritingTools} type="hid" />
          </div>
          <div className="overflow-hidden bg-white">
            <p
              className="font-semibold px-4 flex items-center justify-between text-sm sm:text-lg bg-white py-3 hover:cursor-pointer hover:text-[#00D3B6]"
              onClick={() => setShowAIApps(!showAIApps)}
            >
              <span>AI APPs</span>
              <span
                className={`bcg i-down ${
                  showAIApps ? '' : '-rotate-90'
                } w-6 transition-all block h-4`}
              ></span>
            </p>
            <AIApps show={showAIApps} type="hid" />
          </div>
          <div className="overflow-hidden bg-white">
            <a
              className="font-semibold py-3 px-4 flex justify-between items-center text-sm sm:text-lg hover:cursor-pointer hover:text-[#00D3B6]"
              href="/#Q&A"
              onClick={() => setShowNav(false)}
            >
              Q&A
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNavHid;
