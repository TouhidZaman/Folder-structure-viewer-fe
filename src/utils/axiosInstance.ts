import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_baseURL,
});

// axiosInstance.defaults.baseURL = 'http://localhost:5000/';

export default axiosInstance;
