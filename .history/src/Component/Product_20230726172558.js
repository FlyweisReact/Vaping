/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.img;
    } else {
      return item?.img;
    }
  };

  return (
    <div className="products-container">
    {
      products?.length > 0 ? 
    }
      {}
    </div>
  );
};

export default Product;
