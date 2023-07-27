/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const FilterProducts = async (query) => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/Product/all/${query}`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

const getSingleProducts = async (id) => {
  try{
    const response = await axios.get(`${BaseUrl}api/v1/Product/${}`);
    return response.data.data;
  }catch(e) { 
    console.log(e)
  }
}

export { FilterProducts };