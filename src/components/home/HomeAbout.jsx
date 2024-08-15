import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <>
      <section>
        <div class="container">
          <h3 class="main-title">
            About
            <div class="underline-wrapper">
              <div class="underline-circle"></div>
              <div class="underline-line"></div>
            </div>
          </h3>
          <div class="row align-items-center">
            <div class="col-12 col-lg-6">
              <img
                src="/images/marceline.png"
                alt=""
                class="img-fluid w-100 p-1 bg-white"
              />
            </div>
            <div class="col-12 col-lg-6 pt-4 pt-lg-0">
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
