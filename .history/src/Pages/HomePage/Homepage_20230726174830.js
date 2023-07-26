/** @format */

import React, { useEffect, useState } from "react";
import BlogSlider from "../../Component/BlogSlider";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { Banners } from "../../Repository/User/Banners";
import { FilterProducts } from "../../Repository/User/Product";
import BannerSlider from "./BannerSlider";

const Homepage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query, setQuery] = useState("NewArrival");
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);
  const [ bottomBanner  , setBottomBanner ] = useState([])

  const getBanner = async () => {
    try {
      const res = await Banners("getMidBanner");
      setBanner(res);
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

  useEffect(() => {
    getProducts();
  }, [query]);

  useEffect(() => {
    getBanner();
    getBottomBanner()
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <BannerSlider />

        <div className="HomePage">
          <div className="Container">
            <div className="Banner_Two_Sec">
              {banner?.map((item, index) => (
                <div className="img-container" key={index}>
                  <img src={item?.bannerImage} alt={item?.bannerName} />
                </div>
              ))}
            </div>

            <div className="categories">
              <div className="Item">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/icon-vape-1.png"
                  alt=""
                />
                <p>STARTER KIT</p>

                <ul>
                  <li>Box Mod Kits</li>
                  <li>Ultra Portable Pod Systems</li>
                  <li>All-In-One Systems</li>
                </ul>
              </div>

              <div className="Item">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/icon-vape-2.png"
                  alt=""
                />
                <p>TANK</p>

                <ul>
                  <li>All Sub-Ohm Tanks</li>
                  <li>Temperature Contro</li>
                  <li>Ceramic Core</li>
                </ul>
              </div>

              <div className="Item">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/icon-vape-3.png"
                  alt=""
                />
                <p>ACCESSORIES</p>

                <ul>
                  <li>Vape Apparel </li>
                  <li>Head Coils</li>
                  <li>Strumenti</li>
                </ul>
              </div>

              <div className="Item">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/icon-vape-4.png"
                  alt=""
                />
                <p>E-liquid</p>

                <ul>
                  <li>Blueberry E-Juice</li>
                  <li>Cherry E-Juice</li>
                  <li>Donut E-Juice</li>
                </ul>
              </div>

              <div className="Item">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/icon-vape-5.png"
                  alt=""
                />
                <p>INSTRUMENTS</p>

                <ul>
                  <li>Coil Master</li>
                  <li>Efest</li>
                  <li>Demon Killer</li>
                </ul>
              </div>

              <div className="Item">
                <img
                  src="	https://demo.bestprestashoptheme.com/vaping/img/cms/icon-vape-6.png"
                  alt=""
                />
                <p>BATTERIES & CHARGERS</p>

                <ul>
                  <li>Box Mod Kits</li>
                  <li>Ultra Portable Pod Systems</li>
                  <li>All-In-One Systems</li>
                </ul>
              </div>
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
            {bottomBanner?.map((item , index) => (
              <a href="#" key={index}>
                <img
                  src={}
                  alt=""
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
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img
                      src="https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/57-home-default.jpg"
                      alt=""
                    />
                  </a>
                  <div className="post-time">
                    <span className="date_day">19</span>
                    <span className="date_month">May</span>
                  </div>
                </div>

                <div className="content-blog">
                  <div className="post_title ">
                    <a href="#">Lorem ipsum dolor sit amet, consectetur</a>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img
                      src="https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/56-home-default.jpg"
                      alt=""
                    />
                  </a>
                  <div className="post-time">
                    <span className="date_day">19</span>
                    <span className="date_month">May</span>
                  </div>
                </div>

                <div className="content-blog">
                  <div className="post_title ">
                    <a href="#">Lorem ipsum dolor sit amet, consectetur</a>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img
                      src="https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/55-home-default.jpg"
                      alt=""
                    />
                  </a>
                  <div className="post-time">
                    <span className="date_day">19</span>
                    <span className="date_month">May</span>
                  </div>
                </div>

                <div className="content-blog">
                  <div className="post_title ">
                    <a href="#">Lorem ipsum dolor sit amet, consectetur</a>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <div className="post-image">
                  <a href="#">
                    <img
                      src="https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/54-home-default.jpg"
                      alt=""
                    />
                  </a>
                  <div className="post-time">
                    <span className="date_day">19</span>
                    <span className="date_month">May</span>
                  </div>
                </div>

                <div className="content-blog">
                  <div className="post_title ">
                    <a href="#">Lorem ipsum dolor sit amet, consectetur</a>
                  </div>
                </div>
              </div>
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
