import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cartpage";
import Checkout from "./pages/Checkout";
import "react-toastify/dist/ReactToastify.css";
import Order from "./pages/Order";
import Success from "./pages/Success";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>

          <Route path="/Register" exact element={<Register />}></Route>

          <Route path="/Login" exact element={<Login />}></Route>

          <Route path="/Home" exact element={<Home />}></Route>

          <Route path="/Cart" exact element={<Cart />}></Route>

          <Route path="/Checkout" exact element={<Checkout />}></Route>

          <Route path="/Order" exact element={<Order />}></Route>
          <Route path="/success" exact element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
