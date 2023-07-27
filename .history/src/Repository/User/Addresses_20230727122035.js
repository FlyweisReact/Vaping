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


const createAddress = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/addAdress`, Auth);
    const message = response.data.message
    Store.addNotification({
        title: "Success !",
        message: message,
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
  }
};




export { getAllAddress };
