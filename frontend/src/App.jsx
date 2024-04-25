import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import NoPage from './pages/NoPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Committees from './pages/Committees.jsx';
import CommitteeDetails from './pages/CommitteeDetails.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/committees/:id" element={<CommitteeDetails />} />
        <Route path="/sponsors" element={<div></div>} />
        <Route path="/resources" element={<div></div>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;