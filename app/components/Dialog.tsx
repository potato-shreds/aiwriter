import React from 'react';

import { templatesData } from '@/data/templatesData';
import { renderTemplatesContentItem } from '@/app/components/Templates/components/RenderTemplatesContent';

import '@/public/styles/dialog.css';

type TemplateItem = {
  id: number;
  name: string;
  description: string;
  icon: string;
  tags: string;
};

interface DialogProps {
  closeDialog: () => void;
}

const Dialog: React.FC<DialogProps> = ({ closeDialog }) => {
  return (
    <div className="dialog" onClick={closeDialog}>
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="dialog__inner flex flex-col w-3/4 rounded-lg bg-white h-3/4"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="dialog__header h-16 flex items-center justify-end pr-4">
            <div className="dialog__close cursor-pointer" onClick={closeDialog}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </header>

          <div className="dialog__content flex-1 overflow-auto">
            {templatesData.map((item: TemplateItem) =>
              renderTemplatesContentItem(item)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
