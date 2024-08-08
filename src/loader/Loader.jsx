import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div class="loader-wrapper">
      <div class="loader"></div>
      <div class="loader-overlay">
        <div class="left-overlay"></div>
        <div class="right-overlay"></div>
      </div>
    </div>
  );
};

export default Loader;
