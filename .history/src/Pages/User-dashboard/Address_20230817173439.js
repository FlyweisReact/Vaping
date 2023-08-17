/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import {
  createAddress,
  deleteAddress,
  getAllAddress,
} from "../../Repository/User/Addresses";
import Profilebar from "./Profilebar";

const Address = () => {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState(null);
  const [addressComplement, setAddressComplement] = useState(null);
  const [city, setCity] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState(null);

  const fetchHandler = async () => {
    try {
      const res = await getAllAddress();
      setData(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const payload = {
    address,
    addressComplement,
    city,
    pincode,
    country,
    phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAddress(payload);
    fetchHandler();
  };

  const deleteHandler = (id) => {
    deleteAddress(id);
    fetchHandler();
  };

  console.log(data);

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
              <a href="/"> Addresses </a>
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
              <div className="title_account_second">
                Your personal information
              </div>
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

              {data?.length < 1 || !data ? (
                <form onSubmit={handleSubmit}>
                  <section>
                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Address <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Address "
                          required
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Address Complement
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Address Complement"
                          onChange={(e) => setAddressComplement(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        City
                        <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="City "
                          required
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Zip/Postal Code
                        <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Zip/Postal Code  "
                          required
                          onChange={(e) => setPincode(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Country
                        <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Country"
                          required
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">Phone</label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="tel"
                          maxLength={12}
                          minLength={8}
                          placeholder="Phone"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label" />

                      <div className="form-control-valign">
                        <button className="continue_shopping" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </section>
                </form>
              ) : (
                <form>
                  <div className="cart">
                    <section id="main" style={{ marginBottom: 0 }}>
                      <div className="cart-grid" style={{ paddingBottom: 0 }}>
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
                                    <th>Address</th>
                                    <th>Address Complement</th>
                                    <th>City</th>
                                    <th>Zip/Postal Code</th>
                                    <th>Country</th>
                                    <th>Phone Number</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody style={{ marginTop: "100px" }}>
                                  {data?.map((i, index) => (
                                    <tr key={index}>
                                      <td>
                                        <span className="product-price">
                                          {i.address}
                                        </span>
                                      </td>
                                      <td>
                                        <span className="product-price">
                                          {" "}
                                          {i.addressComplement}{" "}
                                        </span>
                                      </td>

                                      <td>
                                        <span className="product-price">
                                          {i.city}
                                        </span>
                                      </td>

                                      <td>
                                        <span className="product-price">
                                          {i.pincode}
                                        </span>
                                      </td>

                                      <td>
                                        <span className="product-price">
                                          {i.country}
                                        </span>
                                      </td>
                                      <td>
                                        <span className="product-price">
                                          {i.phone}
                                        </span>
                                      </td>
                                      <td>
                                        {type === "Registration" ? (
                                          ""
                                        ) : (
                                          <i
                                            className="fa-solid fa-trash"
                                            style={{ cursor: "pointer" }}
                                            onClick={(e) =>
                                              deleteHandler(i._id)
                                            }
                                          ></i>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
