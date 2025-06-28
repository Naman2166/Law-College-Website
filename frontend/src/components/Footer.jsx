//time :- 1 hr 40 min 

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-[#212529] text-white' >

      <div className='flex flex-rows md:flex-cols justify-evenly gap-24 py-16 px-5 text-sm'>

        {/* ----------------- Left Section --------------- */}
        <div>
                         {/* Upper part */}
          <p className='text-xl font-medium mb-4 '>Offline Courses</p>
          <hr className='mb-4 text-gray-600'/>
          <ul className='flex flex-col gap-2 text-gray-400 mb-7'>
            <li>Ethical Hacking and Cyber Security from Scratch</li>
            <li>Website Development from scratch</li>
            <li>Enterpreneurship-How to build a successful startup ?</li>
            <li>Digital Marketing</li>
            <li>Android App Development</li>
          </ul>
                        {/* lower part */}
          <p className='text-xl font-medium mb-4 '>Specialization Courses</p>
          <hr className='mb-4 text-gray-600'/>
          <ul className='flex flex-col gap-2 text-gray-400 mb-7'>
            <li>Ethical Hacking and Cyber Security Specialization</li>
            <li>Full Stack Website Development-MERN Stack</li>
            <li>Data Science Specialization Program</li>
            <li>Full Stack Website Development-MEAN Stack</li>
            <li>DevOps Beginners to Advanced</li>
          </ul>
        </div>


        {/* ----------------- Center Section --------------- */}
        <div>
          <p className='text-xl font-medium mb-4 '>Online Courses</p>
          <hr className='mb-4 text-gray-600'/>
          <ul className='flex flex-col gap-2 text-gray-400 mb-16'>
            <li>Ethical Hacking and Cyber Security from Scratch</li>
            <li>Enterpreneurship-How to build a successful startup ?</li>
            <li>Digital Marketing</li>
            <li>Android App Development</li>
            <li>React JS</li>
          </ul>

          <p className='text-xl font-medium mb-4 '>About</p>
          <hr className='mb-4 text-gray-600'/>
          <ul className='flex flex-col gap-2 text-gray-400 mb-7'>
            <li>About Company</li>
            <li>Certificate Verification</li>
            <li>Terms & Conditions</li>
            <li>Copy Rights 2024 | Awetecks</li>
            <li>Aweteck Services Pvt.Ltd</li>
          </ul>
        </div>

        {/* ----------------- Right Section --------------- */}
        <div>
          <p className='text-xl font-medium mb-4'>Pre-recorded Courses</p>
          <hr className='mb-4 text-gray-600'/>
          <ul className='flex flex-col gap-2 text-gray-400 mb-16'>
            <li>Ethical Hacking and Cyber Security from Scratch</li>
            <li>Website Development from scratch</li>
            <li>Enterpreneurship-How to build a successful startup ?</li>
            <li>Digital Marketing</li>
            <li>Android App Development</li>
          </ul>

          <p className='text-xl font-medium mb-4'>Follow us on social media</p>
          <hr className='mb-4 text-gray-600'/>
          <ul className='flex flex-col gap-2 text-gray-400 mb-7'>
            <li>Ethical Hacking and Cyber Security from Scratch</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Footer