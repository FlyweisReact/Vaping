/** @format */

import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { user } from "../../Store/Slices/authSlice";
import Profilebar from "./Profilebar";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUser } from "../../Repository/User/Authentication";

const Identity = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const userDetail = useSelector(user);
  const Details = userDetail;

  const Address = JSON.parse(localStorage.getItem("AddressUser"));

  const [firstName, setFirstName] = useState(Details?.firstName);
  const [lastName, setLastName] = useState(Details?.lastName);
  const [email, setEmail] = useState(Details?.email);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(Details?.dob);
  const [courtesyTitle, setCourtesyTitle] = useState(Details?.courtesyTitle);
  const [company, setCompany] = useState(Details?.company);
  const [vatNumber, setVatNumber] = useState(Details?.vatNumber);
  const [phone, setPhone] = useState(Details?.phone);
  const [registrationNo, setRegestrationNumber] = useState(
    Details?.registrationNo
  );

  const payload = {
    firstName,
    lastName,
    email,
    password,
    dob,
    courtesyTitle,
    company,
    vatNumber,
    phone,
    registrationNo,
  };

  function FiledChooser(field, placeholder) {
    const Title = field ? field : placeholder;
    return Title;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUser(payload));
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
              <a href="/"> Your personal information </a>
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

              <form onSubmit={handleSubmit}>
                <section>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">Social title</label>

                    <div className="form-control-valign">
                      <label className="radio-inline">
                        <span className="custom-radio">
                          <input
                            name="id_gender"
                            type="radio"
                            value="Mr"
                            checked={
                              Details?.courtesyTitle === "Mr" ? true : null
                            }
                            onClick={(e) => setCourtesyTitle(e.target.value)}
                          />
                          <span></span>
                        </span>
                        Mr.
                      </label>
                      <label className="radio-inline">
                        <span className="custom-radio">
                          <input
                            name="id_gender"
                            type="radio"
                            value="Mrs"
                            checked={
                              Details?.courtesyTitle === "Mrs" ? true : null
                            }
                            onClick={(e) => setCourtesyTitle(e.target.value)}
                          />
                          <span></span>
                        </span>
                        Mrs.
                      </label>
                      <label className="radio-inline">
                        <span className="custom-radio">
                          <input
                            name="id_gender"
                            type="radio"
                            value="Ms"
                            checked={
                              Details?.courtesyTitle === "Ms" ? true : null
                            }
                            onClick={(e) => setCourtesyTitle(e.target.value)}
                          />
                          <span></span>
                        </span>
                        Miss.
                      </label>
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      First name <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder={FiledChooser(
                          Details?.firstName,
                          "First name"
                        )}
                        onChange={(e) => setFirstName(e.target.value)}
                      />

                      <span className="comment">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </span>
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
                        placeholder={FiledChooser(
                          Details?.lastName,
                          "Last Name"
                        )}
                        onChange={(e) => setLastName(e.target.value)}
                      />

                      <span className="comment">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </span>
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Email <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder={FiledChooser(
                          Details?.email,
                          "Email Address"
                        )}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Phone Number <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="tel"
                        minLength={8}
                        maxLength={12}
                        placeholder={FiledChooser(
                          Details?.phone,
                          "Phone Number"
                        )}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Password <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Birthdate
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder={FiledChooser(Details?.dob, "Birthdate")}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Company
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder={FiledChooser(Details?.company, "Company")}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      VAT Number
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder={FiledChooser(
                          Details?.vatNumber,
                          "VAT Number"
                        )}
                        onChange={(e) => setVatNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Registration Number
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder={FiledChooser(Details?.registrationNo)}
                        onChange={(e) => setRegestrationNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Company address
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        defaultValue={FiledChooser(Address?.address)}
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
                        defaultValue={FiledChooser(Address?.addressComplement)}
                      />
                    </div>
                  </div>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">City</label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        defaultValue={FiledChooser(Address?.city)}
                      />
                    </div>
                  </div>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">Postal Code</label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        defaultValue={FiledChooser(Address?.pincode)}
                      />
                    </div>
                  </div>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">Country</label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        defaultValue={FiledChooser(Address?.country)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
