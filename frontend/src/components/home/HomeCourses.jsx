import React from 'react';
import { assets } from '../../assets/assets';

const HomeCourses = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10  bg-white">
      <div
        className="w-full bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-xl"
        style={{ backgroundImage: `url(${assets.HomePageCoursesBgImage})` }}
      >
        {/* Dark overlay */}
        <div className="w-full h-full bg-black/60 backdrop-brightness-75 py-12 px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
            
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Explore Our Law Programs
              </h2>
              <p className="text-sm sm:text-base text-gray-200">
                Embark on your journey into the legal profession with our comprehensive Bachelor of Legislative Law (LLB) program. Gain in-depth knowledge of the law while cultivating practical skills for your future career.
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-300">
                <li>3-Year Full-Time Graduate Program</li>
                <li>Blended Practical and Academic Curriculum</li>
                <li>Admission through MAH-L.L.B. 3 Years CET</li>
              </ul>
              <div className="pt-4">
                <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition">
                  Read More
                </button>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-xs">
                <img
                  src={assets.HomePageCoursesImage}
                  alt="LLB Course"
                  className="w-full h-auto rounded-md object-cover"
                />
                <h3 className="text-center text-xl font-bold text-blue-900 mt-4">LLB Program</h3>
                <p className="text-sm text-gray-700 text-center mt-2">
                  A structured path for aspiring legal professionals, combining theory with real-world application.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
