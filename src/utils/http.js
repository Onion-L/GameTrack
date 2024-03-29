import axios from "axios";

axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
