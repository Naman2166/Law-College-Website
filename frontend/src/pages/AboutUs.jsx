// src/pages/AboutUs.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { assets } from '../assets/assets';
import SidebarMenu from '../components/SidebarMenu';
import About1 from '../assets/images/About1.png';
import aboutbg2 from '../assets/images/aboutbg2.png';
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaPrint } from 'react-icons/fa';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import ssk from '../assets/images/ssk.png';

const aboutMenuItems = [
  { label: 'About the Institution' },
  { label: 'Vision and Mission' },
  { label: 'What makes SSK Law College Special' },
  { label: 'Founder Message' },
  { label: "Principal's Message" },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false); // Instantly load content

  useEffect(() => {
    setLoading(false);
  }, []);

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-4xl font-bold flex items-center mt-10">"DISCIPLINE, DETERMINATION AND DEDICATION"</h2>
            <h3 className="text-3xl font-semibold mt-10">About the Institution</h3>
            <p className="text-xl font-medium">Welcome To Late Adv. Ku Shalaka Santosh Khandage Law College</p>

            <div className="flex justify-center mb-10 mt-10">
              <img
                src={About1}
                alt="SSK Law College"
                className="h-[500px] w-[900px] rounded shadow-md"
                loading="lazy"
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

            <div
              className="p-4 mt-6 shadow bg-cover bg-center"
              style={{
                backgroundImage: `url(${aboutbg2})`,
                height: '250px',
                width: '100%'
              }}
            >
              <h4 className="font-semibold text-md mb-1 text-white">Admission Enquiry</h4>
              <p className="text-white text-sm">Admission - Late Adv. Ku Shalaka Santosh Khandage Law College, Pune</p><br />

              <div className="grid md:grid-cols-2 gap-3">
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

                <div className="border-l border-white pl-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <FaPrint className='text-white text-base' />
                    <p className="text-sm text-white">91-20-6674 1234</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMailBulk className='text-white text-base' />
                    <a href='mailto:admissions@balajisociety.org' className="text-sm text-white hover:text-blue-500">admissions@balajisociety.org</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-10 mt-10">
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
                <h2 className="text-3xl font-bold text-blue-800 mb-4 mt-20 flex justify-center items-center">OUR MISSION</h2>
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
          <div className="mt-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">Late Adv. Ku Shalaka Santosh Khandage Law College USP</h2>
            <ul className="list-disc list-inside text-base leading-relaxed space-y-2 text-justify max-w-4xl mx-auto">
              <li>Ranked amongst the top law schools in Pune.</li>
              <li>Affiliated to Savitribai Phule Pune University, Recognised by Govt. of Maharashtra, & Bar Council of India.</li>
              <li>Regular guidance from Judges and eminent academicians.</li>
              <li>World Class Infrastructure – Moot Court Room, Cyber Cell, Legal Aid Cell, Placement Cell, Auditorium.</li>
              <li>Outstanding performance at curricular & extra-curricular activities.</li>
              <li>Guidance & counseling to the students from eminent Lawyers.</li>
              <li>Full-Time College 9 am to 5 pm. Attendance is strictly observed.</li>
              <li>Highly qualified and experienced faculties.</li>
              <li>Well equipped library.</li>
            </ul>
          </div>
        );

      case 3:
        return (
          <div className="mt-10 px-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-start">Secretary Desk</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-start">Welcome To Late Adv. Ku Shalaka Santosh Khandage Law College</h3>
            <div className="flex justify-center mt-4">
              <img src={ssk} alt="Mr. Santosh Khandage" className="w-64 h-auto rounded shadow-md" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-blue-700">Mr. Santosh Khandage</p>
              <p className="text-lg font-bold">Secretary, NMVPM's Trust</p>
            </div>
            <div className="max-w-5xl mx-auto text-justify leading-relaxed space-y-4 text-base">
              <p>
                Nutan Maharashtra Vidya Prasarak Mandal is a prestigious educational organization in Maharashtra, recognized for establishing national education institutions in the Maval Region of Pune district more than 119 years ago. Lokmanya Bal Gangadhar Tilak, a prominent freedom warrior, served as the founding President of the Mandal and chaired its Governing Body for over 12 years. The late Hon. Vishnu G. Vijapurkar served as the inaugural Secretary of “Samarth Vidyalaya,” the first India National school established by the Mandal. The Mandal and its educational institutions possess a profound heritage.
              </p>
              <p>
                I am delighted to welcome you to Late. Adv. Ku. Shalaka Santosh Khandage Law, Talegaon Dabhade, Pune. It is dedicated to achieving excellence in legal education and research. As the secretary of this distinguished institution, it is my honor to assist our community in realizing our collective objectives.
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
                Thank you for participating in Late. Advocate Ku. Shalaka Santosh Khandage, Law, Talegaon Dabhade, Pune. We will persist in maintaining the highest standards of legal education and equipping our students to emerge as leaders in the legal field.
              </p>
              <p>
                Welcome to a journey of knowledge, service, and transformation.
              </p>
              <p className="font-medium">Warm regards,<br /><span className="text-blue-700">Mr. Santosh Khandage</span><br /><span className="text-blue-500">Secretary, NMVPM's Trust</span></p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="mt-10 px-4 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-start">Principal Message</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-start">Welcome To Late Adv. Ku Shalaka Santosh Khandage Law College</h3>
            <div className="flex justify-center mt-4">
              <img src={ssk} alt="Mr. Santosh Khandage" className="w-64 h-auto rounded shadow-md" loading="lazy" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg text-blue-700">Mr. Santosh Khandage</p>
              <p className="text-lg font-bold">Principal</p>
            </div>
            <div className="max-w-5xl mx-auto text-justify leading-relaxed space-y-4 text-base">
              <p>
                Welcome to Late Adv. Ku. Shalaka Santosh Khandage Law College, Pune – a temple of legal education dedicated to nurturing future torchbearers of justice, integrity, and service.
              </p>
              <p>
                Our institution, founded in the memory of the late Adv. Ku. Shalaka Santosh Khandage, stands as a tribute to her unwavering commitment to truth, law, and social justice. It is our mission to carry forward her legacy by empowering students with sound legal knowledge, ethical grounding, and a spirit of service to society.
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
                <span className="text-blue-700">Mr. Santosh Khandage</span><br />
                <span className="text-blue-500">Principal,<br />Late Adv. Ku. Shalaka Santosh Khandage Law College, Pune</span>
              </p>
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
      <div className={loading ? 'pointer-events-none blur-sm' : ''}>
        <div>
          <img src={assets.about} alt="About Us" className="w-full h-auto shadow-md" loading="lazy" />
          <div className="flex">
            <SidebarMenu menuItems={aboutMenuItems} activeIndex={activeIndex} onMenuClick={setActiveIndex} />
            <div className="flex-1 p-6">{renderedContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
