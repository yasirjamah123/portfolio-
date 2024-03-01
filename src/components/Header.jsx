import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <header className="header d-md-block d-none">
      <div className="header__logo pt-2 pb-0">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
