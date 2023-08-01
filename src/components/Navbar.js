import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar-container bg-red pa3">
      <div className="flex justify-between items-center">
        <div className="navbar-links ma2">
          <Link to="/" className="link">HOME</Link>
          <Link to="/projects" className="link">PROJECTS</Link>
          <Link to="/news" className="link">NEWS</Link>
          <Link to="/gallery" className="link">GALLERY</Link>
          <Link to="/contact" className="link">CONTACT US</Link>
          <Link to="/donate" className="link">DONATE</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
