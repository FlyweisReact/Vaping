/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const AboutCompany = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Banner/${query}`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { Banners };
