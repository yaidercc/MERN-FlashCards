import axios from "axios";
import config from "../../public/config.json";

const instance = axios.create({
  baseURL: config.VITE_API_URL,
  headers:{
    "Content-Type": "application/json"
  }
});

// Interceptors

instance.interceptors.request.use(
  config => {
    config.withCredentials = true;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;