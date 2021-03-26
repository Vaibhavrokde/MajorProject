import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div>
        <div className="footer__area">
          <div className="footer__wave__box">
            <div className="footer__wave footer__animation"></div>
          </div>
          <div className="main">
            <div className="footer">
              <div className="single__footer">
                <h4>About Us</h4>
                <p></p>
                <p>
                  welcome to Tourist Escort Web page. Travel Your Dream
                  Destination and Your Life
                </p>
                <div className="footer__social">
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="single__footer">
                <h4>main menu</h4>
                <ul>
                  <li>
                    <Link to="/">
                      <i className="fas fa-chevron-home"></i>Home
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/AboutUs">
                      <i className="fas fa-chevron-right"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contactus">
                      <i className="fas fa-chevron-right"></i>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              
            </div>
            <hr />
            <div className="copy">
              <p>
                Copyright &copy; 2021 All rights reserved | Developed by India{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
