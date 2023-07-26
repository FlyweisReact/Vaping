/** @format */

import React, { useState } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { RegisterUser } from "../../Repository/User/Authentication";

const CreateAccount = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(null);
  const [courtesyTitle, setCourtesyTitle] = useState(null);

  const payload = { firstName, lastName, email, password, dob, courtesyTitle };

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterUser(payload);
  };

  return (
    <div>
      <Navbar />
      <Breadcrumb title={"Create an account"} />
      <div className="container-width">
        <div className="block-form-login">
          <div className="login-form">
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
              </div>

              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="First Name"
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
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <p className="form-control-comment">
                Only letters and the dot (.) character, followed by a space, are
                allowed.
              </p>

              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-calendar-days"></i>
                <input
                  type="text"
                  placeholder="Birthdate"
                  onChange={(e) => setB(e.target.value)}
                />
              </div>
              <p className="form-control-comment">(E.g.: 05/31/1970)</p>

              <button>Register </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
