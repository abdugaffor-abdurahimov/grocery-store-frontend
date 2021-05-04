import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { apiUrl } from "./config/envVars";

// const apiUrl = process.env.REACT_APP_API_URL;
const client = axios.create({ baseURL: apiUrl });

client.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
		};
		return config;
	},
	(err: AxiosError) => {
		return Promise.reject(err);
	}
);

export default client;
