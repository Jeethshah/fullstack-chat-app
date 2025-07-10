import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://fullstack-chat-app-beza.onrender.com",
  withCredentials: true,
});

export { axiosInstance };