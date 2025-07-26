import React, { useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu';
import { FaFilePdf } from 'react-icons/fa';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

//Sidebar
const studentMenuItems = [
  { label: 'Sports Facilty', id: 'sports-facility' },    //new
  { label: 'Hospital MOU', id: 'hospital-mou' },         //new
  { label: 'Hostel Details', id: 'hostel-details' },     //new
  { label: 'Transport', id: 'transport' },               //new
];


//Hostel Details section (Case 2)
const hostelFees = [
  { description: 'Hostel Fees', girls: '-', boys: '-' },
  { description: 'Mess Fees (Breakfast + Lunch + Dinner)', girls: '-', boys: '-' },
  { description: 'Total Fees', girls: '-', boys: '-' },
  {
    description: 'Room Contains for Each 3 Student',
    about: [
      '3 Bed, 3 Table, 3 Chair, 2 Fan, WiFi, Hot Water,',
      'Water Purifier, Wardrobe of 3 Compartments',
    ]
  },
  {
    description: 'Notes',
    about: [
      '1. Mess & Breakfast is Compulsory with Hostel Admission.',
      '2.Full fees will be charged if hostel left in the midst of academic year.',
      '3.No semester wise Admission, Full Year Admission as per Academic Year.',
      '4. No Cash/Cheque Payment accepted, Only Online Payment accepted.',
    ]
  },
  // ➕ Add more rows here
];



//Transport Section (Case 3) 
const route1 = [
  { sr: 1, busStop: "Bhosari", charges: "28800/-" },
  { sr: 2, busStop: "Kudal wadi", charges: "28800/-" },
  { sr: 3, busStop: "Kasturi Market", charges: "28800/-" },
  { sr: 4, busStop: "Khandoba Mal", charges: "28800/-" },
  { sr: 5, busStop: "Nigdi", charges: "28800/-" },
  { sr: 6, busStop: "Bhakti Shakti", charges: "28800/-" },
  { sr: 7, busStop: "Dehu Road", charges: "25200/-" },
];

const route2 = [
  { sr: 1, busStop: "Danga Chowk", charges: "28800/-" },
  { sr: 2, busStop: "Kalewadi Phata", charges: "28800/-" },
  { sr: 3, busStop: "Morya Hospital", charges: "28800/-" },
  { sr: 4, busStop: "Walhekar Wadi", charges: "28800/-" },
  { sr: 5, busStop: "Ravet", charges: "28800/-" },
  { sr: 6, busStop: "Mukai Chowk", charges: "28800/-" },
  { sr: 7, busStop: "Dehu Road", charges: "25200/-" },
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
              {/* <div>
                <img src={Eligibility} alt="Eligibility - Law" className="w-full h-auto rounded" loading="lazy" />
              </div> */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-2">College Sports Facilities</h3>
                <ul className="list-disc list-inside text-base leading-relaxed space-y-2 text-justify max-w-4xl mx-auto">
                  <li>Gymkhana</li>
                  <li>Table Tennis Court</li>
                  <li>Cricket ground</li>
                  <li>Badminton Court</li>
                  <li>Holly Ball Court</li>
                  <li>Chess, carom hall</li>
                </ul>
                <p className='mt-3'>Other Activities Athletics, Fencing, Weight Lifting, Power Lifting</p>
              </div>
            </div>

          </div>
        );


      case 1:
        return (
          <div id='hospital-mou' className="mt-3 space-y-6 p-2">
            <h2 className="text-3xl font-bold text-black mb-4">HOSPITAL MOU</h2>
            {/* PDF */}
            <div className='flex gap-8 flex-wrap'>
              <motion.div
                initial={{ opacity: 0.5, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[200px] w-full h-48 bg-white flex flex-col items-center justify-between py-4 rounded shadow-lg border-t-8 border-t-blue-950 shadow-gray-300 hover:scale-105 transition text-center px-3 shrink-0"
              >
                <FaFilePdf className="text-red-600 text-5xl sm:text-6xl mb-2" />
                <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mb-1 w-full">
                  Hospital MOU
                </p>
                <p className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">Download</p>
              </motion.div>
            </div>
          </div>
        );


      case 2:
        return (
          <div id='hostel-details' className="mt-3 space-y-10 p-2">
            <h2 className="text-4xl font-bold text-black mb-4">HOSTEL DETAILS</h2>

            <div className='flex flex-col gap-y-3 '>
              <h3 className="text-xl font-bold text-blue-800 mt-3">Hostel Facilities</h3>
              <p className="text-base leading-relaxed text-justify">
                Santosh Khandge Law College has a highly furnished in campus hostel facility for the boys and girls coming outside. Each hostel will be carefully and strictly managed by their wardens.
                Well maintained college canteen is very close to hostels. The food quality is verified by Food committee for Santosh Khandge Law College time to time so that students will get good quality food.
                Accommodation available for 196 students.
              </p>
            </div>

            <div className='flex flex-col gap-y-3'>
              <h3 className="text-xl font-bold text-blue-800">Hostel Fees</h3>
              <div className='flex flex-col gap-y-4' >
                <p className="text-base leading-relaxed text-justify">
                  Hostel Fee Structure for Student is as follows:
                </p>

                {/* Table */}
                <div className="overflow-x-auto mx-2 lg:mx-8 xl:mx-10">
                  <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                    <thead className="bg-blue-900">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r"> Description of Fees </th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r"> Girls Hostel Fees </th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50"> Boys Hostel Fees </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm font-medium text-gray-700">
                      {hostelFees.map((item, index) => (
                        <tr key={index}>
                          {index < 3 ? (
                            // First 3 normal rows
                            <>
                              <td className="px-4 py-2 border border-gray-500">{item.description}</td>
                              <td className="px-4 py-2 border border-gray-500">{item.girls}</td>
                              <td className="px-4 py-2 border border-gray-500">{item.boys}</td>
                            </>
                          ) : (
                            // 4th and 5th row with merged 2 columns for Girls & Boys
                            <>
                              <td className="px-4 py-2 border border-gray-500">{item.description}</td>
                              <td className="px-4 py-2 text-sm text-gray-700 border border-gray-500" colSpan={2}>
                                <ul className="list-disc list-inside space-y-1">
                                  {item.about?.map((point, index) => (
                                    <li key={index}>{point}</li>
                                  ))}
                                </ul>
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>



            <div className='flex flex-col gap-y-3 '>
              <h3 className="text-xl font-bold text-blue-800 mt-2">Bank Details for Hostel Fees payment by RTGS/NEFT/Transfer</h3>
              {/* Table */}
              <div className="overflow-x-auto mt-2 mx-2 lg:mx-8 xl:mx-10">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                  <thead className="bg-blue-900">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">BANK NAME</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">BRANCH ADDRESS</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">ACCOUNT NAME</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">ACCOUNT NO.</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">IFSC CODE</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">MICR CODE</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                    <tr>
                      <td className="px-4 py-2 border">AXIS BANK LTD</td>
                      <td className="px-4 py-2 border">TALEGAON DABHADE,PUNE</td>
                      <td className="px-4 py-2 border">Nutan Maharashtra Vidya Prasarak Mandal-Hostel</td>
                      <td className="px-4 py-2 border">917010054283349</td>
                      <td className="px-4 py-2 border">UTIB0002137</td>
                      <td className="px-4 py-2 border">411211036</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='flex flex-col gap-y-3'>
              <h3 className="text-xl font-bold text-blue-800 mt-3">Hostel Facilities for Boys and Girls Hostel</h3>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                <li>Student capacity 196.</li>
                <li>Cloth drying, hanging facility.</li>
                <li>Lawn greenery at Girls hostel.</li>
                <li>Housekeeping facility provided to both girls & boys hostel.</li>
                <li>English and Marathi news paper available to enhance the general knowledge.</li>
                <li>24 hour drinking and usable water available with alternate arrangement.</li>
                <li>Stationery and Xerox facility within campus.</li>
              </ul>
            </div>

          </div>
        );


      case 3:
        return (
          <div id='transport' className="mt-3 space-y-9 p-2">
            <h2 className="text-3xl font-bold text-black mb-4">Bus Facility</h2>
            <div className='flex flex-col gap-y-3'>
              <p className='text-justify'>
                We have a 4 buses to provide to-and Fro transportation from all major parts of Pune City. These buses ply from morning to evening as per the Institute time-schedule.
                It is available to all with a payment decided by the Institute. The Institute bus facility runs on no loss no profit basis with the payment collected from students and
                staff members of this institute. To run the buses smoothly, the institute has formed the vehicle committee of following staff members and student representative.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-800">Santosh Khandge College, Talegaon BUS Route & Fees :</h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                {/* Route 1 */}
                <div className='flex flex-col gap-y-3'>
                  <p className='font-medium text-lg text-blue-800'>Route : Talegaon To Bhosari</p>
                  {/* Table */}
                  <div className="overflow-x-auto mt-0  ">
                    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                      <thead className="bg-blue-900">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Sr No.</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Bus Stop</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Bus Charges/year</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                        {route1.map((item) => (
                          <tr key={item.sr}>
                            <td className="px-4 py-2 border border-gray-500">{item.sr}</td>
                            <td className="px-4 py-2 border border-gray-500">{item.busStop}</td>
                            <td className="px-4 py-2 border border-gray-500">{item.charges}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>


                {/* Route 2  */}
                <div className='flex flex-col gap-y-3'>
                  <p className='font-medium text-lg text-blue-800'>Route : Talegaon To Chinchwad</p>
                  {/* Table */}
                  <div className="overflow-x-auto mt-0  ">
                    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                      <thead className="bg-blue-900">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Sr No.</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Bus Stop</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Bus Charges/year</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                        {route2.map((item) => (
                          <tr key={item.sr}>
                            <td className="px-4 py-2 border border-gray-500">{item.sr}</td>
                            <td className="px-4 py-2 border border-gray-500">{item.busStop}</td>
                            <td className="px-4 py-2 border border-gray-500">{item.charges}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>


            </div>


            <div className='flex flex-col gap-y-3'>
              <p className='font-bold text-xl text-blue-800 mt-2'>Payment Mode</p>
              {/* Table */}
              <div className="overflow-x-auto mt-2  ">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                  <thead className="bg-blue-900">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Sr No.</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Particular</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                    <tr >
                      <td className="px-4 py-2 border border-gray-500">1</td>
                      <td className="px-4 py-2 border border-gray-500">College Fees (DD/NEFT/RTGS/ Paytm)</td>
                      <td className="px-4 py-2 border border-gray-500">
                        DD : “ Nutan Maharashtra Institute of Engineering & Technology” NEFT/RTGS : Account No. 917010054972777, Axis Bank,
                        IFSC code : UTIB0002137 Paytm : Option is provided on college website in online payment option .
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


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
