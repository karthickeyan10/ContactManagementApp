import React from 'react';
import '../Styles/styles.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="nav-btn">Home</Link>
      <Link to="/contacts" className="nav-btn">Contacts</Link>
      <Link to="/dashboard" className="nav-btn">Charts and maps</Link>
    </div>
  );
};

export default Navbar;
