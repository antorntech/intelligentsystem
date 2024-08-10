import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <>
      {/* <!-- ========== Start Home ========== --> */}

      <section class="home" id="home">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 order-lg-0 order-2">
              <div class="home-content animate__animated animate__fadeInLeft">
                <h1>
                  Intelligence. Innovation. Future.{" "}
                  <span className="focus-in-expand">Now.</span>
                </h1>
                <p>
                  Create a beautiful software product. Explore the best
                  collection from popular creative & digital Artists.
                </p>
                <div class="my-btn">
                  <Link to="/services" class="main-btn">
                    <i class="fa fa-rocket"></i> <span>Explore Items</span>
                  </Link>
                  <Link to="/" class="main-btn custom-btn">
                    <span>Learn More</span> <i class="fa fa-arrow-right"></i>
                  </Link>
                </div>
                <div class="home-facts">
                  <ul class="facts-list list-unstyled">
                    <li>
                      <span class="number">40K +</span>
                      <span>Art Works</span>
                    </li>
                    <li>
                      <span class="number">175K +</span>
                      <span>Auctions</span>
                    </li>
                    <li>
                      <span class="number">16K +</span>
                      <span>Artists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-0 order-1">
              <div class="right-box">
                <div class="home-image">
                  <img
                    class="img-fluid slide-top"
                    src="images/home.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Home ========== --> */}
    </>
  );
};

export default HomeBanner;
