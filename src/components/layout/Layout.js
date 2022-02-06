import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RoutesComp from "./RoutesComp";

const Layout = () => {
  return (
  <>
  <BrowserRouter>
      <Header />
      <RoutesComp />
      <Footer />
    </BrowserRouter>
  </>
  );
};

export default Layout;
