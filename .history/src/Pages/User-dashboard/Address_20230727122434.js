/** @format */

import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import { getAllAddress } from "../../Repository/User/Addresses";
import Profilebar from "./Profilebar";

const Address = () => {
  const [data, setData] = useState([]);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [alias, setAlias] = useState(null);
  const [company, setCompany] = useState(null);
  const [vatNumber, setVatNumber] = useState(null);
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
    firstName,
    lastName,
    alias,
    company,
    vatNumber,
    address,
    addressComplement,
    city,
    pincode,
    country,
    phone,
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

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
              <div class="title_account_second">Your personal information</div>

              {data?.length < 1 || !data ? (
                <form>
                  <section>
                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Alias<span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Alias"
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        First Name <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Last name <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">Company</label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Company"
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">VAT number</label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="VAT number"
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">
                        Address <span style={{ color: "red" }}>*</span>{" "}
                      </label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="text"
                          placeholder="Address "
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
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label">Phone</label>

                      <div className="form-control-valign">
                        <input
                          className="Input"
                          type="tel"
                          pattern="[0-9]{10}"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div className="form-group Gender_Group">
                      <label className="form-control-label" />

                      <div className="form-control-valign">
                        <button className="continue_shopping" type="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </section>
                </form>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
