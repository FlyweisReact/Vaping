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

const getWishlit = async () => {
  try {
    const response = await axios.get(
      `${BaseUrl}api/v1/user/myWishlist`
    );
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const addItemWishlist = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/createWishlist/${payload}`,
      {},
      Auth
    );
    const msg = response.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e?.response?.data?.message;
    Store.addNotification({
      title: "Error !",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  }
};

export { getWishlit, addItemWishlist };
