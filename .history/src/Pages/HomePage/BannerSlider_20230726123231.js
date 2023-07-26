/** @format */

import Slider from "react-slick";


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

  return (
    <>
      <div className="Banner_Slider_Container">
        <Slider {...settings} className="Banner_Slider">
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
