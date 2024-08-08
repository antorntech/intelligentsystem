import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const myMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "/services",
    },
    {
      id: 3,
      title: "Software",
      link: "/software",
    },
    {
      id: 4,
      title: "Training",
      link: "/training",
    },
    {
      id: 5,
      title: "About",
      link: "/about",
    },
  ];
  return (
    <>
      <header class="header">
        <div class="container">
          <div class="header-inner">
            <div class="logo">
              <Link to="/">
                <img class="img-fluid" src="images/logo.png" alt="" />
              </Link>
            </div>
            <nav class="main-nav">
              <ul class="menu">
                {myMenu.map((menu) => (
                  <li class="menu-item">
                    <Link to={menu.link}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link class="header-btn" to="/contact">
              Get In Touch
            </Link>
            <div class="mobile-button">
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
