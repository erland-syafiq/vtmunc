import React from 'react';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;