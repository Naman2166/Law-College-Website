import React from 'react'
import { assets } from '../../assets/assets'

const HomeCourses = () => {
  return (
    <div className="w-full h-auto my-12 px-4 sm:px-6 lg:px-10">
      {/* Background container with image */}
      <div
        className="w-full py-10 bg-cover bg-center bg-no-repeat rounded-md text-white"
        style={{ backgroundImage: `url(${assets.HomePageCoursesBgImage})` }}
      >
        {/* Overlay content */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-14 px-4">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Our Courses</h2>
            <p className="text-sm font-light leading-relaxed">
              Students hoping to enter the legal profession benefit greatly from a Bachelor of Legislative Law (L.L.B.) degree,
              which is a professional integrated arts degree with a deep understanding of the law.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-4 text-start text-sm">
            <div className="flex justify-center">
              <img
                src={assets.HomePageCoursesImage}
                alt="LLB Course"
                className="w-full max-w-xs h-auto rounded shadow-lg"
              />
            </div>
            <h3 className="text-2xl text-center font-semibold">LLB</h3>
            <p className="font-light">
              The three-year LLB program is a graduate professional degree program that is offered full-time.
              The curriculum is designed to combine practical learning with the multidisciplinary study of law.
            </p>
            <p className="font-light">
              Admission to the LL.B. (Hons.) program is based purely on merit, assessed via the
              MAH-L.L.B. 3 Years CET entrance examination.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="mt-2 bg-white text-blue-900 px-5 py-2 rounded-md hover:bg-gray-200 transition">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeCourses
