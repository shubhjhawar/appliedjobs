import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LeftNav from "./LeftNav.jsx";
import Jobs from './Jobs.jsx';
import Home from './Home.jsx';

const Layout = () => {
  return (
    <div className='grid grid-cols-8  min-h-screen'>
      <div className="col-span-8 ">
        <Header />
      </div>

      <div className='lg:col-span-2 md:col-span-1 max-sm:hidden block'>
          <Routes>
            <Route path="/" element={<LeftNav />} />
            <Route path='/:user/*' element={<LeftNav />} />
          </Routes>
      </div>

      <div className='col-span-8 lg:col-span-6 md:col-span-7 sm:col-span-7 xs:col-span-5' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/:user' element={<Jobs />} />
          </Routes>
      </div>

      <div className="col-span-8 max-sm:block hidden mt-auto">
          <Routes>
            <Route path="/" element={<Footer />} />
            <Route path='/:user/*' element={<Footer />} />
          </Routes>
      </div>
    </div>
  )
}

export default Layout