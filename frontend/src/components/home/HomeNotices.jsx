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
    "Library Rules",
    "Library Rules",
    "Library Rules",
    "Library Rules",
    "Library Rules",
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4 rounded-md shadow-md relative">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">Notices</h1>

        {/* Arrows */}
        <button
          onClick={() => scroll(-200)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaChevronLeft className="text-gray-900" />
        </button>

        <button
          onClick={() => scroll(200)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          <FaChevronRight className="text-black" />
        </button>

        {/* Scrollable Notice Cards */}
        <div
          ref={scrollRef}
          className="flex justify-center gap-10 overflow-x-auto scroll-smooth w-full  px-6 py-4"
        >
          {pdfNotices.map((title, index) => (
            <div
              key={index}
              className="min-w-[160px] w-44 h-48 bg-white flex flex-col items-center justify-center rounded shadow-md hover:scale-105 transition text-center px-2"
            >
              <FaFilePdf className="text-red-600 text-6xl mb-2" />
              <p className="text-[14px] font-semibold text-gray-800 mb-1 truncate">{title}</p>
              <p className="text-sm font-medium text-blue-600">Download</p>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <button className="mt-6 bg-red-700 hover:bg-red-800 text-sm text-white px-6 py-2 rounded-sm transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default HomeNotices;
