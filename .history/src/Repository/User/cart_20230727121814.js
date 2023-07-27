/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const token = localStorage.getItem("Token");
const Auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const getCart = async () => {
  try {
    const response = await axios.post(`${BaseUrl}api/v1/user/addToCart`, Auth);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { getCart };
