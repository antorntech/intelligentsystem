import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeAbout from "../components/home/HomeAbout";
import HomeService from "../components/home/HomeService";
import HomePortfolio from "../components/home/HomePortfolio";
import HomeExplore from "../components/home/HomeExplore";
import HomeBlog from "../components/home/HomeBlog";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeService />
      <HomePortfolio />
      <HomeExplore />
      <HomeBlog />
    </>
  );
};

export default Home;
