import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Software from "../pages/Software";
import Training from "../pages/Training";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import ScrlTopOfPage from "../scrlTopOfPage/ScrlTopOfPage";
import Teams from "../pages/Teams";
import BlogDetails from "../pages/BlogDetails";

const AppRoutes = () => {
  return (
    <>
      <ScrlTopOfPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/software" element={<Software />} />
        <Route path="/pricing" element={<Training />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
