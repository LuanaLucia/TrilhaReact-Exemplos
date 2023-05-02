import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
        <Header />
        <div id="elemento">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
