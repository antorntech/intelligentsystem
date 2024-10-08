import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const Software = () => {
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
      <PageHeader title="Software" />
      <section class="trending-auctions section-animation">
        <div class="container">
          <div class="row">
            {portfolios.map((portfolio) => (
              <div class="col-lg-4 col-md-6 item">
                <div class="nft-box">
                  <div class="nft-box-thumb">
                    <img class="img-fluid" src={portfolio.banner} alt="" />
                    <div class="nft-box-btn-content">
                      <Link
                        to={`/software/${portfolio.id}`}
                        class="nft-box-btn"
                      >
                        Explore <i class="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="nft-box-content">
                    <div class="nft-box-title-wrap d-flex align-items-center justify-content-between">
                      <h3 class="nft-box-title">
                        <Link to={`/software/${portfolio.id}`}>
                          {portfolio.title}
                        </Link>
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

export default Software;
