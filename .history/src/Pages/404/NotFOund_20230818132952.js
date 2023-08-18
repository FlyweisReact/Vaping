/** @format */

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="Not-Found-Div">
    <p> Not Found</p>
      <img src="/Image/1.png" alt="notFound" />
      <Link to="/">Go To Homepage</Link>
    </div>
  );
};

export default NotFound;
