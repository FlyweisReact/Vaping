/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, link }) => {
  return (
    <div className="BreadCrumb">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={link}>{title} </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
