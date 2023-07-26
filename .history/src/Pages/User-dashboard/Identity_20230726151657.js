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
  const Details = userDetail?.data;

  const [firstName, setFirstName] = useState(Details?.firstName);
  const [lastName, setLastName] = useState(Details?.lastName);
  const [email, setEmail] = useState(Details?.email);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(Details?.dob);
  const [courtesyTitle, setCourtesyTitle] = useState(Details?.courtesyTitle);
  const payload = { firstName, lastName, email, password, dob, courtesyTitle };



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
              <div class="title_account_second">Your personal information</div>

              <form onSubmit={handleSubmit}>
                <section>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">Social title</label>

                    <div className="form-control-valign">
                      <label class="radio-inline">
                        <span class="custom-radio">
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
                      <label class="radio-inline">
                        <span class="custom-radio">
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
                        onClick={(e) => setFirstName(e.target.value)}
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
                        onClick={(e) => setLastName(e.target.value)}
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
                        onClick={(e) => setEmail(e.target.value)}
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
                        onClick={(e) => setPassword(e.target.value)}
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
                        onClick={(e) => setDob(e.target.value)}
                      />
                      <span className="comment">(E.g.: 05/31/1970)</span>
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
