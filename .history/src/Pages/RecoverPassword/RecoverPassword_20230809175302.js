/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const RecoverPassword = () => {
  const email = localStorage.getItem("Recovery-Email");
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    RecoverPassword(email, navigate);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={"Recover your password"} />

        <div className="container-width">
          <div className="block-form-login">
            <div className="login-form">
              <h2 className="page_title_account">Reset your password</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="tel"
                    pattern="[]"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                  />
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

export default RecoverPassword;
