import React from 'react';
import { Link } from 'react-router-dom';

function Footer({

}) {
    return (
    <footer className="footer-area section-padding-80-0">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                    <nav>
                        <ul className="our-link">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                    <nav>
                        <ul className="our-link">
                            <li><Link to="/privacy-policy">Cancellation Policy</Link></li>
                            <li><Link to="/privacy-policy">Terms & Conditions</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-80">
                            <p>At your service around the clock</p>
                            <div className="copywrite-text mb-30">
                                <p>&copy; Copyright 2020 <a href="#">Tecgroom.in</a>.</p>
                            </div>
                            <div className="footer-social-info">
                                <a href="https://www.linkedin.com/in/tec-groom-2a3a251b7" className="pinterest" data-toggle="tooltip" data-placement="top" title="Linkedin"><i className="fa fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/tecgroom.in/" className="instagram" data-toggle="tooltip" data-placement="top" title="Instagram"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.facebook.com/tecgroom.in/" className="facebook" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook-official"></i></a>
                                <a href="#" className="youtube" data-toggle="tooltip" data-placement="top" title="YouTube"><i className="fa fa-youtube-play"></i></a>
                                <a href="#" className="twitter" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a>
                            </div>
                        </div>
            </div>
        </div>
    </div>
</footer>)
}

export default Footer;