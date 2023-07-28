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
  const [bannerloading, setBannerLoading] = useState(false);
  const [subCatloading, setSubCatLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [bigBanner, setBigBanner] = useState(false);
  const [blogLoading, setBlogLoading] = useState(true);

  const getBanner = async () => {
    setBannerLoading(true);
    try {
      const res = await Banners("getMidBanner");
      setBanner(res);
      setBannerLoading(false);
    } catch {
      setBannerLoading(false);
    }
  };

  const getBottomBanner = async () => {
    setBigBanner(true);
    try {
      const res = await Banners("getBottomBanner");
      setBottomBanner(res);
      setBigBanner(false);
    } catch {
      setBigBanner(false);
    }
  };

  const getProducts = async () => {
    setProductLoading(true);
    try {
      const response = await FilterProducts(query);
      setProducts(response);
      setProductLoading(false);
    } catch {
      setProductLoading(false);
    }
  };

  const getBlogs = async () => {
    setBlogLoading(true);
    try {
      const res = await AllBlogs();
      setBlogs(res?.slice(0, 4));
      setBlogLoading(true);
    } catch {
      setBlogLoading(true);
    }
  };

  const getSubCategories = async () => {
    setSubCatLoading(true);
    try {
      const res = await AllSubCat();
      setSubCategory(res);
      setSubCatLoading(false);
    } catch {
      setSubCatLoading(false);
    }
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
              {bannerloading
                ? [1, 2, 3, 4].map((i) => (
                    <div className="img-container" key={i}>
                      <Skeleton loading={true} active />
                    </div>
                  ))
                : banner?.map((item, index) => (
                    <div className="img-container" key={index}>
                      <img src={item?.bannerImage} alt={item?.bannerName} />
                    </div>
                  ))}
            </div>

            <div className="categories">
              {subCatloading
                ? [1, 2, 3, 4, 5, 6].map((i) => (
                    <div className="Item" key={i}>
                      <Skeleton.Image loading={true} active />
                    </div>
                  ))
                : subCategory?.map((item, index) => (
                    <div className="Item" key={index}>
                      <img
                        src={item?.category?.image}
                        alt={item?.category?.name}
                      />
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

            <Product products={products} loading={productLoading} />

            <div className="Banner_Img">
              {bigBanner ? (
                <a>
                  <Skeleton loading={true} active />
                </a>
              ) : (
                bottomBanner?.map((item, index) => (
                  <a href="#" key={index}>
                    <img
                      src={item?.bannerImage}
                      alt={item?.bannerName}
                      className="mt-2"
                    />
                  </a>
                ))
              )}
            </div>

            <div className="Heading-Container">
              <h2>
                <span>Latest Blogs</span>
              </h2>
            </div>

            <div className="Blog-posts">
              {blogLoading ? (
                <div className="post-item">
                  <div className="post-image">
                    <a href="#">
                      <
                    </a>
                    <div className="post-time">
                      <span className="date_day"></span>
                      <span className="date_month"></span>
                    </div>
                  </div>

                  <div className="content-blog">
                    <div className="post_title ">
                      <a href="#"> </a>
                    </div>
                  </div>
                </div>
              ) : (
                blogs?.map((item, index) => (
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
                ))
              )}
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
