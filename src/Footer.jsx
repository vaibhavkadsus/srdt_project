import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">SRDT Foundation</h5>
            <p>
              A Step Towards Social Change — empowering lives through sustainable development and education.
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home me-3"></i>Registered office: At: Masnerwadi, Tq: Gangakhed, Dist: Parbhani-431514.</p>
            <p><i className="fas fa-envelope me-3"></i> sairuraldevelopmenttrust@gmail.com</p>
            <p><i className="fas fa-phone me-3"></i> +91 9920241110</p>
          </div>

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-white me-4"><FaFacebookF /></a>

              <a href="#" className="text-white me-4"><FaInstagram /></a>
              <a href="#" className="text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} <strong className="text-warning">SRDT Foundation</strong> | All rights reserved.</p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-end">Developed by <strong></strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
