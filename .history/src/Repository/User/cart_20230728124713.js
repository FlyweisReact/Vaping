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


const getSize = async (payload) => {
  try {
    const response = await axios.get(
      `${BaseUrl}api/v1/Product/color/${payload}`
    );
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const getCart = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/getCart`, Auth);
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

const placeOrder = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/checkout`,
      payload,
      Auth
    );
    Store.addNotification({
      title: "Success !",
      message: "Order Has Been Placed Successfully",
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

const getOrder = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/Orders`, Auth);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const deleteProductCart = async (payload) => {
  console.log
  try {
    const response = await axios.delete(
      `${BaseUrl}api/v1/user/deleteProductfromCart`,
      payload,
      Auth
    );
    console.log(Auth)
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
    console.log(e);
    const msg = e.response.data.message;
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

export {
  getCart,
  addItemCart,
  placeOrder,
  getOrder,
  getSize,
  deleteProductCart,
};
