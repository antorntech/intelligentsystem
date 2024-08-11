import React from "react";
import { Link } from "react-router-dom";

const HomePortfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "University Project Management System",
      banner: "/images/collections/13.jpg",
    },
    {
      id: 2,
      title: "Hotel Project Management System",
      banner: "/images/collections/14.jpg",
    },
    {
      id: 3,
      title: "Payroll Project Management System",
      banner: "/images/collections/15.jpg",
    },
  ];
  return (
    <>
      <section class="trending-auctions">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 class="main-title">
                Portfolio{" "}
                <div class="underline-wrapper">
                  <div class="underline-circle"></div>
                  <div class="underline-line"></div>
                </div>
              </h3>
            </div>
            <div class="col-6">
              <div class="nft-more discover-more text-right">
                <Link to="/software">
                  Discover more <i class="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="row">
            {portfolios.map((portfolio) => (
              <div class="col-lg-4 col-md-6 item">
                <div class="nft-box">
                  <div class="nft-box-thumb">
                    <img class="img-fluid" src={portfolio.banner} alt="" />
                    <div class="nft-box-btn-content">
                      <a href="#0" class="nft-box-btn">
                        Explore <i class="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="nft-box-content">
                    <div class="nft-box-title-wrap d-flex align-items-center justify-content-between">
                      <h3 class="nft-box-title">
                        <a href="#0">{portfolio.title}</a>
                      </h3>
                      <div class="nft-box-trending-icon">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePortfolio;
