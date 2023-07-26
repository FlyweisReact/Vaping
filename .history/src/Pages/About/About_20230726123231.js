/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" AboutUs">
        <img
          src="https://demo.bestprestashoptheme.com/vaping/modules/novnivoslider/images/a655ddd43767e32ba4e85dd399cad31aa32bfe30_slide3-2.jpg"
          alt=""
        />
      </div>
      <div className="container-width ">
        <div className="About_Us-Content">
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus
            lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et
            augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae;{" "}
          </p>
        </div>

        <div className="About_Us-Content">
          <h5>Lorem Ipsum</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis
            pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur
            id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum
            bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam
            nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus
            lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et
            augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae;{" "}
          </p>
        </div>

        <div className="About_Us-two_Sec">
          <div className="left">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/modules/novnivoslider/images/f8fb50bd9c66846c67011be1c31d8cd558ed4fdc_slide2-1.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nulla ultricies diam et felis ornare, sit amet posuere eros
              blandit. Praesent nunc urna, pharetra non mauris consectetur,
              aliquam vestibulum nisi. Mauris tellus lectus, ultricies non quam
              .{" "}
            </p>
          </div>
        </div>

        <div className="About_Us-two_Sec">
          <div className="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nulla ultricies diam et felis ornare, sit amet posuere eros
              blandit. Praesent nunc urna, pharetra non mauris consectetur,
              aliquam vestibulum nisi. Mauris tellus lectus, ultricies non quam
              .{" "}
            </p>
          </div>
          <div className="left">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/54-single-default.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
