/** @format */

import axios from "axios";

const BaseUrl = process.env.React_App_Baseurl;

const Banners = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Banner/${query}`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { Banners };
