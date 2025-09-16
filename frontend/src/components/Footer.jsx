import React from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram,FaBuilding, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="text-white bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${assets.FooterBg})` }}
    >
      <div className="bg-black/60 backdrop-brightness-75 grid grid-cols-2 md:grid-cols-4 gap-10 gap-x-20 py-20 px-4 sm:px-10 text-sm">

        {/* Contact Info */}
        <div>
          <p className="text-xl font-bold">Get In Touch With Us</p>
          <hr className="mb-4 border-gray-400" />
          <ul className="text-gray-300 space-y-4">
            {/* <li className="flex items-start gap-2">
              <FaBuilding className=" text-lg" />
              <span>
                 Late Adv. Ku Shalaka Santosh Khandge Law College, Pune
              </span>
            </li> */}
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <span>
              Late Adv. Ku. Shalaka Santosh Khandge Law College, Talegaon
              Dabhade, Pune, Maharashtra 410507
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>+91-7030082408</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-lg" />
              <span>adv.sskvm@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-bold mb-3">Quick Links</p>
          <hr className="mb-4 border-gray-400" />
          <ul className="text-gray-300 space-y-2">
            <li><button onClick={() => handleNavigate('/about-us')} className="hover:underline">About</button></li>
            <li><button onClick={() => handleNavigate('/academics')} className="hover:underline">Academics</button></li>
            <li><button onClick={() => handleNavigate('/admission')} className="hover:underline">Admission</button></li>
            <li><button onClick={() => handleNavigate('/gallery')} className="hover:underline">Gallery</button></li>
            <li><button onClick={() => handleNavigate('/contact-us')} className="hover:underline">Contact Us</button></li>
          </ul>

          <div className="mt-6">
            <p className="text-xl font-bold mb-3">SSKLC's</p>
            <hr className="mb-3 border-gray-400" />
            <ul className="text-gray-300">
              <li><button onClick={() => handleNavigate('/about-ssklc')} className="hover:underline">About SSKLC's</button></li>
            </ul>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <p className="text-xl font-bold mb-3">Important Links</p>
          <hr className="mb-4 border-gray-400" />
          <ul className="text-gray-300 space-y-2">
            <li><a href="https://www.barcouncilofindia.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Bar Council of India (BCI)</a></li>
            <li><a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline">UGC</a></li>
            <li><button onClick={() => handleNavigate('/anti-ragging')} className="hover:underline">Anti-Ragging Policy</button></li>
            <li><button onClick={() => handleNavigate('/emergency-helpline')} className="hover:underline">Emergency Helpline</button></li>
          </ul>
        </div>

        {/* Student Corner & Social Media */}
        <div>
          <div className="mb-6">
            <p className="text-xl font-bold mb-3">Student Corner</p>
            <hr className="mb-4 border-gray-400" />
            <ul className="text-gray-300 space-y-2">
              <li><button onClick={() => handleNavigate('/syllabus')} className="hover:underline">Syllabus</button></li>
              <li><button onClick={() => handleNavigate('/library')} className="hover:underline">Library</button></li>
              <li><button onClick={() => handleNavigate('/committee')} className="hover:underline">Committee</button></li>
              <li><button onClick={() => handleNavigate('/admission')} className="hover:underline">Admission</button></li>
              <li><button onClick={() => handleNavigate('/infrastructure')} className="hover:underline">Infrastructure</button></li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-bold mb-3">Follow Us</p>
            <hr className="mb-3 border-gray-400" />
            <div className="flex gap-4 text-2xl text-gray-300">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
