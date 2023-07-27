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
    const response = await axios.get(`${BaseUrl}https://krish-vapes-backend.vercel.app/api/v1/user/getCart`, Auth);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const addItemCart = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/addToCart`,
      payload,
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
    const msg = e?.response?.data?.message
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

export { getCart ,addItemCart  };
