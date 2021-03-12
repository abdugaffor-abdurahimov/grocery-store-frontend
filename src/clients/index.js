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
