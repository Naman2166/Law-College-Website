// src/components/SidebarMenu.jsx
import React from 'react';

const SidebarMenu = ({ menuItems = [], sidebarWidth = 'w-[400px]', activeIndex, onMenuClick }) => {
  return (
    <aside className={`bg-[#EBEBEB] ${sidebarWidth} min-h-screen`}>
      <div className="max-w-md pt-6">
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => onMenuClick(index)}
              className={`cursor-pointer relative flex justify-end py-4 px-3 mt-3 font-medium group overflow-hidden
                ${isActive ? 'text-[#1245A8]' : 'text-[#007BFF] hover:text-[#1245A8]'}
              `}
            >
              <span
                className={`absolute right-0 top-0 h-full transition-all duration-300
                  ${isActive ? 'w-5/6 bg-white' : 'w-0 group-hover:w-5/6 bg-white'}
                `}
              ></span>

              <span
                className={`absolute right-0 top-0 h-full transition-all duration-300
                  ${isActive ? 'w-[4px] bg-[#1245A8]' : 'w-0 group-hover:w-[4px] bg-[#1245A8]'}
                `}
              ></span>

              <span className="relative z-10 pr-3">{item.label}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SidebarMenu;
