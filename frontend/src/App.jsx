import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Admission from './pages/Admission'
import Academics from './pages/Academics'
import Library from './pages/Library'
import StudentCorner from './pages/StudentCorner'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'



const App = () => {

  const location = useLocation()       //to get current route 

  return (
    <div className='mx-0 sm:mx-[0%]'>              
    
    <div className='mb-14 sm:mb-18 md:mb-18 lg:mb-28 xl:mb-32'>                      {/* original  mb-31*/}
    {location.pathname !== '/login' && location.pathname !== '/signup' && <Navbar />  }              {/* on login page Navbar will not visible) */}   
    </div>
                                  
    <Routes>
       <Route path='/' element={<Home />} />                       {/* on "/" route , Home component will appear */}
       <Route path='/about-us' element={<AboutUs />} />
       <Route path='/admission' element={<Admission />} />  
       <Route path='/academics' element={<Academics />} /> 
       <Route path='/library' element={<Library />} />
       <Route path='/student-corner' element={<StudentCorner />} />
       <Route path='/gallery' element={<Gallery />} />
       <Route path='/contact-us' element={<ContactUs />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<SignUp />} />
    </Routes>

     {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />  }              {/* on login page footer will not visible) */}   
     
    </div>
  )
}

export default App