/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Pagination from "../../Component/Pagination";
import Navbar from "../../Navbar/Navbar";

const FullWidthProduct = () => {
  return (
    <>
     <div>
     <Navbar />
     <Breadcrumb title={'E-Liquid'} />
      <div className="container-width ">
        <div className="products-selection">
          <div className="product-list-fiter">
            <span className="toggle_filter ">
              <i className="fa-solid fa-sliders"></i>
              <span> FILTER</span>
            </span>
            <span className="toggle_filter ">
              |<span> There are 12 products.</span>
            </span>
          </div>
        </div>


        <Pr
    
      </div>

      <Pagination />
     </div>
    </>
  );
};

export default FullWidthProduct;
