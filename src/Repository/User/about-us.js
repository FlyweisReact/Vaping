/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const AboutCompany = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/AboutUs/all`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { AboutCompany };
