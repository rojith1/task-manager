// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We will create a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Task Management. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
