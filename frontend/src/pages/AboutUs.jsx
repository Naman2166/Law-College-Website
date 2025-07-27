// src/pages/AboutUs.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';
import SidebarMenu from '../components/SidebarMenu';
import aboutbg2 from '../assets/images/aboutbg2.png';
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaPrint, FaFilePdf } from 'react-icons/fa';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import ssk from '../assets/images/ssk.png';
import { motion } from 'framer-motion';


const aboutMenuItems = [
  { label: 'About the Institution', id: 'about-institution' },
  { label: 'Vision and Mission', id: 'vision-mission' },
  { label: 'What makes SSK Law College Special', id: 'special' },
  { label: 'Secretary Desk', id: 'secretary-desk' },
  { label: "Principal's Message", id: 'principal-message' },
  { label: 'NMVPM Trust', id: 'nmvpm-trust' },        //new
  { label: 'Affiliations & Recognitions', id: 'affiliations-recognitions' },     //new
];


//NMVPM trust section (Case 5)
const governingBody = [
  { sr: 1, name: 'Shri Sanjay (Bala) Bhegade (Ex.Minister for Maharashtra Govt.)', designation: 'President' },
  { sr: 2, name: 'Shri. Ganesh Khandge', designation: 'Vice President' },
  { sr: 3, name: 'Shri. Santosh Khandge', designation: 'Secretary' },
  { sr: 4, name: 'Shri. Rajesh Mhaske', designation: 'Treasurer' },
  { sr: 5, name: 'Shri. Nandkumar Shelar', designation: 'Joint- Secretary' },
  { sr: 6, name: 'Shri Damodar Shinde', designation: 'Member' },
  { sr: 7, name: 'Shri Yadvendra Khalde', designation: 'Member' },
  { sr: 8, name: 'Shri Maheshbhai Shah', designation: 'Member' },
  { sr: 9, name: 'Shri Ramdas Kakade', designation: 'Member' },
  { sr: 10, name: 'Shri Chandrakant Shete', designation: 'Member' },
  { sr: 11, name: 'Shri Sonba Gopale', designation: 'Member' },
  { sr: 12, name: 'Shri Vasantrao Bhegade', designation: 'Member' },
  { sr: 13, name: 'Shri. Shankar Narkhede', designation: 'Member' },
  { sr: 14, name: 'Shri. Vinayak Abhyankar', designation: 'Member' },
  // ➕ Add more members here
];

const advisoryCommittee = [
  { sr: 1, name: 'Shri Krishnarao Bhegade (Ex- MLA)' },
  { sr: 2, name: 'Shri Vasantrao Khandge'},
  { sr: 3, name: 'Smt. Ruplekha Dhore (Ex-MLA)' },
  { sr: 4, name: 'Shri Ganpatrao Kalokhe' },
  // ➕ Add more members here
];

const executiveCommittee = [
  { sr: 1, name: 'Mr. Rajesh Mhaske', designation: 'Chairman' },
  { sr: 2, name: 'Mr. Shandrakant Shete', designation: 'Member' },
  { sr: 3, name: 'Mr. Santosh Khandage', designation: 'Secretary' },
  { sr: 4, name: 'Mr. Nandkumar Shelar', designation: 'Treasurer' },
  { sr: 5, name: 'Mr. Yadvendra Khalde', designation: 'Member' },
  { sr: 6, name: 'Dr Girish Desai', designation: 'Executive Director' },
  { sr: 7, name: 'Mr. Maheshbhai Shah', designation: 'Invitee Member' },
  { sr: 8, name: 'Mr. Vinayak Abhyankar', designation: 'Invitee Member' },
  // ➕ Add more members here
];
 


//Rules PDF (case 6)
const pdf = [
  {label:"Bar Council Of India Affiliation", pdf:"/SSKVM_BCI_Affiliation.pdf"},
  {label:"GOM-GR", pdf:"/SSKVM_GOM_GR.pdf"},
  {label:"SPPU Affiliation", pdf:"/SSKVM_SPPU_Affiliation.pdf"},
];




