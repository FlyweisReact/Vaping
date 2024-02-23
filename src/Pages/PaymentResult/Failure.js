/** @format */

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { orderFailed } from "../../Repository/User/cart";

const Failure = () => {
  const { id } = useParams();

  useEffect(() => {
    orderFailed(id);
  }, [id]);

  return (
    <>
      <div className="payment-success-container">
        <div className="payment-success-content">
          <h2>Payment Failed!</h2>
          <p>We're sorry, but your payment did not go through.</p>
          <p>Please check your payment information and try again.</p>
          <Link to="/">
            <button className="continue_shopping">RETURN TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Failure;
