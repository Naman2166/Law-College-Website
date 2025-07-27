import React, { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu';
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaGlobe } from 'react-icons/fa';
import ContactBanner from "../assets/images/ContactBanner.png";
import ReCAPTCHA from "react-google-recaptcha";
import { assets } from '../assets/assets';
// Replace with actual banner image

const contactMenuItems = [
  { label: 'Contact Info' },
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [captchaValue, setCaptchaValue] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please verify you are not a robot!');
      return;
    }

    // You can send `captchaValue` to your backend here for verification if needed
    console.log('Form submitted!');
  };


  const renderContent = () => {
    return (
      <div className="space-y-10">

        {/* Contact Section */}
        {/* Contact Section Top Row: Send a Message + Get in Touch */}
        <div className="flex flex-col lg:flex-row  px-3 md:px-8 py-10 gap-20">
          {/* Send a Message Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-blue-800">Send a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <input type="text" placeholder="Name" className="p-2 border-b w-full" />
                <input type="email" placeholder="Email" className="p-2 border-b w-full" />
                <input type="text" placeholder="Subject" className="p-2 border-b w-full " />
                <input type="text" placeholder="Phone" className="p-2 border-b w-full" />
              </div>
              <textarea rows="1" placeholder="Message" className="w-full border-b p-2 mt-5"></textarea>

              {/* ✅ reCAPTCHA instead of checkbox */}
              <div className="mt-4">
                <ReCAPTCHA
                  sitekey="6LeEunMrAAAAACRUL46lU0Gq5DaXj624zO5SCdXC"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>

              <button
                type="submit"
                className={`px-6 py-2 font-semibold rounded text-white ${captchaValue ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
                  }`}
                disabled={!captchaValue}
              >
                SUBMIT
              </button>
            </form>

          </div>

          {/* Get in Touch */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 max-md:mt-0">Get in Touch</h2>

            {/* Visit us */}
            <div className="space-y-2">
              <p className="font-semibold text-blue-800">Visit us</p>
              <p className="flex items-start gap-2 text-sm text-gray-700">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                Late.Adv. Ku. Shalaka Santosh Khandge Law, Talegaon Dabhade, <br/> 
                Pune, Maharashtra 410507
              </p>
            </div>

            {/* Contact for Admission Inquiries */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-blue-800">Contact for Admission Inquiries</p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-blue-600" /> 7424080910
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-blue-800">E mail</p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-blue-600" /> adv.sskvm@gmail.com
                </p>
              </div>

              {/* Website */}
              {/* <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-blue-800">Website Link</p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-blue-600" />
                  <a href="https://law-college-website.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    adv.sskvm@gmail.com
                  </a>
                </p>
              </div> */}

              {/* For Admissions Email */}
              <div className="space-y-1 text-sm text-gray-700 ">
                <p className="font-semibold text-blue-800">For Admissions</p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-blue-600" /> adv.sskvm@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Important Contacts in Separate Row (Full Width) */}
        <div className=" pb-10 px-3">
          <h3 className="text-xl font-semibold text-black mb-4">Important Contacts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { title: "Admission Cell Phone", phone: "7424080910" },
              { title: "Administrative Office", phone: "02114-228175" },
              { title: "Principal Office", phone: "02114-228175" },
            ].map((item, index, arr) => (
              <div
                key={index}
                className={`flex items-start space-x-2 py-4 ${index !== arr.length - 1 ? 'md:border-r' : ''
                  }`}
              >
                <FaPhoneAlt className="mt-1 text-gray-700" />
                <div>
                  <p className="text-blue-700 font-semibold">{item.title}</p>
                  <p className="text-sm">{item.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div className="px-1 md:px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.6353843567696!2d73.66406368286299!3d18.72933287112217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1e57875abcb%3A0x85bc84b6ed5990da!2sPCET&#39;s%20Nutan%20Maharashtra%20Institute%20of%20Engineering%20and%20Technology%2C%20Pune!5e0!3m2!1sen!2sin!4v1751391903252!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="rounded-md shadow-md border"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">


      {/* Banner */}
      <div
        className="relative text-white bg-cover bg-center w-auto h-[8rem] sm:h-[14rem] md:h-[18rem] lg:h-[20rem] xl:h-[28rem]"
        style={{ backgroundImage: `url(${assets.HomePageCoursesBgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 backdrop-brightness-85"></div>
        
        <h1 className='absolute bottom-3 right-3 md:bottom-6 md:right-6 text-4xl md:text-7xl lg:text-8xl font-bold opacity-95'>Contact Us</h1>

      </div>



      <div className="flex relative min-h-screen">
        {/* Sticky Sidebar */}
        <div className="hidden md:block sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
          <SidebarMenu
            menuItems={contactMenuItems}
            activeIndex={activeIndex}
            onMenuClick={setActiveIndex}
          />
        </div>

        {/* Scrollable Right Content */}
        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );

};

export default ContactUs;
