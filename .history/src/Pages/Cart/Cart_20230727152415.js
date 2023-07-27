/** @format */

import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { getCart } from "../../Repository/User/cart";

const Cart = () => {
  const [Items, setItems] = useState({});
  const [ address , aetAddress] = useState([])
  const [addressSelector, setAddressSelector] = useState(false);

  const fetchHandler = async () => {
    try {
      const res = await getCart();
      setItems(res);
    } catch {}
  };


  const getAddress = () => {
    try{
      const res = await getAllAddress()
      
    }catch{}
  }

  useEffect(() => {
    fetchHandler();
  }, []);

  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.[0]?.img;
    } else {
      console.log(item.img, "dsa");
      return item?.img;
    }
  };



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
                          {Items?.products?.map((i, index) => (
                            <tr key={index}>
                              <td>
                                <span className="big-container">
                                  <span className="img-container">
                                    <img
                                      src={getImageLink(i.productId)}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </span>

                                  <div>
                                    <a href="/"> {i.productId.name} </a>
                                  </div>
                                </span>
                              </td>
                              <td>
                                <span className="product-price">
                                  {" "}
                                  £{i.productPrice}
                                </span>
                              </td>

                              <td>
                                <span className="qty">
                                  <span className="input-group">
                                    <input
                                      type="text"
                                      id="quantity_wanted"
                                      min="1"
                                      value={i.quantity}
                                    />
                                    <span className="input-group-btn-vertical">
                                      <button
                                        className="button-minus"
                                        type="button"
                                      >
                                        <i className="fa-solid fa-minus"></i>
                                      </button>
                                      <button
                                        className="button-plus"
                                        type="button"
                                      >
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                    </span>
                                  </span>
                                </span>
                              </td>

                              <td>
                                <span className="product-price total">
                                  £{i.total}
                                </span>
                              </td>

                              <td>
                                <i className="fa-solid fa-trash"></i>
                              </td>
                            </tr>
                          ))}
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
                        <p>Total Items:</p>
                        <p className="value">{Items.totalItem}</p>
                      </div>
                      <div className="summary">
                        <p>Discounted Price:</p>
                        <p className="value">£{Items.discountPrice}</p>
                      </div>

                      <div className="summary">
                        <p>Amount To Be Paid:</p>
                        <p className="value">£{Items.paidAmount} </p>
                      </div>

                      <div className="empty"></div>

                      <div className="summary">
                        <p>
                          {" "}
                          <span className="upper">TOTAL</span> (tax incl.)
                        </p>
                        <p className="value"> £{Items.totalAmount} </p>
                      </div>

                      <button
                        className="Checkout"
                        onClick={() => setAddressSelector(!addressSelector)}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {addressSelector === true ? (
            <div className="cart">
              <section id="main">
                <div className="cart-grid">
                  {/* Left */}
                  <div className="cart-grid-body">
                    <h1 class="page-title">Select Address </h1>

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
                            {Items?.products?.map((i, index) => (
                              <tr key={index}>
                                <td>
                                  <span className="big-container">
                                    <span className="img-container">
                                      <img
                                        src={getImageLink(i.productId)}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </span>

                                    <div>
                                      <a href="/"> {i.productId.name} </a>
                                    </div>
                                  </span>
                                </td>
                                <td>
                                  <span className="product-price">
                                    {" "}
                                    £{i.productPrice}
                                  </span>
                                </td>

                                <td>
                                  <span className="qty">
                                    <span className="input-group">
                                      <input
                                        type="text"
                                        id="quantity_wanted"
                                        min="1"
                                        value={i.quantity}
                                      />
                                      <span className="input-group-btn-vertical">
                                        <button
                                          className="button-minus"
                                          type="button"
                                        >
                                          <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <button
                                          className="button-plus"
                                          type="button"
                                        >
                                          <i className="fa-solid fa-plus"></i>
                                        </button>
                                      </span>
                                    </span>
                                  </span>
                                </td>

                                <td>
                                  <span className="product-price total">
                                    £{i.total}
                                  </span>
                                </td>

                                <td>
                                  <i className="fa-solid fa-trash"></i>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <button className="continue_shopping">Checkout</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
