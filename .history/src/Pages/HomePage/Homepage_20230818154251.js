/** @format */
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [blogLoading, setBlogLoading] = useState(false);

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
      setBlogLoading(false);
    } catch {
      setBlogLoading(false);
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

  const [search, setSearch] = useState("");

  const searchD = !search
    ? products
    : products?.filter((i) =>
        i?.name?.toLowerCase().includes(search?.toLowerCase())
      );

  useEffect(() => {
    window.scrollTo(0, 0);
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
                      {item?.subcategoryId?._id ? (
                        <Link to={`/category_product/${img?.subcategoryId?._id}/${img?.subcategoryId?.name}`}>
                          <img src={item?.bannerImage} alt={item?.bannerName} />
                        </Link>
                      ) : (
                        <img src={item?.bannerImage} alt={item?.bannerName} />
                      )}
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
                          <Link
                            to={`/category_product/${list._id}/${list.name}`}
                            style={{ textDecoration: "none" }}
                            key={list._id}
                          >
                            <li key={list?.categoryId}> {list?.name} </li>
                          </Link>
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

            <div className="search-cont">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Enter Search Keyword"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <Product products={searchD} loading={productLoading} />

            <div className="Banner_Img">
              {bigBanner ? (
                <a>
                  <Skeleton loading={true} active />
                </a>
              ) : (
                bottomBanner?.map((item, index) =>
                  item?.subcategoryId?._id ? (
                    <Link to={`/category_product/${item?.subcategoryId?._id}/${img?.subcategoryId?.name}`} key={index} >
                      <img
                        src={item?.bannerImage}
                        alt={item?.bannerName}
                        className="mt-2"
                      />
                    </Link>
                  ) : (
                    <img
                      src={item?.bannerImage}
                      alt={item?.bannerName}
                      className="mt-2"
                      key={index}
                    />
                  )
                )
              )}
            </div>

            <div className="Heading-Container">
              <h2>
                <span>Latest Blogs</span>
              </h2>
            </div>

            <div className="Blog-posts">
              {blogLoading
                ? [1, 2, 3].map((index) => (
                    <div className="post-item" key={index}>
                      <Skeleton loading={true} active />
                    </div>
                  ))
                : blogs?.map((item, index) => (
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
