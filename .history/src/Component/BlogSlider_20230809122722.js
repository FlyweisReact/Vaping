/** @format */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { AllBlogs } from "../Repository/User/Blogs";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await AllBlogs();
      setBlogs(res.slice(0,4));
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
          {blogs?.map((item, index) => (
            <div className="post-item" key={index}>
              <div className="post-image">
                <a href="#">
                  <img src={item?.image} alt={item?.title} />
                </a>
                <div className="post-time">
                  <span className="date_day"> {item?.date?.slice(8, 10)} </span>
                  <span className="date_month">{item?.date?.slice(5, 7)}</span>
                </div>
              </div>

              <div className="content-blog">
                <div className="post_title ">
                  <a href="#"> {item?.title} </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlogSlider;
