/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
const BaseUrl = process.env.React_App_Baseurl;

const getAllAddress = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/getAdress`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
    });
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const createAddress = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/addAdress`,
      payload,
      { headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` } }
    );
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

const deleteAddress = async (payload) => {
  try {
    const response = await axios.delete(
      `${BaseUrl}api/v1/user/deleteAdress/${payload}`,
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

export { getAllAddress, createAddress, deleteAddress };
