import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../header/Header";
import RoutesComp from "./RoutesComp";

const Layout = () => {
  return (
  <>
  <BrowserRouter>
      <Header />
      <RoutesComp />
    </BrowserRouter>
  </>
  );
};

export default Layout;
