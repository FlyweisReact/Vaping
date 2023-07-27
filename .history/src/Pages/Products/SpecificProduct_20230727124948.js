/** @format */

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";

const SpecificProduct = () => {
  const [quantity, setQuantity] = useState(0);

  const { name } = useParams();

  function increaeQuan() {
    setQuantity(quantity + 1);
  }

  function decreaseQuan() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Vaping </a>
            </li>
            <li>
              <a href="/"> {name} </a>
            </li>
          </ol>
        </div>
      </div>

      {/* ---------------- */}

      <div className="container-width ">
        <div className="thumb-v4">
          <div className="left-container">
            <div className="images-container thumb-bottom">
              <div className="product-cover">
                <span
                  className="w-100"
                  style={{
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
                    alt=""
                    className="js-qv-product-cover img-fluid image-zoom "
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                </span>
              </div>
            </div>

            <div className="product-list ">
              <div className="item thumb-container">
                <img
                  class="thumb js-thumb  selected "
                  src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>

              <div class="item thumb-container">
                <img
                  class="thumb js-thumb "
                  src="https://demo.bestprestashoptheme.com/vaping/50-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>

              <div class="item thumb-container">
                <img
                  class="thumb js-thumb "
                  src="https://demo.bestprestashoptheme.com/vaping/51-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="block_content">
              <h1 class="detail-product-name"> {name} </h1>

              <div className="group-price">
                <div className="product-price ">
                  <span>£14.28</span>
                </div>

                <div className="tax-shipping-delivery-label">Tax included</div>
              </div>

              <div className="product-information">
                <p>
                  The best is yet to come! Give your walls a voice with a framed
                  poster. This aesthethic, optimistic poster will look great in
                  your desk or in an open-space office. Painted wooden frame
                  with passe-partout for more depth.
                </p>
              </div>

              <div className="pro-cate">
                <label className="control-label">Categories:</label>
                <div>
                  <span>
                    <a href="/">E-liquid</a>
                  </span>
                  <span>
                    <a href="/">Accessories</a>
                  </span>
                </div>
              </div>

              <div className="product-actions">
                <div className="product-add-to-cart">
                  <div className="control-label">Quantity:</div>

                  <div className="product-quantity">
                    <div className="qty">
                      <div className="input-group">
                        <input
                          type="text"
                          id="quantity_wanted"
                          min="1"
                          max="200"
                          value={quantity}
                        />

                        <span className="input-group-btn-vertical">
                          <button className="button-minus" type="button">
                            <i
                              className="fa-solid fa-minus"
                              onClick={() => decreaseQuan()}
                            ></i>
                          </button>
                          <button className="button-plus" type="button">
                            <i
                              className="fa-solid fa-plus"
                              onClick={() => increaeQuan()}
                            ></i>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="add">
                      <Link to="/cart">
                        <button
                          className="btn btn-primary add-to-cart"
                          data-button-action="add-to-cart"
                          type="submit"
                        >
                          <span>Add to cart</span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="product-payments">
                    <label> Guaranteed safe checkout:</label>

                    <div className="image-payment text-left">
                      <img
                        className="img-fluid"
                        src="https://demo.bestprestashoptheme.com/vaping/modules/novthemeconfig/images/payment_700x-1.png"
                        alt="payment"
                        title="Payment"
                      />
                    </div>
                  </div>

                  <div className="wishlist_bottom">
                    <a className="addToWishlist" href="/">
                      <i className="fa-regular fa-heart"></i>
                      <span>Add to wishlist</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relate-product">
          <h3 className="title_block">Related products</h3>
          <Product />
        </section>
      </div>
    </div>
  );
};

export default SpecificProduct;
