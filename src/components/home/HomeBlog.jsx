import React from "react";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <>
      {/* <!-- ========== Start Blog ========== --> */}

      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <h3 class="main-title">
                Latest Blog
                <div class="underline-wrapper">
                  <div class="underline-circle"></div>
                  <div class="underline-line"></div>
                </div>
              </h3>
            </div>
            <div class="col-6">
              <div class="posts-more discover-more text-right">
                <Link to="#0">
                  Discover more <i class="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 item">
              <div class="blog-item">
                <div
                  class="blog-item-wrap"
                  style={{ backgroundImage: "url('images/blog/1.jpg')" }}
                >
                  <div class="blog-info">
                    <div class="post-content">
                      <span class="cat">
                        <a href="#0">Nftartwork</a>
                      </span>
                      <h3 class="post-title">
                        <a href="blog-single.html">
                          How to Create Your 1st Crypto NFTs
                        </a>
                      </h3>
                    </div>
                    <div class="author-info d-flex align-items-center">
                      <a class="author-info-thumb" href="#0">
                        <img class="img-fluid" src="images/avatars/3.jpg" alt />
                      </a>
                      <div class="author-info-content">
                        <h4 class="author-info-name">
                          <a href="#0">Yassir Yates</a>
                        </h4>
                        <span class="post-date">September 17, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 item">
              <div class="blog-item">
                <div
                  class="blog-item-wrap"
                  style={{ backgroundImage: "url('images/blog/2.jpg')" }}
                >
                  <div class="blog-info">
                    <div class="post-content">
                      <span class="cat">
                        <a href="#0">Digitalart</a>
                      </span>
                      <h3 class="post-title">
                        <a href="blog-single.html">
                          It’s the Great Chance to Invest in NFTs
                        </a>
                      </h3>
                    </div>
                    <div class="author-info d-flex align-items-center">
                      <a class="author-info-thumb" href="#0">
                        <img class="img-fluid" src="images/avatars/1.jpg" alt />
                      </a>
                      <div class="author-info-content">
                        <h4 class="author-info-name">
                          <a href="#0">Yomna Doe</a>
                        </h4>
                        <span class="post-date">September 17, 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========== End Blog ========== --> */}
    </>
  );
};

export default HomeBlog;
