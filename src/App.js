// src/App.js
import React from 'react';
import Board from './components/Board'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; // 
import './styles.css';  // Import the CSS file for styles

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Board />
      <Footer />
    </div>
  );
};

export default App;
