import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const service = {
    title: "Skill Development Training",
    image: "/images/collections/8.jpg",
    author: "AM Antor",
    date: "September 17, 2022",
    category: "Skill Development Training",
  };

  const allServices = [
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

  const categories = [
    { id: 1, name: "Skill Development Training" },
    { id: 2, name: "Internet of Things" },
    { id: 3, name: "Artificial Intelligence" },
    { id: 4, name: "Research & Development" },
    { id: 5, name: "Blockchain Application" },
    { id: 6, name: "Software Development" },
  ];
  return (
    <>
      <PageHeader title="Service Details" />
      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-single">
                <div class="blog-item">
                  {/* <!-- Post Image --> */}
                  <div class="blog-item-thumb">
                    <img
                      src={service.image}
                      alt=""
                      width="100%"
                      height="500px"
                    />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div class="blog-item-content">
                    <div class="post-content">
                      <span class="cat">
                        <div>{service.category}</div>
                      </span>
                      <h3 class="post-title">
                        <div>{service.title}</div>
                      </h3>
                    </div>
                    <div class="author-info d-flex align-items-center">
                      <div class="author-info-content">
                        <h4 class="author-info-name">
                          <div>{service.author}</div>
                        </h4>
                        <span class="post-date">{service.date}</span>
                      </div>
                    </div>
                    <div class="post-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt labore et dolore
                        magna aliqua. enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim.
                      </p>
                    </div>
                    <div class="more-details">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt labore et
                          dolore magna aliqua. enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </blockquote>
                    </div>
                    <div class="post-footer">
                      <div class="post-tags">
                        <h5>Tags</h5>
                        <ul class="tags-list list-unstyled">
                          <li>
                            <a href="#">web development</a>
                          </li>
                          <li>
                            <a href="#">cyber security</a>
                          </li>
                          <li>
                            <a href="#">artificial intelligence</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div className="sidebar-widget sidebar-category">
                  <h3 className="sidebar-widget-title">Category</h3>
                  <div className="sidebar-widget-content">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link to="/services">{category.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div class="sidebar-widget sidebar-recent-posts">
                  <h3 class="sidebar-widget-title">Recent Posts</h3>
                  <div class="sidebar-widget-content">
                    {allServices.slice(0, 3).map((service) => (
                      <div key={service.id} className="sidebar-post">
                        <div className="post d-flex align-items-center">
                          <div className="post-thumb">
                            <Link to={`/services/${service.id}`}>
                              <img src={service.banner} alt="" />
                            </Link>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <Link to={`/services/${service.id}`}>
                                {service.title}
                              </Link>
                            </h3>
                            <div className="post-meta">
                              <span>{service.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
