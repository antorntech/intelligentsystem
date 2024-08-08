import React from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../shared/Footer";
import ScrollTop from "../scrolltop/ScrollTop";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
        <ScrollTop />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
