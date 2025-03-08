import axios from "axios";
// axios is a js library that is used to amk requests to servers  from webbrowsers or node js
export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ?  "http://localhost:5001/api": "/api",
     withCredentials: true,
     
}) 