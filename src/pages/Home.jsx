import React from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeAbout from "../components/home/HomeAbout";
import HomeService from "../components/home/HomeService";
import HomePortfolio from "../components/home/HomePortfolio";
import HomeExplore from "../components/home/HomeExplore";
import HomeBlog from "../components/home/HomeBlog";
import HomeSponsor from "../components/home/HomeSponsor";
import HomeFaqs from "../components/home/HomeFaqs";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeService />
      <HomePortfolio />
      <HomeExplore />
      <HomeSponsor />
      <HomeFaqs />
      <HomeBlog />
    </>
  );
};

export default Home;
