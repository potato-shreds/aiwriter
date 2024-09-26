import React, { useState } from 'react';

const HeaderNavHid: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="header-nav-hid">
      <div className="flex gap-x-2">
        <span
          className="w-6 h-6 hover:cursor-pointer"
          style={{
            backgroundImage:
              'url(data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2048%2048%27%20width%3D%2748%27%20height%3D%2748%27%3E%3Cpath%20fill%3D%27black%27%20d%3D%27M8%2012h32v4H8v-4Zm0%2010h32v4H8v-4Zm0%2010h32v4H8v-4Z%27%2F%3E%3C%2Fsvg%3E)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          onClick={() => setShowNav(!showNav)}
        ></span>
      </div>
    </div>
  );
};

export default HeaderNavHid;
