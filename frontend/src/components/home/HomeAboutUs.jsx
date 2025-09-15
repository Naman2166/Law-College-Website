import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';
import useIsMobile from '../../hooks/useIsMobile'

const HomeAboutUs = () => {

  const [isExpanded, setIsExpanded] = useState(false);       //for controlling text box length in mobile view
  const isMobile = useIsMobile();       //defined  in src/hooks/useMobile.js

  //Image motion for mobile and desktop screen
  const imageMotion = {
    initial: isMobile
      ? { opacity: 0, x: 0 }
      : { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: isMobile ? 0 : 0.7,
      ease: 'easeOut',
    },
  };


  //Text motion for mobile and desktop screen
  const textMotion = {
    initial: isMobile
      ? { opacity: 0, x: 0 }
      : { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: isMobile ? 0 : 0.7,
      delay: isMobile ? 0 : 0.2,
      ease: 'easeOut',
    },
  };



  return (
    <div className="w-full bg-white px-4 py-12 sm:px-6 lg:px-10">
      <div className="rounded-2xl overflow-hidden flex flex-col gap-8 py-8 px-4 sm:px-8 ">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-950" >
          About Us
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Image Section */}
          <motion.div
            initial={imageMotion.initial}
            whileInView={imageMotion.whileInView}
            transition={imageMotion.transition}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-6/12"
          >
            <img
              src={assets.building}
              alt="About Us"
              className="w-full h-auto rounded-xl object-cover shadow-md"
              loading="lazy"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={textMotion.initial}
            whileInView={textMotion.whileInView}
            transition={textMotion.transition}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-6/12 flex flex-col space-y-4 text-gray-800 shadow-md shadow-gray-800 p-3 rounded-xl"
          >
            <p className="w-full text-justify text-base sm:text-[16px] font-semibold text-gray-700">
              Foster an inclusive and collaborative academic environment to promote interdisciplinary
              engagement, critical thinking, and a commitment to lifelong learning.
            </p>

            <div
              className={`w-full text-justify text-sm sm:text-[13.5px] leading-relaxed text-gray-600 overflow-hidden transition-all duration-500 ${isMobile && !isExpanded ? 'max-h-[160px]' : 'max-h-[2000px]'
                }`}
            >
              <p className="text-sm sm:text-[12.5px] leading-relaxed text-gray-600">
              Late. Adv. Ku. Shalaka Santosh Khandge Law College, Pune, was established in the year 2023. Late Adv. Ku Shalaka Santosh Khandge Law College
                (Affiliated to Savitribai Phule Pune University, Recognized by the Government of Maharashtra & Bar Council of India) upholds the Society’s philosophy
                of Discipline, Dedication, and Determination. It is an upcoming institution to cater to the contemporary requirement of the society to have trained
                Practicing and Corporate Lawyers.
              </p>

              <p className="text-sm sm:text-[12.5px] leading-relaxed text-gray-600">
                In Maharashtra, Late. Adv. Ku. Shalaka Santosh Khandge Law College continues to be a prominent educational establishment that improves both schools and colleges.
                The lawyers will receive the same training, which will prepare them for this innovative legal competition. In the short time since its founding, Late Adv. Ku. Shalaka
                Santosh Khandge Law College has risen to prominence in the legal education field and endured by producing prosecutors, corporate lawyers, judicial officers, and legal
                advisors who are highly regarded in the field.
              </p>
            </div>

            {/* Toggle Buttons */}
            {isMobile && !isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="self-center bg-green-900  text-sm text-white px-3 py-1.5 rounded-sm"
              >
                Read More
              </button>
            )}
            {isMobile && isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                className="self-center bg-gray-700  text-sm text-white px-3 py-1.5 rounded-sm"
              >
                Read Less
              </button>
            )}

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;












// <div className="w-full lg:w-[60%] space-y-5 text-center lg:text-left">
//         <h1 className="text-3xl sm:text-4xl font-bold text-black">About Us</h1>

//         <p className="font-semibold text-base sm:text-md text-gray-700">
//           Foster an inclusive and collaborative academic environment to promote interdisciplinary
//           engagement, critical thinking, and a commitment to lifelong learning.
//         </p>

//         <p className="text-sm sm:text-[13px] text-gray-600">
// Late Adv. Ku Shalaka Santosh Khandage Law College, Pune, was established in the year 2023. Late Adv. Ku Shalaka Santosh Khandage Law College
// (Affiliated to Savitribai Phule Pune University, Recognized by the Government of Maharashtra & Bar Council of India) upholds the Society’s philosophy
// of Discipline, Dedication, and Determination. It is an upcoming institution to cater to the contemporary requirement of the society to have trained
// Practicing and Corporate Lawyers.
//         </p>

//         <p className="text-sm sm:text-[13px] text-gray-600">
// In Maharashtra, the late Adv. Ku Shalaka Santosh Khandage Law College continues to be a prominent educational establishment that improves both schools and colleges.
// The lawyers will receive the same training, which will prepare them for this innovative legal competition. In the short time since its founding, Late Adv. Ku. Shalaka
// Santosh Khandage Law College has risen to prominence in the legal education field and endured by producing prosecutors, corporate lawyers, judicial officers, and legal
// advisors who are highly regarded in the field.</p>
//       </div>