//time :- 1 hr 40 min 

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='text-white bg-cover bg-center w-full px-6 sm:px-10 min-h-[350px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[618px]' style={{ backgroundImage: `url(${assets.FooterBg})` }} >

      <div className='grid grid-cols-2 md:flex md:flex-row justify-evenly gap-20 sm:gap-24 py-16  sm:px-5 text-sm'>

        {/* ----------------- Left Section --------------- */}
        <div>
          {/* Upper part */}
          <p className="text-xl font-bold mb-4 text-white ">Get In Touch With Us</p>
          <hr className="mb-4 border-gray-400" />

          <ul className="flex flex-col text-gray-300 mb-7 gap-6">
            <li className="flex flex-col sm:flex-row items-start gap-3 cursor-pointer">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <span>
                Samarth Vidya Sankul, Vishnupuri, Talegaon Dabhade, <br />
                Pune, Maharashtra 410507
              </span>
            </li>

            <li className="flex flex-col sm:flex-row items-start gap-3 cursor-pointer">
              <FaPhoneAlt className="text-lg" />
              <span>020-6291934548 / 34 / 33 / 9168290808</span>
            </li>

            <li className="flex flex-col sm:flex-row items-start gap-3 cursor-pointer">
              <FaEnvelope className="text-lg" />
              <span>blcpune2003@gmail.com</span>
            </li>
          </ul>
        </div>


        {/* ----------------- Center Section --------------- */}
        <div>
          <p className='text-xl font-bold mb-4 '>Quick Links</p>
          <hr className='mb-4 text-gray-400' />
          <ul className='flex flex-col text-gray-300 gap-3 mb-28'>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Academics</li>
            <li className='cursor-pointer'>Admission</li>
            <li className='cursor-pointer'>Gallery</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>

         <div className='block'>
          <p className='text-xl font-bold mb-4 '>NMVMP's</p>
          <hr className='mb-4 text-gray-400' />
          <ul className='flex flex-col text-gray-300 mb-7'>
            <li className='cursor-pointer'>About NMVMP's</li>
          </ul>
         </div>

        </div>

        {/* ----------------- Right Section --------------- */}
        <div className='flex flex-row gap-16 sm:gap-10 md:block'>

          <diV>
          <p className='text-xl font-bold mb-4 whitespace-nowrap'>Student Corner</p>
          <hr className='mb-4 text-gray-400' />
          <ul className='flex flex-col gap-3 text-gray-300 mb-28'>
            <li className='cursor-pointer'>Syllabus</li>
            <li className='cursor-pointer'>Library</li>
            <li className='cursor-pointer'>Committee</li>
            <li className='cursor-pointer'>Admission</li>
            <li className='cursor-pointer'>Infrastructure</li>
          </ul>
          </diV>

          <div className=''>
          <p className='text-xl font-bold mb-4 whitespace-normal'>Follow us on social media</p>
          <hr className='mb-4 text-gray-400' />
          <ul className='flex flex-row gap-2 text-gray-300 '>
            <FaFacebookF className="hover:text-blue-950 text-3xl transition cursor-pointer" />
            <FaInstagram className="hover:text-pink-800 text-3xl transition cursor-pointer" />
            <FaYoutube className="hover:text-red-600 text-3xl transition cursor-pointer" />
          </ul>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer