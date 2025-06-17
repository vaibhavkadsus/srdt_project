import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section about">
          <h3>SRDT Foundation</h3>
          <p>
            A Step Towards Social Change — Empowering lives through sustainable development, education, and innovation.
          </p>
        </div>

        

        {/* Contact */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Masnerwadi, Gangakhed, Parbhani-431514</p>
          <p><FaEnvelope /> sairuraldevelopmenttrust@gmail.com</p>
          <p><FaPhoneAlt /> +91 9920241110</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100087210614157&mibextid=LQQJ4d"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sai_rural_development_trust_?igsh=MWxpM3VvNHpzc3p0Nw=="><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/sai-rural-development-trust/"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SRDT Foundation | All rights reserved.</p>
        <p>Developed by <span className="highlight">Alphaseam pvt.ltd</span></p>
      </div>
    </footer>
  );
};

export default Footer;
