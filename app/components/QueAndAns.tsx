'use client';

import React, { useState } from 'react';

import '@/public/styles/queAndAns.css';

import { queAndAnsData } from '@/data/queAndAnsData';

const QueAndAns: React.FC = () => {
  const [currentIndex, setCurrentIndx] = useState(-1);

  const questionClick = (index: number) => {
    if (currentIndex !== -1) {
      const oldQuestionContentItem = document.querySelectorAll(
        '.question-content-item'
      )[currentIndex];

      const oldTitle = oldQuestionContentItem.querySelector(
        '.question-content-item-title'
      );

      const oldContentHeight = oldTitle?.scrollHeight || 0;

      if (oldQuestionContentItem instanceof HTMLElement) {
        oldQuestionContentItem.style.height =
          oldQuestionContentItem.scrollHeight + 'px';
        requestAnimationFrame(() => {
          oldQuestionContentItem.style.height = `${oldContentHeight}px`;
        });
      }
    }

    if (index !== currentIndex) {
      const newQuestionContentItem = document.querySelectorAll(
        '.question-content-item'
      )[index];

      if (newQuestionContentItem instanceof HTMLElement) {
        newQuestionContentItem.style.height =
          newQuestionContentItem.scrollHeight + 'px';
        requestAnimationFrame(() => {
          newQuestionContentItem.style.height = 'auto';
        });
      }
      setCurrentIndx(index);
    } else {
      setCurrentIndx(-1);
    }
  };

  return (
    <div id="Q&A" className="questions max-w-7xl mx-auto">
      <div>
        <div className="question-top">Q&A</div>
        <h2 className="mx-auto section__title">Common Questions</h2>
      </div>

      <div className="question-content">
        {queAndAnsData.map((item, index) => {
          return (
            <section
              className={`question-content-item ${
                index === currentIndex ? 'expanded' : ''
              }`}
              key={item.id}
            >
              <div
                className="question-content-item-title"
                onClick={() => questionClick(index)}
              >
                <h3 className="question-content-item-title-text">
                  {item.titleText}
                </h3>
                <span
                  className={`question-content-item-title-icon ${
                    index === currentIndex
                      ? 'question-content-item-title-icon-reverse'
                      : ''
                  }`}
                >
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4648_4897)">
                      <path
                        d="M13.6891 21.8215C13.5448 21.8215 13.4062 21.793 13.2733 21.736C13.1404 21.6791 13.0245 21.5975 12.9258 21.4911L4.10744 12.4563C3.90235 12.2512 3.7998 12.0082 3.7998 11.7271C3.7998 11.5297 3.84537 11.3512 3.93653 11.1916C4.02768 11.0321 4.15112 10.9068 4.30683 10.8157C4.46254 10.7245 4.63913 10.679 4.83661 10.679C5.11762 10.679 5.36445 10.7777 5.5771 10.9752L14.3044 19.8961H13.0853L21.8125 10.9752C22.0176 10.7777 22.2644 10.679 22.5531 10.679C22.7505 10.679 22.9271 10.7245 23.0828 10.8157C23.2386 10.9068 23.362 11.0321 23.4531 11.1916C23.5443 11.3512 23.5898 11.5297 23.5898 11.7271C23.5898 11.8714 23.5633 12.0063 23.5101 12.1316C23.4569 12.2569 23.381 12.369 23.2822 12.4677L14.4639 21.4911C14.236 21.7114 13.9778 21.8215 13.6891 21.8215Z"
                        fill="url(#paint0_linear_4648_4897)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4648_4897"
                        x1="12.0368"
                        y1="26.4593"
                        x2="21.564"
                        y2="9.53832"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#10A37F" />
                        <stop offset="1" stopColor="#17CE92" />
                      </linearGradient>
                      <clipPath id="clip0_4648_4897">
                        <rect
                          width="19.7901"
                          height="12.1338"
                          fill="white"
                          transform="matrix(-1 0 0 1 23.5898 9.68774)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="question-content-item-content">
                <p>{item.contentText}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default QueAndAns;
