import React from 'react';

import { aiAppsData } from '@/data/headerData';

interface AIAppsProps {
  show: boolean;
  type: 'hid' | 'block';
}

const AIApps: React.FC<AIAppsProps> = ({ show, type }) => {
  return show && type === 'block' ? (
    <div className="header-center-product-dropdown">
      {aiAppsData.map((item, index) => (
        <a
          key={index}
          className="ai-app-item header-center-product-dropdown-item text-[#33312C]"
          href={item.app_url}
          title={item.title}
          target="_blank"
        >
          {item.app_name}
        </a>
      ))}
    </div>
  ) : show && type === 'hid' ? (
    <div className="mx-4 text-display-secondary border-b block">
      {aiAppsData.map((item, index) => (
        <div key={index} className="px-3 py-2 rounded-lg">
          <a
            key={index}
            className="ai-app-item w-full flex gap-2 text-[#33312C]"
            href={item.app_url}
            title={item.title}
            target="_blank"
          >
            <span className="text-display font-semibold">{item.app_name}</span>
          </a>
        </div>
      ))}
    </div>
  ) : null;
};

export default AIApps;
