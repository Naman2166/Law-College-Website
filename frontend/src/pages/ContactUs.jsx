import React, { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu';
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaGlobe } from 'react-icons/fa';
import ContactBanner from "../assets/images/ContactBanner.png";
import ReCAPTCHA from "react-google-recaptcha";
// Replace with actual banner image

const contactMenuItems = [
  { label: 'Contact Info' },
  { label: 'FAQs' }
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
        <div className="flex flex-col lg:flex-row px-6 py-10 gap-10">
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
              <textarea rows="1" placeholder="Message" className="w-full border-b p-2"></textarea>

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
            <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>

            {/* Visit us */}
            <div className="space-y-2">
              <p className="font-semibold text-blue-800">Visit us</p>
              <p className="flex items-start gap-2 text-sm text-gray-700">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                Samarth Vidya Sankul, Vishnupuri, Talegaon Dabhade,<br />
                Pune, Maharashtra 410507
              </p>
            </div>

            {/* Contact for Admission Inquiries */}
            <div className="flex flex-wrap gap-12">
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-blue-800">Contact for Admission Inquiries</p>
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-blue-600" /> (+91) 020 67084034
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-blue-800">E mail</p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-blue-600" /> blcpune2003@gmail.com
                </p>
              </div>

              {/* Website */}
              <div className="space-y-1 text-sm text-gray-700">
                <p className="font-semibold text-blue-800">Website Link</p>
                <p className="flex items-center gap-2">
                  <FaGlobe className="text-blue-600" />
                  <a href="https://www.balajilaw.edu.in" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    www.balajilaw.edu.in
                  </a>
                </p>
              </div>

              {/* For Admissions Email */}
              <div className="space-y-1 text-sm text-gray-700 ml-15">
                <p className="font-semibold text-blue-800">For Admissions</p>
                <p className="flex items-center gap-2">
                  <FaMailBulk className="text-blue-600" /> blcpune2003@gmail.com
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* ✅ Important Contacts in Separate Row (Full Width) */}
          <div className="px-6 pb-10">
            <h3 className="text-xl font-semibold text-black mb-4">Important Contacts</h3>
            <div className="flex flex-wrap justify-center items-center rounded gap-7">
              {[
                { title: "Admission Cell Phone", phone: "+91 682 98088" },
                { title: "Administrative Office", phone: "+91 (020) 67084035" },
                { title: "Principal Office", phone: "+91 (020) 67084033" },
                { title: "Faculty Room", phone: "+91 (020) 67084034" },
              ].map((item, index, arr) => (
                <div
                  key={index}
                  className={`flex items-start space-x-2 px-6 py-4 ${index !== arr.length - 1 ? 'border-r' : ''
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
          <div className="px-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484092.5510100063!2d74.08471746255876!3d18.575253489247384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b98543ae1831%3A0x739478ae4419cc18!2sBalaji%20Law%20College!5e0!3m2!1sen!2sin!4v1751034053865!5m2!1sen!2sin"
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
          <img
            src={ContactBanner}
            alt="Contact Us Banner"
            className="w-full h-auto shadow-md"
          />

          <div className="flex relative min-h-screen">
            {/* Sticky Sidebar */}
            <div className="sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
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
