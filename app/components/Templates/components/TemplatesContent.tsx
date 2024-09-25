'use client';

import React from 'react';

import { templatesData, tagsData } from '@/data/templatesData';
import { getTemplatesByTag } from './TemplatesContentFunc';
import { renderTemplatesContentItem } from './RenderTemplatesContent';

import '@/public/styles/templates.css';

interface TemplatesContentProps {
  currentTag: number;
}

type TemplateItem = {
  id: number;
  name: string;
  description: string;
  icon: string;
  tags: string;
};

const TemplatesContent: React.FC<TemplatesContentProps> = ({ currentTag }) => {
  const currentTagData = tagsData[currentTag];
  const templateList = getTemplatesByTag(templatesData, currentTagData);

  return (
    <div className="templates__list">
      {templateList.map((item: TemplateItem) =>
        renderTemplatesContentItem(item)
      )}
    </div>
  );
};

export default TemplatesContent;
