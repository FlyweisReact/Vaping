/** @format */

import axios from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";

const  = async () => {
  try {
    const response = await axios.get(`${BaseUrl}api/v1/ContactDetails/viewContactDetails`);
    return response.data.data;
  } catch (e) {
    console.log(e);
  }
};

export { ContactDetail };
