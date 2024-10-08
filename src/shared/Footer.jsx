import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-sm-6 col-12 footer-menu">
                <div class="footer-logo">
                  <Link to="/" class="my-logo">
                    <img class="img-fluid" src="/images/logo.png" alt="" />
                  </Link>
                </div>
                <p>
                  Dolor repellendus temporibus autem quibus dam et aut officiis
                  debitis aut rerum necessita tibus saepe tempo incidunt
                  labore...
                </p>
              </div>
              <div class="col-lg-2 col-sm-6 col-12 footer-menu">
                <div class="footer-item">
                  <h4>Site map</h4>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/our-team">Our Team</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6 col-12 footer-menu p-0">
                <div class="footer-item">
                  <h4>Company</h4>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/help-support">Help & Support</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">Terms Canditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 col-12 footer-menu">
                <div class="footer-item">
                  <h4>Subscribe Newsletter</h4>
                  <div class="footer-newsletter">
                    <input
                      type="text"
                      name="text"
                      placeholder="Email address"
                      required=""
                    />
                    <a class="submit" href="#0">
                      <i class="fa fa-send"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <div class="container">
            <div class="copyright d-flex align-items-center justify-content-md-between flex-sm-wrap justify-content-sm-center">
              <p>
                Copyright &copy; {year}, <span>Marceline</span> Intelligent
                System All Rights Reserved.
              </p>
              <ul class="list-unstyled social-media d-flex align-items-center">
                <li>
                  <a href="#0">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
