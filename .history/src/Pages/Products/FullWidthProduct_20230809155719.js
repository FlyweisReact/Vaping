/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Pagination from "../../Component/Pagination";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { subCategoryProduct } from "../../Repository/User/Product";

const FullWidthProduct = () => {
  const { id, name } = useParams();
  const [product, setProduct] = useState([]);

  const fetchHandler = async () => {
    try {
      const res = await subCategoryProduct(id);
      setProduct(res.docs);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, [id]);

  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={name} />
        <div className="container-width ">
          <div className="products-selection">
            <div className="product-list-fiter">
              <span className="toggle_filter ">
                <i className="fa-solid fa-sliders"></i>
                <span> FILTER</span>
              </span>
              <span className="toggle_filter ">
                |<span> There are {product?.length} products related to {name}</span>
              </span>
            </div>
          </div>

          <Product products={product} />
        </div>

        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default FullWidthProduct;