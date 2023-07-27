/** @format */

import React, { useState } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  function increaeQuan() {
    setQuantity(quantity + 1);
  }

  function decreaseQuan() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={"Cart"} />

        <div className="container-width">
          <div className="cart">
            <section id="main">
              <div className="cart-grid">
                {/* Left */}
                <div className="cart-grid-body">
                  <h1 class="page-title">Shopping Cart</h1>

                  <div className="cart-container">
                    <div className="group_title ">
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th style={{ paddingLeft: "45px" }}>Qty</th>
                            <th>Total</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody style={{ marginTop: "100px" }}>
                          <tr>
                            <td>
                              <span className="big-container">
                                <span className="img-container">
                                  <img
                                    src="	https://demo.bestprestashoptheme.com/vaping/24-cart_default/hummingbird-printed-t-shirt.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </span>

                                <div>
                                  <a href="/">Diamond Halo Stud Monte</a>
                                  <div className="variant">
                                    <span>Size:</span>
                                    <span className="value">Small </span>
                                  </div>
                                  <div className="variant">
                                    <span>Color:</span>
                                    <span>White</span>
                                  </div>
                                </div>
                              </span>
                            </td>
                            <td>
                              <span className="product-price">£22.94</span>
                            </td>

                            <td>
                              <span className="qty">
                                <span className="input-group">
                                  <input
                                    type="text"
                                    id="quantity_wanted"
                                    min="1"
                                    value={quantity}
                                  />
                                  <span className="input-group-btn-vertical">
                                    <button
                                      className="button-minus"
                                      type="button"
                                    >
                                      <i
                                        className="fa-solid fa-minus"
                                        onClick={() => decreaseQuan()}
                                      ></i>
                                    </button>
                                    <button
                                      className="button-plus"
                                      type="button"
                                    >
                                      <i
                                        className="fa-solid fa-plus"
                                        onClick={() => increaeQuan()}
                                      ></i>
                                    </button>
                                  </span>
                                </span>
                              </span>
                            </td>

                            <td>
                              <span className="product-price total">
                                £22.94
                              </span>
                            </td>

                            <td>
                              <i className="fa-solid fa-trash"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="continue_shopping">
                      Continue shopping
                    </button>
                  </div>
                </div>

                {/* Right */}
                <div className="cart-grid-right">
                  <div className="cart-summary">
                    <div className="cart-detailed-totals">
                      <div className="summary">
                        <p>Total products:</p>
                        <p className="value">£22.94</p>
                      </div>
                      <div className="summary">
                        <p>Total Shipping:</p>
                        <p className="value">Free</p>
                      </div>

                      <div className="summary">
                        <p>GST:</p>
                        <p className="value">£100</p>
                      </div>

                      <div className="empty"></div>

                      <div className="summary">
                        <p>
                          {" "}
                          <span className="upper">TOTAL</span> (tax incl.)
                        </p>
                        <p className="value">Free</p>
                      </div>

                      <button className="Checkout">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
