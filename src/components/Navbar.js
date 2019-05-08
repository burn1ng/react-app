import React from "react";
import "./navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <span className="navbar__heading">My awesome menu</span>
    <ul className="navbar__menu">
      <li className="navbar__menu-item">
        <a href="://google.com" target="_blank">
          Menu item 1
        </a>
      </li>
      <li className="navbar__menu-item">
        <a href="://google.com" target="_blank">
          Menu item 2
        </a>
      </li>
      <li className="navbar__menu-item">
        <a href="://google.com" target="_blank">
          Menu item 3
        </a>
      </li>
      <li className="navbar__menu-item">
        <a href="://google.com" target="_blank">
          Menu item 4
        </a>
      </li>
      <li className="navbar__menu-item">
        <a href="://google.com" target="_blank">
          Menu item 5
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
