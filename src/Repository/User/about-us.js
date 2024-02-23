/** @format */

import axios from "axios";

const BaseUrl = process.env.React_App_Baseurl;

const AboutCompany = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/AboutUs/all`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { AboutCompany };
