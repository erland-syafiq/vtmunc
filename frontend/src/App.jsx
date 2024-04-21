import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;