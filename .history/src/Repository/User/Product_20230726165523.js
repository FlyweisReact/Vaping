import axios  from "axios";

const BaseUrl = "https://krish-vapes-backend.vercel.app/";
const token = localStorage.getItem("Token");
const Auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};


const FilterProducts = async (payload) => {
    try{
        const response = await axios.get(`${BaseUrl}api/v1/Product/all/${pa?search=Vaping`)
    }catch(e) {
        console.log(e)
    }

}