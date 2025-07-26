import React, { useState } from 'react';
import { assets } from '../../assets/assets'
import {motion} from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'

const HomePrincipleMessage = () => {

  const [isExpanded, setIsExpanded] = useState(false);       //for controlling text box length in mobile view
  const isMobile = useIsMobile();       //defined in src/hooks/useMobile.js

  //Text motion for mobile and desktop screen
  const textMotion = {
    initial: isMobile
      ? { opacity: 0, x: -50 }
      : { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      duration: isMobile ? 0.5 : 0.5,
      delay: isMobile ? 0.1 : 0.1,
      ease: 'easeOut',
    },
  };



  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-16 bg-white">

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-y-5 md:gap-10">

        {/* Text Section - 60% */}
        <motion.div 
        initial={textMotion.initial}
        whileInView={textMotion.whileInView}
        transition={textMotion.transition}
        viewport={{ once: false, amount: 0.3 }} 
        className="w-full lg:w-[50%] space-y-5 text-center lg:text-left shadow-lg shadow-gray-600 p-5 ">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Principal's Message</h1>

          <p className={`w-full text-justify text-md sm:text-[13px] text-gray-600 font-medium overflow-hidden transition-all duration-500 ${isMobile && !isExpanded ? 'max-h-[150px]' : 'max-h-[2000px]'
            }`}>
            I am pleased and enthusiastic to welcome you in Late.Adv. Ku. Shalaka Santosh Khandge Law for the 2025–26 academic
            year. As the principal of this esteemed college, I will endeavor to cultivate a community where both students and staff
            can flourish in an environment that prioritizes integrity, equity, and ethical thinking. Alongside obtaining the requisite technical skills and knowledge for legal practice, our college fosters in its students a deep commitment to social justice and an aspiration to effectuate constructive change in the world. Guiding our students to achieve their utmost potential is the primary vocation of our educators, who are all experienced scholars and professionals.  I trust you will embark on your academic endeavor with a positive and resolute mindset, prepared to confront any challenges that arise. Remember that mastering the intricacies of the law constitutes only half the challenge; the other half involves understanding the extensive implications the law has on individuals and communities.  We must consistently pursue the highest standards of academic rigor, ethical conduct, and professional excellence.
          </p>

          {/* when text div is not expanded */}
          {isMobile && !isExpanded && (
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-green-900 text-sm text-white px-3 py-1.5 rounded-sm"
            >
              Read More
            </button>
          )}
         
          {/* when text div is expanded */}
          {isMobile && isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="bg-gray-700 text-sm text-white px-3 py-1.5 rounded-sm"
            >
              Read Less
            </button>
          )}

        </motion.div>


        {/* Image Section - 40% */}
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center">
          <img
            src={assets.No_User}
            alt="About Us"
            className="w-[45%] h-auto object-cover rounded-md shadow-lg"
            loading="lazy"
          />
          <h1 className='text-lg font-bold text-blue-700 mt-1'>Principal</h1>
          <p className='font-medium text-sm'>Principal</p>
        </div>

      </div>
    </div>
  )
}

export default HomePrincipleMessage