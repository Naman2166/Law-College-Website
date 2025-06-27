import React from 'react'
import { assets } from '../../assets/assets'

const HomeAboutUs = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        
        {/* Image Section - 40% */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <img
            src={assets.HomePageImage}
            alt="About Us"
            className="w-full h-auto object-cover rounded-md shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Text Section - 60% */}
        <div className="w-full lg:w-[60%] space-y-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">About Us</h1>

          <p className="font-semibold text-base sm:text-md text-gray-700">
            Foster an inclusive and collaborative academic environment to promote interdisciplinary
            engagement, critical thinking, and a commitment to lifelong learning.
          </p>

          <p className="text-sm sm:text-[13px] text-gray-600">
          Late Adv. Ku Shalaka Santosh Khandage Law College, Pune, was established in the year 2023. Late Adv. Ku Shalaka Santosh Khandage Law College
          (Affiliated to Savitribai Phule Pune University, Recognized by the Government of Maharashtra & Bar Council of India) upholds the Society’s philosophy
          of Discipline, Dedication, and Determination. It is an upcoming institution to cater to the contemporary requirement of the society to have trained
          Practicing and Corporate Lawyers.
          </p>

          <p className="text-sm sm:text-[13px] text-gray-600">
          In Maharashtra, the late Adv. Ku Shalaka Santosh Khandage Law College continues to be a prominent educational establishment that improves both schools and colleges.
          The lawyers will receive the same training, which will prepare them for this innovative legal competition. In the short time since its founding, Late Adv. Ku. Shalaka
          Santosh Khandage Law College has risen to prominence in the legal education field and endured by producing prosecutors, corporate lawyers, judicial officers, and legal
          advisors who are highly regarded in the field.</p>
        </div>

      </div>
    </div>
  )
}

export default HomeAboutUs
