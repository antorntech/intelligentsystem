import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-sm-6 col-12 footer-menu">
                <div class="footer-logo">
                  <a class="my-logo" href="index.html">
                    <img class="img-fluid" src="images/logo.png" alt="" />
                  </a>
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
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="roadmap.html">Roadmap</a>
                    </li>
                    <li>
                      <a href="team.html">Our Team</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="blog.html">Articles</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-sm-6 col-12 footer-menu">
                <div class="footer-item">
                  <h4>Company</h4>
                  <ul class="list-unstyled">
                    <li>
                      <a href="#0">Help & Support</a>
                    </li>
                    <li>
                      <a href="#0">Terms Canditions</a>
                    </li>
                    <li>
                      <a href="#0">Privacy Policy</a>
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
                Copyright &copy; 2022, <span>MetaNFT</span> All Rights Reserved.
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
                <li>
                  <a href="#0">
                    <i class="fa fa-behance"></i>
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
