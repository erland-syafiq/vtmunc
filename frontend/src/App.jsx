import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import NoPage from './pages/NoPage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;