/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ products }) => {
  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.[0]?.img;
    } else {
      return item?.img;
    }
  };

  return products?.length > 0 ? (
    <div className="products-container">
      {products?.map((item, index) => (
        <div className="Main" key={index}>
          <div className="thumbnail">
            <Link to={`/product/${item?._id}`}>
              <img src={getImageLink(item)} alt={item?.name} />
            </Link>
          </div>
          <div className="product-groups">
            <div className="product-description">
              <div className="product-title">
                <Link to={`/product/${item?._id}`}>{item?.name}</Link>
              </div>
            </div>
          </div>

          <div className="product-comments">
            <Rating rating={} />
          </div>

          <div className="product-group-price">
            <div className="product-price-and-shipping">
              <span className="price">
                {item?.discountPrice
                  ? `£ ${item?.discountPrice}`
                  : `£${item?.price}`}
              </span>
              <span className="regular-price">£{item?.price}</span>
            </div>
          </div>

          <div className="group-buttons">
            <div className="product-buttons">
              <a href="#">
                <i className="fa-solid fa-bag-shopping"></i>
                <span>
                  {" "}
                  {item?.status === "STOCK"
                    ? "Add To cart"
                    : "out of stock  "}{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}>
      No Product Found
    </p>
  );
};

export default Product;
