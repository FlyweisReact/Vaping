  /** @format */
  import { Store } from "react-notifications-component";
  import axios from "axios";
  import { Login } from "../../Store/Slices/authSlice";
  import { useNavigate } from "react-router-dom";

  const BaseUrl = "https://krish-vapes-backend.vercel.app/";
  const token = localStorage.getItem("Token");
  const Auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  export  const RegisterUser = async (payload) => {
    const navigate = useNavigate();
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

  const LoginUser = (payload) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${BaseUrl}api/v1/user/login`, payload);
        const data = response.data;
        localStorage.setItem("Token", response.accessToken);
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
        navigate("/login");
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

  export {  LoginUser };
