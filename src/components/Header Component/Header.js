import React from "react";
import companyLogo from "../images/uhost-icon.png";
import { Link } from "react-router-dom";
import "../../App.css";

function Header() {
  return (
    <>
      <header className="main-header">
        <div>
          <button className="toggle-button">
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar"></span>
          </button>
          <Link to="/" className="main-header__brand">
            <img
              src={companyLogo}
              alt="uHost - Your favorite hosting company"
            />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link to="/packages">Packages</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/customers">Customers</Link>
            </li>
            <li className="main-nav__item mobile-nav__item--cta">
              <Link to="/start-hosting">Start Hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
