/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { getOrder } from "../../Repository/User/cart";
import Profilebar from "./Profilebar";
import { Skeleton } from "antd";
import { Alert } from "react-bootstrap";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = async () => {
    setLoading(true);
    try {
      const res = await getOrder();
      setProducts(res);
      console.log(res);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const getImageLink = (item) => {
    if (item?.productId?.colorActive === true) {
      return item?.productColorId?.img;
    } else {
      return item?.productId?.img;
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
              <div className="title_account_second">Order history</div>

              <section>
                {loading ? (
                  <Skeleton />
                ) : (
                  <div className="cart">
                    <section id="main" style={{ marginBottom: 0 }}>
                      <div className="cart-grid" style={{ paddingBottom: 0 }}>
                        <div
                          className="cart-grid-body"
                          style={{ width: "100%", paddingBottom: 0 }}
                        >
                          <div className="cart-container">
                            {products?.length === 0 || !products ? (
                              <Alert variant="danger">
                                You Haven't Order Yet !
                              </Alert>
                            ) : (
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
                                      <th>Sub-Total</th>
                                      <th>Tax</th>
                                      <th>Delivery Charge</th>
                                      <th>Total</th>
                                    </tr>
                                  </thead>

                                  <tbody style={{ marginTop: "100px" }}>
                                    {products?.map((i, index) => (
                                      <tr key={index}>
                                   
                                        <td>
                                        <span className="product-price">
                                          {i.}
                                        </span>
                                        </td>

                                       
                                        <td>
                                          <span className="product-price">
                                            <span className="big-container">
                                     
                                              <div>
                                                {i.Orders?.map((item) => (
                                                  <ul>
                                                    <li>
                                                      <Link
                                                        to={`/product/${item.productId._id}`}
                                                      >
                                                        {item.productId?.name}
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                ))}
                                              </div>
                                            </span>
                                          </span>
                                        </td>

                                        <td>
                                          {i.Orders?.map((item) => (
                                            <ul>
                                              <li>
                                                {" "}
                                                <span className="product-price">
                                                  £{item?.productId?.price}
                                                </span>
                                              </li>
                                            </ul>
                                          ))}
                                        </td>
                                        <td>
                                          {i.Orders?.map((item) => (
                                            <ul>
                                              <li>
                                                {" "}
                                                <span className="product-price">
                                                  {item?.quantity}
                                                </span>
                                              </li>
                                            </ul>
                                          ))}
                                        </td>

                                        <td>
                                          <span className="product-price">
                                            {" "}
                                            £{i?.total}{" "}
                                          </span>
                                        </td>
                                        <td>
                                          <span className="product-price">
                                            £{i?.tax}
                                          </span>
                                        </td>
                                        <td>
                                          <span className="product-price">
                                            £{i?.delivery}
                                          </span>
                                        </td>
                                        <td>
                                          <span className="product-price total">
                                            £{i?.paidAmount}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
