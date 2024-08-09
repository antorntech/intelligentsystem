import React from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Footer from "../shared/Footer";
import ScrollTop from "../scrolltop/ScrollTop";
import Loader from "../loader/Loader";

const AppLayout = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ScrollTop />
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AppLayout;
