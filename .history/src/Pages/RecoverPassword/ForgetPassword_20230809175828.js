/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { GetOtp } from "../../Repository/User/Authentication";

const ForgetPassword = () => {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  const payload = { email };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    GetOtp(payload, navigate);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={"Reset your password"} />
        <div className="container-width">
          <p className="send-renew-password-link">
            Please enter the email address you used to register. You will
            receive a temporary link to reset your password.
          </p>

          <section className="reset-password-section mb-5">
            <p>
              Email Address <span>*</span>
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="reset-link" type="submit">
                {" "}
                send resent link
              </button>
            </form>
            <Link to="/login">
              <button className="login-button">Back to Login</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
