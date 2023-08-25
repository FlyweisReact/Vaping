/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { AboutCompany } from "../../Repository/User/about-us";

const About = () => {
  const [data, setData] = useState({});

  const fetchHandler = async () => {
    try {
      const res = await AboutCompany();
      setData(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" AboutUs">
        <img src={data?.aboutusImage} alt="" />
      </div>
      <div className="container-width ">
        {data?.desc?.map((item, index) =>
          item?.title ? (
            <div className="About_Us-Content" key={index}>
              <h5> {item?.title} </h5>
              <p>{item?.desc}</p>
            </div>
          ) : (
            ""
          )
        )}

        <div className="About_Us-two_Sec">
          <div className="left">
            <img src={data?.aboutusImages?.[0]} alt="" />
          </div>
          <div className="right">
            <p>{data?.desc?.[2]?.desc}</p>
          </div>
        </div>

        <div className="About_Us-two_Sec">
          <div className="right">
            <p>{data?.desc?.[3]?.desc}</p>
          </div>
          <div className="left">
            <img src={data?.aboutusImages?.[1]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
