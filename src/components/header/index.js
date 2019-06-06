import React from 'react';
import './header.css';

const Header = () => (
  <div className="navigation">
    <div className="navigation__logo">
      <h2>Posty</h2>
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
