// src/App.js

import React from 'react';
import Board from './components/Board';  // Import the Board component
import './styles.css';  // Import the CSS file for styles

const App = () => {
  return (
    <div className="app">
      <Board />  {/* Render the Board component */}
    </div>
  );
};

export default App;
