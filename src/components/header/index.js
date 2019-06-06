import React from 'react';
import './header.css';

const Header = () => (
  <div className="navigation bg-info text-white">
    <div className="navigation__logo">
      <h2>My Posts App</h2>
    </div>
    <nav className="navigation__links">
      <ul>
        <li>Posts</li>
        <li>Login</li>
      </ul>
    </nav>
  </div>
);

export default Header;
