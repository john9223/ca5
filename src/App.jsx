import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          <strong style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>KALVIUM</strong>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
