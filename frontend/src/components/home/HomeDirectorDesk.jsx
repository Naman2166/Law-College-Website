import React, { useState } from 'react';
import { assets } from '../../assets/assets'
import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'


const HomeDirectorDesk = () => {


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
      <div className="flex flex-col lg:flex-row items-start justify-between gap-y-5 md:gap-10">

        {/* Image Section - 50% */}
        <div className=" w-full lg:w-[50%] flex flex-col items-center justify-center">
          <img
            src={assets.ssk}
            alt="About Us"
            className="w-[45%] h-auto object-cover rounded-md shadow-lg"
            loading="lazy"
          />
          <h1 className='text-lg font-bold text-blue-700 mt-1'>Mr Santosh Khande</h1>
          <p className='font-medium'>Director</p>
        </div>

        {/* Text Section - 50% */}
        <motion.div
          initial={textMotion.initial}
          whileInView={textMotion.whileInView}
          transition={textMotion.transition}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-[50%] space-y-5 text-center lg:text-left shadow-lg shadow-gray-600 p-5  ">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Director Desk</h1>

          <p className={`text-md sm:text-[13px] text-gray-600 font-medium overflow-hidden transition-all duration-500 ${isMobile && !isExpanded ? 'max-h-[150px]' : 'max-h-[2000px]'
            }`}>

            Nutan Maharashtra Vidya Prasarak Mandal is a prestigious educational organization in Maharashtra, recognized for establishing national
            education institutions in the Maval Region of Pune district more than 119 years ago. Lokmanya Bal Gangadhar Tilak, a prominent freedom
            warrior, served as the founding President of the Mandal and chaired its Governing Body for over 12 years.The late Hon. Vishnu G.
            Vijapurkar served as the inaugural Secretary of “Samarth Vidyalaya,” the first India National school established by the Mandal.
            The Mandal and its educational institutions possess a profound heritage.
            I am delighted to welcome you to Late. Adv. Ku. Shalaka Santosh
            Khandge Law, Talegaon Dabhade, Pune, is dedicated to achieving excellence in legal education and research. As the secretary of this
            distinguished institution, it is my honor to assist our community in realizing our collective objectives. This academic year is poised to be an
            exhilarating experience of education and professional development. Our teachers, distinguished for their experience and commitment, are
            dedicated to creating an educational atmosphere that promotes critical thinking, ethical practice, and a profound comprehension of the law.
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


      </div>
    </div>
  )
}

export default HomeDirectorDesk








// Nutan Maharashtra Vidya Prasarak Mandal is a prestigious educational organization in Maharashtra, recognized for establishing national
//             education institutions in the Maval Region of Pune district more than 119 years ago. Lokmanya Bal Gangadhar Tilak, a prominent freedom
//             warrior, served as the founding President of the Mandal and chaired its Governing Body for over 12 years.The late Hon. Vishnu G.
//             Vijapurkar served as the inaugural Secretary of “Samarth Vidyalaya,” the first India National school established by the Mandal.
//             The Mandal and its educational institutions possess a profound heritage.
//             I am delighted to welcome you to Late. Adv. Ku. Shalaka Santosh
//             Khandge Law, Talegaon Dabhade, Pune, is dedicated to achieving excellence in legal education and research. As the secretary of this
//             distinguished institution, it is my honor to assist our community in realizing our collective objectives. This academic year is poised to be an
//             exhilarating experience of education and professional development. Our teachers, distinguished for their experience and commitment, are
//             dedicated to creating an educational atmosphere that promotes critical thinking, ethical practice, and a profound comprehension of the law.