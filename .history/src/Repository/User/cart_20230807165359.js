/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
import { getCartItems } from "../../Store/Slices/cartSlice";
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

const getCart = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${BaseUrl}api/v1/user/getCart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data.data;
      dispatch(getCartItems(data));
    } catch (e) {
      console.log(e);
    }
  };
};

const addItemCart = (payload) => {
  return async (disatch) => {
    try {
      const response = await axios.post(
        `${BaseUrl}api/v1/user/addToCart`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
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
      disatch(getCart());
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
};

const placeOrder = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/placeOrder/${payload}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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

const deleteProductCart = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${BaseUrl}api/v1/user/deleteProductfromCart/${payload}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
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
      dispatch(getCart());
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
};

const updateQuantityCart = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${BaseUrl}api/v1/user/updateQuantity`,
        payload,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
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
      dispatch(getCart());
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
};

export {
  getCart,
  addItemCart,
  placeOrder,
  getOrder,
  getSize,
  deleteProductCart,
  updateQuantityCart,
};
