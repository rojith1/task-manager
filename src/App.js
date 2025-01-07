// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
// import Dashboard from './components/Dashboard'; // Replace with your actual Dashboard component
// import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

import './styles.css'; // Import the CSS file for styles

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar should be visible on all pages */}
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Board can be accessed by everyone */}
          <Route path="/" element={<Board />} />
        </Routes>
      </div>
      <Footer /> {/* Footer should be visible on all pages */}
    </Router>
  );
};

export default App;
