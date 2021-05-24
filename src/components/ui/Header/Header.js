import React from 'react';
import { Link } from 'react-router-dom';

function Header({

}) {
    return (
        <header className="header-area">
        <div className="main-header-area">
            <div className="classy-nav-container breakpoint-off">
                <nav className="classy-navbar justify-content-between" id="uzaNav">
                    <a className="nav-brand" href="/">Tecgroom.in</a>
                    <div className="classy-navbar-toggler">
                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                    </div>
                    <div className="classy-menu">
                        <div className="classycloseIcon">
                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                        </div>
                        <div className="classynav">
                            <ul id="nav">
                                <li ><Link to="/">HOME</Link></li>
                                <li><Link to="/about">ABOUT US</Link></li>
                                <li><Link to="/services">SERVICES</Link></li>
                                <li><Link to="/career">CAREER</Link></li>
                                <li><Link to="/contact">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header;