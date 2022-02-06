import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/register/Register"));
const Product = lazy(() => import("../pages/product/Product"));
const Cart = lazy(() => import("../pages/cart/Cart"));


const RoutesComp = () => {
  return (
    <Suspense fallback={<h2 style={{ textAlign: "center" }}>Loading...</h2>}>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/products" exact element={<Product/>} />
        <Route path="/cart" exact element={<Cart/>} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComp