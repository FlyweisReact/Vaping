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

const getAllAddress = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/getAdress`, Auth);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const createAddress = async (payload) => {
  try {
    const response = await axios.post(`${BaseUrl}api/v1/user/addAdress` , payload , Auth);
    const msg = response.data.message;
    Store.addNotification({
      title: "Created !",
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
    console.log(e);
    const err = e?.response?.data?.message;
    Store.addNotification({
      title: "Error !",
      message: err,
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

export { getAllAddress  , createAddress};
