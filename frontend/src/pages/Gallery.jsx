import React from 'react';
import SidebarMenu from '../components/SidebarMenu';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import GalleryBanner from "../assets/images/gallery.webp";
import { assets } from '../assets/assets';


const GalleryMenuItems = [
  { label: 'Photo Gallery' },
  // { label: 'Video Gallery' },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="mt-5 mb-16">
            <div className='flex flex-col gap-8 py-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-7 lg:whitespace-nowrap gap-5 gap-x-7 text-blue-900'>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Constitution Day</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Internal Moot Assessment</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Guest lecture </p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Guest lecture</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Celebrations</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
                {[assets.Gallery1, assets.Gallery2, assets.Gallery3, assets.Gallery4, assets.Gallery5, assets.Gallery6, assets.Gallery7].map((src, idx) => (
                  <div key={idx} className="w-full h-44 sm:h-52 md:h-60 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        );


      case 1:
        return (
          <div className="mt-10 space-y-6 px-4">
            <h2 className="text-4xl font-bold text-black mb-4">Rules & Regulations AY2025-26</h2>

            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>Students will have to maintain decorum on campus as Discipline, Dedication & Determination is our motto.</li>
              <li>College timing is from 8:00 am to 1:30 pm and students will have to be on campus for the whole time.</li>
              <li>Compulsory Bio-Metric Attendance.</li>
              <li>
                The students who fail to maintain attendance beyond 75% will not be allowed to appear for university exams and will
                be discontinued from the college roll.
              </li>
              <li>Regular assignment, class test, surprise test will be conducted and the assessment will be done accordingly.</li>
              <li>
                Gurukul culture is prevalent and so every student has a right to meet any Professor, Principal, Director, or
                President of the Society to share their thoughts and grievances.
              </li>
              <li>Uniform is compulsory on all days except for Saturday.</li>
              <li>
                Students are specially instructed to remove Blazer, Shoes, Socks and any electronic gadgets, during examinations.
              </li>
            </ul>
          </div>
        );

      default:
        return <p>Select a menu item to see content.</p>;
    }
  };

  return (
    <div className="relative w-full">

       {/* Banner */}
       <div
          className="relative text-white bg-cover bg-center w-auto h-[8rem] sm:h-[14rem] md:h-[18rem] lg:h-[20rem] xl:h-[28rem]"
          style={{ backgroundImage: `url(${assets.HomePageCoursesBgImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-brightness-85"></div>

          <h1 className='absolute bottom-6 right-6 text-5xl md:text-7xl lg:text-8xl font-bold opacity-95'>Gallery</h1>

        </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
          <SidebarMenu
            menuItems={GalleryMenuItems}
            activeIndex={activeIndex}
            onMenuClick={setActiveIndex}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Gallery;

