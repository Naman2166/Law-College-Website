// src/pages/Admission.jsx
import React from 'react';
import SidebarMenu from '../components/SidebarMenu';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AdmissionBanner from "../assets/images/AdmissionBanner.png";
import Eligibility from "../assets/images/Eligibility.png";

const admissionMenuItems = [
  { label: 'Eligibility' },
  { label: 'Admission Procedure' },
  { label: 'Fee Structure' },
  { label: 'Rules & Regulations' },
];

const Admission = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="mt-3 mb-6  space-y-6 p-2">
            <h2 className="text-4xl font-bold text-black mb-4 p-1">Eligibility</h2>
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
          <div className="mt-3 space-y-6 p-2">
            <h2 className="text-3xl font-bold text-black mb-4">Admission Procedure AY2025-26</h2>
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
          <div className="mt-3 space-y-6 p-2">
            <h2 className="text-4xl font-bold text-black mb-4">Fee Structure AY2025-26</h2>
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
          <div className="mt-3 space-y-6 p-2">
            <h2 className="text-3xl font-bold text-black mb-4">Rules & Regulations AY2025-26</h2>
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

  return (
    <div className="relative w-full">
      {/* Banner */}
      <img src={AdmissionBanner} alt="Admissions Banner" className="w-full h-auto shadow-md" loading="lazy" />

      {/* Mobile Menu Button & Dropdown */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex justify-between items-center text-lg bg-blue-950 text-white px-4 py-2"
        >
          <span>MENU</span>
          {isMobileMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute w-full py-1.5 bg-gray-300 rounded-md shadow-md z-10">
            {admissionMenuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-white transition ${
                  activeIndex === index ? 'bg-white text-blue-800 font-semibold' : ''
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
          <SidebarMenu
            menuItems={admissionMenuItems}
            activeIndex={activeIndex}
            onMenuClick={setActiveIndex}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Admission;
