import React from "react";
import { Link } from "react-router-dom";

const HomeExplore = () => {
  return (
    <>
      {/* <!-- ========== Start Explore ========== --> */}

      <section class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
              <div class="about-info">
                <h4 class="sub-title">Discover More</h4>
                <h3 class="main-title">Explore & Sell Your Awesome Product</h3>
                <p>
                  Dolor repellendus temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus sae eveniet ut et voluptates
                  repudiandae sint et moles tiae non recusandae.
                </p>
                <p>
                  Ac vulputate ornare donec orci sed gravida senectus. Felis
                  quis morbi vivamus est eget sapien magnis quis.
                </p>
                <Link class="main-btn" to="/services">
                  Read More <i class="fa fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-image">
                <img class="img-fluid" src="images/explore.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Explore ========== --> */}
    </>
  );
};

export default HomeExplore;
