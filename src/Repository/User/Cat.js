/** @format */

import axios from "axios";

const BaseUrl = process.env.React_App_Baseurl;

const AllSubCat = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/SubCategory/all/Subcategory`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { AllSubCat };
