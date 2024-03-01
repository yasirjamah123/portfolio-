import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="pt-3 pb-md-0 pb-3 bg-black">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-md-row flex-column">
          <Link to="/">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Link>
          <div className="d-flex gap-3 align-items-center justify-content-center social-links">
            <Link to="https://www.facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="https://www.twitter.com">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link to="https://www.github.com">
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
