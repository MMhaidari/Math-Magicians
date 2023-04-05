import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h4><Link to="/">Math Magicians</Link></h4>
    <ul className="Navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quotes</Link></li>
    </ul>
  </div>
);

export default Navbar;
