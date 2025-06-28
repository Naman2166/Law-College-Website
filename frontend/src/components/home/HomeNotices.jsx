import React, { useRef } from 'react';
import { FaFilePdf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HomeNotices = () => {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const pdfNotices = [
    "Exam Timetable",
    "Holiday List",
    "Admission Form",
    "Annual Report",
    "Seminar Notice",
    "Library Rules",
    "Internal Assessment",
    "Fees Circular",
    "Scholarship Notice",
  ];

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="relative flex flex-col items-center bg-gray-100 py-10 px-4 rounded-md shadow-md">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 text-center">
          Notices
        </h1>

        {/* Arrows */}
        <button
          onClick={() => scroll(-250)}
          className="hidden md:flex items-center justify-center absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaChevronLeft className="text-gray-900" />
        </button>

        <button
          onClick={() => scroll(250)}
          className="hidden md:flex items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaChevronRight className="text-gray-900" />
        </button>

        {/* Scrollable Notice Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth w-full px-2 sm:px-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 py-4"
        >
          {pdfNotices.map((title, index) => (
            <div
              key={index}
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[200px] w-full h-48 bg-white flex flex-col items-center justify-center rounded shadow-md hover:scale-105 transition text-center px-3 shrink-0"
            >
              <FaFilePdf className="text-red-600 text-5xl sm:text-6xl mb-2" />
              <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mb-1 truncate w-full">
                {title}
              </p>
              <p className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">Download</p>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <button className="mt-6 bg-red-700 hover:bg-red-800 text-sm sm:text-base text-white px-6 py-2 rounded-sm transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default HomeNotices;
