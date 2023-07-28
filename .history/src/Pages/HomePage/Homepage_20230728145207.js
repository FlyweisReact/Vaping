/** @format */

import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import BlogSlider from "../../Component/BlogSlider";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { Banners } from "../../Repository/User/Banners";
import { AllBlogs } from "../../Repository/User/Blogs";
import { AllSubCat } from "../../Repository/User/Cat";
import { FilterProducts } from "../../Repository/User/Product";
import BannerSlider from "./BannerSlider";

const Homepage = () => {
  const [query, setQuery] = useState("NewArrival");
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [bottomBanner, setBottomBanner] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [bannerloading, setBannerLoading] = useState(true);

  const getBanner = async () => {
    setBannerLoading(true);
    try {
      const res = await Banners("getMidBanner");
      setBanner(res);
      setBannerLoading(true);
    } catch {}
  };

  const getBottomBanner = async () => {
    try {
      const res = await Banners("getBottomBanner");
      setBottomBanner(res);
    } catch {}
  };

  const getProducts = async () => {
    try {
      const response = await FilterProducts(query);
      setProducts(response);
    } catch {}
  };

  const getBlogs = async () => {
    try {
      const res = await AllBlogs();
      setBlogs(res?.slice(0, 4));
    } catch {}
  };

  const getSubCategories = async () => {
    try {
      const res = await AllSubCat();
      setSubCategory(res);
    } catch {}
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  useEffect(() => {
    getBanner();
    getBottomBanner();
    getBlogs();
    getSubCategories();
  }, []);


  return (
    <>
      <div>
        <Navbar />
        <BannerSlider />

        <div className="HomePage">
          <div className="Container">
            <div className="Banner_Two_Sec">
              {bannerloading === true ? 

                <div className="img-container">
                {console.log("Dasdas")}
                  <Skeleton loading={true} active />
                </div>
              ) : (
                banner?.map((item, index) => (
                  <div className="img-container" key={index}>
                  {console.log("fff")}
                    <img src={item?.bannerImage} alt={item?.bannerName} />
                  </div>
                ))
              )}
            </div>

            <div className="categories">
              {subCategory?.map((item, index) => (
                <div className="Item" key={index}>
                  <img src={item?.category?.image} alt={item?.category?.name} />
                  <p> {item?.category?.name} </p>

                  <ul>
                    {item?.subCategory?.map((list) => (
                      <li key={list?.categoryId}> {list?.name} </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="Heading-Container">
              <h2>
                <span>Our Products</span>
              </h2>
            </div>

            <div className="switch_btn">
              <button
                className={query === "NewArrival" ? "active" : ""}
                onClick={() => setQuery("NewArrival")}
              >
                New Arrivals
              </button>
              <button
                className={query === "BestSeller" ? "active" : ""}
                onClick={() => setQuery("BestSeller")}
              >
                Bestseller
              </button>
              <button
                className={query === "getOnSale" ? "active" : ""}
                onClick={() => setQuery("getOnSale")}
              >
                On Sale
              </button>
            </div>

            <Product products={products} />

            <div className="Banner_Img">
              {bottomBanner?.map((item, index) => (
                <a href="#" key={index}>
                  <img
                    src={item?.bannerImage}
                    alt={item?.bannerName}
                    className="mt-2"
                  />
                </a>
              ))}
            </div>

            <div className="Heading-Container">
              <h2>
                <span>Latest Blogs</span>
              </h2>
            </div>

            <div className="Blog-posts">
              {blogs?.map((item, index) => (
                <div className="post-item" key={index}>
                  <div className="post-image">
                    <a href="#">
                      <img src={item?.image} alt={item?.title} />
                    </a>
                    <div className="post-time">
                      <span className="date_day">
                        {" "}
                        {item?.date?.slice(8, 10)}{" "}
                      </span>
                      <span className="date_month">
                        {item?.date?.slice(5, 7)}
                      </span>
                    </div>
                  </div>

                  <div className="content-blog">
                    <div className="post_title ">
                      <a href="#"> {item?.title} </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="Blog-post-mobile">
              <BlogSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
