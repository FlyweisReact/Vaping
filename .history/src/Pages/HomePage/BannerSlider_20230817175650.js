/** @format */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      setImages(res);
    } catch {}
  };

  useEffect(() => {
    getBanner();
  }, []);

  console.log(images)

  return (
    <>
      <div className="Banner_Slider_Container">
        <Slider {...settings} className="Banner_Slider">
          {images?.map((img, index) => (
            <div className="Main" key={index}>
            {img.productId ? 
             <Link to={`/product/${img.productId}`}  :        <img src={img?.bannerImage} alt={img?.bannerName} />
            }
            
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
