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
      {products?.length > 0 ? (
        products?.map((item, index) => (
          <div className="Main" key={index}>
            <div className="thumbnail">
              <Link to={`/product/${item?.name}`}>
                <img src={getImageLink(item)} alt={item?.name} />
              </Link>
            </div>
            <div className="product-groups">
              <div className="product-description">
                <div className="product-title">
                  <Link to={`/product/${item?.name}`}>{item?.name}</Link>
                </div>
              </div>
            </div>

            <div className="product-comments">
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>

            <div className="product-group-price">
              <div className="product-price-and-shipping">
                <span className="price">
                  {item?.price ? `£ ${item?.price}` : ""}
                </span>
                <span className="regular-price">
                  {item?.discountPrice
                    ? `£ ${item?.discountPrice}`
                    : item?.price}{" "}
                </span>
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
        }  ))
      )}
};

export default Product;
