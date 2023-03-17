import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <header className="header">
    <div className="title">Geriatric Psychiatry Green Card</div>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/guide" className="nav-link">Guides</Link>
        </li>
        <li className="nav-item">
          <Link to="/help" className="nav-link">Help</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Admin Login</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
