import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const fetchDefault = axios.create({
  baseURL: apiUrl,
});

export const fetchWithTokens = axios.create({
  baseURL: apiUrl,
});

export default fetchDefault;

fetchWithTokens.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
