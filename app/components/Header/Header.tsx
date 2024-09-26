import React from 'react';

import HeaderNav from './HeaderNav';

import '@/public/styles/header.css';

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-10">
      <header className="header sticky top-0 flex item-center">
        <a className="header-logo" href="/#" title="Logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              width="32"
              height="32"
              rx="8"
              fill="url(#pattern0_4398_5627)"
            />
            <defs>
              <pattern
                id="pattern0_4398_5627"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_4398_5627"
                  transform="scale(0.000833333)"
                />
              </pattern>
              <image
                id="image0_4398_5627"
                width="1200"
                height="1200"
                href="/images/favicon-32x32.png"
              />
            </defs>
          </svg>
          <span className="header-logo-text">AI Writer.</span>
        </a>

        <HeaderNav />

        <a
          href="https://apps.apple.com/app/apple-store/id1639845219?pt=121994524&ct=edm&mt=8"
          target="_blank"
          className="qrCode-area"
          title="Download AI Writer"
        >
          <span className="qrCode-text">Try AI Writer</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11H11V3H3V11ZM5 5H9V9H5V5ZM3 21H11V13H3V21ZM5 15H9V19H5V15ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13.01 13H15.01V15H13.01V13ZM15.01 15H17.01V17H15.01V15ZM13.01 17H15.01V19H13.01V17ZM17.01 17H19.01V19H17.01V17ZM19.01 19H21.01V21H19.01V19ZM15.01 19H17.01V21H15.01V19ZM17.01 13H19.01V15H17.01V13ZM19.01 15H21.01V17H19.01V15Z"
              fill="white"
            />
          </svg>
          <div className="qrCode-dropdown">
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="128" height="128" rx="8" fill="#FEFEFE" />
              <rect
                x="8"
                y="8"
                width="112"
                height="112"
                fill="url(#pattern0_4398_9894)"
              />
              <defs>
                <pattern
                  id="pattern0_4398_9894"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlinkHref="#image0_4398_9894" transform="scale(0.008)" />
                </pattern>
                <image
                  id="image0_4398_9894"
                  width="125"
                  height="125"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAIAAAAA4vtyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAfaADAAQAAAABAAAAfQAAAAA0rDYSAAAEaUlEQVR4Ae3cwW5cSQxD0emB//+XPVm6z4K2XPU0WTCrEJLI6hshQgzHr3+2fn1+fn6Ner1eX+VJ9avPn99jRXWUy+xF+e9Fr1r9nEC5/5zVzc5yv0nz517l/nNWNzvfjtsf43yURsn5gmFFM9WRPPkIPOPEijfj3H2Hz5Is9yXQxJQ7QJZkuS+BJuYDjeQaUEWOrtBFZ6yQo1fxiZA4U0Xm3O47uJZkuS+BJqbcAbIky30JNDHf3FW6/xKZ7xsHbdS89gG772uo34LK/Q3Hmij3NdRvQeX+hmNN/C13lWPI58+38aSZ2TXZfV9D/RZU7m841kS5r6F+Cyr3Nxxr4pu7ms/dySuzcz6ko1mas3P+RFjl5lztvmc+T1XL/Smy2bfcM5+nquX+FNns6109OTs5iSpB+WRRHc2SO5IEjWZzc/c983mqWu5Pkc2+5Z75PFUt96fIZt8PTlbuvlh9Lhfn0W1k9uLnxar7DpAlWe5LoIkpd4AsyXJfAk2M/8+Gcpb5CnHQaB5VR8/AOc9S5ZFUR85YMdt9h+2SLPcl0MSUO0CWZLkvgSbGu8o1oBvJraA6smIWZ6xyFasTeRKUZ7vvJ38uv58t99+zO5ks9xN6v58t99+zO5l85ZOFNc1UkRwWqljlZmaRWFFFEsQsVWZppjqS3fcRrmvN5X4N5cio3Ee4rjWX+zWUIyO/bykPc3a4M6NqDqJKEFVyqZ5IckdBzPKM7jtAlmS5L4EmptwBsiTLfQk0MR/cinwNaMYLmZtzFSvkaPbiJ+IZOPMqJLPdd4AsyXJfAk1MuQNkSZb7Emhi/DowZWS+FdyZPEszzrmKM81UcaZ6InMuzjyj+w6fJVnuS6CJKXeALMlyXwJNjF8H5q//fDqoMksSzVSRF63IPXHOs7nKM7rv/IkvyXJfAk1MuQNkSZb7EmhiZt8PnE8H1lwSZqkySzPV0SzN2ZmgLHHOzeR23zOup6rl/hTZ7Fvumc9T1XJ/imz2/ebnQnAN8MqHJc9ileUoiOaLz+CRJ87dd2AuyXJfAk1MuQNkSZb7Emhi/DowZW4U1SzzLEcpN+cgqtk5V7FC5tlRtfsO2yVZ7kugiSl3gCzJcl8CTYzfD0z5ouRyIkdBXDBmLzpftOKR3XeALMlyXwJNTLkDZEmW+xJoYvz36sklwTpfv1EzVqNHMksucuR8Mtt9h96SLPcl0MSUO0CWZLkvgSbGu0p57SiRy33jGcjcnKtY8YwsmSWIWZq77/BZkuW+BJqYcgfIkiz3JdDEfHNX6b4ouTM45yrNyHzfqOagUXO24pHdd4AsyXJfAk1MuQNkSZb7Emhi/re7yjuQ+aBRZZb7RjNVZkdy5Exz932E+lpzuV9DOTIq9xGua83lfg3lyOibu8o1GFmPmk+CRqeSoNHsxU/UfR/BvNZc7tdQjozKfYTrWnO5X0M5MvLnQoyGR80nB41ZcrmNuZlZJFZUL8ru+0WYA6tyH8C62FruF2EOrMp9AOti638fnFEqXSrFIwAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
            <span>Scan to download</span>
          </div>
        </a>
      </header>
    </div>
  );
};

export default Header;
