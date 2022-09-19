import React from "react";
import "../../App.css";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="main-footer">
      <nav>
        <ul className="main-footer__links">
          <li className="main-footer__link">
            <Link to="#">Support</Link>
          </li>
          <li className="main-footer__link">
            <Link to="#">Terms of Use</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
