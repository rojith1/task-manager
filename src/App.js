import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Board from "./components/Board";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  // Check if current route is for login or signup
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app">
      {!isAuthPage && <Navbar />} {/* Render Navbar only for non-auth pages */}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Board />} />
      </Routes>

      {!isAuthPage && <Footer />} {/* Render Footer only for non-auth pages */}
    </div>
  );
};

export default App;
