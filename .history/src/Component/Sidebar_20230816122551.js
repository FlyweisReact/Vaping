/** @format */

import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AllSubCat } from "../Repository/User/Cat";
import logo from '../Navbar/2.png'
import { useSelector } from "react-redux";
import { isAuthenticated } from "../Store/Slices/authSlice";

const Sidebar = (props) => {
  const isLoggedIn = useSelector(isAuthenticated);
  const dispatch = useDispatch();
  let links;
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState([]);

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

  if (isLoggedIn === true) {
    const Component = () => {
      return (
        <>
          <li>
            <Link to="/identity">Information</Link>
          </li>
          <li>
            <Link to="/address">Add Address</Link>
          </li>
          <li>
            <Link to="/order">Order History</Link>
          </li>
          <li>
            <Link to="/mywishlist">Wishlist</Link>
          </li>
          <li>
            <a href="#" onClick={loggedOut}>
              Sign out
            </a>
          </li>
        </>
      );
    };

    links = <Component />;
  } else {
    const Component = () => {
      return (
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/create-account">Create An Account</Link>
          </li>
        </>
      );
    };

    links = <Component />;
  }

  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body style={{ padding: 0 }}>
        <div className="sidebar">
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => props.onHide()}
          ></i>
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemButton>
                    <a href="#">Categories</a>
                  </AccordionItemButton>
                  <AccordionItemPanel>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                      {subCategory?.map((item, index) => (
                        <AccordionItem key={index}>
                          <AccordionItemButton>
                            <a> {item?.category?.name} </a>
                          </AccordionItemButton>
                          <AccordionItemPanel>
                            {item?.subCategory?.map((list) => (
                              <p key={list?._id} className="Special_Link">
                                {" "}
                                <Link
                                  to={`/category_product/${list._id}/${list.name}`}
                                >
                                  {" "}
                                  {list?.name}{" "}
                                </Link>
                              </p>
                            ))}
                          </AccordionItemPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </li>

            <li>
              <Link to="/posts">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            {links}
          </ul>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
