/** @format */

import axios from "axios";

const BaseUrl = process.env.React_App_Baseurl;

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

const getAd = async (data) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Notification`);
    data(response.data.data);
  } catch {}
};

export {
  FilterProducts,
  getSingleProducts,
  getRelatedProduct,
  subCategoryProduct,
  getProductAuth,
  getAd,
};
