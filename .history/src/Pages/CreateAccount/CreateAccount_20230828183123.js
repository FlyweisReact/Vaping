/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { RegisterUser } from "../../Repository/User/Authentication";

const CreateAccount = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [courtesyTitle, setCourtesyTitle] = useState(null);
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [password, setPassword] = useState(null);
  const [company, setCompany] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [vatUsed, setVatUsed] = useState("false");
  const [phone, setPhone] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [address, setAddress] = useState("");
  const [addressComplement, setAddressCompliment] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState("");
  const [addressCountry, setAddressCountry] = useState("");

  const [inputType, setInputType] = useState(false);

  const payload =
    vatUsed === "true"
      ? {
          firstName,
          lastName,
          email,
          password,
          dob,
          courtesyTitle,
          company,
          phone,
          vatUsed,
          vatNumber,
          registrationNo,
          address,
          addressComplement,
          city,
          pincode,
          addressCountry,
        }
      : {
          firstName,
          lastName,
          email,
          password,
          dob,
          courtesyTitle,
          company,
          phone,
          vatUsed,
          registrationNo,
          address,
          addressComplement,
          city,
          pincode,
          addressCountry,
        };

  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterUser(payload, navigate);
  };

  function InputHandler() {
    setInputType(!inputType);
  }

  return (
    <div>
      <Navbar />
      <Breadcrumb title={"Create an account"} />
      <div className="container-width">
        <div className="block-form-login" style={{ maxWidth: "800px" }}>
          <div className="login-form Hide-on-Mobile-Phone">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-control-valign">
                  <label className="radio-inline">
                    <span className="custom-radio">
                      <input
                        type="radio"
                        name="id_gender"
                        value="Mr"
                        onClick={(e) => setCourtesyTitle(e.target.value)}
                      />
                      <span></span>
                    </span>
                    Mr.
                  </label>

                  <label className="radio-inline">
                    <span className="custom-radio">
                      <input
                        type="radio"
                        name="id_gender"
                        value="Mrs"
                        onClick={(e) => setCourtesyTitle(e.target.value)}
                      />
                      <span></span>
                    </span>
                    Mrs.
                  </label>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <i className="fa-solid fa-user"></i>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      name="Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <p className="form-control-comment">
                    Only letters and the dot (.) character, followed by a space,
                    are allowed.
                  </p>

                  <div className="form-group">
                    <i className="fa-solid fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-calendar-days"></i>
                    <input
                      type="date"
                      placeholder="Birthdate"
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <select onChange={(e) => setVatUsed(e.target.value)}>
                      <option value="">Do you have your VAT number</option>
                      <option value="false">NO</option>
                      <option value="true">YES</option>
                    </select>
                  </div>

                  {vatUsed === "true" ? (
                    <div className="form-group">
                      <i className="fa-solid fa-elevator"></i>
                      <input
                        type="text"
                        placeholder="VAT Number (if available) "
                        onChange={(e) => setVatNumber(e.target.value)}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="form-group">
                    <i className="fa-solid fa-calendar-days"></i>
                    <input
                      type="text"
                      placeholder="Company"
                      required
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-phone"></i>
                    <input
                      type="tel"
                      placeholder="Telephone No."
                      required
                      maxLength={12}
                      minLength={8}
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-globe"></i>
                    <input
                      type="text"
                      placeholder="Country"
                      required
                      name="country"
                      onChange={(e) => setAddressCountry(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <i className="fa-solid fa-user"></i>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      name="Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <p className="form-control-comment">
                    Only letters and the dot (.) character, followed by a space,
                    are allowed.
                  </p>
                  <div className="form-group">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      type={inputType ? "text" : "password"}
                      placeholder="Password"
                      required
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {inputType === true ? (
                      <i className="fa-solid fa-eye" onClick={InputHandler}></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye-slash"
                        onClick={InputHandler}
                      ></i>
                    )}
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-address-card"></i>
                    <input
                      type="text"
                      placeholder="Registration Number"
                      required
                      onChange={(e) => setRegistrationNo(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                      type="text"
                      placeholder="Buisness Address"
                      required
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-location-arrow"></i>
                    <input
                      type="text"
                      placeholder="Buisness Address Complement"
                      required
                      name="address"
                      onChange={(e) => setAddressCompliment(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-city"></i>
                    <input
                      type="text"
                      placeholder="City"
                      required
                      name="city"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <i className="fa-solid fa-map-pin"></i>
                    <input
                      type="text"
                      placeholder="Postal Code"
                      required
                      name="pincode"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button type="submit">Register </button>
            </form>
          </div>

          <div className="login-form Hide-on-Normal">
            <form onSubmit={handleSubmit}>
              <div className="form-control-valign">
                <label className="radio-inline">
                  <span className="custom-radio">
                    <input
                      type="radio"
                      name="id_gender"
                      value="Mr"
                      onClick={(e) => setCourtesyTitle(e.target.value)}
                    />
                    <span></span>
                  </span>
                  Mr.
                </label>

                <label className="radio-inline">
                  <span className="custom-radio">
                    <input
                      type="radio"
                      name="id_gender"
                      value="Mrs"
                      onClick={(e) => setCourtesyTitle(e.target.value)}
                    />
                    <span></span>
                  </span>
                  Mrs.
                </label>



                <label className="radio-inline">
                  <span className="custom-radio">
                    <input
                      type="radio"
                      name="id_gender"
                      value="Ms"
                      onClick={(e) => setCourtesyTitle(e.target.value)}
                    />
                    <span></span>
                  </span>
                  Ms.
                </label>

              </div>
              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <p className="form-control-comment">
                Only letters and the dot (.) character, followed by a space, are
                allowed.
              </p>

              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  name="Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <p className="form-control-comment">
                Only letters and the dot (.) character, followed by a space, are
                allowed.
              </p>

              <div className="form-group">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="tel"
                  placeholder="Telephone No."
                  required
                  maxLength={12}
                  minLength={8}
                  name="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-lock"></i>
                <input
                  type={inputType ? "text" : "password"}
                  placeholder="Password"
                  required
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {inputType === true ? (
                  <i className="fa-solid fa-eye" onClick={InputHandler}></i>
                ) : (
                  <i
                    className="fa-solid fa-eye-slash"
                    onClick={InputHandler}
                  ></i>
                )}
              </div>

              <div className="form-group">
                <i className="fa-solid fa-calendar-days"></i>
                <input
                  type="date"
                  placeholder="Birthdate"
                  required
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-calendar-days"></i>
                <input
                  type="text"
                  placeholder="Company"
                  required
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-address-card"></i>
                <input
                  type="text"
                  placeholder="Registration Number"
                  required
                  onChange={(e) => setRegistrationNo(e.target.value)}
                />
              </div>

              <div className="form-group">
                <select onChange={(e) => setVatUsed(e.target.value)}>
                  <option value="">Do you have your VAT number</option>
                  <option value="false">NO</option>
                  <option value="true">YES</option>
                </select>
              </div>

              {vatUsed === "true" ? (
                <div className="form-group">
                  <i className="fa-solid fa-elevator"></i>
                  <input
                    type="text"
                    placeholder="VAT Number (if available) "
                    onChange={(e) => setVatNumber(e.target.value)}
                  />
                </div>
              ) : (
                ""
              )}

              <div className="form-group">
                <i className="fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="Buisness Address"
                  required
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-location-arrow"></i>
                <input
                  type="text"
                  placeholder="Buisness Address Complement"
                  required
                  name="address"
                  onChange={(e) => setAddressCompliment(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-city"></i>
                <input
                  type="text"
                  placeholder="City"
                  required
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-map-pin"></i>
                <input
                  type="text"
                  placeholder="Postal Code"
                  required
                  name="pincode"
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-globe"></i>
                <input
                  type="text"
                  placeholder="Country"
                  required
                  name="country"
                  onChange={(e) => setAddressCountry(e.target.value)}
                />
              </div>

              <button type="submit">Register </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
