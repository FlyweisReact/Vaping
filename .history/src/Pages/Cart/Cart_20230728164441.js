/** @format */

import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import {
  deleteProductCart,
  getCart,
  placeOrder,
  updateQuantityCart,
} from "../../Repository/User/cart";
import { getAllAddress } from "../../Repository/User/Addresses";
import { Store } from "react-notifications-component";
import { useDispatch, useSelector } from "react-redux";
import { CartItems } from "../../Store/Slices/cartSlice";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

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
    setItems(cartItem)
    getAddress();
  }, [cartItem]);


  console.log(Items, "CartItem")



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

  const deleteHandler = async (cartProductId) => {
    await deleteProductCart(cartProductId);
  };

  const updateProductQuantity = async (products_id, quantity) => {
    const payload = { products_id, quantity };
    await updateQuantityCart(payload);
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

                {
                      Items?.products?.length === 0 || ! Items?.products  ? 
                      <Alert>Added Products In Cart First</Alert> : <></>
                  }
               
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
