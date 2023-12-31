/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Repository/User/Authentication";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [inputType, setInputType] = useState(false);

  const navigate = useNavigate();
  const payload = { email, password };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginUser(payload, navigate));
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function InputHandler() {
    setInputType(!inputType);
  }

  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={"Log in to your account"} />
        <div className="container-width">
          <div className="block-form-login">
            <div className="login-form">
              <h2 className="page_title_account">Login</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type={inputType ? "text" : "password"}
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {inputType === true ? (
                    <i className="fa-solid fa-eye" onClick={InputHandler}></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash" onClick={InputHandler}></i>
                  )}
                </div>

                <div className="forgot-password">
                  <i className="fa-regular fa-envelope"></i>
                  <Link to="/password-recovery">
                    {" "}
                    Forgot your <strong>Password</strong>{" "}
                  </Link>
                  <i className="fa-solid fa-question"></i>
                </div>

                <button type="submit">LOGIN</button>

                <div className="no-account">
                  <Link to="/create-account">No account? Create one here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
