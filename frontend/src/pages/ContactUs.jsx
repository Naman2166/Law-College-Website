import React from 'react';
import SidebarMenu from '../components/SidebarMenu';
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaGlobe } from 'react-icons/fa';
import ContactBanner from "../assets/images/ContactBanner.png"; // Replace with actual banner image

const contactMenuItems = [
  { label: 'Contact Info' },
  { label: 'FAQs' }
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderContent = () => {
    return (
      <div className="space-y-10">

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row px-6 py-10 gap-10">

          {/* Send a Message Form */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-blue-800">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="p-2 border rounded w-full" />
                <input type="email" placeholder="Email" className="p-2 border rounded w-full" />
                <input type="text" placeholder="Subject" className="p-2 border rounded w-full sm:col-span-2" />
                <input type="text" placeholder="Phone" className="p-2 border rounded w-full sm:col-span-2" />
              </div>
              <textarea rows="4" placeholder="Message" className="w-full p-2 border rounded"></textarea>
              {/* Fake captcha UI */}
              <div className="border p-3 flex items-center justify-between rounded">
                <span className="text-sm">I'm not a robot</span>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha" className="h-6" />
              </div>
              <button className="bg-red-600 text-white px-6 py-2 font-semibold rounded hover:bg-red-700">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>
            <div className="space-y-3">
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                Samarth Vidya Sankul, Vishnupuri, Talegaon Dabhade,<br />
                Pune, Maharashtra 410507
              </p>

              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600" />
                Contact for Admission Inquiries: +91 (020) 67084034
              </p>

              <p className="flex items-center gap-2">
                <FaMailBulk className="text-blue-600" />
                Email: blcpune2003@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaMailBulk className="text-blue-600" />
                For Admissions: blcpune2003@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaGlobe className="text-blue-600" />
                <a href="https://www.balajilaw.edu.in" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                  www.balajilaw.edu.in
                </a>
              </p>
            </div>

            {/* Important Contacts */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Important Contacts</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-base">
                <p>
                  <strong className="text-blue-600">Admission Cell Phone:</strong><br />
                  +91 682 98088
                </p>
                <p>
                  <strong className="text-blue-600">Administrative Office:</strong><br />
                  +91 (020) 67084035
                </p>
                <p>
                  <strong className="text-blue-600">Principal Office:</strong><br />
                  +91 (020) 67084033
                </p>
                <p>
                  <strong className="text-blue-600">Faculty Room:</strong><br />
                  +91 (020) 67084034
                </p>
              </div>
            </div>
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
      <img src={ContactBanner} alt="Contact Us Banner" className="w-full h-auto shadow-md" />
      <div className="flex">
        <SidebarMenu menuItems={contactMenuItems} activeIndex={activeIndex} onMenuClick={setActiveIndex} />
        <div className="flex-1 p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ContactUs;
