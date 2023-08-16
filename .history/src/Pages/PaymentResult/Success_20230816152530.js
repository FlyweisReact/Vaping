/** @format */

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCart } from "../../Repository/User/cart";

const Success = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch()

  const getOrder = async () => {
    const url = `https://krish-vapes-backend.vercel.app/api/v1/user/successOrder/${id}`;
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
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <p>Your order will be delivered shortly.</p>
        </div>
      </div>
    </>
  );
};

export default Success;