import React from 'react';

import { aiAppsData } from '@/data/headerData';

const AIApps: React.FC = () => {
  return (
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
  );
};

export default AIApps;
