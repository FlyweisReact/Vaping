/** @format */

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Failure = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getOrder = async () => {
    const url = `https://krish-vapes-backend.vercel.app/api/v1/user/cancelOrder/${id}`;
    try {
      const data = await axios.get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getOrder();
  });

  return (
    <>
      <div className="payment-success-container">
        <div className="payment-success-content">
          <h2>Payment Failed!</h2>
          <p>We're sorry, but your payment did not go through.</p>
          <p>Please check your payment information and try again.</p>
        </div>
      </div>
    </>
  );
};

export default Failure;
