/** @format */

import React, { useState , useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import { AllBlogs } from "../../Repository/User/Blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchHandler = async () => {
    try{
      const res = await AllBlogs()
      setBlogs(res)
    }catch{}
  }

useEffect(() => {
    fetchHandler()
  },[])

  return (
    <div>
      <Navbar />
      <Breadcrumb title={"All Post"} />

      <div className="container-width ">
        <div className="post-container">
        {blogs?.map((item , index ) => (
          
        ))}
          <div className="post">
            <a href="/">
              <img
                src="	https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/57-single-default.jpg"
                alt=""
              />
            </a>

            <div className="sdsarticleHeader">
              <div class="sdstitle_block">
                <a href="/">Lorem ipsum dolor sit amet, consectetur</a>
              </div>
            </div>

            <div class="post-info">
              <span class="datetime">May 19, 2022</span>

              <div className="pipe"></div>

              <span class="comment">
                <i class="fa fa-comment-o"></i>
                <a title="0 Comments" href="/">
                  0 Comments
                </a>
              </span>

              <div className="pipe"></div>
              <span class="viewed">
                <i class="fa fa-eye"></i>Views (89)
              </span>

              <div className="pipe"></div>
              <span itemprop="author" class="author">
                <i class="fa fa-user"></i>
                Vinova Vinova{" "}
              </span>
            </div>

            <div className="post-description">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adminim veniam Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt,
                ipsum nec...{" "}
              </div>

              <span className="more">
                <a
                  title="Lorem ipsum dolor sit amet, consectetur"
                  href="/"
                  class="r_more"
                >
                  Read More
                </a>
              </span>
            </div>
          </div>

    
        </div>
      </div>
    </div>
  );
};

export default Blogs;
