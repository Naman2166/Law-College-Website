// src/pages/AboutUs.jsx
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import SidebarMenu from '../components/SidebarMenu';
import About1 from '../assets/images/About1.png';
import aboutbg2 from '../assets/images/aboutbg2.png'
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaPrint } from 'react-icons/fa';



const aboutMenuItems = [
  { label: 'About the Institution' },
  { label: 'Vision and Mission' },
  { label: 'What makes SSK Law College Special' },
  { label: 'Founder Message' },
  { label: "Principal's Message" },
  { label: 'Committees' },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default first tab

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-4xl font-bold flex justify-center items-center mt-10">"DISCIPLINE, DETERMINATION AND DEDICATION"</h2>
            <h3 className="text-3xl font-semibold mt-10">About the Institution</h3>
            <p className="text-xl font-medium">Welcome To Late Adv. Ku Shalaka Santosh Khandage Law College</p>

            <div className="flex justify-center mb-10 mt-10">
              <img
                src={About1}
                alt="SSK Law College"
                className="h-[500px] w-[900px] rounded shadow-md"
              />
            </div>


            <div className="grid md:grid-cols-2 text-justify gap-10 text-base leading-relaxed mt-4 p-5">
              <p>
                Late Adv. Ku Shalaka Santosh Khandage Law College , Pune was established in the year 2023. Late Adv. Ku Shalaka Santosh Khandage Law College (Affiliated to Savitribai Phule Pune University,
                Recognized by Govt. of Maharashtra & Bar Council of India), upholds the Society’s philosophy of Discipline, Dedication, and Determination. It is an upcoming institution to cater to the contemporary
                requirement of the society to have trained Practicing and Corporate Lawyers.
              </p>
              <p >
                Late Adv. Ku Shalaka Santosh Khandage Law College ensures that its students get an opportunity towards holistic development and leaves no stone unturned to provide them with all the facilities,
                amenities and ambience required for their versatile development. The institution is avowed and dedicated to creating a new breed of responsible and equipped Law Graduates who will be capable of contributing to the legal
                fraternity and humanity. Late Adv. Ku Shalaka Santosh Khandage Law College is a place that provides a unique combination of international educational ambience with the traditional Indian rigors of training.
              </p>
              <p className="-mt-20">
                Late Adv. Ku Shalaka Santosh Khandage Law College stands firm with the backdrop of its topmost Education Institution honing the School & College in India. The same training will hone the
                lawyers to hold in this cutting-edge competition in the legal arena. Within a short span of its inception, Late Adv. Ku Shalaka Santosh Khandage Law College has successfully catapulted a position in the legal education sector
                and has stood the test of time in creating Judicial Officers, Legal Advisors, Prosecutors and Corporate Lawyers, who are well placed in the industry.
              </p>
            </div>

            {/* Contact / Enquiry Section */}
            <div
              className="p-4 mt-6 shadow bg-cover bg-center"
              style={{
                backgroundImage: `url(${aboutbg2})`,
                height: '250px',
                width: '100%'
              }}
            >
              <h4 className="font-semibold text-md mb-1 text-white">Admission Enquiry</h4>
              <p className="text-white text-sm">
                Admission - Late Adv. Ku Shalaka Santosh Khandage Law College, Pune
              </p><br></br>

              
              <div className="grid md:grid-cols-2 gap-3">
    {/* Left Column */}
    <div className="space-y-5 ml-25">
      <div className="flex items-start gap-2">
        <FaMapMarkerAlt className="text-white text-lg mt-1" />
        <p className="text-sm leading-relaxed  text-white">
          55/2-7, Tathwade, Opposite Mumbai<br />
          Bengaluru Highway, Off, Old Mumbai Rd,<br />
          Pimpri-Chinchwad, Maharashtra 411033
        </p>
      </div>

      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-white text-base" />
        <p className="text-sm  text-white">020-67084035/34/33 / 9168290808</p>
      </div>
    </div>

    {/* Right Column */}
    <div className="border-l border-white pl-6 space-y-3">
      <div className="flex items-center gap-2">
        <FaPrint className='text-white text-base'/>
        <p className="text-sm text-white">91-20-6674 1234</p>
      </div>

      <div className="flex items-center gap-2">
        <FaMailBulk className='text-white text-base' />
        <a href='mailto:admissions@balajisociety.org' className="text-sm text-white hover:text-blue-500">admissions@balajisociety.org</a>
      </div>
    </div>
  </div>
</div>
</div>)

      case 1:
        return <p>This is content for <b>Vision and Mission</b>.</p>;
      case 2:
        return <p>This is content for <b>What makes SSK Law College Special</b>.</p>;
      case 3:
        return <p>This is content for <b>Founder Message</b>.</p>;
      case 4:
        return <p>This is content for <b>Principal's Message</b>.</p>;
      case 5:
        return <p>This is content for <b>Committees</b>.</p>;
      default:
        return <p>Select a menu item to see content.</p>;
    }
  };

  return (
    <div>
      {/* Top Image */}
      <div>
        <img
          src={assets.about}
          alt="About Us"
          className="w-full h-auto shadow-md"
        />
      </div>

      {/* Sidebar + Right content */}
      <div className="flex">
        <SidebarMenu
          menuItems={aboutMenuItems}
          activeIndex={activeIndex}
          onMenuClick={setActiveIndex}
        />

        <div className="flex-1 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
