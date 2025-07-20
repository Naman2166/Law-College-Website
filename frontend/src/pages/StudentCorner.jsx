import React, { useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AdmissionBanner from "../assets/images/AdmissionBanner.png";
import Eligibility from "../assets/images/Eligibility.png";
import { assets } from '../assets/assets';


const studentMenuItems = [
  { label: 'Sports Facilty' , id:'sports-facility' },    //new
  { label: 'Hospital MOU' , id:'hospital-mou' },         //new
  { label: 'Hostel Details' , id:'hostel-details' },     //new
  { label: 'Transport' , id:'transport' },               //new
]; 


const StudentCorner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  //for opening specific section, when clicking on link from navbar 
  useEffect(() => {
    const hash = location.hash;
  
    if (hash) {
      const index = studentMenuItems.findIndex(item => `#${item.id}` === hash);
      if (index !== -1) {
        setActiveIndex(index);
      }
  
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [location]);
  
  
  
  //For scrolling to correct sectin , when clicking on link from navbar 
  useEffect(() => {
    // Wait for DOM to render
    setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Adjust offset to scroll below the banner
          const yOffset = -150; // adjust based on your banner height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100); // slight delay ensures DOM is ready
  }, [location]);
  
  

  
  const contentRef = useRef(null);
  
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  
  
  const renderContent = () => {
    switch (activeIndex) {

      case 0:
        return (
          <div id='sports-facility' className="mt-3 mb-6  space-y-6 p-2">
            <h2 className="text-4xl font-bold text-black mb-4 p-1">SPORTS FACILITY</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center p-1">
              <div>
                <img src={Eligibility} alt="Eligibility - Law" className="w-full h-auto rounded" loading="lazy" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">L.L.B. (3 Year Law Course)</h3>
                <p className="text-base leading-relaxed text-justify">
                  <strong className="text-blue-600">Academic qualification -</strong> A student passing a Bachelor’s degree examination with Minimum 45% Marks in any faculty of this University or any other Recognized University shall be eligible for admission to the First year LL.B. Course (three-year degree course). There shall be relaxation of 5% marks in case of SC/ST students. Non-Zero Score in MAH-LLB-3 CET will not be eligible for the admission.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-center p-1">
              <div>
                <img src={Eligibility} alt="Eligibility - Law" className="w-full h-auto rounded" loading="lazy" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">L.L.B. (3 Year Law Course)</h3>
                <p className="text-base leading-relaxed text-justify">
                  <strong className="text-blue-600">Academic qualification -</strong> A student passing a Bachelor’s degree examination with Minimum 45% Marks in any faculty of this University or any other Recognized University shall be eligible for admission to the First year LL.B. Course (three-year degree course). There shall be relaxation of 5% marks in case of SC/ST students. Non-Zero Score in MAH-LLB-3 CET will not be eligible for the admission.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-center p-1">
              <div>
                <img src={Eligibility} alt="Eligibility - Law" className="w-full h-auto rounded" loading="lazy" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">L.L.B. (3 Year Law Course)</h3>
                <p className="text-base leading-relaxed text-justify">
                  <strong className="text-blue-600">Academic qualification -</strong> A student passing a Bachelor’s degree examination with Minimum 45% Marks in any faculty of this University or any other Recognized University shall be eligible for admission to the First year LL.B. Course (three-year degree course). There shall be relaxation of 5% marks in case of SC/ST students. Non-Zero Score in MAH-LLB-3 CET will not be eligible for the admission.
                </p>
              </div>
            </div>
          </div>
        );


      case 1:
        return (
          <div id='hospital-mou' className="mt-3 space-y-6 p-2">
            <h2 className="text-3xl font-bold text-black mb-4">HOSPITAL MOU</h2>
            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>
            <p className="text-base leading-relaxed text-justify">
              In accordance with MAH CET Law, the following documents must be presented when admitting to the college.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>Documents for LL.B (3 YEARS). <a href="#" className="text-blue-600 hover:underline">Click Here</a></li>
              <li>CAP Brochure for AY 2025-26. <a href="#" className="text-blue-600 hover:underline">Click Here</a></li>
              <li>Conversion Certificate for multiple attempts. <a href="#" className="text-blue-600 hover:underline">Click Here</a></li>
            </ul>
          </div>
        );


      case 2:
        return (
          <div id='hostel-details' className="mt-3 space-y-6 p-2">
            <h2 className="text-4xl font-bold text-black mb-4">HOSTEL DETAILS</h2>
            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>
            <p className="text-base leading-relaxed text-justify">
              Fees Regulating Authority sets the fee: <strong>Rs. 33,000</strong> for first year. Full payment is required at admission.
            </p>
            <p className="text-base leading-relaxed text-justify">
              Unpaid students may be barred from exams. Pay all dues on time as notified.
            </p>
          </div>
        );


      case 3:
        return (
          <div id='transport' className="mt-3 space-y-6 p-2">
            <h2 className="text-3xl font-bold text-black mb-4">TRANSPORT</h2>
            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>Discipline, Dedication & Determination is our motto.</li>
              <li>College hours: 8:00 am – 1:30 pm.</li>
              <li>Bio-Metric Attendance is compulsory.</li>
              <li>Below 75% attendance = disqualification from exams.</li>
              <li>Assignments, class tests, surprise tests will be taken seriously.</li>
              <li>Freedom to approach faculty, principal, or management.</li>
              <li>Uniform is mandatory except Saturdays.</li>
              <li>Remove shoes, socks, gadgets during exams.</li>
            </ul>
          </div>
        );


      default:
        return <p>Select a menu item to see content.</p>;
    }
  };


   
  const renderedContent = useMemo(() => renderContent(), [activeIndex]);

  return (
    <div className="relative w-full">
      
        {/* Banner */}
        <div
          className="relative text-white bg-cover bg-center w-auto h-[8rem] sm:h-[14rem] md:h-[18rem] lg:h-[20rem] xl:h-[28rem]"
          style={{ backgroundImage: `url(${assets.about})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-brightness-75"></div>

        </div>





      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
          <SidebarMenu
            menuItems={studentMenuItems}
            activeIndex={activeIndex}
            onMenuClick={setActiveIndex}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{renderedContent}</div>
      </div>
    </div>
  );
};

export default StudentCorner;
