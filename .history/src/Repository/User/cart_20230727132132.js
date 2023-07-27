/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
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


const addItemCart = async (payload) => {
  try {
    const response = await axios.post(`${BaseUrl}api/v1/user/addToCart` , payload, Auth);
    const msg = response.data.message

  } catch (e) {
    console.log(e);
  }
};

export { getCart };
