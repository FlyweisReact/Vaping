/** @format */
import { Store } from "react-notifications-component";
import axios from "axios";
import { Login, UPDATE_PROFILE } from "../../Store/Slices/authSlice";

const BaseUrl = process.env.React_App_Baseurl;

const RegisterUser = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/registration`,
      payload
    );

    Store.addNotification({
      title: " ",
      message: "Request Pending, we will revert to you after vat verification",
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
      const data = response.data.data;
      localStorage.setItem("Token", response.data.accessToken);
      dispatch(Login(data));
      localStorage.setItem(
        "AddressUser",
        JSON.stringify(response.data.Address)
      );
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

const GetOtp = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/forgetPassword`,
      payload
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
    navigate("/recover-password");
  } catch (e) {
    console.log(e);
    const msg = e?.response?.data?.msg;
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

const ResetPassword = async (payload, navigate) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/user/changePassword`,
      payload
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
    navigate("/login");
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

export { RegisterUser, LoginUser, UpdateUser, GetOtp, ResetPassword };
