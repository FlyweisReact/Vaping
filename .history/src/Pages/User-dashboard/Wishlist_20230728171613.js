/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { deleteWishlit, getWishlit } from "../../Repository/User/wishlist";
import Profilebar from "./Profilebar";
import { Alert } from "react-bootstrap";
import { Skeleton} from 'antd'

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [ loading , setLoading ] = useState(false)

  const fetchHandler = async () => {
    setLoading(true)
    try {
      const res = await getWishlit();
      setProducts(res);
      setLoading(true)
    } catch {
      setLoading(true)
    }
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

  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.[0]?.img;
    } else {
      return item?.img;
    }
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
                loading ? <Skeleton /> : 
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