const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();


  //for opening specific section, when clicking on link from navbar 
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const index = aboutMenuItems.findIndex(item => item.id === id);
      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  }, [location]);

  // Scroll to the specific section on load or hash change (separated)
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -150; // adjust for your sticky header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 200); // delay to ensure DOM is ready
    }
  }, [location]);
  





  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };




  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div id="about-institution" className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center mt-5">"DISCIPLINE, DETERMINATION AND DEDICATION"</h2>
            <h3 className="text-2xl font-semibold mt-5">About the Institution</h3>
            <p className="text-xl font-medium">Welcome To Late Adv. Ku Shalaka Santosh Khandge Law College</p>

            <div className="flex justify-center mb-10 mt-10">
              <img
                src={assets.building}
                alt="SSK Law College"
                className="h-[300px] w-[700px] md:h-[500px] w-[900px] rounded shadow-md"
                loading="lazy"
              />
            </div>

            <div className="w-full text-justify flex flex-col gap-8 text-base  mt-4 p-2">
              <p>
                Late Adv. Ku Shalaka Santosh Khandge Law College , Pune was established in the year 2023. Late Adv. Ku Shalaka Santosh Khandge Law College (Affiliated to Savitribai Phule Pune University,
                Recognized by Govt. of Maharashtra & Bar Council of India), upholds the Society’s philosophy of Discipline, Dedication, and Determination. It is an upcoming institution to cater to the contemporary
                requirement of the society to have trained Practicing and Corporate Lawyers.
              </p>
              <p >
                Late Adv. Ku Shalaka Santosh Khandge Law College ensures that its students get an opportunity towards holistic development and leaves no stone unturned to provide them with all the facilities,
                amenities and ambience required for their versatile development. The institution is avowed and dedicated to creating a new breed of responsible and equipped Law Graduates who will be capable of contributing to the legal
                fraternity and humanity. Late Adv. Ku Shalaka Santosh Khandge Law College is a place that provides a unique combination of international educational ambience with the traditional Indian rigors of training.
              </p>
              <p className="">
                Late Adv. Ku Shalaka Santosh Khandge Law College stands firm with the backdrop of its topmost Education Institution honing the School & College in India. The same training will hone the
                lawyers to hold in this cutting-edge competition in the legal arena. Within a short span of its inception, Late Adv. Ku Shalaka Santosh Khandge Law College has successfully catapulted a position in the legal education sector
                and has stood the test of time in creating Judicial Officers, Legal Advisors, Prosecutors and Corporate Lawyers, who are well placed in the industry.
              </p>
            </div>

            <div
              className="p-4 mt-6 shadow bg-cover bg-center"
              style={{
                backgroundImage: `url(${aboutbg2})`,
                height: '100%',
                width: '100%'
              }}
            >
              <h4 className="font-semibold text-md mb-1 text-white">Admission Enquiry</h4>
              <p className="text-white text-sm">Admission - Late Adv. Ku Shalaka Santosh Khandge Law College, Pune</p><br />

              <div className="grid md:grid-cols-2 gap-5 md:gap-3">
                <div className="space-y-5 lg:ml-25">
                  <div className="flex items-start gap-2">

                    <FaMapMarkerAlt className="text-white text-lg mt-1" />
                    <p className="text-sm leading-relaxed  text-white">
                      Talegaon Dabhade, Tal. Maval<br />
                      Dist-Pune, Maharashtra 410507
                    </p>

                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-white text-base" />
                    <p className="text-sm  text-white">+91-7030082408</p>
                  </div>
                </div>

                <div className="border-l border-white pl-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <FaPrint className='text-white text-base' />
                    <p className="text-sm text-white">+91-7030082408</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMailBulk className='text-white text-base' />
                    <a href='mailto:adv.sskvm@gmail.com' className="text-sm text-white hover:text-blue-500">adv.sskvm@gmail.com</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        );

      case 1:
        return (
          <div id="vision-mission" className="space-y-10 mt-6 flex flex-col gap-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src={vision} alt="Vision" className="w-full h-auto rounded shadow-md" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-800 mb-4 flex justify-center items-center">OUR VISION</h2>
                <p className="text-justify leading-relaxed text-base">To establish a culture of academic excellence and creative legal scholarship, become a nationally
                  recognized leader in legal education, and produce accomplished, morally upright, and socially
                  conscious legal professionals who respect the rule of law and make a substantial contribution to
                  the advancement of society.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-blue-800 mb-4 flex justify-center items-center">OUR MISSION</h2>
                <ul className="list-disc list-inside space-y-2 text-justify text-base leading-relaxed">
                  <li>Use cutting-edge pedagogical techniques, experiential learning, and a dynamic
                    curriculum to provide thorough and demanding legal education.</li>
                  <li>Develop the advocacy, analytical reasoning, and critical thinking abilities necessary for
                    successful legal practice and leadership. </li>
                  <li>Encourage innovative research that tackles current legal issues and propels the
                    development of jurisprudence. By instilling in our students a robust sense of ethics,
                    professionalism, and social responsibility, we equip them to serve different
                    communities and preserve the principles of justice. </li>
                  <li>Foster an inclusive and collaborative academic environment to promote
                    interdisciplinary engagement, critical thinking, and a commitment to lifelong
                    learning.</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img src={mission} alt="Mission" className="w-full h-auto rounded shadow-md" loading="lazy" />
              </div>
            </div>

          </div>
        );

      case 2:
        return (
          <div id='special' className="mt-5 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">Late Adv. Ku Shalaka Santosh Khandge Law College USP</h2>
            <div className="flex justify-center mb-10 mt-10">
              <img
                src={assets.building}
                alt="SSK Law College"
                className="h-[250px] w-[600px] md:h-[400px] w-[700px] rounded shadow-md"
                loading="lazy"
              />
            </div>
            <ul className="list-disc list-inside text-base leading-relaxed space-y-2 text-justify max-w-4xl mx-auto">
              <li>Affiliated to Savitribai Phule Pune University, Recognised by Govt. of Maharashtra, & Bar Council of India.</li>
              <li>Regular guidance from Judges and eminent academicians.</li>
              <li>World Class Infrastructure – Moot Court Room, Cyber Cell, Legal Aid Cell, Placement Cell, Auditorium.</li>
              <li>Outstanding performance at curricular & extra-curricular activities.</li>
              <li>Guidance & counseling to the students from eminent Lawyers.</li>
              <li>Full-Time College 9 am to 4 pm. Attendance is strictly observed.</li>
              <li>Highly qualified and experienced faculties.</li>
              <li>Well equipped library.</li>
            </ul>
          </div>
        );

      case 3:
        return (
          <div id='secretary-desk' className="mt-5 p-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-start">Secretary Desk</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-start">Welcome To Late Adv. Ku Shalaka Santosh Khandge Law College</h3>
            <div className="flex justify-center mt-4">
              <img src={ssk} alt="Mr. Santosh Khandge" className="w-64 h-auto rounded shadow-md" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-blue-700">Mr. Santosh Khandge</p>
              <p className="text-lg font-bold">Secretary, NMVPM's Trust</p>
            </div>
            <div className="max-w-5xl text-justify mx-auto text-justify leading-relaxed space-y-4 text-base">
              <p>
                Nutan Maharashtra Vidya Prasarak Mandal is a prestigious educational organization in Maharashtra, recognized for establishing national education institutions in the Maval Region of Pune district more than 119 years ago. Lokmanya Bal Gangadhar Tilak, a prominent freedom warrior, served as the founding President of the Mandal and chaired its Governing Body for over 12 years. The late Hon. Vishnu G. Vijapurkar served as the inaugural Secretary of “Samarth Vidyalaya,” the first India National school established by the Mandal. The Mandal and its educational institutions possess a profound heritage.
              </p>
              <p>
                I am delighted to welcome you to Late. Adv. Ku. Shalaka Santosh Khandge Law, Talegaon Dabhade, Pune. It is dedicated to achieving excellence in legal education and research. As the secretary of this distinguished institution, it is my honor to assist our community in realizing our collective objectives.
              </p>
              <p>
                This academic year is poised to be an exhilarating experience of education and professional development. Our teachers, distinguished for their experience and commitment, are dedicated to creating an educational atmosphere that promotes critical thinking, ethical practice, and a profound comprehension of the law.
              </p>
              <p>
                Welcome to our new students, a place where your dedication to justice and law will be cultivated and refined. We urge you to fully utilize the resources and opportunities at your disposal, including our advanced library, varied extracurricular activities, and legal clinics.
              </p>
              <p>
                We are delighted to welcome our returning students. Your experiences and accomplishments consistently enrich our dynamic academic community. We anticipate your ongoing contributions both within and beyond the classroom.
              </p>
              <p>
                Thank you for participating in Late. Advocate Ku. Shalaka Santosh Khandge, Law, Talegaon Dabhade, Pune. We will persist in maintaining the highest standards of legal education and equipping our students to emerge as leaders in the legal field.
              </p>
              <p>
                Welcome to a journey of knowledge, service, and transformation.
              </p>
              <p className="font-medium">Warm regards,<br /><span className="text-blue-700">Mr. Santosh Khandge</span><br /><span className="text-blue-500">Secretary, NMVPM's Trust</span></p>
            </div>
          </div>
        );

      case 4:
        return (
          <div id='principal-message' className="mt-5 p-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-start">Principal Message</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-start">Welcome To Late Adv. Ku Shalaka Santosh Khandge Law College</h3>
            <div className="flex justify-center mt-4">
              <img src={assets.No_User} alt="Mr. Santosh Khandge" className="w-64 h-auto rounded shadow-md" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-blue-700">Principal</p>
              <p className="text-lg font-bold">Principal</p>
            </div>
            <div className="max-w-5xl mx-auto text-justify leading-relaxed space-y-4 text-base">
              <p>
                Welcome to Late Adv. Ku. Shalaka Santosh Khandge Law College, Pune – a temple of legal education dedicated to nurturing future torchbearers of justice, integrity, and service.
              </p>
              <p>
                Our institution, founded in the memory of the late Adv. Ku. Shalaka Santosh Khandge, stands as a tribute to her unwavering commitment to truth, law, and social justice. It is our mission to carry forward her legacy by empowering students with sound legal knowledge, ethical grounding, and a spirit of service to society.
              </p>
              <p>
                At our college, we believe that legal education is not just about acquiring degrees—it’s about building character, critical thinking, and a strong sense of responsibility towards the community and the nation. Through a blend of academic rigor, moot court experiences, internships, and value-based learning, we aim to create advocates who are not only skilled professionals but also compassionate human beings.
              </p>
              <p>
                We are proud to be part of the dynamic educational environment of Pune and are committed to offering a curriculum that is contemporary, inclusive, and oriented towards nation-building. Our dedicated faculty, modern infrastructure, and student-centered approach create an ecosystem where every learner can thrive.
              </p>
              <p>
                I warmly invite aspiring law students to join our academic family and be part of a journey that transforms knowledge into action and ambition into achievement.
              </p>
              <p className="font-medium">
                <span className="text-blue-700">Principal</span><br />
                <span className="text-blue-500">Principal,<br />Late Adv. Ku. Shalaka Santosh Khandge Law College, Pune</span>
              </p>
            </div>
          </div>
        );


      case 5:
        return (
          <div id='nmvpm-trust' className="mt-5 p-2 lg:p-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-start">NMVPM TRUST</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 text-start">History</h3>
            <div className="flex justify-center mt-4">
              <img src={assets.NMVPM} alt="Mr. Santosh Khandge" className="w-56 h-auto rounded shadow-md" loading="lazy" />
            </div>
           
            <div className="max-w-5xl mx-auto text-justify leading-relaxed space-y-4 text-base">
              <p>
                Nutan Maharashtra Vidya Prasarak Mandal is a highly respected education society in Maharashtra and is credited with
                starting national education schools in the Maval Region of Pune district over 100 years ago. The great freedom fighter Lokmanya
                Bal Gangadhar Tilak was the founder member of the Mandal and was the Chairman of its Governing Body for almost 12 years. The late Hon. Vishnu G. Vijapurkar
                was the first Secretary of “Samarth Vidyalaya” – the first national school started by the Mandal. He was imprisoned by the British authorities for his so called anti British activities.
                Vishnu Ganesh Pingle was a Vibrant Student of Samarth Vidyalaya. He became a leader of the Gaddar Party of Lala Hardayal and was hanged by the British for his revolutionary activates when he was barely 26.
                The Mandal and its schools has such rich heritage. During the first 80 years, the Mandal established good Primary and Secondary Schools in the Maval region with the sole intention of providing education to the youth of relatively backward area of the Pune District. In 1998, it established a Polytechnic College and during the last decade, over 1000 students received quality technical education in the Maval region. The Society (Mandal) has thus helped the nearby community in raising its economic and education standard. The progressive, dynamic and dedicated management of the Nutan Maharashtra Vidya Prasarak Mandal has decided to start a four year degree engineering college from academic year 2008-2009. The new institute is named “Nutan Maharashtra Institute of Engineering & Technology (NMIET). NMIET stands committed to provide quality technical education to its students.”Nutan Maharashtra Institute of Engineering & Technology (NMIET)” is approved by All India Council for Technical Education (AICTE), New Delhi and Director of Technical Education (DTE), Government of Maharashtra. It is affiliated to Pune University.
              </p>
            </div>
                
             <div className='mt-10 lg:mt-16 text-xl md:text-2xl font-semibold text-blue-900 text-start'>
               <p className='text-gray-800 font-semibold text-2xl '>Governing Body</p>   
                {/* Table */}
                <div className="overflow-x-auto mt-6 mx-2 lg:mx-8 xl:mx-10">
                  <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                    <thead className="bg-blue-900">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Sr. No.</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                      {governingBody.map((member) => (
                        <tr key={member.sr}>
                          <td className="px-4 py-2 border-r">{member.sr}</td>
                          <td className="px-4 py-2 border-r">{member.name}</td>
                          <td className="px-4 py-2">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>


             <div className='mt-10 lg:mt-16 text-xl md:text-2xl font-semibold text-blue-900 text-start'>
               <p className='text-gray-800 font-semibold text-2xl '>Advisory Committee</p>   
                {/* Table */}
                <div className="overflow-x-auto mt-6 mx-2 lg:mx-8 xl:mx-10">
                  <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                    <thead className="bg-blue-900">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Sr. No.</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Name</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                      {advisoryCommittee.map((member) => (
                        <tr key={member.sr}>
                          <td className="px-4 py-2 border-r">{member.sr}</td>
                          <td className="px-4 py-2 border-r">{member.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>


             <div className='mt-10 lg:mt-16 text-xl md:text-2xl font-semibold text-blue-900 text-start'>
               <p className='text-gray-800 font-semibold text-2xl '>Executive Committee</p>   
                {/* Table */}
                <div className="overflow-x-auto mt-6 mx-2 lg:mx-8 xl:mx-10">
                  <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                    <thead className="bg-blue-900">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Sr. No.</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50 border-r">Name</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-50">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
                      {executiveCommittee.map((member) => (
                        <tr key={member.sr}>
                          <td className="px-4 py-2 border-r">{member.sr}</td>
                          <td className="px-4 py-2 border-r">{member.name}</td>
                          <td className="px-4 py-2">{member.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
  
          </div>
        );



      case 6:
        return (
          <div id='affiliations-recognitions' className="mt-5 p-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-start">AFFILIATIONS & REGULATIONS</h2>
            
            {/* PDF */}
            <div className='flex gap-8 flex-wrap'>
            {pdf.map((item, index) => (
            <motion.div
              initial={{ opacity: 0.5, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] max-w-[200px] w-full h-48 bg-white flex flex-col items-center justify-between py-4 rounded shadow-lg border-t-8 border-t-blue-950 shadow-gray-300 hover:scale-105 transition text-center px-3 shrink-0"
            >
              <FaFilePdf className="text-red-600 text-5xl sm:text-6xl mb-2" />
              <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mb-1 w-full">
                {item.label}
              </p>
              <p onClick={() => window.open(item.pdf, "_blank")} className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">Download</p>
            </motion.div>
          ))}
            </div>

          </div>
        );

      default:
        return <p>Select a menu item to see content.</p>;
    }
  };

  const renderedContent = useMemo(() => renderContent(), [activeIndex]);

  return (
    <div className="relative">
      <div>

        {/* Banner */}
        <div
          className="relative text-white bg-cover bg-center w-auto h-[8rem] sm:h-[14rem] md:h-[18rem] lg:h-[20rem] xl:h-[28rem]"
          style={{ backgroundImage: `url(${assets.HomePageCoursesBgImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 backdrop-brightness-85"></div>

          <h1 className='absolute bottom-3 right-3 md:bottom-6 md:right-6 text-4xl md:text-7xl lg:text-8xl font-bold opacity-95'>About Us</h1>

        </div>





        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
            <SidebarMenu
              menuItems={aboutMenuItems}
              activeIndex={activeIndex}
              onMenuClick={setActiveIndex}

            />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 mb-10 lg:p-6">{renderedContent}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

