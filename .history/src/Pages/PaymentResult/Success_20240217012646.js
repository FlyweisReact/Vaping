/** @format */

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { successOrder } from "../../Repository/User/cart";

const Success = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    successOrder(id, navigate);
  }, [id]);

  return (
    <>
      <div className="payment-success-container">
        <div className="payment-success-content">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <p>Your order will be delivered shortly.</p>
        </div>
      </div>
    </>
  );
};

export default Success;
