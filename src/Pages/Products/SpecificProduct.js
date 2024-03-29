/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { addItemCart, getSize } from "../../Repository/User/cart";
import {
  getRelatedProduct,
  getSingleProducts,
} from "../../Repository/User/Product";
import { addItemWishlist } from "../../Repository/User/wishlist";
import { Skeleton } from "antd";
import Breadcrumb from "../../Component/Breadcrumb";

const SpecificProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [colorId, setColorId] = useState(null);
  const [size, setSize] = useState(null);
  const [sizeList, setSizeList] = useState(null);
  const dispatch = useDispatch();
  const [productLoading, setProductLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  function increaeQuan() {
    setQuantity(quantity + 1);
  }

  function decreaseQuan() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await getSingleProducts(name);
      setProduct(res);
      getImageLink(res);
      allRelatedProduct(res?.categoryId?._id);
      setColorId(res?.colors?.[0]?._id);
      setLoading(false);
    } catch {
      setLoading(false);
    }
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
    setProductLoading(true);
    try {
      const res = await getRelatedProduct(id);
      setRelatedProduct(res.docs);
      setProductLoading(false);
    } catch {
      setProductLoading(false);
    }
  };

  let payload;
  if (colorId) {
    if (size) {
      payload = { productId: name, quantity, colorId, size };
    } else {
      payload = { productId: name, quantity, colorId };
    }
  } else {
    payload = { productId: name, quantity };
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItemCart(payload));
  };

  const addItemToWishlist = () => {
    addItemWishlist(name);
  };

  const getProductSize = async () => {
    try {
      const res = await getSize(colorId);
      setSizeList(res);
      setSize(res?.colorSize?.[0]?.size);
    } catch {}
  };

  useEffect(() => {
    getProductSize();
  }, [colorId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <div>
      <Navbar />
      <Breadcrumb title={product?.name} link={`/product/${name}`} />
      <div className="container-width ">
        <div className="thumb-v4">
          {loading ? (
            <>
              <div className="left-container">
                <div className="images-container thumb-bottom">
                  <div className="product-cover">
                    <Skeleton loading={true} active />
                    <Skeleton loading={true} active />
                    <Skeleton loading={true} active />
                  </div>
                </div>

                <div className="product-list ">
                  <div className="item thumb-container">
                    <Skeleton.Image loading={true} active />
                  </div>
                  <div className="item thumb-container">
                    <Skeleton.Image loading={true} active />
                  </div>
                  <div className="item thumb-container">
                    <Skeleton.Image loading={true} active />
                  </div>
                </div>
              </div>

              <div className="right-container">
                <div className="block_content">
                  <form>
                    <h1 className="detail-product-name">
                      <Skeleton.Input loading={true} active />
                    </h1>

                    <div className="group-price">
                      <div className="product-price ">
                        <span>
                          <Skeleton.Input loading={true} active />
                        </span>
                      </div>
                    </div>

                    <div className="product-information">
                      <Skeleton loading={true} active />
                    </div>

                    <div className="pro-cate">
                      <div>
                        <span>
                          <a href="/">
                            {" "}
                            <Skeleton.Node loading={true} active />{" "}
                          </a>
                        </span>
                        <span>
                          <a href="/">
                            {" "}
                            <Skeleton.Node loading={true} active />{" "}
                          </a>
                        </span>
                      </div>
                    </div>

                    <Skeleton loading={true} active className="mt-5" />
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
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
                        className="thumb js-thumb  selected "
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
                    <h1 className="detail-product-name"> {product?.name} </h1>

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
                        Tax Excluded
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

                    {product?.colors?.length === 0 || !product?.colors ? (
                      ""
                    ) : (
                      <div className="pro-cate mt-2">
                        <label className="control-label">Colors:</label>
                        <div style={{ display: "flex", gap: "10px" }}>
                          {product?.colors?.map((i, index) => (
                            <div
                              className={` ${
                                i._id === colorId ? "active" : ""
                              }  box  `}
                              tabIndex={0}
                              key={index}
                              onClick={() => {
                                getProductSize(i._id);
                                setColorId(i._id);
                                setImg(i.img);
                              }}
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
                    )}

                    {sizeList?.colorSize?.length === 0 ||
                    !sizeList?.colorSize ? (
                      ""
                    ) : (
                      <div className="product-variants-item">
                        <span className="control-label">Size : </span>
                        <ul id="group_1">
                          {sizeList?.colorSize?.map((i, index) => (
                            <li
                              className="input-container pull-xs-left"
                              key={index}
                            >
                              <input
                                className={`input-radio ${
                                  size === i.size ? "active" : ""
                                }`}
                                type="radio"
                                data-product-attribute="1"
                                name="group[1]"
                                onClick={() => setSize(i.size)}
                              />
                              <span
                                className="radio-label"
                                onClick={() => setSize(i.size)}
                              >
                                {" "}
                                {i.size}{" "}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                                placeholder={quantity}
                                disabled
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
                          <div className="add">
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
                          <a
                            className="addToWishlist"
                            style={{ cursor: "pointer" }}
                            onClick={() => addItemToWishlist()}
                          >
                            <i className="fa-regular fa-heart"></i>
                            <span>Add to wishlist</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>

        <section className="relate-product">
          <h3 className="title_block">Related products</h3>
          <Product products={relatedProduct} loading={productLoading} />
        </section>
      </div>
    </div>
  );
};

export default SpecificProduct;
