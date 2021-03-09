import axios from "axios";

const fetchDefault = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default fetchDefault;
