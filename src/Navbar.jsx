import React from "react";
import "./Navbar.css";
import logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/gallary">Gallery</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
