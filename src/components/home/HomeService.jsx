import React from "react";
import { Link } from "react-router-dom";

const HomeService = () => {
  const services = [
    {
      id: 1,
      title: "Skill Development Training",
      banner: "/images/collections/7.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 2,
      title: "Internet of Things",
      banner: "/images/collections/8.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      banner: "/images/collections/9.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 4,
      title: "Research & Development",
      banner: "/images/collections/10.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 5,
      title: "Blockchain Application",
      banner: "/images/collections/11.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
    {
      id: 6,
      title: "Software Development",
      banner: "/images/collections/12.jpg",
      description:
        "The Fourth Industrial Revolution (4IR) is characterized by the integration of digital, physical, and biological technolo...",
    },
  ];
  return (
    <>
      <section class="trending-auctions">
        <div class="container">
          <h3 class="main-title">
            Services
            <div class="underline-wrapper">
              <div class="underline-circle"></div>
              <div class="underline-line"></div>
            </div>
          </h3>
          <div class="row">
            {services.map((service) => (
              <div class="col-lg-4 col-md-6 item mb-4">
                <div class="nft-box">
                  <div class="nft-box-thumb">
                    <img class="img-fluid" src={service.banner} alt="" />
                    <div class="nft-box-btn-content">
                      <Link to={`/services/${service.id}`} class="nft-box-btn">
                        Read More <i class="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="nft-box-content">
                    <div class="nft-box-title-wrap">
                      <h3 class="nft-box-title">
                        <Link to={`/services/${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                      <p class="nft-box-text mt-2">{service.description}</p>
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

export default HomeService;
