import React from 'react';
import SidebarMenu from '../components/SidebarMenu'; // Add your banner image here
import { FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
import AdmissionBanner from "../assets/images/AdmissionBanner.png"
import Eligibility from "../assets/images/Eligibility.png"

const admissionMenuItems = [
  { label: 'Eligibility' },
  { label: 'Admission Procedure' },
  { label: 'Fee Structure' },
  { label: 'Rules & Regulations' }
];

const Admission = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="mt-10 space-y-6">
            <h2 className="text-4xl font-bold text-black mb-4">Eligibility</h2>

            <div className="grid md:grid-cols-2 gap-6 items-center p-4">
              <div>
                <img
                  src={Eligibility} // Replace with your actual path
                  alt="Eligibility - Law"
                  className="w-full h-auto rounded"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">L.L.B. (3 Year Law Course)</h3>
                <p className="text-base leading-relaxed text-justify">
                  <strong className="text-blue-600">Academic qualification -</strong>  A student passing a Bachelor’s degree examination with
                  Minimum 45% Marks in any faculty of this University or any other Recognized
                  University shall be eligible for admission to the First year LL.B. Course (three-year
                  degree course). There shall be relaxation of 5% marks in case of SC/ST students.
                  Non-Zero Score in MAH-LLB-3 CET will not be eligible for the admission.
                </p>
              </div>
            </div>
          </div>
        );


      case 1:
        return (
          <div className="mt-10 space-y-6 px-4">
            <h2 className="text-4xl font-bold text-black mb-4">Admission Procedure AY2025-26</h2>

            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

            <p className="text-base leading-relaxed text-justify">
              In accordance with MAH CET Law, the following documents must be presented when admitting to the college.
            </p>

            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                To access documents required for LL.B (3 YEARS).{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Click Here
                </a>
              </li>

              <li>
                Information Brochure for Centralized Admission Process (CAP) of First Year of Three Year Degree Course in Law
                leading to <br></br>LL.B.(3Yrs.) (Regular - Full Time - Course) Academic Year 2025-26.{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Click Here
                </a>
              </li>

              <li>
                Conversion Certificate for the Candidates who have cleared their SSC & HSC Board Examination in More than one
                Attempt.{' '}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Click Here
                </a>
              </li>
            </ul>
          </div>
        );


      case 2:
        return (
          <div className="mt-10 space-y-6 px-4">
            <h2 className="text-4xl font-bold text-black mb-4">Fee Structure AY2025-26</h2>

            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

            <p className="text-base leading-relaxed text-justify">
              The Fees Regulating Authority of the State of Maharashtra is responsible for announcing the college’s fees for the
              three-year law program, known as LL.B. The first year of the three-year LL.B. program costs <strong>Rs. 33,000</strong>.
            </p>

            <p className="text-base leading-relaxed text-justify">
              Payment in full is required at the time of admission. If a student has not paid the examination or college fees for
              the year, they will normally not be allowed to take any of the university or college exams. Fees and other obligations
              must be paid as periodically specified by the appropriate authority.
            </p>
          </div>
        );


      case 3:
        return (
          <div className="mt-10 space-y-6 px-4">
            <h2 className="text-4xl font-bold text-black mb-4">Rules & Regulations AY2025-26</h2>

            <h3 className="text-xl font-bold text-blue-800">L.L.B. (3 Year Law Course)</h3>

            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>Students will have to maintain decorum on campus as Discipline, Dedication & Determination is our motto.</li>
              <li>College timing is from 8:00 am to 1:30 pm and students will have to be on campus for the whole time.</li>
              <li>Compulsory Bio-Metric Attendance.</li>
              <li>
                The students who fail to maintain attendance beyond 75% will not be allowed to appear for university exams and will
                be discontinued from the college roll.
              </li>
              <li>Regular assignment, class test, surprise test will be conducted and the assessment will be done accordingly.</li>
              <li>
                Gurukul culture is prevalent and so every student has a right to meet any Professor, Principal, Director, or
                President of the Society to share their thoughts and grievances.
              </li>
              <li>Uniform is compulsory on all days except for Saturday.</li>
              <li>
                Students are specially instructed to remove Blazer, Shoes, Socks and any electronic gadgets, during examinations.
              </li>
            </ul>
          </div>
        );


      default:
        return <p>Select a menu item to see content.</p>;
    }
  };

  return (
    <div className="relative">
      <div>
        <img src={AdmissionBanner} alt="Admissions Banner" className="w-full h-auto shadow-md" loading="lazy" />
        <div className="flex">
          <SidebarMenu menuItems={admissionMenuItems} activeIndex={activeIndex} onMenuClick={setActiveIndex} />
          <div className="flex-1 p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
