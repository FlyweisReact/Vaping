/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";
import { addItemCart, getSize } from "../../Repository/User/cart";
import {
  getRelatedProduct,
  getSingleProducts,
} from "../../Repository/User/Product";
import { addItemWishlist } from "../../Repository/User/wishlist";

const SpecificProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { name } = useParams();
  const [product, setProduct] = useState({});
  const [img, setImg] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [colorId, setColorId] = useState(null);
  const [size, setSize] = useState(null);
  const [sizeList, setSizeList] = useState(null);
  const dispatch = useDispatch();
  const [ productLoading , setProductLoading ] = useState(false)
  const [ loading , setLoading ] = useState(false)

  function increaeQuan() {
    setQuantity(quantity + 1);
  }

  function decreaseQuan() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const getProduct = async () => {
    setLoading(true)
    try {
      const res = await getSingleProducts(name);
      setProduct(res);
      getImageLink(res);
      allRelatedProduct(res?.categoryId?._id);
      setColorId(res?.colors?.[0]?._id);
      setLoading(true)
    } catch {
      setLoading(true)
    }
  };

  useEffect(() => {
    getProduct();
  }, [name]);

  const getImageLink = (item) => {
    if (item?.colorActive === true) {
      setImg(item?.colors?.[0]?.img);
    } else {
      setImg(item?.img);
    }
  };

  const allRelatedProduct = async (id) => {
    setProductLoading(true)
    try {
      const res = await getRelatedProduct(id);
      setRelatedProduct(res.docs);
      setProductLoading(false)
    } catch {
      setProductLoading(false)
    }
  };

  let payload;
  if (colorId) {
    if (size) {
      payload = { productId: name, quantity, colorId, size };
    } else {
      payload = { productId: name, quantity, colorId };
    }
  } else {
    payload = { productId: name, quantity };
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItemCart(payload));
  };

  const addItemToWishlist = () => {
    addItemWishlist(name);
  };

  const getProductSize = async () => {
    try {
      const res = await getSize(colorId);
      setSizeList(res);
      setSize(res?.colorSize?.[0]?.size);
    } catch {}
  };

  useEffect(() => {
    getProductSize();
  }, [colorId]);

  return (
    <div>
      <Navbar />
      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Vaping </a>
            </li>
            <li>
              <a href="/"> {product?.name} </a>
            </li>
          </ol>
        </div>
      </div>

      {/* ---------------- */}

      <div className="container-width ">
        <div className="thumb-v4">

        {loading ? <> </> : <></>}

      
        </div>

        <section className="relate-product">
          <h3 className="title_block">Related products</h3>
          <Product products={relatedProduct} loading={productLoading} />
        </section>
      </div>
    </div>
  );
};

export default SpecificProduct;
