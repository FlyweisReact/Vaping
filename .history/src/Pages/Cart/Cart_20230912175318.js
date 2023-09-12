/** @format */

import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import {
  deleteProductCart,
  updateQuantityCart,
} from "../../Repository/User/cart";
import { getAllAddress } from "../../Repository/User/Addresses";
import { useDispatch, useSelector } from "react-redux";
import { CartItems } from "../../Store/Slices/cartSlice";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";

const Cart = () => {
  const [Items, setItems] = useState({});
  const [address, setAddress] = useState([]);
  const [addressSelector, setAddressSelector] = useState(false);
  const [addressId, setAddressId] = useState(null);
  const cartItem = useSelector(CartItems);
  const dispatch = useDispatch();

  const getAddress = async () => {
    try {
      const res = await getAllAddress();
      setAddress(res);
    } catch {}
  };

  useEffect(() => {
    setItems(cartItem);
  }, [cartItem]);

  useEffect(() => {
    getAddress();
  }, []);

  const getImageLink = (item) => {
    if (item?.productId?.colorActive === true) {
      return item?.productColorId?.img;
    } else {
      return item?.productId?.img;
    }
  };

  const [orderId, setOrderId] = useState("");

  const placeOrder = async (orderId) => {
    const url = `https://krish-vapes-backend.vercel.app/api/v1/user/placeOrder/${orderId}`;
    try {
      const { data } = await axios.post(
        url,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );
      window.location.href = data?.session?.url;
      setOrderId("");
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHandler = (cartProductId) => {
    dispatch(deleteProductCart(cartProductId));
  };

  const updateProductQuantity = async (products_id, quantity) => {
    const payload = { products_id, quantity };
    dispatch(updateQuantityCart(payload));
  };

  const checkOut = async () => {
    const url = "https://krish-vapes-backend.vercel.app/api/v1/user/checkout";
    try {
      const { data } = await axios.post(
        url,
        { addressId },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );
      setOrderId(data?.data?.orderId);
      placeOrder(data?.data?.orderId);
    } catch (err) {
      console.log(err.message);
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

                {Items?.products?.length === 0 || !Items?.products ? (
                  <Alert style={{ width: "100%" }} variant="danger">
                    Add Products In Cart First !
                  </Alert>
                ) : (
                  <>
                    <div className="cart-grid-body">
                      <h1 className="page-title">Shopping Cart</h1>

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
                                            onClick={() =>
                                              i.quantity > 1
                                                ? updateProductQuantity(
                                                    i.productId?._id,
                                                    i.quantity - 1
                                                  )
                                                : ""
                                            }
                                          >
                                            <i className="fa-solid fa-minus"></i>
                                          </button>
                                          <button
                                            className="button-plus"
                                            type="button"
                                            onClick={() =>
                                              updateProductQuantity(
                                                i.productId?._id,
                                                i.quantity + 1
                                              )
                                            }
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
                                    <i
                                      className="fa-solid fa-trash"
                                      onClick={() => deleteHandler(i._id)}
                                    ></i>
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

                      <div className="phone-cart">
                        <div className="cart-container">
                          {Items?.products?.map((i, index) => (
                            <div key={index} className="Item">
                              <span className="big-container">
                                <span className="img-container">
                                  <img
                                    src={getImageLink(i)}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </span>

                                <div>
                                  <Link to={`/product/${i?.productId._id}`}>
                                    {" "}
                                    {i?.productId?.name}{" "}
                                  </Link>
                                </div>
                              </span>

                              <span className="product-price">
                                {" "}
                                £{i?.productPrice}
                              </span>
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
                                      onClick={() =>
                                        i.quantity > 1
                                          ? updateProductQuantity(
                                              i.productId?._id,
                                              i.quantity - 1
                                            )
                                          : ""
                                      }
                                    >
                                      <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <button
                                      className="button-plus"
                                      type="button"
                                      onClick={() =>
                                        updateProductQuantity(
                                          i.productId?._id,
                                          i.quantity + 1
                                        )
                                      }
                                    >
                                      <i className="fa-solid fa-plus"></i>
                                    </button>
                                  </span>
                                </span>
                              </span>

                              <span className="product-price total">
                                £{i?.total}
                              </span>

                              <i
                                className="fa-solid fa-trash"
                                onClick={() => deleteHandler(i._id)}
                              ></i>
                            </div>
                          ))}
                        </div>
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
                            <p className="value">
                              {" "}
                              {Items?.discount
                                ? `£${Items?.discount}`
                                : "£0"}{" "}
                            </p>
                          </div>
                          <div className="summary">
                            <p>Delivery Amount:</p>
                            <p className="value">
                              {" "}
                              {Items?.delivery
                                ? `£${Items?.delivery}`
                                : "£0"}{" "}
                            </p>
                          </div>

                          <div className="summary">
                            <p>Amount To Be Paid:</p>
                            <p className="value">£{Items?.totalAmount} </p>
                          </div>
                          <div className="summary">
                            <p>Tax To Be Paid:</p>
                            <p className="value">£{Items?.tax} </p>
                          </div>

                          <div className="empty"></div>

                          <div className="summary">
                            <p>
                              {" "}
                              <span className="upper">TOTAL</span> (tax incl.)
                            </p>
                            <p className="value"> £{Items?.paidAmount} </p>
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
                  </>
                )}
              </div>
            </section>
          </div>

          {addressSelector === true ? (
            <div className="cart">
              <section id="main">
                <div className="cart-grid">
                  <div className="cart-grid-body" style={{ width: "100%" }}>
                    <h1 className="page-title">Select Address </h1>
                    {address?.length === 0 || !address ? (
                      <>
                        <Link
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                          to="/create-address"
                        >
                          {" "}
                          + Create New
                        </Link>

                        <Alert className="mt-2">No Address Added Yet</Alert>
                      </>
                    ) : (
                      <div className="cart-container">
                        <div className="group_title  overflow_Container">
                          <table>
                            <thead>
                              <tr>
                                <th></th>
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
                          onClick={checkOut}
                          style={{ backgroundColor: "#000", color: "#fff" }}
                        >
                          Checkout
                        </button>
                      </div>
                    )}
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
