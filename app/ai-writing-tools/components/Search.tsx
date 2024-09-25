'use client';

import React, { useState, useEffect } from 'react';

interface SearchProps {
  placeholder: string;
  setSearchValue: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, setSearchValue }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(search);
    }, 250); // 300ms 防抖时间

    return () => {
      clearTimeout(handler); // 清除定时器
    };
  }, [search, setSearchValue]);

  const changeSearchValue = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="w-full h-12 rounded-[24px] flex items-center justify-between p-2 bg-white border border-[#E9EEF7] hover:border-[#e0e0e0] focus-within:!border-primary">
      <div className="w-8 h-8 text-display-secondary auxiliary-color">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="12"
            cy="12"
            r="5.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m16 16 2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        type="text"
        className="flex-1 h-full px-1 text-lg md:text-base"
        placeholder={placeholder}
        value={search}
        onChange={(e) => changeSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
