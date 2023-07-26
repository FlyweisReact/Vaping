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
          {images?.map((img, index) => (
            <div className="Main" key={index}>
              <img
                src={img?.bannerImage}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
