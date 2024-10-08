import React from 'react';
import Image from 'next/image';

import { toolTypes } from '@/data/aiWritingToolsData';

const NavBar: React.FC = () => {
  return (
    <ul>
      {toolTypes.map((item, index) => (
        <li
          id={`mli_${item.tool_type_label.replace(/\s+/g, '-').toLowerCase()}`}
          className="w-20 h-16"
          key={index}
        >
          <div className="flex flex-col items-center text-center group hover:cursor-pointer hover transition-all select-none hover:bg-[rgba(244,249,255,0.56)] px-3 py-[10px] TabBar_toolIconActive__b3QJJ text-display-secondary">
            <div className="w-[18px] h-[18px] relative TabBar_toolIconActive__b3QJJ">
              <figure className="w-[18px] h-[18px] absolute  top-0 ">
                <Image
                  src={`https://hix.ai${item.icon_address}`}
                  alt={item.tool_type_label}
                  loading="eager"
                  width={18}
                  height={18}
                  decoding="async"
                  className="TabBar_menuIcon__Tb961"
                  style={{ color: 'transparent' }}
                />
              </figure>
            </div>

            <span className="text-xs mt-1">{item.tool_type_label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
