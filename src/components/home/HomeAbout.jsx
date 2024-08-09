import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <section class="trending-auctions">
        <div class="container">
          <h3 class="main-title">About</h3>
          <div class="row">
            <div class="col-12 col-lg-6">
              <img src="/images/marceline.png" alt="" class="img-fluid w-100" />
            </div>
            <div class="col-12 col-lg-6">
              <p class="mb-5 text-justify text-white">
                Marcline LTD is a rapidly expanding offshore and onshore
                software development, skill development, and outsourcing company
                based in Bangladesh. We specialize in delivering global systems
                and solutions while ensuring top-notch customer service. Our
                core competencies include technology solutions, desktop
                applications, web applications, mobile applications, business
                solutions, engineering solutions, system upgrades, system
                implementation, system development, training, and other
                essential services.
              </p>
              <Link to="/about" class="main-btn">
                <i class="fa fa-rocket"></i> <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
