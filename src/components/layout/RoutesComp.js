import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Product = lazy(() => import("../pages/Product"));

const RoutesComp = () => {
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/products" exact component={Product} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComp