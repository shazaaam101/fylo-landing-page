import React from "react";
import svgLogo from "./images/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="container">
        <div className="logo">
          <img src={svgLogo} alt="logo" width="176px" height="52px" />
        </div>
        <ul className="nav-list">
          <li className="nav-items">
            <a href="#">Features</a>
          </li>
          <li className="nav-items">
            <a href="#">Team</a>
          </li>
          <li className="nav-items">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
