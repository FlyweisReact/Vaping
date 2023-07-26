/** @format */

import React from "react";
import BlogSlider from "../../Component/BlogSlider";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import BannerSlider from "./BannerSlider";

const Homepage = () => {
  React.useEffect(() => {
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
              <div className="img-container">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-1.jpg"
                  alt=""
                />
              </div>
              <div className="img-container">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-2.jpg"
                  alt=""
                />
              </div>
              <div className="img-container">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-3.jpg"
                  alt=""
                />
              </div>
              <div className="img-container">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-4.jpg"
                  alt=""
                />
              </div>
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
              <button className="active">New Arrivals</button>
              <button>Bestseller</button>
              <button>On Sale</button>
            </div>

            <Product />

            <div className="Banner_Img">
              <a href="#">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn_1_0.jpg"
                  alt=""
                />
              </a>
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
