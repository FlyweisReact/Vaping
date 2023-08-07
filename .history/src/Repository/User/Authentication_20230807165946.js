/** @format */
import { Store } from "react-notifications-component";
import axios from "axios";
import { Login, UPDATE_PROFILE } from "../../Store/Slices/authSlice";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";
const token = localStorage.getItem("Token");

const RegisterUser = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/registration`,
      payload
    );
    const msg = response.message;
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
    alert("Request Pending, we will revert to you after vat verification");
    navigate("/");
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

const LoginUser = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BaseUrl}api/v1/user/login`, payload);
      if (response.data.status === 201) {
        alert(response.data.message);
        navigate("/");
      } else {
        const data = response.data.data;
        localStorage.setItem("Token", response.data.accessToken);
        dispatch(Login(data));
        Store.addNotification({
          title: "Success !",
          message: "Welcome Back",
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
        navigate("/identity");
      }
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
};

const UpdateUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${BaseUrl}api/v1/user/update`,
        payload,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );
      const data = response.data.data;
      dispatch(UPDATE_PROFILE(data));
      Store.addNotification({
        title: "Updated !",
        message: "Profile Updated",
        type: "info",
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

export { RegisterUser, LoginUser, UpdateUser };
