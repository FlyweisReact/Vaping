/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFOund = () => {
  return (
    <div className="Not-Found-Div">
      <img src="/Image/1.png" alt="notFound" />
      <Link to="/">Go To Homepage</Link>
    </div>
  );
};

export default NotFOund;
