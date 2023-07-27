/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import { getWishlit } from "../../Repository/User/wishlist";
import Profilebar from "./Profilebar";

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
                {products?.map((i, index) => (
                  <div className="Wishlist" key={index}>
                    <a href="#" className="lnkdel">
                      <i class="fa-solid fa-circle-xmark"></i>
                    </a>

                    <div class="clearfix">
                      <div class="product_image">
                        <a href="/product/Diamond%20Halo%20Stud%20Monte">
                          <img
                            class="img-fluid"
                            src="https://demo.bestprestashoptheme.com/vaping/44-medium_default/mug-the-best-is-yet-to-come.jpg"
                            alt="Diamond Halo Stud Natoque"
                          />
                        </a>
                      </div>
                      <div class="product_infos">
                        <div>
                          <Link href="/product/Diamond%20Halo%20Stud%20Monte">
                          {i.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
