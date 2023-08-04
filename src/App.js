import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import './App.css'; 

const App = () => {
  return (
    <Router>
    <Navbar/>

    <div className="pages">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donate/>} />

      </Routes>
    </div>
  </Router>
  );
};

export default App;
