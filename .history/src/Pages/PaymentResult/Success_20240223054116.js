/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { successOrder } from "../../Repository/User/cart";

const Success = () => {
  const { id } = useParams();
  const [isVerified, setIsVerified] = useState(true);

  useEffect(() => {
    successOrder(id, setIsVerified);
  }, [id]);

  return isVerified ? (
    <div className="payment-success-container">
      <div className="payment-success-content" style={{ minWidth: "60%" }}>
        <h2>Thank You!</h2>
        <p className="fw-bold">
          {" "}
          Congratulations! Your order has been successfully verified. <br /> We
          are looking forward to provide you the best Experience.
        </p>

        <Link to="/">
          <button className="continue_shopping">RETURN TO HOMEPAGE</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <p className="fw-bold">
          Our system is diligently processing your order.
        </p>
        <p className="fw-bold">
          This may take a few moments, but please be assured that we are working
          to complete your order as quickly as possible.
        </p>
      </div>
    </div>
  );
};

export default Success;
