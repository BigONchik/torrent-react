import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
