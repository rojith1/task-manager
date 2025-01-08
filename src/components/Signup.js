// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from '../firebase'; // Firebase signup function
import '../auth.css'; // Import CSS for styling

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      navigate('/dashboard'); // Redirect to dashboard on successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-heading">Sign Up</h2>
        <form onSubmit={handleSignup} className="auth-form">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="switch-link">
          Already have an account? <a onClick={() => navigate('/login')}>Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
