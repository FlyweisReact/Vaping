/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { Store } from "react-notifications-component";

const SignIn = () => {
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    Store.addNotification({
      title: "Welcome Back",
      message: "",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate("/identity");
    localStorage.setItem("token", "React");
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-lock"></i>
                  <input type="password" placeholder="Password" />
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
