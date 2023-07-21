/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const ForgetPassword = () => {

    const [ email , setEmail ] = useState(null)

    const handle

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

          <section className="reset-password-section">
            <p>
              Email Address <span>*</span>
            </p>
            <form>
              <input type="text" />
              <button className="reset-link">send resent link</button>
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
