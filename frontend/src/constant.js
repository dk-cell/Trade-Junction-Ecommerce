import axios from "axios";
import Cookies from "universal-cookie";

// export const baseUrl = "";
// export const backendUrl = "http://localhost:8000/";

export const baseUrl = "https://tradejunction-backend.onrender.com/api/v2";
export const backendUrl = "https://tradejunction-backend.onrender.com/";

export const API = axios.create({ baseURL: "http://localhost:8000/api/v2" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token") || localStorage.getItem("seller_token")) {
    const token =
      `${JSON.parse(localStorage.getItem("token"))}` +
      " " +
      `${localStorage.getItem("seller_token")}`;
    console.log("tt->", token);
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// export const getAllItem = () => API.get("/product/get-all-products");
// export const getUser = ()=>API.get("api/v2/user/getuser")
