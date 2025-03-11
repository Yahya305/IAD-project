import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Get the token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
        }
        return config;
    }
);


export default apiClient;
