/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { addItemCart } from "../../Repository/User/cart";
import {
  getRelatedProduct,
  getSingleProducts,
} from "../../Repository/User/Product";

const SpecificProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [colorId, setColorId] = useState(null);

  function increaeQuan() {
    setQuantity(quantity + 1);
  }

  function decreaseQuan() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const getProduct = async () => {
    try {
      const res = await getSingleProducts(name);
      setProduct(res);
      getImageLink(res);
      allRelatedProduct(res?.categoryId?._id);
    } catch {}
  };

  useEffect(() => {
    getProduct();
  }, [name]);

  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      setImg(item?.colors?.[0]?.img);
    } else {
      setImg(item?.img);
    }
  };

  const allRelatedProduct = async (id) => {
    try {
      const res = await getRelatedProduct(id);
      setRelatedProduct(res.docs);
    } catch {}
  };

  let payload;
  if (colorId) {
    payload = { productId: name, quantity, colorId };
  } else {
    payload = { productId: name, quantity };
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addItemCart(payload);
  };

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
                    src={img}
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
              {product?.colors?.map((item, index) => (
                <div className="item thumb-container" key={index}>
                  <img
                    class="thumb js-thumb  selected "
                    src={item?.img}
                    alt=""
                    onClick={() => setImg(item?.img)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="right-container">
            <div className="block_content">
              <form onSubmit={submitHandler}>
                <h1 class="detail-product-name"> {product?.name} </h1>

                <div className="group-price">
                  <div className="product-price ">
                    <span>
                      {" "}
                      {product?.discountPrice
                        ? `£${product?.discountPrice}`
                        : `£${product?.price}`}{" "}
                    </span>
                  </div>

                  <div className="tax-shipping-delivery-label">
                    Tax included
                  </div>
                </div>

                <div className="product-information">
                  <p>{product?.description}</p>
                </div>

                <div className="pro-cate">
                  <label className="control-label">Categories:</label>
                  <div>
                    <span>
                      <a href="/"> {product?.categoryId?.name} </a>
                    </span>
                  </div>
                </div>

                {product?.colors > 0 || product?.colors ? (
                  <div className="pro-cate mt-2">
                    <label className="control-label">Colors:</label>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {product?.colors?.map((i, index) => (
                        <div
                          className={` ${i._id === colorId}  box  `}
                          tabIndex={0}
                          key={index}
                          onClick={() => setColorId(i._id)}
                        >
                          <div
                            style={{
                              backgroundColor: `${i.color}`,
                              height: "100%",
                              width: "100%",
                              borderRadius: "4px",
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}

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
                        <button
                          className="btn btn-primary add-to-cart"
                          data-button-action="add-to-cart"
                          type="submit"
                        >
                          <span>Add to cart</span>
                        </button>
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
              </form>
            </div>
          </div>
        </div>

        <section className="relate-product">
          <h3 className="title_block">Related products</h3>
          <Product products={relatedProduct} />
        </section>
      </div>
    </div>
  );
};

export default SpecificProduct;
