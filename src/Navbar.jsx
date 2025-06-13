import React from "react";
import "./Navbar.css";
import logo from './assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="slogan">
          <h1 className="srdt">
            <span className="s">S</span>
            <span className="r">R</span>
            <span className="d">D</span>
            <span className="t">T</span>
          </h1>
          <p className="tagline">------ A Step Towards Social Change -----</p>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
