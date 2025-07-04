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
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Constitution Day 2022</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Internal Moot Assessment</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Guest lecture 14 dec</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Guest lecture</p>
                <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Celebrations</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
                {[assets.Gallery1, assets.Gallery2, assets.Gallery3, assets.Gallery4, assets.Gallery5, assets.Gallery6, assets.Gallery7, assets.Gallery8, assets.Gallery9,assets.Gallery10, assets.Gallery11,
                 assets.Gallery12, assets.Gallery13, assets.Gallery14,assets.Gallery15, assets.Gallery16, assets.Gallery17,assets.Gallery18, assets.Gallery19, assets.Gallery20].map((src, idx) => (
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
      <img src={GalleryBanner} alt="Gallery Banner" className="w-full h-auto shadow-md" loading="lazy" />

      {/* Mobile Dropdown Menu */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex justify-between items-center text-lg bg-blue-950 text-white px-4 py-2"
        >
          <span>MENU</span>
          {isMobileMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute w-full py-1.5 bg-gray-300 rounded-md shadow-md z-10">
            {GalleryMenuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-white transition ${activeIndex === index ? 'bg-white text-blue-800 font-semibold' : ''}`}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
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














// import React from 'react'
// import SidebarMenu from '../components/SidebarMenu';
// import GalleryBanner from "../assets/images/GalleryBanner.png"
// import { assets } from '../assets/assets';


// const GalleryMenuItems = [
//   { label: 'Photo Gallery' },
//   { label: 'Video Gallery' },
// ];

// const Gallery = () => {
//   const [activeIndex, setActiveIndex] = React.useState(0);

//   const renderContent = () => {
//     switch (activeIndex) {

//       case 0:              //Photo Gallery
//         return (
//           <div className="mt-5 mb-16">

//             <div className='flex flex-col gap-8 p-4'>

//               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-7 lg:whitespace-nowrap gap-5 gap-x-7 text-blue-900'>
//                   <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Constitution Day 2022</p>
//                   <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Internal Moot Assessment</p>
//                   <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Guest lecture 14 dec</p>
//                   <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Guest lecture</p>
//                   <p className='border border-blue-900 font-medium px-7 text-center py-1.5 rounded-3xl hover:bg-blue-900 hover:text-white cursor-pointer'>Celebrations</p>
//               </div>

//               <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
//                 <img src={assets.Gallery1} alt=''/>
//                 <img src={assets.Gallery2} alt=''/>
//                 <img src={assets.Gallery3} alt=''/>
//                 <img src={assets.Gallery4} alt=''/>
//                 <img src={assets.Gallery5} alt=''/>
//                 <img src={assets.Gallery6} alt=''/>
//                 <img src={assets.Gallery7} alt=''/>
//                 <img src={assets.Gallery8} alt=''/>
//               </div>

//             </div>

//           </div>
//         );



// case 1:            //Video Gallery
//   return (
//     <div className="mt-10 space-y-6 px-4">
//       <h2 className="text-4xl font-bold text-black mb-4">Admission Procedure AY2025-26</h2>

//       <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

//       <p className="text-base leading-relaxed text-justify">
//         In accordance with MAH CET Law, the following documents must be presented when admitting to the college.
//       </p>

//       <ul className="list-disc list-inside space-y-2 text-base">
//         <li>
//           To access documents required for LL.B (3 YEARS).{' '}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Click Here
//           </a>
//         </li>

//         <li>
//           Information Brochure for Centralized Admission Process (CAP) of First Year of Three Year Degree Course in Law
//           leading to <br></br>LL.B.(3Yrs.) (Regular - Full Time - Course) Academic Year 2025-26.{' '}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Click Here
//           </a>
//         </li>

//         <li>
//           Conversion Certificate for the Candidates who have cleared their SSC & HSC Board Examination in More than one
//           Attempt.{' '}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Click Here
//           </a>
//         </li>
//       </ul>
//     </div>
//   );


// case 2:
//   return (
//     <div className="mt-10 space-y-6 px-4">
//       <h2 className="text-4xl font-bold text-black mb-4">Fee Structure AY2025-26</h2>

//       <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

//       <p className="text-base leading-relaxed text-justify">
//         The Fees Regulating Authority of the State of Maharashtra is responsible for announcing the college’s fees for the
//         three-year law program, known as LL.B. The first year of the three-year LL.B. program costs <strong>Rs. 33,000</strong>.
//       </p>

//       <p className="text-base leading-relaxed text-justify">
//         Payment in full is required at the time of admission. If a student has not paid the examination or college fees for
//         the year, they will normally not be allowed to take any of the university or college exams. Fees and other obligations
//         must be paid as periodically specified by the appropriate authority.
//       </p>
//     </div>
//   );


// case 3:
//   return (
//     <div className="mt-10 space-y-6 px-4">
//       <h2 className="text-4xl font-bold text-black mb-4">Rules & Regulations AY2025-26</h2>

//       <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

//       <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
//         <li>Students will have to maintain decorum on campus as Discipline, Dedication & Determination is our motto.</li>
//         <li>College timing is from 8:00 am to 1:30 pm and students will have to be on campus for the whole time.</li>
//         <li>Compulsory Bio-Metric Attendance.</li>
//         <li>
//           The students who fail to maintain attendance beyond 75% will not be allowed to appear for university exams and will
//           be discontinued from the college roll.
//         </li>
//         <li>Regular assignment, class test, surprise test will be conducted and the assessment will be done accordingly.</li>
//         <li>
//           Gurukul culture is prevalent and so every student has a right to meet any Professor, Principal, Director, or
//           President of the Society to share their thoughts and grievances.
//         </li>
//         <li>Uniform is compulsory on all days except for Saturday.</li>
//         <li>
//           Students are specially instructed to remove Blazer, Shoes, Socks and any electronic gadgets, during examinations.
//         </li>
//       </ul>
//     </div>
//   );


//       default:
//         return <p>Select a menu item to see content.</p>;
//     }
//   };

//   return (
//   <div className="relative">
//     <div>
//       <img
//         src={GalleryBanner}
//         alt="Admissions Banner"
//         className="w-full h-auto shadow-md"
//         loading="lazy"
//       />

//       <div className="flex relative min-h-screen">
//         {/* Sticky Sidebar */}
//         <div className="sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
//           <SidebarMenu
//             menuItems={GalleryMenuItems}
//             activeIndex={activeIndex}
//             onMenuClick={setActiveIndex}
//           />
//         </div>

//         {/* Scrollable Right Content */}
//         <div className="flex-1 p-6">
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// }

// export default Gallery