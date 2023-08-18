/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Component/Breadcrumb";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { subCategoryProduct } from "../../Repository/User/Product";

const FullWidthProduct = () => {
  const { id, name } = useParams();
  const [product, setProduct] = useState([]);

  const fetchHandler = useCallback(async () => {
    try {
      const res = await subCategoryProduct(id);
      setProduct(res.docs);
    } catch {}
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);


  useEffect(() => {
    window.scrollTo(0,0)
  },[])

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
                |<span> There are {product?.length} products.</span>
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
