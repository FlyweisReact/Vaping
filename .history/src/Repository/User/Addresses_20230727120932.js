/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const getAllAddress = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/user/getAdress`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { getAllAddress };
