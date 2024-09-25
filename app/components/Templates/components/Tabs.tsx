'use client';

import React, { useState } from 'react';

import { tagsData } from '@/data/templatesData';

import '@/public/styles/templates.css';

interface TabsProps {
  setParentCurrentTag: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ setParentCurrentTag }) => {
  const [currentTag, setCurrentTag] = useState(0);

  const tagClick = (index: number) => {
    setCurrentTag(index);
    setParentCurrentTag(index);
  };

  return (
    <div className="templates__tags flex flex-wrap py-1 pt-4 px-2 gap-2 sm:gap-4">
      {tagsData.map((tag, index) => {
        return (
          <div
            className={`tag ${currentTag === index ? 'active' : ''}`}
            key={index}
            onClick={() => tagClick(index)}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
