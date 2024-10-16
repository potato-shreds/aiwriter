'use client';

import React, { useState } from 'react';

import Tabs from './components/Tabs';
import TemplatesContent from './components/TemplatesContent';

import '@/public/styles/templates.css';

interface TemplatesProps {
  showMore: () => void;
}

const Templates: React.FC<TemplatesProps> = ({ showMore }) => {
  const [currentTag, setCurrentTag] = useState(0);

  const setParentCurrentTag = (index: number) => {
    setCurrentTag(index);
  };

  return (
    <section id="Templates" className="templates mx-auto max-w-7xl pb-16">
      {/* <Tabs setParentCurrentTag={setParentCurrentTag} /> */}

      <h2 className="mx-auto section__title templates-title">
        Generate content in seconds
      </h2>

      <TemplatesContent currentTag={currentTag} />

      {/* <div
        data-v-83a1617b=""
        className="show-more__button pc"
        onClick={showMore}
      >
        View More
      </div> */}
    </section>
  );
};

export default Templates;
