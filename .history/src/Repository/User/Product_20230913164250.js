/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const FilterProducts = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Product/all/${query}`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const getProductAuth = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Product/all/${query}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const getSingleProducts = async (id) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Product/${id}`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const getRelatedProduct = async (id) => {
  try {
    const response = await axios.get(
      `${BaseUrl}api/v1/Product/all/paginateProductSearch?categoryId=${id}`
    );
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const subCategoryProduct = async (id) => {
  try {
    const response = await axios.get(
      `${BaseUrl}api/v1/Product/all/paginateProductSearch?subcategoryId=${id}`
    );
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const getAd = async () => {
  try{

    const response = await axios.get(`${BaseUrl}`)

  }catch{

  }
}


export {
  FilterProducts,
  getSingleProducts,
  getRelatedProduct,
  subCategoryProduct,
  getProductAuth,
};
