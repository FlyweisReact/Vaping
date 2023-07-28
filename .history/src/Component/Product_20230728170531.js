/** @format */
import { Skeleton } from "antd";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemCart } from "../Repository/User/cart";
import Rating from "./Rating";

const Product = ({ products, loading }) => {
  const quantity = 1;
  const dispatch = useDispatch();

  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.[0]?.img;
    } else {
      return item?.img;
    }
  };

  const submitHandler = (productId, colorId, size) => {
    let payload;
    if (colorId) {
      if (size) {
        payload = { productId, quantity, colorId, size };
      } else {
        payload = { productId, quantity, colorId };
      }
    } else {
      payload = { productId, quantity };
    }
    dispatch(addItemCart(payload));
  };

  return products?.length > 0 ? (
    loading ? (
      <div className="products-container">
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((index) => (
          <div className="Main" key={index}>
            <div className="thumbnail">
              <Skeleton.Image loading={true} active />
            </div>
            <div className="product-groups">
              <div className="product-description">
                <div className="product-title">
                  <Skeleton loading={true} active />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="products-container">
        {products?.map((item, index) => (
          <div className="Main" key={index}>
            {console.log(item)}
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
              <Rating rating={item.ratings} />
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
                {item?.status === "STOCK" ? (
                  <a href="#" onClick={()}>
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span>Add To cart</span>
                  </a>
                ) : (
                  <a href="#">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <span>out of stock</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  ) : (
    <Alert className="mt-3 w-75 d-block m-auto">No Product Found</Alert>
  );
};

export default Product;
