/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { getOrder } from "../../Repository/User/cart";
import Profilebar from "./Profilebar";

const Orders = () => {
  const [products, setProducts] = useState([]);

  const fetchHandler = async () => {
    try {
      const res = await getOrder();
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
              <a href="/"> Order history</a>
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
              <div class="title_account_second">Order history</div>

              <section>
                <div className="cart">
                  <section id="main" style={{ marginBottom: 0 }}>
                    <div className="cart-grid" style={{ paddingBottom: 0 }}>
                      {/* Left */}
                      <div
                        className="cart-grid-body"
                        style={{ width: "100%", paddingBottom: 0 }}
                      >
                        <div className="cart-container">
                          <div
                            className="group_title"
                            style={{ border: "none" }}
                          >
                            <table>
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>Qty</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              {products?.map((i , index) => (

                              ))}
                         
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;