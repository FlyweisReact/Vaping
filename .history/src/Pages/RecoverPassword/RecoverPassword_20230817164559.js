/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { ResetPassword } from "../../Repository/User/Authentication";

const RecoverPassword = () => {
  const email = localStorage.getItem("Recovery-Email");
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputType, setInputType] = useState(false);
  const [inputType2, setInputType2] = useState(false);

  const payload = { email, otp, newPassword, confirmPassword };

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPassword(payload, navigate);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function InputHandler() {
    setInputType(!inputType);
  }
  
  function InputHandler2() {
    setInputType2(!inputType2);
  }

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
                    pattern="[0-9]{4}"
                    placeholder="OTP"
                    required
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type={inputType ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
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
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit">RESET</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecoverPassword;
