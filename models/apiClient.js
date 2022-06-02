import axios from "axios";
import ls from "local-storage";

const token = ls("token")

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default apiClient;