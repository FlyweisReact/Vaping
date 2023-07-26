/** @format */
import { Store } from "react-notifications-component";
import axios from "axios";
import { Login } from "../../Store/Slices/authSlice";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";
const token = localStorage.getItem("Token");
const Auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const RegisterUser = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/registration`,
      payload
    );
    return response;
  } catch (e) {
    const msg = e?.response?.data?.message;
    Store.addNotification({
      title: "Invalid !",
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

export const LoginUser = async (payload) => {
  return async (dispatch) => {
    try {
      const  response  = await axios.post(
        `${BaseUrl}api/v1/user/login`,
        payload
      );
 
      dispatch(Login(data));
    } catch (e) {
      const msg = e.response.data.message;
      Store.addNotification({
        title: "Invalid !",
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
