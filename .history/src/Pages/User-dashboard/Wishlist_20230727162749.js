/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { deleteWishlit, getWishlit } from "../../Repository/User/wishlist";
import Profilebar from "./Profilebar";
import { Alert } from "react-bootstrap";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  const fetchHandler = async () => {
    try {
      const res = await getWishlit();
      setProducts(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteWishlit(id);
      fetchHandler();
    } catch {}
  };

  return (
    <div>
      <Navbar />

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Your account </a>
            </li>
            <li>
              <a href="/"> Wishlist</a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container-width">
        <div className="page_title_account">Your account</div>

        <div className="user-dashboard">
          <div className="left-container">
            <Profilebar />
          </div>

          <div className="right-container">
            <div className="block_content-right">
              <div class="title_account_second">Wishlist</div>

              <div className="wlp_bought_list">
              {
                products?.length === 0 || !products ? 
                <Alert>No Product Added to Wishlist Yet</Alert>
                :
              }
                {}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
