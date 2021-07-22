import React from "react";
import "./styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>GYM MANIAC</h3>
            <h4 className="list-unstyled">
              <li>4576-3992</li>
              <li>Buenos Aires, Argentina</li>
              <li>Address Street 123</li>
            </h4>
          </div>
          <div className="col"></div>
          <div className="col">
            <h4>SECTIONS</h4>
            <ui className="list-unstyled">
              <li className="footer-links">
                <Link to="/">HOME</Link>
              </li>
              <li className="footer-links">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="footer-links">
                <Link to="/exercise">EXERCISES</Link>
              </li>
              <li className="footer-links">
                <Link to="/contactus">CONTACT US</Link>
              </li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
