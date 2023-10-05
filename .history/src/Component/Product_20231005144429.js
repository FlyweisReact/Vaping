/** @format */
import { Skeleton } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItemCart, updateQuantityCart } from "../Repository/User/cart";
import { isAuthenticated } from "../Store/Slices/authSlice";
import Rating from "./Rating";

const Product = ({ products, loading, productFetching }) => {
  const quantity = 1;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuthenticated);

  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      return item?.colors?.[0]?.img;
    } else {
      return item?.img;
    }
  };

  const submitHandler = async (productId, colorId, size) => {
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
    await dispatch(addItemCart(payload));
    productFetching();
  };

  const updateProductQuantity = async (products_id, quantity) => {
    const payload = { products_id, quantity };
    await dispatch(updateQuantityCart(payload));
    productFetching();
  };

  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(28);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const slicedData = products?.slice(0, lastPostIndex2);

  console.log(slicedData)

  return slicedData?.length > 0 ? (
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
      <>
        <div className="products-container">
          {slicedData?.map((item, index) => (
            <div className="Main" key={index}>
              <div className="thumbnail">
                {isLoggedIn ? (
                  <Link to={`/product/${item?._id}`}>
                    <img src={getImageLink(item)} alt={item?.name} />
                  </Link>
                ) : (
                  <Link to="/login">
                    <img src={getImageLink(item)} alt={item?.name} />
                  </Link>
                )}
              </div>
              <div className="product-groups">
                <div className="product-description">
                  <div className="product-title">
                    {isLoggedIn ? (
                      <Link to={`/product/${item?._id}`}>{item?.name}</Link>
                    ) : (
                      <Link to="/login">{item?.name}</Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="product-comments">
                <Rating rating={item.ratings} />
              </div>

              <div className="product-group-price">
                {isLoggedIn ? (
                  <div className="product-price-and-shipping">
                    <span className="price">
                      {item.discount === false
                        ? `£${item?.price}`
                        : `£ ${item?.discountPrice}`}
                    </span>
                    <span className="regular-price">
                      {" "}
                      {item.discount === false ? `` : `£${item?.price}`}{" "}
                    </span>
                  </div>
                ) : (
                  <div className="product-price-and-shipping">
                    <span className="price">Please Login To See The Price</span>
                  </div>
                )}
              </div>

              {item?.isInCart === true ? (
                <div className="group-buttons">
                  <div className="product-buttons">
                    <span
                      className="qty"
                      style={{
                        display: "flex",
                        margin: "auto",
                        marginTop: "10px",
                      }}
                    >
                      <span className="input-group">
                        <input
                          type="text"
                          id="quantity_wanted"
                          min="1"
                          value={item.quantityInCart}
                        />
                        <span className="input-group-btn-vertical">
                          <button
                            className="button-minus"
                            type="button"
                            onClick={() =>
                              item.quantityInCart > 1
                                ? updateProductQuantity(
                                    item._id,
                                    item.quantityInCart - 1
                                  )
                                : ""
                            }
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <button
                            className="button-plus"
                            type="button"
                            onClick={() =>
                              updateProductQuantity(
                                item._id,
                                item.quantityInCart + 1
                              )
                            }
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="group-buttons">
                  <div className="product-buttons">
                    {item?.status === "STOCK" ? (
                      isLoggedIn ? (
                        <a
                          onClick={() =>
                            submitHandler(
                              item._id,
                              item?.colors?.[0]?._id,
                              item?.colors?.[0]?.colorSize?.[0]?.size
                            )
                          }
                        >
                          <i className="fa-solid fa-bag-shopping"></i>
                          <span>Add To cart</span>
                        </a>
                      ) : (
                        <Link to="/login">
                          {" "}
                          <i className="fa-solid fa-bag-shopping"></i>
                          <span>Add To cart</span>
                        </Link>
                      )
                    ) : (
                      <a href="#">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>out of stock</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="switch_btn mb-4">
          <button
            className="active"
            onClick={() => setCurrentPage2(currentPage2 + 1)}
          >
            View More
          </button>
        </div>
      </>
    )
  ) : (
    <>
      <div className="Not-Found-Div">
          <img src="/Image/1.png" alt="notFound" />
        </div>)}
    </>
  );
};

export default Product;
