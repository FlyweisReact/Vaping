/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";
const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const ContactDetail = async () => {
  try {
    const response = await axios.get(
      `${BaseUrl}api/v1/ContactDetails/viewContactDetails`
    );
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const createQuery = async (payload) => {
  try {
    const response = await axios.post(
      `${BaseUrl}api/v1/help/addQuery`,
      payload
    );
    Store.addNotification({
      title: "Success !",
      message: "Our Staff will connect with you soon !",
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

export { ContactDetail, createQuery };
