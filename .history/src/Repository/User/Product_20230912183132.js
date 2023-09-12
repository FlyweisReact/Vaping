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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGUwNGE5MmVmOGU5MmFmNTFkNGMzMCIsImlhdCI6MTY5NDQ5NDY0MSwiZXhwIjoxNjk0NzUzODQxfQ.PbjoSBZpNg0QHBljjgHUSc6WK7d3beNY9abR8MahRXk`,
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

export {
  FilterProducts,
  getSingleProducts,
  getRelatedProduct,
  subCategoryProduct,
  getProductAuth,
};
