/** @format */
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { TopBanner } from "../../Repository/User/Banners";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const [images, setImages] = useState([]);

  const getBanner = async () => {
    try {
      const res = await TopBanner("getTopBanner");
      setImages(res);
    } catch {}
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      <div className="Banner_Slider_Container">
        <Slider {...settings} className="Banner_Slider">
        {images?.map(())}
          <div className="Main">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/modules/novnivoslider/images/9ce1ccf9d4f214799df07ca900c1cfa02e597aa5_slide1-1.jpg"
              alt=""
            />
          </div>
          <div className="Main">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/modules/novnivoslider/images/6191c51aedda3818bb0f40cf24e9538e787ad956_slide1-2.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
