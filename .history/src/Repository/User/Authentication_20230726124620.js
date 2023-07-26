/** @format */
import { Store } from "react-notifications-component";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";
const token = localStorage.getItem("Token");
const Auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const RegisterHandler = async () => {
  try {
  } catch (e) {
    const msg = e.response.data.message
    Store.addNotification({
      title: "Invalid !",
      message: "",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  }
};
