/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ products , loading }) => {
  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.[0]?.img;
    } else {
      return item?.img;
    }
  };

  return products?.length > 0 ? (
   
  ) : (
    <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
      No Product Found
    </p>
  );
};

export default Product;
