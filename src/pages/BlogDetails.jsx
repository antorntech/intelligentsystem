import React from "react";
import PageHeader from "../shared/PageHeader";
import { Link } from "react-router-dom";

const BlogDetails = () => {
  const blog = {
    title: "It’s the Great Chance to Invest in NFTs",
    image: "/images/blog/7.jpg",
    author: "AM Antor",
    date: "September 17, 2022",
    category: "Digitalart",
  };

  const allBlogs = [
    {
      id: 1,
      title: "How to Create Your 1st Crypto NFTs",
      image: "/images/blog/1.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 2,
      title: "How to Create Your 2nd Crypto NFTs",
      image: "/images/blog/2.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 3,
      title: "How to Create Your 3rd Crypto NFTs",
      image: "/images/blog/3.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 4,
      title: "How to Create Your 4th Crypto NFTs",
      image: "/images/blog/4.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 5,
      title: "How to Create Your 5th Crypto NFTs",
      image: "/images/blog/5.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 6,
      title: "How to Create Your 6th Crypto NFTs",
      image: "/images/blog/6.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 7,
      title: "How to Create Your 7th Crypto NFTs",
      image: "/images/blog/7.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
    },
    {
      id: 8,
      title: "How to Create Your 8th Crypto NFTs",
      image: "/images/blog/1.jpg",
      author: "AM Antor",
      date: "September 17, 2022",
      category: "Software Development",
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
      <PageHeader title="Blog Details" />
      <section class="blog">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="blog-single">
                <div class="blog-item">
                  {/* <!-- Post Image --> */}
                  <div class="blog-item-thumb">
                    <img src={blog.image} class="img-fluid" alt="" />
                  </div>
                  {/* <!-- Post Content --> */}
                  <div class="blog-item-content">
                    <div class="post-content">
                      <span class="cat">
                        <a href="#">{blog.category}</a>
                      </span>
                      <h3 class="post-title">
                        <a href="#">{blog.title}</a>
                      </h3>
                    </div>
                    <div class="author-info d-flex align-items-center">
                      <div class="author-info-content">
                        <h4 class="author-info-name">
                          <a href="#0">Yomna Doe</a>
                        </h4>
                        <span class="post-date">September 17, 2022</span>
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
                      <div class="post-share">
                        <h5>Share The Post</h5>
                        <ul class="list-unstyled social-media">
                          <li>
                            <a href="#">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-google-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
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
                    <div class="post-comments">
                      <h3>03 Comments</h3>
                      <div class="post-comment">
                        <div class="row">
                          <div class="col-sm-2">
                            <div class="comment-image">
                              <img
                                src="/images/comments/1.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm-10">
                            <h4>Wasima Yalma</h4>
                            <span>September 17, 2022</span>
                            <a class="reply-btn" href="#">
                              <i class="fa fa-reply"></i>Reply
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="post-comment reply">
                        <div class="row">
                          <div class="col-sm-2">
                            <div class="comment-image">
                              <img
                                src="/images/comments/2.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm-10">
                            <h4>Belin Taylor</h4>
                            <span>September 17, 2022</span>
                            <a class="reply-btn" href="#">
                              <i class="fa fa-reply"></i>Reply
                            </a>
                            <p>
                              Excepteur sint ocacat cupidatat non proi dent sunt
                              in culpa qui officia deserunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="post-comment">
                        <div class="row">
                          <div class="col-sm-2">
                            <div class="comment-image">
                              <img
                                src="/images/comments/3.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="col-sm-10">
                            <h4>Yassir Doe</h4>
                            <span>September 17, 2022</span>
                            <a class="reply-btn" href="#">
                              <i class="fa fa-reply"></i>Reply
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="post-form">
                      <h3>Leave a Comment</h3>
                      <form action="#" method="post">
                        <div class="row">
                          <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                name="name"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control"
                                name="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-sm-12 col-xs-12">
                            <div class="form-group">
                              <textarea
                                class="form-control"
                                name="message"
                                placeholder="Your Comment"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-sm-12 col-xs-12">
                            <button
                              class="main-btn"
                              type="submit"
                              name="comment"
                            >
                              <span>Submit Comment</span>
                            </button>
                          </div>
                        </div>
                      </form>
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
                          <a href="/blogs">{category.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div class="sidebar-widget sidebar-recent-posts">
                  <h3 class="sidebar-widget-title">Recent Posts</h3>
                  <div class="sidebar-widget-content">
                    {allBlogs.slice(0, 3).map((blog) => (
                      <div key={blog.id} className="sidebar-post">
                        <div className="post d-flex align-items-center">
                          <div className="post-thumb">
                            <Link to={`/blogs/${blog.id}`}>
                              <img src={blog.image} alt="" />
                            </Link>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                            </h3>
                            <div className="post-meta">
                              <span>{blog.date}</span>
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

export default BlogDetails;
