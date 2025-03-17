import axios from "axios";

const apiReq = axios.create({
    // baseURL: "",
    baseURL: "http://localhost:3001",
    withCredentials: false,
});

export default apiReq;