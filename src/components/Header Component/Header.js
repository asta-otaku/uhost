import React from "react";
import companyLogo from "../images/uhost-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css";
import "./Header.css";

function Header() {
  const [, setBackdrop] = useState(false);
  const [navClass, setNavClass] = useState(false);
  const handleToggle = () => {
    navClass === false && setNavClass(true);
    setTimeout(() => {
      setBackdrop(true);
    }, 10);
  };
  const removeBackdrop = () => {
    setNavClass(false);
    setBackdrop(false);
  };

  return (
    <>
      {navClass ? (
        <div onClick={removeBackdrop} className="backdrop open"></div>
      ) : null}
      <nav className={navClass ? "mobile-nav open" : "mobile-nav"}>
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to="/packages" onClick={removeBackdrop}>
              Packages
            </Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/customers" onClick={removeBackdrop}>
              Customers
            </Link>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <Link to="/start-hosting" onClick={removeBackdrop}>
              Start Hosting
            </Link>
          </li>
        </ul>
      </nav>
      <header className="main-header">
        <div>
          <button className="toggle-button" onClick={handleToggle}>
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
            <li className="main-nav__item main-nav__item--cta">
              <Link to="/start-hosting">Start Hosting</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
