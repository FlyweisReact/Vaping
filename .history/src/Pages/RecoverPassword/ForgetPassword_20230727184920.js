/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { Store } from "react-notifications-component";

const ForgetPassword = () => {
  const [email, setEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      Store.addNotification({
        title: "",
        message: "Resent Link Sent To Your Registered Email",
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
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
