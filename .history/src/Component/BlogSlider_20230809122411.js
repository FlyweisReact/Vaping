/** @format */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { AllBlogs } from "../Repository/User/Blogs";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await AllBlogs();
      setBlogs(res);
    } catch {}
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
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
        </Slider>
      </div>
    </>
  );
};

export default BlogSlider;
