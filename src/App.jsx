import React from "react";
import "animate.css";
import AppLayout from "./layout/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppLayout />
    </>
  );
};

export default App;
