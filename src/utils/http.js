import axios from "axios";

axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("gt-user");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    const newToken = response.config.headers["Authorization"];
    if (newToken) {
      const token = newToken.split(" ")[1];
      localStorage.setItem("gt-user", token);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
