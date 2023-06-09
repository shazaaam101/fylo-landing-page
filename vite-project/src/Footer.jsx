import React from "react";
import svgLogo from "./images/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Footer">
      <img src={svgLogo} alt="logo" />
      <div className="flex">
        <div className="icon-text location">
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p>
            Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do
            ejusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="group column">
          <div className="icon-text">
            <div className="icon">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <p>+1-543-123-4567</p>
          </div>
          <div className="icon-text">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <p>example@fylo.com</p>
          </div>
        </div>
        <ul className="lists">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="lists">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
        <div className="group row">
          <a href="#">
            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
          </a>
          <a href="#">
            <div className="icon">
              <i className="fa-brands fa-twitter"></i>
            </div>
          </a>
          <a href="#">
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
