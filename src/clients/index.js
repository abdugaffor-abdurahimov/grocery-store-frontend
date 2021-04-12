import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const fetchDefault = axios.create({
  baseURL: apiUrl,
});

export const fetchWithTokens = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
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

fetchWithTokens.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (error.message.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return fetchWithTokens
        .post("/users/refreshToken")
        .then((res) => {
          if (res.status === 200) {
            console.log("Token refreshed");
            return fetchWithTokens(originalRequest);
          }
        })
        .catch(() => {
          window.location.replace("/login");
        });
    }
  }
);
