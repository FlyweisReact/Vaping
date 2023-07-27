/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar/Navbar.css";
import Homepage from "./Pages/HomePage/Homepage";
import "./CSS/Normal.css";
import FullWidthProduct from "./Pages/Products/FullWidthProduct";
import "./Footer/Footer.css";
import Footer from "./Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import CreateAccount from "./Pages/CreateAccount/CreateAccount";
import SpecificProduct from "./Pages/Products/SpecificProduct";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import ForgetPassword from "./Pages/RecoverPassword/ForgetPassword";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Identity from "./Pages/User-dashboard/Identity";
import Address from "./Pages/User-dashboard/Address";
import Orders from "./Pages/User-dashboard/Orders";
import Wishlist from "./Pages/User-dashboard/Wishlist";
import "./CSS/Laptop.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-accessible-accordion/dist/fancy-example.css";

const App = () => {
  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<FullWidthProduct />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/product/:name" element={<SpecificProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Blogs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/password-recovery" element={<ForgetPassword />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/address" element={<Address />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/mywishlist" element={<Wishlist />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
