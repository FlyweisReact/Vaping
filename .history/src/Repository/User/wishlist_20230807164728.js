/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";
const token = localStorage.getItem("Token");

const getWishlit = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/myWishlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.wishlist.products;
  } catch (e) {
    console.log(e);
  }
};

const deleteWishlit = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/removeFromWishlist/${payload}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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

const addItemWishlist = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/createWishlist/${payload}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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

export { getWishlit, addItemWishlist, deleteWishlit };
