// src/components/SidebarMenu.jsx
import React from 'react';

const SidebarMenu = ({ menuItems = [], sidebarWidth = 'md:w-[300px] lg:w-[350px]', activeIndex, onMenuClick }) => {
  return (
    <aside className={`bg-gray-200 ${sidebarWidth} min-h-screen`}>
      <div className="pt-6 px-4">
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              onClick={() => {onMenuClick(index),scrollTo(0,250)} }
              className={`cursor-pointer relative py-4 px-3 mt-3 font-medium group overflow-hidden transition-all ease-in-out duration-300
                ${isActive ? 'text-[#072562]' : 'text-[#0d55a2] hover:text-[#1245A8]'}`}
            >
              <span
                className={`absolute right-0 top-0 h-full transition-all duration-300
                  ${isActive ? 'w-full bg-white' : 'w-0 group-hover:w-full bg-white'}`}
              ></span>
              <span
                className={`absolute right-0 top-0 h-full transition-all duration-300
                  ${isActive ? 'w-[4px] bg-[#1245A8]' : 'w-0 group-hover:w-[4px] bg-[#1245A8]'}`}
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
