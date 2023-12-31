/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const AllBlogs = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Blog/all`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { AllBlogs };
