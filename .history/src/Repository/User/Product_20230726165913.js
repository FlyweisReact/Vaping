/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";
const token = localStorage.getItem("Token");
const Auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const FilterProducts = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Product/all/${query}`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};


export {FilterProducts }