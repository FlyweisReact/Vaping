/** @format */
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Banners } from "../../Repository/User/Banners";

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
      const res = await Banners("getTopBanner");
      setImages(res.slice(0));
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
              <img src={img?.bannerImage} alt={img?.bannerName} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
