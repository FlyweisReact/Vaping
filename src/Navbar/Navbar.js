/** @format */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Store } from "react-notifications-component";
import Sidebar from "../Component/Sidebar";
import { useSelector } from "react-redux";
import { isAuthenticated, user, LOGOUT } from "../Store/Slices/authSlice";
import { useDispatch } from "react-redux";
import { ContactDetail } from "../Repository/User/ContactDetail";
import { AllSubCat } from "../Repository/User/Cat";
import { deleteProductCart, getCart } from "../Repository/User/cart";
import { CartItems } from "../Store/Slices/cartSlice";
import logo from "./2.png";
import { getAd } from "../Repository/User/Product";

const Navbar = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  const userDetail = useSelector(user);
  const name = userDetail?.firstName + "  " + userDetail?.lastName;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [contactDetail, setContactDetail] = useState({});
  const [subCategory, setSubCategory] = useState([]);
  const [Items, setItems] = useState({});
  const cartItem = useSelector(CartItems);
  const [total, setTotal] = useState(0);
  const [ad, setAd] = useState("");

  const getContact = async () => {
    try {
      const res = await ContactDetail();
      setContactDetail(res);
    } catch {}
  };

  useEffect(() => {
    setItems(cartItem);
    setTotal(cartItem?.totalItem);
  }, [cartItem]);

  useEffect(() => {
    getContact();
    if (isLoggedIn === true) {
      dispatch(getCart());
    }
  }, []);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getSubCategories = async () => {
    try {
      const res = await AllSubCat();
      setSubCategory(res);
    } catch {}
  };

  useEffect(() => {
    getSubCategories();
  }, []);

  const loggedOut = () => {
    dispatch(LOGOUT());
    Store.addNotification({
      title: "Logged Out Successfully",
      message: "",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate("/login");
  };

  let logout;
  if (isLoggedIn === true) {
    const Component = () => {
      return (
        <>
          <Link to="/identity">
            <i className="fa-solid fa-user"></i>
            <span> {name} </span>
          </Link>
          <span>or</span>
          <span style={{ cursor: "pointer" }} onClick={() => loggedOut()}>
            LOG OUT
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
            <i className="fa-solid fa-user"></i>
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

  const getImageLink = (item) => {
    if (item?.productId?.colorActive === true) {
      return item?.productColorId?.img;
    } else {
      return item?.productId?.img;
    }
  };

  const deleteHandler = (cartProductId) => {
    dispatch(deleteProductCart(cartProductId));
  };

  const getAds = () => {
    getAd(setAd);
  };

  useEffect(() => {
    getAds();
  }, []);

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
          <div
            className="container"
            style={{ width: "100%", overflow: "hidden" }}
          >
            <motion.div
              style={{ display: "flex", whiteSpace: "nowrap" }}
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: "Infinity",
              }}
            >
              <motion.p
                style={{
                  color: "#0bdeda",
                  fontWeight: "bold",
                  margin: 0,
                  padding: "10px",
                  fontSize: "25px",
                  fontFamily: "Pacifico",
                  textTransform: "capitalize",
                }}
              >
                {" "}
                {ad.message}
              </motion.p>
            </motion.div>
          </div>
          <div className="container">
            <div className="header-center">
              <div className="three-sec-cont">
                <div className="mid-cont">
                  <Link to="/">
                    <img
                      src={logo}
                      style={{ display: "block", margin: "auto" }}
                      alt="logo"
                    />
                  </Link>
                </div>

                <Link to="/">
                  <h2 className="logoImg">KRISH WHOLESELLER</h2>
                </Link>

                <i
                  className="fa-solid fa-bars-staggered"
                  onClick={handleShow}
                ></i>

                <div
                  className="right-cont"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <a href="https://wa.me/07472078196" target="_blank">
                    {/* <i class="fa-brands fa-whatsapp"></i> */}
                    <i
                      class="fa-brands fa-square-whatsapp"
                      style={{ color: "#25d366", fontSize: "25px" }}
                    ></i>
                    {/* <i className="fa-solid fa-phone"></i> */}
                  </a>

                  <div className="content">
                    <span className="phone_number">
                      {" "}
                      {contactDetail?.tollfreeNo}{" "}
                    </span>
                    <br />
                    <span> {contactDetail?.openingTime} </span>
                  </div>

                  <div className="mini-cart">
                    {isLoggedIn ? (
                      <Link to="/mywishlist">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                    )}
                    {isLoggedIn ? (
                      <Link to="/cart" onMouseEnter={() => handleToggleOpen()}>
                        <span className="cart-badge">
                          {isLoggedIn ? <span> {total} </span> : ""}

                          <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Link>
                    )}

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        display: "none",
                        zIndex: -100,
                      }}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                        zIndex: 200,
                      }}
                      transition={{ duration: 0.3 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        display: "none",
                        zIndex: -100,
                      }}
                      className="cart_block "
                    >
                      <motion.div
                        className="cart-block-content"
                        initial={{
                          height: 0,
                          opacity: 0,
                          display: "none",
                          zIndex: -100,
                        }}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                          zIndex: 200,
                        }}
                        transition={{ duration: 0.3 }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          display: "none",
                          zIndex: -100,
                        }}
                      >
                        {Items?.products?.length === 0 || !Items?.products ? (
                          <ul>
                            <li>No Product Added Yet ! </li>
                          </ul>
                        ) : (
                          <>
                            <ul>
                              {Items?.products?.map((i, index) => (
                                <li key={index}>
                                  <div className="media">
                                    <img
                                      className=" product-image"
                                      src={getImageLink(i)}
                                      alt=""
                                    />

                                    <a className="remove-from-cart">
                                      <i
                                        className="fa fa-trash-o"
                                        onClick={() => deleteHandler(i._id)}
                                      ></i>
                                    </a>

                                    <div className="media-body">
                                      <div className="product-name">
                                        <Link
                                          to={`/product/${i?.productId?._id}`}
                                        >
                                          {" "}
                                          {i?.productId?.name}{" "}
                                        </Link>
                                      </div>
                                      <div>
                                        <span className="product-price">
                                          £{i?.productPrice}
                                        </span>
                                        <span className="quantity">
                                          {" "}
                                          x {i?.quantity}{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>

                            <div className="cart-total">
                              <span className="label">SubTotal:</span>
                              <span className="value">
                                £{Items?.totalAmount}
                              </span>
                            </div>

                            <div className="cart-buttons">
                              <Link className="btn-checkout " to="/cart">
                                <i className="fa fa-check-square-o"></i> Go To
                                Cart
                              </Link>
                            </div>
                          </>
                        )}
                      </motion.div>
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
                  <div className="dropdown-custom">
                    <Link>Categories</Link>
                    <div className="dropdown-content-custome">
                      <ul>
                        {subCategory?.map((item, index) => (
                          <li className="item" key={index}>
                            <span className="menu-title">
                              {" "}
                              {item?.category?.name}{" "}
                            </span>
                            <div className="menu-content">
                              <ul className="content-bold">
                                {item?.subCategory?.map((list) => (
                                  <li key={list._id}>
                                    <Link
                                      to={`/category_product/${list._id}/${list.name}`}
                                    >
                                      {" "}
                                      {list?.name}{" "}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
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
                    <a href={`https://${contactDetail?.fb}`} target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${contactDetail?.twitter}`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${contactDetail?.google}`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${contactDetail?.instagram}`}
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${contactDetail?.dribbble}`}
                      target="_blank"
                    >
                      <i className="fa-solid fa-basketball"></i>
                    </a>
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
