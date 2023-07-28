/** @format */

import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { getCart, placeOrder } from "../../Repository/User/cart";
import { getAllAddress } from "../../Repository/User/Addresses";
import { Store } from "react-notifications-component";

const Cart = () => {
  const [Items, setItems] = useState({});
  const [address, setAddress] = useState([]);
  const [addressSelector, setAddressSelector] = useState(false);
  const [addressId, setAddressId] = useState(null);

  const fetchHandler = async () => {
    try {
      const res = await getCart();
      setItems(res);
    } catch {}
  };

  const getAddress = async () => {
    try {
      const res = await getAllAddress();
      setAddress(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
    getAddress();
  }, []);

  const getImageLink = (item) => {
    if (item?.productId?.colorActive === true) {
      return item?.productColorId?.img;
    } else {
      return item?.productId?.img;
    }
  };

  const PlaceOrder = async () => {
    if (addressId) {
      await placeOrder(addressId);
      fetchHandler();
      setAddressSelector(false);
    } else {
      Store.addNotification({
        title: "Error !",
        message: "Please Select Address First !",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true,
        },
      });
    }
  };

  const deleteHandler = ()

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
                                      src={getImageLink(i)}
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </span>

                                  <div>
                                    <a href="/"> {i?.productId?.name} </a>
                                  </div>
                                </span>
                              </td>
                              <td>
                                <span className="product-price">
                                  {" "}
                                  £{i?.productPrice}
                                </span>
                              </td>

                              <td>
                                <span className="qty">
                                  <span className="input-group">
                                    <input
                                      type="text"
                                      id="quantity_wanted"
                                      min="1"
                                      value={i?.quantity}
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
                                  £{i?.total}
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
                    <button className="continue_shopping Hide_This">
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
                        <p className="value">{Items?.totalItem}</p>
                      </div>
                      <div className="summary">
                        <p>Discounted Price:</p>
                        <p className="value">£{Items?.discountPrice}</p>
                      </div>

                      <div className="summary">
                        <p>Amount To Be Paid:</p>
                        <p className="value">£{Items?.paidAmount} </p>
                      </div>

                      <div className="empty"></div>

                      <div className="summary">
                        <p>
                          {" "}
                          <span className="upper">TOTAL</span> (tax incl.)
                        </p>
                        <p className="value"> £{Items?.totalAmount} </p>
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
                  <div className="cart-grid-body" style={{ width: "100%" }}>
                    <h1 class="page-title">Select Address </h1>

                    <div className="cart-container">
                      <div className="group_title  overflow_Container">
                        <table>
                          <thead>
                            <tr>
                              <th></th>
                              <th>Alias</th>
                              <th>Fullname</th>
                              <th>Company</th>
                              <th>Vat Number</th>
                              <th>Address</th>
                              <th>Address Complement</th>
                              <th>City</th>
                              <th>Pincode</th>
                              <th>Country</th>
                              <th>Phone</th>
                            </tr>
                          </thead>
                          <tbody style={{ marginTop: "100px" }}>
                            {address?.map((i, index) => (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="checkbox"
                                    onClick={(e) => setAddressId(i._id)}
                                  />
                                </td>
                                <td>{i.alias}</td>
                                <td>{i.firstName + " " + i.lastName}</td>
                                <td>{i.company}</td>
                                <td>{i.vatNumber}</td>
                                <td>{i.address}</td>
                                <td>{i.addressComplement}</td>
                                <td>{i.city}</td>
                                <td>{i.pincode}</td>
                                <td>{i.country}</td>
                                <td>{i.phone}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <button
                        className="continue_shopping"
                        onClick={() => PlaceOrder()}
                      >
                        Checkout
                      </button>
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
