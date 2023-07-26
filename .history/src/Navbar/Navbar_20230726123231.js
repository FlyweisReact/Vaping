/** @format */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Store } from "react-notifications-component";
import Sidebar from "../Component/Sidebar";

const Navbar = () => {
  const name = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const loggedOut = () => {
    Store.addNotification({
      title: "Logged Out Successfully",
      message: "",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate("/login");
    localStorage.removeItem("token");
  };

  let logout;
  if (name) {
    const Component = () => {
      return (
        <>
          <Link to="/identity">
            <i class="fa-solid fa-user"></i>
            <span> {name} </span>
          </Link>
          <span>or</span>
          <span style={{ cursor: "pointer" }} onClick={() => loggedOut()}>
            Log out
          </span>
        </>
      );
    };

    logout = <Component />;
  } else {
    const Component = () => {
      return (
        <>
          <Link to="/create-account">
            <i class="fa-solid fa-user"></i>
            <span>Register</span>
          </Link>

          <span>or</span>

          <Link to="/login">
            <span>Login</span>
          </Link>
        </>
      );
    };

    logout = <Component />;
  }

  return (
    <>
      <Sidebar show={show} onHide={handleClose} />
      <header id="header" className="header-1 sticky-menu">
        <div className="header-top hidden-sm-down">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="w-login">{logout}</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header-center">
              <div className="three-sec-cont">
                <div className="left-cont">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Enter Search Keyword" />
                </div>
                <div className="mid-cont">
                  <Link to="/">
                    <img src="./Image/2.png" alt="logo" />
                  </Link>
                </div>

                <i
                  className="fa-solid fa-bars-staggered"
                  onClick={handleShow}
                ></i>

                <div
                  className="right-cont"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <i class="fa-solid fa-phone"></i>

                  <div class="content">
                    <span class="phone_number">800-140-10000</span>
                    <br />
                    <span>Mon - Fri: 8:00 - 17:00</span>
                  </div>

                  <div className="mini-cart">
                    <Link to="/mywishlist">
                      <i className="fa-regular fa-heart"></i>
                    </Link>
                    <Link to="/cart" onMouseEnter={() => handleToggleOpen()}>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </Link>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="cart_block "
                    >
                      <div className="cart-block-content">
                        <ul>
                          <li>
                            <div className="media">
                              <img
                                className=" product-image"
                                src="https://demo.bestprestashoptheme.com/vaping/32-cart_default/the-best-is-yet-to-come-framed-poster.jpg"
                                alt=""
                              />

                              <a className="remove-from-cart">
                                <i className="fa fa-trash-o"></i>
                              </a>

                              <div className="media-body">
                                <div class="product-name">
                                  <a>The best is yet to come' Framed poster</a>
                                </div>
                                <div>
                                  <span class="product-price">$34.80</span>
                                  <span class="quantity"> x 1</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <div className="cart-total">
                          <span class="label">SubTotal:</span>
                          <span class="value">$34.80</span>
                        </div>

                        <div className="cart-buttons">
                          <a className="btn-checkout">
                            <i className="fa fa-check-square-o"></i> Check out
                          </a>

                          <a className="btn-cart">View cart</a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="container">
            <div className="Navbar">
              <div className="left">
                <div className="main ">
                  <Link to="/">Home</Link>
                </div>

                <div className="main ">
                  <div class="dropdown-custom">
                    <Link to="/products">Categories</Link>
                    <div class="dropdown-content-custome">
                      <ul>
                        <li className="item">
                          <span className="menu-title">Vaping</span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="item">
                          <span className="menu-title">
                            Smoking accessories
                          </span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="item">
                          <span className="menu-title">Drink</span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li className="item">
                          <span className="menu-title">American sweets</span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="item">
                          <span className="menu-title">Battery </span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="item">
                          <span className="menu-title">Phone accessories </span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li className="item">
                          <span className="menu-title">Plastic bag</span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="item">
                          <span className="menu-title">Tissue Paper </span>
                          <div className="menu-content">
                            <ul className="content-bold">
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                              <li>
                                <a href="/products">Lorem Ipsum</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="main ">
                  <Link to="/posts">Blog</Link>
                </div>
                <div className="main ">
                  <Link to="/about">About Us</Link>
                </div>

                <div className="main ">
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </div>
              <div className="right">
                <ul className="social-links">
                  <li>
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-google"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i class="fa-solid fa-basketball"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
