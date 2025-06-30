import React, { useState, useMemo } from 'react';
import { assets } from '../assets/assets';
import AdmissionBanner from "../assets/images/AdmissionBanner.png"
import SidebarMenu from '../components/SidebarMenu'; // Replace with your actual image path

const libraryMenuItems = [
  { label: 'Library' }
];

const Library = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderContent = () => {
    switch (activeIndex) {
     case 0:
  return (
    <div className="mt-10 space-y-6 px-4 mb-16">
      <h2 className="text-3xl font-bold text-black mb-4">Library</h2>
      <p className="text-base leading-relaxed text-justify">
        The library is hosting more than 18805 books and more than 1790 bound journals/volumes. Library subscribes to 9 newspapers, 9 journals and 1 periodicals subscription current year, 7 National and 2 International journals.
        It has a collection of Encyclopedias, Bare Acts, Dictionaries, Autobiography and Commentaries in the field of law. The library has subscribed to various databases such as Manupatra, EBSCO host, IEL, Backer, LawSikho, ARC and National Law etc.
        <br /><br />
        The library has an open access system so OPAC facilitates readers to have easy access to the library resources. It has spacious reading area and rich sitting capacity of 107.
        Library implemented CCTV surveillance facility for security purposes. Library automation started since 2002. College provides Wi-Fi facility for students and staff to use e-resources within campus and Computer Lab for students to access e-resources on the Internet.
      </p>

      <p className="text-base leading-relaxed text-justify">
        <strong className='text-blue-500'>Announcement of New Arrivals:</strong> Special section of new books and journals are displayed so that students would be aware about the addition to the library and this will upgrade & update their knowledge.
        <br /><br />
        <strong className='text-blue-500'>Library Orientation Program:</strong> Every year the librarian has been conducting the orientation program for the newly admitted students for acquainting the students to the services offered to them.
        <br /><br />
        <strong className='text-blue-500'>Question Bank:</strong> The library is equipped with the SPPU examination Question Papers of previous years which are compiled in a file to facilitate the students to have a look at the types of questions that were asked in the previous academic years.
        <br /><br />
        <strong className='text-blue-500'>Membership of Jayakar Library and Other E-resources:</strong> The BLC library has membership of Jayakar Library of Savitribai Phule Pune University. The students and staff have easy access to the renowned books and other than the books available at BLC library.
        <br /><br />
        <strong className='text-blue-500'>Local and National News Papers:</strong> The students have easy access to the local and National newspapers (English, Marathi, Hindi Language) to broaden their perspective towards the global and local scenario. 
        The Times of India, The Economics Times, The Hindu, The Indian Express, Lokmat, Sakal, Maharashtra times, Loksatta, Navbharat newspapers subscription by the college library.
      </p>

      <p className="text-base leading-relaxed text-justify">
        <strong className='text-blue-500'>E-Library:</strong> The library is equipped with the 10 computers. It is connected through LAN and has an internet access. The internet facility enhances the knowledge of the students for searching information and completing assignments or projects assigned to them.
        Access to all the e-resources through IP address and LAN server.
        <br /><br />
        <strong className='text-blue-500'>Borrowing Books Service:</strong> Ten plus Text Books can be issued to students and staff.
        <br /><br />
        <strong className='text-blue-500'>Photocopying facilities:</strong> Photocopying and scanning facilities are made and available for Most court paperwork submission to the faculty and students.
        <br /><br />
        <strong className='text-blue-500'>Current Awareness Services:</strong> Newspaper clipping service is also available in library.
      </p>

      <p className="text-base leading-relaxed text-justify">
        <strong className='text-blue-500'>Collection:</strong> The library has to be a main hub for learning. NMIET Library provides services & facilities to the requirements of the institute's teaching & research programs. Accordingly, the various types of collection is available in the library.
        <br /><br />
        The library has following types of collection which enriched the library.
      </p>
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
      <img
        src={assets.about} // same background hero image as About Us
        alt="Library Banner"
        className="w-full h-auto shadow-md"
        loading="lazy"
      />

      <div className="flex relative min-h-screen">
        {/* Sticky Sidebar */}
        <div className="sticky top-24 self-start h-fit max-h-[calc(100vh-6rem)] overflow-auto">
          <SidebarMenu
            menuItems={libraryMenuItems}
            activeIndex={activeIndex}
            onMenuClick={setActiveIndex}
          />
        </div>

        {/* Scrollable Right Content */}
        <div className="flex-1 p-6">{renderedContent}</div>
      </div>
    </div>
  </div>
);

};

export default Library;
