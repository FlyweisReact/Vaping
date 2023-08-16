/** @format */

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";

const Profilebar = () => {
  const location = useLocation();
  const name = localStorage.getItem("token");
  const navigate = useNavigate();

  const links = [
    {
      link: "Information",
      path: "/identity",
      icon: "fa-solid fa-user",
    },
    {
      link: "Add Address",
      path: "/address",
      icon: "fa-solid fa-location-dot",
    },
    {
      link: "Order History",
      path: "/order",
      icon: "fa-solid fa-clock-rotate-left",
    },
    {
      link: "Wishlist",
      path: "/mywishlist",
      icon: "fa-solid fa-heart",
    },
  ];

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

  return (
    <div className="account-links">
      <div className="links">
        {links.map((i, index) => (
          <Link
            className={i.path === location.pathname ? "active" : ""}
            to={i.path}
            key={index}
          >
            <span className="link-item">
              <i className={i.icon}></i>
              <span> {i.link} </span>
            </span>
          </Link>
        ))}

        <a href="#" onClick={() => loggedOut()}>
          <span className="link-item">
            <i className="fa-solid fa-power-off"></i>
            <span>Sign out</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Profilebar;
