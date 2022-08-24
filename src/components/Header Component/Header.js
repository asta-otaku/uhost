import React from 'react'
import companyLogo from '../images/uhost-icon.png'

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
            <a href="index.html" className="main-header__brand">
                <img src={companyLogo} alt="uHost - Your favorite hosting company" />
            </a>
        </div>
        <nav className="main-nav">
            <ul className="main-nav__items">
                <li className="main-nav__item">
                    <a href="packages/index.html">Packages</a>
                </li>
                <li className="main-nav__item">
                    <a href="customers/index.html">Customers</a>
                </li>
                <li className="main-nav__item main-nav__item--cta">
                    <a href="start-hosting/index.html">Start Hosting</a>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header