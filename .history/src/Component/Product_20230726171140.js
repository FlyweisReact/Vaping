/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {

  console.log(products)

  const ImageComp = (item) => {
    const [ link , setLink ] = useState(null)
    if (item.colorActive === true){
      setLink("https://demo.bestprestashoptheme.com/vaping/32-large_default/the-best-is-yet-to-come-framed-poster.jpg")
    }else{
      item
    }

  }

  return (
    <div className="products-container">
      {products.map((item, index) => (
        <div className="Main" key={index}>
          <div className="thumbnail">
            <Link to={`/product/${item.title}`}>
              <img src={item.img} alt={item.title} />
            </Link>
          </div>
          <div className="product-groups">
            <div className="product-description">
              <div className="product-title">
                <Link to={`/product/${item.title}`}>{item.title}</Link>
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
                {item.price ? `£ ${item.price}` : item.price}
              </span>
              <span className="regular-price">
                {item.mrp ? `£ ${item.mrp}` : item.mrp}{" "}
              </span>
            </div>
          </div>

          <div className="group-buttons">
            <div className="product-buttons">
              <a href="#">
                <i className="fa-solid fa-bag-shopping"></i>
                <span>
                  {" "}
                  {item.stock > 0 ? "Add To cart" : "out of stock  "}{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
