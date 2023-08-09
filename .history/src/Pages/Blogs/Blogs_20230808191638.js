/** @format */

import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { AllBlogs } from "../../Repository/User/Blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchHandler = async () => {
    try {
      const res = await AllBlogs();
      setBlogs(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <Navbar />
      <Breadcrumb title={"All Post"} />

      <div className="container-width ">
        <div className="post-container">
          {blogs?.map((item, index) => (
            <div className="post" key={index}>
              <a href="/">
                <img src={item?.image} alt={item?.title} />
              </a>

              <div className="sdsarticleHeader">
                <div className="sdstitle_block">
                  <a href="/"> {item?.title} </a>
                </div>
              </div>

              <div className="post-info">
                <span className="datetime"> {item?.date?.slice(0, 10)} </span>

                <div className="pipe"></div>

                <span className="comment">
                  <i className="fa fa-comment-o"></i>
                  <a title="0 Comments" href="/">
                    {item?.commentCount} Comments
                  </a>
                </span>

                <div className="pipe"></div>
                <span class="viewed">
                  <i class="fa fa-eye"></i>Views ( {item?.viewCount} )
                </span>

                <div className="pipe"></div>
                <span itemprop="author" class="author">
                  <i class="fa fa-user"></i>
                  {item?.userId?.fullName}
                </span>
              </div>

              <div className="post-description">
                <div>{item?.description}</div>

                {/* <span className="more">
                  <a
                    title="Lorem ipsum dolor sit amet, consectetur"
                    href="/"
                    class="r_more"
                  >
                    Read More
                  </a>
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;